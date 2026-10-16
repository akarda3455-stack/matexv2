// fotoğrafsız soru modu: kategoriye göre soruları gemini'den üretir
// netlify ve vercel fonksiyonları bu dosyayı ortak kullanıyor

const KATEGORILER = {
    marvel: 'Marvel çizgi romanları, filmleri ve dizileri',
    dc: 'DC Comics çizgi romanları, filmleri ve dizileri',
    oyun: 'Video oyunları, oyun şirketleri ve e-spor',
    araba: 'Otomobiller, otomobil markaları ve modelleri, otomobil teknolojisi ve otomobil yarışları',
    motor: 'Motosikletler, motosiklet markaları ve modelleri, motosiklet yarışları',
    yemek: 'Türk ve dünya mutfağı, yemekler ve malzemeler',
    hayvan: 'Hayvanlar, türleri, yaşam alanları ve özellikleri',
    spor: 'Futbol dışındaki sporlar ve olimpiyatlar',
    teknoloji: 'Bilgisayarlar, internet, yazılım, telefonlar ve teknoloji şirketleri',
    genelkultur: 'Farklı konulardan karışık genel kültür',
    muzik: 'Türk ve dünya müziği, sanatçılar, çalgılar ve müzik terimleri',
    sinema: 'Türk ve dünya sineması, filmler, yönetmenler, oyuncular ve film ödülleri',
    bilim: 'Fizik, kimya, biyoloji ve bilim tarihi',
    tarih: 'Türk ve dünya tarihi',
    sanat: 'Resim, heykel, mimari, sanatçılar ve sanat akımları',
    astronomi: 'Astronomi, gök cisimleri ve uzay keşfi',
    edebiyat: 'Türk ve dünya edebiyatı, yazarlar, şairler ve eserler',
    cografya: 'Türkiye ve dünya coğrafyası, ülkeler, başkentler, dağlar ve nehirler',
    siyaset: 'Siyaset bilimi, yönetim biçimleri, uluslararası kuruluşlar ve siyasi düşünürler (güncel siyasetçiler ve partiler hariç)',
    saglik: 'İnsan vücudu, sağlık, beslenme ve ilk yardım',
    mitoloji: 'Yunan, Roma, İskandinav, Mısır, Türk ve diğer mitolojiler',
    anime: 'Anime ve manga',
    futbol: 'Türk ve dünya futbolu, kulüpler, oyuncular, turnuvalar ve kurallar',
    markalar: 'Dünyaca ünlü markalar, logolar, sloganlar ve şirketler',
    bayraklar: 'Ülke bayrakları, renkleri ve sembolleri',
    matematik: 'Matematik: hesaplama, geometri, sayılar ve ünlü matematikçiler',
    dizi: 'Türk ve yabancı televizyon dizileri',
    moda: 'Moda, moda markaları, tasarımcılar ve giyim terimleri',
    felsefe: 'Felsefe, filozoflar, felsefi akımlar ve kavramlar',
    doga: 'Doğa, bitkiler, ekoloji, iklim ve çevre'
};

const DILLER = { tr: 'Türkçe', en: 'İngilizce', de: 'Almanca', ru: 'Rusça', zh: 'Çince (basitleştirilmiş)', ja: 'Japonca', es: 'İspanyolca', ar: 'Arapça' };

const ZORLUKLAR = {
    kolay: 'kolay, çoğu kişinin bileceği temel bilgiler',
    orta: 'orta, konuyla biraz ilgilenenlerin bileceği bilgiler',
    zor: 'zor, konuya hâkim olanların bileceği ayrıntılı bilgiler'
};

const EN_FAZLA_SORU = 30;
const VARSAYILAN_MODEL = 'gemini-3.5-flash-lite';
const YASAK_SIKLAR = /^(hepsi|hiçbiri|hepsi doğru|hiçbiri doğru değil|yukarıdakilerin hepsi|all of the above|none of the above)$/i;

const SEMA = {
    type: 'object',
    properties: {
        sorular: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    soru: { type: 'string' },
                    dogru: { type: 'string' },
                    yanlislar: { type: 'array', items: { type: 'string' }, minItems: 4, maxItems: 4 },
                    aciklama: { type: 'string' }
                },
                required: ['soru', 'dogru', 'yanlislar', 'aciklama']
            }
        }
    },
    required: ['sorular']
};

function cevap(veri, durum = 200) {
    return new Response(JSON.stringify(veri), {
        status: durum,
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
    });
}

function hata(durum, mesaj) {
    const e = new Error(mesaj);
    e.durum = durum;
    return e;
}

// < ve > sayfada etiket gibi okunmasın diye benzer karakterlerle değişiyor
function temizle(metin, sinir) {
    return String(metin ?? '').replace(/</g, '＜').replace(/>/g, '＞').replace(/\s+/g, ' ').trim().slice(0, sinir);
}

const anahtarla = s => String(s).toLocaleLowerCase('tr').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

function istemiHazirla(kategori, zorluk, adet, dil, haric) {
    const satirlar = [
        'Bir bilgi yarışması için çoktan seçmeli sorular hazırla.',
        '',
        `Konu: ${KATEGORILER[kategori]}`,
        `Soru sayısı: ${adet}`,
        `Zorluk: ${ZORLUKLAR[zorluk]}`,
        `Dil: Soruları, şıkları ve açıklamaları ${DILLER[dil]} yaz.`,
        '',
        'Kurallar:',
        '- Her sorunun tek bir doğru cevabı ve tam dört yanlış şıkkı olsun. Yanlış şıklar kesinlikle yanlış ama inandırıcı olsun ve doğru cevapla aynı türden olsun (hepsi kişi, hepsi yıl gibi).',
        '- Sadece kesin ve kolayca doğrulanabilen bilgileri sor. Emin olmadığın bir bilgiyi kullanma.',
        '- Zamanla değişebilecek şeyleri sorma (şu anki başkan, en son şampiyon, rekorlar gibi). Tarihi belli olan geçmiş olaylar sorulabilir.',
        '- "Hepsi" ya da "Hiçbiri" gibi şıklar kullanma.',
        '- Cevabı soru metninde verme, parantez içinde ipucu yazma.',
        '- "En iyi", "en ünlü", "efsane" gibi kişiden kişiye değişen sorular sorma.',
        '- Sorular farklı alt konulardan olsun, aynı bilgiyi iki kez sorma.',
        '- Soru kısa ve anlaşılır olsun. Açıklama tek cümle olsun ve doğru cevabı desteklesin.',
        '- Cevabı şu JSON biçiminde ver: {"sorular":[{"soru":"","dogru":"","yanlislar":["","","",""],"aciklama":""}]}'
    ];
    if (haric.length) {
        satirlar.push('', 'Şu sorular daha önce soruldu, bunları tekrar sorma:');
        haric.forEach(s => satirlar.push(`- ${s}`));
    }
    return satirlar.join('\n');
}

async function geminiyeSor(anahtar, model, istem) {
    const adres = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
    // önce yeni, sonra eski json biçimi; ikisi de reddedilirse düz istek
    const bicimler = [
        { responseFormat: { text: { mimeType: 'application/json', schema: SEMA } } },
        { responseMimeType: 'application/json', responseJsonSchema: SEMA },
        {}
    ];
    let sonHata = null;
    for (const bicim of bicimler) {
        const yanit = await fetch(adres, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-goog-api-key': anahtar },
            body: JSON.stringify({
                contents: [{ role: 'user', parts: [{ text: istem }] }],
                generationConfig: { temperature: 0.8, maxOutputTokens: 16384, ...bicim }
            }),
            signal: AbortSignal.timeout(50000)
        });
        const veri = await yanit.json().catch(() => ({}));
        if (yanit.ok) return (veri.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('');

        const mesaj = String(veri.error?.message || '');
        if (yanit.status === 400 && !/api key/i.test(mesaj)) {
            sonHata = hata(400, mesaj);
            continue;
        }
        throw hata(yanit.status, mesaj);
    }
    throw sonHata;
}

function jsonCikar(metin) {
    const duz = metin.replace(/```(?:json)?/gi, '').trim();
    try {
        return JSON.parse(duz);
    } catch (e) {
        const bas = duz.indexOf('{'), son = duz.lastIndexOf('}');
        if (bas === -1 || son <= bas) return null;
        try { return JSON.parse(duz.slice(bas, son + 1)); } catch (e2) { return null; }
    }
}

function sorulariAyikla(liste, adet, haric) {
    const gorulen = new Set(haric.map(anahtarla));
    const sonuc = [];
    for (const ham of Array.isArray(liste) ? liste : []) {
        if (!ham || typeof ham !== 'object') continue;
        const soru = temizle(ham.soru, 300);
        const dogru = temizle(ham.dogru, 120);
        if (!soru || !dogru) continue;

        const siklar = [dogru];
        for (const y of Array.isArray(ham.yanlislar) ? ham.yanlislar : []) {
            const sik = temizle(y, 120);
            if (sik && !siklar.some(v => anahtarla(v) === anahtarla(sik))) siklar.push(sik);
        }
        // model bazen 3 yanlış şık veriyor, o zaman soru 4 şıkla gelir
        if (siklar.length < 4) continue;
        siklar.length = Math.min(siklar.length, 5);
        if (siklar.some(s => YASAK_SIKLAR.test(s))) continue;
        // cevap soru metninde geçiyorsa soru kendini ele veriyor
        if (dogru.length >= 4 && anahtarla(soru).includes(anahtarla(dogru))) continue;

        const k = anahtarla(soru);
        if (gorulen.has(k)) continue;
        gorulen.add(k);
        sonuc.push({ soru, dogru, yanlislar: siklar.slice(1), aciklama: temizle(ham.aciklama, 300) });
        if (sonuc.length === adet) break;
    }
    return sonuc;
}

export async function soruUret(istek, ortam) {
    if (istek.method !== 'POST') return cevap({ hata: 'Sadece POST isteği kabul ediliyor' }, 405);

    // başka sitelerin bu adresi kullanıp kotayı bitirmesini engelle
    const kaynak = istek.headers.get('origin');
    if (kaynak) {
        const kaynakHost = new URL(kaynak).host;
        const izinli = [new URL(istek.url).host, istek.headers.get('x-forwarded-host'), istek.headers.get('host')];
        if (!izinli.includes(kaynakHost)) return cevap({ hata: 'Bu adrese izin yok' }, 403);
    }

    let govde;
    try {
        govde = await istek.json();
    } catch (e) {
        return cevap({ hata: 'Geçersiz istek' }, 400);
    }

    const kategori = String(govde.kategori || '');
    if (!KATEGORILER[kategori]) return cevap({ hata: 'Bilinmeyen kategori' }, 400);
    const zorluk = ZORLUKLAR[govde.zorluk] ? govde.zorluk : 'orta';
    const dil = DILLER[govde.dil] ? govde.dil : 'tr';
    const adet = Math.min(EN_FAZLA_SORU, Math.max(1, parseInt(govde.adet, 10) || 10));
    const haric = (Array.isArray(govde.haric) ? govde.haric : []).slice(-40).map(s => temizle(s, 150)).filter(Boolean);

    const anahtar = ortam.GEMINI_API_KEY;
    if (!anahtar) return cevap({ hata: 'GEMINI_API_KEY tanımlı değil. Anahtarı Netlify ya da Vercel ortam değişkenlerine ekleyip siteyi yeniden yayınla.' }, 500);
    const model = ortam.GEMINI_MODEL || VARSAYILAN_MODEL;

    try {
        // birkaç soru elenebilir diye biraz fazla isteniyor
        const metin = await geminiyeSor(anahtar, model, istemiHazirla(kategori, zorluk, adet + 3, dil, haric));
        const veri = jsonCikar(metin);
        const sorular = sorulariAyikla(Array.isArray(veri) ? veri : veri?.sorular, adet, haric);
        if (!sorular.length) return cevap({ hata: 'Yapay zekâdan geçerli soru gelmedi' }, 502);
        return cevap({ sorular });
    } catch (e) {
        if (e.name === 'TimeoutError') return cevap({ hata: 'Yapay zekâ zamanında cevap vermedi' }, 504);
        if (e.durum === 429) return cevap({ hata: 'Yapay zekâ kotası doldu' }, 429);
        if (e.durum === 400 && /api key/i.test(e.message)) return cevap({ hata: 'GEMINI_API_KEY geçersiz' }, 500);
        if (e.durum === 403) return cevap({ hata: 'GEMINI_API_KEY bu model için yetkili değil' }, 500);
        if (e.durum === 404) return cevap({ hata: `Model bulunamadı: ${model}` }, 500);
        return cevap({ hata: 'Yapay zekâya ulaşılamadı' }, 502);
    }
}
