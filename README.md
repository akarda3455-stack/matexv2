# MATEX

Fotoğrafsız Soru modundaki sorular koda yazılı değil. Her oyunda seçilen kategoriye, zorluğa ve dile göre Google Gemini'den yeni sorular geliyor. Oyuncu 5 ile 30 arasında soru sayısı seçebiliyor.

## Klasörler

```
index.html                      site
css/style.css
js/                             oyun kodları
sunucu/soru-uret.js             soruları Gemini'den isteyen ortak kod
api/sorular.js                  Vercel fonksiyonu  (/api/sorular)
netlify/functions/sorular.js    Netlify fonksiyonu (/api/sorular)
netlify.toml, package.json      ayarlar
```

## 1. Gemini API anahtarı

1. https://aistudio.google.com/apikey adresine git, Google hesabınla giriş yap.
2. Kullanım şartlarını kabul et. İlk girişte AI Studio bir proje ve anahtar kendisi oluşturur. Oluşturmazsa "Create API key" düğmesine bas.
3. Anahtarı kopyala. Anahtar şifre gibidir: koda yazma, kimseyle paylaşma.

Google'ın kurallarına göre anahtarı alan kişi 18 yaşından büyük olmalı. Ayrıca Gemini, 18 yaş altının kullanması muhtemel sitelerde kullanılmamalı.

## 2. Siteyi yayınlama

Önce resimleri ve favicon dosyalarını bu klasöre, index.html'in yanına kopyala. Yayınlama siteyi baştan yükler, klasörde olmayan resim sitede de olmaz.

### Netlify (site adresi aynı kalır)

1. https://nodejs.org adresinden Node.js'i (LTS) kur.
2. Bu klasörde bir terminal aç. Windows 11: klasörde boş yere sağ tıkla > Terminalde aç. Windows 10: Shift + sağ tık > PowerShell penceresini burada aç.
3. Sırayla çalıştır:

```
npx netlify-cli login
npx netlify-cli link
npx netlify-cli env:set GEMINI_API_KEY "ANAHTARIN"
npx netlify-cli deploy --prod
```

`link` adımında var olan siteni seç. Anahtarı istersen Netlify panelinden de ekleyebilirsin: Project configuration > Environment variables.

Sürükle-bırak ile yükleme fonksiyonları yüklemez, o yüzden sorular gelmez. CLI yerine GitHub bağlantısı da kullanılabilir.

### Vercel

1. Klasörü GitHub'a yükle (çok dosya olduğu için GitHub Desktop kolaylık sağlar).
2. Vercel'de Add New > Project ile depoyu içe aktar.
3. Environment Variables kısmına `GEMINI_API_KEY` ekle ve Deploy'a bas.

## Bilmen gerekenler

- index.html'i bilgisayarda çift tıklayarak açarsan sorular gelmez, çünkü sorular sitenin sunucu fonksiyonundan geliyor.
- Hata ekranındaki küçük gri yazı sorunun nedenini söyler (anahtar yok, fonksiyon yüklenmemiş gibi).
- Her oyun 1 istek harcıyor. Ücretsiz kotada Flash-Lite için günde yaklaşık 500 istek var. Kota dolunca oyuncu "soru hakkı doldu" mesajı görür.
- Sunucu kodu bozuk, tekrar eden, "Hepsi" şıklı ya da cevabı soruda yazan soruları eliyor ama bilginin doğruluğunu kontrol edemiyor. Yapay zekâ nadiren yanlış bilgi verebilir.
- Aynı soruların tekrar gelmemesi için her kategorinin son 40 sorusu tarayıcıda saklanıp Gemini'ye "bunları sorma" diye gönderiliyor.
- Modeli değiştirmek istersen `GEMINI_MODEL` değişkenini ekle. Varsayılan `gemini-3.5-flash-lite`.
