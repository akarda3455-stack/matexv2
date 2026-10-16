// dil sistemi
let currentLanguage = 'tr';
let selectedLangForConfirm = null;

const T = {
    tr: {
        loading: "Sorular Hazırlanıyor...",
        bronz: "BRONZ", gumus: "GÜMÜŞ", altin: "ALTIN", elmas: "ELMAS",
        bronzDesc: "200 Puan", gumusDesc: "400 Puan", altinDesc: "600 Puan", elmasDesc: "800 Puan",
        toplamPuan: "TOPLAM PUAN",
        yapimcilar: "🎬 YAPIM EKİBİ", yapimciBtn: "Yapımcılar",
        guncellemeler: "Güncellemeler", yeni: "YENİ",
        guncellemeGecmisi: "📋 Güncelleme Geçmişi",
        kapat: "Kapat",
        sikayetOneri: "Şikayet / Öneri",
        gorisYazin: "Görüşlerinizi yazın...",
        gonder: "Gönder",
        feedbackSuccess: "✅ Geri bildiriminiz alındı!",
        yapimci: "Yapımcı:", yardimciYapimci: "Yardımcı Yapımcı:",
        sponsor: "Sponsor:", ortaklar: "Ortaklar:",
        dilSecTitle: "🌍 Dil Seçin",
        dilSecSubtitle: "Oyun dilinizi seçin",
        dilSecBtn: "Seç →",
        kaydet: "Kaydet", sesAcik: "Ses Açık", sesKapali: "Ses Kapalı", cevaplar: "Cevaplar:", hemenGoster: "⚡ Hemen Göster", sondaGoster: "🏁 Sonda Göster",
        profilSec: "Profil Seç",
        onayla: "Onayla",
        adSoyad: "👤 Ad Soyad", adPlaceholder: "Adınız Soyadınız",
        yas: "📅 Yaş (1-100)", yasPlaceholder: "Yaşınız",
        cinsiyet: "⚥ Cinsiyet",
        erkek: "👨 Erkek", kadin: "👩 Kadın", belirtmiyorum: "⚧ Belirtmiyorum",
        devamEt: "Devam Et →",
        nameError: "Lütfen adınızı girin!",
        ageError: "Lütfen yaşınızı girin!",
        ageRangeError: "Yaş 1-100 arası olmalı!",
        genderError: "Lütfen cinsiyet seçin!",
        oyunModu: "Oyun Modu",
        nasilOynamak: "Nasıl oynamak istersin?",
        fotografSiz: "Fotoğrafsız Soru",
        fotografSizDesc: "Yapay zekâ her oyunda yeni sorular hazırlar. 30 kategori, 5-30 soru.",
        fotografli: "Fotoğraflı Soru",
        fotografliDesc: "Görseli gör, ismi yaz. Karakter / logo / bayrak tahmin et.",
        profil: "Profil",
        modlar: "Modlar",
        kategoriSec: "Kategori Seç",
        zorlukSec: "Zorluk Seç →",
        zorlukSeviyesi: "Zorluk Seviyesi",
        kolay: "Kolay", orta: "Orta", zor: "Zor", suretsiz: "♾️ Süresiz",
        kategori: "Kategori",
        testeBasla: "🚀 Teste Başla",
        cik: "🚪 Çık",
        onceki: "← Önceki",
        bosBirak: "⏭️ Boş Bırak",
        sonraki: "Sonraki →",
        bosBirakilanDon: "↩️ Boş Bırakılan Soruya Dön",
        dogru: "Doğru",
        puan: "Puan",
        zekali: "Zekalı",
        dusuk: "😅 Düşük", ortaZeka: "🙂 Orta", ileri: "🤓 İleri",
        cokIleri: "🧠 Çok İleri", ultra: "👑 Ultra",
        yenidenBasla: "🔄 Yeniden Başla",
        testtenCik: "🚪 Testten Çık",
        testtenCikEmin: "Testten çıkmak istediğinize emin misiniz? İlerlemeniz kaybolacak.",
        evetCik: "Evet, Çık", iptal: "İptal",
        cevapYaz: "Cevabını yaz...",
        soruSayisiSec: "Soru sayısı seç",
        soruSayisiGirin: "Lütfen soru sayısı girin!",
        soruSayisiEnAz: "Soru sayısı en az 1 olmalı!",
        maksimumSoru: "Maksimum {0} soru seçebilirsin!",
        yas: "yaş",
        soru: "Soru",
        cevabiniz: "Cevabınız:",
        cevapsiz: "Cevapsız",
        sureDoldu: "Süre Doldu",
        bosBirakildi: "Boş Bırakıldı",
        dogruCevap: "Doğru:",
        harika: "Harika, doğru bildin!",
        birCevapYaz: "Bir cevap yaz veya Boş Bırak.",
        kategoriZorlukSec: "Kategori ve zorluk seçmelisin.",
        soruYok: "Bu kategoride henüz soru yok.",
        oyunBasladi: "Oyun başladı",
        yeniNesilQuiz: "✨ Yeni Nesil Quiz",
        matexIleTest: "MATEX ile kendini test et",
        profilOlustur: "Profilini oluştur, kategori seç, zorluk belirle ve hemen oyuna başla.",
        hizliBaslangic: "⚡ Hızlı Başlangıç",
        kategoriCount: "🧠 30 Kategori",
        fotografliKlasik: "🖼️ Fotoğraflı + Klasik",
        slogan: "\"Quizin ve Testin Harman Olduğu Yer\"",
        subtitle2Mod: "2 MOD • FOTOĞRAFLI + KLASİK QUIZ",
        maks: "maks",
        soruCount: "soru",
        emoji: "🎭 Emoji", galeri: "📁 Galeri",
        soruSayisi: "Soru Sayısı", sorularYuklenemedi: "Sorular yüklenemedi. İnternet bağlantını kontrol edip tekrar dene.",
        soruKotasiDoldu: "Yapay zekânın soru hakkı şimdilik doldu. Biraz sonra tekrar dene.", tekrarDene: "Tekrar Dene",
        sorularHazirlanamadi: "Sorular şu an hazırlanamadı. Biraz sonra tekrar dene."
    },
    en: {
        loading: "Preparing Questions...",
        bronz: "BRONZE", gumus: "SILVER", altin: "GOLD", elmas: "DIAMOND",
        bronzDesc: "200 Points", gumusDesc: "400 Points", altinDesc: "600 Points", elmasDesc: "800 Points",
        toplamPuan: "TOTAL POINTS",
        yapimcilar: "🎬 CREDITS", yapimciBtn: "Credits",
        guncellemeler: "Updates", yeni: "NEW",
        guncellemeGecmisi: "📋 Update History",
        kapat: "Close",
        sikayetOneri: "Feedback / Suggestion",
        gorisYazin: "Write your feedback...",
        gonder: "Send",
        feedbackSuccess: "✅ Your feedback has been received!",
        yapimci: "Producer:", yardimciYapimci: "Co-Producer:",
        sponsor: "Sponsor:", ortaklar: "Partners:",
        dilSecTitle: "🌍 Select Language",
        dilSecSubtitle: "Choose your game language",
        dilSecBtn: "Select →",
        kaydet: "Save", sesAcik: "Sound On", sesKapali: "Sound Off", cevaplar: "Answers:", hemenGoster: "⚡ Show Instantly", sondaGoster: "🏁 Show at End",
        profilSec: "Select Profile",
        onayla: "Confirm",
        adSoyad: "👤 Full Name", adPlaceholder: "Your Full Name",
        yas: "📅 Age (1-100)", yasPlaceholder: "Your Age",
        cinsiyet: "⚥ Gender",
        erkek: "👨 Male", kadin: "👩 Female", belirtmiyorum: "⚧ Prefer not to say",
        devamEt: "Continue →",
        nameError: "Please enter your name!",
        ageError: "Please enter your age!",
        ageRangeError: "Age must be between 1-100!",
        genderError: "Please select your gender!",
        oyunModu: "Game Mode",
        nasilOynamak: "How would you like to play?",
        fotografSiz: "Text Questions",
        fotografSizDesc: "AI prepares new questions every game. 30 categories, 5-30 questions.",
        fotografli: "Photo Questions",
        fotografliDesc: "See the image, type the name. Guess character / logo / flag.",
        profil: "Profile",
        modlar: "Modes",
        kategoriSec: "Select Category",
        zorlukSec: "Select Difficulty →",
        zorlukSeviyesi: "Difficulty Level",
        kolay: "Easy", orta: "Medium", zor: "Hard", suretsiz: "♾️ Unlimited",
        kategori: "Category",
        testeBasla: "🚀 Start Test",
        cik: "🚪 Exit",
        onceki: "← Previous",
        bosBirak: "⏭️ Skip",
        sonraki: "Next →",
        bosBirakilanDon: "↩️ Return to Skipped Question",
        dogru: "Correct",
        puan: "Points",
        zekali: "Intelligent",
        dusuk: "😅 Low", ortaZeka: "🙂 Medium", ileri: "🤓 Advanced",
        cokIleri: "🧠 Very Advanced", ultra: "👑 Ultra",
        yenidenBasla: "🔄 Restart",
        testtenCik: "🚪 Exit Test",
        testtenCikEmin: "Are you sure you want to exit? Your progress will be lost.",
        evetCik: "Yes, Exit", iptal: "Cancel",
        cevapYaz: "Type your answer...",
        soruSayisiSec: "Select number of questions",
        soruSayisiGirin: "Please enter number of questions!",
        soruSayisiEnAz: "Minimum 1 question!",
        maksimumSoru: "Maximum {0} questions!",
        yas: "years",
        soru: "Question",
        cevabiniz: "Your answer:",
        cevapsiz: "No answer",
        sureDoldu: "Time's up",
        bosBirakildi: "Skipped",
        dogruCevap: "Correct:",
        harika: "Great, correct!",
        birCevapYaz: "Type an answer or Skip.",
        kategoriZorlukSec: "You must select a category and difficulty.",
        soruYok: "No questions in this category yet.",
        oyunBasladi: "Game started",
        yeniNesilQuiz: "✨ Next-Gen Quiz",
        matexIleTest: "Test yourself with MATEX",
        profilOlustur: "Create your profile, choose a category, set difficulty and start playing.",
        hizliBaslangic: "⚡ Quick Start",
        kategoriCount: "🧠 30 Categories",
        fotografliKlasik: "🖼️ Photo + Classic",
        slogan: "\"Where Quizzes and Tests Unite\"",
        subtitle2Mod: "2 MODES • PHOTO + CLASSIC QUIZ",
        maks: "max",
        soruCount: "questions",
        emoji: "🎭 Emoji", galeri: "📁 Gallery",
        soruSayisi: "Questions", sorularYuklenemedi: "Questions could not be loaded. Check your connection and try again.",
        soruKotasiDoldu: "The AI question limit has been reached for now. Please try again later.", tekrarDene: "Try Again",
        sorularHazirlanamadi: "Questions couldn't be prepared right now. Please try again later."
    },
    de: {
        loading: "Fragen werden vorbereitet...",
        bronz: "BRONZE", gumus: "SILBER", altin: "GOLD", elmas: "DIAMANT",
        bronzDesc: "200 Punkte", gumusDesc: "400 Punkte", altinDesc: "600 Punkte", elmasDesc: "800 Punkte",
        toplamPuan: "GESAMTPUNKTE",
        yapimcilar: "🎬 MITWIRKENDE", yapimciBtn: "Mitwirkende",
        guncellemeler: "Updates", yeni: "NEU",
        guncellemeGecmisi: "📋 Update-Verlauf",
        kapat: "Schließen",
        sikayetOneri: "Feedback / Vorschlag",
        gorisYazin: "Schreiben Sie Ihr Feedback...",
        gonder: "Senden",
        feedbackSuccess: "✅ Ihr Feedback wurde erhalten!",
        yapimci: "Produzent:", yardimciYapimci: "Co-Produzent:",
        sponsor: "Sponsor:", ortaklar: "Partner:",
        dilSecTitle: "🌍 Sprache wählen",
        dilSecSubtitle: "Wählen Sie Ihre Spielsprache",
        dilSecBtn: "Auswählen →",
        kaydet: "Speichern", sesAcik: "Ton An", sesKapali: "Ton Aus", cevaplar: "Antworten:", hemenGoster: "⚡ Sofort zeigen", sondaGoster: "🏁 Am Ende zeigen",
        profilSec: "Profil wählen",
        onayla: "Bestätigen",
        adSoyad: "👤 Vollständiger Name", adPlaceholder: "Ihr vollständiger Name",
        yas: "📅 Alter (1-100)", yasPlaceholder: "Ihr Alter",
        cinsiyet: "⚥ Geschlecht",
        erkek: "👨 Männlich", kadin: "👩 Weiblich", belirtmiyorum: "⚧ Keine Angabe",
        devamEt: "Weiter →",
        nameError: "Bitte geben Sie Ihren Namen ein!",
        ageError: "Bitte geben Sie Ihr Alter ein!",
        ageRangeError: "Alter muss zwischen 1-100 liegen!",
        genderError: "Bitte wählen Sie Ihr Geschlecht!",
        oyunModu: "Spielmodus",
        nasilOynamak: "Wie möchten Sie spielen?",
        fotografSiz: "Textfragen",
        fotografSizDesc: "Die KI erstellt in jedem Spiel neue Fragen. 30 Kategorien, 5-30 Fragen.",
        fotografli: "Foto-Fragen",
        fotografliDesc: "Bild ansehen, Namen eingeben. Figur / Logo / Flagge erraten.",
        profil: "Profil",
        modlar: "Modi",
        kategoriSec: "Kategorie wählen",
        zorlukSec: "Schwierigkeit wählen →",
        zorlukSeviyesi: "Schwierigkeitsgrad",
        kolay: "Leicht", orta: "Mittel", zor: "Schwer", suretsiz: "♾️ Zeitlos",
        kategori: "Kategorie",
        testeBasla: "🚀 Test starten",
        cik: "🚪 Beenden",
        onceki: "← Zurück",
        bosBirak: "⏭️ Überspringen",
        sonraki: "Weiter →",
        bosBirakilanDon: "↩️ Zurück zur übersprungenen Frage",
        dogru: "Richtig",
        puan: "Punkte",
        zekali: "Intelligent",
        dusuk: "😅 Niedrig", ortaZeka: "🙂 Mittel", ileri: "🤓 Fortgeschritten",
        cokIleri: "🧠 Sehr fortgeschritten", ultra: "👑 Ultra",
        yenidenBasla: "🔄 Neustart",
        testtenCik: "🚪 Test beenden",
        testtenCikEmin: "Möchten Sie wirklich beenden? Ihr Fortschritt geht verloren.",
        evetCik: "Ja, beenden", iptal: "Abbrechen",
        cevapYaz: "Antwort eingeben...",
        soruSayisiSec: "Anzahl der Fragen wählen",
        soruSayisiGirin: "Bitte Anzahl der Fragen eingeben!",
        soruSayisiEnAz: "Mindestens 1 Frage!",
        maksimumSoru: "Maximal {0} Fragen!",
        yas: "Jahre",
        soru: "Frage",
        cevabiniz: "Ihre Antwort:",
        cevapsiz: "Keine Antwort",
        sureDoldu: "Zeit abgelaufen",
        bosBirakildi: "Übersprungen",
        dogruCevap: "Richtig:",
        harika: "Super, richtig!",
        birCevapYaz: "Geben Sie eine Antwort ein oder überspringen.",
        kategoriZorlukSec: "Sie müssen eine Kategorie und Schwierigkeit wählen.",
        soruYok: "In dieser Kategorie noch keine Fragen.",
        oyunBasladi: "Spiel gestartet",
        yeniNesilQuiz: "✨ Next-Gen Quiz",
        matexIleTest: "Testen Sie sich mit MATEX",
        profilOlustur: "Erstellen Sie Ihr Profil, wählen Sie eine Kategorie und starten Sie.",
        hizliBaslangic: "⚡ Schnellstart",
        kategoriCount: "🧠 30 Kategorien",
        fotografliKlasik: "🖼️ Foto + Klassisch",
        slogan: "\"Wo Quiz und Test sich vereinen\"",
        subtitle2Mod: "2 MODI • FOTO + KLASSISCHES QUIZ",
        maks: "max",
        soruCount: "Fragen",
        emoji: "🎭 Emoji", galeri: "📁 Galerie",
        soruSayisi: "Anzahl Fragen", sorularYuklenemedi: "Die Fragen konnten nicht geladen werden. Prüfe deine Verbindung und versuche es erneut.",
        soruKotasiDoldu: "Das Fragenlimit der KI ist vorerst erreicht. Versuche es später erneut.", tekrarDene: "Erneut versuchen",
        sorularHazirlanamadi: "Die Fragen konnten gerade nicht erstellt werden. Versuche es später erneut."
    },
    ru: {
        loading: "Подготовка вопросов...",
        bronz: "БРОНЗА", gumus: "СЕРЕБРО", altin: "ЗОЛОТО", elmas: "АЛМАЗ",
        bronzDesc: "200 Очков", gumusDesc: "400 Очков", altinDesc: "600 Очков", elmasDesc: "800 Очков",
        toplamPuan: "ОБЩИЕ БАЛЛЫ",
        yapimcilar: "🎬 АВТОРЫ", yapimciBtn: "Авторы",
        guncellemeler: "Обновления", yeni: "НОВОЕ",
        guncellemeGecmisi: "📋 История обновлений",
        kapat: "Закрыть",
        sikayetOneri: "Отзыв / Предложение",
        gorisYazin: "Напишите ваш отзыв...",
        gonder: "Отправить",
        feedbackSuccess: "✅ Ваш отзыв получен!",
        yapimci: "Продюсер:", yardimciYapimci: "Со-продюсер:",
        sponsor: "Спонсор:", ortaklar: "Партнёры:",
        dilSecTitle: "🌍 Выберите язык",
        dilSecSubtitle: "Выберите язык игры",
        dilSecBtn: "Выбрать →",
        kaydet: "Сохранить", sesAcik: "Звук вкл", sesKapali: "Звук выкл", cevaplar: "Ответы:", hemenGoster: "⚡ Сразу", sondaGoster: "🏁 В конце",
        profilSec: "Выбрать профиль",
        onayla: "Подтвердить",
        adSoyad: "👤 Полное имя", adPlaceholder: "Ваше полное имя",
        yas: "📅 Возраст (1-100)", yasPlaceholder: "Ваш возраст",
        cinsiyet: "⚥ Пол",
        erkek: "👨 Мужской", kadin: "👩 Женский", belirtmiyorum: "⚧ Не указывать",
        devamEt: "Продолжить →",
        nameError: "Пожалуйста, введите имя!",
        ageError: "Пожалуйста, введите возраст!",
        ageRangeError: "Возраст должен быть от 1 до 100!",
        genderError: "Пожалуйста, выберите пол!",
        oyunModu: "Режим игры",
        nasilOynamak: "Как хотите играть?",
        fotografSiz: "Текстовые вопросы",
        fotografSizDesc: "ИИ готовит новые вопросы в каждой игре. 30 категорий, 5-30 вопросов.",
        fotografli: "Фото-вопросы",
        fotografliDesc: "Смотрите изображение, введите имя. Угадайте персонажа / логотип / флаг.",
        profil: "Профиль",
        modlar: "Режимы",
        kategoriSec: "Выбор категории",
        zorlukSec: "Выбор сложности →",
        zorlukSeviyesi: "Уровень сложности",
        kolay: "Легкий", orta: "Средний", zor: "Сложный", suretsiz: "♾️ Без времени",
        kategori: "Категория",
        testeBasla: "🚀 Начать тест",
        cik: "🚪 Выход",
        onceki: "← Назад",
        bosBirak: "⏭️ Пропустить",
        sonraki: "Далее →",
        bosBirakilanDon: "↩️ Вернуться к пропущенному",
        dogru: "Правильно",
        puan: "Баллы",
        zekali: "Интеллект",
        dusuk: "😅 Низкий", ortaZeka: "🙂 Средний", ileri: "🤓 Продвинутый",
        cokIleri: "🧠 Очень продвинутый", ultra: "👑 Ультра",
        yenidenBasla: "🔄 Заново",
        testtenCik: "🚪 Выйти из теста",
        testtenCikEmin: "Вы уверены, что хотите выйти? Прогресс будет потерян.",
        evetCik: "Да, выйти", iptal: "Отмена",
        cevapYaz: "Введите ответ...",
        soruSayisiSec: "Выберите количество вопросов",
        soruSayisiGirin: "Введите количество вопросов!",
        soruSayisiEnAz: "Минимум 1 вопрос!",
        maksimumSoru: "Максимум {0} вопросов!",
        yas: "лет",
        soru: "Вопрос",
        cevabiniz: "Ваш ответ:",
        cevapsiz: "Нет ответа",
        sureDoldu: "Время вышло",
        bosBirakildi: "Пропущено",
        dogruCevap: "Правильно:",
        harika: "Отлично, правильно!",
        birCevapYaz: "Введите ответ или пропустите.",
        kategoriZorlukSec: "Выберите категорию и сложность.",
        soruYok: "В этой категории пока нет вопросов.",
        oyunBasladi: "Игра началась",
        yeniNesilQuiz: "✨ Квиз нового поколения",
        matexIleTest: "Проверьте себя с MATEX",
        profilOlustur: "Создайте профиль, выберите категорию и начните игру.",
        hizliBaslangic: "⚡ Быстрый старт",
        kategoriCount: "🧠 30 Категорий",
        fotografliKlasik: "🖼️ Фото + Классика",
        slogan: "\"Где тесты и квизы объединяются\"",
        subtitle2Mod: "2 РЕЖИМА • ФОТО + КЛАССИЧЕСКИЙ КВИЗ",
        maks: "макс",
        soruCount: "вопросов",
        emoji: "🎭 Эмодзи", galeri: "📁 Галерея",
        soruSayisi: "Количество вопросов", sorularYuklenemedi: "Не удалось загрузить вопросы. Проверьте подключение и попробуйте снова.",
        soruKotasiDoldu: "Лимит вопросов ИИ пока исчерпан. Попробуйте позже.", tekrarDene: "Повторить",
        sorularHazirlanamadi: "Сейчас не удалось подготовить вопросы. Попробуйте позже."
    },
    zh: {
        loading: "正在准备题目...",
        bronz: "铜牌", gumus: "银牌", altin: "金牌", elmas: "钻石",
        bronzDesc: "200 分", gumusDesc: "400 分", altinDesc: "600 分", elmasDesc: "800 分",
        toplamPuan: "总分",
        yapimcilar: "🎬 制作团队", yapimciBtn: "制作团队",
        guncellemeler: "更新", yeni: "新",
        guncellemeGecmisi: "📋 更新历史",
        kapat: "关闭",
        sikayetOneri: "反馈 / 建议",
        gorisYazin: "写下您的反馈...",
        gonder: "发送",
        feedbackSuccess: "✅ 您的反馈已收到！",
        yapimci: "制作人:", yardimciYapimci: "联合制作人:",
        sponsor: "赞助商:", ortaklar: "合作伙伴:",
        dilSecTitle: "🌍 选择语言",
        dilSecSubtitle: "选择您的游戏语言",
        dilSecBtn: "选择 →",
        kaydet: "保存", sesAcik: "声音开", sesKapali: "声音关", cevaplar: "答案:", hemenGoster: "⚡ 即时显示", sondaGoster: "🏁 最后显示",
        profilSec: "选择头像",
        onayla: "确认",
        adSoyad: "👤 姓名", adPlaceholder: "您的姓名",
        yas: "📅 年龄 (1-100)", yasPlaceholder: "您的年龄",
        cinsiyet: "⚥ 性别",
        erkek: "👨 男", kadin: "👩 女", belirtmiyorum: "⚧ 不愿透露",
        devamEt: "继续 →",
        nameError: "请输入您的姓名！",
        ageError: "请输入您的年龄！",
        ageRangeError: "年龄必须在1-100之间！",
        genderError: "请选择性别！",
        oyunModu: "游戏模式",
        nasilOynamak: "您想怎么玩？",
        fotografSiz: "文字题目",
        fotografSizDesc: "AI 每局都会出新题。30个分类，5-30题。",
        fotografli: "图片题目",
        fotografliDesc: "看图猜名字。猜角色 / 标志 / 旗帜。",
        profil: "个人资料",
        modlar: "模式",
        kategoriSec: "选择分类",
        zorlukSec: "选择难度 →",
        zorlukSeviyesi: "难度等级",
        kolay: "简单", orta: "中等", zor: "困难", suretsiz: "♾️ 无限时",
        kategori: "分类",
        testeBasla: "🚀 开始测试",
        cik: "🚪 退出",
        onceki: "← 上一题",
        bosBirak: "⏭️ 跳过",
        sonraki: "下一题 →",
        bosBirakilanDon: "↩️ 返回跳过的题目",
        dogru: "正确",
        puan: "分数",
        zekali: "智力",
        dusuk: "😅 初级", ortaZeka: "🙂 中等", ileri: "🤓 高级",
        cokIleri: "🧠 非常高级", ultra: "👑 超级",
        yenidenBasla: "🔄 重新开始",
        testtenCik: "🚪 退出测试",
        testtenCikEmin: "确定要退出吗？您的进度将丢失。",
        evetCik: "是的，退出", iptal: "取消",
        cevapYaz: "输入答案...",
        soruSayisiSec: "选择题数",
        soruSayisiGirin: "请输入题目数量！",
        soruSayisiEnAz: "至少1题！",
        maksimumSoru: "最多 {0} 题！",
        yas: "岁",
        soru: "题目",
        cevabiniz: "您的答案:",
        cevapsiz: "未回答",
        sureDoldu: "时间到",
        bosBirakildi: "已跳过",
        dogruCevap: "正确答案:",
        harika: "太棒了，答对了！",
        birCevapYaz: "输入答案或跳过。",
        kategoriZorlukSec: "请选择分类和难度。",
        soruYok: "此分类暂无题目。",
        oyunBasladi: "游戏开始",
        yeniNesilQuiz: "✨ 新一代测验",
        matexIleTest: "用 MATEX 测试自己",
        profilOlustur: "创建个人资料，选择分类，开始游戏。",
        hizliBaslangic: "⚡ 快速开始",
        kategoriCount: "🧠 30个分类",
        fotografliKlasik: "🖼️ 图片 + 经典",
        slogan: "\"测验与测试的融合之地\"",
        subtitle2Mod: "2种模式 • 图片 + 经典测验",
        maks: "最多",
        soruCount: "题目",
        emoji: "🎭 表情", galeri: "📁 相册",
        soruSayisi: "题目数量", sorularYuklenemedi: "题目加载失败。请检查网络连接后重试。",
        soruKotasiDoldu: "AI 出题次数暂时已用完，请稍后再试。", tekrarDene: "重试",
        sorularHazirlanamadi: "暂时无法生成题目，请稍后再试。"
    },
    ja: {
        loading: "質問を準備中...",
        bronz: "ブロンズ", gumus: "シルバー", altin: "ゴールド", elmas: "ダイヤモンド",
        bronzDesc: "200 ポイント", gumusDesc: "400 ポイント", altinDesc: "600 ポイント", elmasDesc: "800 ポイント",
        toplamPuan: "合計ポイント",
        yapimcilar: "🎬 制作チーム", yapimciBtn: "制作チーム",
        guncellemeler: "アップデート", yeni: "新",
        guncellemeGecmisi: "📋 アップデート履歴",
        kapat: "閉じる",
        sikayetOneri: "フィードバック / 提案",
        gorisYazin: "フィードバックを入力...",
        gonder: "送信",
        feedbackSuccess: "✅ フィードバックを受け取りました！",
        yapimci: "プロデューサー:", yardimciYapimci: "共同プロデューサー:",
        sponsor: "スポンサー:", ortaklar: "パートナー:",
        dilSecTitle: "🌍 言語を選択",
        dilSecSubtitle: "ゲーム言語を選択してください",
        dilSecBtn: "選択 →",
        kaydet: "保存", sesAcik: "サウンドオン", sesKapali: "サウンドオフ", cevaplar: "回答:", hemenGoster: "⚡ すぐ表示", sondaGoster: "🏁 最後に表示",
        profilSec: "プロフィール選択",
        onayla: "確認",
        adSoyad: "👤 氏名", adPlaceholder: "お名前",
        yas: "📅 年齢 (1-100)", yasPlaceholder: "年齢",
        cinsiyet: "⚥ 性別",
        erkek: "👨 男性", kadin: "👩 女性", belirtmiyorum: "⚧ 回答しない",
        devamEt: "続ける →",
        nameError: "名前を入力してください！",
        ageError: "年齢を入力してください！",
        ageRangeError: "年齢は1〜100の間で入力してください！",
        genderError: "性別を選択してください！",
        oyunModu: "ゲームモード",
        nasilOynamak: "どのようにプレイしますか？",
        fotografSiz: "テキスト問題",
        fotografSizDesc: "AIが毎回新しい問題を作ります。30カテゴリ、5〜30問。",
        fotografli: "写真問題",
        fotografliDesc: "画像を見て名前を入力。キャラクター / ロゴ / 旗を当てよう。",
        profil: "プロフィール",
        modlar: "モード",
        kategoriSec: "カテゴリ選択",
        zorlukSec: "難易度選択 →",
        zorlukSeviyesi: "難易度レベル",
        kolay: "簡単", orta: "普通", zor: "難しい", suretsiz: "♾️ 無制限",
        kategori: "カテゴリ",
        testeBasla: "🚀 テスト開始",
        cik: "🚪 終了",
        onceki: "← 前へ",
        bosBirak: "⏭️ スキップ",
        sonraki: "次へ →",
        bosBirakilanDon: "↩️ スキップした問題に戻る",
        dogru: "正解",
        puan: "ポイント",
        zekali: "知能",
        dusuk: "😅 初級", ortaZeka: "🙂 中級", ileri: "🤓 上級",
        cokIleri: "🧠 非常に上級", ultra: "👑 ウルトラ",
        yenidenBasla: "🔄 やり直す",
        testtenCik: "🚪 テストを終了",
        testtenCikEmin: "終了してもよろしいですか？進行状況は失われます。",
        evetCik: "はい、終了", iptal: "キャンセル",
        cevapYaz: "回答を入力...",
        soruSayisiSec: "問題数を選択",
        soruSayisiGirin: "問題数を入力してください！",
        soruSayisiEnAz: "最低1問！",
        maksimumSoru: "最大 {0} 問！",
        yas: "歳",
        soru: "問題",
        cevabiniz: "あなたの答え:",
        cevapsiz: "回答なし",
        sureDoldu: "時間切れ",
        bosBirakildi: "スキップ済み",
        dogruCevap: "正解:",
        harika: "素晴らしい、正解！",
        birCevapYaz: "答えを入力するかスキップしてください。",
        kategoriZorlukSec: "カテゴリと難易度を選択してください。",
        soruYok: "このカテゴリにはまだ問題がありません。",
        oyunBasladi: "ゲーム開始",
        yeniNesilQuiz: "✨ 次世代クイズ",
        matexIleTest: "MATEXで自分をテスト",
        profilOlustur: "プロフィールを作成し、カテゴリを選んで始めましょう。",
        hizliBaslangic: "⚡ クイックスタート",
        kategoriCount: "🧠 30カテゴリ",
        fotografliKlasik: "🖼️ 写真 + クラシック",
        slogan: "\"クイズとテストが一つになる場所\"",
        subtitle2Mod: "2モード • 写真 + クラシッククイズ",
        maks: "最大",
        soruCount: "問",
        emoji: "🎭 絵文字", galeri: "📁 ギャラリー",
        soruSayisi: "問題数", sorularYuklenemedi: "問題を読み込めませんでした。接続を確認して、もう一度お試しください。",
        soruKotasiDoldu: "AIの出題上限に達しました。しばらくしてからもう一度お試しください。", tekrarDene: "再試行",
        sorularHazirlanamadi: "現在、問題を作成できませんでした。しばらくしてからもう一度お試しください。"
    },
    es: {
        loading: "Preparando preguntas...",
        bronz: "BRONCE", gumus: "PLATA", altin: "ORO", elmas: "DIAMANTE",
        bronzDesc: "200 Puntos", gumusDesc: "400 Puntos", altinDesc: "600 Puntos", elmasDesc: "800 Puntos",
        toplamPuan: "PUNTOS TOTALES",
        yapimcilar: "🎬 CRÉDITOS", yapimciBtn: "Créditos",
        guncellemeler: "Actualizaciones", yeni: "NUEVO",
        guncellemeGecmisi: "📋 Historial de actualizaciones",
        kapat: "Cerrar",
        sikayetOneri: "Comentario / Sugerencia",
        gorisYazin: "Escribe tu comentario...",
        gonder: "Enviar",
        feedbackSuccess: "✅ ¡Tu comentario ha sido recibido!",
        yapimci: "Productor:", yardimciYapimci: "Co-Productor:",
        sponsor: "Patrocinador:", ortaklar: "Socios:",
        dilSecTitle: "🌍 Seleccionar idioma",
        dilSecSubtitle: "Elige el idioma del juego",
        dilSecBtn: "Seleccionar →",
        kaydet: "Guardar", sesAcik: "Sonido on", sesKapali: "Sonido off", cevaplar: "Respuestas:", hemenGoster: "⚡ Mostrar al instante", sondaGoster: "🏁 Mostrar al final",
        profilSec: "Seleccionar perfil",
        onayla: "Confirmar",
        adSoyad: "👤 Nombre completo", adPlaceholder: "Tu nombre completo",
        yas: "📅 Edad (1-100)", yasPlaceholder: "Tu edad",
        cinsiyet: "⚥ Género",
        erkek: "👨 Masculino", kadin: "👩 Femenino", belirtmiyorum: "⚧ Prefiero no decir",
        devamEt: "Continuar →",
        nameError: "¡Por favor ingresa tu nombre!",
        ageError: "¡Por favor ingresa tu edad!",
        ageRangeError: "¡La edad debe estar entre 1-100!",
        genderError: "¡Por favor selecciona tu género!",
        oyunModu: "Modo de juego",
        nasilOynamak: "¿Cómo te gustaría jugar?",
        fotografSiz: "Preguntas de texto",
        fotografSizDesc: "La IA prepara preguntas nuevas en cada partida. 30 categorías, 5-30 preguntas.",
        fotografli: "Preguntas con foto",
        fotografliDesc: "Mira la imagen, escribe el nombre. Adivina personaje / logo / bandera.",
        profil: "Perfil",
        modlar: "Modos",
        kategoriSec: "Seleccionar categoría",
        zorlukSec: "Seleccionar dificultad →",
        zorlukSeviyesi: "Nivel de dificultad",
        kolay: "Fácil", orta: "Medio", zor: "Difícil", suretsiz: "♾️ Sin límite",
        kategori: "Categoría",
        testeBasla: "🚀 Iniciar prueba",
        cik: "🚪 Salir",
        onceki: "← Anterior",
        bosBirak: "⏭️ Omitir",
        sonraki: "Siguiente →",
        bosBirakilanDon: "↩️ Volver a pregunta omitida",
        dogru: "Correcto",
        puan: "Puntos",
        zekali: "Inteligencia",
        dusuk: "😅 Bajo", ortaZeka: "🙂 Medio", ileri: "🤓 Avanzado",
        cokIleri: "🧠 Muy avanzado", ultra: "👑 Ultra",
        yenidenBasla: "🔄 Reiniciar",
        testtenCik: "🚪 Salir de la prueba",
        testtenCikEmin: "¿Estás seguro de que quieres salir? Tu progreso se perderá.",
        evetCik: "Sí, salir", iptal: "Cancelar",
        cevapYaz: "Escribe tu respuesta...",
        soruSayisiSec: "Seleccionar número de preguntas",
        soruSayisiGirin: "¡Ingresa el número de preguntas!",
        soruSayisiEnAz: "¡Mínimo 1 pregunta!",
        maksimumSoru: "¡Máximo {0} preguntas!",
        yas: "años",
        soru: "Pregunta",
        cevabiniz: "Tu respuesta:",
        cevapsiz: "Sin respuesta",
        sureDoldu: "Tiempo agotado",
        bosBirakildi: "Omitido",
        dogruCevap: "Correcta:",
        harika: "¡Genial, correcto!",
        birCevapYaz: "Escribe una respuesta o omite.",
        kategoriZorlukSec: "Debes seleccionar una categoría y dificultad.",
        soruYok: "Aún no hay preguntas en esta categoría.",
        oyunBasladi: "Juego iniciado",
        yeniNesilQuiz: "✨ Quiz de nueva generación",
        matexIleTest: "Ponte a prueba con MATEX",
        profilOlustur: "Crea tu perfil, elige una categoría y empieza a jugar.",
        hizliBaslangic: "⚡ Inicio rápido",
        kategoriCount: "🧠 30 Categorías",
        fotografliKlasik: "🖼️ Foto + Clásico",
        slogan: "\"Donde los quizzes y tests se unen\"",
        subtitle2Mod: "2 MODOS • FOTO + QUIZ CLÁSICO",
        maks: "máx",
        soruCount: "preguntas",
        emoji: "🎭 Emoji", galeri: "📁 Galería",
        soruSayisi: "Preguntas", sorularYuklenemedi: "No se pudieron cargar las preguntas. Revisa tu conexión e inténtalo de nuevo.",
        soruKotasiDoldu: "Se alcanzó el límite de preguntas de la IA por ahora. Inténtalo más tarde.", tekrarDene: "Reintentar",
        sorularHazirlanamadi: "No se pudieron preparar las preguntas ahora. Inténtalo más tarde."
    },
    ar: {
        loading: "...جاري تحضير الأسئلة",
        bronz: "برونز", gumus: "فضة", altin: "ذهب", elmas: "ألماس",
        bronzDesc: "200 نقطة", gumusDesc: "400 نقطة", altinDesc: "600 نقطة", elmasDesc: "800 نقطة",
        toplamPuan: "مجموع النقاط",
        yapimcilar: "🎬 الفريق المنتج", yapimciBtn: "الفريق المنتج",
        guncellemeler: "تحديثات", yeni: "جديد",
        guncellemeGecmisi: "📋 سجل التحديثات",
        kapat: "إغلاق",
        sikayetOneri: "ملاحظات / اقتراحات",
        gorisYazin: "...اكتب ملاحظاتك",
        gonder: "إرسال",
        feedbackSuccess: "✅ تم استلام ملاحظاتك!",
        yapimci: ":المنتج", yardimciYapimci: ":المنتج المشارك",
        sponsor: ":الراعي", ortaklar: ":الشركاء",
        dilSecTitle: "🌍 اختر اللغة",
        dilSecSubtitle: "اختر لغة اللعبة",
        dilSecBtn: "← اختيار",
        kaydet: "حفظ", sesAcik: "صوت مفتوح", sesKapali: "صوت مغلق", cevaplar: "الإجابات:", hemenGoster: "⚡ عرض فوري", sondaGoster: "🏁 عرض بالنهاية",
        profilSec: "اختر الملف الشخصي",
        onayla: "تأكيد",
        adSoyad: "👤 الاسم الكامل", adPlaceholder: "اسمك الكامل",
        yas: "📅 العمر (1-100)", yasPlaceholder: "عمرك",
        cinsiyet: "⚥ الجنس",
        erkek: "👨 ذكر", kadin: "👩 أنثى", belirtmiyorum: "⚧ لا أود التحديد",
        devamEt: "← متابعة",
        nameError: "!الرجاء إدخال اسمك",
        ageError: "!الرجاء إدخال عمرك",
        ageRangeError: "!يجب أن يكون العمر بين 1-100",
        genderError: "!الرجاء اختيار الجنس",
        oyunModu: "وضع اللعب",
        nasilOynamak: "?كيف تريد اللعب",
        fotografSiz: "أسئلة نصية",
        fotografSizDesc: "يُعِدّ الذكاء الاصطناعي أسئلة جديدة في كل لعبة. 30 فئة، 5-30 سؤالًا.",
        fotografli: "أسئلة مصورة",
        fotografliDesc: "انظر الصورة واكتب الاسم. خمّن الشخصية / الشعار / العلم.",
        profil: "الملف الشخصي",
        modlar: "الأوضاع",
        kategoriSec: "اختر الفئة",
        zorlukSec: "← اختر الصعوبة",
        zorlukSeviyesi: "مستوى الصعوبة",
        kolay: "سهل", orta: "متوسط", zor: "صعب", suretsiz: "♾️ بلا حدود",
        kategori: "الفئة",
        testeBasla: "🚀 ابدأ الاختبار",
        cik: "🚪 خروج",
        onceki: "→ السابق",
        bosBirak: "⏭️ تخطي",
        sonraki: "→ التالي",
        bosBirakilanDon: "↩️ العودة للسؤال المتخطى",
        dogru: "صحيح",
        puan: "نقاط",
        zekali: "ذكاء",
        dusuk: "😅 منخفض", ortaZeka: "🙂 متوسط", ileri: "🤓 متقدم",
        cokIleri: "🧠 متقدم جداً", ultra: "👑 فائق",
        yenidenBasla: "🔄 إعادة البدء",
        testtenCik: "🚪 الخروج من الاختبار",
        testtenCikEmin: "هل أنت متأكد من الخروج؟ سيتم فقدان تقدمك.",
        evetCik: "نعم، خروج", iptal: "إلغاء",
        cevapYaz: "...اكتب إجابتك",
        soruSayisiSec: "اختر عدد الأسئلة",
        soruSayisiGirin: "!الرجاء إدخال عدد الأسئلة",
        soruSayisiEnAz: "!سؤال واحد على الأقل",
        maksimumSoru: "!حد أقصى {0} سؤال",
        yas: "سنة",
        soru: "سؤال",
        cevabiniz: ":إجابتك",
        cevapsiz: "بدون إجابة",
        sureDoldu: "انتهى الوقت",
        bosBirakildi: "تم التخطي",
        dogruCevap: ":الصحيح",
        harika: "!ممتاز، إجابة صحيحة",
        birCevapYaz: "اكتب إجابة أو تخطى.",
        kategoriZorlukSec: "يجب اختيار فئة وصعوبة.",
        soruYok: ".لا توجد أسئلة في هذه الفئة بعد",
        oyunBasladi: "بدأت اللعبة",
        yeniNesilQuiz: "✨ اختبار الجيل الجديد",
        matexIleTest: "اختبر نفسك مع MATEX",
        profilOlustur: "أنشئ ملفك الشخصي واختر فئة وابدأ اللعب.",
        hizliBaslangic: "⚡ بدء سريع",
        kategoriCount: "🧠 30 فئة",
        fotografliKlasik: "🖼️ صور + كلاسيكي",
        slogan: "\"حيث تجتمع الاختبارات\"",
        subtitle2Mod: "وضعان • صور + اختبار كلاسيكي",
        maks: "حد أقصى",
        soruCount: "أسئلة",
        emoji: "🎭 إيموجي", galeri: "📁 معرض",
        soruSayisi: "عدد الأسئلة", sorularYuklenemedi: "تعذّر تحميل الأسئلة. تحقّق من اتصالك وحاول مرة أخرى.",
        soruKotasiDoldu: "تم الوصول إلى حد أسئلة الذكاء الاصطناعي حاليًا. حاول لاحقًا.", tekrarDene: "أعد المحاولة",
        sorularHazirlanamadi: "تعذّر تجهيز الأسئلة الآن. حاول لاحقًا."
    }
};

function t(key) {
    const lang = T[currentLanguage] || T['tr'];
    return lang[key] || T['tr'][key] || key;
}

function selectLanguage(langCode) {
    selectedLangForConfirm = langCode;
    document.querySelectorAll('.language-card').forEach(c => c.classList.remove('selected'));
    const el = document.getElementById('lang_' + langCode);
    if (el) el.classList.add('selected');
    document.getElementById('langNextBtn').disabled = false;
}

function confirmLanguage() {
    if (!selectedLangForConfirm) return;
    currentLanguage = selectedLangForConfirm;
    localStorage.setItem('matex_language', currentLanguage);
    applyLanguage();
    document.getElementById('languageScreen').style.display = 'none';
    document.getElementById('profileScreen').style.display = 'block';
    setTimeout(() => {
        if (soundEnabled && !isInTest && !musicPlaying) {
            try {
                audioCtx.resume().then(() => startBgMusic());
            } catch (e) {
                document.addEventListener('click', function resumeMusic() {
                    if (soundEnabled && !isInTest && !musicPlaying) {
                        audioCtx.resume().then(() => startBgMusic());
                    }
                    document.removeEventListener('click', resumeMusic);
                }, { once: true });
            }
        }
    }, 500);
}

function applyLanguage() {
    const isRTL = currentLanguage === 'ar';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    const loadingEl = document.querySelector('.loading-text');
    if (loadingEl) loadingEl.textContent = t('loading');

    const sloganEl = document.querySelector('.slogan');
    if (sloganEl) sloganEl.textContent = t('slogan');
    const subtitle2Mod = document.querySelectorAll('.subtitle');
    if (subtitle2Mod.length > 0) subtitle2Mod[0].textContent = t('subtitle2Mod');

    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.textContent = t('yeniNesilQuiz');
    const heroH1 = document.querySelector('.profile-hero h1');
    if (heroH1) heroH1.textContent = t('matexIleTest');
    const heroP = document.querySelector('.profile-hero p');
    if (heroP) heroP.textContent = t('profilOlustur');
    const pills = document.querySelectorAll('.feature-pill');
    if (pills[0]) pills[0].textContent = t('hizliBaslangic');
    if (pills[1]) pills[1].textContent = t('kategoriCount');
    if (pills[2]) pills[2].textContent = t('fotografliKlasik');

    const formLabels = document.querySelectorAll('#profileScreen label');
    if (formLabels[0]) formLabels[0].textContent = t('adSoyad');
    if (formLabels[1]) formLabels[1].textContent = t('yas');
    if (formLabels[2]) formLabels[2].textContent = t('cinsiyet');

    document.getElementById('fullNameInput').placeholder = t('adPlaceholder');
    document.getElementById('ageInputDisplay').placeholder = t('yasPlaceholder');

    document.getElementById('genderErkek').textContent = t('erkek');
    document.getElementById('genderKadin').textContent = t('kadin');
    document.getElementById('genderYok').textContent = t('belirtmiyorum');

    const continueBtn = document.querySelector('#profileScreen .primary-btn');
    if (continueBtn) continueBtn.textContent = t('devamEt');

    const avatarBtns = document.querySelectorAll('.avatar-btn');
    if (avatarBtns[0]) avatarBtns[0].textContent = t('emoji');
    if (avatarBtns[1]) avatarBtns[1].textContent = t('galeri');

    const avatarModalH2 = document.querySelector('#avatarModal h2');
    if (avatarModalH2) avatarModalH2.textContent = t('profilSec');
    const avatarConfirmBtn = document.querySelector('#avatarModal .primary-btn');
    if (avatarConfirmBtn) avatarConfirmBtn.textContent = t('onayla');

    const modeLogoText = document.querySelector('#modeScreen .logo-text');
    if (modeLogoText) modeLogoText.textContent = t('oyunModu');
    const modeSubtitle = document.querySelector('#modeScreen .subtitle');
    if (modeSubtitle) modeSubtitle.textContent = t('nasilOynamak');
    const modeTextTitle = document.querySelector('#modeTextCard .mode-card-title');
    if (modeTextTitle) modeTextTitle.textContent = t('fotografSiz');
    const modeTextDesc = document.querySelector('#modeTextCard .mode-card-desc');
    if (modeTextDesc) modeTextDesc.textContent = t('fotografSizDesc');
    const modePhotoTitle = document.querySelector('#modePhotoCard .mode-card-title');
    if (modePhotoTitle) modePhotoTitle.textContent = t('fotografli');
    const modePhotoDesc = document.querySelector('#modePhotoCard .mode-card-desc');
    if (modePhotoDesc) modePhotoDesc.textContent = t('fotografliDesc');
    const modeNextBtn = document.getElementById('modeNextBtn');
    if (modeNextBtn) modeNextBtn.textContent = t('devamEt');

    const modeBackBtns = document.querySelectorAll('#modeScreen .back-btn');
    modeBackBtns.forEach(btn => {
        if (btn.textContent.includes('Profil') || btn.textContent.includes('profil') || btn.textContent.includes('👤')) btn.textContent = '← ' + t('profil');
    });

    const catLogoText = document.querySelector('#categoryScreen .logo-text');
    if (catLogoText) catLogoText.textContent = t('kategoriSec');
    const catNextBtn = document.getElementById('categoryNextBtn');
    if (catNextBtn) catNextBtn.textContent = t('zorlukSec');

    const diffLogoText = document.querySelector('#difficultyScreen .logo-text');
    if (diffLogoText) diffLogoText.textContent = t('zorlukSeviyesi');
    const diffStartBtn = document.getElementById('difficultyNextBtn');
    if (diffStartBtn) diffStartBtn.textContent = t('testeBasla');

    const testExitBtn = document.querySelector('#testScreen .skip-btn');
    if (testExitBtn) testExitBtn.textContent = t('cik');

    const photoExitBtn = document.querySelector('#photoTestScreen .skip-btn');
    if (photoExitBtn) photoExitBtn.textContent = t('cik');
    const photoAnswerInput = document.getElementById('photoAnswerInput');
    if (photoAnswerInput) photoAnswerInput.placeholder = t('cevapYaz');

    document.querySelector('.exit-confirm-box h3').textContent = t('testtenCik');
    document.querySelector('.exit-confirm-box p').textContent = t('testtenCikEmin');
    document.querySelector('.exit-confirm-btn.yes').textContent = t('evetCik');
    document.querySelector('.exit-confirm-btn.no').textContent = t('iptal');

    document.querySelectorAll('.t-dogru-label').forEach(el => el.textContent = t('dogru'));
    document.querySelectorAll('.t-puan-label').forEach(el => el.textContent = t('puan'));

    const resultRestartBtns = document.querySelectorAll('.screen[style*="display:none"] .primary-btn, #resultScreen .primary-btn, #photoResultScreen .primary-btn');
    resultRestartBtns.forEach(btn => { if (btn.textContent.includes('Yeniden') || btn.textContent.includes('Restart') || btn.textContent.includes('Neustart') || btn.textContent.includes('重新') || btn.textContent.includes('やり') || btn.textContent.includes('Reiniciar') || btn.textContent.includes('إعادة') || btn.textContent.includes('🔄')) btn.textContent = t('yenidenBasla'); });

    const testPrevBtn = document.getElementById('prevBtn');
    if (testPrevBtn) testPrevBtn.textContent = t('onceki');
    const testSkipBtn = document.getElementById('skipBtn');
    if (testSkipBtn) testSkipBtn.textContent = t('bosBirak');
    const testNextBtn = document.getElementById('testNextBtn');
    if (testNextBtn) testNextBtn.textContent = t('sonraki');
    const testReturnBtn = document.getElementById('returnSkippedBtn');
    if (testReturnBtn) testReturnBtn.textContent = t('bosBirakilanDon');

    const photoPrevBtn = document.getElementById('photoPrevBtn');
    if (photoPrevBtn) photoPrevBtn.textContent = t('onceki');
    const photoSkipBtn = document.getElementById('photoSkipBtn');
    if (photoSkipBtn) photoSkipBtn.textContent = t('bosBirak');
    const photoNextBtn = document.getElementById('photoNextBtn');
    if (photoNextBtn) photoNextBtn.textContent = t('sonraki');
    const photoReturnBtn = document.getElementById('photoReturnSkippedBtn');
    if (photoReturnBtn) photoReturnBtn.textContent = t('bosBirakilanDon');

    document.querySelectorAll('.back-btn').forEach(btn => {
        const txt = btn.textContent;
        if (txt.includes('Profil') || txt.includes('profil')) btn.textContent = '← ' + t('profil');
        else if (txt.includes('Mod') || txt.includes('mod') || txt.includes('Modlar') || txt.includes('Mode')) btn.textContent = '🎮 ' + t('modlar');
        else if (txt.includes('Kategori') || txt.includes('kategori') || txt.includes('ategor')) btn.textContent = '📋 ' + t('kategori');
        else if (txt.includes('Zorluk') || txt.includes('zorluk') || txt.includes('Difficult')) btn.textContent = '← ' + t('zorlukSeviyesi');
        else if (txt.includes('Modlar') || txt.includes('Mode')) btn.textContent = '← ' + t('modlar');
    });

    const diffBackBtn = document.querySelector('#difficultyScreen .back-btn');
    if (diffBackBtn) diffBackBtn.textContent = '📋 ' + t('kategori');
    const photoDiffBackBtn = document.querySelector('#photoDifficultyScreen .back-btn');
    if (photoDiffBackBtn) photoDiffBackBtn.textContent = '← ' + t('kategori');

    const langLabel = document.getElementById('langDropdownLabel');
    if (langLabel) langLabel.textContent = '🌍 ' + t('dilSecTitle').replace('🌍 ', '');

    const soundLabel = document.getElementById('soundLabel');
    if (soundLabel) soundLabel.textContent = soundEnabled ? t('sesAcik') : t('sesKapali');

    const ansLabel = document.getElementById('answerModeLabel');
    if (ansLabel) ansLabel.textContent = '📋 ' + t('cevaplar');
    const ansInstant = document.getElementById('ansModeInstant');
    if (ansInstant) ansInstant.textContent = t('hemenGoster');
    const ansEnd = document.getElementById('ansModeEnd');
    if (ansEnd) ansEnd.textContent = t('sondaGoster');
    const soruSayisiLabel = document.getElementById('soruSayisiLabel');
    if (soruSayisiLabel) soruSayisiLabel.textContent = '🔢 ' + t('soruSayisi') + ':';
    const loadingCancelBtn = document.getElementById('loadingCancelBtn');
    if (loadingCancelBtn) loadingCancelBtn.textContent = '← ' + t('iptal');
    const loadingRetryBtn = document.getElementById('loadingRetryBtn');
    if (loadingRetryBtn) loadingRetryBtn.textContent = '🔄 ' + t('tekrarDene');

    const photoAnsLabel = document.getElementById('photoAnswerModeLabel');
    if (photoAnsLabel) photoAnsLabel.textContent = '📋 ' + t('cevaplar');
    const photoAnsInst = document.getElementById('photoAnsModeInstant');
    if (photoAnsInst) photoAnsInst.textContent = t('hemenGoster');
    const photoAnsEnd = document.getElementById('photoAnsModeEnd');
    if (photoAnsEnd) photoAnsEnd.textContent = t('sondaGoster');

    const langSaveBtn = document.getElementById('langSaveBtn');
    if (langSaveBtn && !langSaveBtn.disabled) langSaveBtn.textContent = '💾 ' + t('kaydet');

    const ptsLabel = document.getElementById('rankPtsPerLabel');
    if (ptsLabel) ptsLabel.textContent = t('kolay') + ': 10p • ' + t('orta') + ': 20p • ' + t('zor') + ': 30p';

    const rankTitle = document.getElementById('rankDropdownTitle');
    if (rankTitle) rankTitle.textContent = t('bronz') + ' / ' + t('gumus') + ' / ' + t('altin') + ' / ' + t('elmas');

    updateRankDisplay();

}

(function () {
    const saved = localStorage.getItem('matex_language');
    if (saved && T[saved]) {
        currentLanguage = saved;
        selectedLangForConfirm = saved;
    }
})();

let totalRankPoints = parseInt(localStorage.getItem('matex_totalPoints') || '0', 10) || 0;
const RANK_THRESHOLDS = { bronz: 200, gumus: 400, altin: 600, elmas: 800 };
const RANK_ICONS = { bronz: '🥉', gumus: '🥈', altin: '🥇', elmas: '💎' };
const POINTS_PER_DIFFICULTY = { kolay: 10, orta: 20, zor: 30 };

function toggleRankDropdown() {
    document.getElementById('rankDropdown').classList.toggle('show');
}
document.addEventListener('click', (e) => {
    if (!e.target.closest('#rankSystemLeft')) {
        const dd = document.getElementById('rankDropdown');
        if (dd) dd.classList.remove('show');
    }
    if (!e.target.closest('.lang-dropdown-wrapper')) {
        const lp = document.getElementById('langDropdownPanel');
        if (lp) lp.classList.remove('show');
    }
});

function toggleLangDropdown() {
    document.getElementById('langDropdownPanel').classList.toggle('show');
}

let pendingLang = null;
const LANG_FLAGS = { tr: '🇹🇷', en: '🇬🇧', de: '🇩🇪', ru: '🇷🇺', zh: '🇨🇳', ja: '🇯🇵', es: '🇪🇸', ar: '🇸🇦' };
const LANG_NAMES = { tr: 'Türkçe', en: 'English', de: 'Deutsch', ru: 'Русский', zh: '中文', ja: '日本語', es: 'Español', ar: 'العربية' };

function selectLangOption(langCode) {
    pendingLang = langCode;
    document.querySelectorAll('.lang-dropdown-item').forEach(el => {
        el.classList.toggle('selected', el.getAttribute('data-lang') === langCode);
    });
    const saveBtn = document.getElementById('langSaveBtn');
    if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.textContent = '💾 ' + (T[langCode] && T[langCode].kaydet || 'Kaydet');
    }
}

function saveLanguage() {
    if (!pendingLang) return;
    currentLanguage = pendingLang;
    localStorage.setItem('matex_language', pendingLang);
    applyLanguage();
    document.getElementById('langDropdownFlag').textContent = LANG_FLAGS[pendingLang] || '🌍';
    document.getElementById('langDropdownName').textContent = LANG_NAMES[pendingLang] || pendingLang;
    document.getElementById('langDropdownPanel').classList.remove('show');
    pendingLang = null;
}

function applyLangDisplay(langCode) {
    document.getElementById('langDropdownFlag').textContent = LANG_FLAGS[langCode] || '🌍';
    document.getElementById('langDropdownName').textContent = LANG_NAMES[langCode] || langCode;
    document.querySelectorAll('.lang-dropdown-item').forEach(el => {
        el.classList.toggle('selected', el.getAttribute('data-lang') === langCode);
    });
}

function getCurrentRank() {
    if (totalRankPoints >= RANK_THRESHOLDS.elmas) return 'elmas';
    if (totalRankPoints >= RANK_THRESHOLDS.altin) return 'altin';
    if (totalRankPoints >= RANK_THRESHOLDS.gumus) return 'gumus';
    if (totalRankPoints >= RANK_THRESHOLDS.bronz) return 'bronz';
    return 'bronz';
}

function updateRankDisplay() {
    const tp = totalRankPoints;
    document.getElementById('totalRankPoints').textContent = tp;
    const _spd = document.getElementById('shopPointsDisplay');
    if (_spd) _spd.textContent = tp;
    const rank = getCurrentRank();

    document.getElementById('rankCapsuleIcon').textContent = RANK_ICONS[rank];
    const rankNames = { bronz: t('bronz'), gumus: t('gumus'), altin: t('altin'), elmas: t('elmas') };
    document.getElementById('rankCapsuleName').textContent = rankNames[rank] || rank.toUpperCase();
    document.getElementById('rankCapsuleName').style.color = rank === 'bronz' ? '#cd7f32' : rank === 'gumus' ? '#c0c0c0' : rank === 'altin' ? '#ffd700' : '#00d2ff';
    document.getElementById('rankPtsLabel').textContent = t('toplamPuan');

    const ranks = ['bronz', 'gumus', 'altin', 'elmas'];
    const thresholds = [RANK_THRESHOLDS.bronz, RANK_THRESHOLDS.gumus, RANK_THRESHOLDS.altin, RANK_THRESHOLDS.elmas];
    const dropIds = ['rankDropBronz', 'rankDropGumus', 'rankDropAltin', 'rankDropElmas'];
    const barIds = ['rankBarBronz', 'rankBarGumus', 'rankBarAltin', 'rankBarElmas'];

    ranks.forEach((r, i) => {
        const el = document.getElementById(dropIds[i]);
        if (!el) return;
        const threshold = thresholds[i];
        const prevThreshold = i > 0 ? thresholds[i - 1] : 0;
        const progress = Math.min(100, Math.max(0, ((tp - prevThreshold) / (threshold - prevThreshold)) * 100));
        const bar = document.getElementById(barIds[i]);
        if (bar) bar.style.width = (tp >= threshold ? 100 : progress) + '%';

        el.classList.remove('active', 'locked');
        if (tp >= threshold) {
            el.classList.add('active');
        } else {
            el.classList.add('locked');
        }
    });

    const descTexts = { bronz: t('bronzDesc'), gumus: t('gumusDesc'), altin: t('altinDesc'), elmas: t('elmasDesc') };
    document.getElementById('rankDropBronzReq').textContent = descTexts.bronz;
    document.getElementById('rankDropGumusReq').textContent = descTexts.gumus;
    document.getElementById('rankDropAltinReq').textContent = descTexts.altin;
    document.getElementById('rankDropElmasReq').textContent = descTexts.elmas;
}
function addPoints(p) { totalRankPoints += p; localStorage.setItem('matex_totalPoints', totalRankPoints); updateRankDisplay(); }

function toggleAgeScroll() { const s = document.getElementById('ageScroll'); if (!s.classList.contains('show')) { let o = ''; for (let i = 1; i <= 100; i++) o += `<div class="age-option" onclick="selectAge(${i})">${i}</div>`; s.innerHTML = o; } s.classList.toggle('show'); }
window.selectAge = function (a) { document.getElementById('ageInput').value = a; document.getElementById('ageInputDisplay').value = a; document.getElementById('ageScroll').classList.remove('show'); };
document.addEventListener('click', (e) => { if (!e.target.closest('.age-selector')) document.getElementById('ageScroll')?.classList.remove('show'); });

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('dblclick', e => { if (e.target.closest && (e.target.closest('img') || e.target.closest('.category-card') || e.target.closest('.mode-card'))) e.preventDefault(); });
document.addEventListener('keydown', e => { if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) e.preventDefault(); });
document.addEventListener('selectstart', function (e) {
    const t = e.target;
    if (t && t.closest && (t.closest('input') || t.closest('textarea'))) return;
    e.preventDefault();
});
document.addEventListener('copy', function (e) {
    const t = e.target;
    if (t && t.closest && (t.closest('input') || t.closest('textarea'))) return;
    e.preventDefault();
});
document.addEventListener('cut', function (e) {
    const t = e.target;
    if (t && t.closest && (t.closest('input') || t.closest('textarea'))) return;
    e.preventDefault();
});

// ses
let soundEnabled = true;
let musicPlaying = false;
let musicInterval = null;
let isInTest = false;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// arka plan müziği
function startBgMusic() {
    if (!soundEnabled || musicPlaying || isInTest) return;
    musicPlaying = true;
    const notes = getActiveMusicNotes();
    let noteIdx = 0;

    function playNote() {
        if (!soundEnabled || !musicPlaying || isInTest) return;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.value = notes[noteIdx % notes.length];
            gain.gain.value = 0.04;
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
            osc2.type = 'triangle';
            osc2.frequency.value = notes[noteIdx % notes.length] * 0.5;
            gain2.gain.value = 0.02;
            gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.7);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.6);
            osc2.start();
            osc2.stop(audioCtx.currentTime + 0.7);
            noteIdx++;
        } catch (e) { }
    }

    playNote();
    musicInterval = setInterval(playNote, getActiveMusicInterval());
}

function stopBgMusic() {
    musicPlaying = false;
    if (musicInterval) {
        clearInterval(musicInterval);
        musicInterval = null;
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundToggleBtn');
    const icon = document.getElementById('soundIcon');
    const label = document.getElementById('soundLabel');
    if (soundEnabled) {
        btn.classList.remove('muted');
        icon.textContent = '🔊';
        label.textContent = t('sesAcik');
        if (!isInTest) startBgMusic();
    } else {
        btn.classList.add('muted');
        icon.textContent = '🔇';
        label.textContent = t('sesKapali');
        stopBgMusic();
    }
    localStorage.setItem('matex_sound', soundEnabled ? '1' : '0');
}

function playTone(freq, duration, type) {
    if (!soundEnabled) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = type || 'sine';
        osc.frequency.value = freq;
        gain.gain.value = 0.15;
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) { }
}

function playCorrectSound() {
    playTone(880, 0.15, 'sine');
    setTimeout(() => playTone(1100, 0.12, 'sine'), 120);
    setTimeout(() => playTone(1320, 0.2, 'sine'), 240);
    setTimeout(() => playTone(1760, 0.3, 'sine'), 360);
}

function playWrongSound() {
    playTone(180, 0.12, 'square');
    setTimeout(() => playTone(150, 0.12, 'square'), 130);
    setTimeout(() => playTone(120, 0.2, 'square'), 260);
}

function playClickSound() {
    playTone(660, 0.04, 'sine');
}

// tıklama sesi
document.addEventListener('click', function (e) {
    if (isInTest || !soundEnabled) return;
    const target = e.target;
    if (target.closest('button') || target.closest('.category-card') || target.closest('.difficulty-card') ||
        target.closest('.option-btn') || target.closest('.nav-btn') || target.closest('.back-btn') ||
        target.closest('.primary-btn') || target.closest('.mode-card') || target.closest('.language-card') ||
        target.closest('.lang-dropdown-item') || target.closest('.answer-mode-option') ||
        target.closest('.rank-capsule') || target.closest('.social-btn') || target.closest('.avatar-btn') ||
        target.closest('.gender-option') || target.closest('.avatar-option') || target.closest('.sound-toggle-btn')) {
        playClickSound();
    }
}, true);

(function () {
    const saved = localStorage.getItem('matex_sound');
    if (saved === '0') {
        soundEnabled = false;
        setTimeout(() => {
            const btn = document.getElementById('soundToggleBtn');
            const icon = document.getElementById('soundIcon');
            const label = document.getElementById('soundLabel');
            if (btn) btn.classList.add('muted');
            if (icon) icon.textContent = '🔇';
            if (label) label.textContent = '🔇';
        }, 100);
    }
})();

function getGenderBaseTheme() {
    return secilenCinsiyet === 'erkek' ? 'theme-male' : secilenCinsiyet === 'kadin' ? 'theme-female' : 'theme-space';
}

function changeTheme(catId) {
    const bg = document.getElementById('animatedBg'), cont = document.getElementById('animationContainer');
    bg.className = 'animated-bg';
    const map = { 'araba': 'theme-araba', 'motor': 'theme-motor', 'marvel': 'theme-marvel', 'dc': 'theme-dc', 'dckarakterleri': 'theme-dc', 'oyun': 'theme-oyun', 'oyunlar': 'theme-oyun', 'yemek': 'theme-yemek', 'hayvan': 'theme-hayvan', 'spor': 'theme-spor', 'teknoloji': 'theme-teknoloji', 'genelkultur': 'theme-genelkultur', 'muzik': 'theme-muzik', 'sinema': 'theme-sinema', 'bilim': 'theme-bilim', 'tarih': 'theme-tarih', 'sanat': 'theme-sanat', 'astronomi': 'theme-astronomi', 'edebiyat': 'theme-edebiyat', 'cografya': 'theme-cografya', 'siyaset': 'theme-siyaset', 'saglik': 'theme-saglik', 'mitoloji': 'theme-mitoloji', 'anime': 'theme-anime', 'futbol': 'theme-futbol', 'markalar': 'theme-markalar', 'bayraklar': 'theme-bayraklar', 'matematik': 'theme-matematik', 'dizi': 'theme-dizi', 'moda': 'theme-moda', 'felsefe': 'theme-felsefe', 'doga': 'theme-doga', 'emoji': 'theme-emoji', 'icecek': 'theme-icecek', 'youtuber': 'theme-youtuber', 'yayinci': 'theme-yayinci' };
    const themeClass = map[catId] || getGenderBaseTheme();
    bg.classList.add(themeClass); cont.innerHTML = '';
    if (catId === 'araba') { for (let i = 0; i < 8; i++) { let c = document.createElement('div'); c.className = 'car-animation'; c.textContent = ['🏎️', '🚗', '🚙', '🚕', '🏎️', '🚓'][i % 6]; c.style.top = (5 + i * 12) + '%'; c.style.animationDelay = (i * 1.5) + 's'; c.style.animationDuration = (7 + Math.random() * 5) + 's'; cont.appendChild(c); } }
    else if (catId === 'motor') { for (let i = 0; i < 8; i++) { let c = document.createElement('div'); c.className = 'car-animation'; c.textContent = ['🏍️', '🛵', '🏍️', '🛵', '🏍️', '🛵'][i % 6]; c.style.top = (5 + i * 12) + '%'; c.style.animationDelay = (i * 1.5) + 's'; cont.appendChild(c); } }
    else if (catId === 'marvel') { ['🦸', '🕷️', '🔨', '🛡️', '💪', '🏹', '🦾', '⚡'].forEach((h, i) => { let d = document.createElement('div'); d.className = 'marvel-hero'; d.textContent = h; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; cont.appendChild(d); }); }
    else if (catId === 'dc' || catId === 'dckarakterleri') { ['🦇', '🦸‍♂️', '🃏', '🐧', '⚡', '🌊', '🏹', '💚'].forEach((h, i) => { let d = document.createElement('div'); d.className = 'dc-hero'; d.textContent = h; d.style.left = (5 + i * 12) + '%'; d.style.top = (15 + (i % 3) * 25) + '%'; cont.appendChild(d); }); }
    else if (catId === 'oyun' || catId === 'oyunlar') { ['🎮', '🕹️', '👾', '🎯', '🎲', '♟️', '🎰', '🎳'].forEach((c, i) => { let d = document.createElement('div'); d.className = 'game-char'; d.textContent = c; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 4) * 20) + '%'; cont.appendChild(d); }); }
    else if (catId === 'yemek') { ['🍕', '🍔', '🌮', '🍣', '🍜', '🍰', '🍦', '🥗'].forEach((f, i) => { let d = document.createElement('div'); d.className = 'food-item'; d.textContent = f; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 30) + '%'; cont.appendChild(d); }); }
    else if (catId === 'hayvan') { ['🦁', '🐘', '🦒', '🐒', '🦓', '🐅', '🦌', '🐪'].forEach((a, i) => { let d = document.createElement('div'); d.className = 'animal-item'; d.textContent = a; d.style.top = (10 + i * 10) + '%'; d.style.animationDelay = (i * 1.2) + 's'; cont.appendChild(d); }); }
    else if (catId === 'spor') { ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🥎'].forEach((s, i) => { let d = document.createElement('div'); d.className = 'sport-item'; d.textContent = s; d.style.left = (5 + i * 12) + '%'; cont.appendChild(d); }); }
    else if (catId === 'teknoloji') { ['📱', '💻', '🖥️', '⌚', '📷', '🎧', '🖨️', '📡'].forEach((t, i) => { let d = document.createElement('div'); d.className = 'tech-item'; d.textContent = t; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 30) + '%'; cont.appendChild(d); }); }
    else if (catId === 'muzik') { ['🎵', '🎶', '🎼', '🎹', '🎸', '🎺', '🎷', '🥁'].forEach((m, i) => { let d = document.createElement('div'); d.className = 'music-note'; d.textContent = m; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.6) + 's'; cont.appendChild(d); }); }
    else if (catId === 'sinema') { ['🎬', '🎥', '📽️', '🎞️', '🍿', '🎭', '🎫', '⭐'].forEach((f, i) => { let d = document.createElement('div'); d.className = 'film-strip'; d.textContent = f; d.style.top = (5 + i * 12) + '%'; d.style.animationDelay = (i * 1) + 's'; d.style.animationDuration = (5 + Math.random() * 4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'bilim') { ['⚛️', '🔬', '🔭', '🧪', '🧬', '📡', '🧲', '💡'].forEach((b, i) => { let d = document.createElement('div'); d.className = 'atom'; d.textContent = b; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.8) + 's'; cont.appendChild(d); }); }
    else if (catId === 'tarih') { ['📜', '🏛️', '⚔️', '🛡️', '👑', '📿', '🏺', '🔱'].forEach((t, i) => { let d = document.createElement('div'); d.className = 'scroll'; d.textContent = t; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.7) + 's'; cont.appendChild(d); }); }
    else if (catId === 'sanat') { ['🎨', '🖌️', '🖼️', '🎭', '✏️', '📐', '✂️', '🖍️'].forEach((s, i) => { let d = document.createElement('div'); d.className = 'paint-item'; d.textContent = s; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.5) + 's'; cont.appendChild(d); }); }
    else if (catId === 'astronomi') { ['☄️', '🪐', '🌌', '🔭', '🚀', '⭐', '🌙', '🛸'].forEach((a, i) => { let d = document.createElement('div'); d.className = 'astro-item'; d.textContent = a; d.style.left = (5 + i * 12) + '%'; d.style.top = (8 + (i % 4) * 20) + '%'; d.style.animationDelay = (i * 0.55) + 's'; cont.appendChild(d); }); for (let i = 0; i < 40; i++) { let s = document.createElement('div'); s.className = 'star'; s.style.width = Math.random() * 3 + 1 + 'px'; s.style.height = s.style.width; s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%'; cont.appendChild(s); } }
    else if (catId === 'edebiyat') { ['📚', '📖', '✍️', '📝', '🪶', '📜', '📕', '📗'].forEach((b, i) => { let d = document.createElement('div'); d.className = 'book-item'; d.textContent = b; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.45) + 's'; cont.appendChild(d); }); }
    else if (catId === 'cografya') { ['🌍', '🗺️', '🧭', '⛰️', '🏝️', '🌋', '🏞️', '🌐'].forEach((g, i) => { let d = document.createElement('div'); d.className = 'geo-item'; d.textContent = g; d.style.top = (8 + i * 11) + '%'; d.style.animationDelay = (i * 1.1) + 's'; d.style.animationDuration = (7 + Math.random() * 4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'siyaset') { ['🏛️', '⚖️', '🗳️', '📜', '🤝', '🗣️', '🗽', '📢'].forEach((p, i) => { let d = document.createElement('div'); d.className = 'politic-item'; d.textContent = p; d.style.left = (5 + i * 12) + '%'; d.style.top = (12 + (i % 3) * 24) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'saglik') { ['🩺', '💊', '❤️', '🧬', '🏥', '💉', '🩹', '🧠'].forEach((h, i) => { let d = document.createElement('div'); d.className = 'health-item'; d.textContent = h; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 26) + '%'; d.style.animationDelay = (i * 0.35) + 's'; cont.appendChild(d); }); }
    else if (catId === 'mitoloji') { ['⚡', '🏛️', '🏹', '🔱', '🐉', '🛡️', '👑', '🔥'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'myth-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'anime') { ['🎌', '⚔️', '🌸', '🍥', '🥷', '😺', '💫', '🎮'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'anime-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'futbol') { ['⚽', '🥅', '🏆', '👟', '🏟️', '🧤', '🎖️', '👕'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'futbol-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'markalar') { ['🏷️', '📱', '👟', '🍔', '💻', '⌚', '🚗', '☕'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'brand-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'bayraklar') { ['🚩', '🏳️', '🇹🇷', '🌍', '🗺️', '🧭', '✈️', '🏛️'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'flag-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'matematik') { ['➗', '➕', '✖️', '📐', '🔢', 'π', '∑', '∞'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'math-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'dizi') { ['📺', '🍿', '🎬', '⭐', '🛋️', '🎧', '📱', '🎭'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'series-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'moda') { ['👗', '👠', '👜', '🕶️', '💄', '👒', '💍', '🧵'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'fashion-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'felsefe') { ['🧠', '📜', '⚖️', '💭', '🕯️', '📚', '🗿', '🔍'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'philo-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'doga') { ['🌿', '🌳', '🌊', '🦋', '🍃', '🏔️', '🌻', '♻️'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'nature-item'; d.textContent = x; d.style.left = (5 + i * 12) + '%'; d.style.top = (10 + (i % 3) * 25) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'emoji') { ['😂', '😍', '🤯', '🥳', '😎', '🤪', '😇', '🤫', '💀', '👻'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'emoji-item'; d.textContent = x; d.style.left = (5 + i * 10) + '%'; d.style.top = (10 + (i % 3) * 26) + '%'; d.style.animationDelay = (i * 0.4) + 's'; cont.appendChild(d); }); }
    else if (catId === 'icecek') { ['🥤', '🧃', '🧋', '☕', '🍵', '🍺', '🍹', '🥛', '🍷', '🫖'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'drink-item'; d.textContent = x; d.style.left = (5 + i * 10) + '%'; d.style.top = (12 + (i % 3) * 26) + '%'; d.style.animationDelay = (i * 0.45) + 's'; cont.appendChild(d); }); }
    else if (catId === 'youtuber') { ['▶️', '📹', '🎥', '🎧', '🎮', '💻', '📱', '🎬', '🎵', '✂️'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'youtube-item'; d.textContent = x; d.style.left = (5 + i * 10) + '%'; d.style.top = (12 + (i % 3) * 26) + '%'; d.style.animationDelay = (i * 0.45) + 's'; cont.appendChild(d); }); }
    else if (catId === 'yayinci') { ['🎧', '💜', '🎮', '📹', '🕹️', '👾', '🎙️', '💻', '📡', '⭐'].forEach((x, i) => { let d = document.createElement('div'); d.className = 'stream-item'; d.textContent = x; d.style.left = (5 + i * 10) + '%'; d.style.top = (12 + (i % 3) * 26) + '%'; d.style.animationDelay = (i * 0.45) + 's'; cont.appendChild(d); }); }
    else {
        for (let i = 0; i < 100; i++) { let s = document.createElement('div'); s.className = 'star'; s.style.width = Math.random() * 3 + 1 + 'px'; s.style.height = s.style.width; s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%'; cont.appendChild(s); }
        if (themeClass === 'theme-male' || themeClass === 'theme-female') {
            const icons = themeClass === 'theme-male'
                ? ['🏎️', '🎮', '⚽', '💪', '🚀', '🎸', '✈️', '🏀']
                : ['🌸', '💖', '✨', '🌷', '💅', '🎀', '🦋', '🩷'];
            icons.forEach((h, i) => {
                let d = document.createElement('div');
                d.className = 'gender-item';
                d.textContent = h;
                d.style.left = (5 + i * 12) + '%';
                d.style.top = (12 + (i % 3) * 25) + '%';
                d.style.animationDelay = (i * 0.5) + 's';
                cont.appendChild(d);
            });
        }
    }
    applyShopTheme();
}

const avatarEmojis = ['👤', '👨', '👩', '🧑', '👶', '👴', '👵', '🦸', '🦹', '🧙', '🧝', '🏎️', '🚗', '🚙', '🚕', '🏍️', '🛵', '🚀', '✈️', '🚁', '🍕', '🍔', '🌮', '🍣', '🍜', '⚽', '🏀', '🎮', '🎵', '🎬', '📱', '💻', '🦁', '🐶', '🐱', '🦊', '🐼', '🐨']; let secilenAvatar = avatarEmojis[Math.floor(Math.random() * avatarEmojis.length)]; let uploadedImage = null;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('avatarPreview').textContent = secilenAvatar;
    applyShopCustomizations();
    updateRankDisplay();
    document.getElementById('ageInputDisplay').value = '';
    document.getElementById('ageInput').value = '';
    const savedLang = localStorage.getItem('matex_language');
    if (savedLang && T[savedLang]) {
        currentLanguage = savedLang;
        selectedLangForConfirm = savedLang;
        applyLanguage();
        applyLangDisplay(savedLang);
    }
    document.getElementById('profileScreen').style.display = 'block';
});
window.handleGalleryUpload = function (e) { const f = e.target.files[0]; if (f) { const r = new FileReader(); r.onload = function (ev) { uploadedImage = ev.target.result; document.getElementById('avatarPreview').innerHTML = `<img src="${uploadedImage}">`; secilenAvatar = 'image'; if (typeof shopActive !== 'undefined' && shopActive.avatar) { shopActive.avatar = null; saveShopState(); } }; r.readAsDataURL(f); } };
window.openAvatarModal = function () { document.getElementById('avatarGrid').innerHTML = avatarEmojis.map(a => `<div class="avatar-option ${secilenAvatar === a ? 'selected' : ''}" onclick="selectAvatar('${a}')">${a}</div>`).join(''); document.getElementById('avatarModal').style.display = 'flex'; };
window.selectAvatar = function (a) { secilenAvatar = a; uploadedImage = null; if (typeof shopActive !== 'undefined' && shopActive.avatar) { shopActive.avatar = null; saveShopState(); } document.querySelectorAll('.avatar-option').forEach(e => e.classList.remove('selected')); event.target.classList.add('selected'); document.getElementById('avatarPreview').textContent = a; };
window.closeAvatarModal = function () { document.getElementById('avatarModal').style.display = 'none'; };
let secilenCinsiyet = null, kullaniciAdi = '', kullaniciYas = '';
window.selectGender = function (g) {
    if (!g) return;
    secilenCinsiyet = g;
    document.querySelectorAll('.gender-option').forEach(e => {
        e.classList.remove('selected');
        e.setAttribute('aria-pressed', 'false');
    });
    const idMap = { erkek: 'genderErkek', kadin: 'genderKadin', yok: 'genderYok' };
    const el = document.getElementById(idMap[g] || (`gender${g.charAt(0).toUpperCase() + g.slice(1)}`));
    if (el) {
        el.classList.add('selected');
        el.setAttribute('aria-pressed', 'true');
    }
    const err = document.getElementById('genderError');
    if (err) err.textContent = '';
    applyGenderTheme();
    changeTheme('space');
};

function applyGenderTheme() {
    document.body.classList.toggle('gender-male', secilenCinsiyet === 'erkek');
    document.body.classList.toggle('gender-female', secilenCinsiyet === 'kadin');
}
document.addEventListener('click', function (e) {
    const btn = e.target && e.target.closest ? e.target.closest('.gender-option') : null;
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const g = btn.getAttribute('data-gender') || (btn.id === 'genderErkek' ? 'erkek' : btn.id === 'genderKadin' ? 'kadin' : btn.id === 'genderYok' ? 'yok' : null);
    if (g) window.selectGender(g);
}, true);
window.validateAndContinue = function () {
    let isValid = true;
    const nameInput = document.getElementById('fullNameInput');
    const ageInputDisplay = document.getElementById('ageInputDisplay');
    const ageInput = document.getElementById('ageInput');
    document.getElementById('nameError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('genderError').textContent = '';
    nameInput.classList.remove('error');
    if (!nameInput.value.trim()) {
        document.getElementById('nameError').textContent = t('nameError');
        nameInput.classList.add('error');
        isValid = false;
    }
    const rawAge = ageInputDisplay.value.trim();
    ageInput.value = rawAge;
    const yas = parseInt(rawAge, 10);
    if (!rawAge) {
        document.getElementById('ageError').textContent = t('ageError');
        isValid = false;
    } else if (Number.isNaN(yas) || yas < 1 || yas > 100) {
        document.getElementById('ageError').textContent = t('ageRangeError');
        isValid = false;
    }
    if (!secilenCinsiyet) {
        document.getElementById('genderError').textContent = t('genderError');
        isValid = false;
    }
    if (isValid) {
        kullaniciAdi = nameInput.value.trim();
        kullaniciYas = yas;
        goToModeSelect();
    }
};

window.fillRandomProfile = function () {
    const adlar = ['Ali', 'Ayşe', 'Mehmet', 'Zeynep', 'Emir', 'Elif', 'Kaan', 'Ece', 'Burak', 'Deniz', 'Selin', 'Mert', 'Buse', 'Can', 'İrem', 'Kerem', 'Yusuf', 'Fatma', 'Okan', 'Aslı', 'Doruk', 'Melis', 'Arda', 'Nazlı', 'Baran', 'Sude'];
    const soyadlar = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Aydın', 'Öztürk', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Koç', 'Kurt', 'Özkan', 'Şimşek', 'Polat', 'Erdoğan', 'Acar', 'Bulut'];
    const ad = adlar[Math.floor(Math.random() * adlar.length)];
    const soyad = soyadlar[Math.floor(Math.random() * soyadlar.length)];
    document.getElementById('fullNameInput').value = ad + ' ' + soyad;
    document.getElementById('nameError').textContent = '';
    document.getElementById('fullNameInput').classList.remove('error');
    const yas = Math.floor(Math.random() * 100) + 1;
    document.getElementById('ageInput').value = yas;
    document.getElementById('ageInputDisplay').value = yas;
    document.getElementById('ageError').textContent = '';
    const cinsler = ['erkek', 'kadin', 'yok'];
    window.selectGender(cinsler[Math.floor(Math.random() * cinsler.length)]);
    const emoji = avatarEmojis[Math.floor(Math.random() * avatarEmojis.length)];
    if (typeof shopActive !== 'undefined' && shopActive.avatar) { shopActive.avatar = null; saveShopState(); }
    secilenAvatar = emoji;
    uploadedImage = null;
    document.getElementById('avatarPreview').textContent = emoji;
    playClickSound();
};

let answerMode = 'instant'; // instant / end
let photoAnswerMode = 'instant';

function setAnswerMode(mode) {
    answerMode = mode;
    document.getElementById('ansModeInstant').classList.toggle('selected', mode === 'instant');
    document.getElementById('ansModeEnd').classList.toggle('selected', mode === 'end');
    playClickSound();
}

function setPhotoAnswerMode(mode) {
    photoAnswerMode = mode;
    document.getElementById('photoAnsModeInstant').classList.toggle('selected', mode === 'instant');
    document.getElementById('photoAnsModeEnd').classList.toggle('selected', mode === 'end');
    playClickSound();
}

// oyun modu
let gameMode = null;
let secilenPhotoKategori = null;
let secilenPhotoZorluk = null;
let photoSorular = [];
let photoIndex = 0;
let photoCevaplar = [];
let photoTimer = null;
let photoTimeLeft = 0;
let photoTestAktif = false;
let photoPuan = 0, photoQuestionStartTime = 0, photoTimeBonus = 0;
let exitTarget = 'text';

const photoKategoriler = [
    { id: 'photo-marvel', adKey: 'marvel', icon: '🦸', subtitleKey: 'photoCharGuess', theme: 'marvel' },
    { id: 'photo-dc', adKey: 'dc', icon: '🦇', subtitleKey: 'photoCharGuess', theme: 'dc' },
    { id: 'photo-anime', adKey: 'anime', icon: '🎌', subtitleKey: 'photoCharGuess', theme: 'anime' },
    { id: 'photo-futbol', adKey: 'futbol', icon: '⚽', subtitleKey: 'photoPlayerClub', theme: 'futbol' },
    { id: 'photo-motor', adKey: 'motor', icon: '🏍️', subtitleKey: 'photoVehicleGuess', theme: 'motor' },
    { id: 'photo-araba', adKey: 'araba', icon: '🏎️', subtitleKey: 'photoVehicleGuess', theme: 'araba' },
    { id: 'photo-oyun', adKey: 'oyun', icon: '🎮', subtitleKey: 'photoGameGuess', theme: 'oyun' },
    { id: 'photo-tatli', adKey: 'tatli', icon: '🍰', subtitleKey: 'photoDessertGuess', theme: 'yemek' },
    { id: 'photo-bayraklar', adKey: 'bayraklar', icon: '🚩', subtitleKey: 'photoCountryGuess', theme: 'bayraklar' },
    { id: 'photo-yemekler', adKey: 'yemekler', icon: '🍽️', subtitleKey: 'photoFoodGuess', theme: 'yemek' },
    { id: 'photo-kizanime', adKey: 'kizanime', icon: '🌸', subtitleKey: 'photoCharGuess', theme: 'anime' },
    { id: 'photo-unluler', adKey: 'unluler', icon: '🤵', subtitleKey: 'photoCelebGuess', theme: 'sinema' },
    { id: 'photo-kadinlar', adKey: 'kadinlar', icon: '💃', subtitleKey: 'photoCelebGuess', theme: 'moda' },
    { id: 'photo-youtuber', adKey: 'youtuber', icon: '▶️', subtitleKey: 'photoYoutuberGuess', theme: 'youtuber' },
    { id: 'photo-yayinci', adKey: 'yayinci', icon: '🎧', subtitleKey: 'photoStreamerGuess', theme: 'yayinci' },
    { id: 'photo-meyve', adKey: 'meyve', icon: '🍎', subtitleKey: 'photoFruitGuess', theme: 'yemek', emojiQuiz: true },
    { id: 'photo-hayvan', adKey: 'hayvan', icon: '🦁', subtitleKey: 'photoAnimalGuess', theme: 'hayvan', emojiQuiz: true },
    { id: 'photo-emoji', adKey: 'emoji', icon: '😂', subtitleKey: 'photoEmojiGuess', theme: 'emoji', emojiQuiz: true },
    { id: 'photo-icecek', adKey: 'icecek', icon: '🥤', subtitleKey: 'photoDrinkGuess', theme: 'icecek', emojiQuiz: true },
    { id: 'photo-spor', adKey: 'spor', icon: '🥊', subtitleKey: 'photoSportGuess', theme: 'spor', emojiQuiz: true },
    { id: 'photo-sebze', adKey: 'sebze', icon: '🥕', subtitleKey: 'photoVegetableGuess', theme: 'doga', emojiQuiz: true },
    { id: 'photo-tanri', adKey: 'tanri', icon: '⚡', subtitleKey: 'photoGodGuess', theme: 'mitoloji', emojiQuiz: true },
    { id: 'photo-cicek', adKey: 'cicek', icon: '🌷', subtitleKey: 'photoFlowerGuess', theme: 'doga', emojiQuiz: true },
    { id: 'photo-meslek', adKey: 'meslek', icon: '👨‍⚕️', subtitleKey: 'photoJobGuess', theme: 'genelkultur', emojiQuiz: true },
    { id: 'photo-evesyalari', adKey: 'evesyalari', icon: '🛋️', subtitleKey: 'photoItemGuess', theme: 'genelkultur', emojiQuiz: true }
];

const photoSubTitles = {
    tr: { photoCharGuess: 'Karakter tahmin', photoPlayerClub: 'Oyuncu / kulüp', photoLogoGuess: 'Logo tahmin', photoFilmChar: 'Film / karakter', photoCreatureGuess: 'Canlı tahmin', photoCountryGuess: 'Ülke tahmin', photoVehicleGuess: 'Araç tahmin', photoGameGuess: 'Oyun tahmin', photoFruitGuess: 'Meyve tahmin', photoDessertGuess: 'Tatlı tahmin', photoFoodGuess: 'Yemek tahmin', photoAnimalGuess: 'Hayvan tahmin', photoEmojiGuess: 'Emoji tahmin', photoDrinkGuess: 'İçecek tahmin', photoSportGuess: 'Spor tahmin', photoCelebGuess: 'Ünlü tahmin', photoVegetableGuess: 'Sebze tahmin', photoGodGuess: 'Tanrı tahmin', photoFlowerGuess: 'Çiçek tahmin', photoJobGuess: 'Meslek tahmin', photoItemGuess: 'Ev eşyası tahmin', photoYoutuberGuess: 'YouTuber tahmin', photoStreamerGuess: 'Yayıncı tahmin' },
    en: { photoCharGuess: 'Character guess', photoPlayerClub: 'Player / club', photoLogoGuess: 'Logo guess', photoFilmChar: 'Film / character', photoCreatureGuess: 'Creature guess', photoCountryGuess: 'Country guess', photoVehicleGuess: 'Vehicle guess', photoGameGuess: 'Game guess', photoFruitGuess: 'Fruit guess', photoDessertGuess: 'Dessert guess', photoFoodGuess: 'Dish guess', photoAnimalGuess: 'Animal guess', photoEmojiGuess: 'Emoji guess', photoDrinkGuess: 'Drink guess', photoSportGuess: 'Sport guess', photoCelebGuess: 'Celebrity guess', photoVegetableGuess: 'Vegetable guess', photoGodGuess: 'God guess', photoFlowerGuess: 'Flower guess', photoJobGuess: 'Job guess', photoItemGuess: 'Household item guess', photoYoutuberGuess: 'YouTuber guess', photoStreamerGuess: 'Streamer guess' },
    de: { photoCharGuess: 'Charakter erraten', photoPlayerClub: 'Spieler / Verein', photoLogoGuess: 'Logo erraten', photoFilmChar: 'Film / Charakter', photoCreatureGuess: 'Lebewesen erraten', photoCountryGuess: 'Land erraten', photoVehicleGuess: 'Fahrzeug erraten', photoGameGuess: 'Spiel erraten', photoFruitGuess: 'Frucht erraten', photoDessertGuess: 'Dessert erraten', photoFoodGuess: 'Gericht erraten', photoAnimalGuess: 'Tier erraten', photoEmojiGuess: 'Emoji erraten', photoDrinkGuess: 'Getränk erraten', photoSportGuess: 'Sport erraten', photoCelebGuess: 'Promi erraten', photoVegetableGuess: 'Gemüse erraten', photoGodGuess: 'Gott erraten', photoFlowerGuess: 'Blume erraten', photoJobGuess: 'Beruf erraten', photoItemGuess: 'Haushaltsgegenstand erraten', photoYoutuberGuess: 'YouTuber erraten', photoStreamerGuess: 'Streamer erraten' },
    ru: { photoCharGuess: 'Угадай персонажа', photoPlayerClub: 'Игрок / клуб', photoLogoGuess: 'Угадай лого', photoFilmChar: 'Фильм / персонаж', photoCreatureGuess: 'Угадай существо', photoCountryGuess: 'Угадай страну', photoVehicleGuess: 'Угадай машину', photoGameGuess: 'Угадай игру', photoFruitGuess: 'Угадай фрукт', photoDessertGuess: 'Угадай десерт', photoFoodGuess: 'Угадай блюдо', photoAnimalGuess: 'Угадай животное', photoEmojiGuess: 'Угадай эмодзи', photoDrinkGuess: 'Угадай напиток', photoSportGuess: 'Угадай спорт', photoCelebGuess: 'Угадай знаменитость', photoVegetableGuess: 'Угадай овощ', photoGodGuess: 'Угадай бога', photoFlowerGuess: 'Угадай цветок', photoJobGuess: 'Угадай профессию', photoItemGuess: 'Угадай бытовой предмет', photoYoutuberGuess: 'Угадай ютубера', photoStreamerGuess: 'Угадай стримера' },
    zh: { photoCharGuess: '猜角色', photoPlayerClub: '球员 / 俱乐部', photoLogoGuess: '猜标志', photoFilmChar: '电影 / 角色', photoCreatureGuess: '猜生物', photoCountryGuess: '猜国家', photoVehicleGuess: '猜车辆', photoGameGuess: '猜游戏', photoFruitGuess: '猜水果', photoDessertGuess: '猜甜点', photoFoodGuess: '猜菜肴', photoAnimalGuess: '猜动物', photoEmojiGuess: '猜表情', photoDrinkGuess: '猜饮料', photoSportGuess: '猜运动', photoCelebGuess: '猜名人', photoVegetableGuess: '猜蔬菜', photoGodGuess: '猜神', photoFlowerGuess: '猜花', photoJobGuess: '猜职业', photoItemGuess: '猜家居用品', photoYoutuberGuess: '猜YouTube博主', photoStreamerGuess: '猜主播' },
    ja: { photoCharGuess: 'キャラクター当て', photoPlayerClub: '選手 / クラブ', photoLogoGuess: 'ロゴ当て', photoFilmChar: '映画 / キャラクター', photoCreatureGuess: '生き物当て', photoCountryGuess: '国当て', photoVehicleGuess: '乗り物当て', photoGameGuess: 'ゲーム当て', photoFruitGuess: 'フルーツ当て', photoDessertGuess: 'デザート当て', photoFoodGuess: '料理当て', photoAnimalGuess: '動物当て', photoEmojiGuess: '絵文字当て', photoDrinkGuess: '飲み物当て', photoSportGuess: 'スポーツ当て', photoCelebGuess: '有名人当て', photoVegetableGuess: '野菜当て', photoGodGuess: '神様当て', photoFlowerGuess: '花当て', photoJobGuess: '職業当て', photoItemGuess: '家庭用品当て', photoYoutuberGuess: 'ユーチューバー当て', photoStreamerGuess: '配信者当て' },
    es: { photoCharGuess: 'Adivina personaje', photoPlayerClub: 'Jugador / club', photoLogoGuess: 'Adivina logo', photoFilmChar: 'Película / personaje', photoCreatureGuess: 'Adivina criatura', photoCountryGuess: 'Adivina país', photoVehicleGuess: 'Adivina vehículo', photoGameGuess: 'Adivina juego', photoFruitGuess: 'Adivina fruta', photoDessertGuess: 'Adivina postre', photoFoodGuess: 'Adivina plato', photoAnimalGuess: 'Adivina animal', photoEmojiGuess: 'Adivina emoji', photoDrinkGuess: 'Adivina bebida', photoSportGuess: 'Adivina deporte', photoCelebGuess: 'Adivina famoso', photoVegetableGuess: 'Adivina verdura', photoGodGuess: 'Adivina dios', photoFlowerGuess: 'Adivina flor', photoJobGuess: 'Adivina profesión', photoItemGuess: 'Adivina objeto del hogar', photoYoutuberGuess: 'Adivina el YouTuber', photoStreamerGuess: 'Adivina el streamer' },
    ar: { photoCharGuess: 'خمّن الشخصية', photoPlayerClub: 'لاعب / نادي', photoLogoGuess: 'خمّن الشعار', photoFilmChar: 'فيلم / شخصية', photoCreatureGuess: 'خمّن الكائن', photoCountryGuess: 'خمّن البلد', photoVehicleGuess: 'خمّن المركبة', photoGameGuess: 'خمّن اللعبة', photoFruitGuess: 'خمّن الفاكهة', photoDessertGuess: 'خمّن الحلوى', photoFoodGuess: 'خمّن الطبق', photoAnimalGuess: 'خمّن الحيوان', photoEmojiGuess: 'خمّن الإيموجي', photoDrinkGuess: 'خمّن المشروب', photoSportGuess: 'خمّن الرياضة', photoCelebGuess: 'خمّن المشهور', photoVegetableGuess: 'خمّن الخضار', photoGodGuess: 'خمّن الإله', photoFlowerGuess: 'خمّن الزهرة', photoJobGuess: 'خمّن المهنة', photoItemGuess: 'خمّن أدوات المنزل', photoYoutuberGuess: 'خمّن اليوتيوبر', photoStreamerGuess: 'خمّن صانع البث' }
};

function getPhotoSubTitle(key) {
    const lang = photoSubTitles[currentLanguage] || photoSubTitles['tr'];
    return lang[key] || key;
}

const photoPools = {
    'photo-marvel': [
        { prompt: 'Bu karakterin ismi nedir?', answers: ['captain america', 'kaptan amerika', 'kaptan america', 'steve rogers', 'cap'], label: 'Captain America', emoji: '🛡️', image: 'marvel_01.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['iron man', 'ironman', 'tony stark', 'demir adam'], label: 'Iron Man', emoji: '🦾', image: 'marvel_02.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['spider-man', 'spiderman', 'spider man', 'örümcek adam', 'orumcek adam', 'peter parker'], label: 'Spider-Man', emoji: '🕷️', image: 'marvel_03.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['hulk', 'bruce banner', 'yesil dev', 'yeşil dev'], label: 'Hulk', emoji: '💪', image: 'marvel_04.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['thor', 'tor', 'thor odinson'], label: 'Thor', emoji: '🔨', image: 'marvel_05.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['black widow', 'kara dul', 'natasha romanoff', 'natasha', 'blackwidow'], label: 'Black Widow', emoji: '🖤', image: 'marvel_06.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['doctor strange', 'dr strange', 'doktor strange', 'stephen strange', 'dr. strange'], label: 'Doctor Strange', emoji: '🪄', image: 'marvel_07.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['black panther', 'kara panter', 'tchalla', 't challa', 'blackpanther'], label: 'Black Panther', emoji: '🐆', image: 'marvel_08.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['loki', 'loki laufeyson'], label: 'Loki', emoji: '😈', image: 'marvel_09.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['thanos', 'tanos'], label: 'Thanos', emoji: '🫰', image: 'marvel_10.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['rocket', 'rocket raccoon', 'rakun rocket', 'roket', 'rocket rakun'], label: 'Rocket', emoji: '🦝', image: 'marvel_11.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['star-lord', 'starlord', 'star lord', 'peter quill', 'yildiz lordu', 'yıldız lordu'], label: 'Star-Lord', emoji: '⭐', image: 'marvel_12.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['gamora', 'gamora zen whoberi'], label: 'Gamora', emoji: '💚', image: 'marvel_13.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['groot', 'ben groot', 'i am groot'], label: 'Groot', emoji: '🌳', image: 'marvel_14.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['venom', 'eddie brock', 'venom eddie brock'], label: 'Venom', emoji: '🖤', image: 'marvel_15.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['doctor doom', 'dr doom', 'doktor doom', 'doom', 'victor von doom', 'dr. doom'], label: 'Doctor Doom', emoji: '🟢', image: 'marvel_16.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['wolverine', 'logan', 'james howlett', 'wolverin'], label: 'Wolverine', emoji: '⚔️', image: 'marvel_17.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['deadpool', 'wade wilson', 'dead pool', 'olum havuzu', 'ölüm havuzu'], label: 'Deadpool', emoji: '🔴', image: 'marvel_18.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['ant-man', 'antman', 'ant man', 'scott lang', 'karinca adam', 'karınca adam'], label: 'Ant-Man', emoji: '🐜', image: 'marvel_19.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['wasp', 'the wasp', 'hope van dyne', 'hope vandyne', 'yaban arisi', 'yaban arısı', 'ari kadin', 'arı kadın'], label: 'Wasp', emoji: '🐝', image: 'marvel_20.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['scorpion', 'the scorpion', 'mac gargan', 'akrep', 'scorpio'], label: 'Scorpion', emoji: '🦂', image: 'marvel_21.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['rhino', 'the rhino', 'aleksei sytsevich', 'gergedan', 'rino'], label: 'Rhino', emoji: '🦏', image: 'marvel_22.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['scarlet witch', 'scarlett witch', 'wanda maximoff', 'wanda', 'kizil cadı', 'kızıl cadı', 'kirmizi cadı', 'kırmızı cadı'], label: 'Scarlet Witch', emoji: '🔴', image: 'marvel_23.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['hawkeye', 'hawk eye', 'clint barton', 'sahin goz', 'şahin göz', 'okcu', 'okçu'], label: 'Hawkeye', emoji: '🏹', image: 'marvel_24.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['vision', 'vizyon', 'the vision'], label: 'Vision', emoji: '💎', image: 'marvel_25.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['winter soldier', 'bucky', 'bucky barnes', 'kis askeri', 'kış askeri', 'wintersoldier'], label: 'Winter Soldier', emoji: '❄️', image: 'marvel_26.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['juggernaut', 'the juggernaut', 'cain marko', 'yokedici', 'yok edici', 'jaggernaut'], label: 'Juggernaut', emoji: '🟡', image: 'marvel_27.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['red hulk', 'redhulk', 'kirmizi hulk', 'kırmızı hulk', 'thunderbolt ross', 'general ross', 'ross'], label: 'Red Hulk', emoji: '🔴', image: 'marvel_28.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['moon knight', 'moonknight', 'marc spector', 'steven grant', 'jake lockley', 'ay sovalye', 'ay şövalye', 'ay sovalyesi', 'ay şövalyesi'], label: 'Moon Knight', emoji: '🌙', image: 'marvel_29.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['daredevil', 'dare devil', 'matt murdock', 'kor seytan', 'kör şeytan', 'kor şeytan', 'kör seytan'], label: 'Daredevil', emoji: '🔴', image: 'marvel_30.png' }
    ],
    'photo-dc': [
        { prompt: 'Bu karakterin ismi nedir?', answers: ["batman", "betmen", "bat man", "bruce wayne", "bruce veyn", "bruce wain"], label: "Batman", emoji: '🦇', image: 'dc_01.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["superman", "süpermen", "supermen", "süper adam", "clark kent", "klark kent"], label: "Superman", emoji: '🦸‍♂️', image: 'dc_02.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["lex luthor", "leks lutır", "leks lutor", "lex luthur"], label: "Lex Luthor", emoji: '🧪', image: 'dc_03.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["joker", "coker", "caker"], label: "Joker", emoji: '🃏', image: 'dc_04.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["green arrow", "grin arov", "yeşil ok", "yesil ok", "oliver queen"], label: "Green Arrow", emoji: '🏹', image: 'dc_05.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["supergirl", "süperkız", "superkiz", "super kiz", "süper kız", "kara zor-el", "kara danvers"], label: "Supergirl", emoji: '🦸‍♀️', image: 'dc_06.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["darkseid", "darkseyd", "dark seid"], label: "Darkseid", emoji: '🌑', image: 'dc_07.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["alfred pennyworth", "alfred", "alfred penniworth"], label: "Alfred Pennyworth", emoji: '🕴️', image: 'dc_08.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["aquaman", "akuamen", "aqua man", "arthur curry"], label: "Aquaman", emoji: '🌊', image: 'dc_09.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["flash", "fılaş", "the flash", "barry allen", "beri alın", "berry allen"], label: "Flash", emoji: '⚡', image: 'dc_10.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["wonder woman", "vonder vuman", "wonderwoman", "diana prince", "diyana prens", "harika kadın", "harika kadin"], label: "Wonder Woman", emoji: '🛡️', image: 'dc_11.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["deathstroke", "det strok", "dedstrok", "slade wilson"], label: "Deathstroke", emoji: '⚔️', image: 'dc_12.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["krypto", "crypto", "superdog", "kripto"], label: "Krypto", emoji: '🐶', image: 'dc_13.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["two-face", "two face", "tu feys", "harvey dent", "iki yüz", "ikiyüz", "ikiyuz"], label: "Two-Face", emoji: '🎭', image: 'dc_14.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["blue beetle", "bluebeetle", "mavi böcek", "mavi bocek", "jaime reyes"], label: "Blue Beetle", emoji: '🪲', image: 'dc_15.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["black adam", "blek adam"], label: "Black Adam", emoji: "⚡", image: "dc_16.png" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["deadshot", "detşot", "det shot", "floyd lawton"], label: "Deadshot", emoji: "🎯", image: "dc_17.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["mr freeze", "mister freeze", "bay freeze", "victor fries"], label: "Mr. Freeze", emoji: "❄️", image: "dc_18.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["catwoman", "cat woman", "kedi kadın", "kedi kadin", "selina kyle"], label: "Catwoman", emoji: "🐈", image: "dc_19.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["penguin", "penguen", "oswald cobblepot"], label: "Penguin", emoji: "🐧", image: "dc_20.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["green lantern", "green latern", "yeşil fener", "yesil fener", "hal jordan"], label: "Green Lantern", emoji: "💚", image: "dc_21.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["king shark", "kingşark", "kral köpekbalığı", "kral kopekbaligi", "nanaue"], label: "King Shark", emoji: "🦈", image: "dc_22.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["peacemaker", "peace maker"], label: "Peacemaker", emoji: "🕊️", image: "dc_23.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["harley quinn", "harley", "harli kvin", "harleen quinzel"], label: "Harley Quinn", emoji: "🃏", image: "dc_24.jpg" },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["atom", "the atom", "ray palmer"], label: "Atom", emoji: "⚛️", image: "dc_25.jpg" },
    ],
    'photo-anime': [
        { prompt: 'Bu karakterin ismi nedir?', answers: ["naruto", "naruto uzumaki", "naruto uzumakii", "narutö"], label: "Naruto Uzumaki", emoji: '🍜', image: 'anime_01.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["luffy", "lufi", "monkey d luffy", "monkey d. luffy", "lufii"], label: "Monkey D. Luffy", emoji: '🏴‍☠️', image: 'anime_02.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["goku", "son goku", "gokou", "goko"], label: "Son Goku", emoji: '🟠', image: 'anime_03.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["eren", "eren yeager", "eren jaeger", "eren yegır"], label: "Eren Yeager", emoji: '🗡️', image: 'anime_04.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["light", "light yagami", "kira", "layt yagami", "layt"], label: "Light Yagami", emoji: '📓', image: 'anime_05.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["gojo", "satoru gojo", "gocо", "gojou", "satoru gocо"], label: "Satoru Gojo", emoji: '👁️', image: 'anime_06.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["gon", "gon freecss", "gon friks", "gon frikss"], label: "Gon Freecss", emoji: '🎣', image: 'anime_07.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["kakashi", "kakashi hatake", "kakaşi"], label: "Kakashi Hatake", emoji: '🍃', image: 'anime_08.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["jotaro", "jotaro kujo", "jotaro kuco", "cotaro"], label: "Jotaro Kujo", emoji: '⭐', image: 'anime_09.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["zoro", "roronoa zoro", "zorro", "zoro roronoa"], label: "Roronoa Zoro", emoji: '⚔️', image: 'anime_10.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["tanjiro", "tanjiro kamado", "tancіro", "tanciro"], label: "Tanjiro Kamado", emoji: '🗡️', image: 'anime_11.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["vegito", "vegetto", "vegito fusion"], label: "Vegito", emoji: '🔱', image: 'anime_12.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["goku", "son goku", "gokou", "goko"], label: "Son Goku", emoji: '🟠', image: 'anime_13.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["deku", "izuku midoriya", "midoriya", "izuku", "deki"], label: "Izuku Midoriya", emoji: '💥', image: 'anime_14.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["kaneki", "ken kaneki", "kenneki"], label: "Ken Kaneki", emoji: '🎭', image: 'anime_15.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["sailor moon", "usagi", "usagi tsukino", "seylır mun"], label: "Usagi Tsukino", emoji: '🌙', image: 'anime_16.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["beerus", "lord beerus", "biros", "biırus"], label: "Lord Beerus", emoji: '😼', image: 'anime_17.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["alucard", "alukard"], label: "Alucard", emoji: '🧛', image: 'anime_18.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["karasakal", "blackbeard", "marshall d teach", "marshall d. teach", "kara sakal"], label: "Marshall D. Teach", emoji: '🏴‍☠️', image: 'anime_19.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["denji", "chainsaw man", "çeynsov men", "chainsawman"], label: "Denji", emoji: '🔗', image: 'anime_20.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["yujiro", "yujiro hanma", "yucіro hanma"], label: "Yujiro Hanma", emoji: '👊', image: 'anime_21.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["jinwoo", "jin woo", "sung jinwoo", "sung jin woo", "sung jin-woo", "cinvu"], label: "Sung Jin-woo", emoji: '⚔️', image: 'anime_22.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["saitama", "one punch man", "saytama"], label: "Saitama", emoji: '👊', image: 'anime_23.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["mikasa", "mikasa ackerman", "mikasa akerman"], label: "Mikasa Ackerman", emoji: '🧣', image: 'anime_24.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["madara", "madara uchiha", "madara uçiha"], label: "Madara Uchiha", emoji: '🌀', image: 'anime_25.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["sasuke", "sasuke uchiha", "sasuki", "saske"], label: "Sasuke Uchiha", emoji: '🔥', image: 'anime_26.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["shanks", "şanks", "sanks"], label: "Shanks", emoji: '🏴‍☠️', image: 'anime_27.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["yoruichi", "yoruichi shihouin", "yoruici"], label: "Yoruichi Shihouin", emoji: '🐱', image: 'anime_28.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["beast titan", "canavar titan", "zeke", "zeke jaeger", "zeke yeager"], label: "Zeke Jaeger", emoji: '👹', image: 'anime_29.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["mihawk", "dracule mihawk", "mihavk"], label: "Dracule Mihawk", emoji: '⚔️', image: 'anime_30.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["baki", "baki hanma"], label: "Baki Hanma", emoji: '🥊', image: 'anime_31.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["nami"], label: "Nami", emoji: '🍊', image: 'anime_32.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["itachi", "itachi uchiha", "itaçi"], label: "Itachi Uchiha", emoji: '🌌', image: 'anime_33.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["dante", "devil may cry"], label: "Dante", emoji: '🗡️', image: 'anime_34.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ["aizen", "sosuke aizen", "sösuke aizen"], label: "Sosuke Aizen", emoji: '👑', image: 'anime_35.jpg' }
    ],
    'photo-futbol': [
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['alper barış', 'alper', 'barış'], label: 'barış alper', emoji: '🇹🇷', image: 'futbolcu_01.jpeg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['mbappe', 'kylian mbappe', 'mbappé'], label: 'Kylian Mbappé', emoji: '🇫🇷', image: 'futbolcu_02.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['de bruyne', 'kevin de bruyne'], label: 'Kevin De Bruyne', emoji: '🇧🇪', image: 'futbolcu_03.png' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['ıcardi', 'içardi'], label: 'icardi', emoji: '🇧🇪', image: 'futbolcu_04.webp' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['vinicius', 'vinicius jr', 'vini jr'], label: 'Vinicius Jr.', emoji: '🇧🇷', image: 'futbolcu_05.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['messi', 'lionel messi'], label: 'Lionel Messi', emoji: '🇦🇷', image: 'futbolcu_06.webp' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['kenan', 'yıldız'], label: 'kenan yıldız', emoji: '🇹🇷', image: 'futbolcu_07.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['ronaldo', 'cristiano ronaldo', 'cr7'], label: 'Cristiano Ronaldo', emoji: '🇵🇹', image: 'futbolcu_08.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['ronaldinho'], label: 'Ronaldinho', emoji: '🇧🇷', image: 'futbolcu_09.webp' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['Luís Nazário'], label: 'Luís Nazário', emoji: '🇧🇷', image: 'futbolcu_10.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['muslera', 'fernando muslera'], label: 'Fernando Muslera', emoji: '🇺🇾', image: 'futbolcu_11.webp' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['osimhen', 'victor osimhen'], label: 'Victor Osimhen', emoji: '🇳🇬', image: 'futbolcu_12.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['küerejma', 'quarajma'], label: 'querejma', emoji: '🇹🇷', image: 'futbolcu_13.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['odegard', 'martin'], label: 'martin odegard', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', image: 'futbolcu_14.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['haaland', 'erling haaland'], label: 'Erling Haaland', emoji: '🇳🇴', image: 'futbolcu_15.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['bellingham', 'jude bellingham'], label: 'Jude Bellingham', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', image: 'futbolcu_16.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['lamin', 'yamal'], label: 'lamin yamal', emoji: '🇪🇸', image: 'futbolcu_17.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['arda', 'turan'], label: 'arda turan', emoji: '🇧🇷', image: 'futbolcu_18.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['jünyer', 'neymar'], label: 'junyer neymar', emoji: '🇹🇷', image: 'futbolcu_19.jpg' },
        { prompt: 'Bu futbolcunun ismi nedir?', answers: ['arda'], label: 'arda güler', emoji: '🇧🇷', image: 'futbolcu_20.jpg' }
    ],
    'photo-motor': [
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['r1', 'yzf r1', 'mt 07', 'mt-07', 'mt07', 'r6', 'yzf r6', 'mt 09', 'mt-09', 'mt09', 'r25', 'r3', 'nmax', 'aerox', 'x max', 'xmax', 't max', 'tmax', 'tenere', 'mt 25', 'mt-25'], label: 'Yamaha (örn. R1, MT-07, R6...)', emoji: '🔴', image: 'motor_01 (1).jpg' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['s1000rr', 's 1000 rr', 'r1250gs', 'r 1250 gs', 'g310r', 'g 310 r', 'm1000rr', 'm 1000 rr', 's1000r', 's 1000 r', 'k1600', 'r nine t', 'rninet', 'f800gs', 'f 800 gs'], label: 'BMW (örn. S1000RR, R1250GS...)', emoji: '🔵', image: 'motor_02.png' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['rsv4', 'rs v4', 'rs 660', 'rs660', 'tuono', 'rs 125', 'rs125', 'rs125', 'tuareg', 'tuono 660', 'rs457', 'rs 457', 'sr gt', 'srgt'], label: 'Aprilia (örn. RSV4, Tuono...)', emoji: '🟥', image: 'motor_03.jpg' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['panigale', 'panigale v4', 'monster', 'multistrada', 'diavel', 'streetfighter', 'scrambler', 'hypermotard', 'super sport', 'desertx'], label: 'Ducati (örn. Panigale, Monster...)', emoji: '🔺', image: 'motor_04.png' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['ninja', 'ninja h2', 'h2', 'z900', 'z 900', 'z650', 'z 650', 'zx10r', 'zx-10r', 'zx 10 r', 'zx6r', 'zx-6r', 'versys', 'vulcan', 'ninja 400', 'ninja 250'], label: 'Kawasaki (örn. Ninja, Z900...)', emoji: '💚', image: 'motor_05.png' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['duke', '390 duke', 'duke 390', 'rc 390', 'rc390', 'rc 200', 'rc200', 'rc 125', 'rc125', 'adventure', 'super duke', 'smc', 'duke 200', 'duke 125'], label: 'KTM (örn. Duke, RC 390...)', emoji: '🟠', image: 'motor_06.png' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['cbr', 'cbr 650', 'cbr650r', 'cbr1000rr', 'africa twin', 'pcx', 'activa', 'rebel', 'rebel 500', 'gold wing', 'forza', 'cb650r', 'cb500f', 'sh', 'adv 350'], label: 'Honda (örn. CBR, Africa Twin...)', emoji: '🟥', image: 'motor_07.png' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['hayabusa', 'gsx r', 'gsxr', 'gsx-r', 'gsx r1000', 'gsx s1000', 'gsxs1000', 'gsx8r', 'v strom', 'vstrom', 'v-strom', 'boulevard', 'katana', 'intruder'], label: 'Suzuki (örn. Hayabusa, GSX-R...)', emoji: '🔵', image: 'motor_08.png' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['fat boy', 'fatboy', 'sportster', 'iron 883', 'street glide', 'road king', 'heritage', 'dyna', 'nightster', 'breakout', 'road glide', 'softail'], label: 'Harley-Davidson (örn. Fat Boy, Sportster...)', emoji: '🦅', image: 'motor_09.png' },
        { prompt: 'Bu markaya ait bir motor modelinin adı nedir?', answers: ['apache', 'apache rtr', 'apache rtr 160', 'apache rtr 200', 'jupiter', 'ntorq', 'raider', 'ronin', 'iqube', 'apache rtr 310'], label: 'TVS (örn. Apache, Jupiter...)', emoji: '🐎', image: 'motor_10.png' }
    ],
    'photo-araba': [
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['c3', 'c4', 'c5 aircross', 'c3 aircross', 'berlingo', 'saxo', 'picasso', 'c elysee', 'jumper'], label: 'Citroën (örn. C3, C4, Berlingo...)', emoji: '🇫🇷', image: 'araba_01 (1).jpg' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['c180', 'c200', 'c serisi', 'e200', 'e300', 'e 300', 'a180', 'a200', 'cla', 'cla 180', 'gla', 's500', 's 500', 'amg gt', 'g serisi', 'vito', 'sprinter'], label: 'Mercedes (örn. C180, CLA, E300...)', emoji: '⭐', image: 'araba_01 (1).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['tiggo', 'tiggo 8', 'tiggo 7', 'tiggo 4', 'omoda', 'omoda 5', 'arrizo', 'qq'], label: 'Chery (örn. Tiggo 8, Omoda 5...)', emoji: '🇨🇳', image: 'araba_01 (2).jpg' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['a3', 'a4', 'a5', 'a6', 'q3', 'q5', 'q7', 'q8', 'r8', 'tt', 'rs6', 'e tron'], label: 'Audi (örn. A3, A6, Q5...)', emoji: '4️⃣', image: 'araba_01 (2).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['911', 'cayman', 'cayenne', 'panamera', 'taycan', 'macan', 'boxster'], label: 'Porsche (örn. 911, Cayenne...)', emoji: '🏎️', image: 'araba_01 (3).jpg' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['f40', 'f8', '488', '458', 'laferrari', 'la ferrari', 'sf90', 'roma', 'enzo', 'portofino', '812', '296'], label: 'Ferrari (örn. F40, SF90, Roma...)', emoji: '🐎', image: 'araba_01 (3).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['giulia', 'stelvio', 'giulietta', 'tonale', 'mito', '159', '147', 'gt'], label: 'Alfa Romeo (örn. Giulia, Stelvio...)', emoji: '🐍', image: 'araba_01 (4).jpg' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['nsx', 'integra', 'mdx', 'tlx', 'rdx', 'ilx', 'tsx'], label: 'toyota (örn. NSX, Integra...)', emoji: '🅰️', image: 'araba_01 (4).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['huracan', 'aventador', 'urus', 'gallardo', 'revuelto', 'murcielago', 'countach'], label: 'Lamborghini (örn. Huracan, Urus...)', emoji: '🐂', image: 'araba_01 (5).jpg' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['lancer', 'evo', 'evolution', 'lancer evolution', 'colt', 'pajero', 'asx', 'eclipse', 'eclipse cross', 'space star', 'outlander'], label: 'Mitsubishi (örn. Lancer, Colt...)', emoji: '♦️', image: 'araba_01 (5).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['doblo', 'panda', '500', 'egea', 'tipo', 'bravo', 'uno', 'fiorino', 'linea', 'punto', 'palio'], label: 'Fiat (örn. Doblo, Egea, Panda...)', emoji: '🇮🇹', image: 'araba_01 (6).jpg' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['swift', 'vitara', 'jimny', 'ignis', 'alto', 's cross', 'sx4', 'splendor'], label: 'Suzuki (örn. Swift, Vitara, Jimny...)', emoji: '🔷', image: 'araba_01 (6).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['chiron', 'veyron', 'divo', 'bolide', 'mistral', 'tourbillon', 'eb110'], label: 'Bugatti (örn. Chiron, Veyron...)', emoji: '💎', image: 'araba_01 (7).jpg' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['lbx', 'nx', 'rx', 'sedan',], label: 'lexsus (örn. lbx, rx...)', emoji: '💎', image: 'araba_01 (7).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['bydese', 'byd', 'byd3', 'oto',], label: 'byd (örn. byd3, oto...)', emoji: '💎', image: 'araba_01 (8).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['xc50', 'xc60', 'xc70', 'xc80',], label: 'volvo (örn. xc40, ...)', emoji: '💎', image: 'araba_01 (9).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['troismö', 'gran', 'grantrismo',], label: 'masarati (örn. grantrismo, ...)', emoji: '💎', image: 'araba_01 (10).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['c-suv', 'd-suv', 'e-suv', 'b-suv',], label: 'peugot (örn. b-suv, ...)', emoji: '💎', image: 'araba_01 (11).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['e60', 'quaşkıyne', 'skyline',], label: 'nisan (örn. skyline, ...)', emoji: '💎', image: 'araba_01 (12).png' },
        { prompt: 'Bu markaya ait bir araba modelinin adı nedir?', answers: ['orona', 'suv', 'hecpakt', 'leon',], label: 'seat (örn. leon, ...)', emoji: '💎', image: 'araba_01(13).png' },
    ],
    'photo-oyun': [
        { prompt: 'Bu karakter kimdir?', answers: ['sub zero', 'sub-zero', 'subzero', 'sabziro', 'bi han', 'kuai liang', 'sub ziro'], label: 'Sub-Zero', emoji: '❄️', image: 'oyun_01.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['arthur morgan', 'arthur', 'artur morgan', 'artur'], label: 'Arthur Morgan', emoji: '🤠', image: 'oyun_02.webp' },
        { prompt: 'Bu karakter kimdir?', answers: ['sonic', 'sonik', 'sonic the hedgehog', 'kispi sonic'], label: 'Sonic', emoji: '💨', image: 'oyun_03.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['dante', 'devil may cry', 'dmc dante'], label: 'Dante', emoji: '🗡️', image: 'oyun_04.webp' },
        { prompt: 'Bu karakter kimdir?', answers: ['agent 47', 'ajan 47', 'ajan47', 'hitman', '47', 'hitman ajan 47'], label: 'Agent 47', emoji: '🎯', image: 'oyun_05.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['scorpion', 'akrep', 'hanzo hasashi', 'skorpion', 'scorpyon'], label: 'Scorpion', emoji: '🦂', image: 'oyun_06.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['ryu', 'ruyu', 'street fighter ryu', 'ryiv'], label: 'Ryu', emoji: '🥋', image: 'oyun_07.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['kratos', 'god of war', 'kireytos', 'kratoz', 'savas tanrisi', 'savaş tanrısı'], label: 'Kratos', emoji: '⚔️', image: 'oyun_08.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['geralt', 'witcher', 'geralt of rivia', 'rivyali geralt', 'rivya geralt', 'gerald'], label: 'Geralt', emoji: '🐺', image: 'oyun_09.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['master chief', 'chief', 'masterchief', 'john 117', 'spartan 117', 'john-117', 'halo'], label: 'Master Chief', emoji: '🪖', image: 'oyun_10.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['malenia', 'blade of miquella', 'malenia blade of miquella', 'malenya'], label: 'Malenia', emoji: '🌹', image: 'oyun_11.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['cj', 'carl johnson', 'c j', 'cejay', 'carl cj johnson'], label: 'CJ (Carl Johnson)', emoji: '🏀', image: 'oyun_12.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['mario', 'super mario', 'mario bros'], label: 'Mario', emoji: '🍄', image: 'oyun_13.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['gordon freeman', 'gordon', 'freeman', 'gordon friman', 'half life gordon', 'dr freeman'], label: 'Gordon Freeman', emoji: '🥽', image: 'oyun_14.jpg' },
        { prompt: 'Bu karakter kimdir?', answers: ['steve', 'minecraft steve', 'stitvi', 'stiv'], label: 'Steve', emoji: '⛏️', image: 'oyun_15.jpg' }
    ],
    'photo-meyve': [
        { prompt: 'Bu meyvenin adı nedir?', answers: ['elma', 'apple'], label: 'Elma', emoji: '🍎', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['muz', 'banana'], label: 'Muz', emoji: '🍌', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['portakal', 'orange'], label: 'Portakal', emoji: '🍊', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['çilek', 'cilek', 'strawberry'], label: 'Çilek', emoji: '🍓', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['karpuz', 'watermelon'], label: 'Karpuz', emoji: '🍉', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['üzüm', 'uzum', 'grapes', 'grape'], label: 'Üzüm', emoji: '🍇', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['ananas', 'pineapple'], label: 'Ananas', emoji: '🍍', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['kiraz', 'cherry'], label: 'Kiraz', emoji: '🍒', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['şeftali', 'seftali', 'peach'], label: 'Şeftali', emoji: '🍑', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['armut', 'pear'], label: 'Armut', emoji: '🍐', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['limon', 'lemon'], label: 'Limon', emoji: '🍋', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['mango'], label: 'Mango', emoji: '🥭', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['kivi', 'kiwi'], label: 'Kivi', emoji: '🥝', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['avokado', 'avocado'], label: 'Avokado', emoji: '🥑', image: '' },
        { prompt: 'Bu meyvenin adı nedir?', answers: ['hindistan cevizi', 'hindistancevizi', 'coconut', 'kokonat'], label: 'Hindistan Cevizi', emoji: '🥥', image: '' }
    ],
    'photo-tatli': [
        { prompt: 'Bu tatlının adı nedir?', answers: ['tavuk göğsü', 'tavuk gogsu', 'tavukgogsu', 'muhallebi', 'süt helvası', 'sut helvasi', 'sut helvası'], label: 'Tavuk Göğsü', emoji: '🍮', image: 'tatlı_01.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['trileçe', 'trilice', 'tres leches', 'karamelli trileçe', 'karamelli kek', 'damat tatlısı', 'damat tatlisi'], label: 'Trileçe', emoji: '🍰', image: 'tatlı_02.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['künefe', 'kunefe', 'kınefe', 'künefe tatlısı'], label: 'Künefe', emoji: '🧀', image: 'tatlı_03.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['şekerpare', 'sekerpare', 'şeker pare'], label: 'Şekerpare', emoji: '🥜', image: 'tatlı_04.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['kazandibi', 'kazan dibi', 'kazandibi tatlısı'], label: 'Kazandibi', emoji: '🟤', image: 'tatlı_05.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['baklava', 'fıstıklı baklava', 'fistikli baklava', 'fıstık dolması', 'fistik dolmasi'], label: 'Baklava', emoji: '🍯', image: 'tatlı_06.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['supangle', 'puding', 'çikolatalı puding', 'cikolatali puding', 'çikolata puding'], label: 'Supangle', emoji: '🍫', image: 'tatlı_07.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['aşure', 'asure', 'ashura', 'aşure tatlısı', 'asure tatlisi'], label: 'Aşure', emoji: '🥣', image: 'tatlı_08.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['fırın sütlaç', 'firin sutlac', 'sütlaç', 'sutlac', 'rice pudding', 'sütlâç'], label: 'Fırın Sütlaç', emoji: '🍚', image: 'tatlı_09.jpg' },
        { prompt: 'Bu tatlının adı nedir?', answers: ['magnolia', 'magnolio', 'magnoly', 'magnolia puding', 'çilekli magnolia', 'kup', 'kup tatlısı'], label: 'Magnolia (Magnolio)', emoji: '🍓', image: 'tatlı_10.jpg' }
    ],
    'photo-yemekler': [
        { prompt: 'Bu yemeğin adı nedir?', answers: ["babagannuş", "babaganuş", "baba ganuş", "baba ghanoush", "patlıcan salatası", "patlican salatasi", "közlenmiş patlıcan", "kozlenmis patlican", "patlıcan ezmesi"], label: "Babagannuş", emoji: '🍆', image: 'yemekler_01.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["biber dolması", "biber dolmasi", "dolma", "zeytinyağlı biber dolması", "zeytinyagli biber dolmasi"], label: "Biber Dolması", emoji: '🫑', image: 'yemekler_02.webp' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["beyti", "beyti kebabı", "beyti kebabi", "beyti kebap"], label: "Beyti Kebabı", emoji: '🌯', image: 'yemekler_03.avif' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["döner", "doner", "döner kebabı", "doner kebabi", "et döner", "et doner", "döner kebap"], label: "Döner Kebabı", emoji: '🥙', image: 'yemekler_04.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["akıtma", "akitma", "krep", "crepe", "pancake"], label: "Akıtma", emoji: '🥞', image: 'yemekler_05.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["şehriye çorbası", "sehriye corbasi", "domatesli şehriye çorbası", "domatesli sehriye corbasi", "şehriye", "sehriye", "domates çorbası", "domates corbasi"], label: "Şehriye Çorbası", emoji: '🍜', image: 'yemekler_06.webp' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["ali nazik", "alinazik", "ali nazik kebabı", "ali nazik kebabi", "alinazik kebap"], label: "Ali Nazik Kebabı", emoji: '🍆', image: 'yemekler_07.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["analı kızlı", "anali kizli", "analı kızlı çorbası", "anali kizli corbasi", "analı kızlı yemeği", "anali kizli yemegi"], label: "Analı Kızlı", emoji: '🍲', image: 'yemekler_08.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["bulgur pilavı", "bulgur pilavi", "bulgur", "bulgur pilav"], label: "Bulgur Pilavı", emoji: '🌾', image: 'yemekler_09.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["çiğ köfte", "cig kofte", "çiğköfte", "cigkofte"], label: "Çiğ Köfte", emoji: '🌶️', image: 'yemekler_10.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["arabaşı", "arabasi", "arabaşı çorbası", "arabasi corbasi", "arabaşı hamuru", "arabasi hamuru"], label: "Arabaşı Çorbası", emoji: '🍲', image: 'yemekler_11.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["bonfile", "antrikot", "biftek", "steak", "dana biftek", "bonfile ızgara", "bonfile izgara"], label: "Bonfile / Antrikot", emoji: '🥩', image: 'yemekler_12.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["boyoz", "izmir boyozu", "İzmir boyozu"], label: "İzmir Boyozu", emoji: '🥐', image: 'yemekler_13.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["cacık", "cacik", "yoğurtlu cacık", "yogurtlu cacik"], label: "Cacık", emoji: '🥒', image: 'yemekler_14.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["akçaabat köftesi", "akcaabat koftesi", "akçaabat köfte", "akcaabat kofte", "ızgara köfte", "izgara kofte"], label: "Akçaabat Köftesi", emoji: '🧆', image: 'yemekler_15.avif' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["elbasan tava", "elbasan tawa", "beşamel soslu et", "besamel soslu et"], label: "Elbasan Tava", emoji: '🍖', image: 'yemekler_16.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["etli ekmek", "etliekmek", "konya etli ekmek"], label: "Etli Ekmek", emoji: '🫓', image: 'yemekler_17.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["etli nohut", "nohut", "nohut yemeği", "nohut yemegi", "etli nohut yemeği", "etli nohut yemegi"], label: "Etli Nohut", emoji: '🥣', image: 'yemekler_18.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["lahmacun", "lahmacum", "lamacun", "lahmajun"], label: "Lahmacun", emoji: '🍕', image: 'yemekler_19.jpg' },
        { prompt: 'Bu yemeğin adı nedir?', answers: ["adana kebap", "adana", "adana kebabı", "adana kebabi", "kebap", "kebap adana"], label: "Adana Kebabı", emoji: '🍢', image: 'yemekler_20.jpg' },
    ],
    'photo-bayraklar': [
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['güney kore', 'guney kore', 'south korea', 'kore cumhuriyeti', 'korea'], label: 'Güney Kore', emoji: '🇰🇷', image: 'bayraklar_01.jpg' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['fransa', 'france', 'fransız', 'fransiz'], label: 'Fransa', emoji: '🇫🇷', image: 'bayraklar_02.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['kuzey makedonya', 'north macedonia', 'makedonya', 'macedonia'], label: 'Kuzey Makedonya', emoji: '🇲🇰', image: 'bayraklar_03.jpg' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['türkiye', 'turkiye', 'turkey', 'türk', 'turk'], label: 'Türkiye', emoji: '🇹🇷', image: 'bayraklar_04.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['israil', 'israel'], label: 'İsrail', emoji: '🇮🇱', image: 'bayraklar_05.jpg' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['danimarka', 'denmark', 'danish'], label: 'Danimarka', emoji: '🇩🇰', image: 'bayraklar_06.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['abd', 'amerika', 'amerika birleşik devletleri', 'amerika birlesik devletleri', 'usa', 'united states', 'united states of america'], label: 'Amerika Birleşik Devletleri', emoji: '🇺🇸', image: 'bayraklar_07.jpg' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['brezilya', 'brazil', 'brasil'], label: 'Brezilya', emoji: '🇧🇷', image: 'bayraklar_08.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['özbekistan', 'ozbekistan', 'uzbekistan'], label: 'Özbekistan', emoji: '🇺🇿', image: 'bayraklar_09.jpg' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['suriye', 'syria', 'suriyeli'], label: 'Suriye', emoji: '🇸🇾', image: 'bayraklar_10.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['ermenistan', 'armenia', 'ermeni'], label: 'Ermenistan', emoji: '🇦🇲', image: 'bayraklar_11.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['azerbaycan', 'azerbaijan', 'azərbaycan'], label: 'Azerbaycan', emoji: '🇦🇿', image: 'bayraklar_12.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['türkmenistan', 'turkmenistan', 'türkmen', 'turkmen'], label: 'Türkmenistan', emoji: '🇹🇲', image: 'bayraklar_13.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['pakistan'], label: 'Pakistan', emoji: '🇵🇰', image: 'bayraklar_14.png' },
        { prompt: 'Bu hangi ülkenin bayrağı?', answers: ['almanya', 'germany', 'deutschland', 'alman'], label: 'Almanya', emoji: '🇩🇪', image: 'bayraklar_15.png' }
    ],
    'photo-hayvan': [
        { prompt: 'Bu hayvanın adı nedir?', answers: ['aslan', 'lion'], label: 'Aslan', emoji: '🦁', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['kaplan', 'tiger'], label: 'Kaplan', emoji: '🐯', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['ayı', 'bear'], label: 'Ayı', emoji: '🐻', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['kurt', 'wolf', 'bozkurt'], label: 'Kurt', emoji: '🐺', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['tilki', 'fox'], label: 'Tilki', emoji: '🦊', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['tavşan', 'rabbit', 'bunny', 'tavsar'], label: 'Tavşan', emoji: '🐰', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['panda', 'dev panda'], label: 'Panda', emoji: '🐼', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['koala', 'kuala'], label: 'Koala', emoji: '🐨', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['maymun', 'monkey'], label: 'Maymun', emoji: '🐵', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['fil', 'elephant'], label: 'Fil', emoji: '🐘', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['zürafa', 'giraffe', 'zirafa'], label: 'Zürafa', emoji: '🦒', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['zebra', 'zibra'], label: 'Zebra', emoji: '🦓', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['gergedan', 'rhino'], label: 'Gergedan', emoji: '🦏', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['su aygırı', 'hipopotam', 'hippo', 'su aygır'], label: 'Su Aygırı (Hipopotam)', emoji: '🦛', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['deve', 'camel'], label: 'Deve', emoji: '🐫', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['kanguru', 'kangaroo'], label: 'Kanguru', emoji: '🦘', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['timsah', 'crocodile', 'krokodil', 'aligator'], label: 'Timsah', emoji: '🐊', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['yılan', 'snake', 'ilan'], label: 'Yılan', emoji: '🐍', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['kartal', 'eagle'], label: 'Kartal', emoji: '🦅', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['penguen', 'penguin'], label: 'Penguen', emoji: '🐧', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['baykuş', 'owl'], label: 'Baykuş', emoji: '🦉', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['yunus', 'dolphin', 'delfin'], label: 'Yunus', emoji: '🐬', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['köpekbalığı', 'köpek balığı', 'shark', 'köpek balık', 'kopekbaligi'], label: 'Köpekbalığı', emoji: '🦈', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['balina', 'whale'], label: 'Balina', emoji: '🐳', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['ahtapot', 'octopus'], label: 'Ahtapot', emoji: '🐙', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['yengeç', 'crab', 'pavurya'], label: 'Yengeç', emoji: '🦀', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['kelebek', 'butterfly'], label: 'Kelebek', emoji: '🦋', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['arı', 'bee', 'bal arısı', 'ari'], label: 'Arı', emoji: '🐝', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['kaplumbağa', 'tosbağa', 'turtle', 'kaplumba', 'tosbaga'], label: 'Kaplumbağa', emoji: '🐢', image: '' },
        { prompt: 'Bu hayvanın adı nedir?', answers: ['kurbağa', 'frog', 'kurba'], label: 'Kurbağa', emoji: '🐸', image: '' }
    ],
    'photo-emoji': [
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['kahkaha', 'gülmekten ağlamak', 'çok güldüm', 'gülmek', 'güler yüz', 'gulmekten aglamak'], label: 'Kahkaha', emoji: '😂', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['gülümseme', 'mutluluk', 'mutlu', 'gülümseyen yüz', 'sevimli'], label: 'Gülümseme (Mutluluk)', emoji: '😊', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['aşık', 'aşk', 'kalp gözler', 'kalp gözlü', 'aşık olmak', 'sevmek', 'ask'], label: 'Aşık (Kalp Gözler)', emoji: '😍', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['kızgın', 'sinirli', 'öfke', 'öfkeli', 'kızma', 'sinir'], label: 'Kızgın / Öfkeli', emoji: '😡', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['ağlamak', 'üzgün', 'ağlayan yüz', 'ağlıyor', 'hüzün', 'uzgun'], label: 'Ağlayan / Üzgün', emoji: '😢', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['korku', 'korkmuş', 'şok', 'şaşkın', 'korkan', 'korku çığlığı'], label: 'Korku / Şok', emoji: '😱', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['havalı', 'güneş gözlüklü', 'cool', 'rahat', 'karizma', 'gunes gozluklu'], label: 'Havalı (Cool)', emoji: '😎', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['uyku', 'uyuyan', 'uyumak', 'uykulu', 'horlamak'], label: 'Uyuyan', emoji: '😴', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['mide bulantısı', 'midesi bulanan', 'kusacak', 'kusmak isteyen', 'midesi bozulan'], label: 'Midesi Bulanan', emoji: '🤢', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['parti', 'kutlama', 'kutlamak', 'doğum günü', 'eğlence', 'kutlayan'], label: 'Parti / Kutlama', emoji: '🥳', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['melek', 'masum', 'masum gülüş', 'saf', 'haleli'], label: 'Melek', emoji: '😇', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['şeytan', 'fesat', 'kötü niyetli', 'yaramaz', 'seytan', 'kötü gülüş'], label: 'Şeytan', emoji: '😈', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['düşünen', 'düşünüyor', 'düşünce', 'düşünceli', 'hmm', 'derin düşünce'], label: 'Düşünen', emoji: '🤔', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['kafa patlaması', 'şaşkınlık', 'mind blown', 'patlayan', 'çok şaşırmak', 'beyin yandı'], label: 'Kafa Patlaması (Şok)', emoji: '🤯', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['üşümek', 'üşüyor', 'soğuk', 'donmak', 'donan', 'dondurucu soğuk', 'usumek'], label: 'Üşüyen', emoji: '🥶', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['terlemek', 'terleyen', 'sıcak', 'çok sıcak', 'erimek', 'bunalmak', 'sicak'], label: 'Terleyen (Sıcak)', emoji: '🥵', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['kusmak', 'kusan', 'kusma', 'kusuyor', 'kustu'], label: 'Kusan', emoji: '🤮', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['çılgın', 'deli', 'delilik', 'manyak', 'eğlenceli çılgın', 'cilgin'], label: 'Çılgın / Deli', emoji: '🤪', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['dil çıkarmak', 'dil çıkaran', 'şımarık', 'şaka', 'dil dışarıda', 'nanik'], label: 'Dil Çıkaran', emoji: '😜', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['hıçkıra hıçkıra ağlamak', 'hıçkırık', 'çok ağlamak', 'hüngür hüngür', 'hüngür hüngür ağlamak'], label: 'Hıçkıra Hıçkıra Ağlamak', emoji: '😭', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['sevgi dolu', 'sevgi', 'kalpler', 'romantik', 'mutlu sevgi'], label: 'Sevgi Dolu', emoji: '🥰', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['utanmak', 'utan', 'utangaç', 'kızarmak', 'kızaran yüz', 'utanmış'], label: 'Utanan', emoji: '😳', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['para', 'para gözlü', 'zengin', 'maddiyatçı', 'dolar', 'parayı düşünen'], label: 'Para Gözlü', emoji: '🤑', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['sus', 'sessiz', 'sus işareti', 'gizli', 'sessiz olun', 'ses çıkarma', 'sus isareti'], label: 'Sus İşareti / Sessiz', emoji: '🤫', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['kuru kafa', 'kafatası', 'ölüm', 'gülmekten ölmek', 'kurukafa'], label: 'Kuru Kafa', emoji: '💀', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['hayalet', 'ghost', 'hayaletler', 'korkutma'], label: 'Hayalet', emoji: '👻', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['robot', 'android', 'yapay zeka'], label: 'Robot', emoji: '🤖', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['palyaço', 'palyaco', 'clown', 'soytarı'], label: 'Palyaço', emoji: '🤡', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['maske', 'maskeli', 'hasta', 'maskeli yüz', 'virüs', 'korona'], label: 'Maskeli (Hasta)', emoji: '😷', image: '' },
        { prompt: 'Bu emojinin anlamı nedir?', answers: ['uzaylı', 'alien', 'uzaylı yaratık', 'marslı'], label: 'Uzaylı', emoji: '👽', image: '' }
    ],
    'photo-icecek': [
        { prompt: 'Bu içeceğin adı nedir?', answers: ['kola', 'cola', 'gazoz', 'gazlı içecek', 'soğuk içecek', 'soda'], label: 'Kola', emoji: '🥤', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['süt', 'süt bardağı', 'milk', 'sut', 'bir bardak süt'], label: 'Süt', emoji: '🥛', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['kahve', 'türk kahvesi', 'coffee', 'espresso'], label: 'Kahve', emoji: '☕', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['çay', 'çay bardağı', 'tea', 'demli çay', 'cay'], label: 'Çay', emoji: '🍵', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['meyve suyu', 'kutu meyve suyu', 'juice'], label: 'Meyve Suyu', emoji: '🧃', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['bubble tea', 'boba', 'inci çayı', 'inci çay', 'baloncuk çayı'], label: 'Bubble Tea (İnci Çayı)', emoji: '🧋', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['bira', 'beer', 'bira bardağı', 'bira kadehi'], label: 'Bira', emoji: '🍺', image: '' },
        { prompt: 'Bu ne yapılıyor?', answers: ['şerefe', 'kadeh tokuşturma', 'bira kadehleri', 'kadeh tokuşturan biralar', 'cheers'], label: 'Şerefe (Kadeh Tokuşturma)', emoji: '🍻', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['şampanya', 'şampanya kadehi', 'şampanya kadehleri', 'sampanya', 'kadeh tokuşturma'], label: 'Şampanya Kadehi', emoji: '🥂', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['şarap', 'kırmızı şarap', 'şarap kadehi', 'wine', 'sarap'], label: 'Şarap', emoji: '🍷', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['viski', 'viski bardağı', 'whiskey', 'wiski'], label: 'Viski', emoji: '🥃', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['kokteyl', 'martini', 'kokteyl kadehi', 'cocktail', 'koktely'], label: 'Kokteyl', emoji: '🍸', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['tropik kokteyl', 'tropik içecek', 'meyveli kokteyl', 'karışık içecek', 'tropikal içecek'], label: 'Tropik Kokteyl', emoji: '🍹', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['şampanya', 'şampanya şişesi', 'köpüklü şarap', 'şampanya patlatmak', 'sampanya sisesi'], label: 'Şampanya (Şişe)', emoji: '🍾', image: '' },
        { prompt: 'Bu neyin adı?', answers: ['demlik', 'çaydanlık', 'çaydanlık demlik', 'teapot'], label: 'Demlik / Çaydanlık', emoji: '🫖', image: '' },
        { prompt: 'Bu neyin adı?', answers: ['biberon', 'bebek şişesi', 'biberon süt', 'bebe biberonu'], label: 'Biberon', emoji: '🍼', image: '' },
        { prompt: 'Bu içeceğin adı nedir?', answers: ['mate', 'mate çayı', 'mate fincanı'], label: 'Mate Çayı', emoji: '🧉', image: '' }
    ],
    'photo-spor': [
        { prompt: 'Bu sporun adı nedir?', answers: ['futbol', 'futbol topu', 'soccer', 'top oynama'], label: 'Futbol', emoji: '⚽', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['basketbol', 'basketbol topu', 'basket', 'nba'], label: 'Basketbol', emoji: '🏀', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['voleybol', 'voleybol topu', 'volleyball'], label: 'Voleybol', emoji: '🏐', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['tenis', 'tenis topu', 'kort tenisi'], label: 'Tenis', emoji: '🎾', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['masa tenisi', 'ping pong', 'pinpon', 'masa tenis'], label: 'Masa Tenisi', emoji: '🏓', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['badminton', 'tüylü top', 'tüytop'], label: 'Badminton', emoji: '🏸', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['beyzbol', 'baseball', 'beyzbol topu'], label: 'Beyzbol', emoji: '⚾', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['softbol', 'softball', 'softbol topu'], label: 'Softbol', emoji: '🥎', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['amerikan futbolu', 'american football', 'nfl'], label: 'Amerikan Futbolu', emoji: '🏈', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['rugby', 'ragbi', 'ragby'], label: 'Rugby', emoji: '🏉', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['bilardo', '8 top', 'bilardo topu', 'sekiz top', 'snooker'], label: 'Bilardo', emoji: '🎱', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['golf', 'golf deliği', 'golf oynama'], label: 'Golf', emoji: '⛳', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['buz hokeyi', 'hokey', 'ice hockey', 'buz hokeyi sopası'], label: 'Buz Hokeyi', emoji: '🏒', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['çim hokeyi', 'hokey', 'field hockey'], label: 'Çim Hokeyi', emoji: '🏑', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['lakros', 'lacrosse', 'lakroz'], label: 'Lakros', emoji: '🥍', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['kriket', 'cricket', 'kriket sopası'], label: 'Kriket', emoji: '🏏', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['frizbi', 'ultimate frizbi', 'frisbee', 'frisbi', 'uçan disk'], label: 'Frizbi', emoji: '🥏', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['boks', 'boks eldiveni', 'boxing', 'boks maçı'], label: 'Boks', emoji: '🥊', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['karate', 'dövüş sanatları', 'judo', 'taekwondo', 'tekvando', 'aikido'], label: 'Karate / Dövüş Sanatları', emoji: '🥋', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['güreş', 'wrestling', 'grekoromen', 'pehlivan güreşi', 'güreşçi', 'gures'], label: 'Güreş', emoji: '🤼', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['jimnastik', 'gymnastics', 'akrobasi', 'takla', 'artistik jimnastik'], label: 'Jimnastik', emoji: '🤸', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['halter', 'ağırlık kaldırma', 'ağırlık', 'deadlift', 'halterci', 'agirlik kaldirma'], label: 'Halter', emoji: '🏋️', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['yüzme', 'yüzmek', 'swimming', 'yüzücü', 'yuzme'], label: 'Yüzme', emoji: '🏊', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['eskrim', 'fencing', 'kılıç', 'kılıç dövüşü', 'kilic', 'eskrim dövüşü'], label: 'Eskrim', emoji: '🤺', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['okçuluk', 'ok atma', 'yay ve ok', 'archery', 'okçu', 'okculuk'], label: 'Okçuluk', emoji: '🏹', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['balık tutma', 'olta', 'balıkçılık', 'olta balıkçılığı', 'balık avı'], label: 'Olta Balıkçılığı', emoji: '🎣', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['bisiklet', 'bisiklet sürmek', 'cycling', 'bisikletçi', 'bisiklete binme'], label: 'Bisiklet', emoji: '🚴', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['binicilik', 'at yarışı', 'at binme', 'jokey', 'at yarisi'], label: 'Binicilik (At Yarışı)', emoji: '🏇', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['buz pateni', 'paten', 'ice skating', 'buzda kayma'], label: 'Buz Pateni', emoji: '⛸️', image: '' },
        { prompt: 'Bu sporun adı nedir?', answers: ['kayak', 'kayak yapma', 'ski', 'kaymak', 'kar kayağı'], label: 'Kayak', emoji: '⛷️', image: '' }
    ],
    'photo-kizanime': [
        { prompt: 'Bu karakterin ismi nedir?', answers: ['erza', 'erza scarlet', 'erza skalet', 'elza', 'fairy tail erza', 'scarlet'], label: 'Erza Scarlet (Fairy Tail)', emoji: '🗡️', image: 'kız_01.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['revy', 'revi', 'rebecca lee', 'rebecca lee revy', 'black lagoon revy', 'black lagoon'], label: 'Revy (Black Lagoon)', emoji: '🔫', image: 'kız_02.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['asuna', 'asuna yuuki', 'yuuki asuna', 'sword art online asuna', 'asuna yuki'], label: 'Asuna Yuuki (Sword Art Online)', emoji: '🏖️', image: 'kız_03.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['makio', 'makiyo', 'demon slayer makio', 'kimetsu no yaiba makio'], label: 'Makio (Demon Slayer)', emoji: '🌼', image: 'kız_04.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['mizore', 'mizore shirayuki', 'shirayuki mizore', 'sirayuki mizore', 'rosario vampire mizore'], label: 'Mizore Shirayuki (Rosario + Vampire)', emoji: '❄️', image: 'kız_05.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['yoko', 'yoko littner', 'yoko ritona', 'gurren lagann yoko', 'tengen toppa yoko'], label: 'Yoko Littner (Gurren Lagann)', emoji: '🎯', image: 'kız_06.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['lucy', 'lucy heartfilia', 'lusi', 'fairy tail lucy', 'heartfilia'], label: 'Lucy Heartfilia (Fairy Tail)', emoji: '🔑', image: 'kız_07.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['blair', 'blair soul eater', 'soul eater blair'], label: 'Blair (Soul Eater)', emoji: '🐱', image: 'kız_08.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['celty', 'celty sturluson', 'durarara celty', 'kelti', 'dullahan', 'selti'], label: 'Celty Sturluson (Durarara!!)', emoji: '🏍️', image: 'kız_09.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['tsunade', 'tsunade senju', 'lady tsunade', 'beşinci hokage', 'besinci hokage'], label: 'Tsunade Senju (Naruto)', emoji: '🐌', image: 'kız_10.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['kagura', 'kagura yato', 'gintama kagura', 'yato kagura'], label: 'Kagura (Gintama)', emoji: '☂️', image: 'kız_11.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['miruko', 'mirko', 'rumi usagiyama', 'usagiyama rumi', 'my hero academia mirko', 'my hero academia miruko'], label: 'Mirko / Rumi Usagiyama (My Hero Academia)', emoji: '🐇', image: 'kız_12.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['marin', 'marin kitagawa', 'kitagawa marin', 'my dress up darling marin'], label: 'Marin Kitagawa (My Dress-Up Darling)', emoji: '🌺', image: 'kız_13.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['tanya', 'tanya degurechaff', 'youjo senki tanya', 'degurechaff', 'tania'], label: 'Tanya Degurechaff (Youjo Senki)', emoji: '🎖️', image: 'kız_14.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['rias', 'rias gremory', 'dxd rias', 'highschool dxd rias', 'high school dxd rias'], label: 'Rias Gremory (High School DxD)', emoji: '👿', image: 'kız_15.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['sailor moon', 'usagi', 'usagi tsukino', 'tsukino usagi'], label: 'Sailor Moon / Usagi Tsukino', emoji: '🌙', image: 'kız_16.png' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['mikasa', 'mikasa ackerman', 'mikasa akerman', 'attack on titan mikasa', 'shingeki no kyojin mikasa'], label: 'Mikasa Ackerman (Attack on Titan)', emoji: '⚔️', image: 'kız_17.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['yoruichi', 'yoruichi shihouin', 'yoruichi shihoin', 'bleach yoruichi', 'shihoin yoruichi'], label: 'Yoruichi Shihouin (Bleach)', emoji: '⚡', image: 'kız_18.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['nami', 'one piece nami', 'cat burglar nami'], label: 'Nami (One Piece)', emoji: '🍊', image: 'kız_19.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['winry', 'winry rockbell', 'winri', 'fullmetal alchemist winry'], label: 'Winry Rockbell (Fullmetal Alchemist)', emoji: '🔧', image: 'kız_20.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['kaguya', 'kaguya shinomiya', 'shinomiya kaguya', 'love is war kaguya'], label: 'Kaguya Shinomiya (Kaguya-sama: Love Is War)', emoji: '❤️', image: 'kız_21.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['nezuko', 'nezuko kamado', 'kamado nezuko', 'demon slayer nezuko', 'kimetsu no yaiba nezuko'], label: 'Nezuko Kamado (Demon Slayer)', emoji: '🎋', image: 'kız_22.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['anya', 'anya forger', 'forger anya', 'spy x family anya', 'anya forgor'], label: 'Anya Forger (Spy x Family)', emoji: '🥜', image: 'kız_23.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['rem', 're zero rem', 'rezero rem', 'ram değil rem', 're:zero rem'], label: 'Rem (Re:Zero)', emoji: '💙', image: 'kız_24.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['rukia', 'rukia kuchiki', 'kuchiki rukia', 'bleach rukia'], label: 'Rukia Kuchiki (Bleach)', emoji: '🗡️', image: 'kız_25.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['sakura', 'sakura haruno', 'haruno sakura', 'naruto sakura'], label: 'Sakura Haruno (Naruto)', emoji: '🌸', image: 'kız_26.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['power', 'chainsaw man power', 'chensaw man power'], label: 'Power (Chainsaw Man)', emoji: '🩸', image: 'kız_27.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['yor', 'yor forger', 'yor briar', 'spy x family yor', 'forger yor'], label: 'Yor Forger (Spy x Family)', emoji: '🗡️', image: 'kız_28.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['hinata', 'hinata hyuga', 'hyuga hinata', 'naruto hinata'], label: 'Hinata Hyuga (Naruto)', emoji: '💜', image: 'kız_29.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['makima', 'chainsaw man makima'], label: 'Makima (Chainsaw Man)', emoji: '🐶', image: 'kız_30.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['nico robin', 'robin', 'one piece robin', 'nico'], label: 'Nico Robin (One Piece)', emoji: '📚', image: 'kız_31.webp' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['emilia', 're zero emilia', 'rezero emilia', 're:zero emilia'], label: 'Emilia (Re:Zero)', emoji: '❄️', image: 'kız_32.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['zero two', 'zerotwo', '02', 'darling in the franxx zero two'], label: 'Zero Two (Darling in the Franxx)', emoji: '❤️', image: 'kız_33.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['c.c.', 'cc', 'c2', 'code geass c.c.', 'code geass cc'], label: 'C.C. (Code Geass)', emoji: '🟢', image: 'kız_34.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['boa hancock', 'hancock', 'boa', 'one piece boa hancock', 'pirate empress'], label: 'Boa Hancock (One Piece)', emoji: '🐍', image: 'kız_35.jpg' },
        { prompt: 'Bu karakterin ismi nedir?', answers: ['satsuki', 'satsuki kiryuin', 'kiryuin satsuki', 'kill la kill satsuki', 'satsuki kiriyuin'], label: 'Satsuki Kiryuin (Kill la Kill)', emoji: '👑', image: 'kız_36.jpg' }
    ],
    'photo-unluler': [
        { prompt: 'Bu ünlünün adı nedir?', answers: ['christian bale', 'kristian bale', 'bale', 'bruce wayne'], label: 'Christian Bale', emoji: '🎬', image: 'erkek_01.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['leonardo dicaprio', 'dicaprio', 'leo', 'leonardo di caprio', 'di caprio', 'leonardo'], label: 'Leonardo DiCaprio', emoji: '🎬', image: 'erkek_02.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['brad pitt', 'brat pitt', 'pitt', 'brad'], label: 'Brad Pitt', emoji: '🎬', image: 'erkek_03.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['will smith', 'wil smith', 'smith', 'will'], label: 'Will Smith', emoji: '🎬', image: 'erkek_04.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['nicolas cage', 'nicholas cage', 'nikolas cage', 'cage', 'nicolas'], label: 'Nicolas Cage', emoji: '🎬', image: 'erkek_05.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['jason statham', 'statham', 'jason statem', 'jason'], label: 'Jason Statham', emoji: '🎬', image: 'erkek_06.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['robert downey jr', 'robert downey', 'downey', 'rdj', 'tony stark', 'robert dauni'], label: 'Robert Downey Jr.', emoji: '🎬', image: 'erkek_07.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['hugh jackman', 'jackman', 'wolverine', 'huc jekman', 'hugh'], label: 'Hugh Jackman', emoji: '🎬', image: 'erkek_08.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['vin diesel', 'vin disel', 'dominic toretto', 'dom toretto', 'vin dizel'], label: 'Vin Diesel', emoji: '🎬', image: 'erkek_09.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['kenan imirzalıoğlu', 'kenan imirzalioglu', 'kenan', 'imirzalıoğlu', 'kenan imirzalı'], label: 'Kenan İmirzalıoğlu', emoji: '🎬', image: 'erkek_10.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['burak özçivit', 'burak ozcivit', 'burak', 'özçivit'], label: 'Burak Özçivit', emoji: '🎬', image: 'erkek_11.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['aras bulut iynemli', 'aras bulut', 'iynemli', 'aras'], label: 'Aras Bulut İynemli', emoji: '🎬', image: 'erkek_12.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['kerem bürsin', 'kerem bursin', 'bürsin', 'kerem'], label: 'Kerem Bürsin', emoji: '🎬', image: 'erkek_13.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['çağatay ulusoy', 'cagatay ulusoy', 'ulusoy', 'çağatay'], label: 'Çağatay Ulusoy', emoji: '🎬', image: 'erkek_14.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['kıvanç tatlıtuğ', 'kivanc tatlitug', 'tatlıtuğ', 'kıvanç', 'kivanc'], label: 'Kıvanç Tatlıtuğ', emoji: '🎬', image: 'erkek_15.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['barış arduç', 'baris arduc', 'arduç', 'barış'], label: 'Barış Arduç', emoji: '🎬', image: 'erkek_16.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['alp navruz', 'alp nauroz', 'navruz', 'alp'], label: 'Alp Navruz', emoji: '🎬', image: 'erkek_17.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['furkan andıç', 'furkan andic', 'andıç', 'furkan'], label: 'Furkan Andıç', emoji: '🎬', image: 'erkek_18.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['alperen duymaz', 'duymaz', 'alperen'], label: 'Alperen Duymaz', emoji: '🎬', image: 'erkek_19.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['johnny depp', 'johnny dep', 'depp', 'jack sparrow', 'kaptan jack', 'joni dep'], label: 'Johnny Depp', emoji: '🎬', image: 'erkek_20.jpg' }
    ],
    'photo-kadinlar': [
        { prompt: 'Bu ünlünün adı nedir?', answers: ['demet özdemir', 'demet'], label: 'Demet Özdemir', emoji: '🎬', image: 'kızoyuncu_01.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['emma stone', 'ema stone', 'stone', 'emma'], label: 'Emma Stone', emoji: '🎬', image: 'kızoyuncu_02.webp' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['serenay sarıkaya', 'serenay'], label: 'Serenay Sarıkaya', emoji: '🎬', image: 'kızoyuncu_03.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['bensu soral', 'bensu', 'soral'], label: 'Bensu Soral', emoji: '🎬', image: 'kızoyuncu_04.webp' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['barbara palvin', 'palvin', 'barbara'], label: 'Barbara Palvin', emoji: '🎬', image: 'kızoyuncu_05.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['millie bobby brown', 'millie', 'eleven', 'stranger things eleven'], label: 'Millie Bobby Brown', emoji: '🎬', image: 'kızoyuncu_06.webp' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['devrim özkan', 'devrim'], label: 'Devrim Özkan', emoji: '🎬', image: 'kızoyuncu_07.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['natalie portman', 'natale portman', 'portman', 'natali'], label: 'Natalie Portman', emoji: '🎬', image: 'kızoyuncu_08.webp' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['elçin sangu', 'elçin', 'elcin'], label: 'Elçin Sangu', emoji: '🎬', image: 'kızoyuncu_09.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['scarlett johansson', 'scarlet johanson', 'johansson', 'scarlett', 'skarlet'], label: 'Scarlett Johansson', emoji: '🎬', image: 'kızoyuncu_10.webp' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['melis sezen', 'melis', 'sezen'], label: 'Melis Sezen', emoji: '🎬', image: 'kızoyuncu_11.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['mine tugay', 'mine', 'tugay'], label: 'Mine Tugay', emoji: '🎬', image: 'kızoyuncu_12.webp' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['angelina jolie', 'anjelina coli', 'jolie', 'angelina', 'ancelina'], label: 'Angelina Jolie', emoji: '🎬', image: 'kızoyuncu_13.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['anya taylor-joy', 'anya taylor joy', 'anya', 'taylor joy', 'anya teylor'], label: 'Anya Taylor-Joy', emoji: '🎬', image: 'kızoyuncu_14.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['sydney sweeney', 'sidni svini', 'sweeney', 'sydney', 'sidni'], label: 'Sydney Sweeney', emoji: '🎬', image: 'kızoyuncu_15.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['hazar ergüçlü', 'hazar erguclu', 'hazar'], label: 'Hazar Ergüçlü', emoji: '🎬', image: 'kızoyuncu_16.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['jenna ortega', 'cena ortega', 'ortega', 'jenna', 'wednesday'], label: 'Jenna Ortega', emoji: '🎬', image: 'kızoyuncu_17.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['megan fox', 'megen foks', 'fox', 'megan'], label: 'Megan Fox', emoji: '🎬', image: 'kızoyuncu_18.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['nilperi şahinkaya', 'nilperi sahinkaya', 'nilperi'], label: 'Nilperi Şahinkaya', emoji: '🎬', image: 'kızoyuncu_19.jpg' },
        { prompt: 'Bu ünlünün adı nedir?', answers: ['hande erçel', 'hande ercel', 'erçel', 'ercel', 'hande'], label: 'Hande Erçel', emoji: '🎬', image: 'kızoyuncu_20.jpg' }
    ],
    'photo-youtuber': [
        { prompt: 'Bu YouTuber kim?', answers: ['mrbeast', 'mr beast', 'mister beast', 'jimmy donaldson', 'mistır biist'], label: 'MrBeast', emoji: '💰', image: 'yotuber_01.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['logan paul', 'logan'], label: 'Logan Paul', emoji: '🥊', image: 'yotuber_02.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['pewdiepie', 'pew die pie', 'pewdie pie', 'felix kjellberg', 'felix', 'pivdiy pay'], label: 'PewDiePie', emoji: '👊', image: 'yotuber_03.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['mark rober', 'mark rover', 'mark'], label: 'Mark Rober', emoji: '🔬', image: 'yotuber_04.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['jake paul', 'jake', 'ceyk pol'], label: 'Jake Paul', emoji: '🎤', image: 'yotuber_05.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['enes batur', 'enes'], label: 'Enes Batur', emoji: '🎮', image: 'yotuber_06.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['orkun ışıtmak', 'orkun isitmak', 'orkun'], label: 'Orkun Işıtmak', emoji: '✈️', image: 'yotuber_07.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['ruhi çenet', 'ruhi cenet', 'ruhi'], label: 'Ruhi Çenet', emoji: '📌', image: 'yotuber_08.jpg' },
        { prompt: 'Bu YouTuber ekibinin adı nedir?', answers: ['kafalar', 'kafalar ekibi'], label: 'Kafalar', emoji: '🤪', image: 'yotuber_09.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['barış özcan', 'baris ozcan', 'barış', 'baris'], label: 'Barış Özcan', emoji: '🧠', image: 'yotuber_10.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['deli mi ne', 'delimine', 'fester abdü', 'fester abdu', 'fester'], label: 'Deli Mi Ne?', emoji: '😜', image: 'yotuber_11.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['alper rende', 'alper'], label: 'Alper Rende', emoji: '🎵', image: 'yotuber_12.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['mami emen', 'mami'], label: 'Mami Emen', emoji: '😂', image: 'yotuber_13.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['sefa kındır', 'sefa kindir', 'sefa'], label: 'Sefa Kındır', emoji: '😎', image: 'yotuber_14.jpg' },
        { prompt: 'Bu YouTuber kim?', answers: ['mertcan bahar', 'mertcan'], label: 'Mertcan Bahar', emoji: '😄', image: 'yotuber_15.jpg' }
    ],
    'photo-yayinci': [
        { prompt: 'Bu yayıncı kim?', answers: ['kai cenat', 'kai', 'cenat', 'kay senat', 'kai sonat'], label: 'Kai Cenat', emoji: '👑', image: 'images (1).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['xqc', 'x qc', 'felix lengyel', 'eks kyu si'], label: 'xQc', emoji: '💻', image: 'images (2).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['ishowspeed', 'ıshowspeed', 'i show speed', 'speed', 'darren watkins'], label: 'IShowSpeed', emoji: '🐶', image: 'images (3).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['ibai llanos', 'ibai', 'ibay', 'ibay yanos'], label: 'Ibai Llanos', emoji: '🎙️', image: 'images (4).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['elraenn', 'elraen', 'tuğkan gönültaş', 'tugkan gonultas'], label: 'Elraenn', emoji: '🕶️', image: 'images (5).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['rraene', 'rraenee', 'raene', 'raenee'], label: 'Rraene', emoji: '🍋', image: 'images (6).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['wtcn', 'ferit karakaya', 'ferit'], label: 'wtcN', emoji: '🎧', image: 'images (7).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['kendine müzisyen', 'kendine muzisyen', 'müzisyen', 'muzisyen'], label: 'Kendine Müzisyen', emoji: '🎵', image: 'images (8).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['eray', 'erayushka', 'erayush', 'eray ivo'], label: 'Eray', emoji: '❓', image: 'images (9).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['levo'], label: 'Levo', emoji: '🎯', image: 'images (10).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['hype', 'hayp'], label: 'Hype', emoji: '🔥', image: 'images (11).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['ebonivon', 'ebonivor', 'ebo'], label: 'Ebonivon', emoji: '🎩', image: 'images (12).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['jahrein', 'jah', 'ahmet sonuç', 'ahmet sonuc', 'yahrein'], label: 'Jahrein', emoji: '👓', image: 'images (13).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['konsol oyun', 'konsoloyun'], label: 'Konsol Oyun', emoji: '🎮', image: 'images (14).jpg' },
        { prompt: 'Bu yayıncı kim?', answers: ['ninja', 'nınja', 'ninca', 'tyler blevins'], label: 'Ninja', emoji: '🥷', image: 'images (15).jpg' }
    ],
    'photo-sebze': [
        { prompt: 'Bu sebzenin adı nedir?', answers: ['havuç', 'carrot', 'havuc'], label: 'Havuç', emoji: '🥕', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['mısır', 'corn', 'misir', 'mısır taneli'], label: 'Mısır', emoji: '🌽', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['acı biber', 'biber', 'acılı biber', 'kırmızı biber', 'aci biber'], label: 'Acı Biber', emoji: '🌶️', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['dolmalık biber', 'yeşil biber', 'yesil biber', 'biber'], label: 'Dolmalık Biber', emoji: '🫑', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['salatalık', 'hıyar', 'hiyar', 'cucumber', 'salatalik'], label: 'Salatalık', emoji: '🥒', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['marul', 'lettuce', 'yeşillik', 'yapraklı sebze'], label: 'Marul', emoji: '🥬', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['brokoli', 'broccoli', 'brokoli bitkisi'], label: 'Brokoli', emoji: '🥦', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['sarımsak', 'garlic', 'sarimsak'], label: 'Sarımsak', emoji: '🧄', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['soğan', 'onion', 'sogan'], label: 'Soğan', emoji: '🧅', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['patates', 'potato', 'patato'], label: 'Patates', emoji: '🥔', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['tatlı patates', 'sweet potato', 'turuncu patates', 'tatli patates'], label: 'Tatlı Patates', emoji: '🍠', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['domates', 'tomato', 'domatez'], label: 'Domates', emoji: '🍅', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['patlıcan', 'eggplant', 'aubergine', 'patlican'], label: 'Patlıcan', emoji: '🍆', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['bezelye', 'bakla', 'pea'], label: 'Bezelye', emoji: '🫛', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['fasulye', 'beans', 'kuru fasulye'], label: 'Fasulye', emoji: '🫘', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['zencefil', 'ginger', 'zencefil kökü'], label: 'Zencefil', emoji: '🫚', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['mantar', 'mushroom', 'kültür mantarı', 'şapkalı mantar'], label: 'Mantar', emoji: '🍄', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['turp', 'radish', 'turnip', 'turplar'], label: 'Turp', emoji: '🫜', image: '' },
        { prompt: 'Bu sebzenin adı nedir?', answers: ['balkabağı', 'bal kabağı', 'kabak', 'balkabagi'], label: 'Balkabağı', emoji: '🎃', image: '' }
    ],
    'photo-tanri': [
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['zeus', 'yıldırım tanrısı', 'şimşek tanrısı', 'yunan tanrısı'], label: 'Zeus', emoji: '⚡', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['poseidon', 'poseydon', 'deniz tanrısı'], label: 'Poseidon', emoji: '🔱', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['hades', 'yeraltı tanrısı', 'ölüler tanrısı', 'ölü tanrısı'], label: 'Hades', emoji: '💀', image: '' },
        { prompt: 'Bu mitolojik tanrıçanın adı nedir?', answers: ['athena', 'atina', 'bilgelik tanrıçası', 'athene', 'savaş ve bilgelik tanrıçası'], label: 'Athena', emoji: '🦉', image: '' },
        { prompt: 'Bu mitolojik tanrıçanın adı nedir?', answers: ['artemis', 'av tanrıçası', 'ok tanrıçası'], label: 'Artemis', emoji: '🏹', image: '' },
        { prompt: 'Bu mitolojik tanrıçanın adı nedir?', answers: ['afrodit', 'aphrodite', 'aşk tanrıçası', 'güzellik tanrıçası', 'venus'], label: 'Afrodit', emoji: '💘', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['apollon', 'apollo', 'apolo', 'güneş tanrısı'], label: 'Apollon', emoji: '🌞', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['dionysos', 'dionisos', 'diyonisos', 'şarap tanrısı'], label: 'Dionysos', emoji: '🍇', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['hephaistos', 'hefestos', 'demirci tanrı', 'demir tanrısı'], label: 'Hephaistos', emoji: '⚒️', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['hermes', 'haberci tanrı', 'haberci', 'uçan ayakkabılı tanrı'], label: 'Hermes', emoji: '👟', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['ares', 'savaş tanrısı'], label: 'Ares', emoji: '⚔️', image: '' },
        { prompt: 'Bu mitolojik tanrıçanın adı nedir?', answers: ['demeter', 'tarım tanrıçası', 'hasat tanrıçası', 'buğday tanrıçası'], label: 'Demeter', emoji: '🌾', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['thor', 'yıldırım tanrısı', 'çekiç tanrısı', 'tor'], label: 'Thor', emoji: '🔨', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['odin', 'tanrıların babası', 'tek gözlü tanrı', 'odin baba'], label: 'Odin', emoji: '👁️', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['loki', 'düzenbaz tanrı', 'hile tanrısı', 'hilebaz tanrı'], label: 'Loki', emoji: '🃏', image: '' },
        { prompt: 'Bu mitolojik tanrının adı nedir?', answers: ['anubis', 'çakal tanrı', 'cenaze tanrısı', 'mısır tanrısı', 'chakal'], label: 'Anubis', emoji: '🐺', image: '' },
        { prompt: 'Bu mitolojik tanrıçanın adı nedir?', answers: ['bastet', 'bast', 'kedi tanrıçası', 'mısır kedi tanrıçası'], label: 'Bastet', emoji: '🐱', image: '' }
    ],
    'photo-cicek': [
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['gül', 'rose', 'gul'], label: 'Gül', emoji: '🌹', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['lale', 'tulip'], label: 'Lale', emoji: '🌷', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['ayçiçeği', 'ay çiçeği', 'sunflower', 'gündöndü', 'aycicegi'], label: 'Ayçiçeği', emoji: '🌻', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['papatya', 'daisy', 'papatya çiçeği'], label: 'Papatya', emoji: '🌼', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['kiraz çiçeği', 'sakura', 'cherry blossom', 'sakura çiçeği', 'kiraz cicegi'], label: 'Kiraz Çiçeği (Sakura)', emoji: '🌸', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['hibiskus', 'hibiscus', 'amber çiçeği'], label: 'Hibiskus', emoji: '🌺', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['sümbül', 'hyacinth', 'sumbul'], label: 'Sümbül', emoji: '🪻', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['nilüfer', 'lotus', 'lotus çiçeği', 'nilufer'], label: 'Nilüfer (Lotus)', emoji: '🪷', image: '' },
        { prompt: 'Bu çiçeğin adı nedir?', answers: ['solmuş gül', 'solan gül', 'solmuş çiçek', 'wilted rose', 'soluk gül'], label: 'Solmuş Gül', emoji: '🥀', image: '' }
    ],
    'photo-meslek': [
        { prompt: 'Bu mesleğin adı nedir?', answers: ['doktor', 'hekim', 'doctor', 'tıp doktoru'], label: 'Doktor', emoji: '👨‍⚕️', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['itfaiyeci', 'fireman', 'itfaiye eri', 'yangın söndürücü'], label: 'İtfaiyeci', emoji: '👨‍🚒', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['polis', 'police', 'polis memuru', 'cop'], label: 'Polis', emoji: '👮‍♂️', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['aşçı', 'şef', 'chef', 'aşçıbaşı', 'yemek şefi'], label: 'Aşçı (Şef)', emoji: '👨‍🍳', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['öğretmen', 'teacher', 'hoca'], label: 'Öğretmen', emoji: '👨‍🏫', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['çiftçi', 'farmer', 'köylü', 'tarım işçisi', 'ciftci'], label: 'Çiftçi', emoji: '👨‍🌾', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['tamirci', 'mekanik', 'tamir ustası', 'teknisyen'], label: 'Tamirci', emoji: '👨‍🔧', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['ofis çalışanı', 'memur', 'ofis memuru', 'beyaz yaka', 'ofis görevlisi'], label: 'Ofis Çalışanı (Memur)', emoji: '👨‍💼', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['yazılımcı', 'programcı', 'yazılım mühendisi', 'coder', 'bilgisayar programcısı', 'yazilimci'], label: 'Yazılımcı', emoji: '👨‍💻', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['hakim', 'yargıç', 'judge', 'mahkeme hakimi'], label: 'Hakim (Yargıç)', emoji: '👨‍⚖️', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['pilot', 'uçak pilotu', 'havacı'], label: 'Pilot', emoji: '👨‍✈️', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['astronot', 'kozmonot', 'uzay adamı'], label: 'Astronot', emoji: '👨‍🚀', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['ressam', 'painter', 'sanatçı ressam'], label: 'Ressam', emoji: '👨‍🎨', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['şarkıcı', 'singer', 'müzisyen', 'solist'], label: 'Şarkıcı', emoji: '👨‍🎤', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['bilim insanı', 'bilimci', 'scientist', 'araştırmacı'], label: 'Bilim İnsanı', emoji: '👨‍🔬', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['fabrika işçisi', 'işçi', 'fabrika çalışanı', 'sanayi işçisi'], label: 'Fabrika İşçisi', emoji: '👨‍🏭', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['inşaat işçisi', 'inşaatçı', 'inşaat işçisi güvenlikli', 'inşaat çalışanı'], label: 'İnşaat İşçisi', emoji: '👷‍♂️', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['dedektif', 'detective', 'detektif', 'özel dedektif'], label: 'Detektif', emoji: '🕵️', image: '' },
        { prompt: 'Bu mesleğin adı nedir?', answers: ['kuaför', 'berber', 'saç kesici', 'kuafor'], label: 'Kuaför / Berber', emoji: '💇', image: '' }
    ],
    'photo-evesyalari': [
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['koltuk', 'kanepe', 'sofa'], label: 'Koltuk', emoji: '🛋️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['yatak', 'bed', 'karyola', 'ranza'], label: 'Yatak', emoji: '🛏️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['kapı', 'door', 'kapi'], label: 'Kapı', emoji: '🚪', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['pencere', 'window'], label: 'Pencere', emoji: '🪟', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['sandalye', 'chair'], label: 'Sandalye', emoji: '🪑', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['ayna', 'mirror', 'boy aynası'], label: 'Ayna', emoji: '🪞', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['küvet', 'banyo küveti', 'jakuzi', 'banyo'], label: 'Küvet', emoji: '🛁', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['klozet', 'tuvalet', 'wc'], label: 'Klozet', emoji: '🚽', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['duş', 'shower', 'duş başlığı', 'dust'], label: 'Duş', emoji: '🚿', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['tuvalet kağıdı', 'toilet paper', 'rulo kağıt'], label: 'Tuvalet Kağıdı', emoji: '🧻', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['çamaşır sepeti', 'sepet', 'kirli sepeti'], label: 'Çamaşır Sepeti', emoji: '🧺', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['süpürge', 'broom', 'süpürge sopası'], label: 'Süpürge', emoji: '🧹', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['sünger', 'sponge', 'bulaşık süngeri', 'temizlik süngeri'], label: 'Sünger', emoji: '🧽', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['kova', 'bucket', 'su kovası'], label: 'Kova', emoji: '🪣', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['çöp kutusu', 'çöp', 'trash can', 'çöp tenekesi'], label: 'Çöp Kutusu', emoji: '🗑️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['ampul', 'lamba', 'ampül', 'ışık ampulü'], label: 'Ampul', emoji: '💡', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['mum', 'candle', 'mumluk'], label: 'Mum', emoji: '🕯️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['el feneri', 'fener', 'flashlight', 'cep feneri'], label: 'El Feneri', emoji: '🔦', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['çalar saat', 'alarm', 'çalar saatli', 'uyandırma saati'], label: 'Çalar Saat', emoji: '⏰', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['duvar saati', 'saat', 'guguklu saat', 'duvar saatli'], label: 'Duvar Saati', emoji: '🕰️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['televizyon', 'tv', 'televiziyon', 'tv cihazı'], label: 'Televizyon', emoji: '📺', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['radyo', 'radio', 'teyp', 'radyo alıcısı'], label: 'Radyo', emoji: '📻', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['telefon', 'sabit telefon', 'ev telefonu', 'telephone'], label: 'Telefon', emoji: '☎️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['fiş', 'elektrik fişi', 'uzatma kablosu', 'priz'], label: 'Elektrik Fişi', emoji: '🔌', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['yangın tüpü', 'yangın söndürücü', 'yangın tüp', 'fire extinguisher'], label: 'Yangın Tüpü', emoji: '🧯', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['anahtar', 'key', 'kapı anahtarı'], label: 'Anahtar', emoji: '🗝️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['koli', 'kutu', 'paket', 'karton kutu', 'nakliye kutusu'], label: 'Koli', emoji: '📦', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['kitaplar', 'kitap', 'roman', 'kitap destesi'], label: 'Kitaplar', emoji: '📚', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['vazo', 'amfora', 'çiçek vazosu'], label: 'Vazo', emoji: '🏺', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['tablo', 'çerçeve', 'resim çerçevesi', 'çerçeveli tablo'], label: 'Tablo', emoji: '🖼️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['nazar boncuğu', 'nazar', 'mavi göz', 'nazarlık', 'mavi boncuk'], label: 'Nazar Boncuğu', emoji: '🧿', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['diş fırçası', 'toothbrush', 'dis fircasi'], label: 'Diş Fırçası', emoji: '🪥', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['mutfak bıçağı', 'bıçak', 'bicak', 'şef bıçağı'], label: 'Mutfak Bıçağı', emoji: '🔪', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['tava', 'sahan', 'kızartma tavası', 'yumurta tavası'], label: 'Tava', emoji: '🍳', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['tabak', 'yemek tabağı', 'sofra takımı'], label: 'Tabak', emoji: '🍽️', image: '' },
        { prompt: 'Bu ev eşyasının adı nedir?', answers: ['kaşık', 'spoon', 'yemek kaşığı', 'kasik'], label: 'Kaşık', emoji: '🥄', image: '' }
    ]
};

function normalizeAnswer(s) {
    return (s || '')
        .toString()
        .toLocaleLowerCase('tr-TR')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isPhotoAnswerCorrect(userText, answers) {
    const u = normalizeAnswer(userText);
    if (!u) return false;
    return (answers || []).some(a => {
        const n = normalizeAnswer(a);
        return u === n || u.includes(n) || n.includes(u);
    });
}

function hideAllMainScreens() {
    ['profileScreen', 'modeScreen', 'categoryScreen', 'difficultyScreen', 'testScreen', 'resultScreen',
        'photoCategoryScreen', 'photoDifficultyScreen', 'photoTestScreen', 'photoResultScreen',
        'ombmCategoryScreen', 'ombmCountScreen', 'ombmGameScreen', 'ombmResultScreen',
        'siralamaCategoryScreen', 'siralamaCountScreen', 'siralamaGameScreen', 'siralamaResultScreen',
        'blurCategoryScreen', 'blurCountScreen', 'blurGameScreen', 'blurFinalScreen',
        'farkGameScreen',
        'hafizaGameScreen',
        'kelimeGameScreen',
        'hizliCategoryScreen', 'hizliCountScreen', 'hizliGameScreen', 'hizliResultScreen',
        'zoomCategoryScreen', 'zoomCountScreen', 'zoomGameScreen', 'zoomResultScreen',
        'eslestirmeGameScreen',
        'yilanGameScreen',
        'kostebekGameScreen',
        'renkGameScreen',
        'tepkiGameScreen',
        'mdGameScreen',
        'mayinGameScreen',
        'tetrisGameScreen']
        .forEach(sid => {
            const el = document.getElementById(sid);
            if (el) el.style.display = 'none';
        });
}

window.goToModeSelect = function () {
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    gameMode = null;
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('modeNextBtn').disabled = true;
    changeTheme('space');
};

window.selectGameMode = function (mode) {
    gameMode = mode;
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    if (mode === 'text') document.getElementById('modeTextCard').classList.add('selected');
    if (mode === 'photo') document.getElementById('modePhotoCard').classList.add('selected');
    if (mode === 'ombm') document.getElementById('modeOmbmCard').classList.add('selected');
    if (mode === 'siralama') document.getElementById('modeSiralamaCard').classList.add('selected');
    if (mode === 'blur') document.getElementById('modeBlurCard').classList.add('selected');
    if (mode === 'fark') document.getElementById('modeFarkCard').classList.add('selected');
    if (mode === 'hafiza') document.getElementById('modeHafizaCard').classList.add('selected');
    if (mode === 'kelime') document.getElementById('modeKelimeCard').classList.add('selected');
    if (mode === 'hizli') document.getElementById('modeHizliCard').classList.add('selected');
    if (mode === 'zoom') document.getElementById('modeZoomCard').classList.add('selected');
    if (mode === 'eslestirme') document.getElementById('modeEslestirmeCard').classList.add('selected');
    if (mode === 'yilan') document.getElementById('modeYilanCard').classList.add('selected');
    if (mode === 'kostebek') document.getElementById('modeKostebekCard').classList.add('selected');
    if (mode === 'renk') document.getElementById('modeRenkCard').classList.add('selected');
    if (mode === 'tepki') document.getElementById('modeTepkiCard').classList.add('selected');
    if (mode === 'melodi') document.getElementById('modeMelodiCard').classList.add('selected');
    if (mode === 'mayin') document.getElementById('modeMayinCard').classList.add('selected');
    if (mode === 'tetris') document.getElementById('modeTetrisCard').classList.add('selected');
    document.getElementById('modeNextBtn').disabled = false;
};

window.continueFromMode = function () {
    if (gameMode === 'text') goToCategorySelect();
    else if (gameMode === 'photo') goToPhotoCategorySelect();
    else if (gameMode === 'ombm') goToOmbmCategorySelect();
    else if (gameMode === 'siralama') goToSiralamaCategorySelect();
    else if (gameMode === 'blur') goToBlurCategorySelect();
    else if (gameMode === 'fark') startFarkFromMode();
    else if (gameMode === 'hafiza') startHafizaFromMode();
    else if (gameMode === 'kelime') startKelimeFromMode();
    else if (gameMode === 'hizli') startHizliFromMode();
    else if (gameMode === 'zoom') startZoomFromMode();
    else if (gameMode === 'eslestirme') startEslestirmeFromMode();
    else if (gameMode === 'yilan') startYilanFromMode();
    else if (gameMode === 'kostebek') startKostebekFromMode();
    else if (gameMode === 'renk') startRenkFromMode();
    else if (gameMode === 'tepki') startTepkiFromMode();
    else if (gameMode === 'melodi') startMelodiFromMode();
    else if (gameMode === 'mayin') startMayinFromMode();
    else if (gameMode === 'tetris') startTetrisFromMode();
};

window.goBackToProfileFromMode = function () {
    hideAllMainScreens();
    document.getElementById('profileScreen').style.display = 'block';
    changeTheme('space');
};

// favoriler
let _favCache = null;
function getFavList() {
    if (_favCache) return _favCache;
    try { _favCache = JSON.parse(localStorage.getItem('matex_favorites') || '[]'); } catch (e) { _favCache = []; }
    if (!Array.isArray(_favCache)) _favCache = [];
    return _favCache;
}
function saveFavList() { try { localStorage.setItem('matex_favorites', JSON.stringify(_favCache)); } catch (e) { } }
function favKey(grid, catId) { return grid + ':' + catId; }
function isFav(grid, catId) { return getFavList().indexOf(favKey(grid, catId)) !== -1; }
function favHeart(grid, catId) { return isFav(grid, catId) ? ' <span class="fav-heart">❤️</span>' : ''; }
function resortFavGrid(gridEl) {
    if (!gridEl) return;
    const cards = Array.prototype.slice.call(gridEl.children).filter(function (c) { return c.classList && c.classList.contains('category-card'); });
    cards.sort(function (a, b) {
        const fa = a.getAttribute('data-fav') === '1' ? 0 : 1;
        const fb = b.getAttribute('data-fav') === '1' ? 0 : 1;
        if (fa !== fb) return fa - fb;
        const oa = parseInt(a.getAttribute('data-orig-order') || '0', 10);
        const ob = parseInt(b.getAttribute('data-orig-order') || '0', 10);
        return oa - ob;
    });
    cards.forEach(function (c) { gridEl.appendChild(c); });
}
function toggleFavOnCard(grid, catId, card) {
    const arr = getFavList(); const k = favKey(grid, catId); const i = arr.indexOf(k);
    if (i === -1) { arr.push(k); } else { arr.splice(i, 1); }
    saveFavList();
    card.setAttribute('data-fav', isFav(grid, catId) ? '1' : '0');
    const title = card.querySelector('.category-title');
    if (title) {
        const h = title.querySelector('.fav-heart');
        if (isFav(grid, catId)) { if (!h) title.insertAdjacentHTML('beforeend', ' <span class="fav-heart">❤️</span>'); }
        else { if (h) h.remove(); }
    }
    resortFavGrid(card.parentElement);
    playClickSound();
}
document.addEventListener('dblclick', function (e) {
    const card = e.target && e.target.closest ? e.target.closest('.category-card') : null;
    if (!card) return;
    const grid = card.getAttribute('data-fav-grid');
    const catId = card.getAttribute('data-fav-id');
    if (!grid || !catId) return;
    e.preventDefault();
    e.stopPropagation();
    toggleFavOnCard(grid, catId, card);
});

window.goToCategorySelect = function () {
    id('categoryGrid').innerHTML = kategoriler.map((k, idx) => `<div class="category-card category-card--${k.id}" data-fav-grid="text" data-fav-id="${k.id}" data-fav="${isFav('text', k.id) ? 1 : 0}" data-orig-order="${idx}" onclick="selectCategory('${k.id}')" id="cat_${k.id}"><div class="category-icon">${k.icon}</div><div class="category-title">${getCatName(k.id)}${favHeart('text', k.id)}</div><div class="category-subtitle">${getCatSubtitle(k.id)}</div></div>`).join('');
    resortFavGrid(id('categoryGrid'));
    hideAllMainScreens();
    cScreen.style.display = 'block';
    changeTheme('space');
};

window.goBackToProfile = function () {
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};

window.goBackToCategory = function () {
    dScreen.style.display = 'none';
    cScreen.style.display = 'block';
};

// fotoğraflı mod
const photoToTextCatMap = {
    'photo-marvel': 'marvel', 'photo-dc': 'dc', 'photo-anime': 'anime',
    'photo-futbol': 'futbol', 'photo-motor': 'motor', 'photo-araba': 'araba',
    'photo-oyun': 'oyun', 'photo-meyve': 'meyve', 'photo-tatli': 'tatli',
    'photo-yemekler': 'yemek', 'photo-bayraklar': 'bayraklar',
    'photo-hayvan': 'hayvan', 'photo-emoji': 'emoji', 'photo-icecek': 'icecek', 'photo-spor': 'spor',
    'photo-kizanime': 'anime', 'photo-unluler': 'sinema', 'photo-kadinlar': 'moda', 'photo-youtuber': 'youtuber', 'photo-yayinci': 'yayinci',
    'photo-sebze': 'doga', 'photo-tanri': 'mitoloji', 'photo-cicek': 'doga',
    'photo-meslek': 'genelkultur', 'photo-evesyalari': 'genelkultur'
};

window.goToPhotoCategorySelect = function () {
    const grid = document.getElementById('photoCategoryGrid');
    grid.innerHTML = photoKategoriler.map((k, idx) => {
        const textCatId = photoToTextCatMap[k.id] || k.id;
        return `<div class="category-card category-card--${textCatId}" data-fav-grid="photo" data-fav-id="${k.id}" data-fav="${isFav('photo', k.id) ? 1 : 0}" data-orig-order="${idx}" onclick="selectPhotoCategory('${k.id}')" id="pcat_${k.id}">
                    <div class="category-icon">${k.icon}</div>
                    <div class="category-title">${getCatName(k.adKey)}${favHeart('photo', k.id)}</div>
                    <div class="category-subtitle">${getPhotoSubTitle(k.subtitleKey)}</div>
                </div>`;
    }).join('');
    resortFavGrid(grid);
    hideAllMainScreens();
    document.getElementById('photoCategoryScreen').style.display = 'block';
    document.getElementById('photoCategoryNextBtn').disabled = true;
    secilenPhotoKategori = null;
    changeTheme('space');
};

window.selectPhotoCategory = function (cid) {
    document.querySelectorAll('#photoCategoryGrid .category-card').forEach(c => c.classList.remove('selected'));
    const el = document.getElementById(`pcat_${cid}`);
    if (el) el.classList.add('selected');
    secilenPhotoKategori = photoKategoriler.find(k => k.id === cid);
    if (secilenPhotoKategori) changeTheme(secilenPhotoKategori.theme || 'space');
    document.getElementById('photoCategoryNextBtn').disabled = false;
};

window.goBackToModeFromPhotoCats = function () {
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};

window.getPhotoPoolMax = function (categoryId) {
    const pool = photoPools[categoryId] || [];
    return Math.min(30, pool.length || 0);
};

window.validatePhotoQuestionCount = function () {
    const input = document.getElementById('photoQuestionCountInput');
    const err = document.getElementById('photoCountError');
    const maxLabel = document.getElementById('photoCountMaxLabel');
    if (!input) return false;
    const max = getPhotoPoolMax(secilenPhotoKategori?.id);
    input.max = String(max);
    if (maxLabel) maxLabel.textContent = `/ ${t('maks')} ${max}`;
    const raw = String(input.value || '').trim();
    const n = parseInt(raw, 10);
    err.textContent = '';
    if (!raw || Number.isNaN(n)) {
        err.textContent = t('soruSayisiGirin');
        return false;
    }
    if (n < 1) {
        err.textContent = t('soruSayisiEnAz');
        return false;
    }
    if (n > max) {
        err.textContent = t('maksimumSoru').replace('{0}', max);
        return false;
    }
    photoQuestionCount = n;
    return true;
};

window.updatePhotoStartButtonState = function () {
    const btn = document.getElementById('photoDifficultyNextBtn');
    if (!btn) return;
    const input = document.getElementById('photoQuestionCountInput');
    const err = document.getElementById('photoCountError');
    const maxLabel = document.getElementById('photoCountMaxLabel');
    const max = getPhotoPoolMax(secilenPhotoKategori?.id);
    if (maxLabel) maxLabel.textContent = `/ ${t('maks')} ${max}`;
    if (input) input.max = String(max);
    const raw = String(input?.value || '').trim();
    const n = parseInt(raw, 10);
    let countValid = !Number.isNaN(n) && n >= 1 && n <= max;
    if (err) {
        if (raw && !Number.isNaN(n) && n > max) {
            err.textContent = t('maksimumSoru').replace('{0}', max);
            countValid = false;
        } else if (raw && !Number.isNaN(n) && n < 1) {
            err.textContent = t('soruSayisiEnAz');
            countValid = false;
        } else {
            err.textContent = '';
        }
    }
    btn.disabled = !(secilenPhotoZorluk && countValid);
    if (countValid) photoQuestionCount = n;
};

window.goToPhotoDifficulty = function () {
    if (!secilenPhotoKategori) return;
    document.getElementById('photoDifficultyContainer').innerHTML = zorluklar.map(z =>
        `<div class="difficulty-card" onclick="selectPhotoDifficulty('${z.id}')" id="pdiff_${z.id}">
                    <div class="difficulty-icon">${z.icon}</div>
                    <div class="difficulty-title">${getZorlukAd(z)}</div>
                    <div class="difficulty-time">${z.id === 'suretsiz' ? '∞' : z.sure + ' sn'}</div>
                </div>`
    ).join('');
    hideAllMainScreens();
    document.getElementById('photoDifficultyScreen').style.display = 'block';
    document.getElementById('photoDifficultyNextBtn').disabled = true;
    secilenPhotoZorluk = null;
    const max = getPhotoPoolMax(secilenPhotoKategori.id);
    const input = document.getElementById('photoQuestionCountInput');
    const maxLabel = document.getElementById('photoCountMaxLabel');
    const err = document.getElementById('photoCountError');
    if (err) err.textContent = '';
    if (maxLabel) maxLabel.textContent = `/ ${t('maks')} ${max}`;
    if (input) {
        input.min = '1';
        input.max = String(max);
        input.value = String(Math.min(10, max) || 1);
    }
    photoQuestionCount = Math.min(10, max) || 1;
    updatePhotoStartButtonState();
};

window.selectPhotoDifficulty = function (d) {
    document.querySelectorAll('#photoDifficultyContainer .difficulty-card').forEach(c => c.classList.remove('selected'));
    document.getElementById(`pdiff_${d}`).classList.add('selected');
    secilenPhotoZorluk = zorluklar.find(z => z.id === d);
    updatePhotoStartButtonState();
};

document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'photoQuestionCountInput') {
        updatePhotoStartButtonState();
    }
});

window.goBackToPhotoCategory = function () {
    hideAllMainScreens();
    document.getElementById('photoCategoryScreen').style.display = 'block';
};

window.startPhotoTest = function () {
    isInTest = true;
    stopBgMusic();
    if (!secilenPhotoKategori || !secilenPhotoZorluk) {
        alert('Kategori ve zorluk seçmelisin.');
        return;
    }
    if (!validatePhotoQuestionCount()) {
        return;
    }
    const pool = [...(photoPools[secilenPhotoKategori.id] || [])];
    if (!pool.length) {
        alert('Bu kategoride henüz soru yok.');
        return;
    }
    const max = getPhotoPoolMax(secilenPhotoKategori.id);
    if (photoQuestionCount > max) {
        document.getElementById('photoCountError').textContent = `Maksimum ${max} soru seçebilirsin!`;
        return;
    }
    photoSorular = pool.sort(() => Math.random() - 0.5).slice(0, photoQuestionCount);
    photoIndex = 0;
    photoCevaplar = Array(photoSorular.length).fill(null);
    photoTimeLeft = secilenPhotoZorluk.sure;
    photoTestAktif = true;
    photoPuan = 0;

    document.getElementById('photoTestUserName').textContent = kullaniciAdi;
    const photoCatName = getCatName(secilenPhotoKategori?.adKey || photoToTextCatMap[secilenPhotoKategori?.id] || '');
    document.getElementById('photoTestUserDetails').textContent = `${kullaniciYas} ${t('yas')} • ${secilenCinsiyet} • ${photoCatName}`;
    let av = document.getElementById('photoTestUserAvatar');
    if (uploadedImage) av.innerHTML = `<img src="${uploadedImage}">`;
    else av.textContent = secilenAvatar;
    document.getElementById('photoDifficultyDisplay').textContent = `${getZorlukAd(secilenPhotoZorluk)} • ${photoQuestionCount} ${t('soruCount')}`;

    hideAllMainScreens();
    document.getElementById('photoTestScreen').style.display = 'block';
    showPhotoQuestion();
};

function showPhotoQuestion() {
    if (!photoTestAktif) return;
    const s = photoSorular[photoIndex];
    document.getElementById('photoQuestionCounter').textContent = `${photoIndex + 1}/${photoSorular.length}`;
    document.getElementById('photoPrompt').textContent = s.prompt || 'Bu görselde ne/kim var?';
    const isEmojiQuiz = !!(secilenPhotoKategori && secilenPhotoKategori.emojiQuiz);
    document.getElementById('photoHint').textContent = s.image ? '' : (isEmojiQuiz ? '✨ Yukarıdaki emoji neyi temsil ediyor?' : 'ℹ️ Görsel yakında eklenecek, şimdilik ipucu emojisine bak.');
    document.getElementById('photoFeedback').textContent = '';
    document.getElementById('photoFeedback').className = 'photo-feedback';
    const pifb = document.getElementById('photoInlineFeedback');
    if (pifb) { pifb.style.display = 'none'; pifb.className = 'inline-feedback'; }
    if (photoAutoAdvanceTimer) { clearTimeout(photoAutoAdvanceTimer); photoAutoAdvanceTimer = null; }
    const pinput = document.getElementById('photoAnswerInput');
    if (pinput) { pinput.style.borderColor = ''; pinput.style.boxShadow = ''; }

    const img = document.getElementById('photoImage');
    const ph = document.getElementById('photoPlaceholder');
    if (s.image) {
        img.src = s.image;
        img.style.display = 'block';
        ph.style.display = 'none';
    } else {
        img.removeAttribute('src');
        img.style.display = 'none';
        ph.style.display = 'flex';
        ph.textContent = s.emoji || '🖼️';
    }

    const input = document.getElementById('photoAnswerInput');
    input.value = photoCevaplar[photoIndex] && photoCevaplar[photoIndex].text ? photoCevaplar[photoIndex].text : '';
    input.disabled = false;
    input.focus();

    document.getElementById('photoPrevBtn').disabled = photoIndex === 0;
    document.getElementById('photoNextBtn').disabled = !photoCevaplar[photoIndex];
    updatePhotoNavigationButtons();

    clearInterval(photoTimer);
    photoTimeLeft = secilenPhotoZorluk.sure;
    updatePhotoTimer();
    if (secilenPhotoZorluk.id === 'suretsiz') {
        document.getElementById('photoTimerText').textContent = '∞';
        document.getElementById('photoTimerProgress').style.width = '100%';
    } else {
        photoTimer = setInterval(() => {
            if (!photoTestAktif) return;
            photoTimeLeft--;
            updatePhotoTimer();
            if (photoTimeLeft <= 0) {
                clearInterval(photoTimer);
                if (!photoCevaplar[photoIndex]) {
                    photoCevaplar[photoIndex] = { text: '', correct: false, timeout: true };
                }
                const nextIdx = getPhotoNextUnansweredIndex(photoIndex);
                if (nextIdx !== -1) {
                    photoIndex = nextIdx;
                    showPhotoQuestion();
                } else {
                    finishPhotoTest();
                }
            }
        }, 1000);
    }
}

function updatePhotoTimer() {
    const m = Math.floor(photoTimeLeft / 60), s = photoTimeLeft % 60;
    document.getElementById('photoTimerText').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    document.getElementById('photoTimerProgress').style.width = `${(photoTimeLeft / secilenPhotoZorluk.sure) * 100}%`;
}

let photoAutoAdvanceTimer = null;

function commitPhotoAnswerFromInput() {
    const input = document.getElementById('photoAnswerInput');
    const textVal = input.value.trim();
    if (!textVal) {
        document.getElementById('photoFeedback').textContent = 'Bir cevap yaz veya Boş Bırak.';
        document.getElementById('photoFeedback').className = 'photo-feedback bad';
        return false;
    }
    const s = photoSorular[photoIndex];
    const ok = isPhotoAnswerCorrect(textVal, s.answers);
    photoCevaplar[photoIndex] = { text: textVal, correct: ok, timeout: false };
    const photoElapsed = (Date.now() - photoQuestionStartTime) / 1000;
    if (photoElapsed < 10 && ok) { photoTimeBonus += 3; photoTimeLeft += 3; updatePhotoTimer(); }
    const fb = document.getElementById('photoFeedback');
    const pifb = document.getElementById('photoInlineFeedback');

    input.disabled = true;

    if (photoAnswerMode === 'instant') {
        if (ok) {
            fb.textContent = '✅ ' + t('harika');
            fb.className = 'photo-feedback ok';
            if (pifb) {
                pifb.className = 'inline-feedback correct';
                pifb.innerHTML = '✅ ' + t('harika') + ' <span style="color:#4caf50;font-weight:800;font-size:20px;">' + s.label + '</span>';
                pifb.style.display = 'block';
            }
            playCorrectSound();
        } else {
            fb.textContent = '❌';
            fb.className = 'photo-feedback bad';
            if (pifb) {
                pifb.className = 'inline-feedback wrong';
                pifb.innerHTML = '❌ ' + t('dogruCevap') + ' <span style="color:#4caf50;font-weight:800;font-size:20px;">' + s.label + '</span>';
                pifb.style.display = 'block';
            }
            playWrongSound();
            const mc = document.getElementById('mainContainer');
            if (mc) { mc.classList.remove('shake'); void mc.offsetWidth; mc.classList.add('shake'); setTimeout(() => mc.classList.remove('shake'), 600); }
            input.style.borderColor = '#ff6b6b';
            input.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.4)';
        }
    } else {
        fb.textContent = '';
        fb.className = 'photo-feedback';
        if (pifb) {
            pifb.textContent = '';
            pifb.className = 'inline-feedback';
            pifb.style.display = 'none';
        }
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }

    document.getElementById('photoNextBtn').disabled = false;

    if (photoAnswerMode === 'instant') {
        if (photoAutoAdvanceTimer) clearTimeout(photoAutoAdvanceTimer);
        photoAutoAdvanceTimer = setTimeout(() => {
            const nextIdx = getPhotoNextUnansweredIndex(photoIndex);
            if (nextIdx !== -1) {
                photoIndex = nextIdx;
                showPhotoQuestion();
            } else {
                finishPhotoTest();
            }
        }, 5000);
    }

    return true;
}

function getPhotoNextUnansweredIndex(fromIndex) {
    for (let i = fromIndex + 1; i < photoSorular.length; i++) {
        if (!photoCevaplar[i] || photoCevaplar[i].skipped) return i;
    }
    return -1;
}

function getPhotoLastSkippedIndex() {
    for (let i = photoSorular.length - 1; i >= 0; i--) {
        if (photoCevaplar[i] && photoCevaplar[i].skipped) return i;
    }
    return -1;
}

function updatePhotoNavigationButtons() {
    const skippedIndex = getPhotoLastSkippedIndex();
    const canReturn = skippedIndex !== -1 && skippedIndex !== photoIndex;
    document.getElementById('photoReturnSkippedBtn').disabled = !canReturn;
    document.getElementById('photoPrevBtn').disabled = photoIndex === 0;
    document.getElementById('photoNextBtn').disabled = !photoCevaplar[photoIndex];
}

window.photoNextQuestion = function () {
    if (!photoCevaplar[photoIndex]) {
        if (!commitPhotoAnswerFromInput()) return;
    } else {
        const textVal = document.getElementById('photoAnswerInput').value.trim();
        if (textVal) {
            const s = photoSorular[photoIndex];
            const ok = isPhotoAnswerCorrect(textVal, s.answers);
            photoCevaplar[photoIndex] = { text: textVal, correct: ok, timeout: false };
        }
    }
    clearInterval(photoTimer);
    const nextIndex = getPhotoNextUnansweredIndex(photoIndex);
    if (nextIndex !== -1) {
        photoIndex = nextIndex;
        showPhotoQuestion();
    } else {
        finishPhotoTest();
    }
};

window.photoPreviousQuestion = function () {
    if (photoIndex > 0) {
        clearInterval(photoTimer);
        photoIndex--;
        showPhotoQuestion();
    }
};

window.photoSkipQuestion = function () {
    photoCevaplar[photoIndex] = { text: '', correct: false, timeout: false, skipped: true };
    clearInterval(photoTimer);
    const nextIndex = getPhotoNextUnansweredIndex(photoIndex);
    if (nextIndex !== -1) {
        photoIndex = nextIndex;
        showPhotoQuestion();
    } else {
        finishPhotoTest();
    }
};

window.photoReturnToSkipped = function () {
    const skippedIndex = getPhotoLastSkippedIndex();
    if (skippedIndex !== -1) {
        clearInterval(photoTimer);
        photoIndex = skippedIndex;
        showPhotoQuestion();
    }
};

window.showPhotoExitConfirm = function () {
    if (!photoTestAktif) return;
    exitTarget = 'photo';
    document.querySelector('.exit-confirm-box h3').textContent = t('testtenCik');
    document.querySelector('.exit-confirm-box p').textContent = t('testtenCikEmin');
    document.getElementById('exitConfirmModal').style.display = 'flex';
};

function finishPhotoTest() {
    photoTestAktif = false;
    clearInterval(photoTimer);
    isInTest = false;
    if (soundEnabled) startBgMusic();
    let dogru = 0;
    let html = '';
    photoSorular.forEach((s, i) => {
        const c = photoCevaplar[i];
        const ok = c && c.correct;
        if (ok) {
            dogru++;
            photoPuan += (POINTS_PER_DIFFICULTY[secilenPhotoZorluk?.id || 'kolay'] || 10);
        }
        const given = !c ? 'Cevapsız' : c.timeout ? 'Süre Doldu' : c.skipped ? 'Boş Bırakıldı' : (c.text || 'Cevapsız');
        const answeredWrong = !!(c && !ok && !c.timeout && !c.skipped && String(c.text || '').trim());
        const correctAnswerLine = answeredWrong
            ? `<div style="margin-top:10px;padding-top:10px;border-top:1px dotted rgba(76,175,80,.65);color:#4caf50;font-weight:800;">✅ ${t('dogruCevap')} ${s.label}</div>`
            : '';
        html += `<div class="result-item" onclick="showPhotoExplanation(${i})" style="border-color:${ok ? '#4caf50' : '#ff6b6b'};">
                    <div>${ok ? '✅' : '❌'} ${i + 1}. ${s.prompt} - ${t('cevabiniz')} ${given}</div>
                    ${correctAnswerLine}
                </div>`;
    });
    hideAllMainScreens();
    document.getElementById('photoResultScreen').style.display = 'block';
    document.getElementById('photoResultList').innerHTML = html;
    document.getElementById('photoFinalScore').textContent = dogru;
    document.getElementById('photoTotalPoints').textContent = photoPuan;
    addPoints(photoPuan);
    const total = photoSorular.length || 10;
    const ratio = dogru / total;
    let seviye = ratio <= 0.3 ? t('dusuk') : ratio <= 0.5 ? t('ortaZeka') : ratio <= 0.7 ? t('ileri') : ratio <= 0.9 ? t('cokIleri') : t('ultra');
    document.getElementById('photoZekaSeviyesi').textContent = seviye + ' ' + t('zekali');
    document.getElementById('photoExplanationPanel').innerHTML = '';
    changeTheme(secilenPhotoKategori?.theme || 'space');
}

window.showPhotoExplanation = function (i) {
    const s = photoSorular[i];
    const c = photoCevaplar[i];
    const given = !c ? 'Cevapsız' : c.timeout ? 'Süre Doldu' : c.skipped ? 'Boş Bırakıldı' : (c.text || 'Cevapsız');
    const ok = c && c.correct;
    document.getElementById('photoExplanationPanel').innerHTML =
        `<div class="explanation-box"><h3>📝 ${i + 1}. Soru</h3>
                <p>${s.prompt}</p>
                ${s.image ? `<div style="text-align:center;margin:14px 0;"><img src="${s.image}" alt="${s.label}" style="max-width:320px;max-height:220px;border-radius:16px;object-fit:contain;background:#fff;"></div>` : `<p style="font-size:48px; text-align:center;">${s.emoji || '🖼️'}</p>`}
                <p>Cevabınız: ${given}</p>
                <p>Doğru: ${s.label}</p>
                <p>💡 ${ok ? 'Harika, doğru bildin!' : 'Görselleri ekledikçe daha da netleşecek.'}</p></div>`;
};

window.goToPhotoCategoriesFromResult = function () {
    clearInterval(photoTimer);
    hideAllMainScreens();
    document.getElementById('photoCategoryScreen').style.display = 'block';
    changeTheme('space');
};

document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'photoAnswerInput') {
        document.getElementById('photoNextBtn').disabled = !e.target.value.trim();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const pts = document.getElementById('photoTestScreen');
        if (pts && pts.style.display !== 'none' && photoTestAktif) {
            if (photoAnswerMode === 'instant' && photoAutoAdvanceTimer) return;
            e.preventDefault();
            photoNextQuestion();
        }
    }
});

const kategoriler = [
    { id: 'marvel', icon: '🦸', subtitleKey: 'catMarvelSub' },
    { id: 'dc', icon: '🦇', subtitleKey: 'catDcSub' },
    { id: 'oyun', icon: '🎮', subtitleKey: 'catOyunSub' },
    { id: 'araba', icon: '🏎️', subtitleKey: 'catArabaSub' },
    { id: 'motor', icon: '🏍️', subtitleKey: 'catMotorSub' },
    { id: 'yemek', icon: '🍳', subtitleKey: 'catYemekSub' },
    { id: 'hayvan', icon: '🦁', subtitleKey: 'catHayvanSub' },
    { id: 'spor', icon: '⚽', subtitleKey: 'catSporSub' },
    { id: 'teknoloji', icon: '📱', subtitleKey: 'catTeknolojiSub' },
    { id: 'genelkultur', icon: '🌍', subtitleKey: 'catGenelSub' },
    { id: 'muzik', icon: '🎵', subtitleKey: 'catMuzikSub' },
    { id: 'sinema', icon: '🎬', subtitleKey: 'catSinemaSub' },
    { id: 'bilim', icon: '🔬', subtitleKey: 'catBilimSub' },
    { id: 'tarih', icon: '📜', subtitleKey: 'catTarihSub' },
    { id: 'sanat', icon: '🎨', subtitleKey: 'catSanatSub' },
    { id: 'astronomi', icon: '☄️', subtitleKey: 'catAstronomiSub' },
    { id: 'edebiyat', icon: '📚', subtitleKey: 'catEdebiyatSub' },
    { id: 'cografya', icon: '🌍', subtitleKey: 'catCografyaSub' },
    { id: 'siyaset', icon: '🏛️', subtitleKey: 'catSiyasetSub' },
    { id: 'saglik', icon: '🩺', subtitleKey: 'catSaglikSub' },
    { id: 'mitoloji', icon: '⚡', subtitleKey: 'catMitolojiSub' },
    { id: 'anime', icon: '🎌', subtitleKey: 'catAnimeSub' },
    { id: 'futbol', icon: '⚽', subtitleKey: 'catFutbolSub' },
    { id: 'markalar', icon: '🏷️', subtitleKey: 'catMarkalarSub' },
    { id: 'bayraklar', icon: '🚩', subtitleKey: 'catBayraklarSub' },
    { id: 'matematik', icon: '➗', subtitleKey: 'catMatematikSub' },
    { id: 'dizi', icon: '📺', subtitleKey: 'catDiziSub' },
    { id: 'moda', icon: '👗', subtitleKey: 'catModaSub' },
    { id: 'felsefe', icon: '🧠', subtitleKey: 'catFelsefeSub' },
    { id: 'doga', icon: '🌿', subtitleKey: 'catDogaSub' }
];

const catNames = {
    tr: { marvel: 'Marvel', dc: 'DC', oyun: 'Oyun', araba: 'Araba', motor: 'Motor', yemek: 'Yemek', hayvan: 'Hayvan', spor: 'Spor', teknoloji: 'Teknoloji', genelkultur: 'Genel Kültür', muzik: 'Müzik', sinema: 'Sinema', bilim: 'Bilim', tarih: 'Tarih', sanat: 'Sanat', astronomi: 'Astronomi', edebiyat: 'Edebiyat', cografya: 'Coğrafya', siyaset: 'Siyaset', saglik: 'Sağlık', mitoloji: 'Mitoloji', anime: 'Anime', futbol: 'Futbol', markalar: 'Markalar', bayraklar: 'Bayraklar', matematik: 'Matematik', dizi: 'Dizi', moda: 'Moda', felsefe: 'Felsefe', doga: 'Doğa', meyve: 'Meyve', tatli: 'Tatlı', yemekler: 'Yemekler', emoji: 'Emoji', icecek: 'İçecek', kizanime: 'Kız Anime', unluler: 'Ünlü Erkekler', kadinlar: 'Ünlü Kadınlar', sebze: 'Sebzeler', tanri: 'Mitolojik Tanrılar', cicek: 'Çiçekler', meslek: 'Meslekler', evesyalari: 'Ev Eşyaları', youtuber: 'YouTuberlar', yayinci: 'Yayıncılar' },
    en: { marvel: 'Marvel', dc: 'DC', oyun: 'Games', araba: 'Cars', motor: 'Motorcycles', yemek: 'Food', hayvan: 'Animals', spor: 'Sports', teknoloji: 'Technology', genelkultur: 'General Knowledge', muzik: 'Music', sinema: 'Cinema', bilim: 'Science', tarih: 'History', sanat: 'Art', astronomi: 'Astronomy', edebiyat: 'Literature', cografya: 'Geography', siyaset: 'Politics', saglik: 'Health', mitoloji: 'Mythology', anime: 'Anime', futbol: 'Football', markalar: 'Brands', bayraklar: 'Flags', matematik: 'Mathematics', dizi: 'TV Series', moda: 'Fashion', felsefe: 'Philosophy', doga: 'Nature', meyve: 'Fruit', tatli: 'Dessert', yemekler: 'Dishes', emoji: 'Emoji', icecek: 'Drinks', kizanime: 'Anime Girls', unluler: 'Famous Men', kadinlar: 'Famous Women', sebze: 'Vegetables', tanri: 'Mythological Gods', cicek: 'Flowers', meslek: 'Professions', evesyalari: 'Household Items', youtuber: 'YouTubers', yayinci: 'Streamers' },
    de: { marvel: 'Marvel', dc: 'DC', oyun: 'Spiele', araba: 'Autos', motor: 'Motorräder', yemek: 'Essen', hayvan: 'Tiere', spor: 'Sport', teknoloji: 'Technologie', genelkultur: 'Allgemeinwissen', muzik: 'Musik', sinema: 'Kino', bilim: 'Wissenschaft', tarih: 'Geschichte', sanat: 'Kunst', astronomi: 'Astronomie', edebiyat: 'Literatur', cografya: 'Geographie', siyaset: 'Politik', saglik: 'Gesundheit', mitoloji: 'Mythologie', anime: 'Anime', futbol: 'Fußball', markalar: 'Marken', bayraklar: 'Flaggen', matematik: 'Mathematik', dizi: 'TV-Serien', moda: 'Mode', felsefe: 'Philosophie', doga: 'Natur', meyve: 'Obst', tatli: 'Nachtisch', yemekler: 'Gerichte', emoji: 'Emoji', icecek: 'Getränke', kizanime: 'Anime-Mädchen', unluler: 'Bekannte Männer', kadinlar: 'Bekannte Frauen', sebze: 'Gemüse', tanri: 'Mythologische Götter', cicek: 'Blumen', meslek: 'Berufe', evesyalari: 'Haushaltsgegenstände', youtuber: 'YouTuber', yayinci: 'Streamer' },
    ru: { marvel: 'Марвел', dc: 'DC', oyun: 'Игры', araba: 'Авто', motor: 'Мотоциклы', yemek: 'Еда', hayvan: 'Животные', spor: 'Спорт', teknoloji: 'Технологии', genelkultur: 'Общие знания', muzik: 'Музыка', sinema: 'Кино', bilim: 'Наука', tarih: 'История', sanat: 'Искусство', astronomi: 'Астрономия', edebiyat: 'Литература', cografya: 'География', siyaset: 'Политика', saglik: 'Здоровье', mitoloji: 'Мифология', anime: 'Аниме', futbol: 'Футбол', markalar: 'Бренды', bayraklar: 'Флаги', matematik: 'Математика', dizi: 'Сериалы', moda: 'Мода', felsefe: 'Философия', doga: 'Природа', meyve: 'Фрукт', tatli: 'Десерт', yemekler: 'Блюда', emoji: 'Эмодзи', icecek: 'Напитки', kizanime: 'Аниме-девушки', unluler: 'Знаменитые мужчины', kadinlar: 'Знаменитые женщины', sebze: 'Овощи', tanri: 'Мифологические боги', cicek: 'Цветы', meslek: 'Профессии', evesyalari: 'Бытовые вещи', youtuber: 'Ютуберы', yayinci: 'Стримеры' },
    zh: { marvel: '漫威', dc: 'DC', oyun: '游戏', araba: '汽车', motor: '摩托车', yemek: '美食', hayvan: '动物', spor: '体育', teknoloji: '科技', genelkultur: '常识', muzik: '音乐', sinema: '电影', bilim: '科学', tarih: '历史', sanat: '艺术', astronomi: '天文学', edebiyat: '文学', cografya: '地理', siyaset: '政治', saglik: '健康', mitoloji: '神话', anime: '动漫', futbol: '足球', markalar: '品牌', bayraklar: '旗帜', matematik: '数学', dizi: '电视剧', moda: '时尚', felsefe: '哲学', doga: '自然', meyve: '水果', tatli: '甜点', yemekler: '菜肴', emoji: '表情', icecek: '饮料', kizanime: '动漫女孩', unluler: '著名男星', kadinlar: '著名女星', sebze: '蔬菜', tanri: '神话之神', cicek: '花卉', meslek: '职业', evesyalari: '家居用品', youtuber: 'YouTube博主', yayinci: '主播' },
    ja: { marvel: 'マーベル', dc: 'DC', oyun: 'ゲーム', araba: '車', motor: 'バイク', yemek: '料理', hayvan: '動物', spor: 'スポーツ', teknoloji: 'テクノロジー', genelkultur: '一般教養', muzik: '音楽', sinema: '映画', bilim: '科学', tarih: '歴史', sanat: '芸術', astronomi: '天文学', edebiyat: '文学', cografya: '地理', siyaset: '政治', saglik: '健康', mitoloji: '神話', anime: 'アニメ', futbol: 'サッカー', markalar: 'ブランド', bayraklar: '国旗', matematik: '数学', dizi: 'ドラマ', moda: 'ファッション', felsefe: '哲学', doga: '自然', meyve: 'フルーツ', tatli: 'デザート', yemekler: '料理', emoji: '絵文字', icecek: '飲み物', kizanime: 'アニメ女子', unluler: '有名男性', kadinlar: '有名女性', sebze: '野菜', tanri: '神話の神々', cicek: '花', meslek: '職業', evesyalari: '家庭用品', youtuber: 'ユーチューバー', yayinci: '配信者' },
    es: { marvel: 'Marvel', dc: 'DC', oyun: 'Juegos', araba: 'Coches', motor: 'Motos', yemek: 'Comida', hayvan: 'Animales', spor: 'Deportes', teknoloji: 'Tecnología', genelkultur: 'Cultura General', muzik: 'Música', sinema: 'Cine', bilim: 'Ciencia', tarih: 'Historia', sanat: 'Arte', astronomi: 'Astronomía', edebiyat: 'Literatura', cografya: 'Geografía', siyaset: 'Política', saglik: 'Salud', mitoloji: 'Mitología', anime: 'Anime', futbol: 'Fútbol', markalar: 'Marcas', bayraklar: 'Banderas', matematik: 'Matemáticas', dizi: 'Series', moda: 'Moda', felsefe: 'Filosofía', doga: 'Naturaleza', meyve: 'Fruta', tatli: 'Postre', yemekler: 'Platos', emoji: 'Emojis', icecek: 'Bebidas', kizanime: 'Chicas Anime', unluler: 'Hombres Famosos', kadinlar: 'Mujeres Famosas', sebze: 'Verduras', tanri: 'Dioses Mitológicos', cicek: 'Flores', meslek: 'Profesiones', evesyalari: 'Objetos del Hogar', youtuber: 'YouTubers', yayinci: 'Streamers' },
    ar: { marvel: 'مارفل', dc: 'DC', oyun: 'ألعاب', araba: 'سيارات', motor: 'دراجات', yemek: 'طعام', hayvan: 'حيوانات', spor: 'رياضة', teknoloji: 'تكنولوجيا', genelkultur: 'ثقافة عامة', muzik: 'موسيقى', sinema: 'سينما', bilim: 'علوم', tarih: 'تاريخ', sanat: 'فن', astronomi: 'فلك', edebiyat: 'أدب', cografya: 'جغرافيا', siyaset: 'سياسة', saglik: 'صحة', mitoloji: 'أساطير', anime: 'أنمي', futbol: 'كرة القدم', markalar: 'علامات', bayraklar: 'أعلام', matematik: 'رياضيات', dizi: 'مسلسلات', moda: 'أزياء', felsefe: 'فلسفة', doga: 'طبيعة', meyve: 'فاكهة', tatli: 'حلوى', yemekler: 'أطباق', emoji: 'إيموجي', icecek: 'مشروبات', kizanime: 'فتاة أنمي', unluler: 'رجال مشهورون', kadinlar: 'نساء مشهورات', sebze: 'خضروات', tanri: 'آلهة الأساطير', cicek: 'زهور', meslek: 'مهن', evesyalari: 'أدوات المنزل', youtuber: 'مشاهير يوتيوب', yayinci: 'صانعو البث' }
};

const catSubtitles = {
    tr: { marvel: 'Kahramanlar', dc: 'Süper güç', oyun: 'Pixel dünyası', araba: 'Hız şöleni', motor: 'Açık yol', yemek: 'Lezzet sınavı', hayvan: 'Doğal dünya', spor: 'Rekabet', teknoloji: 'Gelecek', genelkultur: 'Her şey', muzik: 'Sesler', sinema: 'Film dünyası', bilim: 'Keşif', tarih: 'Geçmiş', sanat: 'İfade', astronomi: 'Yıldızlar', edebiyat: 'Kelime hazinesi', cografya: 'Harita bilgisi', siyaset: 'Toplum', saglik: 'Yaşam bilgisi', mitoloji: 'Efsaneler', anime: 'Manga dünyası', futbol: 'Saha bilgisi', markalar: 'Logo & marka', bayraklar: 'Ülke simgeleri', matematik: 'Sayılar', dizi: 'Ekran keyfi', moda: 'Stil & trend', felsefe: 'Düşünce', doga: 'Çevre & yaşam' },
    en: { marvel: 'Heroes', dc: 'Super powers', oyun: 'Pixel world', araba: 'Speed feast', motor: 'Open road', yemek: 'Flavor test', hayvan: 'Natural world', spor: 'Competition', teknoloji: 'Future', genelkultur: 'Everything', muzik: 'Sounds', sinema: 'Film world', bilim: 'Discovery', tarih: 'Past', sanat: 'Expression', astronomi: 'Stars', edebiyat: 'Word power', cografya: 'Map knowledge', siyaset: 'Society', saglik: 'Life knowledge', mitoloji: 'Legends', anime: 'Manga world', futbol: 'Field knowledge', markalar: 'Logo & brand', bayraklar: 'Country symbols', matematik: 'Numbers', dizi: 'Screen fun', moda: 'Style & trend', felsefe: 'Thought', doga: 'Environment & life' },
    de: { marvel: 'Helden', dc: 'Superkräfte', oyun: 'Pixelwelt', araba: 'Speed', motor: 'Offene Straße', yemek: 'Geschmackstest', hayvan: 'Tierwelt', spor: 'Wettkampf', teknoloji: 'Zukunft', genelkultur: 'Alles', muzik: 'Klänge', sinema: 'Filmwelt', bilim: 'Entdeckung', tarih: 'Vergangenheit', sanat: 'Ausdruck', astronomi: 'Sterne', edebiyat: 'Wortschatz', cografya: 'Kartenwissen', siyaset: 'Gesellschaft', saglik: 'Lebenswissen', mitoloji: 'Legenden', anime: 'Manga-Welt', futbol: 'Feldwissen', markalar: 'Logo & Marke', bayraklar: 'Landessymbole', matematik: 'Zahlen', dizi: 'Bildschirm-Spaß', moda: 'Stil & Trend', felsefe: 'Gedanken', doga: 'Umwelt & Leben' },
    ru: { marvel: 'Герои', dc: 'Суперсилы', oyun: 'Пиксельный мир', araba: 'Скорость', motor: 'Открытая дорога', yemek: 'Тест вкуса', hayvan: 'Мир животных', spor: 'Соревнование', teknoloji: 'Будущее', genelkultur: 'Всё', muzik: 'Звуки', sinema: 'Мир кино', bilim: 'Открытия', tarih: 'Прошлое', sanat: 'Выражение', astronomi: 'Звёзды', edebiyat: 'Словарный запас', cografya: 'Знание карт', siyaset: 'Общество', saglik: 'Знания о жизни', mitoloji: 'Легенды', anime: 'Мир манги', futbol: 'Знание поля', markalar: 'Логотип и бренд', bayraklar: 'Символы стран', matematik: 'Числа', dizi: 'Экранные развлечения', moda: 'Стиль и тренд', felsefe: 'Мысль', doga: 'Окружение и жизнь' },
    zh: { marvel: '英雄', dc: '超能力', oyun: '像素世界', araba: '速度盛宴', motor: '公路', yemek: '美食考验', hayvan: '自然世界', spor: '竞技', teknoloji: '未来', genelkultur: '万事通', muzik: '声音', sinema: '电影世界', bilim: '发现', tarih: '过去', sanat: '表达', astronomi: '星辰', edebiyat: '词汇量', cografya: '地图知识', siyaset: '社会', saglik: '生活常识', mitoloji: '传说', anime: '漫画世界', futbol: '球场知识', markalar: '标志与品牌', bayraklar: '国家象征', matematik: '数字', dizi: '追剧乐趣', moda: '风格与潮流', felsefe: '思想', doga: '环境与生命' },
    ja: { marvel: 'ヒーロー', dc: '超能力', oyun: 'ピクセル世界', araba: 'スピード', motor: 'オープンロード', yemek: '味覚テスト', hayvan: '自然の世界', spor: '競争', teknoloji: '未来', genelkultur: '全般', muzik: 'サウンド', sinema: '映画の世界', bilim: '発見', tarih: '過去', sanat: '表現', astronomi: '星々', edebiyat: '語彙力', cografya: '地図知識', siyaset: '社会', saglik: '生活知識', mitoloji: '伝説', anime: 'マンガの世界', futbol: 'サッカー知識', markalar: 'ロゴ＆ブランド', bayraklar: '国のシンボル', matematik: '数字', dizi: 'ドラマ楽し', moda: 'スタイル＆トレンド', felsefe: '思考', doga: '環境＆生活' },
    es: { marvel: 'Héroes', dc: 'Superpoderes', oyun: 'Mundo pixel', araba: 'Velocidad', motor: 'Carretera', yemek: 'Sabor test', hayvan: 'Mundo animal', spor: 'Competencia', teknoloji: 'Futuro', genelkultur: 'Todo', muzik: 'Sonidos', sinema: 'Cine', bilim: 'Descubrimiento', tarih: 'Pasado', sanat: 'Expresión', astronomi: 'Estrellas', edebiyat: 'Vocabulario', cografya: 'Mapas', siyaset: 'Sociedad', saglik: 'Vida', mitoloji: 'Leyendas', anime: 'Manga', futbol: 'Fútbol', markalar: 'Logo y marca', bayraklar: 'Símbolos', matematik: 'Números', dizi: 'Series', moda: 'Moda', felsefe: 'Pensamiento', doga: 'Naturaleza' },
    ar: { marvel: 'أبطال', dc: 'قوى خارقة', oyun: 'عالم البكسل', araba: 'سرعة', motor: 'الطريق', yemek: 'اختبار النكهة', hayvan: 'عالم الحيوانات', spor: 'منافسة', teknoloji: 'المستقبل', genelkultur: 'كل شيء', muzik: 'أصوات', sinema: 'عالم الأفلام', bilim: 'اكتشاف', tarih: 'الماضي', sanat: 'تعبير', astronomi: 'نجوم', edebiyat: 'مفردات', cografya: 'خرائط', siyaset: 'مجتمع', saglik: 'حياة', mitoloji: 'أساطير', anime: 'مانغا', futbol: 'كرة القدم', markalar: 'شعارات', bayraklar: 'رموز الدول', matematik: 'أرقام', dizi: 'مسلسلات', moda: 'أزياء', felsefe: 'فكر', doga: 'بيئة وحياة' }
};

function getCatName(catId) {
    const lang = catNames[currentLanguage] || catNames['tr'];
    return lang[catId] || catId;
}

function getCatSubtitle(catId) {
    const lang = catSubtitles[currentLanguage] || catSubtitles['tr'];
    return lang[catId] || '';
}
let socket = null;
let multiplayerAvailable = false;
let multiplayerRoom = null;
let multiplayerName = '';
let multiplayerHost = false;
let multiplayerModalMode = 'create';
let multiplayerMode = false;
let multiplayerQuestions = [];

function emitMultiplayer(eventName, payload) {
    if (socket && multiplayerAvailable) {
        socket.emit(eventName, payload);
    } else {
        alert('Çok oyunculu mod şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.');
    }
}

try {
    socket = io({ reconnection: false, timeout: 2000 });
    socket.on('connect', () => { multiplayerAvailable = true; });
    socket.on('connect_error', () => { multiplayerAvailable = false; });
} catch (error) {
    multiplayerAvailable = false;
}
const zorluklar = [{ id: 'kolay', adKey: 'kolay', icon: '🟢', sure: 60 }, { id: 'orta', adKey: 'orta', icon: '🟡', sure: 45 }, { id: 'zor', adKey: 'zor', icon: '🔴', sure: 30 }, { id: 'suretsiz', adKey: 'suretsiz', icon: '♾️', sure: 9999 }];
function getZorlukAd(z) { return t(z.adKey); }

let secilenKategori = null, secilenZorluk = null, mevcutSorular = [], mevcutIndex = 0, cevaplar = [], timer, timeLeft, testAktif = false, puan = 0, questionStartTime = 0, timeBonusSeconds = 0, autoAdvanceTimer = null;
function id(s) { return document.getElementById(s); } const pScreen = id('profileScreen'), cScreen = id('categoryScreen'), dScreen = id('difficultyScreen'), tScreen = id('testScreen'), rScreen = id('resultScreen');

window.selectCategory = function (cid) { document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected')); id(`cat_${cid}`).classList.add('selected'); secilenKategori = kategoriler.find(k => k.id === cid); changeTheme(cid); id('categoryNextBtn').disabled = false; };
window.goToDifficultySelect = function () { id('difficultyContainer').innerHTML = zorluklar.map(z => `<div class="difficulty-card" onclick="selectDifficulty('${z.id}')" id="diff_${z.id}"><div class="difficulty-icon">${z.icon}</div><div class="difficulty-title">${getZorlukAd(z)}</div><div class="difficulty-time">${z.id === 'suretsiz' ? '∞' : z.sure + ' sn'}</div></div>`).join(''); cScreen.style.display = 'none'; dScreen.style.display = 'block'; id('difficultyNextBtn').disabled = true; soruSayisiniGoster(); };
window.selectDifficulty = function (d) { document.querySelectorAll('.difficulty-card').forEach(c => c.classList.remove('selected')); id(`diff_${d}`).classList.add('selected'); secilenZorluk = zorluklar.find(z => z.id === d); id('difficultyNextBtn').disabled = false; };

// sorular yapay zekâdan geliyor, sunucu tarafı sunucu/soru-uret.js
const SORU_SAYILARI = [5, 10, 15, 20, 25, 30];
const kayitliSoruSayisi = Number(localStorage.getItem('matex_soruSayisi'));
let soruSayisi = SORU_SAYILARI.includes(kayitliSoruSayisi) ? kayitliSoruSayisi : 10;
let soruYukleniyor = false, sonYukleme = 0;

function soruSayisiniGoster() {
    document.querySelectorAll('.soru-sayisi-secenek').forEach(el => el.classList.toggle('selected', Number(el.dataset.sayi) === soruSayisi));
}

function soruSayisiSec(n) {
    soruSayisi = n;
    localStorage.setItem('matex_soruSayisi', String(n));
    soruSayisiniGoster();
    playClickSound();
}

// aynı sorular tekrar gelmesin diye her kategorinin son 40 sorusu saklanıyor
function sorulanlariOku() {
    try { return JSON.parse(localStorage.getItem('matex_sorulanlar') || '{}'); } catch (e) { return {}; }
}

function sorulanlaraEkle(kategoriId, sorular) {
    const kayit = sorulanlariOku();
    kayit[kategoriId] = (kayit[kategoriId] || []).concat(sorular.map(s => s.soru)).slice(-40);
    try { localStorage.setItem('matex_sorulanlar', JSON.stringify(kayit)); } catch (e) { }
}

// gelen soruyu A-E biçimine çeviriyor, doğru cevabın yeri her seferinde değişiyor
function soruyuHazirla(ham) {
    const harfler = ['A', 'B', 'C', 'D', 'E'];
    const siklar = [ham.dogru].concat(ham.yanlislar);
    for (let i = siklar.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [siklar[i], siklar[j]] = [siklar[j], siklar[i]];
    }
    const soru = { soru: ham.soru, aciklama: ham.aciklama || '' };
    siklar.forEach((sik, i) => { soru[harfler[i]] = sik; });
    soru.dogru = harfler[siklar.indexOf(ham.dogru)];
    return soru;
}

async function yapayZekaSorulari(kategoriId, zorlukId, adet) {
    if (location.protocol === 'file:') {
        const e = new Error('Dosyayı bilgisayardan açtın. Sorular sadece site Netlify ya da Vercel\'de yayındayken gelir.');
        e.durum = -1;
        throw e;
    }
    const kontrol = new AbortController();
    const zamanAsimi = setTimeout(() => kontrol.abort(), 60000);
    try {
        const yanit = await fetch('/api/sorular', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                kategori: kategoriId,
                zorluk: zorlukId === 'suretsiz' ? 'orta' : zorlukId,
                adet: adet,
                dil: currentLanguage,
                haric: sorulanlariOku()[kategoriId] || []
            }),
            signal: kontrol.signal
        });
        const veri = await yanit.json().catch(() => ({}));
        const sorular = (veri.sorular || [])
            .filter(s => s && s.soru && s.dogru && Array.isArray(s.yanlislar) && s.yanlislar.length >= 3)
            .map(soruyuHazirla);
        if (!yanit.ok || !sorular.length) {
            let mesaj = veri.hata || 'Yapay zekâdan geçerli soru gelmedi';
            if (!veri.hata && (yanit.status === 404 || yanit.status === 405)) {
                mesaj = 'Sunucu fonksiyonu bulunamadı (/api/sorular). Site GitHub ya da Netlify CLI ile yüklenmeli, sürükle-bırak ile fonksiyon yüklenmez.';
            }
            const e = new Error(mesaj);
            e.durum = yanit.status;
            throw e;
        }
        sorulanlaraEkle(kategoriId, sorular);
        return sorular;
    } finally {
        clearTimeout(zamanAsimi);
    }
}

function yuklemeEkrani(durum, hata) {
    const ekran = id('loadingOverlay');
    if (!ekran) return;
    ekran.classList.toggle('hata', durum === 'hata');
    ekran.style.display = durum ? 'flex' : 'none';
    let yazi = t('loading'), detay = '';
    if (durum === 'hata') {
        if (hata && hata.durum === 429) {
            yazi = t('soruKotasiDoldu');
        } else if (hata && hata.durum) {
            yazi = t('sorularHazirlanamadi');
            detay = hata.message;
        } else {
            yazi = t('sorularYuklenemedi');
        }
    }
    ekran.querySelector('.loading-text').textContent = yazi;
    id('loadingDetail').textContent = detay;
}

window.soruYuklemeIptal = function () {
    sonYukleme++;
    soruYukleniyor = false;
    yuklemeEkrani();
};

async function startMultiplayerQuiz(room) {
    const categoryId = room.selectedCategoryId || (secilenKategori && secilenKategori.id) || 'genelkultur';
    const categoryName = room.selectedCategoryName || (secilenKategori && getCatName(secilenKategori.id)) || 'Genel Kültür';
    const difficultyId = room.difficultyId || (secilenZorluk && secilenZorluk.id) || 'orta';
    secilenKategori = kategoriler.find(k => k.id === categoryId) || kategoriler.find(k => k.id === 'genelkultur');
    secilenZorluk = zorluklar.find(z => z.id === difficultyId) || zorluklar.find(z => z.id === 'orta');
    let sorular;
    yuklemeEkrani('yukleniyor');
    try {
        sorular = await yapayZekaSorulari(categoryId, difficultyId, 10);
    } catch (e) {
        yuklemeEkrani();
        alert(t('sorularYuklenemedi'));
        return;
    }
    yuklemeEkrani();
    multiplayerQuestions = sorular;
    mevcutSorular = multiplayerQuestions;
    mevcutIndex = 0;
    cevaplar = sorular.map(() => null);
    timeLeft = secilenZorluk ? secilenZorluk.sure : 60;
    testAktif = true;
    puan = 0;
    multiplayerMode = true;
    id('testUserName').textContent = multiplayerName || kullaniciAdi;
    id('testUserDetails').textContent = `${kullaniciYas || 18} yaş • ${secilenCinsiyet || 'Belirtilmedi'}`;
    id('difficultyDisplay').textContent = secilenZorluk ? getZorlukAd(secilenZorluk) : t('orta');
    cScreen.style.display = 'none';
    dScreen.style.display = 'none';
    tScreen.style.display = 'block';
    id('questionCounter').textContent = `1/${sorular.length}`;
    soruyuGoster();
    alert(`Oyun başladı. Seçilen kategori: ${categoryName}`);
}

window.startTest = async function () {
    if (soruYukleniyor || !secilenKategori || !secilenZorluk) return;
    soruYukleniyor = true;
    const buYukleme = ++sonYukleme;
    yuklemeEkrani('yukleniyor');
    let sorular;
    try {
        sorular = await yapayZekaSorulari(secilenKategori.id, secilenZorluk.id, soruSayisi);
    } catch (e) {
        if (buYukleme === sonYukleme) {
            soruYukleniyor = false;
            yuklemeEkrani('hata', e);
        }
        return;
    }
    if (buYukleme !== sonYukleme) return;
    soruYukleniyor = false;
    yuklemeEkrani();

    isInTest = true;
    stopBgMusic();

    mevcutSorular = sorular;
    mevcutIndex = 0;
    cevaplar = sorular.map(() => null);
    testAktif = true;
    puan = 0;

    var nameEl = document.getElementById('testUserName');
    if (nameEl) nameEl.textContent = kullaniciAdi;
    var detailsEl = document.getElementById('testUserDetails');
    if (detailsEl) detailsEl.textContent = kullaniciYas + ' ' + t('yas');
    var avatarEl = document.getElementById('testUserAvatar');
    if (avatarEl) {
        if (uploadedImage) avatarEl.innerHTML = '<img src="' + uploadedImage + '">';
        else avatarEl.textContent = secilenAvatar;
    }
    var diffEl = document.getElementById('difficultyDisplay');
    if (diffEl) diffEl.textContent = getZorlukAd(secilenZorluk);

    dScreen.style.display = 'none';
    tScreen.style.display = 'block';

    soruyuGoster();
};

function soruyuGoster() {
    if (!testAktif) return;

    var s = mevcutSorular[mevcutIndex];
    if (!s) { testiBitir(); return; }

    questionStartTime = Date.now();

    document.getElementById('questionText').textContent = (mevcutIndex + 1) + '. ' + s.soru;
    document.getElementById('questionCounter').textContent = (mevcutIndex + 1) + '/' + mevcutSorular.length;

    var html = '';
    var letters = ['A', 'B', 'C', 'D', 'E'];
    for (var li = 0; li < letters.length; li++) {
        var letter = letters[li];
        if (s[letter]) {
            html += '<button class="option-btn" onclick="selectAnswer(\'' + letter + '\')" id="opt' + letter + '">' + letter + ') ' + s[letter] + '</button>';
        }
    }
    document.getElementById('optionsContainer').innerHTML = html;

    if (cevaplar[mevcutIndex] && cevaplar[mevcutIndex] !== 'BOS' && cevaplar[mevcutIndex] !== 'Z') {
        var prevBtn = document.getElementById('opt' + cevaplar[mevcutIndex]);
        if (prevBtn) prevBtn.classList.add('selected');
    }

    var fbEl = document.getElementById('inlineFeedback');
    if (fbEl) { fbEl.style.display = 'none'; fbEl.innerHTML = ''; }

    if (autoAdvanceTimer) { clearTimeout(autoAdvanceTimer); autoAdvanceTimer = null; }

    updateQuestionNavigationButtons();

    clearInterval(timer);
    var tText = document.getElementById('timerText');
    var tProg = document.getElementById('timerProgress');

    if (secilenZorluk && secilenZorluk.id === 'suretsiz') {
        if (tText) tText.textContent = '∞';
        if (tProg) tProg.style.width = '100%';
    } else {
        var maxTime = 60;
        if (secilenZorluk && secilenZorluk.sure) {
            maxTime = secilenZorluk.sure;
        }
        timeLeft = maxTime;

        function showTime() {
            var mins = Math.floor(timeLeft / 60);
            var secs = timeLeft % 60;
            var display = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
            var el = document.getElementById('timerText');
            if (el) el.textContent = display;
            var bar = document.getElementById('timerProgress');
            if (bar) bar.style.width = ((timeLeft / maxTime) * 100) + '%';
        }

        showTime();

        function tickDown() {
            if (!testAktif) return;
            timeLeft = timeLeft - 1;
            showTime();
            if (timeLeft <= 0) {
                clearInterval(timer);
                if (!cevaplar[mevcutIndex]) cevaplar[mevcutIndex] = 'Z';
                if (mevcutIndex < mevcutSorular.length - 1) {
                    mevcutIndex = mevcutIndex + 1;
                    soruyuGoster();
                } else {
                    testiBitir();
                }
            }
        }

        timer = setInterval(tickDown, 1000);
    }
}
function getNextQuestionIndex(fromIndex) {
    for (var i = fromIndex + 1; i < cevaplar.length; i++) {
        if (cevaplar[i] === null || cevaplar[i] === 'BOS') return i;
    }
    return -1;
}
function getLastSkippedQuestionIndex() {
    for (var i = cevaplar.length - 1; i >= 0; i--) {
        if (cevaplar[i] === 'BOS') return i;
    }
    return -1;
}
function updateQuestionNavigationButtons() {
    var skippedIndex = getLastSkippedQuestionIndex();
    var canReturn = (skippedIndex !== -1) && (skippedIndex !== mevcutIndex);
    document.getElementById('returnSkippedBtn').disabled = !canReturn;
    document.getElementById('prevBtn').disabled = (mevcutIndex === 0);
    document.getElementById('testNextBtn').disabled = !cevaplar[mevcutIndex];
}
window.selectAnswer = function (l) {
    var allOpts = document.querySelectorAll('.option-btn');
    for (var i = 0; i < allOpts.length; i++) {
        allOpts[i].classList.remove('selected');
        allOpts[i].style.pointerEvents = 'none';
        allOpts[i].style.opacity = '0.7';
    }

    var selOpt = document.getElementById('opt' + l);
    if (selOpt) {
        selOpt.classList.add('selected');
        selOpt.style.opacity = '1';
    }

    cevaplar[mevcutIndex] = l;

    var elapsed = (Date.now() - questionStartTime) / 1000;
    if (elapsed < 10 && secilenZorluk && secilenZorluk.id !== 'suretsiz') {
        timeBonusSeconds += 3;
        timeLeft += 3;
    }

    var s = mevcutSorular[mevcutIndex];
    var isCorrect = (l === s.dogru);

    if (answerMode === 'instant') {
        var fb = document.getElementById('inlineFeedback');
        if (isCorrect) {
            selOpt.style.borderColor = '#4caf50';
            selOpt.style.background = 'rgba(76, 175, 80, 0.25)';
            selOpt.style.boxShadow = '0 0 20px rgba(76, 175, 80, 0.4)';
            if (fb) { fb.className = 'inline-feedback correct'; fb.innerHTML = '✅ ' + t('harika'); fb.style.display = 'block'; }
            playCorrectSound();
        } else {
            selOpt.style.borderColor = '#ff6b6b';
            selOpt.style.background = 'rgba(255, 107, 107, 0.25)';
            selOpt.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.4)';
            var correctOpt = document.getElementById('opt' + s.dogru);
            if (correctOpt) {
                correctOpt.style.borderColor = '#4caf50';
                correctOpt.style.background = 'rgba(76, 175, 80, 0.25)';
                correctOpt.style.boxShadow = '0 0 20px rgba(76, 175, 80, 0.4)';
                correctOpt.style.opacity = '1';
            }
            if (fb) { fb.className = 'inline-feedback wrong'; fb.innerHTML = '❌ ' + t('dogruCevap') + ' <span style="color:#4caf50;font-weight:800;">' + s.dogru + ') ' + s[s.dogru] + '</span>'; fb.style.display = 'block'; }
            playWrongSound();
            var mc = document.getElementById('mainContainer');
            if (mc) { mc.classList.remove('shake'); void mc.offsetWidth; mc.classList.add('shake'); setTimeout(function () { mc.classList.remove('shake'); }, 600); }
        }
        if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = setTimeout(function () {
            var nextIdx = getNextQuestionIndex(mevcutIndex);
            if (nextIdx !== -1) {
                mevcutIndex = nextIdx;
                soruyuGoster();
            } else {
                testiBitir();
            }
        }, 5000);
    }

    updateQuestionNavigationButtons();
};
window.skipCurrentQuestion = function () { cevaplar[mevcutIndex] = 'BOS'; updateQuestionNavigationButtons(); nextQuestion(); };
window.nextQuestion = function () { if (cevaplar[mevcutIndex]) { clearInterval(timer); const nextIndex = getNextQuestionIndex(mevcutIndex); if (nextIndex !== -1) { mevcutIndex = nextIndex; soruyuGoster(); } else { testiBitir(); } } };
window.previousQuestion = function () { if (mevcutIndex > 0) { clearInterval(timer); mevcutIndex--; soruyuGoster(); } };
window.returnToSkippedQuestion = function () { const skippedIndex = getLastSkippedQuestionIndex(); if (skippedIndex !== -1) { clearInterval(timer); mevcutIndex = skippedIndex; soruyuGoster(); } };
window.showExitConfirm = function () {
    if (!testAktif) return;
    exitTarget = 'text';
    document.querySelector('.exit-confirm-box h3').textContent = t('testtenCik');
    document.querySelector('.exit-confirm-box p').textContent = t('testtenCikEmin');
    document.getElementById('exitConfirmModal').style.display = 'flex';
};
window.confirmExit = function () {
    document.getElementById('exitConfirmModal').style.display = 'none';
    if (typeof exitTarget !== 'undefined' && exitTarget === 'photo') {
        clearInterval(photoTimer);
        photoTestAktif = false;
        isInTest = false;
        if (soundEnabled) startBgMusic();
        hideAllMainScreens();
        document.getElementById('photoCategoryScreen').style.display = 'block';
        changeTheme(secilenPhotoKategori?.theme || 'space');
    } else if (exitTarget === 'blur') {
        isInTest = false;
        if (soundEnabled) startBgMusic();
        hideAllMainScreens();
        document.getElementById('blurCategoryScreen').style.display = 'block';
        changeTheme('space');
    } else if (exitTarget === 'ombm') {
        isInTest = false;
        if (soundEnabled) startBgMusic();
        hideAllMainScreens();
        document.getElementById('ombmCategoryScreen').style.display = 'block';
        changeTheme('space');
    } else if (exitTarget === 'siralama') {
        isInTest = false;
        if (soundEnabled) startBgMusic();
        hideAllMainScreens();
        document.getElementById('siralamaCategoryScreen').style.display = 'block';
        changeTheme('space');
        window.scrollTo(0, 0);
    } else {
        clearInterval(timer);
        testAktif = false;
        isInTest = false;
        if (soundEnabled) startBgMusic();
        tScreen.style.display = 'none';
        cScreen.style.display = 'block';
        changeTheme(secilenKategori?.id || 'space');
    }
};
window.cancelExit = function () { document.getElementById('exitConfirmModal').style.display = 'none'; };
function testiBitir() { testAktif = false; clearInterval(timer); isInTest = false; if (soundEnabled) startBgMusic(); tScreen.style.display = 'none'; rScreen.style.display = 'block'; changeTheme(secilenKategori?.id || 'space'); let dogru = 0, html = ''; const ptsPerQ = POINTS_PER_DIFFICULTY[secilenZorluk?.id || 'kolay'] || 10; mevcutSorular.forEach((s, i) => { let dm = cevaplar[i] === s.dogru; if (dm) { dogru++; puan += ptsPerQ; } html += `<div class="result-item" onclick="showExplanation(${i})" style="border-color:${dm ? '#4caf50' : '#ff6b6b'};">${dm ? '✅' : '❌'} ${i + 1}. ${s.soru}</div>`; }); id('resultList').innerHTML = html; id('finalScore').textContent = dogru + '/' + mevcutSorular.length; id('totalPoints').textContent = puan; addPoints(puan); playCorrectSound(); const oran = mevcutSorular.length ? dogru / mevcutSorular.length : 0; let seviye = oran <= 0.3 ? t('dusuk') : oran <= 0.5 ? t('ortaZeka') : oran <= 0.7 ? t('ileri') : oran < 1 ? t('cokIleri') : t('ultra'); id('zekaSeviyesi').textContent = seviye + ' ' + t('zekali'); }
window.showExplanation = function (i) {
    let s = mevcutSorular[i], c = cevaplar[i], dm = c === s.dogru;
    const answerText = c === 'Z' ? t('sureDoldu') : (c === 'BOS' ? t('bosBirakildi') : (c ? `${c}) ${s[c]}` : t('cevapsiz')));
    const yourColor = dm ? '#4caf50' : '#ff6b6b';
    const yourIcon = dm ? '✅' : '❌';
    id('explanationPanel').innerHTML = `<div class="explanation-box">
                <h3>📝 ${i + 1}. ${t('soru')}</h3>
                <p style="color:#ffffff;font-size:20px;">${s.soru}</p>
                <p style="color:${yourColor};font-size:18px;font-weight:700;">${yourIcon} ${t('cevabiniz')} ${answerText}</p>
                ${!dm ? `<p style="color:#4caf50;font-size:18px;font-weight:700;">✅ ${t('dogruCevap')} ${s.dogru}) ${s[s.dogru]}</p>` : ''}
                <p style="color:#a0d0ff;">💡 ${s.aciklama}</p>
            </div>`;
};
window.goToCategoriesFromResult = function () { clearInterval(timer); rScreen.style.display = 'none'; cScreen.style.display = 'block'; changeTheme('space'); };
window.replaySameCategory = function () {
    clearInterval(timer);
    rScreen.style.display = 'none';
    if (secilenKategori) {
        changeTheme(secilenKategori.id);
        goToDifficultySelect();
    } else {
        cScreen.style.display = 'block';
        changeTheme('space');
    }
};
window.replaySamePhotoCategory = function () {
    clearInterval(photoTimer);
    if (secilenPhotoKategori) {
        goToPhotoDifficulty();
    } else {
        hideAllMainScreens();
        document.getElementById('photoCategoryScreen').style.display = 'block';
        changeTheme('space');
    }
};
window.resetToStart = function () { clearInterval(timer); rScreen.style.display = 'none'; pScreen.style.display = 'block'; changeTheme('space'); };
function renderMultiplayerLobby() {
    const box = document.getElementById('multiplayerLobbyBox');
    if (!box) return;
    const text = document.getElementById('multiplayerLobbyText');
    const players = document.getElementById('multiplayerPlayersList');
    const startBtn = document.getElementById('multiplayerStartBtn');
    if (!multiplayerRoom) {
        box.style.display = 'none';
        return;
    }
    box.style.display = 'block';
    if (text) text.innerHTML = `<strong>Oda:</strong> ${multiplayerRoom.name}<br><strong>Kod:</strong> ${multiplayerRoom.code}<br><strong>Şifre:</strong> ${multiplayerRoom.password || 'Yok'}`;
    if (players) players.innerHTML = '<strong>Oyuncular:</strong><br>' + multiplayerRoom.players.map(p => `• ${p.name}${p.host ? ' 👑' : ''}`).join('<br>');
    if (startBtn) startBtn.style.display = multiplayerHost ? 'block' : 'none';
}

if (socket) {
    socket.on('room-created', (room) => {
        multiplayerRoom = room;
        multiplayerHost = true;
        renderMultiplayerLobby();
        alert(`Oda kuruldu. Oda Kodu: ${room.code}`);
    });
    socket.on('room-joined', (room) => {
        multiplayerRoom = room;
        multiplayerHost = false;
        renderMultiplayerLobby();
        alert(`Odaya katıldın. Oda: ${room.name}`);
    });
    socket.on('room-updated', (room) => {
        multiplayerRoom = room;
        renderMultiplayerLobby();
    });
    socket.on('room-error', (msg) => {
        alert(msg);
    });
    socket.on('game-started', (room) => {
        multiplayerRoom = room;
        multiplayerHost = room.hostId === socket.id;
        renderMultiplayerLobby();
        startMultiplayerQuiz(room);
    });
    socket.on('game-finished', ({ room }) => {
        multiplayerRoom = room;
        const winner = room.results[0];
        const resultText = room.results.map((p, i) => `${i + 1}. ${p.name} - ${p.correct} doğru • ${p.wrong} yanlış • ${p.score} puan`).join('\n');
        alert(`🏆 Şampiyon: ${winner ? winner.name : 'Yok'}\n\n${resultText}`);
    });
    socket.on('score-updated', ({ players }) => {
        if (multiplayerRoom) {
            multiplayerRoom.players = players;
            renderMultiplayerLobby();
        }
    });
}
document.addEventListener('keypress', e => {
    if (e.key === 'Enter' && !autoAdvanceTimer) {
        const modeScr = document.getElementById('modeScreen');
        if (pScreen.style.display !== 'none') validateAndContinue();
        else if (modeScr && modeScr.style.display !== 'none' && !document.getElementById('modeNextBtn').disabled) continueFromMode();
        else if (cScreen.style.display !== 'none' && !id('categoryNextBtn').disabled) goToDifficultySelect();
        else if (dScreen.style.display !== 'none' && !id('difficultyNextBtn').disabled) startTest();
        else if (document.getElementById('photoCategoryScreen')?.style.display !== 'none' && !document.getElementById('photoCategoryNextBtn').disabled) goToPhotoDifficulty();
        else if (document.getElementById('photoDifficultyScreen')?.style.display !== 'none' && !document.getElementById('photoDifficultyNextBtn').disabled) startPhotoTest();
        else if (document.getElementById('ombmCategoryScreen')?.style.display !== 'none' && !document.getElementById('ombmCategoryNextBtn').disabled) goToOmbmCount();
        else if (document.getElementById('ombmCountScreen')?.style.display !== 'none') startOmbmTournament();
    }
});
// o mu bu mu
let ombmSelectedCat = null;
let ombmSelectedMax = 0;
let ombmAllItems = [];
let ombmCurrentRound = [];
let ombmMatchQueue = [];
let ombmNextRound = [];
let ombmCurrentMatch = [null, null];
let ombmTurNum = 1;
let ombmMatchInTur = 0;
let ombmTotalMatchesInTur = 0;
let ombmEliminatedAll = [];

const ombmKategoriler = [
    { id: 'marvel', icon: '🦸', name: 'Marvel', maxPool: 'photo-marvel', max: 36 },
    { id: 'dc', icon: '🦇', name: 'DC', maxPool: 'photo-dc', max: 26 },
    { id: 'erkekanime', icon: '⚔️', name: 'Erkek Anime', maxPool: 'photo-erkekanime', max: 36 },
    { id: 'kizoyuncu', icon: '💃', name: 'Kız Oyuncu', maxPool: 'photo-kadinlar', max: 26 },
    { id: 'erkejoyuncu', icon: '🕴️', name: 'Erkek Oyuncu', maxPool: 'photo-unluler', max: 26 },
    { id: 'oyunkarakterleri', icon: '🕹️', name: 'Oyun Karakteri', maxPool: 'photo-oyunkarakterleri', max: 24 },
    { id: 'kizanime', icon: '🌸', name: 'Kız Anime', maxPool: 'photo-kizanime', max: 36 },
    { id: 'futbolcu', icon: '⚽', name: 'Futbolcu', maxPool: 'photo-futbol', max: 26 },
    { id: 'film', icon: '🎬', name: 'Filmler', maxPool: 'photo-sinema', max: 22 },
    { id: 'dizi', icon: '📺', name: 'Diziler', maxPool: 'photo-dizi', max: 16 },
    { id: 'aburcubur', icon: '🍿', name: 'Abur Cubur', maxPool: 'photo-aburcubur', max: 28 },
    { id: 'oyun', icon: '🎮', name: 'Oyun', maxPool: 'photo-oyun', max: 26 },
    { id: 'yemek', icon: '🍳', name: 'Yemek', maxPool: 'photo-yemekler', max: 26 },
    { id: 'anime', icon: '🎌', name: 'Anime', maxPool: 'photo-anime', max: 8 },
    { id: 'bayrak', icon: '🚩', name: 'Bayrak', maxPool: 'photo-bayraklar', max: 16 },
    { id: 'tatli', icon: '🍰', name: 'Tatlı', maxPool: 'photo-tatli', max: 16 },
    { id: 'hayvan', icon: '🦁', name: 'Hayvan', maxPool: 'photo-hayvan', max: 30 },
    { id: 'motor', icon: '🏍️', name: 'Motor', maxPool: 'photo-motor', max: 12 },
    { id: 'araba', icon: '🏎️', name: 'Araba', maxPool: 'photo-araba', max: 18 },
    { id: 'spor', icon: '🏆', name: 'Spor', maxPool: 'photo-spor', max: 30 }
];

const ombmPools = {};
function buildOmbmPools() {
    ombmKategoriler.forEach(k => {
        const pool = photoPools[k.maxPool] || [];
        ombmPools[k.id] = pool.map((item, idx) => ({
            emoji: item.emoji || '🖼️',
            name: item.label || ('Öğe ' + (idx + 1)),
            image: item.image || ''
        }));
    });

    ombmKategoriler.forEach(k => {
        const fallbacks = {
            'marvel': [
                { emoji: '🛡️', name: 'Captain America', image: 'marvel_01.png' },
                { emoji: '🦾', name: 'Iron Man', image: 'marvel_02.png' },
                { emoji: '🕷️', name: 'Spider-Man', image: 'marvel_03.png' },
                { emoji: '💪', name: 'Hulk', image: 'marvel_04.png' },
                { emoji: '🔨', name: 'Thor', image: 'marvel_05.png' },
                { emoji: '🖤', name: 'Black Widow', image: 'marvel_06.png' },
                { emoji: '🪄', name: 'Doctor Strange', image: 'marvel_07.png' },
                { emoji: '🐆', name: 'Black Panther', image: 'marvel_08.png' },
                { emoji: '😈', name: 'Loki', image: 'marvel_09.png' },
                { emoji: '🫰', name: 'Thanos', image: 'marvel_10.png' },
                { emoji: '🦝', name: 'Rocket', image: 'marvel_11.png' },
                { emoji: '⭐', name: 'Star-Lord', image: 'marvel_12.png' },
                { emoji: '💚', name: 'Gamora', image: 'marvel_13.png' },
                { emoji: '🌳', name: 'Groot', image: 'marvel_14.png' },
                { emoji: '🖤', name: 'Venom', image: 'marvel_15.png' },
                { emoji: '🟢', name: 'Doctor Doom', image: 'marvel_16.png' },
                { emoji: '⚔️', name: 'Wolverine', image: 'marvel_17.png' },
                { emoji: '🔴', name: 'Deadpool', image: 'marvel_18.png' },
                { emoji: '🐜', name: 'Ant-Man', image: 'marvel_19.png' },
                { emoji: '🐝', name: 'Wasp', image: 'marvel_20.png' },
                { emoji: '🦂', name: 'Scorpion', image: 'marvel_21.png' },
                { emoji: '🦏', name: 'Rhino', image: 'marvel_22.png' },
                { emoji: '🔴', name: 'Scarlet Witch', image: 'marvel_23.png' },
                { emoji: '🏹', name: 'Hawkeye', image: 'marvel_24.png' },
                { emoji: '💎', name: 'Vision', image: 'marvel_25.png' },
                { emoji: '❄️', name: 'Winter Soldier', image: 'marvel_26.png' },
                { emoji: '🟡', name: 'Juggernaut', image: 'marvel_27.png' },
                { emoji: '🔴', name: 'Red Hulk', image: 'marvel_28.png' },
                { emoji: '🌙', name: 'Moon Knight', image: 'marvel_29.png' },
                { emoji: '🔴', name: 'Daredevil', image: 'marvel_30.png' },
                { emoji: '🔥', name: 'Phoenix', image: 'marvel_31.webp' },
                { emoji: '🧲', name: 'Magneto', image: 'marvel_32.webp' },
                { emoji: '🧠', name: 'Professor X', image: 'marvel_33.webp' },
                { emoji: '🌪️', name: 'Storm', image: 'marvel_34.avif' },
                { emoji: '🐾', name: 'Beast', image: 'marvel_35.webp' },
                { emoji: '🦸', name: 'Avatar', image: 'marvel_36.jpg' }
            ],
            'kizoyuncu': [
                { emoji: '💃', name: 'Demet Özdemir', image: 'kızoyuncu_01.jpg' },
                { emoji: '💃', name: 'Emma Stone', image: 'kızoyuncu_02.webp' },
                { emoji: '💃', name: 'Serenay Sarıkaya', image: 'kızoyuncu_03.jpg' },
                { emoji: '💃', name: 'Bensu Soral', image: 'kızoyuncu_04.webp' },
                { emoji: '💃', name: 'Barbara Palvin', image: 'kızoyuncu_05.jpg' },
                { emoji: '💃', name: 'Millie Bobby Brown', image: 'kızoyuncu_06.webp' },
                { emoji: '💃', name: 'Devrim Özkan', image: 'kızoyuncu_07.jpg' },
                { emoji: '💃', name: 'Natalie Portman', image: 'kızoyuncu_08.webp' },
                { emoji: '💃', name: 'Elçin Sangu', image: 'kızoyuncu_09.jpg' },
                { emoji: '💃', name: 'Scarlett Johansson', image: 'kızoyuncu_10.webp' },
                { emoji: '💃', name: 'Melis Sezen', image: 'kızoyuncu_11.jpg' },
                { emoji: '💃', name: 'Mine Tugay', image: 'kızoyuncu_12.webp' },
                { emoji: '💃', name: 'Angelina Jolie', image: 'kızoyuncu_13.jpg' },
                { emoji: '💃', name: 'Anya Taylor-Joy', image: 'kızoyuncu_14.jpg' },
                { emoji: '💃', name: 'Sydney Sweeney', image: 'kızoyuncu_15.jpg' },
                { emoji: '💃', name: 'Hazar Ergüçlü', image: 'kızoyuncu_16.jpg' },
                { emoji: '💃', name: 'Jenna Ortega', image: 'kızoyuncu_17.jpg' },
                { emoji: '💃', name: 'Megan Fox', image: 'kızoyuncu_18.jpg' },
                { emoji: '💃', name: 'Nilperi Şahinkaya', image: 'kızoyuncu_19.jpg' },
                { emoji: '💃', name: 'Hande Erçel', image: 'kızoyuncu_20.jpg' },
                { emoji: '💃', name: 'Hazal Kaya', image: 'kızoyuncu_21.jpg' },
                { emoji: '💃', name: 'Nilsu Berfin Aktaş', image: 'kızoyuncu_22.jpg' },
                { emoji: '💃', name: 'Penélope Cruz', image: 'kızoyuncu_23.avif' },
                { emoji: '💃', name: 'Gal Gadot', image: 'kızoyuncu_24.jpg' },
                { emoji: '💃', name: 'Meryem Uzerli', image: 'kızoyuncu_25.jpg' },
                { emoji: '💃', name: 'Hande Erçel', image: 'kızoyuncu_26.jpg' }
            ],
            'futbolcu': [
                { emoji: '⚽', name: 'Barış Alper', image: 'futbolcu_01.jpeg' },
                { emoji: '⚽', name: 'Kylian Mbappé', image: 'futbolcu_02.jpg' },
                { emoji: '⚽', name: 'Kevin De Bruyne', image: 'futbolcu_03.png' },
                { emoji: '⚽', name: 'Icardi', image: 'futbolcu_04.webp' },
                { emoji: '⚽', name: 'Vinicius Jr.', image: 'futbolcu_05.jpg' },
                { emoji: '⚽', name: 'Lionel Messi', image: 'futbolcu_06.webp' },
                { emoji: '⚽', name: 'Kenan Yıldız', image: 'futbolcu_07.jpg' },
                { emoji: '⚽', name: 'Cristiano Ronaldo', image: 'futbolcu_08.jpg' },
                { emoji: '⚽', name: 'Ronaldinho', image: 'futbolcu_09.webp' },
                { emoji: '⚽', name: 'Luís Nazário', image: 'futbolcu_10.jpg' },
                { emoji: '⚽', name: 'Fernando Muslera', image: 'futbolcu_11.webp' },
                { emoji: '⚽', name: 'Victor Osimhen', image: 'futbolcu_12.jpg' },
                { emoji: '⚽', name: 'Quarejma', image: 'futbolcu_13.jpg' },
                { emoji: '⚽', name: 'Martin Ødegaard', image: 'futbolcu_14.jpg' },
                { emoji: '⚽', name: 'Erling Haaland', image: 'futbolcu_15.jpg' },
                { emoji: '⚽', name: 'Jude Bellingham', image: 'futbolcu_16.jpg' },
                { emoji: '⚽', name: 'Lamine Yamal', image: 'futbolcu_17.jpg' },
                { emoji: '⚽', name: 'Arda Turan', image: 'futbolcu_18.jpg' },
                { emoji: '⚽', name: 'Neymar', image: 'futbolcu_19.jpg' },
                { emoji: '⚽', name: 'Arda Güler', image: 'futbolcu_20.jpg' },
                { emoji: '⚽', name: 'İlkay Gündoğan', image: 'futbolcu_21.jpg' },
                { emoji: '⚽', name: 'Diego Maradona', image: 'futbolcu_22.jpg' },
                { emoji: '⚽', name: 'Gianluigi Buffon', image: 'futbolcu_23.jpg' },
                { emoji: '⚽', name: 'Luis Suárez', image: 'futbolcu_24.jpg' },
                { emoji: '⚽', name: 'Pelé', image: 'futbolcu_25.jpg' },
                { emoji: '⚽', name: 'Muhammed Salah', image: 'futbolcu_26.jpg' }
            ],
            'film': [
                { emoji: '🎬', name: 'Tosun Paşa', image: 'flim_01.jpg' },
                { emoji: '🎬', name: 'Bekçiler Kralı', image: 'flim_02.jpg' },
                { emoji: '🎬', name: 'Vizontele Tuuba', image: 'flim_03.jpg' },
                { emoji: '🎬', name: 'Hokkabaz', image: 'flim_04.jpg' },
                { emoji: '🎬', name: 'Organize İşler: Sazan Sarmalı', image: 'flim_05.jpg' },
                { emoji: '🎬', name: 'Yüzüklerin Efendisi: Kralın Dönüşü', image: 'flim_06.jpg' },
                { emoji: '🎬', name: 'Esaretin Bedeli', image: 'flim_07.jpg' },
                { emoji: '🎬', name: 'Baba', image: 'flim_08.jpg' },
                { emoji: '🎬', name: 'Kara Şövalye', image: 'flim_09.jpg' },
                { emoji: '🎬', name: 'Dövüş Kulübü', image: 'flim_10.jpg' },
                { emoji: '🎬', name: 'Yeşil Yol', image: 'flim_11.jpg' },
                { emoji: '🎬', name: 'Prestij', image: 'flim_12.jpg' },
                { emoji: '🎬', name: 'Matrix', image: 'flim_13.jpg' },
                { emoji: '🎬', name: 'Geleceğe Dönüş', image: 'flim_14.jpg' },
                { emoji: '🎬', name: 'Yıldızlararası', image: 'flim_15.jpg' },
                { emoji: '🎬', name: 'Terminatör', image: 'flim_16.jpg' },
                { emoji: '🎬', name: 'Can Dostum', image: 'flim_17.jpg' },
                { emoji: '🎬', name: 'Avengers: Sonsuzluk Savaşı', image: 'flim_18.jpg' },
                { emoji: '🎬', name: 'Dangal', image: 'flim_19.jpg' },
                { emoji: '🎬', name: 'V for Vendetta', image: 'flim_20.jpg' },
                { emoji: '🎬', name: 'Karayip Korsanları', image: 'flim_21.jpg' },
                { emoji: '🎬', name: 'Hababam Sınıfı', image: 'flim_22.jpg' }
            ],
            'erkekanime': [
                { emoji: '⚔️', name: 'Naruto Uzumaki', image: 'anime_01.png' },
                { emoji: '⚔️', name: 'Monkey D. Luffy', image: 'anime_02.jpg' },
                { emoji: '⚔️', name: 'Son Goku', image: 'anime_03.png' },
                { emoji: '⚔️', name: 'Eren Yeager', image: 'anime_04.jpg' },
                { emoji: '⚔️', name: 'Light Yagami', image: 'anime_05.jpg' },
                { emoji: '⚔️', name: 'Satoru Gojo', image: 'anime_06.png' },
                { emoji: '⚔️', name: 'Gon Freecss', image: 'anime_07.png' },
                { emoji: '⚔️', name: 'Kakashi Hatake', image: 'anime_08.jpg' },
                { emoji: '⚔️', name: 'Jotaro Kujo', image: 'anime_09.jpg' },
                { emoji: '⚔️', name: 'Roronoa Zoro', image: 'anime_10.jpg' },
                { emoji: '⚔️', name: 'Tanjiro Kamado', image: 'anime_11.jpg' },
                { emoji: '⚔️', name: 'Vegito', image: 'anime_12.png' },
                { emoji: '⚔️', name: 'Son Goku', image: 'anime_13.jpg' },
                { emoji: '⚔️', name: 'Izuku Midoriya', image: 'anime_14.jpg' },
                { emoji: '⚔️', name: 'Ken Kaneki', image: 'anime_15.jpg' },
                { emoji: '⚔️', name: 'Devasa Titan', image: 'anime_16.jpg' },
                { emoji: '⚔️', name: 'Lord Beerus', image: 'anime_17.jpg' },
                { emoji: '⚔️', name: 'Alucard', image: 'anime_18.png' },
                { emoji: '⚔️', name: 'Marshall D. Teach', image: 'anime_19.jpg' },
                { emoji: '⚔️', name: 'Denji', image: 'anime_20.jpg' },
                { emoji: '⚔️', name: 'Yujiro Hanma', image: 'anime_21.png' },
                { emoji: '⚔️', name: 'Sung Jin-woo', image: 'anime_22.png' },
                { emoji: '⚔️', name: 'Saitama', image: 'anime_23.png' },
                { emoji: '⚔️', name: 'Mikasa Ackerman', image: 'anime_24.png' },
                { emoji: '⚔️', name: 'Madara Uchiha', image: 'anime_25.png' },
                { emoji: '⚔️', name: 'Sasuke Uchiha', image: 'anime_26.png' },
                { emoji: '⚔️', name: 'Shanks', image: 'anime_27.jpg' },
                { emoji: '⚔️', name: 'Yoruichi Shihouin', image: 'anime_28.jpg' },
                { emoji: '⚔️', name: 'Zeke Jaeger', image: 'anime_29.jpg' },
                { emoji: '⚔️', name: 'Dracule Mihawk', image: 'anime_30.jpg' },
                { emoji: '⚔️', name: 'Baki Hanma', image: 'anime_31.jpg' },
                { emoji: '⚔️', name: 'Nami', image: 'anime_32.jpg' },
                { emoji: '⚔️', name: 'Itachi Uchiha', image: 'anime_33.webp' },
                { emoji: '⚔️', name: 'Dante', image: 'anime_34.jpg' },
                { emoji: '⚔️', name: 'Sosuke Aizen', image: 'anime_35.jpg' },
                { emoji: '⚔️', name: 'Tsubasa Ozora', image: 'anime_36.webp' }
            ],
            'kizanime': [
                { emoji: '🗡️', name: 'Erza Scarlet', image: 'kız_01.jpg' },
                { emoji: '🔫', name: 'Revy', image: 'kız_02.webp' },
                { emoji: '🏖️', name: 'Asuna Yuuki', image: 'kız_03.jpg' },
                { emoji: '🌼', name: 'Makio', image: 'kız_04.webp' },
                { emoji: '❄️', name: 'Mizore Shirayuki', image: 'kız_05.jpg' },
                { emoji: '🎯', name: 'Yoko Littner', image: 'kız_06.webp' },
                { emoji: '🔑', name: 'Lucy Heartfilia', image: 'kız_07.jpg' },
                { emoji: '🐱', name: 'Blair', image: 'kız_08.webp' },
                { emoji: '🏍️', name: 'Celty Sturluson', image: 'kız_09.jpg' },
                { emoji: '🐌', name: 'Tsunade Senju', image: 'kız_10.jpg' },
                { emoji: '☂️', name: 'Kagura', image: 'kız_11.jpg' },
                { emoji: '🐇', name: 'Mirko', image: 'kız_12.jpg' },
                { emoji: '🌺', name: 'Marin Kitagawa', image: 'kız_13.jpg' },
                { emoji: '🎖️', name: 'Tanya Degurechaff', image: 'kız_14.jpg' },
                { emoji: '👿', name: 'Rias Gremory', image: 'kız_15.jpg' },
                { emoji: '🌙', name: 'Sailor Moon', image: 'kız_16.png' },
                { emoji: '⚔️', name: 'Mikasa Ackerman', image: 'kız_17.jpg' },
                { emoji: '⚡', name: 'Yoruichi Shihouin', image: 'kız_18.jpg' },
                { emoji: '🍊', name: 'Nami', image: 'kız_19.jpg' },
                { emoji: '🔧', name: 'Winry Rockbell', image: 'kız_20.jpg' },
                { emoji: '❤️', name: 'Kaguya Shinomiya', image: 'kız_21.jpg' },
                { emoji: '🎋', name: 'Nezuko Kamado', image: 'kız_22.jpg' },
                { emoji: '🥜', name: 'Anya Forger', image: 'kız_23.webp' },
                { emoji: '💙', name: 'Rem', image: 'kız_24.jpg' },
                { emoji: '🗡️', name: 'Rukia Kuchiki', image: 'kız_25.jpg' },
                { emoji: '🌸', name: 'Sakura Haruno', image: 'kız_26.jpg' },
                { emoji: '🩸', name: 'Power', image: 'kız_27.webp' },
                { emoji: '🗡️', name: 'Yor Forger', image: 'kız_28.webp' },
                { emoji: '💜', name: 'Hinata Hyuga', image: 'kız_29.webp' },
                { emoji: '🐶', name: 'Makima', image: 'kız_30.webp' },
                { emoji: '📚', name: 'Nico Robin', image: 'kız_31.webp' },
                { emoji: '❄️', name: 'Emilia', image: 'kız_32.jpg' },
                { emoji: '❤️', name: 'Zero Two', image: 'kız_33.jpg' },
                { emoji: '🟢', name: 'C.C.', image: 'kız_34.jpg' },
                { emoji: '🐍', name: 'Boa Hancock', image: 'kız_35.jpg' },
                { emoji: '👑', name: 'Satsuki Kiryuin', image: 'kız_36.jpg' }
            ],
            'aburcubur': [
                { emoji: '🍿', name: 'Ülker Pötibör Bisküvi', image: 'aburcubur_1.jpg' },
                { emoji: '🍿', name: 'Eti Benim\'o', image: 'aburcubur_2.jpg' },
                { emoji: '🍿', name: 'Ülker Çokoprens', image: 'aburcubur_3.jpg' },
                { emoji: '🍿', name: 'Ülker Biskrem Extra', image: 'aburcubur_4.jpg' },
                { emoji: '🍿', name: 'Ülker İkram', image: 'aburcubur_5.jpg' },
                { emoji: '🍿', name: 'Ülker Halley', image: 'aburcubur_6.jpg' },
                { emoji: '🍿', name: 'Ülker Çikolata', image: 'aburcubur_7.jpg' },
                { emoji: '🍿', name: 'Milka', image: 'aburcubur_8.jpg' },
                { emoji: '🍿', name: 'Toblerone', image: 'aburcubur_9.jpg' },
                { emoji: '🍿', name: 'Ferrero Rocher', image: 'aburcubur_10.jpg' },
                { emoji: '🍿', name: 'Nestlé 1927', image: 'aburcubur_11.jpg' },
                { emoji: '🍿', name: 'Uludağ Limonata', image: 'aburcubur_12.jpg' },
                { emoji: '🍿', name: 'Coca-Cola', image: 'aburcubur_13.jpg' },
                { emoji: '🍿', name: 'Sprite', image: 'aburcubur_14.jpg' },
                { emoji: '🍿', name: 'Lipton Ice Tea', image: 'aburcubur_15.jpg' },
                { emoji: '🍿', name: 'Mis Ayran', image: 'aburcubur_16.jpg' },
                { emoji: '🍿', name: 'Didi', image: 'aburcubur_17.jpg' },
                { emoji: '🍿', name: 'Lay\'s Yoğurtlu', image: 'aburcubur_18.jpg' },
                { emoji: '🍿', name: 'Patos Rolls', image: 'aburcubur_19.jpg' },
                { emoji: '🍿', name: 'Lay\'s Fırından', image: 'aburcubur_20.jpg' },
                { emoji: '🍿', name: 'Doritos Hot Corn', image: 'aburcubur_21.jpg' },
                { emoji: '🍿', name: 'Ruffles Originals', image: 'aburcubur_22.jpg' },
                { emoji: '🍿', name: 'Patos Acılı', image: 'aburcubur_23.jpg' },
                { emoji: '🍿', name: 'Cipso Yoğurtlu', image: 'aburcubur_24.jpg' },
                { emoji: '🍿', name: 'Ruffles Ketçap', image: 'aburcubur_25.jpg' },
                { emoji: '🍿', name: 'Master Potato', image: 'aburcubur_26.jpg' },
                { emoji: '🍿', name: 'Eti Browni Gold', image: 'aburcubur_27.jpg' },
                { emoji: '🍿', name: 'Eti Burçak', image: 'aburcubur_28.jpg' }
            ],
            'yemek': [
                { emoji: '', name: 'Ezme', image: 'yemekler_01.jpg' },
                { emoji: '', name: 'Biber Dolması', image: 'yemekler_02.webp' },
                { emoji: '', name: 'beyti', image: 'yemekler_03.avif' },
                { emoji: '🥙', name: 'Döner', image: 'yemekler_04.jpg' },
                { emoji: '🥞', name: 'Katmer', image: 'yemekler_05.jpg' },
                { emoji: '', name: 'Arpa Şehriye Çorbası', image: 'yemekler_06.webp' },
                { emoji: '🍲', name: 'Ali Nazik', image: 'yemekler_07.jpg' },
                { emoji: '', name: 'Sulu Köfte', image: 'yemekler_08.jpg' },
                { emoji: '🍚', name: 'Bulgur Pilavı', image: 'yemekler_09.jpg' },
                { emoji: '🥩', name: 'Çiğ Köfte', image: 'yemekler_10.jpg' },
                { emoji: '', name: 'Hummus', image: 'yemekler_11.jpg' },
                { emoji: '🥩', name: 'Izgara Et', image: 'yemekler_12.jpg' },
                { emoji: '🥐', name: 'Poğaça', image: 'yemekler_13.jpg' },
                { emoji: '', name: 'Cacık', image: 'yemekler_14.jpg' },
                { emoji: '', name: 'köfte', image: 'yemekler_15.jpg' },
                { emoji: '', name: 'Musakka', image: 'yemekler_16.jpg' },
                { emoji: '🫓', name: 'Lahmacun', image: 'yemekler_17.jpg' },
                { emoji: '', name: 'Nohut Eti', image: 'yemekler_18.jpg' },
                { emoji: '🫓', name: 'Acıktır', image: 'yemekler_19.jpg' },
                { emoji: '', name: 'Adana Kebab', image: 'yemekler_20.jpg' },
                { emoji: '🍽️', name: 'İskender Kebab', image: 'yemekler_21.jpg' },
                { emoji: '🥟', name: 'Mantı', image: 'yemekler_22.jpg' },
                { emoji: '', name: 'Çökertme', image: 'yemekler_23.jpg' },
                { emoji: '', name: 'Hamburger', image: 'yemekler_24.jpg' },
                { emoji: '', name: 'Adana Şiş Kebab', image: 'yemekler_25.jpg' },
                { emoji: '🍕', name: 'Pizza', image: 'yemekler_26.jpg' }
            ],
            'ünlü erkekler': [
                { emoji: '🕴️', name: 'Christian Bale', image: 'erkek_01.jpg' },
                { emoji: '🕴️', name: 'Leonardo DiCaprio', image: 'erkek_02.jpg' },
                { emoji: '🕴️', name: 'Brad Pitt', image: 'erkek_03.jpg' },
                { emoji: '🕴️', name: 'Will Smith', image: 'erkek_04.jpg' },
                { emoji: '🕴️', name: 'Nicolas Cage', image: 'erkek_05.jpg' },
                { emoji: '🕴️', name: 'Jason Statham', image: 'erkek_06.jpg' },
                { emoji: '🕴️', name: 'Robert Downey Jr.', image: 'erkek_07.jpg' },
                { emoji: '🕴️', name: 'Hugh Jackman', image: 'erkek_08.jpg' },
                { emoji: '🕴️', name: 'Vin Diesel', image: 'erkek_09.jpg' },
                { emoji: '🕴️', name: 'Kenan İmirzalıoğlu', image: 'erkek_10.jpg' },
                { emoji: '🕴️', name: 'Burak Özçivit', image: 'erkek_11.jpg' },
                { emoji: '🕴️', name: 'Aras Bulut İynemli', image: 'erkek_12.jpg' },
                { emoji: '🕴️', name: 'Kerem Bürsin', image: 'erkek_13.jpg' },
                { emoji: '🕴️', name: 'Çağatay Ulusoy', image: 'erkek_14.jpg' },
                { emoji: '🕴️', name: 'Kıvanç Tatlıtuğ', image: 'erkek_15.jpg' },
                { emoji: '🕴️', name: 'Barış Arduç', image: 'erkek_16.jpg' },
                { emoji: '🕴️', name: 'İlker Kaleli', image: 'erkek_17.jpg' },
                { emoji: '🕴️', name: 'Alperen Duymaz', image: 'erkek_18.jpg' },
                { emoji: '🕴️', name: 'Engin Öztürk', image: 'erkek_19.jpg' },
                { emoji: '🕴️', name: 'Johnny Depp', image: 'erkek_20.jpg' },
                { emoji: '🕴️', name: 'Michele Morrone', image: 'erkek_21.jpg' },
                { emoji: '🕴️', name: 'Necati Şaşmaz', image: 'erkek_22.jpg' },
                { emoji: '🕴️', name: 'Tom Hardy', image: 'erkek_23.jpg' },
                { emoji: '🕴️', name: 'Tom Holland', image: 'erkek_24.jpg' },
                { emoji: '🕴️', name: 'Robert Pattinson', image: 'erkek_25.jpg' },
                { emoji: '🕴️', name: 'Engin Altan Düzyatan', image: 'erkek_26.png' }

            ],
            'motor': [
                { emoji: '🏍️', name: 'Yamaha R25', image: 'm=1.jpg' },
                { emoji: '🏍️', name: 'Bajaj Pulsar', image: 'm=2.jpg' },
                { emoji: '🏍️', name: 'BMW S1000RR', image: 'm=3.jpg' },
                { emoji: '️', name: 'Ducati Panigale', image: 'm=4.jpg' },
                { emoji: '🏍️', name: 'Suzuki Hayabusa', image: 'm=5.jpg' },
                { emoji: '🏍️', name: 'Kawasaki Ninja', image: 'm=6.jpg' },
                { emoji: '🏍️', name: 'Honda Africa Twin', image: 'm=7.jpg' },
                { emoji: '🏍️', name: 'Bajaj RS200', image: 'm=8.jpg' },
                { emoji: '🏍️', name: 'Suzuki GSX-R', image: 'm=9.jpg' },
                { emoji: '🏍️', name: 'Okuba GT100', image: 'm=10.jpg' },
                { emoji: '🏍️', name: 'TVS Raider', image: 'm=11.jpg' },
                { emoji: '🏍️', name: 'Honda PCX', image: 'm=12.jpg' }
            ],
            'araba': [
                { emoji: '🏎️', name: 'Bugatti Chiron', image: 'a.10.jpg' },
                { emoji: '🚗', name: 'BMW M4', image: 'a.20.jpg' },
                { emoji: '🚙', name: 'BMW i8', image: 'a.30.jpg' },
                { emoji: '🚗', name: 'Renault Clio', image: 'a.40.jpg' },
                { emoji: '', name: 'Citroen Ami', image: 'a.50.jpg' },
                { emoji: '🚙', name: 'Togg T10X', image: 'a.60.jpg' },
                { emoji: '🚗', name: 'Fiat Doblo', image: 'a.70.jpg' },
                { emoji: '🚗', name: 'Volkswagen Passat', image: 'a.80.jpg' },
                { emoji: '🏁', name: 'Lamborghini Centenario', image: 'a.90.jpg' },
                { emoji: '🚗', name: 'Rolls Royce Ghost', image: 'a.100.jpg' },
                { emoji: '️', name: 'Ferrari LaFerrari', image: 'a.110.jpg' },
                { emoji: '🚗', name: 'Nissan Skyline GT-R', image: 'a.120.jpg' },
                { emoji: '🏁', name: 'Ford Mustang Shelby', image: 'a.130.jpg' },
                { emoji: '🚗', name: 'Dodge Charger 1970', image: 'a.140.jpg' },
                { emoji: '🚙', name: 'Toyota Supra', image: 'a.150.jpg' },
                { emoji: '🏎️', name: 'Porsche 911 GT3', image: 'a.160.jpg' },
                { emoji: '🚗', name: 'Tofaş Şahin', image: 'a.170.jpg' },
                { emoji: '🏎️', name: 'Mercedes AMG GT', image: 'a.180.jpg' }
            ],
            'bayrak': [
                { emoji: '🇰🇷', name: 'Güney Kore', image: 'bayraklar_01.jpg' },
                { emoji: '🇷', name: 'Fransa', image: 'bayraklar_02.png' },
                { emoji: '🇲🇰', name: 'Kuzey Makedonya', image: 'bayraklar_03.jpg' },
                { emoji: '🇹🇷', name: 'Türkiye', image: 'bayraklar_04.png' },
                { emoji: '🇮🇱', name: 'İsrail', image: 'bayraklar_05.jpg' },
                { emoji: '🇩🇰', name: 'Danimarka', image: 'bayraklar_06.png' },
                { emoji: '🇺🇸', name: 'Amerika Birleşik Devletleri', image: 'bayraklar_07.jpg' },
                { emoji: '🇧🇷', name: 'Brezilya', image: 'bayraklar_08.png' },
                { emoji: '🇺🇿', name: 'Özbekistan', image: 'bayraklar_09.jpg' },
                { emoji: '🇾', name: 'Suriye', image: 'bayraklar_10.png' },
                { emoji: '🇦🇲', name: 'Ermenistan', image: 'bayraklar_11.png' },
                { emoji: '🇦🇿', name: 'Azerbaycan', image: 'bayraklar_12.png' },
                { emoji: '🇲', name: 'Türkmenistan', image: 'bayraklar_13.png' },
                { emoji: '🇵🇰', name: 'Pakistan', image: 'bayraklar_14.png' },
                { emoji: '🇩🇪', name: 'Almanya', image: 'bayraklar_15.png' },
                { emoji: '🇦', name: 'Güney Afrika', image: 'bayraklar_16.jpg' }
            ],
            'tatli': [
                { emoji: '🍮', name: 'Trileçe', image: 'tatlı_01.jpg' },
                { emoji: '🍰', name: 'Çikolatalı Trileçe', image: 'tatlı_02.jpg' },
                { emoji: '🧀', name: 'Künefe', image: 'tatlı_03.jpg' },
                { emoji: '', name: 'Şekerpare', image: 'tatlı_04.jpg' },
                { emoji: '🍮', name: 'Kemalpaşa Tatlısı', image: 'tatlı_05.jpg' },
                { emoji: '', name: 'Fıstıklı Baklava', image: 'tatlı_06.jpg' },
                { emoji: '🍫', name: 'Supangle', image: 'tatlı_07.jpg' },
                { emoji: '', name: 'Aşure', image: 'tatlı_08.jpg' },
                { emoji: '🍮', name: 'Fırın Sütlaç', image: 'tatlı_09.jpg' },
                { emoji: '', name: 'Çilekli Trileçe', image: 'tatlı_10.jpg' },
                { emoji: '🍩', name: 'Halka Tatlısı', image: 'tatlı_11.jpg' },
                { emoji: '🥧', name: 'Baklava Dilimi', image: 'tatlı_12.jpg' },
                { emoji: '🍪', name: 'Çikolatalı Cookie', image: 'tatlı_13.jpg' },
                { emoji: '🥞', name: 'Pankek', image: 'tatlı_14.jpg' },
                { emoji: '🧁', name: 'Cupcake', image: 'tatlı_15.jpg' },
                { emoji: '🍦', name: 'Dondurma', image: 'tatlı_16.jpg' }
            ],
            'anime': [
                { emoji: '️', name: 'Demon Slayer: Mugen Train', image: 'demon1.jpg' },
                { emoji: '📓', name: 'Death Note', image: 'demon2.jpg' },
                { emoji: '', name: 'Dragon Ball Z', image: 'demon3.jpg' },
                { emoji: '👻', name: 'Spirited Away (Ruhların Kaçışı)', image: 'demon4.jpg' },
                { emoji: '📓', name: 'Death Note (Manga)', image: 'demon5.jpg' },
                { emoji: '', name: 'Avatar: The Last Airbender', image: 'demon6.jpg' },
                { emoji: '🔫', name: 'Black Lagoon', image: 'demon7.jpg' },
                { emoji: '💥', name: 'My Hero Academia', image: 'demon8.jpg' }
            ],
            'oyunkarakterleri': [
                { emoji: '🧊', name: 'Sub-Zero', image: 'oyun_01.jpg' },
                { emoji: '🤠', name: 'Arthur Morgan', image: 'oyun_02.webp' },
                { emoji: '', name: 'Sonic', image: 'oyun_03.jpg' },
                { emoji: '🔫', name: 'Dante', image: 'oyun_04.webp' },
                { emoji: '🔫', name: 'Agent 47', image: 'oyun_05.jpg' },
                { emoji: '🥷', name: 'Scorpion', image: 'oyun_06.jpg' },
                { emoji: '👊', name: 'Ryu', image: 'oyun_07.jpg' },
                { emoji: '🪓', name: 'Kratos', image: 'oyun_08.jpg' },
                { emoji: '⚔️', name: 'Geralt', image: 'oyun_09.jpg' },
                { emoji: '🔫', name: 'Master Chief', image: 'oyun_10.jpg' },
                { emoji: '⚔️', name: 'Malenia', image: 'oyun_11.jpg' },
                { emoji: '🔫', name: 'CJ', image: 'oyun_12.jpg' },
                { emoji: '🍄', name: 'Mario', image: 'oyun_13.jpg' },
                { emoji: '🔫', name: 'Gordon Freeman', image: 'oyun_14.jpg' },
                { emoji: '⛏️', name: 'Steve', image: 'oyun_15.jpg' },
                { emoji: '🔫', name: 'Cybrpunk Panem', image: 'oyun_16 (9).jpg' },
                { emoji: '🔫', name: 'Niko Bellic', image: 'oyun_17.jpg' },
                { emoji: '', name: 'Aloy', image: 'oyun_18.jpg' },
                { emoji: '🗡️', name: 'Ezio', image: 'oyun_19.jpg' },
                { emoji: '🏹', name: 'Lara Croft', image: 'oyun_20.jpg' },
                { emoji: '🔫', name: 'Sam Fisher', image: 'oyun_21.jpg' },
                { emoji: '🏹', name: 'Ellie', image: 'oyun_22.jpg' },
                { emoji: '🔫', name: 'Solid Snake', image: 'oyun_23.jpg' },
                { emoji: '👊', name: 'Ken', image: 'oyun_24.jpg' }
            ],
            'dizi': [
                { name: 'kurtlar vadisi', image: 'dizi_01.jpg' },
                { name: 'yasak elma', image: 'dizi_01dizi_02.jpg' },
                { name: 'behzat c', image: 'dizi_03.jpg' },
                { name: 'leyla ile mecnun', image: 'dizi_04.jpg' },
                { name: ' arka sokaklat', image: 'dizi_05.jpg' },
                { name: ' ezhel', image: 'dizi_06.jpg' },
                { name: 'dexter', image: 'dizi_07.jpg' },
                { name: 'stranger things', image: 'dizi_08.jpg' },
                { name: 'the offıce ', image: 'dizi_09.jpg' },
                { name: 'taht oyunları ', image: 'dizi_10.jpg' },
                { name: ' preson break', image: 'dizi_11.jpg' },
                { name: 'super natural ', image: 'dizi_12.jpg' },
                { name: ' breakın bad', image: 'dizi_13.jpg' },
                { name: 'holmes', image: 'dizi_14.jpg' },
                { name: 'mr robot', image: 'dizi_15.jpg' },
                { name: 'viking', image: 'dizi_16.jpg' }
            ],
            'oyunlar': [
                { emoji: '🪓', name: 'God of War', image: 'oyunlar1.jpg' },
                { emoji: '⛏️', name: 'Minecraft', image: 'oyunlar2.jpg' },
                { emoji: '🔫', name: 'CS:GO', image: 'oyunlar3.jpg' },
                { emoji: '🧙', name: 'League of Legends', image: 'oyunlar4.jpg' },
                { emoji: '🏎️', name: 'Forza Horizon 5', image: 'oyunlar5.jpg' },
                { emoji: '🦾', name: 'Cyberpunk 2077', image: 'oyunlar6.jpg' },
                { emoji: '🔺', name: 'Apex Legends', image: 'oyunlar7.jpg' },
                { emoji: '🚌', name: 'Fortnite', image: 'oyunlar8.jpg' },
                { emoji: '⚔️', name: 'Chivalry 2', image: 'oyunlar9.jpg' },
                { emoji: '🎯', name: 'Valorant', image: 'oyunlar10.jpg' },
                { emoji: '🧱', name: 'Roblox', image: 'oyunlar11.jpg' },
                { emoji: '🪂', name: 'PUBG Mobile', image: 'oyunlar12.jpg' },
                { emoji: '🌊', name: 'BioShock', image: 'oyunlar13.jpg' },
                { emoji: '💍', name: 'Elden Ring', image: 'oyunlar14.jpg' },
                { emoji: '👹', name: 'Doom Eternal', image: 'oyunlar15.jpg' },
                { emoji: '☢️', name: 'S.T.A.L.K.E.R. 2', image: 'oyunlar16.jpg' },
                { emoji: '🐉', name: 'Baldur\'s Gate 3', image: 'oyunlar17.jpg' },
                { emoji: '🚗', name: 'Grand Theft Auto V', image: 'oyunlar18.jpg' },
                { emoji: '💥', name: 'Battlefield V', image: 'oyunlar19.jpg' },
                { emoji: '🧟', name: 'Resident Evil 2', image: 'oyunlar20.jpg' },
                { emoji: '👨‍🚀', name: 'Halo', image: 'oyunlar21.jpg' },
                { emoji: '🎖️', name: 'CoD: Modern Warfare III', image: 'oyunlar22.jpg' },
                { emoji: '🕴️', name: 'Mafia III', image: 'oyunlar23.jpg' },
                { emoji: '🏎️', name: 'Forza Horizon 6', image: 'oyunlar24.jpg' },
                { emoji: '🐴', name: 'Mount & Blade: Warband', image: 'oyunlar25.jpg' },
                { emoji: '📱', name: 'Mobile Legends', image: 'oyunlar26.jpg' }
            ],
            'dckarakterleri': [
                { emoji: '🦇', name: 'Batman', image: 'dc_01.png' },
                { emoji: '🦸‍♂️', name: 'Superman', image: 'dc_02.png' },
                { emoji: '🤵', name: 'Lex Luthor', image: 'dc_03.png' },
                { emoji: '🃏', name: 'Joker', image: 'dc_04.png' },
                { emoji: '🏹', name: 'Green Arrow', image: 'dc_05.png' },
                { emoji: '🦸‍♀️', name: 'Supergirl', image: 'dc_06.png' },
                { emoji: '🪨', name: 'Darkseid', image: 'dc_07.png' },
                { emoji: '🤵‍♂️', name: 'Alfred Pennyworth', image: 'dc_08.png' },
                { emoji: '🔱', name: 'Aquaman', image: 'dc_09.png' },
                { emoji: '⚡', name: 'Flash', image: 'dc_10.png' },
                { emoji: '🛡️', name: 'Wonder Woman', image: 'dc_11.png' },
                { emoji: '🗡️', name: 'Deathstroke', image: 'dc_12.png' },
                { emoji: '🐕', name: 'Krypto', image: 'dc_13.png' },
                { emoji: '🎭', name: 'Two-Face', image: 'dc_14.png' },
                { emoji: '🪲', name: 'Blue Beetle', image: 'dc_15.png' },
                { emoji: '🌩️', name: 'Black Adam', image: 'dc_16.png' },
                { emoji: '🎯', name: 'Deadshot', image: 'dc_17.jpg' },
                { emoji: '❄️', name: 'Mr. Freeze', image: 'dc_18.jpg' },
                { emoji: '🐱', name: 'Catwoman', image: 'dc_19.jpg' },
                { emoji: '🐧', name: 'Penguin', image: 'dc_20.jpg' },
                { emoji: '💚', name: 'Green Lantern', image: 'dc_21.jpg' },
                { emoji: '🦈', name: 'King Shark', image: 'dc_22.jpg' },
                { emoji: '🕊️', name: 'Peacemaker', image: 'dc_23.jpg' },
                { emoji: '🔨', name: 'Harley Quinn', image: 'dc_24.jpg' },
                { emoji: '⚛️', name: 'The Atom', image: 'dc_25.jpg' },
                { emoji: '💛', name: 'Sinestro', image: 'dc_26.jpg' }
            ]
        };
        if (fallbacks[k.id]) {
            ombmPools[k.id] = fallbacks[k.id];
        } else if (!ombmPools[k.id] || ombmPools[k.id].length === 0) {
            const emojis = ['🎯', '⭐', '🔥', '💎', '🎪', '🏆', '🎵', '🎭', '🌟', '💫', '🎨', '🎬', '🎮', '🏅', '🎲', '🎸', '🎹', '🎺', '🎻', '🎷', '🥁', '🪗', '🪘', '🎑', '🎙️', '💿', '📻', '🪕', '🪈', '🥀'];
            ombmPools[k.id] = emojis.map(function (e, i) { return { emoji: e, name: k.name + ' ' + (i + 1), image: '' }; });
        }
    });
}
setTimeout(buildOmbmPools, 100);

window.goToOmbmCategorySelect = function () {
    buildOmbmPools();
    const grid = document.getElementById('ombmCategoryGrid');
    grid.innerHTML = ombmKategoriler.map((k, idx) => {
        const neonClass = `category-card--${k.id}`;
        return `<div class="category-card ${neonClass}" data-fav-grid="ombm" data-fav-id="${k.id}" data-fav="${isFav('ombm', k.id) ? 1 : 0}" data-orig-order="${idx}" onclick="selectOmbmCategory('${k.id}')" id="ombmCat_${k.id}">
                    <div class="category-icon">${k.icon}</div>
                    <div class="category-title">${k.name}${favHeart('ombm', k.id)}</div>
                    <div class="category-subtitle">${k.max} görsel</div>
                </div>`;
    }).join('');
    resortFavGrid(grid);
    hideAllMainScreens();
    document.getElementById('ombmCategoryScreen').style.display = 'block';
    document.getElementById('ombmCategoryNextBtn').disabled = true;
    ombmSelectedCat = null;
    changeTheme('space');
};

window.selectOmbmCategory = function (catId) {
    document.querySelectorAll('#ombmCategoryGrid .category-card').forEach(c => c.classList.remove('selected'));
    const el = document.getElementById('ombmCat_' + catId);
    if (el) el.classList.add('selected');
    const cat = ombmKategoriler.find(k => k.id === catId);
    ombmSelectedCat = cat;
    ombmSelectedMax = cat.max;
    document.getElementById('ombmCategoryNextBtn').disabled = false;
    document.getElementById('ombmMaxLbl').textContent = ombmSelectedMax;
    document.getElementById('ombmMaxLbl2').textContent = ombmSelectedMax;
    const inp = document.getElementById('ombmCountInput');
    inp.max = ombmSelectedMax;
    inp.value = Math.min(8, ombmSelectedMax);
    changeTheme(catId);
};

window.goToOmbmCount = function () {
    if (!ombmSelectedCat) return;
    hideAllMainScreens();
    document.getElementById('ombmCountScreen').style.display = 'block';
};

window.replayOmbm = function () { goToOmbmCount(); };

window.goBackToOmbmCategory = function () {
    hideAllMainScreens();
    document.getElementById('ombmCategoryScreen').style.display = 'block';
};

window.goBackToModeFromOmbm = function () {
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};

window.goBackToProfileFromOmbm = function () {
    hideAllMainScreens();
    document.getElementById('profileScreen').style.display = 'block';
    changeTheme('space');
};

window.validateOmbmCount = function () {
    const inp = document.getElementById('ombmCountInput');
    const err = document.getElementById('ombmCountErr');
    const v = parseInt(inp.value);
    if (!v || v < 4) { err.textContent = 'En az 4 görsel seçmelisin!'; return false; }
    if (v > ombmSelectedMax) { err.textContent = 'Maksimum ' + ombmSelectedMax + ' görsel seçebilirsin!'; return false; }
    err.textContent = '';
    return true;
};

window.startOmbmTournament = function () {
    if (!validateOmbmCount()) return;
    if (!ombmSelectedCat) return;
    isInTest = true;
    stopBgMusic();

    const count = parseInt(document.getElementById('ombmCountInput').value);
    const pool = [...(ombmPools[ombmSelectedCat.id] || [])];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    ombmAllItems = pool.slice(0, count).map(item => ({ ...item, wins: 0, elimRound: 0 }));
    ombmTurNum = 1;
    ombmEliminatedAll = [];
    ombmNextRound = [];
    ombmCurrentRound = [...ombmAllItems];

    document.getElementById('ombmGameCatInfo').textContent = '⚔️ ' + ombmSelectedCat.name;

    hideAllMainScreens();
    document.getElementById('ombmGameScreen').style.display = 'block';
    setupOmbmTur();
};

function setupOmbmTur() {
    ombmMatchQueue = [];
    let items = [...ombmCurrentRound];
    while (items.length >= 2) {
        ombmMatchQueue.push([items.shift(), items.shift()]);
    }
    if (items.length === 1) {
        ombmNextRound.push(items[0]); // bye
    }

    ombmTotalMatchesInTur = ombmMatchQueue.length;
    ombmMatchInTur = 0;

    if (ombmTotalMatchesInTur === 0) {
        ombmCurrentRound = [...ombmNextRound];
        ombmNextRound = [];
        ombmTurNum++;
        setupOmbmTur();
        return;
    }

    updateOmbmTurUI();
    showOmbmMatch();
}

function getOmbmTurLabel() {
    const remaining = ombmCurrentRound.length + ombmNextRound.length;
    if (remaining <= 2) return '🏆 FİNAL';
    if (remaining <= 4) return '🔥 YARI FİNAL';
    if (remaining <= 8) return '⚡ ÇEYREK FİNAL';
    return 'TUR ' + ombmTurNum;
}

function updateOmbmTurUI() {
    document.getElementById('ombmTurLabel').textContent = getOmbmTurLabel();
    document.getElementById('ombmTurSub').textContent = ombmTotalMatchesInTur + ' eşleşme • ' + ombmCurrentRound.length + ' görsel';
    document.getElementById('ombmProgressFill').style.width = '0%';
    document.getElementById('ombmProgressLabel').textContent = 'Tur İlerleme: 0 eşleşme • ' + ombmCurrentRound.length + ' görsel';
    document.getElementById('ombmGameMatchInfo').textContent = 'Eşleşme 0 / ' + ombmTotalMatchesInTur;
}

function showOmbmMatch() {
    if (ombmMatchInTur >= ombmTotalMatchesInTur) {
        ombmCurrentRound = [...ombmNextRound];
        ombmNextRound = [];
        ombmTurNum++;

        if (ombmCurrentRound.length < 2) {
            finishOmbmTournament();
            return;
        }

        setupOmbmTur();
        return;
    }

    ombmCurrentMatch = ombmMatchQueue[ombmMatchInTur];
    ombmMatchInTur++;

    var left = ombmCurrentMatch[0];
    var right = ombmCurrentMatch[1];

    var imgL = document.getElementById('ombmImgLeft');
    var imgR = document.getElementById('ombmImgRight');

    if (left.image) {
        imgL.innerHTML = '<img src="' + left.image + '" alt="' + left.name + '">';
    } else {
        imgL.innerHTML = left.emoji;
    }
    document.getElementById('ombmNameLeft').textContent = left.name;

    if (right.image) {
        imgR.innerHTML = '<img src="' + right.image + '" alt="' + right.name + '">';
    } else {
        imgR.innerHTML = right.emoji;
    }
    document.getElementById('ombmNameRight').textContent = right.name;

    document.getElementById('ombmCardLeft').className = 'ombm-card';
    document.getElementById('ombmCardRight').className = 'ombm-card';
    document.getElementById('ombmCardLeft').style.pointerEvents = 'auto';
    document.getElementById('ombmCardRight').style.pointerEvents = 'auto';

    var turPct = (ombmMatchInTur / ombmTotalMatchesInTur) * 100;
    document.getElementById('ombmProgressFill').style.width = turPct + '%';
    document.getElementById('ombmProgressLabel').textContent = 'Tur İlerleme: ' + ombmMatchInTur + ' eşleşme • ' + ombmCurrentRound.length + ' görsel';
    document.getElementById('ombmGameMatchInfo').textContent = 'Eşleşme ' + ombmMatchInTur + ' / ' + ombmTotalMatchesInTur;
}

window.pickOmbmWinner = function (side) {
    var wIdx = side === 'left' ? 0 : 1;
    var lIdx = side === 'left' ? 1 : 0;
    var winner = ombmCurrentMatch[wIdx];
    var loser = ombmCurrentMatch[lIdx];

    winner.wins++;
    loser.elimRound = ombmTurNum;

    document.getElementById(side === 'left' ? 'ombmCardLeft' : 'ombmCardRight').classList.add('ombm-winner');
    document.getElementById(side === 'left' ? 'ombmCardRight' : 'ombmCardLeft').classList.add('ombm-loser');

    document.getElementById('ombmCardLeft').style.pointerEvents = 'none';
    document.getElementById('ombmCardRight').style.pointerEvents = 'none';

    ombmNextRound.push(winner);
    ombmEliminatedAll.push(loser);

    if (soundEnabled) playCorrectSound();

    setTimeout(function () { showOmbmMatch(); }, 600);
};

window.exitOmbmToCategories = function () {
    exitTarget = 'ombm';
    document.querySelector('.exit-confirm-box h3').textContent = '🚪 Oyundan Çık';
    document.querySelector('.exit-confirm-box p').textContent = 'Oyundan çıkmak istediğinize emin misiniz? İlerlemeniz kaybolacak.';
    document.getElementById('exitConfirmModal').style.display = 'flex';
};

function finishOmbmTournament() {
    isInTest = false;
    if (soundEnabled) startBgMusic();

    var champion = null;
    if (ombmCurrentRound.length === 1) champion = ombmCurrentRound[0];
    else if (ombmNextRound.length === 1) champion = ombmNextRound[0];
    else champion = ombmAllItems.reduce(function (a, b) { return a.wins > b.wins ? a : b; });

    var ranking = [champion];
    var elimReversed = ombmEliminatedAll.slice().reverse();
    for (var i = 0; i < elimReversed.length; i++) {
        if (elimReversed[i] !== champion) ranking.push(elimReversed[i]);
    }

    document.getElementById('ombmResultSub').textContent = ombmAllItems.length + ' görsel arasından şampiyonunu seçtin!';
    document.getElementById('ombmChampion').innerHTML =
        '<span class="ombm-champ-emoji">' + champion.emoji + '</span>' +
        '<div class="ombm-champ-name">' + champion.name + '</div>' +
        '<div class="ombm-champ-label">👑 ŞAMPİYON</div>';

    var list = document.getElementById('ombmResultList');
    list.innerHTML = '';

    ranking.forEach(function (item, idx) {
        var row = document.createElement('div');
        row.style.animationDelay = (idx * 0.07) + 's';

        var rankClass = 'ombm-rank-other';
        var medal = '';
        var rankText = (idx + 1) + '. Sıra';

        if (idx === 0) { rankClass = 'ombm-rank-1'; medal = '🥇'; rankText = 'ŞAMPİYON'; }
        else if (idx === 1) { rankClass = 'ombm-rank-2'; medal = '🥈'; rankText = '2. Sıra'; }
        else if (idx === 2) { rankClass = 'ombm-rank-3'; medal = '🥉'; rankText = '3. Sıra'; }

        row.className = 'ombm-result-row ' + rankClass;
        var emojiHtml = item.image ? '<img src="' + item.image + '" style="width:40px;height:40px;border-radius:10px;object-fit:cover;">' : item.emoji;
        row.innerHTML =
            '<div class="ombm-result-number">' + (idx + 1) + '.</div>' +
            '<div class="ombm-result-medal">' + medal + '</div>' +
            '<div class="ombm-result-emoji">' + emojiHtml + '</div>' +
            '<div class="ombm-result-info"><div class="ombm-result-name">' + item.name + '</div>' +
            '<div class="ombm-result-rank-text">' + rankText + '</div></div>';
        list.appendChild(row);
    });

    hideAllMainScreens();
    document.getElementById('ombmResultScreen').style.display = 'block';
    changeTheme(ombmSelectedCat ? ombmSelectedCat.id : 'space');
}

// sıralama oyunu
let siralamaSelectedCat = null;
let siralamaSelectedMax = 0;
let siralamaAllItems = [];
let siralamaRankDefaults = ['Çok İyi', 'İyi', 'Kötü', 'Çok Kötü'];

const siralamaKategoriler = [
    { id: 'lol', icon: '🎮', name: 'LoL Kostüm', kind: 'image', folder: 'siralama/lol' },
    { id: 'mobilelegends', icon: '⚔️', name: 'Mobile Legends Kostüm', kind: 'image', folder: 'siralama/mobilelegends' },
    { id: 'marvel', icon: '🦸', name: 'Marvel', kind: 'image', folder: 'siralama/marvel' },
    { id: 'dc', icon: '🦇', name: 'DC', maxPool: 'photo-dc' },
    { id: 'oyunkarakteri', icon: '🕹️', name: 'Oyun Karakteri', maxPool: 'photo-oyunkarakterleri' },
    { id: 'erkekanime', icon: '⚔️', name: 'Erkek Anime', maxPool: 'photo-erkekanime' },
    { id: 'kizanime', icon: '🌸', name: 'Kız Anime', maxPool: 'photo-kizanime' },
    { id: 'icecek', icon: '🥤', name: 'İçecekler', kind: 'image', folder: 'siralama/icecek' },
    { id: 'cips', icon: '🍟', name: 'Cipsler', kind: 'image', folder: 'siralama/cips' },
    { id: 'biskuvi', icon: '🍪', name: 'Bisküviler', kind: 'image', folder: 'siralama/biskuvi' },
    { id: 'hayvan', icon: '🦁', name: 'Hayvan', kind: 'emoji', items: 'hayvan' },
    { id: 'erkejoyuncu', icon: '🕴️', name: 'Erkek Oyuncu', maxPool: 'photo-unluler' },
    { id: 'kizoyuncu', icon: '💃', name: 'Kız Oyuncu', maxPool: 'photo-kadinlar' },
    { id: 'sarkici', icon: '🎤', name: 'Şarkıcı', kind: 'image', folder: 'siralama/sarkici' },
    { id: 'futbolcu', icon: '⚽', name: 'Futbolcu', maxPool: 'photo-futbol' }
];

const siralamaImageData = {
    dc: [
        { emoji: '🦇', name: 'Batman', image: 'dc_01.png' },
        { emoji: '🦸‍♂️', name: 'Superman', image: 'dc_02.png' },
        { emoji: '🤵', name: 'Lex Luthor', image: 'dc_03.png' },
        { emoji: '🃏', name: 'Joker', image: 'dc_04.png' },
        { emoji: '🏹', name: 'Green Arrow', image: 'dc_05.png' },
        { emoji: '🦸‍♀️', name: 'Supergirl', image: 'dc_06.png' },
        { emoji: '🪨', name: 'Darkseid', image: 'dc_07.png' },
        { emoji: '🤵‍♂️', name: 'Alfred Pennyworth', image: 'dc_08.png' },
        { emoji: '🔱', name: 'Aquaman', image: 'dc_09.png' },
        { emoji: '⚡', name: 'Flash', image: 'dc_10.png' },
        { emoji: '🛡️', name: 'Wonder Woman', image: 'dc_11.png' },
        { emoji: '🗡️', name: 'Deathstroke', image: 'dc_12.png' },
        { emoji: '🐕', name: 'Krypto', image: 'dc_13.png' },
        { emoji: '🎭', name: 'Two-Face', image: 'dc_14.png' },
        { emoji: '🪲', name: 'Blue Beetle', image: 'dc_15.png' },
        { emoji: '🌩️', name: 'Black Adam', image: 'dc_16.png' },
        { emoji: '🎯', name: 'Deadshot', image: 'dc_17.jpg' },
        { emoji: '❄️', name: 'Mr. Freeze', image: 'dc_18.jpg' },
        { emoji: '🐱', name: 'Catwoman', image: 'dc_19.jpg' },
        { emoji: '🐧', name: 'Penguin', image: 'dc_20.jpg' },
        { emoji: '💚', name: 'Green Lantern', image: 'dc_21.jpg' },
        { emoji: '🦈', name: 'King Shark', image: 'dc_22.jpg' },
        { emoji: '🕊️', name: 'Peacemaker', image: 'dc_23.jpg' },
        { emoji: '🔨', name: 'Harley Quinn', image: 'dc_24.jpg' },
        { emoji: '⚛️', name: 'The Atom', image: 'dc_25.jpg' },
        { emoji: '💛', name: 'Sinestro', image: 'dc_26.jpg' }
    ],
    oyunkarakteri: [
        { emoji: '🧊', name: 'Sub-Zero', image: 'oyun_01.jpg' },
        { emoji: '🤠', name: 'Arthur Morgan', image: 'oyun_02.webp' },
        { emoji: '', name: 'Sonic', image: 'oyun_03.jpg' },
        { emoji: '🔫', name: 'Dante', image: 'oyun_04.webp' },
        { emoji: '🔫', name: 'Agent 47', image: 'oyun_05.jpg' },
        { emoji: '🥷', name: 'Scorpion', image: 'oyun_06.jpg' },
        { emoji: '👊', name: 'Ryu', image: 'oyun_07.jpg' },
        { emoji: '🪓', name: 'Kratos', image: 'oyun_08.jpg' },
        { emoji: '⚔️', name: 'Geralt', image: 'oyun_09.jpg' },
        { emoji: '🔫', name: 'Master Chief', image: 'oyun_10.jpg' },
        { emoji: '⚔️', name: 'Malenia', image: 'oyun_11.jpg' },
        { emoji: '🔫', name: 'CJ', image: 'oyun_12.jpg' },
        { emoji: '🍄', name: 'Mario', image: 'oyun_13.jpg' },
        { emoji: '🔫', name: 'Gordon Freeman', image: 'oyun_14.jpg' },
        { emoji: '⛏️', name: 'Steve', image: 'oyun_15.jpg' },
        { emoji: '🔫', name: 'Cybrpunk Panem', image: 'oyun_16 (9).jpg' },
        { emoji: '🔫', name: 'Niko Bellic', image: 'oyun_17.jpg' },
        { emoji: '', name: 'Aloy', image: 'oyun_18.jpg' },
        { emoji: '🗡️', name: 'Ezio', image: 'oyun_19.jpg' },
        { emoji: '🏹', name: 'Lara Croft', image: 'oyun_20.jpg' },
        { emoji: '🔫', name: 'Sam Fisher', image: 'oyun_21.jpg' },
        { emoji: '🏹', name: 'Ellie', image: 'oyun_22.jpg' },
        { emoji: '🔫', name: 'Solid Snake', image: 'oyun_23.jpg' },
        { name: 'Ken', image: 'oyun_24.jpg' },
        { name: 'king kong', image: 'oyun_25.jpg' },
        { name: 'noob saibot', image: 'oyun_26.jpg' },
        { name: 'nate drake', image: 'oyun_27.jpg' },
        { name: 'atreus', image: 'oyun_28.jpg' },
        { name: 'rayman', image: 'oyun_29.jpg' },
        { name: 'max payne', image: 'oyun_30.jpg' }
    ],
    erkekanime: [
        { emoji: '⚔️', name: 'Naruto Uzumaki', image: 'anime_01.png' },
        { emoji: '⚔️', name: 'Monkey D. Luffy', image: 'anime_02.jpg' },
        { emoji: '⚔️', name: 'Son Goku', image: 'anime_03.png' },
        { emoji: '⚔️', name: 'Eren Yeager', image: 'anime_04.jpg' },
        { emoji: '⚔️', name: 'Light Yagami', image: 'anime_05.jpg' },
        { emoji: '⚔️', name: 'Satoru Gojo', image: 'anime_06.png' },
        { emoji: '⚔️', name: 'Gon Freecss', image: 'anime_07.png' },
        { emoji: '⚔️', name: 'Kakashi Hatake', image: 'anime_08.jpg' },
        { emoji: '⚔️', name: 'Jotaro Kujo', image: 'anime_09.jpg' },
        { emoji: '⚔️', name: 'Roronoa Zoro', image: 'anime_10.jpg' },
        { emoji: '⚔️', name: 'Tanjiro Kamado', image: 'anime_11.jpg' },
        { emoji: '⚔️', name: 'Vegito', image: 'anime_12.png' },
        { emoji: '⚔️', name: 'Son Goku', image: 'anime_13.jpg' },
        { emoji: '⚔️', name: 'Izuku Midoriya', image: 'anime_14.jpg' },
        { emoji: '⚔️', name: 'Ken Kaneki', image: 'anime_15.jpg' },
        { emoji: '⚔️', name: 'Devasa Titan', image: 'anime_16.jpg' },
        { emoji: '⚔️', name: 'Lord Beerus', image: 'anime_17.jpg' },
        { emoji: '⚔️', name: 'Alucard', image: 'anime_18.png' },
        { emoji: '⚔️', name: 'Marshall D. Teach', image: 'anime_19.jpg' },
        { emoji: '⚔️', name: 'Denji', image: 'anime_20.jpg' },
        { emoji: '⚔️', name: 'Yujiro Hanma', image: 'anime_21.png' },
        { emoji: '⚔️', name: 'Sung Jin-woo', image: 'anime_22.png' },
        { emoji: '⚔️', name: 'Saitama', image: 'anime_23.png' },
        { emoji: '⚔️', name: 'Mikasa Ackerman', image: 'anime_24.png' },
        { emoji: '⚔️', name: 'Madara Uchiha', image: 'anime_25.png' },
        { emoji: '⚔️', name: 'Sasuke Uchiha', image: 'anime_26.png' },
        { emoji: '⚔️', name: 'Shanks', image: 'anime_27.jpg' },
        { emoji: '⚔️', name: 'Yoruichi Shihouin', image: 'anime_28.jpg' },
        { emoji: '⚔️', name: 'Zeke Jaeger', image: 'anime_29.jpg' },
        { emoji: '⚔️', name: 'Dracule Mihawk', image: 'anime_30.jpg' },
        { emoji: '⚔️', name: 'Baki Hanma', image: 'anime_31.jpg' },
        { emoji: '⚔️', name: 'Nami', image: 'anime_32.jpg' },
        { emoji: '⚔️', name: 'Itachi Uchiha', image: 'anime_33.webp' },
        { emoji: '⚔️', name: 'Dante', image: 'anime_34.jpg' },
        { emoji: '⚔️', name: 'Sosuke Aizen', image: 'anime_35.jpg' },
        { emoji: '⚔️', name: 'Tsubasa Ozora', image: 'anime_36.webp' },
        { emoji: '⚔️', name: 'don kuso', image: 'anime_37.webp' },
        { emoji: '⚔️', name: 'kojiro huyuga', image: 'anime_38.webp' },
        { emoji: '⚔️', name: 'ginka hanega', image: 'anime_39.webp' },
        { emoji: '⚔️', name: 'wakabyashi', image: 'anime_40.jpg' }
    ],
    kizanime: [
        { emoji: '🗡️', name: 'Erza Scarlet', image: 'kız_01.jpg' },
        { emoji: '🔫', name: 'Revy', image: 'kız_02.webp' },
        { emoji: '🏖️', name: 'Asuna Yuuki', image: 'kız_03.jpg' },
        { emoji: '🌼', name: 'Makio', image: 'kız_04.webp' },
        { emoji: '❄️', name: 'Mizore Shirayuki', image: 'kız_05.jpg' },
        { emoji: '🎯', name: 'Yoko Littner', image: 'kız_06.webp' },
        { emoji: '🔑', name: 'Lucy Heartfilia', image: 'kız_07.jpg' },
        { emoji: '🐱', name: 'Blair', image: 'kız_08.webp' },
        { emoji: '🏍️', name: 'Celty Sturluson', image: 'kız_09.jpg' },
        { emoji: '🐌', name: 'Tsunade Senju', image: 'kız_10.jpg' },
        { emoji: '☂️', name: 'Kagura', image: 'kız_11.jpg' },
        { emoji: '🐇', name: 'Mirko', image: 'kız_12.jpg' },
        { emoji: '🌺', name: 'Marin Kitagawa', image: 'kız_13.jpg' },
        { emoji: '🎖️', name: 'Tanya Degurechaff', image: 'kız_14.jpg' },
        { emoji: '👿', name: 'Rias Gremory', image: 'kız_15.jpg' },
        { emoji: '🌙', name: 'Sailor Moon', image: 'kız_16.png' },
        { emoji: '⚔️', name: 'Mikasa Ackerman', image: 'kız_17.jpg' },
        { emoji: '⚡', name: 'Yoruichi Shihouin', image: 'kız_18.jpg' },
        { emoji: '🍊', name: 'Nami', image: 'kız_19.jpg' },
        { emoji: '🔧', name: 'Winry Rockbell', image: 'kız_20.jpg' },
        { emoji: '❤️', name: 'Kaguya Shinomiya', image: 'kız_21.jpg' },
        { emoji: '🎋', name: 'Nezuko Kamado', image: 'kız_22.jpg' },
        { emoji: '🥜', name: 'Anya Forger', image: 'kız_23.webp' },
        { emoji: '💙', name: 'Rem', image: 'kız_24.jpg' },
        { emoji: '🗡️', name: 'Rukia Kuchiki', image: 'kız_25.jpg' },
        { emoji: '🌸', name: 'Sakura Haruno', image: 'kız_26.jpg' },
        { emoji: '🩸', name: 'Power', image: 'kız_27.webp' },
        { emoji: '🗡️', name: 'Yor Forger', image: 'kız_28.webp' },
        { emoji: '💜', name: 'Hinata Hyuga', image: 'kız_29.webp' },
        { emoji: '🐶', name: 'Makima', image: 'kız_30.webp' },
        { emoji: '📚', name: 'Nico Robin', image: 'kız_31.webp' },
        { emoji: '❄️', name: 'Emilia', image: 'kız_32.jpg' },
        { emoji: '❤️', name: 'Zero Two', image: 'kız_33.jpg' },
        { emoji: '🟢', name: 'C.C.', image: 'kız_34.jpg' },
        { emoji: '🐍', name: 'Boa Hancock', image: 'kız_35.jpg' },
        { emoji: '👑', name: 'Satsuki Kiryuin', image: 'kız_36.jpg' },
        { emoji: '👑', name: 'android 18', image: 'kızanime_37.jpg' },
        { emoji: '👑', name: 'esdaet', image: 'kızanime_38.jpg' },
        { emoji: '👑', name: 'fubuki', image: 'kızanime_39.jpg' },
        { emoji: '👑', name: 'matsimuto ranguki', image: 'kızanime_40.jpg' }
    ],
    erkejoyuncu: [
        { emoji: '🕴️', name: 'Christian Bale', image: 'erkek_01.jpg' },
        { emoji: '🕴️', name: 'Leonardo DiCaprio', image: 'erkek_02.jpg' },
        { emoji: '🕴️', name: 'Brad Pitt', image: 'erkek_03.jpg' },
        { emoji: '🕴️', name: 'Will Smith', image: 'erkek_04.jpg' },
        { emoji: '🕴️', name: 'Nicolas Cage', image: 'erkek_05.jpg' },
        { emoji: '🕴️', name: 'Jason Statham', image: 'erkek_06.jpg' },
        { emoji: '🕴️', name: 'Robert Downey Jr.', image: 'erkek_07.jpg' },
        { emoji: '🕴️', name: 'Hugh Jackman', image: 'erkek_08.jpg' },
        { emoji: '🕴️', name: 'Vin Diesel', image: 'erkek_09.jpg' },
        { emoji: '🕴️', name: 'Kenan İmirzalıoğlu', image: 'erkek_10.jpg' },
        { emoji: '🕴️', name: 'Burak Özçivit', image: 'erkek_11.jpg' },
        { emoji: '🕴️', name: 'Aras Bulut İynemli', image: 'erkek_12.jpg' },
        { emoji: '🕴️', name: 'Kerem Bürsin', image: 'erkek_13.jpg' },
        { emoji: '🕴️', name: 'Çağatay Ulusoy', image: 'erkek_14.jpg' },
        { emoji: '🕴️', name: 'Kıvanç Tatlıtuğ', image: 'erkek_15.jpg' },
        { emoji: '🕴️', name: 'Barış Arduç', image: 'erkek_16.jpg' },
        { emoji: '🕴️', name: 'İlker Kaleli', image: 'erkek_17.jpg' },
        { emoji: '🕴️', name: 'Alperen Duymaz', image: 'erkek_18.jpg' },
        { emoji: '🕴️', name: 'Engin Öztürk', image: 'erkek_19.jpg' },
        { emoji: '🕴️', name: 'Johnny Depp', image: 'erkek_20.jpg' },
        { emoji: '🕴️', name: 'Michele Morrone', image: 'erkek_21.jpg' },
        { emoji: '🕴️', name: 'Necati Şaşmaz', image: 'erkek_22.jpg' },
        { emoji: '🕴️', name: 'Tom Hardy', image: 'erkek_23.jpg' },
        { emoji: '🕴️', name: 'Tom Holland', image: 'erkek_24.jpg' },
        { emoji: '🕴️', name: 'Robert Pattinson', image: 'erkek_25.jpg' },
        { emoji: '🕴️', name: 'Engin Altan Düzyatan', image: 'erkek_26.jpg' },
        { emoji: '🕴️', name: 'pedro pascal', image: 'erkek_27.jpg' },
        { emoji: '🕴️', name: 'michel b jordon', image: 'erkek_28.jpg' },
        { emoji: '🕴️', name: 'ahmet kural', image: 'erkek_29.jpg' },
        { emoji: '🕴️', name: 'halit erginç', image: 'erkek_30.jpg' }
    ],
    kizoyuncu: [
        { emoji: '💃', name: 'Demet Özdemir', image: 'kızoyuncu_01.jpg' },
        { emoji: '💃', name: 'Emma Stone', image: 'kızoyuncu_02.webp' },
        { emoji: '💃', name: 'Serenay Sarıkaya', image: 'kızoyuncu_03.jpg' },
        { emoji: '💃', name: 'Bensu Soral', image: 'kızoyuncu_04.webp' },
        { emoji: '💃', name: 'Barbara Palvin', image: 'kızoyuncu_05.jpg' },
        { emoji: '💃', name: 'Millie Bobby Brown', image: 'kızoyuncu_06.webp' },
        { emoji: '💃', name: 'Devrim Özkan', image: 'kızoyuncu_07.jpg' },
        { emoji: '💃', name: 'Natalie Portman', image: 'kızoyuncu_08.webp' },
        { emoji: '💃', name: 'Elçin Sangu', image: 'kızoyuncu_09.jpg' },
        { emoji: '💃', name: 'Scarlett Johansson', image: 'kızoyuncu_10.webp' },
        { emoji: '💃', name: 'Melis Sezen', image: 'kızoyuncu_11.jpg' },
        { emoji: '💃', name: 'Mine Tugay', image: 'kızoyuncu_12.webp' },
        { emoji: '💃', name: 'Angelina Jolie', image: 'kızoyuncu_13.jpg' },
        { emoji: '💃', name: 'Anya Taylor-Joy', image: 'kızoyuncu_14.jpg' },
        { emoji: '💃', name: 'Sydney Sweeney', image: 'kızoyuncu_15.jpg' },
        { emoji: '💃', name: 'Hazar Ergüçlü', image: 'kızoyuncu_16.jpg' },
        { emoji: '💃', name: 'Jenna Ortega', image: 'kızoyuncu_17.jpg' },
        { emoji: '💃', name: 'Megan Fox', image: 'kızoyuncu_18.jpg' },
        { emoji: '💃', name: 'Nilperi Şahinkaya', image: 'kızoyuncu_19.jpg' },
        { emoji: '💃', name: 'Hande Erçel', image: 'kızoyuncu_20.jpg' },
        { emoji: '💃', name: 'Hazal Kaya', image: 'kızoyuncu_21.jpg' },
        { emoji: '💃', name: 'Nilsu Berfin Aktaş', image: 'kızoyuncu_22.jpg' },
        { emoji: '💃', name: 'Penélope Cruz', image: 'kızoyuncu_23.avif' },
        { emoji: '💃', name: 'Gal Gadot', image: 'kızoyuncu_24.jpg' },
        { emoji: '💃', name: 'Meryem Uzerli', image: 'kızoyuncu_25.jpg' },
        { emoji: '💃', name: 'Hande Erçel', image: 'kızoyuncu_26.jpg' },
        { emoji: '💃', name: 'ezgi mola', image: 'kızoyuncu_27.jpg' },
        { emoji: '💃', name: 'pınar deniz', image: 'kızoyuncu_28.jpg' },
        { emoji: '💃', name: 'farah zeynep abdulah', image: 'kızoyuncu_29.jpg' },
        { emoji: '💃', name: 'öykü karayel', image: 'kızoyuncu_30.jpg' }
    ],
    futbolcu: [
        { emoji: '⚽', name: 'Barış Alper', image: 'futbolcu_01.jpeg' },
        { emoji: '⚽', name: 'Kylian Mbappé', image: 'futbolcu_02.jpg' },
        { emoji: '⚽', name: 'Kevin De Bruyne', image: 'futbolcu_03.png' },
        { emoji: '⚽', name: 'Icardi', image: 'futbolcu_04.webp' },
        { emoji: '⚽', name: 'Vinicius Jr.', image: 'futbolcu_05.jpg' },
        { emoji: '⚽', name: 'Lionel Messi', image: 'futbolcu_06.webp' },
        { emoji: '⚽', name: 'Kenan Yıldız', image: 'futbolcu_07.jpg' },
        { emoji: '⚽', name: 'Cristiano Ronaldo', image: 'futbolcu_08.jpg' },
        { emoji: '⚽', name: 'Ronaldinho', image: 'futbolcu_09.webp' },
        { emoji: '⚽', name: 'Luís Nazário', image: 'futbolcu_10.jpg' },
        { emoji: '⚽', name: 'Fernando Muslera', image: 'futbolcu_11.webp' },
        { emoji: '⚽', name: 'Victor Osimhen', image: 'futbolcu_12.jpg' },
        { emoji: '⚽', name: 'Quarejma', image: 'futbolcu_13.jpg' },
        { emoji: '⚽', name: 'Martin Ødegaard', image: 'futbolcu_14.jpg' },
        { emoji: '⚽', name: 'Erling Haaland', image: 'futbolcu_15.jpg' },
        { emoji: '⚽', name: 'Jude Bellingham', image: 'futbolcu_16.jpg' },
        { emoji: '⚽', name: 'Lamine Yamal', image: 'futbolcu_17.jpg' },
        { emoji: '⚽', name: 'Arda Turan', image: 'futbolcu_18.jpg' },
        { emoji: '⚽', name: 'Neymar', image: 'futbolcu_19.jpg' },
        { emoji: '⚽', name: 'Arda Güler', image: 'futbolcu_20.jpg' },
        { emoji: '⚽', name: 'İlkay Gündoğan', image: 'futbolcu_21.jpg' },
        { emoji: '⚽', name: 'Diego Maradona', image: 'futbolcu_22.jpg' },
        { emoji: '⚽', name: 'Gianluigi Buffon', image: 'futbolcu_23.jpg' },
        { emoji: '⚽', name: 'Luis Suárez', image: 'futbolcu_24.jpg' },
        { emoji: '⚽', name: 'Pelé', image: 'futbolcu_25.jpg' },
        { emoji: '⚽', name: 'Muhammed Salah', image: 'futbolcu_26.jpg' },
        { emoji: '⚽', name: 'ferenc puskas', image: 'futbolcu_27.jpg' },
        { emoji: '⚽', name: 'gerd müller', image: 'futbolcu_28.jpg' },
        { emoji: '⚽', name: 'poala maldini', image: 'futbolcu_29.jpg' },
        { emoji: '⚽', name: 'eren elmalı', image: 'futbolcu_30.jpg' }
    ],
    marvel: [
        { emoji: '🛡️', name: 'Captain America', image: 'marvel_01.png' },
        { emoji: '🤖', name: 'Iron Man', image: 'marvel_02.png' },
        { emoji: '🕷️', name: 'Spider-Man', image: 'marvel_03.png' },
        { emoji: '💪', name: 'Hulk', image: 'marvel_04.png' },
        { emoji: '⚡', name: 'Thor', image: 'marvel_05.png' },
        { emoji: '🕷️', name: 'Black Widow', image: 'marvel_06.png' },
        { emoji: '🪄', name: 'Doctor Strange', image: 'marvel_07.png' },
        { emoji: '🐆', name: 'Black Panther', image: 'marvel_08.png' },
        { emoji: '😈', name: 'Loki', image: 'marvel_09.png' },
        { emoji: '🫰', name: 'Thanos', image: 'marvel_10.png' },
        { emoji: '🦝', name: 'Rocket', image: 'marvel_11.png' },
        { emoji: '⭐', name: 'Star-Lord', image: 'marvel_12.png' },
        { emoji: '💚', name: 'Gamora', image: 'marvel_13.png' },
        { emoji: '🌳', name: 'Groot', image: 'marvel_14.png' },
        { emoji: '🖤', name: 'Venom', image: 'marvel_15.png' },
        { emoji: '🟢', name: 'Doctor Doom', image: 'marvel_16.png' },
        { emoji: '⚔️', name: 'Wolverine', image: 'marvel_17.png' },
        { emoji: '🔴', name: 'Deadpool', image: 'marvel_18.png' },
        { emoji: '🐜', name: 'Ant-Man', image: 'marvel_19.png' },
        { emoji: '🐝', name: 'Wasp', image: 'marvel_20.png' },
        { emoji: '🦂', name: 'Scorpion', image: 'marvel_21.png' },
        { emoji: '🦏', name: 'Rhino', image: 'marvel_22.png' },
        { emoji: '🔴', name: 'Scarlet Witch', image: 'marvel_23.png' },
        { emoji: '🏹', name: 'Hawkeye', image: 'marvel_24.png' },
        { emoji: '💎', name: 'Vision', image: 'marvel_25.png' },
        { emoji: '❄️', name: 'Winter Soldier', image: 'marvel_26.png' },
        { emoji: '🟡', name: 'Juggernaut', image: 'marvel_27.png' },
        { emoji: '🔴', name: 'Red Hulk', image: 'marvel_28.png' },
        { emoji: '🌙', name: 'Moon Knight', image: 'marvel_29.png' },
        { emoji: '🔴', name: 'Daredevil', image: 'marvel_30.png' },
        { emoji: '🔥', name: 'Phoenix', image: 'marvel_31.webp' },
        { emoji: '🧲', name: 'Magneto', image: 'marvel_32.webp' },
        { emoji: '🧠', name: 'Professor X', image: 'marvel_33.webp' },
        { emoji: '🌪️', name: 'Storm', image: 'marvel_34.avif' },
        { emoji: '🐾', name: 'Beast', image: 'marvel_35.webp' },
        { emoji: '🦸', name: 'Mystique', image: 'marvel_36.jpg' },
        { emoji: '💪', name: 'Nik Fury', image: 'marvel_37.jpg' },
        { emoji: '⛓️', name: 'Ghost Rider', image: 'marvel_38.jpg' },
        { emoji: '🌟', name: 'Sentry', image: 'marvel_39.jpg' },
        { emoji: '🔵', name: 'Jessica Jones', image: 'marvel_40.png' }
    ],
    lol: [
        { name: 'Riven', image: 'lol_1.avif' },
        { name: 'Cassiopeia', image: 'lol_2.jpg' },
        { name: 'Kayle', image: 'lol_3.avif' },
        { name: 'nunu ve wulump', image: 'lol_4.jpg' },
        { name: 'Kayle', image: 'lol_5.avif' },
        { name: 'Lux', image: 'lol_6.jpg' },
        { name: 'Jax', image: 'lol_7.avif' },
        { name: 'Gwen', image: 'lol_8.jpg' },
        { name: 'Ahri', image: 'lol_9.jpg' },
        { name: 'Kayle', image: 'lol_10.avif' },
        { name: 'jhin', image: 'lol_11.jpg' },
        { name: 'singed', image: 'lol_12.avif' },
        { name: 'dr mundo', image: 'lol_13.jpg' },
        { name: 'viego', image: 'lol_14.jpg' },
        { name: 'Irelia', image: 'lol_15.avif' },
        { name: 'jnix', image: 'lol_16.jpg' },
        { name: 'Shen', image: 'lol_17.jpg' },
        { name: 'Kindred', image: 'lol_18.jpg' },
        { name: 'warwick', image: 'lol_19.jpg' },
        { name: 'jax', image: 'lol_20.jpg' },
        { name: 'swain', image: 'lol_21.jpg' },
        { name: 'Kayle', image: 'lol_22.jpg' },
        { name: 'Kayle', image: 'lol_23.jpg' },
        { name: 'set', image: 'lol_24.jpg' },
        { name: 'samira', image: 'lol_25.jpg' },
        { name: 'jhin', image: 'lol_26.jpg' },
        { name: 'ekko', image: 'lol_27.jpg' },
        { name: 'yasuo', image: 'lol_28.jpg' },
        { name: 'malphite', image: 'lol_29.jpg' },
        { name: 'nunu ve wulump', image: 'lol_30.jpg' }
    ],
    mobilelegends: [
        { name: 'roger', image: 'mobil_1.jpg' },
        { name: 'bane', image: 'mobil_2.jpg' },
        { name: 'beatrix', image: 'mobil_3.jpg' },
        { name: 'gusion', image: 'mobil_4.jpg' },
        { name: 'badang', image: 'mobil_5.jpg' },
        { name: 'chou', image: 'mobil_6.jpg' },
        { name: 'pharsa', image: 'mobil_7.jpg' },
        { name: 'gord', image: 'mobil_8.jpg' },
        { name: 'sun', image: 'mobil_9.jpg' },
        { name: 'minator', image: 'mobil_10.jpg' },
        { name: 'gatotgaca', image: 'mobil_11.jpg' },
        { name: 'edhit', image: 'mobil_12.jpg' },
        { name: 'karia', image: 'mobil_13.jpg' },
        { name: 'vexsana', image: 'mobil_14.jpg' },
        { name: 'lesley', image: 'mobil_15.jpg' },
        { name: 'gunivere', image: 'mobil_16.jpg' },
        { name: 'novaria', image: 'mobil_17.jpg' },
        { name: 'miya', image: 'mobil_18.jpg' },
        { name: 'natan', image: 'mobil_19.jpg' },
        { name: 'chou', image: 'mobil_20.jpg' },
        { name: 'fanney', image: 'mobil_21.jpg' },
        { name: 'lxia', image: 'mobil_22.jpg' },
        { name: 'freya', image: 'mobil_23.jpg' },
        { name: 'gusion', image: 'mobil_24.jpg' },
        { name: 'thamuz', image: 'mobil_25.jpg' }
    ],
    icecek: [
        { name: 'Fuse Tea kavun cilek', image: 'icecek_1.jpg' },
        { name: 'beypazarı', image: 'icecek_2.jpg' },
        { name: 'monter çilekli', image: 'icecek_3.jpg' },
        { name: 'cocacola', image: 'icecek_4.jpg' },
        { name: 'fanta', image: 'icecek_5.jpg' },
        { name: 'sarıyer cola', image: 'icecek_6.jpg' },
        { name: 'camlıca gazoz', image: 'icecek_7.jpg' },
        { name: 'burn', image: 'icecek_8.jpg' },
        { name: 'furuti limon', image: 'icecek_9.jpg' },
        { name: 'uludağ', image: 'icecek_10.jpg' },
        { name: 'cupa cups', image: 'icecek_11.jpg' },
        { name: 'redbul', image: 'icecek_12.jpg' },
        { name: 'capey', image: 'icecek_13.jpg' },
        { name: 'furiti muz', image: 'icecek_14.jpg' },
        { name: 'cocacola vanilya', image: 'icecek_15.jpg' },
        { name: 'monter', image: 'icecek_16.jpg' },
        { name: 'fuse tea mango', image: 'icecek_17.jpg' },
        { name: 'cola turka', image: 'icecek_18.jpg' },
        { name: 'balck burn', image: 'icecek_19.jpg' },
        { name: 'schaweps', image: 'icecek_20.jpg' }
    ],
    cips: [
        { name: 'cereza soganlı', image: 'cipsler_1.jpg' },
        { name: 'lays', image: 'cipsler_2.jpg' },
        { name: 'rufels ketcaplı', image: 'cipsler_3.jpg' },
        { name: 'rufles', image: 'cipsler_4.jpg' },
        { name: 'cereza peynirli', image: 'cipsler_5.jpg' },
        { name: 'lays türüflü', image: 'cipsler_6.jpg' },
        { name: 'doritos peynir', image: 'cipsler_7.jpg' },
        { name: 'patos', image: 'cipsler_8.jpg' },
        { name: 'lasy baharatlı', image: 'cipsler_9.jpg' },
        { name: 'doritos storm', image: 'cipsler_10.jpg' },
        { name: 'doritos taco', image: 'cipsler_11.jpg' },
        { name: 'rufles acılı', image: 'cipsler_12.jpg' },
        { name: 'lays fırından', image: 'cipsler_13.jpg' },
        { name: 'cipso tube', image: 'cipsler_14.jpg' },
        { name: 'master patato sogan krema', image: 'cipsler_15.jpg' }
    ],
    biskuvi: [
        { name: 'tutku', image: 'bisküvi_1.jpg' },
        { name: 'saklıköy', image: 'bisküvi_2.jpg' },
        { name: 'albeni', image: 'bisküvi_3.jpg' },
        { name: 'biscolata', image: 'bisküvi_4.jpg' },
        { name: 'negro', image: 'bisküvi_5.jpg' },
        { name: 'çizi', image: 'bisküvi_6.jpg' },
        { name: 'halflayf', image: 'bisküvi_7.jpg' },
        { name: 'probis', image: 'bisküvi_8.jpg' },
        { name: 'burcak', image: 'bisküvi_9.jpg' },
        { name: 'hanımeler', image: 'bisküvi_10.jpg' }
    ],
    sarkici: [
        { name: 'Dua Lipa', image: 'şarkıcı_1.webp' },
        { name: 'Müslüm Gürses', image: 'şarkıcı_2.jpg' },
        { name: 'Kenan Doğulu', image: 'şarkıcı_3.jpg' },
        { name: 'Drake', image: 'şarkıcı_4.jpg' },
        { name: 'Manifest', image: 'şarkıcı_5.jpg' },
        { name: 'Enrique Iglesias', image: 'şarkıcı_6.jpg' },
        { name: 'Murat Boz', image: 'şarkıcı_7.jpg' },
        { name: 'era7capon', image: 'şarkıcı_8.jpg' },
        { name: 'Murat Dalkılıç', image: 'şarkıcı_9.jpg' },
        { name: 'Justin Bieber', image: 'şarkıcı_10.jpg' },
        { name: 'Bruno Mars', image: 'şarkıcı_11.jpg' },
        { name: 'gazapizim', image: 'şarkıcı_12.jpg' },
        { name: 'the wekend', image: 'şarkıcı_13.jpg' },
        { name: 'Lady Gaga', image: 'şarkıcı_14.jpg' },
        { name: 'sagopa kajmer', image: 'şarkıcı_15.jpg' },
        { name: 'murda', image: 'şarkıcı_16.jpg' },
        { name: 'Billie Eilish', image: 'şarkıcı_17.jpg' },
        { name: 'Harry Styles', image: 'şarkıcı_18.jpg' },
        { name: 'ajda pekan', image: 'şarkıcı_19.jpg' },
        { name: 'motive', image: 'şarkıcı_20.jpg' },
        { name: 'ceza', image: 'şarkıcı_21.jpg' },
        { name: 'cakal', image: 'şarkıcı_22.jpg' },
        { name: 'semicenk', image: 'şarkıcı_23.jpg' },
        { name: 'Rihanna', image: 'şarkıcı_24.jpg' },
        { name: 'blok3', image: 'şarkıcı_25.jpg' },
        { name: 'khotkar', image: 'şarkıcı_26.jpg' },
        { name: 'uzi', image: 'şarkıcı_27.jpg' },
        { name: 'hadise', image: 'şarkıcı_28.jpg' },
        { name: 'ezhel', image: 'şarkıcı_29.jpg' },
        { name: 'Taylor Swift', image: 'şarkıcı_30.jpg' },
        { name: 'Beyoncé', image: 'şarkıcı_31.jpg' },
        { name: 'lvbelc5', image: 'şarkıcı_32.jpg' },
        { name: 'ferdi tayfur', image: 'şarkıcı_33.jpg' },
        { name: 'Katy Perry', image: 'şarkıcı_34.jpg' },
        { name: 'orhan gencebay', image: 'şarkıcı_35.jpg' }
    ],
    hayvan: [
        { emoji: '🦁', name: 'Aslan' }, { emoji: '🐘', name: 'Fil' }, { emoji: '🐯', name: 'Kaplan' },
        { emoji: '🦒', name: 'Zürafa' }, { emoji: '🐧', name: 'Penguen' }, { emoji: '🐼', name: 'Panda' },
        { emoji: '🦊', name: 'Tilki' }, { emoji: '🐺', name: 'Kurt' }, { emoji: '🐻', name: 'Ayı' },
        { emoji: '🐨', name: 'Koala' }, { emoji: '🦓', name: 'Zebra' }, { emoji: '🦏', name: 'Gergedan' },
        { emoji: '🦛', name: 'Su Aygırı' }, { emoji: '🐊', name: 'Timsah' }, { emoji: '🐆', name: 'Leopar' },
        { emoji: '🐅', name: 'Bengal Kaplanı' }, { emoji: '🦍', name: 'Goril' }, { emoji: '🦧', name: 'Orangutan' },
        { emoji: '🐘', name: 'Bebek Fil' }, { emoji: '🐕', name: 'Köpek' }, { emoji: '🐈', name: 'Kedi' },
        { emoji: '🐇', name: 'Tavşan' }, { emoji: '🐿️', name: 'Sincap' }, { emoji: '🦔', name: 'Kirpi' },
        { emoji: '🐢', name: 'Kaplumbağa' }, { emoji: '🦎', name: 'Kertenkele' }, { emoji: '🐍', name: 'Yılan' },
        { emoji: '🦜', name: 'Papağan' }, { emoji: '🦅', name: 'Kartal' }, { emoji: '🦉', name: 'Baykuş' }
    ]

};
const siralamaImgExts = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'avif'];

function siralamaFindImage(folder, file) {
    return folder + '/' + file + '.png';
}

window.siralamaTryExtensions = function (img, folder, file, emoji) {
    if (!folder || !file) { siralamaImgError(img, emoji); return; }
    const exts = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'avif'];
    let tried = 0;
    const base = folder + '/' + file + '.';
    function tryNext() {
        while (tried < exts.length) {
            const ext = exts[tried++];
            const candidate = base + ext;
            if (img.getAttribute('src') === candidate) continue;
            img.onerror = function () { img.onerror = null; tryNext(); };
            img.src = candidate;
            return;
        }
        img.onerror = null;
        siralamaImgError(img, emoji);
    }
    tryNext();
};

const siralamaPools = {};
window.siralamaImgError = function (img, emoji) {
    const span = document.createElement('span');
    span.className = img.getAttribute('data-emoji-class') || 'siralama-photo-emoji';
    span.textContent = emoji || '🖼️';
    if (img.parentNode) img.parentNode.replaceChild(span, img);
};

function buildSiralamaPools() {
    siralamaKategoriler.forEach(k => {
        if (typeof siralamaImageData !== 'undefined' && siralamaImageData[k.id] && siralamaImageData[k.id].length) {
            const pool = siralamaImageData[k.id];
            siralamaPools[k.id] = pool.map((item, idx) => ({
                emoji: item.emoji || '🖼️',
                name: item.label || item.name || ('Öğe ' + (idx + 1)),
                image: item.image || item.file || '',
                folder: item.folder || k.folder || '',
                file: item.file || '',
                useEmojiOnly: false
            }));
            k.max = siralamaPools[k.id].length;
        } else if (k.maxPool) {
            const pool = photoPools[k.maxPool] || [];
            siralamaPools[k.id] = pool.map((item, idx) => ({
                emoji: item.emoji || '🖼️',
                name: item.label || item.name || ('Öğe ' + (idx + 1)),
                image: item.image || item.file || '',
                useEmojiOnly: false
            }));
            k.max = siralamaPools[k.id].length || 20;
        } else if (k.kind === 'image' && siralamaEmojiData[k.id]) {
            siralamaPools[k.id] = siralamaEmojiData[k.id].map(x => ({
                emoji: x.emoji,
                name: x.name,
                image: siralamaFindImage(k.folder, x.file),
                folder: k.folder,
                file: x.file,
                useEmojiOnly: false
            }));
            k.max = siralamaPools[k.id].length;
        } else if (k.kind === 'emoji' && siralamaEmojiData[k.id]) {
            siralamaPools[k.id] = siralamaEmojiData[k.id].map(x => ({
                emoji: x.emoji, name: x.name, image: '', useEmojiOnly: true
            }));
            k.max = siralamaPools[k.id].length;
        } else {
            siralamaPools[k.id] = [];
            k.max = 20;
        }
    });
}

window.goToSiralamaCategorySelect = function () {
    buildSiralamaPools();
    const grid = document.getElementById('siralamaCategoryGrid');
    grid.innerHTML = siralamaKategoriler.map((k, idx) => {
        const neon = 'category-card--' + k.id;
        return '<div class="category-card ' + neon + '" data-fav-grid="siralama" data-fav-id="' + k.id + '" data-fav="' + (isFav('siralama', k.id) ? 1 : 0) + '" data-orig-order="' + idx + '" onclick="selectSiralamaCategory(\'' + k.id + '\')" id="siralamaCat_' + k.id + '">' +
            '<div class="category-icon">' + k.icon + '</div>' +
            '<div class="category-title">' + k.name + favHeart('siralama', k.id) + '</div>' +
            '<div class="category-subtitle">' + k.max + ' görsel</div>' +
            '</div>';
    }).join('');
    resortFavGrid(grid);
    hideAllMainScreens();
    document.getElementById('siralamaCategoryScreen').style.display = 'block';
    siralamaSelectedCat = null;
    document.getElementById('siralamaCategoryNextBtn').disabled = true;
    changeTheme('space');
};

window.selectSiralamaCategory = function (catId) {
    document.querySelectorAll('#siralamaCategoryGrid .category-card').forEach(c => c.classList.remove('selected'));
    const el = document.getElementById('siralamaCat_' + catId);
    if (el) el.classList.add('selected');
    const cat = siralamaKategoriler.find(k => k.id === catId);
    siralamaSelectedCat = cat;
    siralamaSelectedMax = cat.max;
    document.getElementById('siralamaCategoryNextBtn').disabled = false;
    changeTheme(catId);
};

window.goToSiralamaCount = function () {
    if (!siralamaSelectedCat) return;
    const inp = document.getElementById('siralamaCountInput');
    const err = document.getElementById('siralamaCountErr');
    const max = siralamaSelectedMax || siralamaSelectedCat.max || 20;
    inp.max = max;
    document.getElementById('siralamaMaxLbl').textContent = max;
    document.getElementById('siralamaMaxLbl2').textContent = max;
    inp.value = Math.min(8, max);
    inp.min = 4;
    if (err) err.textContent = '';
    hideAllMainScreens();
    document.getElementById('siralamaCountScreen').style.display = 'block';
    changeTheme(siralamaSelectedCat.id);
    window.scrollTo(0, 0);
};

window.goBackToSiralamaCategoryFromCount = function () {
    hideAllMainScreens();
    document.getElementById('siralamaCategoryScreen').style.display = 'block';
    changeTheme(siralamaSelectedCat ? siralamaSelectedCat.id : 'space');
    window.scrollTo(0, 0);
};

window.validateSiralamaCount = function () {
    const inp = document.getElementById('siralamaCountInput');
    const err = document.getElementById('siralamaCountErr');
    const btn = document.getElementById('siralamaStartBtn');
    const v = parseInt(inp.value);
    const max = parseInt(inp.max) || 20;
    if (!v || v < 4) { if (err) err.textContent = 'En az 4 görsel seçmelisin!'; if (btn) btn.disabled = true; return false; }
    if (v > max) { if (err) err.textContent = 'Maksimum ' + max + ' görsel seçebilirsin!'; if (btn) btn.disabled = true; return false; }
    if (err) err.textContent = '';
    if (btn) btn.disabled = false;
    return true;
};

window.startSiralamaGame = function () {
    if (!validateSiralamaCount()) return;
    if (!siralamaSelectedCat) return;
    isInTest = true;
    stopBgMusic();

    const count = parseInt(document.getElementById('siralamaCountInput').value);
    const pool = (siralamaPools[siralamaSelectedCat.id] || []).slice();
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    siralamaAllItems = pool.slice(0, count);

    document.getElementById('siralamaGameCatInfo').textContent = '📊 ' + siralamaSelectedCat.name;
    document.getElementById('siralamaGameInfo').textContent = count + ' görsel • 4 seviyeye sürükle';
    const errBox = document.getElementById('siralamaError');
    if (errBox) errBox.textContent = '';

    document.getElementById('siralamaRanks').innerHTML = siralamaRankDefaults.map((label, i) =>
        '<div class="siralama-rank-slot" data-rank="' + i + '">' +
        '<h3>Seviye ' + (i + 1) + '</h3>' +
        '<input type="text" class="siralama-rank-name-input" data-rank="' + i + '" value="' + label + '" oninput="siralamaUpdateLabels()">' +
        '<div class="siralama-rank-items" id="siralamaRankItems' + i + '"></div>' +
        '</div>'
    ).join('');

    document.getElementById('siralamaPhotos').innerHTML = siralamaAllItems.map((it, idx) => {
        let visual;
        if (it.useEmojiOnly || !it.image) {
            visual = '<span class="siralama-photo-emoji">' + (it.emoji || '🖼️') + '</span>';
        } else {
            visual = '<img src="' + it.image + '" alt="' + it.name + '" draggable="false" ' +
                'onerror="siralamaTryExtensions(this, \'' + (it.folder || '') + '\', \'' + (it.file || '') + '\', \'' + (it.emoji || '🖼️') + '\')" ' +
                'data-emoji-class="siralama-photo-emoji">';
        }
        return '<div class="siralama-photo-card" id="siralamaPhoto_' + idx + '" data-name="' + it.name.replace(/"/g, '&quot;') + '" data-folder="' + (it.folder || '') + '" data-file="' + (it.file || '') + '">' +
            visual +
            '<div class="label">' + it.name + '</div>' +
            '</div>';
    }).join('');
    document.querySelectorAll('#siralamaPhotos .siralama-photo-card').forEach(siralamaBindCard);

    hideAllMainScreens();
    document.getElementById('siralamaGameScreen').style.display = 'block';
    window.scrollTo(0, 0);
};

// sürükle bırak (mouse + dokunmatik)
let siralamaDrag = null;

if (!window.__siralamaNativeDragBlocked) {
    document.addEventListener('dragstart', function (e) {
        var t = e.target;
        if (t && t.closest && t.closest('.siralama-photo-card, .siralama-item-card, #siralamaGhost, .siralama-photos, .siralama-ranks')) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);
    window.__siralamaNativeDragBlocked = true;
}

function siralamaClearHighlights() {
    document.querySelectorAll('.siralama-rank-slot.drag-over').forEach(s => s.classList.remove('drag-over'));
    const pool = document.getElementById('siralamaPhotos');
    if (pool) pool.classList.remove('drag-over');
}

function siralamaCleanupGhost() {
    document.querySelectorAll('#siralamaGhost').forEach(g => {
        if (g.parentNode) g.parentNode.removeChild(g);
    });
    if (window.getSelection) {
        const sel = window.getSelection();
        if (sel && sel.removeAllRanges) sel.removeAllRanges();
    }
    document.querySelectorAll('.siralama-dragging').forEach(c => c.classList.remove('siralama-dragging'));
    siralamaClearHighlights();
}

function siralamaStartDrag(e, cardEl) {
    if (e.target && e.target.tagName === 'INPUT') return;
    e.preventDefault();
    try { cardEl.setPointerCapture(e.pointerId); } catch (err) { }
    const rect = cardEl.getBoundingClientRect();
    const name = cardEl.getAttribute('data-name') || '';
    const img = cardEl.querySelector('img');
    const em = cardEl.querySelector('.siralama-item-emoji, .siralama-photo-emoji');

    siralamaCleanupGhost();
    const ghost = document.createElement('div');
    ghost.id = 'siralamaGhost';
    let visual;
    if (img) {
        visual = '<img src="' + img.src + '" alt="" draggable="false" ' +
            'onerror="siralamaImgError(this, \'' + (em ? em.textContent : '🖼️') + '\')" ' +
            'data-emoji-class="siralama-ghost-emoji">';
    } else {
        visual = '<span class="siralama-ghost-emoji">' + (em ? em.textContent : '🖼️') + '</span>';
    }
    ghost.innerHTML = visual + '<div class="label">' + name + '</div>';
    document.body.appendChild(ghost);

    siralamaDrag = {
        card: cardEl,
        ghost: ghost,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
        fromPool: cardEl.classList.contains('siralama-photo-card'),
        name: name,
        imgSrc: img ? img.src : '',
        emoji: em ? em.textContent : '🖼️',
        folder: cardEl.getAttribute('data-folder') || '',
        file: cardEl.getAttribute('data-file') || ''
    };
    ghost.style.left = e.clientX + 'px';
    ghost.style.top = e.clientY + 'px';
    cardEl.classList.add('siralama-dragging');

    document.addEventListener('pointermove', siralamaOnMove);
    document.addEventListener('pointerup', siralamaOnUp);
    document.addEventListener('pointercancel', siralamaOnUp);
}

function siralamaOnMove(e) {
    if (!siralamaDrag) return;
    e.preventDefault();
    siralamaDrag.ghost.style.left = e.clientX + 'px';
    siralamaDrag.ghost.style.top = e.clientY + 'px';

    siralamaDrag.ghost.style.display = 'none';
    const below = document.elementFromPoint(e.clientX, e.clientY);
    siralamaDrag.ghost.style.display = '';

    siralamaClearHighlights();
    if (!below) return;
    const slot = below.closest('.siralama-rank-slot');
    if (slot) { slot.classList.add('drag-over'); return; }
    const pool = below.closest('.siralama-photos');
    if (pool) { pool.classList.add('drag-over'); }
}

function siralamaOnUp(e) {
    if (!siralamaDrag) return;
    document.removeEventListener('pointermove', siralamaOnMove);
    document.removeEventListener('pointerup', siralamaOnUp);
    document.removeEventListener('pointercancel', siralamaOnUp);

    siralamaDrag.ghost.style.display = 'none';
    const below = document.elementFromPoint(e.clientX, e.clientY);
    siralamaDrag.ghost.style.display = '';

    siralamaClearHighlights();
    const d = siralamaDrag;
    d.card.classList.remove('siralama-dragging');
    try { d.card.releasePointerCapture(e.pointerId); } catch (err) { }

    let targetSlot = below ? below.closest('.siralama-rank-slot') : null;
    let targetPool = below ? below.closest('.siralama-photos') : null;

    if (targetSlot) {
        const idx = parseInt(targetSlot.getAttribute('data-rank'));
        siralamaPlaceInRank(d, idx);
    } else if (targetPool && !d.fromPool) {
        if (d.card && d.card.parentNode) d.card.remove();
        siralamaSyncPool();
    }

    siralamaCleanupGhost();
    siralamaDrag = null;
}

function siralamaPlaceInRank(d, rankIndex) {
    document.querySelectorAll('.siralama-item-card').forEach(card => {
        if (card.getAttribute('data-name') === d.name) card.remove();
    });
    if (d.card) {
        if (d.card.classList.contains('siralama-photo-card')) {
            d.card.style.display = 'none';
        } else if (d.card.parentNode) {
            d.card.remove();
        }
    }

    const container = document.getElementById('siralamaRankItems' + rankIndex);
    const card = document.createElement('div');
    card.className = 'siralama-item-card';
    card.id = 'siralamaCard_' + Math.random().toString(36).slice(2);
    card.setAttribute('data-name', d.name);
    card.setAttribute('data-folder', d.folder || '');
    card.setAttribute('data-file', d.file || '');
    let visual;
    if (d.imgSrc) {
        visual = '<img src="' + d.imgSrc + '" alt="' + d.name + '" draggable="false" ' +
            'onerror="siralamaTryExtensions(this, \'' + (d.folder || '') + '\', \'' + (d.file || '') + '\', \'' + (d.emoji || '🖼️') + '\')" ' +
            'data-emoji-class="siralama-item-emoji">';
    } else {
        visual = '<span class="siralama-item-emoji">' + (d.emoji || '🖼️') + '</span>';
    }
    card.innerHTML = visual + '<span class="siralama-item-label">' + d.name + '</span>';
    container.appendChild(card);
    siralamaBindCard(card);

    document.querySelectorAll('#siralamaPhotos .siralama-photo-card').forEach(p => {
        if (p.getAttribute('data-name') === d.name) p.style.display = 'none';
    });
    siralamaCleanupGhost();
}

function siralamaBindCard(card) {
    if (card.__siralamaBound) return;
    card.__siralamaBound = true;
    var startX = 0, startY = 0, moved = false, dragging = false, pointerId = null;
    card.addEventListener('pointerdown', function (ev) {
        if (ev.pointerType === 'mouse' && ev.button !== 0) return;
        if (ev.target && ev.target.tagName === 'INPUT') return;
        startX = ev.clientX; startY = ev.clientY; moved = false; dragging = false;
        pointerId = ev.pointerId;
        function onMove(e) {
            if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
                moved = true;
                if (!dragging) { dragging = true; siralamaStartDrag(ev, card); }
            }
        }
        function onUp(e) {
            document.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerup', onUp);
            document.removeEventListener('pointercancel', onUp);
            if (!moved && card.classList.contains('siralama-item-card')) {
                card.remove();
                siralamaSyncPool();
            }
        }
        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
        document.addEventListener('pointercancel', onUp);
    });
}

window.siralamaUpdateLabels = function () {
    document.querySelectorAll('.siralama-rank-name-input').forEach(inp => {
        const i = parseInt(inp.getAttribute('data-rank'));
        const h3 = document.querySelector('#siralamaRanks .siralama-rank-slot:nth-child(' + (i + 1) + ') h3');
        if (h3) {
            const val = inp.value.trim();
            h3.textContent = 'Seviye ' + (i + 1) + (val ? ' - ' + val : '');
        }
    });
};

window.finishSiralamaGame = function () {
    const placed = document.querySelectorAll('.siralama-item-card').length;
    const total = siralamaAllItems.length;
    const errBox = document.getElementById('siralamaError');
    if (placed < total) {
        if (errBox) {
            errBox.textContent = '⚠️ Önce tüm görselleri seviyelere yerleştir! (' + placed + '/' + total + ' yerleştirildi)';
            const mc = document.getElementById('mainContainer');
            if (mc) { mc.classList.remove('shake'); void mc.offsetWidth; mc.classList.add('shake'); setTimeout(() => mc.classList.remove('shake'), 600); }
        }
        return;
    }
    if (errBox) errBox.textContent = '';

    isInTest = false;
    if (soundEnabled) startBgMusic();

    document.getElementById('siralamaResultSub').textContent = total + ' görseli 4 seviyeye ayırdın!';

    let html = '';
    for (let i = 0; i < 4; i++) {
        const inp = document.querySelector('.siralama-rank-name-input[data-rank="' + i + '"]');
        const rankName = inp ? inp.value.trim() : siralamaRankDefaults[i];
        const items = Array.from(document.querySelectorAll('#siralamaRankItems' + i + ' .siralama-item-card'));
        const colors = ['#4ade80', '#22d3ee', '#fbbf24', '#f87171'];
        html += '<div style="background:rgba(0,0,0,0.25);border:2px solid ' + colors[i] + '55;border-radius:22px;padding:20px;margin-bottom:16px;">';
        html += '<h3 style="color:' + colors[i] + ';font-size:22px;font-weight:900;margin-bottom:12px;text-align:center;">Seviye ' + (i + 1) + ' - ' + rankName + ' (' + items.length + ')</h3>';
        if (items.length === 0) {
            html += '<p style="color:#7eb8ff;text-align:center;font-style:italic;">Bu seviyeye görsel yerleştirmedin.</p>';
        } else {
            html += '<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">';
            items.forEach(c => {
                const n = c.getAttribute('data-name') || '';
                const img = c.querySelector('img');
                const em = c.querySelector('.siralama-item-emoji');
                const folder = c.getAttribute('data-folder') || '';
                const file = c.getAttribute('data-file') || '';
                let vis = '';
                if (img && img.src) {
                    vis = '<img src="' + img.src + '" alt="' + n + '" style="width:54px;height:54px;object-fit:contain;object-position:center;border-radius:8px;background:rgba(0,0,0,0.45);border:1px solid rgba(255,255,255,0.12);display:block;margin:0 auto 4px;padding:2px;box-sizing:border-box;" ' +
                        'onerror="siralamaTryExtensions(this, \'' + folder + '\', \'' + file + '\', \'' + (em ? em.textContent : '🖼️') + '\')" ' +
                        'data-emoji-class="siralama-item-emoji">';
                } else {
                    vis = '<span style="font-size:32px;display:block;margin-bottom:4px;">' + (em ? em.textContent : '🖼️') + '</span>';
                }
                html += '<div style="background:rgba(255,255,255,0.08);border:2px solid ' + colors[i] + '66;border-radius:14px;padding:8px 10px;color:#fff;font-weight:700;font-size:12px;text-align:center;width:78px;box-sizing:border-box;">' +
                    vis + '<div style="word-break:break-word;font-size:11px;line-height:1.2;">' + n + '</div></div>';
            });
            html += '</div>';
        }
        html += '</div>';
    }
    document.getElementById('siralamaResultContent').innerHTML = html;

    hideAllMainScreens();
    document.getElementById('siralamaResultScreen').style.display = 'block';
    window.scrollTo(0, 0);
    changeTheme(siralamaSelectedCat ? siralamaSelectedCat.id : 'space');
};

window.restartSiralamaGame = function () { startSiralamaGame(); };

window.goBackToSiralamaCategory = function () {
    isInTest = false;
    if (soundEnabled) startBgMusic();
    hideAllMainScreens();
    document.getElementById('siralamaCategoryScreen').style.display = 'block';
    changeTheme('space');
    window.scrollTo(0, 0);
};
window.goBackToModeFromSiralama = function () {
    isInTest = false;
    if (soundEnabled) startBgMusic();
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.goToProfileFromSiralama = function () {
    isInTest = false;
    if (soundEnabled) startBgMusic();
    hideAllMainScreens();
    document.getElementById('profileScreen').style.display = 'block';
    changeTheme('space');
};
window.exitSiralamaToCategories = function () {
    exitTarget = 'siralama';
    document.querySelector('.exit-confirm-box h3').textContent = '🚪 Oyundan Çık';
    document.querySelector('.exit-confirm-box p').textContent = 'Oyundan çıkmak istediğinize emin misiniz? İlerlemeniz kaybolacak.';
    document.getElementById('exitConfirmModal').style.display = 'flex';
};

// blur oyunu
const blurCategories = {
    marvel: {
        name: "Marvel", icon: "🦸", color: "#ef4444",
        items: [
            { name: "Captain America", emoji: "🛡️", file: "marvel_01.png" },
            { name: "Iron Man", emoji: "🤖", file: "marvel_02.png" },
            { name: "Spider-Man", emoji: "🕷️", file: "marvel_03.png" },
            { name: "Hulk", emoji: "💪", file: "marvel_04.png" },
            { name: "Thor", emoji: "⚡", file: "marvel_05.png" },
            { name: "Black Widow", emoji: "🕷️", file: "marvel_06.png" },
            { name: "Doctor Strange", emoji: "🪄", file: "marvel_07.png" },
            { name: "Black Panther", emoji: "🐆", file: "marvel_08.png" },
            { name: "Loki", emoji: "😈", file: "marvel_09.png" },
            { name: "Thanos", emoji: "💜", file: "marvel_10.png" },
            { name: "Rocket", emoji: "🦝", file: "marvel_11.png" },
            { name: "Star-Lord", emoji: "⭐", file: "marvel_12.png" },
            { name: "Gamora", emoji: "💚", file: "marvel_13.png" },
            { name: "Groot", emoji: "🌳", file: "marvel_14.png" },
            { name: "Venom", emoji: "🖤", file: "marvel_15.png" },
            { name: "Doctor Doom", emoji: "🟢", file: "marvel_16.png" },
            { name: "Wolverine", emoji: "⚔️", file: "marvel_17.png" },
            { name: "Deadpool", emoji: "🔴", file: "marvel_18.png" },
            { name: "Ant-Man", emoji: "🐜", file: "marvel_19.png" },
            { name: "Wasp", emoji: "🐝", file: "marvel_20.png" },
            { name: "Scorpion", emoji: "🦂", file: "marvel_21.png" },
            { name: "Rhino", emoji: "🦏", file: "marvel_22.png" },
            { name: "Scarlet Witch", emoji: "🔴", file: "marvel_23.png" },
            { name: "Hawkeye", emoji: "🏹", file: "marvel_24.png" },
            { name: "Vision", emoji: "💎", file: "marvel_25.png" },
            { name: "Winter Soldier", emoji: "❄️", file: "marvel_26.png" },
            { name: "Juggernaut", emoji: "🟡", file: "marvel_27.png" },
            { name: "Red Hulk", emoji: "🔴", file: "marvel_28.png" },
            { name: "Moon Knight", emoji: "🌙", file: "marvel_29.png" },
            { name: "Daredevil", emoji: "🔴", file: "marvel_30.png" },
            { name: "Phoenix", emoji: "🔥", file: "marvel_31.webp" },
            { name: "Magneto", emoji: "🧲", file: "marvel_32.webp" },
            { name: "Professor X", emoji: "🧠", file: "marvel_33.webp" },
            { name: "Storm", emoji: "🌪️", file: "marvel_34.avif" },
            { name: "Beast", emoji: "🐾", file: "marvel_35.webp" },
            { name: "Mystique", emoji: "🔵", file: "marvel_36.jpg" },
            { name: "Nick Fury", emoji: "💪", file: "marvel_37.jpg" },
            { name: "Ghost Rider", emoji: "🔥", file: "marvel_38.jpg" },
            { name: "Sentry", emoji: "🌟", file: "marvel_39.jpg" },
            { name: "Jessica Jones", emoji: "🔵", file: "marvel_40.jpg" },
            { name: "knull", emoji: "🔵", file: "marvel_41.jpg" },
            { name: "şahng chi", emoji: "🔵", file: "marvel_42.jpg" },
            { name: "silver surfe", emoji: "🔵", file: "marvel_43.jpg" },
            { name: "carnage", emoji: "🔵", file: "marvel_44.jpg" },
            { name: "collosus", emoji: "🔵", file: "marvel_45.jpg" }
        ]
    },
    dc: {
        name: "DC", icon: "🦇", color: "#3b82f6",
        items: [
            { name: "Batman", emoji: "🦇", file: "dc_01.png" },
            { name: "Superman", emoji: "🦸", file: "dc_02.png" },
            { name: "Lex Luthor", emoji: "🤵", file: "dc_03.png" },
            { name: "Joker", emoji: "🃏", file: "dc_04.png" },
            { name: "Green Arrow", emoji: "🏹", file: "dc_05.png" },
            { name: "Supergirl", emoji: "🦸‍♀️", file: "dc_06.png" },
            { name: "Darkseid", emoji: "🪨", file: "dc_07.png" },
            { name: "Alfred Pennyworth", emoji: "🤵‍♂️", file: "dc_08.png" },
            { name: "Aquaman", emoji: "🔱", file: "dc_09.png" },
            { name: "Flash", emoji: "⚡", file: "dc_10.png" },
            { name: "Wonder Woman", emoji: "🛡️", file: "dc_11.png" },
            { name: "Deathstroke", emoji: "🗡️", file: "dc_12.png" },
            { name: "Krypto", emoji: "🐕", file: "dc_13.png" },
            { name: "Two-Face", emoji: "🎭", file: "dc_14.png" },
            { name: "Blue Beetle", emoji: "🪲", file: "dc_15.png" },
            { name: "Black Adam", emoji: "🌩️", file: "dc_16.png" },
            { name: "Deadshot", emoji: "🎯", file: "dc_17.jpg" },
            { name: "Mr. Freeze", emoji: "❄️", file: "dc_18.jpg" },
            { name: "Catwoman", emoji: "🐱", file: "dc_19.jpg" },
            { name: "Penguin", emoji: "🐧", file: "dc_20.jpg" },
            { name: "Green Lantern", emoji: "💚", file: "dc_21.jpg" },
            { name: "King Shark", emoji: "🦈", file: "dc_22.jpg" },
            { name: "Peacemaker", emoji: "🕊️", file: "dc_23.jpg" },
            { name: "Harley Quinn", emoji: "🔨", file: "dc_24.jpg" },
            { name: "The Atom", emoji: "⚛️", file: "dc_25.jpg" },
            { name: "Sinestro", emoji: "💛", file: "dc_26.jpg" },
            { name: "cyborg", emoji: "💛", file: "dc_27.jpg" },
            { name: "nıghetwing", emoji: "💛", file: "dc_28.jpg" },
            { name: "red hood", emoji: "💛", file: "dc_29.jpg" },
            { name: "Martian Manhunter", emoji: "💛", file: "dc_30.jpg" }
        ]
    },
    "erkek-anime": {
        name: "Erkek Anime", icon: "⚔️", color: "#ef4444",
        items: [
            { name: "Naruto Uzumaki", emoji: "🍥", file: "anime_01.png" },
            { name: "Monkey D. Luffy", emoji: "👒", file: "anime_02.jpg" },
            { name: "Son Goku", emoji: "🐉", file: "anime_03.png" },
            { name: "Eren Yeager", emoji: "🗡️", file: "anime_04.jpg" },
            { name: "Light Yagami", emoji: "📓", file: "anime_05.jpg" },
            { name: "Satoru Gojo", emoji: "👁️", file: "anime_06.png" },
            { name: "Gon Freecss", emoji: "🎣", file: "anime_07.png" },
            { name: "Kakashi Hatake", emoji: "📖", file: "anime_08.jpg" },
            { name: "Jotaro Kujo", emoji: "🎩", file: "anime_09.jpg" },
            { name: "Roronoa Zoro", emoji: "🗡️", file: "anime_10.jpg" },
            { name: "Tanjiro Kamado", emoji: "🌊", file: "anime_11.jpg" },
            { name: "Vegito", emoji: "🔱", file: "anime_12.png" },
            { name: "Izuku Midoriya", emoji: "💚", file: "anime_14.jpg" },
            { name: "Ken Kaneki", emoji: "👁️", file: "anime_15.jpg" },
            { name: "Devasa Titan", emoji: "👹", file: "anime_16.jpg" },
            { name: "Lord Beerus", emoji: "😼", file: "anime_17.jpg" },
            { name: "Alucard", emoji: "🧛", file: "anime_18.png" },
            { name: "Marshall D. Teach", emoji: "🏴‍☠️", file: "anime_19.jpg" },
            { name: "Denji", emoji: "🪚", file: "anime_20.jpg" },
            { name: "Yujiro Hanma", emoji: "💪", file: "anime_21.png" },
            { name: "Sung Jin-woo", emoji: "🗡️", file: "anime_22.png" },
            { name: "Saitama", emoji: "👊", file: "anime_23.png" },
            { name: "Mikasa Ackerman", emoji: "⚔️", file: "anime_24.jpg" },
            { name: "Madara Uchiha", emoji: "🌑", file: "anime_25.png" },
            { name: "Sasuke Uchiha", emoji: "⚡", file: "anime_26.png" },
            { name: "Shanks", emoji: "🏴‍☠️", file: "anime_27.png" },
            { name: "Yoruichi Shihouin", emoji: "🐱", file: "anime_28.jpg" },
            { name: "Zeke Jaeger", emoji: "👓", file: "anime_29.jpg" },
            { name: "Dracule Mihawk", emoji: "🦅", file: "anime_30.jpg" },
            { name: "Baki Hanma", emoji: "🥋", file: "anime_31.jpg" },
            { name: "Nami", emoji: "🍊", file: "anime_32.jpg" },
            { name: "Itachi Uchiha", emoji: "👁️", file: "anime_33.webp" },
            { name: "Dante", emoji: "🔫", file: "anime_34.jpg" },
            { name: "Sosuke Aizen", emoji: "😎", file: "anime_35.jpg" },
            { name: "Tsubasa Ozora", emoji: "⚽", file: "anime_36.webp" },
            { name: "Yugi Muto", emoji: "😎", file: "anime_37.jpg" },
            { name: "Kojiro Hyuga", emoji: "😎", file: "anime_38.jpg" },
            { name: "Gingka Hagane", emoji: "😎", file: "anime_39.jpg" },
            { name: "Genzo Wakabayashi", emoji: "😎", file: "anime_40.jpg" },
            { name: "Charmander", emoji: "😎", file: "anime_41.jpg" },
            { name: "Bulbasaur", emoji: "😎", file: "anime_42.jpg" },
            { name: "Ichigo Kurosaki", emoji: "😎", file: "anime_43.jpg" },
            { name: "Inosuke Hashibira", emoji: "😎", file: "anime_44.jpg" },
            { name: "Killua Zoldyck", emoji: "😎", file: "anime_45.jpg" },
        ]
    },
    "kiz-anime": {
        name: "Kız Anime", icon: "🌸", color: "#ec4899",
        items: [
            { name: "Erza Scarlet", emoji: "🗡️", file: "kız_01.jpg" },
            { name: "Revy", emoji: "🔫", file: "kız_02.webp" },
            { name: "Asuna Yuuki", emoji: "🏖️", file: "kız_03.jpg" },
            { name: "Makio", emoji: "🌼", file: "kız_04.webp" },
            { name: "Mizore Shirayuki", emoji: "❄️", file: "kız_05.jpg" },
            { name: "Yoko Littner", emoji: "🎯", file: "kız_06.webp" },
            { name: "Lucy Heartfilia", emoji: "🔑", file: "kız_07.jpg" },
            { name: "Blair", emoji: "🐱", file: "kız_08.webp" },
            { name: "Celty Sturluson", emoji: "🏍️", file: "kız_09.jpg" },
            { name: "Tsunade Senju", emoji: "🐌", file: "kız_10.jpg" },
            { name: "Kagura", emoji: "☂️", file: "kız_11.jpg" },
            { name: "Mirko", emoji: "🐇", file: "kız_12.jpg" },
            { name: "Marin Kitagawa", emoji: "🌺", file: "kız_13.jpg" },
            { name: "Tanya Degurechaff", emoji: "🎖️", file: "kız_14.jpg" },
            { name: "Rias Gremory", emoji: "👿", file: "kız_15.jpg" },
            { name: "Sailor Moon", emoji: "🌙", file: "kız_16.png" },
            { name: "Mikasa Ackerman", emoji: "⚔️", file: "kız_17.jpg" },
            { name: "Yoruichi Shihouin", emoji: "🐱", file: "kız_18.jpg" },
            { name: "Nami", emoji: "🍊", file: "kız_19.jpg" },
            { name: "Winry Rockbell", emoji: "🔧", file: "kız_20.jpg" },
            { name: "Kaguya Shinomiya", emoji: "❤️", file: "kız_21.jpg" },
            { name: "Nezuko Kamado", emoji: "🎋", file: "kız_22.jpg" },
            { name: "Anya Forger", emoji: "🥜", file: "kız_23.webp" },
            { name: "Rem", emoji: "💙", file: "kız_24.jpg" },
            { name: "Rukia Kuchiki", emoji: "🗡️", file: "kız_25.jpg" },
            { name: "Sakura Haruno", emoji: "🌸", file: "kız_26.jpg" },
            { name: "Power", emoji: "🩸", file: "kız_27.webp" },
            { name: "Yor Forger", emoji: "🗡️", file: "kız_28.webp" },
            { name: "Hinata Hyuga", emoji: "💜", file: "kız_29.webp" },
            { name: "Makima", emoji: "🐶", file: "kız_30.webp" },
            { name: "Nico Robin", emoji: "📚", file: "kız_31.webp" },
            { name: "Emilia", emoji: "❄️", file: "kız_32.jpg" },
            { name: "Zero Two", emoji: "❤️", file: "kız_33.jpg" },
            { name: "C.C.", emoji: "🟢", file: "kız_34.jpg" },
            { name: "Boa Hancock", emoji: "🐍", file: "kız_35.jpg" },
            { name: "Satsuki Kiryuin", emoji: "👑", file: "kız_36.jpg" },
            { name: "Android 18", emoji: "👑", file: "kız_37.jpg" },
            { name: "Esdeath", emoji: "❄️", file: "kız_38.jpg" },
            { name: "Fubuki", emoji: "❄️", file: "kız_39.jpg" },
            { name: "Matsumoto Rangiku", emoji: "🍈", file: "kız_40.jpg" },
            { name: "Mereoleona Vermillion", emoji: "🐍", file: "kız_41.jpg" },
            { name: "Faye Valentine", emoji: "🐍", file: "kız_42.jpg" },
            { name: "Fujiko Mine", emoji: "🐍", file: "kız_43.jpg" },
            { name: "Mitsuri Kanroji", emoji: "🐍", file: "kız_44.jpg" },
            { name: "Akeno Himejima", emoji: "🐍", file: "kız_45.jpg" }
        ]
    },
    "oyun-karakteri": {
        name: "Oyun Karakteri", icon: "🕹️", color: "#a855f7",
        items: [
            { name: "Sub-Zero", emoji: "🧊", file: "oyun_01.jpg" },
            { name: "Arthur Morgan", emoji: "🤠", file: "oyun_02.webp" },
            { name: "Sonic", emoji: "🦔", file: "oyun_03.jpg" },
            { name: "Dante", emoji: "🔫", file: "oyun_04.webp" },
            { name: "Agent 47", emoji: "🔫", file: "oyun_05.jpg" },
            { name: "Scorpion", emoji: "🥷", file: "oyun_06.jpg" },
            { name: "Ryu", emoji: "👊", file: "oyun_07.jpg" },
            { name: "Kratos", emoji: "🪓", file: "oyun_08.jpg" },
            { name: "Geralt", emoji: "⚔️", file: "oyun_09.jpg" },
            { name: "Master Chief", emoji: "🔫", file: "oyun_10.jpg" },
            { name: "Malenia", emoji: "⚔️", file: "oyun_11.jpg" },
            { name: "CJ", emoji: "🔫", file: "oyun_12.jpg" },
            { name: "Mario", emoji: "🍄", file: "oyun_13.jpg" },
            { name: "Gordon Freeman", emoji: "🔧", file: "oyun_14.jpg" },
            { name: "Steve", emoji: "⛏️", file: "oyun_15.jpg" },
            { name: "Cyberpunk", emoji: "🦾", file: "oyun_16 (9).jpg" },
            { name: "Niko Bellic", emoji: "🔫", file: "oyun_17.jpg" },
            { name: "Aloy", emoji: "🏹", file: "oyun_18.jpg" },
            { name: "Ezio", emoji: "🗡️", file: "oyun_19.jpg" },
            { name: "Lara Croft", emoji: "🏹", file: "oyun_20.jpg" },
            { name: "Sam Fisher", emoji: "🔫", file: "oyun_21.jpg" },
            { name: "Ellie", emoji: "🏹", file: "oyun_22.jpg" },
            { name: "Solid Snake", emoji: "🐍", file: "oyun_23.jpg" },
            { name: "Ken", emoji: "👊", file: "oyun_24.jpg" },
            { name: "King Kong", emoji: "🦍", file: "oyun_25.jpg" },
            { name: "Noob Saibot", emoji: "🥷", file: "oyun_26.jpg" },
            { name: "Nathan Drake", emoji: "🗺️", file: "oyun_27.jpg" },
            { name: "Atreus", emoji: "🏹", file: "oyun_28.jpg" },
            { name: "Rayman", emoji: "✊", file: "oyun_29.jpg" },
            { name: "Max Payne", emoji: "🔫", file: "oyun_30.jpg" },
            { name: "kung lao", emoji: "🔫", file: "oyun_31.jpg" },
            { name: "lio kang", emoji: "🔫", file: "oyun_32.jpg" },
            { name: "raidan", emoji: "🔫", file: "oyun_33.jpg" },
            { name: "luigi", emoji: "🔫", file: "oyun_34.jpg" },
            { name: "leon kennedy", emoji: "🔫", file: "oyun_35.jpg" }
        ]
    },
    futbolcu: {
        name: "Futbolcu", icon: "⚽", color: "#22c55e",
        items: [
            { name: "Barış Alper", emoji: "⚽", file: "futbolcu_01.jpeg" },
            { name: "Kylian Mbappé", emoji: "⚽", file: "futbolcu_02.jpg" },
            { name: "Kevin De Bruyne", emoji: "⚽", file: "futbolcu_03.png" },
            { name: "Icardi", emoji: "⚽", file: "futbolcu_04.webp" },
            { name: "Vinicius Jr.", emoji: "⚽", file: "futbolcu_05.jpg" },
            { name: "Lionel Messi", emoji: "⚽", file: "futbolcu_06.webp" },
            { name: "Kenan Yıldız", emoji: "⚽", file: "futbolcu_07.jpg" },
            { name: "Cristiano Ronaldo", emoji: "⚽", file: "futbolcu_08.jpg" },
            { name: "Ronaldinho", emoji: "⚽", file: "futbolcu_09.webp" },
            { name: "Ronaldo Nazário", emoji: "⚽", file: "futbolcu_10.jpg" },
            { name: "Fernando Muslera", emoji: "⚽", file: "futbolcu_11.webp" },
            { name: "Victor Osimhen", emoji: "⚽", file: "futbolcu_12.jpg" },
            { name: "Quaresma", emoji: "⚽", file: "futbolcu_13.jpg" },
            { name: "Martin Ødegaard", emoji: "⚽", file: "futbolcu_14.jpg" },
            { name: "Erling Haaland", emoji: "⚽", file: "futbolcu_15.jpg" },
            { name: "Jude Bellingham", emoji: "⚽", file: "futbolcu_16.jpg" },
            { name: "Lamine Yamal", emoji: "⚽", file: "futbolcu_17.jpg" },
            { name: "Arda Turan", emoji: "⚽", file: "futbolcu_18.jpg" },
            { name: "Neymar", emoji: "⚽", file: "futbolcu_19.jpg" },
            { name: "Arda Güler", emoji: "⚽", file: "futbolcu_20.jpg" },
            { name: "İlkay Gündoğan", emoji: "⚽", file: "futbolcu_21.jpg" },
            { name: "Diego Maradona", emoji: "⚽", file: "futbolcu_22.jpg" },
            { name: "Gianluigi Buffon", emoji: "⚽", file: "futbolcu_23.jpg" },
            { name: "Luis Suárez", emoji: "⚽", file: "futbolcu_24.jpg" },
            { name: "Pelé", emoji: "⚽", file: "futbolcu_25.jpg" },
            { name: "Mohamed Salah", emoji: "⚽", file: "futbolcu_26.jpg" },
            { name: "Ferenc Puskás", emoji: "⚽", file: "futbolcu_27.jpg" },
            { name: "Gerd Müller", emoji: "⚽", file: "futbolcu_28.jpg" },
            { name: "Paolo Maldini", emoji: "⚽", file: "futbolcu_29.jpg" },
            { name: "Eren Elmalı", emoji: "⚽", file: "futbolcu_30.jpg" },
            { name: "Manuel Neuer", emoji: "⚽", file: "futbolcu_31.jpg" },
            { name: "Sergio Ramos", emoji: "⚽", file: "futbolcu_32.jpg" },
            { name: "Wayne Rooney", emoji: "⚽", file: "futbolcu_33.jpg" },
            { name: "Zlatan Ibrahimović", emoji: "⚽", file: "futbolcu_34.jpg" },
            { name: "Thierry Henry", emoji: "⚽", file: "futbolcu_35.jpg" }
        ]
    },
    "kiz-oyuncu": {
        name: "Kız Oyuncu", icon: "💃", color: "#f472b6",
        items: [
            { name: "Demet Özdemir", emoji: "💃", file: "kızoyuncu_01.jpg" },
            { name: "Emma Stone", emoji: "💃", file: "kızoyuncu_02.webp" },
            { name: "Serenay Sarıkaya", emoji: "💃", file: "kızoyuncu_03.jpg" },
            { name: "Bensu Soral", emoji: "💃", file: "kızoyuncu_04.webp" },
            { name: "Barbara Palvin", emoji: "💃", file: "kızoyuncu_05.jpg" },
            { name: "Millie Bobby Brown", emoji: "💃", file: "kızoyuncu_06.webp" },
            { name: "Devrim Özkan", emoji: "💃", file: "kızoyuncu_07.jpg" },
            { name: "Natalie Portman", emoji: "💃", file: "kızoyuncu_08.webp" },
            { name: "Elçin Sangu", emoji: "💃", file: "kızoyuncu_09.jpg" },
            { name: "Scarlett Johansson", emoji: "💃", file: "kızoyuncu_10.webp" },
            { name: "Melis Sezen", emoji: "💃", file: "kızoyuncu_11.jpg" },
            { name: "Mine Tugay", emoji: "💃", file: "kızoyuncu_12.webp" },
            { name: "Angelina Jolie", emoji: "💃", file: "kızoyuncu_13.jpg" },
            { name: "Anya Taylor-Joy", emoji: "💃", file: "kızoyuncu_14.jpg" },
            { name: "Sydney Sweeney", emoji: "💃", file: "kızoyuncu_15.jpg" },
            { name: "Hazar Ergüçlü", emoji: "💃", file: "kızoyuncu_16.jpg" },
            { name: "Jenna Ortega", emoji: "💃", file: "kızoyuncu_17.jpg" },
            { name: "Megan Fox", emoji: "💃", file: "kızoyuncu_18.jpg" },
            { name: "Nilperi Şahinkaya", emoji: "💃", file: "kızoyuncu_19.jpg" },
            { name: "Hande Erçel", emoji: "💃", file: "kızoyuncu_20.jpg" },
            { name: "Hazal Kaya", emoji: "💃", file: "kızoyuncu_21.jpg" },
            { name: "Nilsu Berfin Aktaş", emoji: "💃", file: "kızoyuncu_22.jpg" },
            { name: "Penélope Cruz", emoji: "💃", file: "kızoyuncu_23.avif" },
            { name: "Gal Gadot", emoji: "💃", file: "kızoyuncu_24.jpg" },
            { name: "Meryem Uzerli", emoji: "💃", file: "kızoyuncu_25.jpg" },
            { name: "Ezgi Mola", emoji: "💃", file: "kızoyuncu_27.jpg" },
            { name: "Pınar Deniz", emoji: "💃", file: "kızoyuncu_28.jpg" },
            { name: "Farah Zeynep Abdullah", emoji: "💃", file: "kızoyuncu_29.jpg" },
            { name: "Öykü Karayel", emoji: "💃", file: "kızoyuncu_30.jpg" },
            { name: "Jennifer Aniston", emoji: "💃", file: "kızoyuncu_31.jpg" },
            { name: "Anya Taylor-Joy", emoji: "💃", file: "kızoyuncu_32.jpg" },
            { name: "Zendaya", emoji: "💃", file: "kızoyuncu_33.jpg" },
            { name: "Margot Robbie", emoji: "💃", file: "kızoyuncu_34.jpg" },
            { name: "elcin zehra", emoji: "💃", file: "kızoyuncu_35.jpg" }
        ]
    },
    oyun: {
        name: "Oyunlar", icon: "🎮", color: "#22d3ee",
        items: [
            { name: "God of War", emoji: "🪓", file: "oyunlar1.jpg" },
            { name: "Minecraft", emoji: "⛏️", file: "oyunlar2.jpg" },
            { name: "CS:GO", emoji: "🔫", file: "oyunlar3.jpg" },
            { name: "League of Legends", emoji: "🧙", file: "oyunlar4.jpg" },
            { name: "Forza Horizon 5", emoji: "🏎️", file: "oyunlar5.jpg" },
            { name: "Cyberpunk 2077", emoji: "🦾", file: "oyunlar6.jpg" },
            { name: "Apex Legends", emoji: "🔺", file: "oyunlar7.jpg" },
            { name: "Fortnite", emoji: "🚌", file: "oyunlar8.jpg" },
            { name: "Chivalry 2", emoji: "⚔️", file: "oyunlar9.jpg" },
            { name: "Valorant", emoji: "🎯", file: "oyunlar10.jpg" },
            { name: "Roblox", emoji: "🧱", file: "oyunlar11.jpg" },
            { name: "PUBG Mobile", emoji: "🪂", file: "oyunlar12.jpg" },
            { name: "BioShock", emoji: "🌊", file: "oyunlar13.jpg" },
            { name: "Elden Ring", emoji: "💍", file: "oyunlar14.jpg" },
            { name: "Doom Eternal", emoji: "👹", file: "oyunlar15.jpg" },
            { name: "S.T.A.L.K.E.R. 2", emoji: "☢️", file: "oyunlar16.jpg" },
            { name: "Baldur's Gate 3", emoji: "🐉", file: "oyunlar17.jpg" },
            { name: "Grand Theft Auto V", emoji: "🚗", file: "oyunlar18.jpg" },
            { name: "Battlefield V", emoji: "💥", file: "oyunlar19.jpg" },
            { name: "Resident Evil 2", emoji: "🧟", file: "oyunlar20.jpg" },
            { name: "Halo", emoji: "👨‍🚀", file: "oyunlar21.jpg" },
            { name: "CoD: Modern Warfare III", emoji: "🎖️", file: "oyunlar22.jpg" },
            { name: "Mafia III", emoji: "🕴️", file: "oyunlar23.jpg" },
            { name: "Forza Horizon 6", emoji: "🏎️", file: "oyunlar24.jpg" },
            { name: "Mount & Blade: Warband", emoji: "🐴", file: "oyunlar25.jpg" },
            { name: "Mobile Legends", emoji: "📱", file: "oyunlar26.jpg" },
            { name: "uncherted", emoji: "📱", file: "oyunlar27.jpg" },
            { name: "outlas tirilas", emoji: "📱", file: "oyunlar28.jpg" },
            { name: "palworld", emoji: "📱", file: "oyunlar29.jpg" },
            { name: "ark survıval evolved", emoji: "📱", file: "oyunlar30.jpg" }
        ]
    },
    diziler: {
        name: "Diziler", icon: "📺", color: "#a855f7",
        items: [
            { name: "Kurtlar Vadisi", emoji: "🐺", file: "dizi_01.jpg" },
            { name: "Yasak Elma", emoji: "🍎", file: "dizi_02.jpg" },
            { name: "Behzat Ç", emoji: "🚬", file: "dizi_03.jpg" },
            { name: "Leyla ile Mecnun", emoji: "❤️", file: "dizi_04.jpg" },
            { name: "Arka Sokaklar", emoji: "🚓", file: "dizi_05.jpg" },
            { name: "Dexter", emoji: "🔪", file: "dizi_07.jpg" },
            { name: "Stranger Things", emoji: "👾", file: "dizi_08.jpg" },
            { name: "The Office", emoji: "📎", file: "dizi_09.jpg" },
            { name: "Game of Thrones", emoji: "🐉", file: "dizi_10.jpg" },
            { name: "Prison Break", emoji: "🔓", file: "dizi_11.jpg" },
            { name: "Supernatural", emoji: "😈", file: "dizi_12.jpg" },
            { name: "Breaking Bad", emoji: "🧪", file: "dizi_13.jpg" },
            { name: "Sherlock", emoji: "🔍", file: "dizi_14.jpg" },
            { name: "Mr. Robot", emoji: "💻", file: "dizi_15.jpg" },
            { name: "Vikings", emoji: "🪓", file: "dizi_16.jpg" },
            { name: "black miror", emoji: "🪓", file: "dizi_17.jpg" },
            { name: "ricky and morty", emoji: "🪓", file: "dizi_18.jpg" },
            { name: "avatar son hava büküçü", emoji: "🪓", file: "dizi_19.jpg" },
            { name: "eşref rüya", emoji: "🪓", file: "dizi_20.jpg" }
        ]
    },
    filmler: {
        name: "Filmler", icon: "🎬", color: "#facc15",
        items: [
            { name: "Tosun Paşa", emoji: "👳", file: "flim_01.jpg" },
            { name: "Bekçiler Kralı", emoji: "👮", file: "flim_02.jpg" },
            { name: "Vizontele Tuuba", emoji: "📺", file: "flim_03.jpg" },
            { name: "Hokkabaz", emoji: "🎩", file: "flim_04.jpg" },
            { name: "Organize İşler Sazan Sarmalı", emoji: "😎", file: "flim_05.jpg" },
            { name: "Yüzüklerin Efendisi Kralın Dönüşü", emoji: "💍", file: "flim_06.jpg" },
            { name: "Esaretin Bedeli", emoji: "🔑", file: "flim_07.jpg" },
            { name: "Baba", emoji: "🤵", file: "flim_08.jpg" },
            { name: "Kara Şövalye", emoji: "🦇", file: "flim_09.jpg" },
            { name: "Dövüş Kulübü", emoji: "👊", file: "flim_10.jpg" },
            { name: "Yeşil Yol", emoji: "🟢", file: "flim_11.jpg" },
            { name: "Prestij", emoji: "✨", file: "flim_12.jpg" },
            { name: "Matrix", emoji: "💊", file: "flim_13.jpg" },
            { name: "Geleceğe Dönüş", emoji: "🚗", file: "flim_14.jpg" },
            { name: "Yıldızlararası", emoji: "🌌", file: "flim_15.jpg" },
            { name: "Terminatör", emoji: "🤖", file: "flim_16.jpg" },
            { name: "Can Dostum", emoji: "❤️", file: "flim_17.jpg" },
            { name: "Avengers Sonsuzluk Savaşı", emoji: "💥", file: "flim_18.jpg" },
            { name: "Dangal", emoji: "🤼", file: "flim_19.jpg" },
            { name: "V for Vendetta", emoji: "🎭", file: "flim_20.jpg" },
            { name: "Karayip Korsanları", emoji: "🏴‍☠️", file: "flim_21.jpg" },
            { name: "Hababam Sınıfı", emoji: "🎓", file: "flim_22.jpg" },
            { name: "Kuzuların Sessizliği", emoji: "🦋", file: "flim_23.jpg" },
            { name: "X-Men Geçmiş Günler Gelecek", emoji: "⚡", file: "flim_24.jpg" },
            { name: "Ip Man", emoji: "🥋", file: "flim_25.jpg" }
        ]
    }
};

const blurLevels = [
    { blur: 32, brightness: 0.7, points: 1000, label: "%10 - Çok Bulanık", quality: 20, color: "linear-gradient(90deg,#ef4444,#f59e0b)" },
    { blur: 20, brightness: 0.8, points: 700, label: "%30 - Bulanık", quality: 40, color: "linear-gradient(90deg,#f59e0b,#eab308)" },
    { blur: 12, brightness: 0.9, points: 400, label: "%55 - Orta", quality: 60, color: "linear-gradient(90deg,#eab308,#22c55e)" },
    { blur: 5, brightness: 1, points: 200, label: "%80 - Netleşiyor", quality: 80, color: "linear-gradient(90deg,#22c55e,#06b6d4)" },
    { blur: 0, brightness: 1, points: 50, label: "%100 - Tam Net", quality: 100, color: "linear-gradient(90deg,#06b6d4,#8b5cf6)" }
];

let blurSelectedCategory = null;
let blurSelectedCount = 10;
let blurQuestions = [];
let blurCurrentQ = 0;
let blurTotalScore = 0;
let blurCurrentLevel = 0;
let blurCorrectCount = 0;
let blurHistory = [];
let blurHintUsed = false;

window.goToBlurCategorySelect = function () {
    const grid = document.getElementById('blurCategoryGrid');
    grid.innerHTML = Object.entries(blurCategories).map(([id, cat], idx) => {
        const best = localStorage.getItem('blur_best_' + id) || 0;
        return `<div class="category-card category-card--${id}" data-fav-grid="blur" data-fav-id="${id}" data-fav="${isFav('blur', id) ? 1 : 0}" data-orig-order="${idx}" onclick="selectBlurCategory('${id}')" id="blurCat_${id}"><div class="category-icon">${cat.icon}</div><div class="category-title">${cat.name}${favHeart('blur', id)}</div><div class="category-subtitle">${cat.items.length} görsel</div>${best > 0 ? `<div style="margin-top:6px;color:#facc15;font-size:11px;font-weight:700">🏆 En iyi: ${best}</div>` : ''}</div>`;
    }).join('');
    resortFavGrid(grid);
    hideAllMainScreens();
    document.getElementById('blurCategoryScreen').style.display = 'block';
    document.getElementById('blurCategoryNextBtn').disabled = true;
    blurSelectedCategory = null;
    changeTheme('space');
};

window.selectBlurCategory = function (id) {
    document.querySelectorAll('#blurCategoryGrid .category-card').forEach(c => c.classList.remove('selected'));
    const el = document.getElementById('blurCat_' + id);
    if (el) el.classList.add('selected');
    blurSelectedCategory = id;
    document.getElementById('blurCategoryNextBtn').disabled = false;
    const cat = blurCategories[id];
    document.getElementById('blurMaxLabel').textContent = '/ max ' + cat.items.length;
    document.getElementById('blurCountInput').max = cat.items.length;
    document.getElementById('blurCountInput').value = Math.min(10, cat.items.length);
    document.getElementById('blurCountSub').textContent = `${cat.name} - ${cat.items.length} görsel mevcut • Kaç soru oynamak istersin?`;
    changeTheme(id);
};

window.goToBlurCount = function () {
    if (!blurSelectedCategory) return;
    hideAllMainScreens();
    document.getElementById('blurCountScreen').style.display = 'block';
};

window.goBackToBlurCategory = function () {
    hideAllMainScreens();
    document.getElementById('blurCategoryScreen').style.display = 'block';
};

window.goBackToModeFromBlur = function () {
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};

window.validateBlurCount = function () {
    const inp = document.getElementById('blurCountInput');
    const err = document.getElementById('blurCountErr');
    const v = parseInt(inp.value);
    const max = blurCategories[blurSelectedCategory]?.items.length || 45;
    if (!v || v < 1) { err.textContent = 'En az 1 soru seç!'; return false; }
    if (v > max) { err.textContent = 'Maksimum ' + max + '!'; return false; }
    err.textContent = '';
    return true;
};

window.startBlurGame = function () {
    if (!validateBlurCount()) return;
    if (!blurSelectedCategory) return;
    const cat = blurCategories[blurSelectedCategory];
    let pool = [...cat.items];
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[pool[i], pool[j]] = [pool[j], pool[i]]; }
    blurSelectedCount = parseInt(document.getElementById('blurCountInput').value);
    blurQuestions = pool.slice(0, Math.min(blurSelectedCount, pool.length));
    blurCurrentQ = 0; blurTotalScore = 0; blurCorrectCount = 0; blurHistory = [];
    isInTest = true; stopBgMusic();
    document.getElementById('blurGameCatBadge').innerHTML = `${cat.icon} ${cat.name}`;
    document.getElementById('blurLevels').innerHTML = blurLevels.map((_, i) => `<div class="blur-dot" id="blurDot${i}"></div>`).join('');
    hideAllMainScreens();
    document.getElementById('blurGameScreen').style.display = 'block';
    loadBlurQuestion();
};

function loadBlurQuestion() {
    if (blurCurrentQ >= blurQuestions.length) { finishBlurGame(); return; }
    const q = blurQuestions[blurCurrentQ];
    blurCurrentLevel = 0; blurHintUsed = false;
    document.getElementById('blurGameQBadge').textContent = `Soru ${blurCurrentQ + 1} / ${blurQuestions.length}`;
    document.getElementById('blurTotalScore').textContent = blurTotalScore;
    document.getElementById('blurGuessInput').value = '';
    const fb = document.getElementById('blurFeedback'); fb.className = 'blur-feedback'; fb.style.display = 'none';
    document.getElementById('blurSuggestions').classList.remove('show');
    document.getElementById('blurHintBtn').disabled = false;
    document.getElementById('blurGuessBtn').disabled = false;
    document.getElementById('blurProgressDots').innerHTML = blurQuestions.map((_, i) => {
        let cls = 'blur-p-dot';
        if (i < blurCurrentQ) cls += blurHistory[i]?.correct ? ' done' : ' fail';
        if (i === blurCurrentQ) cls += ' current';
        return `<div class="${cls}"></div>`;
    }).join('');

    const imgEl = document.getElementById('blurGameImage');
    const phEl = document.getElementById('blurPhotoPlaceholder');
    const frame = document.getElementById('blurPhotoFrame');
    frame.classList.add('loading');
    imgEl.style.filter = `blur(${blurLevels[0].blur}px) brightness(${blurLevels[0].brightness})`;
    phEl.style.filter = `blur(${blurLevels[0].blur / 2}px)`;
    imgEl.style.opacity = '0'; phEl.style.opacity = '0';
    document.getElementById('blurQualityText').textContent = `Kalite: ${blurLevels[0].label}`;
    document.getElementById('blurPointsText').textContent = `${blurLevels[0].points} Puan`;
    document.getElementById('blurCurrentPointsVal').textContent = blurLevels[0].points;
    document.getElementById('blurQualityFill').style.width = blurLevels[0].quality + '%';
    document.getElementById('blurQualityFill').style.background = blurLevels[0].color;

    setTimeout(() => {
        let imgUrl;
        if (q.file) { imgUrl = q.file; }
        else {
            const seed = encodeURIComponent(q.name + blurSelectedCategory + '_' + blurCurrentQ);
            imgUrl = `https://picsum.photos/seed/${seed}/600/600`;
        }
        imgEl.style.display = 'block'; phEl.style.display = 'none';
        imgEl.onload = () => {
            frame.classList.remove('loading');
            imgEl.style.opacity = '1'; phEl.style.opacity = '1';
            applyBlurBlur();
        };
        imgEl.onerror = () => {
            frame.classList.remove('loading');
            imgEl.style.display = 'none'; phEl.style.display = 'flex';
            document.getElementById('blurPlaceholderEmoji').textContent = q.emoji;
            document.getElementById('blurPlaceholderLabel').textContent = q.name.charAt(0) + '***';
            phEl.style.opacity = '1';
            applyBlurBlur();
        };
        imgEl.src = imgUrl;
    }, 120);
}

function applyBlurBlur() {
    const lvl = blurLevels[blurCurrentLevel];
    const imgEl = document.getElementById('blurGameImage');
    const phEl = document.getElementById('blurPhotoPlaceholder');
    const filter = `blur(${lvl.blur}px) brightness(${lvl.brightness})`;
    if (imgEl.style.display !== 'none') imgEl.style.filter = filter;
    if (phEl.style.display !== 'none') phEl.style.filter = `blur(${lvl.blur / 2}px)`;
    document.getElementById('blurQualityText').textContent = `Kalite: ${lvl.label}`;
    document.getElementById('blurPointsText').textContent = `${lvl.points} Puan`;
    document.getElementById('blurCurrentPointsVal').textContent = lvl.points;
    document.getElementById('blurQualityFill').style.width = lvl.quality + '%';
    document.getElementById('blurQualityFill').style.background = lvl.color;
    blurLevels.forEach((_, i) => {
        const dot = document.getElementById('blurDot' + i);
        if (!dot) return;
        dot.className = 'blur-dot';
        if (i < blurCurrentLevel) dot.classList.add('used');
        if (i === blurCurrentLevel) dot.classList.add('active');
    });
    document.getElementById('blurAttemptInfo').textContent = `${blurCurrentLevel + 1}. TAHMİN HAKKI • ${lvl.label.toUpperCase()}`;
}

function normalizeBlur(str) {
    return str.toLowerCase().replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ç/g, 'c').replace(/[^a-z0-9 ]/g, '').trim();
}
function levenshteinBlur(a, b) {
    const matrix = []; for (let i = 0; i <= b.length; i++) matrix[i] = [i]; for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) { for (let j = 1; j <= a.length; j++) { if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1]; else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1); } }
    return matrix[b.length][a.length];
}
function checkBlurAnswer(guess, answer) {
    const g = normalizeBlur(guess); const a = normalizeBlur(answer);
    if (!g) return false; if (g === a) return true;
    if (a.includes(g) && g.length >= 3) return true;
    if (g.includes(a) && a.length >= 3) return true;
    const aWords = a.split(' '); if (aWords.some(w => w === g && w.length >= 3)) return true;
    if (levenshteinBlur(g, a) <= 2 && Math.max(g.length, a.length) > 4) return true;
    if (aWords.length > 1) { const first = aWords[0]; if (g === first) return true; if (levenshteinBlur(g, first) <= 1 && first.length > 3) return true; }
    return false;
}

window.onBlurInputChange = function () {
    const val = document.getElementById('blurGuessInput').value.toLowerCase();
    const sugBox = document.getElementById('blurSuggestions');
    if (val.length < 2) { sugBox.classList.remove('show'); return; }
    const cat = blurCategories[blurSelectedCategory];
    const matches = cat.items.filter(it => normalizeBlur(it.name).includes(normalizeBlur(val))).slice(0, 5);
    if (matches.length === 0) { sugBox.classList.remove('show'); return; }
    sugBox.innerHTML = matches.map(m => `<div class="blur-sugg-item" onclick="pickBlurSuggestion('${m.name.replace(/'/g, "\\'")}')">${m.emoji} ${m.name}</div>`).join('');
    sugBox.classList.add('show');
};
window.pickBlurSuggestion = function (name) {
    document.getElementById('blurGuessInput').value = name;
    document.getElementById('blurSuggestions').classList.remove('show');
    submitBlurGuess();
};
function showBlurFeedback(msg, type) {
    const fb = document.getElementById('blurFeedback'); fb.textContent = msg; fb.className = 'blur-feedback show ' + type; fb.style.display = 'block';
}

window.submitBlurGuess = function () {
    const guess = document.getElementById('blurGuessInput').value.trim();
    if (!guess) { showBlurFeedback('⚠️ Bir tahmin yaz!', 'info'); return; }
    const q = blurQuestions[blurCurrentQ];
    if (checkBlurAnswer(guess, q.name)) {
        const points = blurLevels[blurCurrentLevel].points - (blurHintUsed ? 100 : 0);
        const finalPoints = Math.max(points, 10);
        blurTotalScore += finalPoints; blurCorrectCount++;
        blurHistory.push({ name: q.name, correct: true, level: blurCurrentLevel, points: finalPoints });
        document.getElementById('blurResultEmoji').textContent = blurCurrentLevel === 0 ? '🔥' : '✅';
        document.getElementById('blurResultCard').className = 'blur-result-card correct';
        document.getElementById('blurResultTitle').textContent = blurCurrentLevel === 0 ? 'EFSANE!' : blurCurrentLevel === 1 ? 'SÜPER!' : 'Doğru!';
        document.getElementById('blurResultName').textContent = q.name;
        document.getElementById('blurResultPoints').textContent = `+${finalPoints} Puan`;
        const msgs = ['İnanılmaz! En bulanık halde bildin!', 'Süper! Çok erken bildin!', 'Güzel! Orta seviyede bildin.', 'Doğru! Biraz zorlandın ama bildin.', 'Son anda bildin!'];
        document.getElementById('blurResultDesc').textContent = msgs[blurCurrentLevel];
        document.getElementById('blurResultOverlay').classList.add('show');
        document.getElementById('blurGameImage').style.filter = 'blur(0px) brightness(1)';
        document.getElementById('blurPhotoPlaceholder').style.filter = 'blur(0px)';
        document.getElementById('blurGameImage').style.opacity = '1';
        document.getElementById('blurPhotoPlaceholder').style.opacity = '1';
        document.getElementById('blurPhotoFrame').classList.remove('loading');
        if (soundEnabled) playCorrectSound();
    } else {
        blurCurrentLevel++;
        if (blurCurrentLevel >= blurLevels.length) {
            blurHistory.push({ name: q.name, correct: false, level: blurLevels.length, points: 0 });
            document.getElementById('blurResultEmoji').textContent = '❌';
            document.getElementById('blurResultCard').className = 'blur-result-card wrong';
            document.getElementById('blurResultTitle').textContent = 'Bilemedin!';
            document.getElementById('blurResultName').textContent = q.name;
            document.getElementById('blurResultPoints').textContent = '+0 Puan';
            document.getElementById('blurResultDesc').textContent = `Doğru cevap: ${q.name}`;
            document.getElementById('blurResultOverlay').classList.add('show');
            document.getElementById('blurGameImage').style.filter = 'blur(0px) brightness(1)';
            document.getElementById('blurPhotoPlaceholder').style.filter = 'blur(0px)';
            document.getElementById('blurGameImage').style.opacity = '1';
            document.getElementById('blurPhotoPlaceholder').style.opacity = '1';
            document.getElementById('blurPhotoFrame').classList.remove('loading');
            if (soundEnabled) playWrongSound();
        } else {
            showBlurFeedback(`❌ Yanlış! Görsel netleşiyor... Kalan hak: ${blurLevels.length - blurCurrentLevel}`, 'wrong');
            document.getElementById('blurGuessInput').value = '';
            applyBlurBlur();
            const frame = document.getElementById('blurPhotoFrame'); frame.style.animation = 'shake 0.4s ease'; setTimeout(() => frame.style.animation = '', 400);
            if (soundEnabled) playWrongSound();
        }
    }
};

window.useBlurHint = function () {
    const q = blurQuestions[blurCurrentQ]; const name = q.name;
    const hint = name.charAt(0) + '*'.repeat(Math.max(name.length - 2, 1)) + name.charAt(name.length - 1);
    showBlurFeedback(`💡 İpucu: ${hint} • Puan -100`, 'info');
    blurHintUsed = true; document.getElementById('blurHintBtn').disabled = true;
    if (!document.getElementById('blurGuessInput').value) document.getElementById('blurGuessInput').value = name.charAt(0);
};

window.skipBlurQuestion = function () {
    const q = blurQuestions[blurCurrentQ];
    blurHistory.push({ name: q.name, correct: false, level: 99, points: 0 });
    document.getElementById('blurResultEmoji').textContent = '⏭️';
    document.getElementById('blurResultCard').className = 'blur-result-card wrong';
    document.getElementById('blurResultTitle').textContent = 'Pas Geçildi';
    document.getElementById('blurResultName').textContent = q.name;
    document.getElementById('blurResultPoints').textContent = '+0 Puan';
    document.getElementById('blurResultDesc').textContent = `Doğru cevap: ${q.name}`;
    document.getElementById('blurResultOverlay').classList.add('show');
    document.getElementById('blurGameImage').style.filter = 'blur(0px) brightness(1)';
    document.getElementById('blurPhotoPlaceholder').style.filter = 'blur(0px)';
    document.getElementById('blurGameImage').style.opacity = '1';
    document.getElementById('blurPhotoPlaceholder').style.opacity = '1';
};

window.nextBlurQuestion = function () {
    const frame = document.getElementById('blurPhotoFrame');
    const imgEl = document.getElementById('blurGameImage');
    const phEl = document.getElementById('blurPhotoPlaceholder');
    frame.classList.add('loading'); imgEl.style.opacity = '0'; phEl.style.opacity = '0';
    document.getElementById('blurResultOverlay').classList.remove('show');
    setTimeout(() => { blurCurrentQ++; loadBlurQuestion(); }, 200);
};

function finishBlurGame() {
    isInTest = false; if (soundEnabled) startBgMusic();
    document.getElementById('blurGameScreen').style.display = 'none';
    document.getElementById('blurFinalScreen').style.display = 'block';
    const cat = blurCategories[blurSelectedCategory];
    document.getElementById('blurFinalCat').textContent = `${cat.icon} ${cat.name} • ${blurQuestions.length} Soru`;
    document.getElementById('blurFinalScore').textContent = blurTotalScore;
    document.getElementById('blurFinalCorrect').textContent = `${blurCorrectCount}/${blurQuestions.length}`;
    document.getElementById('blurFinalAvg').textContent = blurQuestions.length ? Math.round(blurTotalScore / blurQuestions.length) : 0;
    const bestKey = 'blur_best_' + blurSelectedCategory;
    const prevBest = parseInt(localStorage.getItem(bestKey) || '0');
    if (blurTotalScore > prevBest) localStorage.setItem(bestKey, blurTotalScore);
    // puan ekle rank sistemine
    const pts = Math.floor(blurTotalScore / 100);
    totalRankPoints += pts; localStorage.setItem('matex_totalPoints', totalRankPoints); updateRankDisplay();
    document.getElementById('blurFinalList').innerHTML = blurHistory.map((h, i) => {
        const icon = h.correct ? '✅' : '❌'; const lvlText = h.level === 99 ? 'Pas' : h.level >= 5 ? 'Bilemedi' : `Seviye ${h.level + 1}`; const color = h.correct ? '#4ade80' : '#f87171';
        return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)"><div style="display:flex;gap:10px;align-items:center"><span>${icon}</span><span style="font-weight:700">${i + 1}. ${h.name}</span><span style="font-size:11px;color:#8a8ab0">${lvlText}</span></div><span style="color:${color};font-weight:800">+${h.points}</span></div>`;
    }).join('');
    changeTheme(blurSelectedCategory);
}

window.replayBlurCategory = function () { goToBlurCount(); };
window.goBackToBlurCategoryFromFinal = function () {
    hideAllMainScreens(); document.getElementById('blurCategoryScreen').style.display = 'block'; changeTheme('space');
};
window.exitBlurToCategories = function () {
    exitTarget = 'blur';
    document.querySelector('.exit-confirm-box h3').textContent = '🚪 Oyundan Çık';
    document.querySelector('.exit-confirm-box p').textContent = 'Oyundan çıkmak istediğinize emin misiniz? Skorunuz kaybolacak.';
    document.getElementById('exitConfirmModal').style.display = 'flex';
};

// mağaza
const DEFAULT_MUSIC_NOTES = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 349.23, 440.00, 523.25, 440.00, 349.23, 329.63];
const SHOP_CATEGORIES = [
    { id: 'avatar', icon: '👤', name: 'Avatar' },
    { id: 'nameColor', icon: '🎨', name: 'İsim Rengi' },
    { id: 'frame', icon: '🖼️', name: 'Profil Çerçevesi' },
    { id: 'theme', icon: '🌌', name: 'Özel Tema' },
    { id: 'music', icon: '🎵', name: 'Arka Plan Müziği' }
];
const SHOP_ITEMS = {
    avatar: [
        { id: 'av_fox', emoji: '🦊', name: 'Tilki', price: 40, tier: 1 },
        { id: 'av_panda', emoji: '🐼', name: 'Panda', price: 60, tier: 1 },
        { id: 'av_astronaut', emoji: '👨‍🚀', name: 'Astronot', price: 90, tier: 2 },
        { id: 'av_ninja', emoji: '🥷', name: 'Ninja', price: 120, tier: 2 },
        { id: 'av_robot', emoji: '🤖', name: 'Robot', price: 160, tier: 3 },
        { id: 'av_dragon', emoji: '🐉', name: 'Ejderha', price: 250, tier: 4 },
        { id: 'av_crown', emoji: '👑', name: 'Altın Taç', price: 350, tier: 5 },
        { id: 'av_unicorn', emoji: '🦄', name: 'Tek Boynuz', price: 500, tier: 6 }
    ],
    nameColor: [
        { id: 'nc_gray', name: 'Gri', color: '#9ca3af', price: 25, tier: 1 },
        { id: 'nc_blue', name: 'Mavi', color: '#00d2ff', price: 50, tier: 1 },
        { id: 'nc_green', name: 'Neon Yeşil', color: '#4ade80', price: 90, tier: 2 },
        { id: 'nc_pink', name: 'Pembe', color: '#ff6bcb', price: 130, tier: 3 },
        { id: 'nc_gold', name: 'Altın', color: '#ffd700', price: 260, tier: 4 },
        { id: 'nc_rainbow', name: 'Gökkuşağı', rainbow: true, price: 600, tier: 6 }
    ],
    frame: [
        { id: 'fr_silver', name: 'Gümüş', price: 60, tier: 1 },
        { id: 'fr_blue', name: 'Safir Mavi', price: 120, tier: 2 },
        { id: 'fr_gold', name: 'Altın', price: 200, tier: 3 },
        { id: 'fr_neon', name: 'Neon', price: 300, tier: 4 },
        { id: 'fr_diamond', name: 'Elmas', price: 450, tier: 5 },
        { id: 'fr_rainbow', name: 'Gökkuşağı', price: 600, tier: 6 }
    ],
    theme: [
        { id: 'th_sunset', name: 'Gün Batımı', price: 80, tier: 1, bg: 'linear-gradient(135deg,#2d1b4e,#7b2d26,#f59e0b)' },
        { id: 'th_ocean', name: 'Okyanus', price: 100, tier: 2, bg: 'linear-gradient(135deg,#021b33,#0b4f6c,#38bdf8)' },
        { id: 'th_forest', name: 'Orman', price: 120, tier: 2, bg: 'linear-gradient(135deg,#052e16,#166534,#84cc16)' },
        { id: 'th_neon', name: 'Neon Şehir', price: 250, tier: 4, bg: 'linear-gradient(135deg,#0f0c29,#302b63,#ff00cc)' },
        { id: 'th_galaxy', name: 'Galaksi', price: 400, tier: 5, bg: 'linear-gradient(135deg,#0b0014,#3b0764,#7c3aed)' },
        { id: 'th_rainbow', name: 'Gökkuşağı', price: 600, tier: 6, bg: 'linear-gradient(135deg,#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#8b00ff)' }
    ],
    music: [
        { id: 'mu_happy', name: 'Neşeli', price: 60, tier: 1, notes: [523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 659.25, 783.99, 880.00], interval: 300 },
        { id: 'mu_mystery', name: 'Gizemli', price: 140, tier: 2, notes: [220.00, 233.08, 246.94, 261.63, 246.94, 233.08, 220.00, 196.00, 174.61, 196.00], interval: 600 },
        { id: 'mu_epic', name: 'Epik', price: 220, tier: 3, notes: [130.81, 196.00, 261.63, 329.63, 392.00, 329.63, 261.63, 196.00, 261.63, 329.63, 392.00, 523.25], interval: 450 },
        { id: 'mu_retro', name: 'Retro Oyun', price: 300, tier: 4, notes: [392.00, 392.00, 523.25, 392.00, 659.25, 587.33, 392.00, 659.25, 783.99, 659.25], interval: 260 },
        { id: 'mu_royal', name: 'Kraliyet', price: 500, tier: 5, notes: [261.63, 293.66, 329.63, 392.00, 329.63, 293.66, 261.63, 329.63, 392.00, 440.00, 523.25, 440.00], interval: 500 }
    ]
};

let shopOwned = [];
let shopActive = { avatar: null, nameColor: null, frame: null, theme: null, music: null };
let shopCurrentTab = 'avatar';

function loadShopState() {
    try { shopOwned = JSON.parse(localStorage.getItem('matex_owned') || '[]'); } catch (e) { shopOwned = []; }
    if (!Array.isArray(shopOwned)) shopOwned = [];
    try { shopActive = JSON.parse(localStorage.getItem('matex_active') || 'null'); } catch (e) { shopActive = null; }
    if (!shopActive || typeof shopActive !== 'object') shopActive = { avatar: null, nameColor: null, frame: null, theme: null, music: null };
}
function saveShopState() {
    try { localStorage.setItem('matex_owned', JSON.stringify(shopOwned)); localStorage.setItem('matex_active', JSON.stringify(shopActive)); } catch (e) { }
}
function isOwned(id) { return shopOwned.indexOf(id) !== -1; }
function getShopItem(cat, id) {
    const list = SHOP_ITEMS[cat] || [];
    for (let i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
}
function getActiveShopItem(cat) { return getShopItem(cat, shopActive[cat]); }
function spendPoints(p) {
    totalRankPoints -= p;
    if (totalRankPoints < 0) totalRankPoints = 0;
    localStorage.setItem('matex_totalPoints', totalRankPoints);
    updateRankDisplay();
}
function tierStars(t) { let st = ''; for (let i = 0; i < t; i++) st += '★'; return st; }

window.openShop = function () {
    shopCurrentTab = 'avatar';
    renderShop();
    document.getElementById('shopModal').classList.add('open');
    playClickSound();
};
window.closeShop = function () { document.getElementById('shopModal').classList.remove('open'); };

function renderShop() {
    const pts = document.getElementById('shopPointsDisplay');
    if (pts) pts.textContent = totalRankPoints;
    const tabs = document.getElementById('shopTabs');
    if (tabs && !tabs.childElementCount) {
        tabs.innerHTML = SHOP_CATEGORIES.map(function (c) {
            return '<div class="shop-tab" data-cat="' + c.id + '" onclick="shopSelectTab(\'' + c.id + '\')">' + c.icon + ' ' + c.name + '</div>';
        }).join('');
    }
    if (tabs) {
        tabs.querySelectorAll('.shop-tab').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-cat') === shopCurrentTab); });
    }
    const items = SHOP_ITEMS[shopCurrentTab] || [];
    const box = document.getElementById('shopItems');
    box.innerHTML = items.map(function (it) {
        const owned = isOwned(it.id);
        const active = shopActive[shopCurrentTab] === it.id;
        let preview = '';
        if (shopCurrentTab === 'avatar') preview = '<div class="shop-prev-avatar">' + it.emoji + '</div>';
        else if (shopCurrentTab === 'nameColor') preview = '<div class="shop-prev-name" style="color:' + (it.rainbow ? '#fff' : it.color) + (it.rainbow ? ';background:linear-gradient(90deg,red,orange,yellow,green,blue,violet);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent' : '') + '">Aa İsim</div>';
        else if (shopCurrentTab === 'frame') preview = '<div class="shop-prev-frame shop-frame-' + it.id + '">👤</div>';
        else if (shopCurrentTab === 'theme') preview = '<div class="shop-prev-theme" style="background:' + it.bg + '"></div>';
        else preview = '<div class="shop-prev-music">🎵</div>';
        let action = '';
        if (owned) {
            if (active) action = '<button class="shop-btn active" onclick="shopDeactivate(\'' + shopCurrentTab + '\')">✅ Aktif (Kapat)</button>';
            else action = '<button class="shop-btn own" onclick="shopActivate(\'' + shopCurrentTab + '\',\'' + it.id + '\')">▶ Aktifleştir</button>';
        } else {
            const afford = totalRankPoints >= it.price;
            action = '<button class="shop-btn buy' + (afford ? '' : ' disabled') + '" ' + (afford ? 'onclick="shopBuy(\'' + shopCurrentTab + '\',\'' + it.id + '\')"' : 'disabled') + '>🔓 ' + it.price + ' P</button>';
        }
        return '<div class="shop-item' + (owned ? ' owned' : '') + (active ? ' active' : '') + '">' +
            '<div class="shop-item-tier">' + tierStars(it.tier) + '</div>' +
            preview +
            '<div class="shop-item-name">' + it.name + '</div>' +
            '<div class="shop-item-price">⭐ ' + it.price + ' Puan</div>' +
            action +
            '</div>';
    }).join('');
}

window.shopSelectTab = function (cat) {
    shopCurrentTab = cat;
    renderShop();
    playClickSound();
};
window.shopBuy = function (cat, id) {
    const it = getShopItem(cat, id);
    if (!it || isOwned(id)) return;
    if (totalRankPoints < it.price) { playWrongSound(); return; }
    spendPoints(it.price);
    shopOwned.push(id);
    saveShopState();
    renderShop();
    playCorrectSound();
};
window.shopActivate = function (cat, id) {
    if (!isOwned(id)) return;
    shopActive[cat] = id;
    saveShopState();
    applyShopCustomizations();
    renderShop();
    playClickSound();
};
window.shopDeactivate = function (cat) {
    shopActive[cat] = null;
    saveShopState();
    applyShopCustomizations();
    renderShop();
    playClickSound();
};

function applyShopAvatar() {
    const it = getActiveShopItem('avatar');
    const preview = document.getElementById('avatarPreview');
    if (it) {
        secilenAvatar = it.emoji;
        uploadedImage = null;
        if (preview) preview.textContent = it.emoji;
    }
}
function applyShopNameColor() {
    const it = getActiveShopItem('nameColor');
    ['testUserName', 'photoTestUserName'].forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('name-rainbow');
        if (!it) { el.style.color = '#00d2ff'; return; }
        if (it.rainbow) { el.style.color = ''; el.classList.add('name-rainbow'); }
        else el.style.color = it.color;
    });
}
function applyShopFrame() {
    const it = getActiveShopItem('frame');
    ['avatarPreview', 'testUserAvatar', 'photoTestUserAvatar'].forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.forEach(function (c) { if (c.indexOf('shop-frame-') === 0) el.classList.remove(c); });
        if (it) el.classList.add('shop-frame-' + it.id);
    });
}
function applyShopTheme() {
    document.body.classList.forEach(function (c) { if (c.indexOf('shop-theme-') === 0) document.body.classList.remove(c); });
    const it = getActiveShopItem('theme');
    if (it) document.body.classList.add('shop-theme-' + it.id);
}
function applyShopCustomizations() {
    applyShopAvatar();
    applyShopNameColor();
    applyShopFrame();
    applyShopTheme();
}

function getActiveMusicNotes() {
    const it = getActiveShopItem('music');
    return (it && it.notes && it.notes.length) ? it.notes : DEFAULT_MUSIC_NOTES;
}
function getActiveMusicInterval() {
    const it = getActiveShopItem('music');
    return (it && it.interval) ? it.interval : 700;
}

loadShopState();
applyShopCustomizations();

changeTheme('space'); updateRankDisplay();

// farkı bul
const FKG = {
    on: false, paused: false, lock: true, muted: false,
    level: 1, score: 0, streak: 0, finds: 0,
    best: 0, odd: -1, n: 2,
    timeMax: 15, time: 15, lastTickSec: 99,
    hintUsed: false, raf: 0, lastT: 0,
    baseColor: '#fff', oddColor: '#fff', colorNameTxt: '', shapeLabel: '',
    themeIdx: 0
};
try { FKG.best = parseInt(localStorage.getItem('fark_best') || '0') || 0; } catch (e) { FKG.best = 0; }
function farkSaveBest() { try { localStorage.setItem('fark_best', String(FKG.best)); } catch (e) { } }

const FKG_RND = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const FKG_RANDF = (a, b) => a + Math.random() * (b - a);
const FKG_ROUND1 = v => Math.round(v * 10) / 10;
const FKG_CLAMP = (v, a, b) => Math.min(b, Math.max(a, v));

const FKG_THEMES = [
    { name: 'Canlı Derinlik', acc: '#00d2ff', bg: 'radial-gradient(1100px 550px at 80% -10%, rgba(0,210,255,.15), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(138,43,226,.13), transparent 60%), linear-gradient(135deg,#000a1a 0%,#001a3d 55%,#000a1a 100%)' },
    { name: 'Mor Bulut', acc: '#c084fc', bg: 'radial-gradient(1000px 600px at 75% 0%, rgba(192,132,252,.18), transparent 60%), radial-gradient(900px 500px at 15% 105%, rgba(236,72,153,.12), transparent 60%), linear-gradient(135deg,#0d001f 0%,#230045 55%,#0d001f 100%)' },
    { name: 'Gece Mavisi', acc: '#8fa8d8', bg: 'radial-gradient(1000px 550px at 80% -5%, rgba(143,168,216,.11), transparent 60%), radial-gradient(850px 480px at 12% 108%, rgba(120,140,190,.08), transparent 60%), linear-gradient(135deg,#05070f 0%,#101a30 55%,#05070f 100%)' },
    { name: 'Sönük Orman', acc: '#9fb8ac', bg: 'radial-gradient(950px 500px at 78% -5%, rgba(159,184,172,.08), transparent 60%), linear-gradient(135deg,#060a08 0%,#121a16 55%,#060a08 100%)' },
    { name: 'Grafit', acc: '#b0a490', bg: 'radial-gradient(900px 480px at 80% -5%, rgba(176,164,144,.06), transparent 60%), linear-gradient(135deg,#0a0a0b 0%,#161513 55%,#0a0a0b 100%)' },
    { name: 'Duman', acc: '#a0a0b0', bg: 'radial-gradient(900px 460px at 50% -8%, rgba(160,160,176,.05), transparent 60%), linear-gradient(135deg,#0a0a0d 0%,#141419 55%,#0a0a0d 100%)' },
    { name: 'Simsiyah Kaos', acc: '#8c8c98', bg: 'linear-gradient(135deg,#050506 0%,#0e0e11 55%,#050506 100%)' }
];

const FKG_SHAPES = {
    daire: '<circle cx="50" cy="50" r="38"/>',
    kare: '<rect x="14" y="14" width="72" height="72" rx="10"/>',
    ucgen: '<path d="M50 12 L88 84 L12 84 Z"/>',
    elmas: '<path d="M50 8 L90 50 L50 92 L10 50 Z"/>',
    altigen: '<path d="M50 8 L86 29 L86 71 L50 92 L14 71 L14 29 Z"/>',
    yildiz: '<path d="M50 8 L61 38 L94 38 L68 57 L78 88 L50 69 L22 88 L32 57 L6 38 L39 38 Z"/>',
    halka: '<path fill-rule="evenodd" d="M50 8 a42 42 0 1 0 0.01 0 Z M50 32 a18 18 0 1 1 -0.01 0 Z"/>'
};
const FKG_SHAPE_NAMES = { daire: 'Daire', kare: 'Kare', ucgen: 'Üçgen', elmas: 'Elmas', altigen: 'Altıgen', yildiz: 'Yıldız', halka: 'Halka' };
const FKG_SHAPE_KEYS = Object.keys(FKG_SHAPES);

function farkColorName(h, s, l) {
    const ranges = [[14, 'Kırmızı'], [40, 'Turuncu'], [68, 'Sarı'], [95, 'Limon'], [150, 'Yeşil'], [185, 'Turkuaz'], [250, 'Mavi'], [290, 'Mor'], [335, 'Pembe'], [360, 'Kırmızı']];
    let base = 'Renk';
    for (const r of ranges) { if (h <= r[0]) { base = r[1]; break; } }
    let pre = '';
    if (s <= 35) pre += 'Toz ';
    else if (s >= 85) pre += 'Canlı ';
    if (l <= 30) pre += 'Koyu ';
    else if (l >= 78) pre += 'Açık ';
    return (pre + base).trim();
}

const FKG_TIERS = [
    { rank: 'Çaylak', time: 15, dH: [28, 45], dS: [.22, .35], dL: [.16, .26], sat: [45, 85], li: [40, 62] },
    { rank: 'Kalfa', time: 13, dH: [16, 26], dS: [.14, .24], dL: [.12, .20], sat: [40, 80], li: [40, 62] },
    { rank: 'Usta', time: 11, dH: [9, 15], dS: [.09, .16], dL: [.08, .14], sat: [38, 78], li: [38, 62] },
    { rank: 'Keskin Göz', time: 9, dH: [5, 9], dS: [.06, .11], dL: [.05, .09], sat: [35, 75], li: [36, 60] },
    { rank: 'Kartal Göz', time: 7, dH: [3, 5.5], dS: [.04, .075], dL: [.035, .065], sat: [30, 72], li: [34, 60] },
    { rank: 'Şahin', time: 6, dH: [1.8, 3.2], dS: [.028, .05], dL: [.025, .045], sat: [28, 70], li: [34, 58] },
    { rank: 'Kaos Avcısı', time: 5, dH: [1.1, 2], dS: [.02, .038], dL: [.018, .032], sat: [25, 68], li: [32, 56] }
];
function farkTierFor(level) { return FKG_TIERS[Math.min(Math.floor((level - 1) / 5), FKG_TIERS.length - 1)]; }
function farkGridN(level) { return Math.min(8, 2 + Math.floor(level / 2)); }

let FKG_AC = null;
function farkInitAudio() {
    if (FKG.muted) return;
    try {
        FKG_AC = FKG_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (FKG_AC.state === 'suspended') FKG_AC.resume();
    } catch (e) { FKG_AC = null; }
}
function farkBeep(freq, dur, type, vol, delay) {
    if (!FKG_AC || FKG.muted) return;
    try {
        const t0 = FKG_AC.currentTime + (delay || 0);
        const o = FKG_AC.createOscillator(), g = FKG_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(FKG_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const FKG_SFX = {
    find() { farkBeep(620, .1, 'sine', .14); farkBeep(930, .16, 'sine', .12, .07); },
    fast() { farkBeep(620, .09, 'sine', .13); farkBeep(830, .09, 'sine', .12, .06); farkBeep(1240, .18, 'sine', .12, .12); },
    wrong() { farkBeep(150, .22, 'sawtooth', .1); },
    tick() { farkBeep(1100, .04, 'sine', .05); },
    milestone() { farkBeep(520, .14, 'sine', .12); farkBeep(660, .14, 'sine', .12, .12); farkBeep(880, .22, 'sine', .13, .24); },
    over() { farkBeep(440, .2, 'sine', .12); farkBeep(330, .2, 'sine', .12, .18); farkBeep(220, .35, 'sine', .13, .36); },
    hint() { farkBeep(980, .12, 'triangle', .1); farkBeep(740, .14, 'triangle', .09, .09); }
};
function farkToggleMute() {
    FKG.muted = !FKG.muted;
    document.getElementById('farkMuteBtn').textContent = FKG.muted ? '🔇' : '🔊';
    if (!FKG.muted) farkInitAudio();
}

function farkHexA(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
function farkApplyTheme(idx, instant) {
    FKG.themeIdx = FKG_CLAMP(idx, 0, FKG_THEMES.length - 1);
    const th = FKG_THEMES[FKG.themeIdx];
    document.documentElement.style.setProperty('--fark-acc', th.acc);
    const a = document.getElementById('farkBgA'), b = document.getElementById('farkBgB');
    a.style.display = 'block'; b.style.display = 'block';
    const fx = document.getElementById('farkFx'); fx.style.display = 'block';
    if (instant) {
        a.style.background = th.bg; b.style.opacity = 0;
    } else {
        b.style.background = th.bg; b.style.opacity = 1;
        setTimeout(() => { a.style.background = th.bg; b.style.opacity = 0; }, 1500);
    }
    farkBuildParticles();
}
function farkHideLayers() {
    document.getElementById('farkBgA').style.display = 'none';
    document.getElementById('farkBgB').style.display = 'none';
    document.getElementById('farkFx').style.display = 'none';
}
function farkBuildParticles() {
    const fx = document.getElementById('farkFx'); fx.innerHTML = '';
    const th = FKG_THEMES[FKG.themeIdx];
    const count = Math.max(2, 14 - FKG.themeIdx * 2);
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'fark-pt';
        const size = FKG_RND(4, 11);
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = FKG_RND(0, 100) + '%';
        s.style.background = th.acc;
        s.style.boxShadow = '0 0 ' + (size * 2) + 'px ' + farkHexA(th.acc, 0.8);
        s.style.setProperty('--sway', FKG_RND(-70, 70) + 'px');
        s.style.animationDuration = FKG_RND(7, 16) + 's';
        s.style.animationDelay = '-' + FKG_RND(0, 14) + 's';
        fx.appendChild(s);
    }
}

window.startFarkFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    document.getElementById('farkGameScreen').style.display = 'block';
    farkStartGame();
};
window.quitFarkToMode = function () {
    FKG.on = false; FKG.paused = false;
    cancelAnimationFrame(FKG.raf);
    document.getElementById('farkOverlay').classList.remove('show');
    farkHideLayers();
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};

function farkStartGame() {
    farkInitAudio();
    FKG.on = true; FKG.paused = false;
    FKG.level = 1; FKG.score = 0; FKG.streak = 0; FKG.finds = 0;
    document.getElementById('farkOverlay').classList.remove('show');
    document.getElementById('farkScore').textContent = '⭐ 0';
    document.getElementById('farkStreak').style.display = 'none';
    document.getElementById('farkMuteBtn').textContent = FKG.muted ? '🔇' : '🔊';
    farkApplyTheme(0, true);
    farkStartLevel(false);
}
function farkStartLevel(isMilestoneUp) {
    const tier = farkTierFor(FKG.level);
    FKG.n = farkGridN(FKG.level);
    FKG.timeMax = tier.time;
    FKG.time = tier.time;
    FKG.lastTickSec = 99;
    FKG.hintUsed = false;
    document.getElementById('farkHintBtn').disabled = false;
    document.getElementById('farkLevel').textContent = 'SEVİYE ' + FKG.level;
    document.getElementById('farkRank').textContent = tier.rank;

    const hue = FKG_RND(0, 359);
    const sat = FKG_RND(tier.sat[0], tier.sat[1]);
    const li = FKG_RND(tier.li[0], tier.li[1]);
    const roll = Math.random();
    const kind = roll < 0.5 ? 'hue' : (roll < 0.75 ? 'sat' : 'light');
    let oh = hue, os = sat, ol = li;
    if (kind === 'hue') {
        const d = FKG_RANDF(tier.dH[0], tier.dH[1]) * (Math.random() < 0.5 ? -1 : 1);
        oh = ((hue + d) % 360 + 360) % 360;
    } else if (kind === 'sat') {
        const d = FKG_RANDF(tier.dS[0], tier.dS[1]) * 100;
        os = FKG_CLAMP((sat >= 50) ? sat - d : sat + d, 8, 92);
    } else {
        const d = FKG_RANDF(tier.dL[0], tier.dL[1]) * 100;
        ol = FKG_CLAMP((li >= 50) ? li - d : li + d, 10, 90);
    }
    FKG.baseColor = 'hsl(' + hue + ', ' + sat + '%, ' + li + '%)';
    FKG.oddColor = 'hsl(' + FKG_ROUND1(oh) + ', ' + FKG_ROUND1(os) + '%, ' + FKG_ROUND1(ol) + '%)';
    FKG.colorNameTxt = farkColorName(hue, sat, li);
    document.getElementById('farkColor').textContent = '🎨 ' + FKG.colorNameTxt;

    const shapeKey = FKG_SHAPE_KEYS[FKG_RND(0, FKG_SHAPE_KEYS.length - 1)];
    const plain = Math.random() < 0.18;
    FKG.shapeLabel = plain ? 'Düz Renk' : FKG_SHAPE_NAMES[shapeKey];

    const total = FKG.n * FKG.n;
    FKG.odd = FKG_RND(0, total - 1);

    const grid = document.getElementById('farkGrid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = 'repeat(' + FKG.n + ',1fr)';
    for (let i = 0; i < total; i++) {
        const c = document.createElement('button');
        c.className = 'fark-cell';
        if (plain) {
            c.style.background = (i === FKG.odd) ? FKG.oddColor : FKG.baseColor;
        } else {
            const fill = (i === FKG.odd) ? FKG.oddColor : FKG.baseColor;
            c.innerHTML = '<svg viewBox="0 0 100 100" fill="' + fill + '">' + FKG_SHAPES[shapeKey] + '</svg>';
        }
        c.style.animationDelay = (i * 0.02) + 's';
        c.onclick = (function (idx, el) { return function () { farkCellTap(el, idx); }; })(i, c);
        grid.appendChild(c);
    }
    farkFitGrid();
    farkUpdateTimerUI();
    FKG.lock = true;

    if (isMilestoneUp) {
        const bn = document.getElementById('farkBanner');
        document.getElementById('farkBn2').textContent = 'Kademe: ' + tier.rank + ' | Tema: ' + FKG_THEMES[FKG.themeIdx].name;
        document.getElementById('farkBn3').textContent = 'Süre ' + tier.time + ' saniyeye düştü | Renkler yaklaştı, arka plan sönükleşti!';
        bn.classList.remove('show'); void bn.offsetWidth; bn.classList.add('show');
        FKG_SFX.milestone();
        setTimeout(farkShowSplash, 1500);
    } else {
        setTimeout(farkShowSplash, 250);
    }
}
function farkShowSplash() {
    if (!FKG.on) return;
    const sp = document.getElementById('farkSplash');
    document.getElementById('farkSpl1').textContent = 'SEVİYE ' + FKG.level;
    document.getElementById('farkSpl2').textContent = (FKG.n * FKG.n) + ' kare | ' + FKG.shapeLabel + ' | 🎨 ' + FKG.colorNameTxt + ' | ' + FKG.timeMax.toFixed(1) + ' saniye';
    sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
    farkBeep(500, .08, 'sine', .08);
    setTimeout(() => {
        if (!FKG.on) return;
        FKG.lock = false;
        FKG.lastT = performance.now();
        cancelAnimationFrame(FKG.raf);
        farkTimerLoop();
    }, 650);
}
function farkFitGrid() {
    const grid = document.getElementById('farkGrid');
    const w = grid.clientWidth || 460;
    grid.style.setProperty('--fs', Math.max(15, (w / FKG.n) * 0.52) + 'px');
}
window.addEventListener('resize', () => {
    const gs = document.getElementById('farkGameScreen');
    if (gs && gs.style.display === 'block') farkFitGrid();
});

function farkTimerLoop() {
    if (!FKG.on) return;
    const now = performance.now();
    const dt = (now - FKG.lastT) / 1000;
    FKG.lastT = now;
    if (!FKG.paused && !FKG.lock) {
        FKG.time -= dt;
        const sec = Math.ceil(FKG.time);
        if (sec <= 3 && sec >= 1 && sec !== FKG.lastTickSec) { FKG.lastTickSec = sec; FKG_SFX.tick(); }
        if (FKG.time <= 0) { FKG.time = 0; farkUpdateTimerUI(); farkGameOver(); return; }
        farkUpdateTimerUI();
    }
    FKG.raf = requestAnimationFrame(farkTimerLoop);
}
function farkUpdateTimerUI() {
    const p = Math.max(0, FKG.time / FKG.timeMax);
    document.getElementById('farkTfill').style.width = (p * 100) + '%';
    const low = FKG.time <= 3.2;
    document.getElementById('farkTnum').textContent = FKG.time.toFixed(1) + 's';
    document.getElementById('farkTnum').className = 'fark-tnum' + (low ? ' low' : '');
    document.getElementById('farkTfill').className = 'fark-tfill' + (low ? ' low' : '');
    document.getElementById('farkTbar').className = 'fark-tbar' + (low ? ' low' : '');
}

function farkCellTap(cell, i) {
    if (!FKG.on || FKG.lock || FKG.paused) return;
    if (i === FKG.odd) {
        FKG.lock = true;
        const used = FKG.timeMax - FKG.time;
        let pts = 100 + Math.ceil(FKG.time) * 10 + Math.min(FKG.streak, 8) * 25;
        const fast = used < 2;
        if (fast) pts += 50;
        FKG.streak++; FKG.finds++;
        FKG.score += pts;
        if (FKG.level % 5 === 0) FKG.score += 250;

        cell.classList.add('ok');
        farkBurstAt(cell);
        const r = cell.getBoundingClientRect();
        farkFloatTxt(r.left + r.width / 2, r.top, '+' + pts + (fast ? ' ⚡' : ''), '#4ade80');
        if (FKG.streak >= 2) farkFloatTxt(r.left + r.width / 2, r.top + 26, '🔥 seri x' + FKG.streak, '#facc15');
        fast ? FKG_SFX.fast() : FKG_SFX.find();

        document.getElementById('farkScore').textContent = '⭐ ' + FKG.score;
        const st = document.getElementById('farkStreak');
        st.style.display = FKG.streak >= 2 ? '' : 'none';
        st.textContent = '🔥 x' + FKG.streak;

        const wasMilestone = FKG.level % 5 === 0;
        setTimeout(() => {
            if (!FKG.on) return;
            FKG.level++;
            if (wasMilestone) {
                const ti = Math.min(Math.floor((FKG.level - 1) / 5), FKG_THEMES.length - 1);
                if (ti !== FKG.themeIdx) {
                    farkApplyTheme(ti, false);
                    farkStartLevel(true);
                } else farkStartLevel(false);
            } else farkStartLevel(false);
        }, 800);
    } else {
        FKG.time = Math.max(0.05, FKG.time - 3);
        FKG.streak = 0;
        document.getElementById('farkStreak').style.display = 'none';
        farkUpdateTimerUI();
        cell.classList.add('err');
        setTimeout(() => cell.classList.remove('err'), 350);
        const pnl = document.getElementById('farkPanel');
        pnl.classList.remove('shake'); void pnl.offsetWidth; pnl.classList.add('shake');
        const r = cell.getBoundingClientRect();
        farkFloatTxt(r.left + r.width / 2, r.top, '-3s', '#ff6b6b');
        FKG_SFX.wrong();
    }
}

window.farkUseHint = function () {
    if (!FKG.on || FKG.lock || FKG.paused || FKG.hintUsed) return;
    FKG.hintUsed = true;
    document.getElementById('farkHintBtn').disabled = true;
    FKG.time = Math.max(0.4, FKG.time - 5);
    farkUpdateTimerUI();
    const c = document.getElementById('farkGrid').children[FKG.odd];
    c.classList.add('hintglow');
    setTimeout(() => c.classList.remove('hintglow'), 1800);
    farkFloatTxt(window.innerWidth / 2, window.innerHeight * 0.3, '💡 İpucu -5s', '#facc15');
    FKG_SFX.hint();
};
window.farkPauseGame = function () {
    if (!FKG.on || FKG.lock) return;
    FKG.paused = true;
    document.getElementById('farkOvEmoji').textContent = '⏸';
    document.getElementById('farkOvTitle').textContent = 'Duraklatıldı';
    document.getElementById('farkOvRec').style.display = 'none';
    document.getElementById('farkOvScore').textContent = FKG.score + ' puan';
    document.getElementById('farkOvLvl').textContent = FKG.level;
    document.getElementById('farkOvFind').textContent = FKG.finds;
    document.getElementById('farkOvRank').textContent = farkTierFor(FKG.level).rank;
    document.getElementById('farkOvBest').textContent = FKG.best;
    document.getElementById('farkOvBtns').innerHTML =
        '<button class="fark-ov-again" onclick="farkResumeGame()">▶ DEVAM ET</button>' +
        '<button class="fark-ov-menu" onclick="quitFarkToMode()">🏠 Modlar</button>';
    document.getElementById('farkOverlay').classList.add('show');
};
window.farkResumeGame = function () {
    document.getElementById('farkOverlay').classList.remove('show');
    FKG.paused = false;
    FKG.lock = true;
    const sp = document.getElementById('farkSplash');
    document.getElementById('farkSpl1').textContent = 'HAZIR?';
    document.getElementById('farkSpl2').textContent = '3... 2... 1...';
    sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
    setTimeout(() => { if (FKG.on) { FKG.lock = false; FKG.lastT = performance.now(); } }, 700);
};

function farkFloatTxt(x, y, txt, color) {
    const s = document.createElement('span');
    s.className = 'fark-ftxt';
    s.textContent = txt;
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.transform = 'translateX(-50%)';
    s.style.color = color;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
}
function farkBurstAt(cell) {
    const r = cell.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const th = FKG_THEMES[FKG.themeIdx];
    for (let i = 0; i < 12; i++) {
        const s = document.createElement('span');
        s.className = 'fark-spark';
        const ang = (Math.PI * 2 * i) / 12 + Math.random() * 0.5;
        const dist = FKG_RND(34, 80);
        s.style.left = cx + 'px';
        s.style.top = cy + 'px';
        s.style.setProperty('--dx', Math.cos(ang) * dist + 'px');
        s.style.setProperty('--dy', Math.sin(ang) * dist + 'px');
        s.style.background = i % 2 ? '#4ade80' : th.acc;
        s.style.boxShadow = '0 0 10px ' + (i % 2 ? '#4ade80' : th.acc);
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 700);
    }
}

function farkGameOver() {
    FKG.on = false;
    cancelAnimationFrame(FKG.raf);
    FKG_SFX.over();
    const isRec = FKG.score > FKG.best && FKG.score > 0;
    if (isRec) { FKG.best = FKG.score; farkSaveBest(); }
    document.getElementById('farkOvEmoji').textContent = '⏱️';
    document.getElementById('farkOvTitle').textContent = 'Süre Doldu!';
    document.getElementById('farkOvRec').style.display = isRec ? '' : 'none';
    document.getElementById('farkOvScore').textContent = FKG.score + ' puan';
    document.getElementById('farkOvLvl').textContent = FKG.level;
    document.getElementById('farkOvFind').textContent = FKG.finds;
    document.getElementById('farkOvRank').textContent = farkTierFor(FKG.level).rank;
    document.getElementById('farkOvBest').textContent = FKG.best;
    document.getElementById('farkOvBtns').innerHTML =
        '<button class="fark-ov-again" onclick="farkStartGame()">🔄 Tekrar Oyna</button>' +
        '<button class="fark-ov-menu" onclick="quitFarkToMode()">🏠 Modlar</button>';
    document.getElementById('farkOverlay').classList.add('show');
}
window.farkStartGame = farkStartGame;

// esc ile duraklat
document.addEventListener('keydown', e => {
    const gs = document.getElementById('farkGameScreen');
    if (e.key === 'Escape' && gs && gs.style.display === 'block' && FKG.on &&
        !document.getElementById('farkOverlay').classList.contains('show')) farkPauseGame();
});

// hafıza ışıkları
const HZ = {
    on: false, paused: false, lock: true, muted: false,
    level: 1, score: 0, best: 0,
    seq: [], step: 0, phase: 'idle',
    timeMax: 10, time: 10, lastTickSec: 99,
    timers: [], raf: 0, lastT: 0, themeIdx: 0,
    replayOnResume: false, pendingAdvance: false
};
try { HZ.best = parseInt(localStorage.getItem('hafiza_best') || '0') || 0; } catch (e) { HZ.best = 0; }
function hzSaveBest() { try { localStorage.setItem('hafiza_best', String(HZ.best)); } catch (e) { } }

const HZ_RND = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const HZ_CLAMP = (v, a, b) => Math.min(b, Math.max(a, v));

const HZ_THEMES = [
    { name: 'Canlı Geceler', acc: '#00d2ff', bg: 'radial-gradient(1100px 550px at 80% -10%, rgba(0,210,255,.15), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(138,43,226,.13), transparent 60%), linear-gradient(135deg,#000a1a 0%,#001a3d 55%,#000a1a 100%)' },
    { name: 'Mor Nebula', acc: '#c084fc', bg: 'radial-gradient(1000px 600px at 75% 0%, rgba(192,132,252,.18), transparent 60%), radial-gradient(900px 500px at 15% 105%, rgba(236,72,153,.12), transparent 60%), linear-gradient(135deg,#0d001f 0%,#230045 55%,#0d001f 100%)' },
    { name: 'Gece Mavisi', acc: '#8fa8d8', bg: 'radial-gradient(1000px 550px at 80% -5%, rgba(143,168,216,.11), transparent 60%), radial-gradient(850px 480px at 12% 108%, rgba(120,140,190,.08), transparent 60%), linear-gradient(135deg,#05070f 0%,#101a30 55%,#05070f 100%)' },
    { name: 'Sönük Orman', acc: '#9fb8ac', bg: 'radial-gradient(950px 500px at 78% -5%, rgba(159,184,172,.08), transparent 60%), linear-gradient(135deg,#060a08 0%,#121a16 55%,#060a08 100%)' },
    { name: 'Grafit', acc: '#b0a490', bg: 'radial-gradient(900px 480px at 80% -5%, rgba(176,164,144,.06), transparent 60%), linear-gradient(135deg,#0a0a0b 0%,#161513 55%,#0a0a0b 100%)' },
    { name: 'Duman', acc: '#a0a0b0', bg: 'radial-gradient(900px 460px at 50% -8%, rgba(160,160,176,.05), transparent 60%), linear-gradient(135deg,#0a0a0d 0%,#141419 55%,#0a0a0d 100%)' },
    { name: 'Simsiyah Kaos', acc: '#8c8c98', bg: 'linear-gradient(135deg,#050506 0%,#0e0e11 55%,#050506 100%)' }
];

const HZ_TIERS = [
    { rank: 'Acemi', interval: 760, dim: .55, timeScale: 1 },
    { rank: 'Çırak', interval: 630, dim: .5, timeScale: .95 },
    { rank: 'Kalfa', interval: 520, dim: .46, timeScale: .9 },
    { rank: 'Usta', interval: 440, dim: .38, timeScale: .85 },
    { rank: 'Hâfiz', interval: 370, dim: .34, timeScale: .8 },
    { rank: 'Dahî', interval: 310, dim: .3, timeScale: .75 },
    { rank: 'Efsane', interval: 265, dim: .27, timeScale: .7 }
];
function hzTierFor(level) { return HZ_TIERS[Math.min(Math.floor((level - 1) / 5), HZ_TIERS.length - 1)]; }

let HZ_AC = null;
function hzInitAudio() {
    if (HZ.muted) return;
    try {
        HZ_AC = HZ_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (HZ_AC.state === 'suspended') HZ_AC.resume();
    } catch (e) { HZ_AC = null; }
}
function hzTone(freq, dur, type, vol, delay) {
    if (!HZ_AC || HZ.muted) return;
    try {
        const t0 = HZ_AC.currentTime + (delay || 0);
        const o = HZ_AC.createOscillator(), g = HZ_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.14, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(HZ_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const HZ_PAD_FREQ = [415, 310, 252, 196];
const HZ_SFX = {
    pad(i, dur) { hzTone(HZ_PAD_FREQ[i], dur || 0.28, 'sine', 0.16); hzTone(HZ_PAD_FREQ[i] * 2, (dur || 0.28) * 0.7, 'triangle', 0.05); },
    win() { hzTone(523, .1, 'sine', .13); hzTone(659, .1, 'sine', .13, .09); hzTone(784, .18, 'sine', .14, .18); },
    milestone() { hzTone(520, .14, 'sine', .12); hzTone(660, .14, 'sine', .12, .12); hzTone(880, .22, 'sine', .13, .24); },
    fail() { hzTone(140, .45, 'sawtooth', .13); hzTone(98, .5, 'square', .07, .06); },
    tick() { hzTone(1100, .04, 'sine', .05); },
    over() { hzTone(440, .2, 'sine', .12); hzTone(330, .2, 'sine', .12, .18); hzTone(220, .35, 'sine', .13, .36); }
};
window.hzToggleMute = function () {
    HZ.muted = !HZ.muted;
    document.getElementById('hzMuteBtn').textContent = HZ.muted ? '🔇' : '🔊';
    if (!HZ.muted) hzInitAudio();
};

function hzHexA(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
function hzApplyTheme(idx, instant) {
    HZ.themeIdx = HZ_CLAMP(idx, 0, HZ_THEMES.length - 1);
    const th = HZ_THEMES[HZ.themeIdx];
    document.documentElement.style.setProperty('--hz-acc', th.acc);
    const a = document.getElementById('hzBgA'), b = document.getElementById('hzBgB');
    a.style.display = 'block'; b.style.display = 'block';
    document.getElementById('hzFx').style.display = 'block';
    if (instant) {
        a.style.background = th.bg; b.style.opacity = 0;
    } else {
        b.style.background = th.bg; b.style.opacity = 1;
        setTimeout(() => { a.style.background = th.bg; b.style.opacity = 0; }, 1500);
    }
    hzBuildParticles();
}
function hzHideLayers() {
    document.getElementById('hzBgA').style.display = 'none';
    document.getElementById('hzBgB').style.display = 'none';
    document.getElementById('hzFx').style.display = 'none';
}
function hzBuildParticles() {
    const fx = document.getElementById('hzFx'); fx.innerHTML = '';
    const th = HZ_THEMES[HZ.themeIdx];
    const count = Math.max(2, 14 - HZ.themeIdx * 2);
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'hz-pt';
        const size = HZ_RND(4, 11);
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = HZ_RND(0, 100) + '%';
        s.style.background = th.acc;
        s.style.boxShadow = '0 0 ' + (size * 2) + 'px ' + hzHexA(th.acc, 0.8);
        s.style.setProperty('--sway', HZ_RND(-70, 70) + 'px');
        s.style.animationDuration = HZ_RND(7, 16) + 's';
        s.style.animationDelay = '-' + HZ_RND(0, 14) + 's';
        fx.appendChild(s);
    }
}

function hzClearTimers() { HZ.timers.forEach(id => clearTimeout(id)); HZ.timers = []; }
function hzLater(fn, ms) { const id = setTimeout(fn, ms); HZ.timers.push(id); return id; }

window.startHafizaFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    document.getElementById('hafizaGameScreen').style.display = 'block';
    hzStartGame();
};
function hzStopAll() {
    HZ.on = false; HZ.paused = false; HZ.phase = 'idle';
    hzClearTimers();
    cancelAnimationFrame(HZ.raf);
    document.getElementById('hzOverlay').classList.remove('show');
    document.getElementById('hzExitModal').style.display = 'none';
    hzHideLayers();
}
window.hzQuitToMode = function () {
    hzStopAll();
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.hzGoProfile = function () {
    hzStopAll();
    hideAllMainScreens();
    document.getElementById('profileScreen').style.display = 'block';
    changeTheme('space');
};

function hzStartGame() {
    hzInitAudio();
    HZ.on = true; HZ.paused = false;
    HZ.level = 1; HZ.score = 0; HZ.seq = []; HZ.step = 0; HZ.phase = 'idle';
    HZ.replayOnResume = false; HZ.pendingAdvance = false;
    document.getElementById('hzOverlay').classList.remove('show');
    document.getElementById('hzExitModal').style.display = 'none';
    document.getElementById('hzScore').textContent = '⭐ 0';
    document.getElementById('hzMuteBtn').textContent = HZ.muted ? '🔇' : '🔊';
    hzApplyTheme(0, true);
    hzStartLevel(false);
}
window.hzStartGame = hzStartGame;

function hzStartLevel(isMilestoneUp) {
    HZ.pendingAdvance = false;
    const tier = hzTierFor(HZ.level);
    let next;
    do { next = HZ_RND(0, 3); } while (HZ.seq.length && next === HZ.seq[HZ.seq.length - 1] && Math.random() < 0.7);
    HZ.seq.push(next);
    HZ.step = 0;

    document.getElementById('hzLevel').textContent = 'SEVİYE ' + HZ.level;
    document.getElementById('hzRank').textContent = tier.rank;
    document.documentElement.style.setProperty('--hz-dim', tier.dim);
    document.getElementById('hzHubLvl').textContent = HZ.level;

    HZ.timeMax = (3.2 + 1.15 * HZ.seq.length) * tier.timeScale;
    HZ.time = HZ.timeMax;
    HZ.lastTickSec = 99;
    hzUpdateTimerUI(true);

    if (isMilestoneUp) {
        const bn = document.getElementById('hzBanner');
        document.getElementById('hzBn2').textContent = 'Rütbe: ' + tier.rank + ' | Tema: ' + HZ_THEMES[HZ.themeIdx].name;
        document.getElementById('hzBn3').textContent = 'Zincir: ' + HZ.seq.length + ' ışık | Tempo hızlandı | Arka plan sönükleşti!';
        bn.classList.remove('show'); void bn.offsetWidth; bn.classList.add('show');
        HZ_SFX.milestone();
        hzLater(hzShowSplash, 1500);
    } else {
        hzLater(hzShowSplash, 250);
    }
}

function hzShowSplash() {
    if (!HZ.on) return;
    const tier = hzTierFor(HZ.level);
    const sp = document.getElementById('hzSplash');
    document.getElementById('hzSpl1').textContent = 'SEVİYE ' + HZ.level;
    document.getElementById('hzSpl2').textContent = 'Zincir: ' + HZ.seq.length + ' ışık | ' + tier.rank;
    sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
    hzTone(500, .08, 'sine', .08);
    hzLater(hzPlaySequence, 700);
}

function hzPlaySequence() {
    if (!HZ.on) return;
    HZ.phase = 'watch';
    HZ.lock = true;
    const hub = document.getElementById('hzHub');
    hub.classList.add('watch');
    document.getElementById('hzHubSt').textContent = 'İZLE';
    document.getElementById('hzTnum').textContent = '';
    document.getElementById('hzTfill').style.width = '100%';
    document.getElementById('hzTfill').className = 'hz-tfill';

    const tier = hzTierFor(HZ.level);
    const iv = tier.interval;
    const litMs = Math.max(120, Math.round(iv * 0.58));
    HZ.seq.forEach((pd, i) => {
        hzLater(() => {
            if (!HZ.on) return;
            hzLightPad(pd, litMs);
        }, 420 + i * iv);
    });
    hzLater(() => {
        if (!HZ.on) return;
        hub.classList.remove('watch');
        HZ.phase = 'input';
        HZ.step = 0;
        HZ.lock = false;
        document.getElementById('hzHubSt').textContent = 'SIRA SENDE 0/' + HZ.seq.length;
        HZ.lastT = performance.now();
        cancelAnimationFrame(HZ.raf);
        hzTimerLoop();
    }, 420 + HZ.seq.length * iv + 60);
}

function hzLightPad(i, ms) {
    const pd = document.getElementById('hzPad' + i);
    pd.classList.add('lit');
    HZ_SFX.pad(i, Math.max(0.14, ms / 1000 * 0.9));
    hzLater(() => pd.classList.remove('lit'), ms);
}

function hzTimerLoop() {
    if (!HZ.on) return;
    const now = performance.now();
    const dt = (now - HZ.lastT) / 1000;
    HZ.lastT = now;
    if (!HZ.paused && HZ.phase === 'input') {
        HZ.time -= dt;
        const sec = Math.ceil(HZ.time);
        if (sec <= 3 && sec >= 1 && sec !== HZ.lastTickSec) { HZ.lastTickSec = sec; HZ_SFX.tick(); }
        if (HZ.time <= 0) { HZ.time = 0; hzUpdateTimerUI(); hzGameOver('⏱️', 'Süre Doldu!', 'Zinciri tamamlayamadın, süre bitti!'); return; }
        hzUpdateTimerUI();
    }
    HZ.raf = requestAnimationFrame(hzTimerLoop);
}
function hzUpdateTimerUI(standby) {
    const p = Math.max(0, HZ.time / HZ.timeMax);
    document.getElementById('hzTfill').style.width = (p * 100) + '%';
    const low = HZ.time <= 3.05 && !standby && HZ.phase === 'input';
    document.getElementById('hzTnum').textContent = standby ? '' : HZ.time.toFixed(1) + 's';
    document.getElementById('hzTnum').className = 'hz-tnum' + (low ? ' low' : '');
    document.getElementById('hzTfill').className = 'hz-tfill' + (low ? ' low' : '');
    document.getElementById('hzTbar').className = 'hz-tbar' + (low ? ' low' : '');
}

window.hzPadTap = function (i) {
    if (!HZ.on || HZ.lock || HZ.paused || HZ.phase !== 'input') return;
    const pd = document.getElementById('hzPad' + i);
    if (HZ.seq[HZ.step] === i) {
        pd.classList.add('ok');
        setTimeout(() => pd.classList.remove('ok'), 480);
        HZ_SFX.pad(i, 0.2);
        HZ.step++;
        document.getElementById('hzHubSt').textContent = 'SIRA SENDE ' + HZ.step + '/' + HZ.seq.length;
        if (HZ.step >= HZ.seq.length) hzLevelComplete();
    } else {
        HZ.phase = 'over';
        HZ.lock = true;
        pd.classList.add('err');
        setTimeout(() => pd.classList.remove('err'), 650);
        HZ_SFX.fail();
        const pnl = document.getElementById('hzPanel');
        pnl.classList.remove('shake'); void pnl.offsetWidth; pnl.classList.add('shake');
        hzLater(() => hzGameOver('💥', 'Zincir Koptu!', 'Yanlış ışık! Bir önceki seviyede zincir ' + (HZ.seq.length - 1) + ' ışıkta durdu.'), 750);
    }
};

function hzLevelComplete() {
    HZ.phase = 'wait';
    HZ.lock = true;
    const timeLeft = HZ.time;
    const pts = 60 + HZ.level * 25 + Math.ceil(timeLeft) * 8 + (HZ.level % 5 === 0 ? 250 : 0);
    HZ.score += pts;
    document.getElementById('hzScore').textContent = '⭐ ' + HZ.score;
    const hub = document.getElementById('hzHub').getBoundingClientRect();
    hzFloatTxt(hub.left + hub.width / 2, hub.top, '+' + pts, '#4ade80');
    HZ_SFX.win();
    document.getElementById('hzHubSt').textContent = '✓ TAMAM';
    HZ.pendingAdvance = true;
    hzLater(() => { if (HZ.on && HZ.phase === 'wait') hzAdvanceLevel(); }, 950);
}

function hzAdvanceLevel() {
    if (!HZ.pendingAdvance) return;
    HZ.pendingAdvance = false;
    const wasMilestone = HZ.level % 5 === 0;
    HZ.level++;
    if (wasMilestone) {
        const ti = Math.min(Math.floor((HZ.level - 1) / 5), HZ_THEMES.length - 1);
        if (ti !== HZ.themeIdx) {
            hzApplyTheme(ti, false);
            hzStartLevel(true);
            return;
        }
    }
    hzStartLevel(false);
}

window.hzRequestExit = function () {
    if (!HZ.on) { hzQuitToMode(); return; }
    if (document.getElementById('hzOverlay').classList.contains('show')) return;
    HZ.paused = true;
    if (HZ.phase !== 'input') {
        HZ.replayOnResume = true;
        hzClearTimers();
        for (let i = 0; i < 4; i++) document.getElementById('hzPad' + i).classList.remove('lit');
        document.getElementById('hzHub').classList.remove('watch');
        document.getElementById('hzHubSt').textContent = 'DURAKLADI';
    }
    document.getElementById('hzExitModal').style.display = 'flex';
};
window.hzConfirmExit = function () {
    hzQuitToMode();
};
window.hzCancelExit = function () {
    document.getElementById('hzExitModal').style.display = 'none';
    HZ.paused = false;
    if (HZ.replayOnResume) {
        HZ.replayOnResume = false;
        if (HZ.pendingAdvance) {
            hzAdvanceLevel();
        } else if (HZ.seq.length > 0) {
            hzPlaySequence();
        } else {
            hzStartLevel(false);
        }
    } else {
        const sp = document.getElementById('hzSplash');
        document.getElementById('hzSpl1').textContent = 'HAZIR?';
        document.getElementById('hzSpl2').textContent = '3... 2... 1...';
        sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
        setTimeout(() => { if (HZ.on) { HZ.lastT = performance.now(); } }, 700);
    }
};

function hzFloatTxt(x, y, txt, color) {
    const s = document.createElement('span');
    s.className = 'hz-ftxt';
    s.textContent = txt;
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.transform = 'translateX(-50%)';
    s.style.color = color;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
}

function hzGameOver(emoji, title, sub) {
    if (!HZ.on) return;
    HZ.on = false; HZ.phase = 'over';
    hzClearTimers();
    cancelAnimationFrame(HZ.raf);
    HZ_SFX.over();
    const isRec = HZ.score > HZ.best && HZ.score > 0;
    if (isRec) { HZ.best = HZ.score; hzSaveBest(); }
    document.getElementById('hzOvEmoji').textContent = emoji;
    document.getElementById('hzOvTitle').textContent = title;
    document.getElementById('hzOvRec').style.display = isRec ? '' : 'none';
    document.getElementById('hzOvScore').textContent = HZ.score + ' puan';
    document.getElementById('hzOvLvl').textContent = HZ.level;
    document.getElementById('hzOvChain').textContent = Math.max(0, HZ.seq.length - 1);
    document.getElementById('hzOvRank').textContent = hzTierFor(HZ.level).rank;
    document.getElementById('hzOvBest').textContent = HZ.best;
    document.getElementById('hzOvBtns').innerHTML =
        '<button class="hz-ov-again" onclick="hzStartGame()">🔄 Tekrar</button>' +
        '<button class="hz-ov-menu" onclick="hzGoProfile()">👤 Profil</button>' +
        '<button class="hz-ov-menu" onclick="hzQuitToMode()">🎮 Modlar</button>';
    document.getElementById('hzOverlay').classList.add('show');
}

document.addEventListener('keydown', e => {
    const gs = document.getElementById('hafizaGameScreen');
    if (e.key === 'Escape' && gs && gs.style.display === 'block' &&
        !document.getElementById('hzOverlay').classList.contains('show')) hzRequestExit();
});

// karma kelime
const KLG = {
    on: false, paused: false, lock: true, muted: false,
    level: 1, score: 0, solved: 0, best: 0,
    target: '', hintE: '', hintT: '',
    pool: [], slots: [], revealed: 0, tries: 0, streak: 0,
    timeMax: 15, time: 15, lastTickSec: 99,
    timers: [], raf: 0, lastT: 0, themeIdx: 0
};
try { KLG.best = parseInt(localStorage.getItem('kelime_best') || '0') || 0; } catch (e) { KLG.best = 0; }
function klSaveBest() { try { localStorage.setItem('kelime_best', String(KLG.best)); } catch (e) { } }

const KL_RND = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const KL_CLAMP = (v, a, b) => Math.min(b, Math.max(a, v));
const KL_SHUFFLE = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };

const KL_THEMES = [
    { name: 'Canlı Geceler', acc: '#00d2ff', bg: 'radial-gradient(1100px 550px at 80% -10%, rgba(0,210,255,.15), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(138,43,226,.13), transparent 60%), linear-gradient(135deg,#000a1a 0%,#001a3d 55%,#000a1a 100%)' },
    { name: 'Mor Nebula', acc: '#c084fc', bg: 'radial-gradient(1000px 600px at 75% 0%, rgba(192,132,252,.18), transparent 60%), radial-gradient(900px 500px at 15% 105%, rgba(236,72,153,.12), transparent 60%), linear-gradient(135deg,#0d001f 0%,#230045 55%,#0d001f 100%)' },
    { name: 'Gece Mavisi', acc: '#8fa8d8', bg: 'radial-gradient(1000px 550px at 80% -5%, rgba(143,168,216,.11), transparent 60%), radial-gradient(850px 480px at 12% 108%, rgba(120,140,190,.08), transparent 60%), linear-gradient(135deg,#05070f 0%,#101a30 55%,#05070f 100%)' },
    { name: 'Sönük Orman', acc: '#9fb8ac', bg: 'radial-gradient(950px 500px at 78% -5%, rgba(159,184,172,.08), transparent 60%), linear-gradient(135deg,#060a08 0%,#121a16 55%,#060a08 100%)' },
    { name: 'Grafit', acc: '#b0a490', bg: 'radial-gradient(900px 480px at 80% -5%, rgba(176,164,144,.06), transparent 60%), linear-gradient(135deg,#0a0a0b 0%,#161513 55%,#0a0a0b 100%)' },
    { name: 'Duman', acc: '#a0a0b0', bg: 'radial-gradient(900px 460px at 50% -8%, rgba(160,160,176,.05), transparent 60%), linear-gradient(135deg,#0a0a0d 0%,#141419 55%,#0a0a0d 100%)' },
    { name: 'Simsiyah Kaos', acc: '#8c8c98', bg: 'linear-gradient(135deg,#050506 0%,#0e0e11 55%,#050506 100%)' }
];

// [kelime, emoji, ipucu]
const KL_BANK = {
    4: [['ELMA', '🍎', 'Kırmızısı da yeşili de olan meyve'], ['KEDİ', '🐱', 'Miyavlayan ev dostu'], ['KAPI', '🚪', 'Anahtarla açılan şey'], ['MASA', '🪑', 'Etrafında oturup yemek yenir'], ['KALE', '🏰', 'Surlu tarihî yapı'], ['OKUL', '🏫', 'Sıra vardı, ders dinlerdin'], ['TREN', '🚂', 'Raylarda giden uzun araç'], ['ÜZÜM', '🍇', 'Salkım salkım asılan'], ['HALI', '🧶', 'Yere serilen örtü']],
    5: [['ARABA', '🚗', 'Dört tekerlekli araç'], ['KALEM', '✏️', 'Silgiyle silinir'], ['ARMUT', '🍐', 'Elmanın kuzeni'], ['BALIK', '🐟', 'Suda yaşayan'], ['ÇİÇEK', '🌷', 'Vazoda açan'], ['DENİZ', '🌊', 'Tuzlu ve mavi'], ['KİTAP', '📚', 'Sayfaları çevrilir'], ['ELMAS', '💎', 'En değerli taş'], ['ŞEKER', '🍬', 'Tatlı olan'], ['EKMEK', '🍞', 'Fırından çıkar'], ['ÇATAL', '🍴', 'Dişli yemek aracı'], ['TABAK', '🍽️', 'Yemeğin konduğu'], ['BAHÇE', '🌿', 'Ev önünde yeşil alan'], ['ŞAPKA', '👒', 'Başa giyilen'], ['PERDE', '🪟', 'Camı örten'], ['POLİS', '👮', 'Emniyetin görevlisi'], ['KAVUN', '🍈', 'Çekirdekleri yenen yaz meyvesi'], ['LİMON', '🍋', 'Ekşi turunçgil'], ['DUVAR', '🧱', 'Tuğladan örülen'], ['BULUT', '☁️', 'Gökte süzülür, yağmur getirir'], ['ÜÇGEN', '🔺', 'Üç kenarlı şekil'], ['DAİRE', '⭕', 'Yuvarlak şekil'], ['PATEN', '⛸️', 'Buzda kayılır']],
    6: [['KARPUZ', '🍉', 'Kabuğu yeşil, içi kırmızı'], ['GÖMLEK', '👔', 'Düğmeli üst giysisi'], ['DEFTER', '📒', 'Ödevlerin yazıldığı'], ['SİNCAP', '🐿️', 'Fındıkseven kuyruklu'], ['SALATA', '🥗', 'Yeşillerden yapılan'], ['RÜZGAR', '🌬️', 'Esen, savuran'], ['SİNYAL', '📶', 'Çubuk çubuk gösterilir'], ['YORGAN', '🛏️', 'Üstüne örtülüp uyulan'], ['ZÜRAFA', '🦒', 'En uzun boyunlu'], ['TERLİK', '🩴', 'Evde giyilen rahat'], ['SÜNGER', '🧽', 'Bulaşığı ovalayan yumuşak'], ['PUSULA', '🧭', 'Kuzeyi gösterir'], ['DALGIÇ', '🤿', 'Tüple denize inen'], ['POĞAÇA', '🥟', 'Sabah çayının yıldızı'], ['FINDIK', '🥜', 'Karadenizin kuru yemişi'], ['ECZANE', '⚕️', 'İlaç alınan yer'], ['DOKTOR', '👨‍⚕️', 'Hastaya bakan'], ['KAPTAN', '⚓', 'Gemiyi yöneten'], ['KAYKAY', '🛹', 'Tekerlekli tahta'], ['YÜZÜCÜ', '🏊', 'Suda kollarını çırpan'], ['KOŞUCU', '🏃', 'Pistte hızlı giden']],
    7: [['TELEFON', '📱', 'Cebinden düşmez'], ['PENCERE', '🪟', 'Evin camdan gözü'], ['PATATES', '🥔', 'Kızartması sevilir'], ['DOMATES', '🍅', 'Salatanın başrolü'], ['UÇURTMA', '🪁', 'İple gökte uçar'], ['ŞEMSİYE', '☂️', 'Yağmurda açılır'], ['OKYANUS', '🌏', 'En büyük su kütlesi'], ['SANATÇI', '🎨', 'Fırça ve boyayla yaşar'], ['ŞEFTALİ', '🍑', 'Tüylü yaz meyvesi'], ['ÇAMAŞIR', '🧺', 'Yıkanmaya gider'], ['ASANSÖR', '🛗', 'Katlar arası taşır'], ['ŞAMPUAN', '🧴', 'Saça köpürtülür'], ['KARINCA', '🐜', 'Boyundan güçlü'], ['KELEBEK', '🦋', 'Renkli kanatlı'], ['PENGUEN', '🐧', 'Kutupların kısa kanatlısı'], ['HASTANE', '🏥', 'Ameliyatın yapıldığı yer'], ['HEMŞİRE', '💉', 'İğneyi o vurur'], ['İTFAİYE', '🚒', 'Alevlere karşı koşar'], ['KARAVAN', '🚐', 'Tekerlek üzerinde ev'], ['OKÇULUK', '🏹', 'Yay ve okla yapılan'], ['DÖRTGEN', '🔲', 'Dört kenarlı şekil'], ['KLARNET', '🎶', 'Nefesli çalgı'], ['DAVULCU', '🥁', 'Ritmi o tutar'], ['TOPLAMA', '➕', 'Artı işleminin adı']],
    8: [['DONDURMA', '🍦', 'En soğuk tatlı'], ['AYAKKABI', '👟', 'Ayağa giyilen'], ['BİSİKLET', '🚲', 'Pedalla giden'], ['PANTOLON', '👖', 'Bacağa giyilen'], ['LAHMACUN', '🫓', 'Türk pizzası'], ['DEDEKTİF', '🕵️', 'İz süren adam'], ['YELKENLİ', '⛵', 'Rüzgârla giden'], ['PORTAKAL', '🍊', 'Bol C vitaminli'], ['KİTABLIK', '📚', 'Kitapların rafı'], ['GAZETECİ', '📰', 'Haberin peşinde'], ['YOLCULUK', '🧳', 'Bavulla yapılan'], ['LABİRENT', '🌀', 'İçinden çıkılması zor'], ['KAHVALTI', '☕', 'Güne başlarken yenilen'], ['BALARISI', '🐝', 'Petekleri dolduran'], ['SUAYGIRI', '🦛', 'Suda yaşayan iri ağız'], ['GERGEDAN', '🦏', 'Burnunda boynuz'], ['AMBULANS', '🚑', 'Sireniyle koşar'], ['YILDIRIM', '⚡', 'Gökten inen şimşek'], ['SAKSAFON', '🎷', 'Kıvrık nefesli çalgı'], ['GİTARİST', '🎸', 'Telli çalgı çalan'], ['FUTBOLCU', '⚽', 'Yeşil sahada oynayan'], ['VOLEYBOL', '🏐', 'Filesi top oyunu'], ['HALTERCİ', '🏋️', 'Demir kaldıran'], ['PSİKOLOG', '🧠', 'Zihnin doktoru'], ['GEOMETRİ', '📐', 'Şekiller bilimi'], ['PİYANİST', '🎹', 'Tuşlara dokunan']],
    9: [['BUZDOLABI', '🧊', 'Yiyecekleri soğutan'], ['GÜNBATIMI', '🌅', 'Akşamki turuncu manzara'], ['YAĞMURLUK', '🧥', 'Islanmamayı sağlar'], ['BASKETBOL', '🏀', 'Potaya atılan oyun'], ['GÖKKUŞAĞI', '🌈', 'Yağmur sonrası renkli köprü'], ['MATEMATİK', '➗', 'Sayılar bilimi']],
    10: [['BİLGİSAYAR', '💻', 'Klavyeli kasa'], ['TELEVİZYON', '📺', 'Kumandalı kutu'], ['KAPLUMBAĞA', '🐢', 'Kabuklu yavaşçı'], ['UĞURBÖCEĞİ', '🐞', 'Noktalı kırmızı böcek'], ['DİŞFIRÇASI', '🪥', 'Macunla kullanılan'], ['ÜNİVERSİTE', '🎓', 'Bölüm okunan yüksek okul'], ['DONDURMACI', '🍨', 'Soğuğu satan']],
    11: [['ÇAMAŞIRHANE', '🧺', 'Yıkamaların evi'], ['DENİZFENERİ', '🗼', 'Düşen gemilere ışık'], ['ÖĞRETMENLER', '👩‍🏫', 'Tahta başındakiler'], ['MÜZİSYENLER', '🎤', 'Sahneyi sarsanlar'], ['MÜHENDİSLER', '📏', 'Projeleri çizenler'], ['ULAŞTIRMACI', '🚚', 'Yükleri yolda taşır']]
};

const KL_TIERS = [
    { rank: 'Acemi', lens: [4, 5], scale: 1 },
    { rank: 'Çırak', lens: [5, 6], scale: .95 },
    { rank: 'Kalfa', lens: [6, 7], scale: .9 },
    { rank: 'Usta', lens: [7, 8], scale: .85 },
    { rank: 'Hâfiz', lens: [8, 9], scale: .8 },
    { rank: 'Dahî', lens: [9, 10], scale: .75 },
    { rank: 'Efsane', lens: [10, 11], scale: .7 }
];
function klTierFor(level) { return KL_TIERS[Math.min(Math.floor((level - 1) / 5), KL_TIERS.length - 1)]; }

let KL_AC = null;
function klInitAudio() {
    if (KLG.muted) return;
    try {
        KL_AC = KL_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (KL_AC.state === 'suspended') KL_AC.resume();
    } catch (e) { KL_AC = null; }
}
function klTone(freq, dur, type, vol, delay) {
    if (!KL_AC || KLG.muted) return;
    try {
        const t0 = KL_AC.currentTime + (delay || 0);
        const o = KL_AC.createOscillator(), g = KL_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(KL_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const KL_SFX = {
    pick() { klTone(720, .05, 'triangle', .09); },
    place() { klTone(520, .07, 'triangle', .11); },
    remove() { klTone(380, .06, 'triangle', .09); },
    win() { klTone(523, .1, 'sine', .13); klTone(659, .1, 'sine', .13, .09); klTone(784, .2, 'sine', .14, .18); },
    wrong() { klTone(160, .2, 'sawtooth', .1); },
    hint() { klTone(980, .12, 'triangle', .1); klTone(740, .14, 'triangle', .09, .09); },
    milestone() { klTone(520, .14, 'sine', .12); klTone(660, .14, 'sine', .12, .12); klTone(880, .22, 'sine', .13, .24); },
    tick() { klTone(1100, .04, 'sine', .05); },
    over() { klTone(440, .2, 'sine', .12); klTone(330, .2, 'sine', .12, .18); klTone(220, .35, 'sine', .13, .36); }
};
window.klToggleMute = function () {
    KLG.muted = !KLG.muted;
    document.getElementById('klMuteBtn').textContent = KLG.muted ? '🔇' : '🔊';
    if (!KLG.muted) klInitAudio();
};

function klHexA(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
function klApplyTheme(idx, instant) {
    KLG.themeIdx = KL_CLAMP(idx, 0, KL_THEMES.length - 1);
    const th = KL_THEMES[KLG.themeIdx];
    document.documentElement.style.setProperty('--kl-acc', th.acc);
    const a = document.getElementById('klBgA'), b = document.getElementById('klBgB');
    a.style.display = 'block'; b.style.display = 'block';
    document.getElementById('klFx').style.display = 'block';
    if (instant) {
        a.style.background = th.bg; b.style.opacity = 0;
    } else {
        b.style.background = th.bg; b.style.opacity = 1;
        setTimeout(() => { a.style.background = th.bg; b.style.opacity = 0; }, 1500);
    }
    klBuildParticles();
}
function klHideLayers() {
    document.getElementById('klBgA').style.display = 'none';
    document.getElementById('klBgB').style.display = 'none';
    document.getElementById('klFx').style.display = 'none';
}
function klBuildParticles() {
    const fx = document.getElementById('klFx'); fx.innerHTML = '';
    const th = KL_THEMES[KLG.themeIdx];
    const count = Math.max(2, 14 - KLG.themeIdx * 2);
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'kl-pt';
        const size = KL_RND(4, 11);
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = KL_RND(0, 100) + '%';
        s.style.background = th.acc;
        s.style.boxShadow = '0 0 ' + (size * 2) + 'px ' + klHexA(th.acc, 0.8);
        s.style.setProperty('--sway', KL_RND(-70, 70) + 'px');
        s.style.animationDuration = KL_RND(7, 16) + 's';
        s.style.animationDelay = '-' + KL_RND(0, 14) + 's';
        fx.appendChild(s);
    }
}

function klClearTimers() { KLG.timers.forEach(id => clearTimeout(id)); KLG.timers = []; }
function klLater(fn, ms) { const id = setTimeout(fn, ms); KLG.timers.push(id); return id; }

window.startKelimeFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    document.getElementById('kelimeGameScreen').style.display = 'block';
    klStartGame();
};
function klStopAll() {
    KLG.on = false; KLG.paused = false;
    klClearTimers();
    cancelAnimationFrame(KLG.raf);
    document.getElementById('klOverlay').classList.remove('show');
    document.getElementById('klExitModal').style.display = 'none';
    klHideLayers();
}
window.klQuitToMode = function () {
    klStopAll();
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.klGoProfile = function () {
    klStopAll();
    hideAllMainScreens();
    document.getElementById('profileScreen').style.display = 'block';
    changeTheme('space');
};

function klStartGame() {
    klInitAudio();
    KLG.on = true; KLG.paused = false;
    KLG.level = 1; KLG.score = 0; KLG.solved = 0; KLG.streak = 0;
    document.getElementById('klOverlay').classList.remove('show');
    document.getElementById('klExitModal').style.display = 'none';
    document.getElementById('klScore').textContent = '⭐ 0';
    document.getElementById('klStreak').style.display = 'none';
    document.getElementById('klMuteBtn').textContent = KLG.muted ? '🔇' : '🔊';
    klApplyTheme(0, true);
    klStartLevel(false);
}
window.klStartGame = klStartGame;

function klPickWord(lens) {
    const ln = lens[KL_RND(0, lens.length - 1)];
    const arr = KL_BANK[ln] || KL_BANK[5];
    return arr[KL_RND(0, arr.length - 1)];
}

function klStartLevel(isMilestoneUp) {
    const tier = klTierFor(KLG.level);
    const w = klPickWord(tier.lens);
    KLG.target = w[0]; KLG.hintE = w[1]; KLG.hintT = w[2];
    KLG.revealed = 0; KLG.tries = 0;

    KLG.timeMax = Math.round((6 + 2.5 * KLG.target.length) * tier.scale);
    KLG.time = KLG.timeMax;
    KLG.lastTickSec = 99;

    document.getElementById('klLevel').textContent = 'SEVİYE ' + KLG.level;
    document.getElementById('klRank').textContent = tier.rank;
    document.getElementById('klHintEmoji').textContent = KLG.hintE;
    document.getElementById('klHintText').textContent = KLG.hintT;
    const rl = document.getElementById('klResultLine');
    rl.textContent = ''; rl.className = 'kl-result-line';
    document.getElementById('klBtnHint').disabled = KLG.target.length < 5;

    let scr;
    do { scr = KL_SHUFFLE(KLG.target.split('')); } while (scr.join('') === KLG.target && KLG.target.length > 1);
    KLG.pool = scr.map((ch, i) => ({ ch, i, used: false }));
    KLG.slots = new Array(KLG.target.length).fill(null);

    klRenderSlots();
    klRenderPool();
    klUpdateTimerUI(true);

    if (isMilestoneUp) {
        const bn = document.getElementById('klBanner');
        document.getElementById('klBn2').textContent = 'Rütbe: ' + tier.rank + ' | Tema: ' + KL_THEMES[KLG.themeIdx].name;
        document.getElementById('klBn3').textContent = 'Kelimeler uzuyor | Süre kısılıyor | Arka plan sönükleşti!';
        bn.classList.remove('show'); void bn.offsetWidth; bn.classList.add('show');
        KL_SFX.milestone();
        klLater(klShowSplash, 1500);
    } else {
        klLater(klShowSplash, 250);
    }
}

function klShowSplash() {
    if (!KLG.on) return;
    const sp = document.getElementById('klSplash');
    document.getElementById('klSpl1').textContent = 'SEVİYE ' + KLG.level;
    document.getElementById('klSpl2').textContent = KLG.target.length + ' harf | ' + KLG.timeMax + ' saniye';
    sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
    klTone(500, .08, 'sine', .08);
    klLater(() => {
        if (!KLG.on) return;
        KLG.lock = false;
        KLG.lastT = performance.now();
        cancelAnimationFrame(KLG.raf);
        klTimerLoop();
    }, 650);
}

function klRenderSlots() {
    const el = document.getElementById('klSlotsRow');
    el.innerHTML = '';
    KLG.slots.forEach((s, i) => {
        const d = document.createElement('div');
        d.className = 'kl-slot' + (s ? (s.locked ? ' locked' : ' filled') : '');
        d.innerHTML = s ? '<span class="sl">' + s.ch + '</span>' : '';
        if (s && !s.locked) d.onclick = () => klUnplace(i);
        el.appendChild(d);
    });
}
function klRenderPool() {
    const el = document.getElementById('klPoolRow');
    el.innerHTML = '';
    KLG.pool.forEach(tl => {
        const b = document.createElement('button');
        b.className = 'kl-karo' + (tl.used ? ' used' : '');
        b.textContent = tl.ch;
        b.style.animationDelay = (tl.i * 0.04) + 's';
        b.onclick = () => klPlace(tl.i);
        el.appendChild(b);
    });
}

function klFirstFreeSlot() {
    for (let i = 0; i < KLG.slots.length; i++) { if (!KLG.slots[i]) return i; }
    return -1;
}
function klPlace(tileIdx) {
    if (!KLG.on || KLG.lock || KLG.paused) return;
    const tl = KLG.pool[tileIdx];
    if (!tl || tl.used) return;
    const si = klFirstFreeSlot();
    if (si === -1) return;
    tl.used = true;
    KLG.slots[si] = { ch: tl.ch, tile: tileIdx, locked: false };
    KL_SFX.place();
    klRenderSlots();
    klRenderPool();
    if (klFirstFreeSlot() === -1) klLater(klCheckAnswer, 220);
}
function klUnplace(si) {
    if (!KLG.on || KLG.lock || KLG.paused) return;
    const s = KLG.slots[si];
    if (!s || s.locked) return;
    KLG.pool[s.tile].used = false;
    KLG.slots[si] = null;
    KL_SFX.remove();
    klRenderSlots();
    klRenderPool();
}
window.klUndoLast = function () {
    if (!KLG.on || KLG.lock || KLG.paused) return;
    for (let i = KLG.slots.length - 1; i >= 0; i--) {
        const s = KLG.slots[i];
        if (s && !s.locked) { klUnplace(i); return; }
    }
};
window.klReshuffle = function () {
    if (!KLG.on || KLG.lock || KLG.paused) return;
    const act = KLG.pool.map((tl, idx) => ({ ...tl, idx })).filter(tl => !tl.used);
    const shuffled = KL_SHUFFLE(act);
    shuffled.forEach((tl, pos) => { KLG.pool[tl.idx] = { ch: tl.ch, i: tl.idx, used: false, order: pos }; });
    KLG.pool.sort((a, b) => (a.order ?? a.i) - (b.order ?? b.i));
    klRenderPool();
    KL_SFX.pick();
};
function klCurrentWord() { return KLG.slots.map(s => s ? s.ch : '_').join(''); }

function klCheckAnswer() {
    if (!KLG.on || KLG.lock) return;
    if (klCurrentWord() === KLG.target) {
        klSolveCorrect();
    } else {
        KLG.tries++;
        KLG.streak = 0;
        document.getElementById('klStreak').style.display = 'none';
        KLG.time = Math.max(0.4, KLG.time - 3);
        klUpdateTimerUI();
        const slotEls = document.getElementById('klSlotsRow').children;
        for (const d of slotEls) { if (!d.classList.contains('locked')) d.classList.add('fail'); }
        const pnl = document.getElementById('klPanel');
        pnl.classList.remove('shake'); void pnl.offsetWidth; pnl.classList.add('shake');
        const rl = document.getElementById('klResultLine');
        rl.textContent = '❌ Olmadı, -3 saniye! (' + KLG.tries + '. deneme)';
        rl.className = 'kl-result-line bad';
        KL_SFX.wrong();
        klLater(() => {
            if (!KLG.on) return;
            for (let i = 0; i < KLG.slots.length; i++) {
                const s = KLG.slots[i];
                if (s && !s.locked) { KLG.pool[s.tile].used = false; KLG.slots[i] = null; }
            }
            klRenderSlots();
            klRenderPool();
        }, 500);
    }
}

function klSolveCorrect() {
    KLG.lock = true;
    KLG.solved++;
    const left = KLG.time;
    let pts = 40 + KLG.target.length * 15 + Math.ceil(left) * 6 - KLG.revealed * 15 - KLG.tries * 10;
    pts = Math.max(20, pts);
    let streakNote = '';
    if (KLG.tries === 0 && KLG.revealed === 0) {
        KLG.streak++;
        if (KLG.streak >= 2) {
            const bonus = Math.min(KLG.streak, 8) * 20;
            pts += bonus;
            streakNote = ' | 🔥 kusursuz x' + KLG.streak + ' (+' + bonus + ')';
        }
    } else KLG.streak = 0;
    if (KLG.level % 5 === 0) pts += 250;
    KLG.score += pts;

    const slotEls = document.getElementById('klSlotsRow').children;
    for (const d of slotEls) { d.classList.remove('fail'); d.classList.add('win'); }
    const rl = document.getElementById('klResultLine');
    rl.textContent = '✓ Doğru! ' + KLG.target + ' | +' + pts + ' puan' + streakNote;
    rl.className = 'kl-result-line ok';
    document.getElementById('klScore').textContent = '⭐ ' + KLG.score;
    if (KLG.streak >= 2) {
        const st = document.getElementById('klStreak');
        st.style.display = '';
        st.textContent = '🔥 x' + KLG.streak;
    }
    klFloatTxt(window.innerWidth / 2, window.innerHeight * 0.42, '+' + pts, '#4ade80');
    KL_SFX.win();

    const wasMilestone = KLG.level % 5 === 0;
    klLater(() => {
        if (!KLG.on) return;
        KLG.level++;
        if (wasMilestone) {
            const ti = Math.min(Math.floor((KLG.level - 1) / 5), KL_THEMES.length - 1);
            if (ti !== KLG.themeIdx) {
                klApplyTheme(ti, false);
                klStartLevel(true);
                return;
            }
        }
        klStartLevel(false);
    }, 1500);
}

window.klUseHint = function () {
    if (!KLG.on || KLG.lock || KLG.paused) return;
    if (KLG.revealed >= KLG.target.length - 2) return;
    const idx = KLG.revealed;
    const ch = KLG.target[idx];
    let tileIdx = -1;
    for (let i = 0; i < KLG.pool.length; i++) {
        if (!KLG.pool[i].used && KLG.pool[i].ch === ch) { tileIdx = i; break; }
    }
    if (tileIdx === -1) {
        for (let i = 0; i < KLG.slots.length; i++) {
            const s = KLG.slots[i];
            if (s && !s.locked && s.ch === ch) {
                KLG.pool[s.tile].used = false;
                tileIdx = s.tile;
                KLG.slots[i] = null;
                break;
            }
        }
    }
    if (tileIdx === -1) return;
    const oldS = KLG.slots[idx];
    if (oldS && !oldS.locked) { KLG.pool[oldS.tile].used = false; }
    KLG.pool[tileIdx].used = true;
    KLG.slots[idx] = { ch, tile: tileIdx, locked: true };
    KLG.revealed++;
    KLG.time = Math.max(0.4, KLG.time - 4);
    klUpdateTimerUI();
    document.getElementById('klBtnHint').disabled = KLG.revealed >= KLG.target.length - 2;
    klRenderSlots();
    klRenderPool();
    const rl = document.getElementById('klResultLine');
    rl.textContent = '💡 "' + ch + '" harfi açıldı, -4 saniye';
    rl.className = 'kl-result-line';
    KL_SFX.hint();
    if (klFirstFreeSlot() === -1) klLater(klCheckAnswer, 300);
};

function klTimerLoop() {
    if (!KLG.on) return;
    const now = performance.now();
    const dt = (now - KLG.lastT) / 1000;
    KLG.lastT = now;
    if (!KLG.paused && !KLG.lock) {
        KLG.time -= dt;
        const sec = Math.ceil(KLG.time);
        if (sec <= 3 && sec >= 1 && sec !== KLG.lastTickSec) { KLG.lastTickSec = sec; KL_SFX.tick(); }
        if (KLG.time <= 0) { KLG.time = 0; klUpdateTimerUI(); klGameOver(); return; }
        klUpdateTimerUI();
    }
    KLG.raf = requestAnimationFrame(klTimerLoop);
}
function klUpdateTimerUI(standby) {
    const p = Math.max(0, KLG.time / KLG.timeMax);
    document.getElementById('klTfill').style.width = (p * 100) + '%';
    const low = KLG.time <= 3.2 && !standby && !KLG.lock;
    document.getElementById('klTnum').textContent = KLG.time.toFixed(1) + 's';
    document.getElementById('klTnum').className = 'kl-tnum' + (low ? ' low' : '');
    document.getElementById('klTfill').className = 'kl-tfill' + (low ? ' low' : '');
}

window.klRequestExit = function () {
    if (!KLG.on) { klQuitToMode(); return; }
    if (document.getElementById('klOverlay').classList.contains('show')) return;
    KLG.paused = true;
    document.getElementById('klExitModal').style.display = 'flex';
};
window.klConfirmExit = function () {
    klQuitToMode();
};
window.klCancelExit = function () {
    document.getElementById('klExitModal').style.display = 'none';
    KLG.paused = false;
    const sp = document.getElementById('klSplash');
    document.getElementById('klSpl1').textContent = 'HAZIR?';
    document.getElementById('klSpl2').textContent = '3... 2... 1...';
    sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
    setTimeout(() => { if (KLG.on) { KLG.lastT = performance.now(); } }, 700);
};

function klFloatTxt(x, y, txt, color) {
    const s = document.createElement('span');
    s.className = 'kl-ftxt';
    s.textContent = txt;
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.transform = 'translateX(-50%)';
    s.style.color = color;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
}

function klGameOver() {
    if (!KLG.on) return;
    KLG.on = false;
    klClearTimers();
    cancelAnimationFrame(KLG.raf);
    KL_SFX.over();
    const isRec = KLG.score > KLG.best && KLG.score > 0;
    if (isRec) { KLG.best = KLG.score; klSaveBest(); }
    document.getElementById('klOvEmoji').textContent = '⏱️';
    document.getElementById('klOvTitle').textContent = 'Süre Doldu!';
    document.getElementById('klOvRec').style.display = isRec ? '' : 'none';
    document.getElementById('klOvScore').textContent = KLG.score + ' puan';
    document.getElementById('klOvLvl').textContent = KLG.level;
    document.getElementById('klOvWord').textContent = KLG.solved;
    document.getElementById('klOvRank').textContent = klTierFor(KLG.level).rank;
    document.getElementById('klOvBest').textContent = KLG.best;
    document.getElementById('klOvBtns').innerHTML =
        '<button class="kl-ov-again" onclick="klStartGame()">🔄 Tekrar</button>' +
        '<button class="kl-ov-menu" onclick="klGoProfile()">👤 Profil</button>' +
        '<button class="kl-ov-menu" onclick="klQuitToMode()">🎮 Modlar</button>';
    document.getElementById('klOverlay').classList.add('show');
}

document.addEventListener('keydown', e => {
    const gs = document.getElementById('kelimeGameScreen');
    if (e.key === 'Escape' && gs && gs.style.display === 'block' &&
        !document.getElementById('klOverlay').classList.contains('show')) klRequestExit();
});

// hızlı görsel
const HG = {
    on: false, paused: false, lock: true, muted: false,
    catId: null, level: 1, score: 0, streak: 0, best: 0,
    queue: [], cur: null, opts: [], total: 10, answered: 0, history: [],
    timeMax: 8, time: 8, lastTickSec: 99,
    timers: [], raf: 0, lastT: 0, phase: 'idle',
    phaseAtPause: 'idle', themeIdx: 0, preloaded: null, showAnswer: true
};
try { HG.bestTotal = parseInt(localStorage.getItem('hizli_best') || '0') || 0; } catch (e) { HG.bestTotal = 0; }

const HG_RND = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const HG_CLAMP = (v, a, b) => Math.min(b, Math.max(a, v));
const HG_SHUFFLE = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };

const HG_THEMES = [
    { name: 'Canlı Geceler', acc: '#38bdf8', bg: 'radial-gradient(1100px 550px at 80% -10%, rgba(0,210,255,.15), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(138,43,226,.13), transparent 60%), linear-gradient(135deg,#000a1a 0%,#001a3d 55%,#000a1a 100%)' },
    { name: 'Mor Nebula', acc: '#c084fc', bg: 'radial-gradient(1000px 600px at 75% 0%, rgba(192,132,252,.18), transparent 60%), radial-gradient(900px 500px at 15% 105%, rgba(236,72,153,.12), transparent 60%), linear-gradient(135deg,#0d001f 0%,#230045 55%,#0d001f 100%)' },
    { name: 'Gece Mavisi', acc: '#8fa8d8', bg: 'radial-gradient(1000px 550px at 80% -5%, rgba(143,168,216,.11), transparent 60%), radial-gradient(850px 480px at 12% 108%, rgba(120,140,190,.08), transparent 60%), linear-gradient(135deg,#05070f 0%,#101a30 55%,#05070f 100%)' },
    { name: 'Sönük Orman', acc: '#9fb8ac', bg: 'radial-gradient(950px 500px at 78% -5%, rgba(159,184,172,.08), transparent 60%), linear-gradient(135deg,#060a08 0%,#121a16 55%,#060a08 100%)' },
    { name: 'Grafit', acc: '#b0a490', bg: 'radial-gradient(900px 480px at 80% -5%, rgba(176,164,144,.06), transparent 60%), linear-gradient(135deg,#0a0a0b 0%,#161513 55%,#0a0a0b 100%)' },
    { name: 'Duman', acc: '#a0a0b0', bg: 'radial-gradient(900px 460px at 50% -8%, rgba(160,160,176,.05), transparent 60%), linear-gradient(135deg,#0a0a0d 0%,#141419 55%,#0a0a0d 100%)' },
    { name: 'Simsiyah Kaos', acc: '#8c8c98', bg: 'linear-gradient(135deg,#050506 0%,#0e0e11 55%,#050506 100%)' }
];

const HG_CATS = {
    hayvan: {
        name: 'Hayvan', icon: '🦁', color: '#4ade80', items: [
            { name: "kaplan", emoji: "🦁", file: "hayvan_1.jpg" }, { name: "aslan", emoji: "🐘", file: "hayvan_2.jpg" }, { name: "kara panter", emoji: "🐺", file: "hayvan_3.jpg" }, { name: "leopar", emoji: "🦅", file: "hayvan_4.jpg" }, { name: "çita", emoji: "🦉", file: "hayvan_5.jpg" },
            { name: "vaşak", emoji: "🐢", file: "hayvan_6.jpg" }, { name: "fil", emoji: "🦈", file: "hayvan_7.jpg" }, { name: "zürafa", emoji: "🐬", file: "hayvan_8.jpg" }, { name: "zebra", emoji: "🐍", file: "hayvan_9.jpg" }, { name: "karınca yiyen", emoji: "🦚", file: "hayvan_10.jpg" },
            { name: "şempanze", emoji: "🐊", file: "hayvan_11.jpg" }, { name: "goril", emoji: "🦓", file: "hayvan_12.jpg" }, { name: "su aygırı", emoji: "🦬", file: "hayvan_13.jpg" }, { name: "boğa", emoji: "🦙", file: "hayvan_14.jpg" }, { name: "lama", emoji: "🦦", file: "hayvan_15.jpg" },
            { name: "kedi", emoji: "🦩", file: "hayvan_16.jpg" }, { name: "köpek", emoji: "🦔", file: "hayvan_17.jpg" }, { name: "su samuru", emoji: "🦇", file: "hayvan_18.jpg" }, { name: "ornitorenk", emoji: "🐧", file: "hayvan_19.jpg" }, { name: "yarasa", emoji: "🐪", file: "hayvan_20.jpg" }
        ]
    },
    telefon: {
        name: 'Telefon', icon: '📱', color: '#00d2ff', items: [
            { name: "iPhone", emoji: "📱", file: "telefon_01.jpg" }, { name: "Samsung", emoji: "📱", file: "telefon_02.jpg" }, { name: "Xiaomi", emoji: "📱", file: "telefon_03.jpg" }, { name: "lenova", emoji: "📱", file: "telefon_04.jpg" }, { name: "nokia", emoji: "📱", file: "telefon_05.jpg" },
            { name: "poco", emoji: "📱", file: "telefon_06.jpg" }, { name: "redmi", emoji: "📱", file: "telefon_07.jpg" }, { name: "huwai", emoji: "📱", file: "telefon_08.jpg" }, { name: "honor", emoji: "📱", file: "telefon_09.jpg" }, { name: " oppo", emoji: "📱", file: "telefon_10.jpg" },
            { name: "realmi", emoji: "📱", file: "telefon_11.jpg" }, { name: "sony", emoji: "📱", file: "telefon_12.jpg" }, { name: "Asus", emoji: "📱", file: "telefon_13.jpg" }, { name: "Honor", emoji: "📱", file: "telefon_14.jpg" }, { name: "tekno dpart", emoji: "📱", file: "telefon_15.jpg" }
        ]
    },
    repci: {
        name: 'Repçiler', icon: '🎤', color: '#ec4899', items: [
            { name: "lvbel c5", emoji: "🎤", file: "repçi_1.jpg" }, { name: "uzi", emoji: "🎤", file: "repçi_2.jpg" }, { name: "motive", emoji: "🎤", file: "repçi_3.jpg" }, { name: "ceza", emoji: "🎤", file: "repçi_4.jpg" }, { name: "sagopa kajmer", emoji: "🎤", file: "repçi_5.jpg" },
            { name: "norm ender", emoji: "🎤", file: "repçi_6.jpg" }, { name: "kila hakan", emoji: "🎤", file: "repçi_7.jpg" }, { name: "blok 3", emoji: "🎤", file: "repçi_8.jpg" }, { name: "batuflex", emoji: "🎤", file: "repçi_9.jpg" }, { name: "ati 242", emoji: "🎤", file: "repçi_10.jpg" },
            { name: "cakal", emoji: "🎤", file: "repçi_11.jpg" }, { name: "ben fero", emoji: "🎤", file: "repçi_12.jpg" }, { name: "berkcan güven", emoji: "🎤", file: "repçi_13.jpg" }, { name: "reckol", emoji: "🎤", file: "repçi_14.jpg" }, { name: "tepki", emoji: "🎤", file: "repçi_15.jpg" },
            { name: "era7capone", emoji: "🎤", file: "repçi_16.jpg" }, { name: "khontkar", emoji: "🎤", file: "repçi_17.jpg" }, { name: "ezhel", emoji: "🎤", file: "repçi_18.jpg" }, { name: "murda", emoji: "🎤", file: "repçi_19.jpg" }, { name: "sefo", emoji: "🎤", file: "repçi_20.jpg" },
            { name: "şanişer", emoji: "🎤", file: "repçi_21.jpg" }, { name: "şehinşah", emoji: "🎤", file: "repçi_22.jpg" }, { name: "allame", emoji: "🎤", file: "repçi_23.jpg" }, { name: "gazapizim", emoji: "🎤", file: "repçi_24.jpg" }, { name: "mero", emoji: "🎤", file: "repçi_25.jpg" }
        ]
    },
    oyuncu: {
        name: 'Erkek Oyuncu', icon: '🎬', color: '#facc15', items: [
            { name: "Christian Bale", emoji: "🎬", file: "erkek_01.jpg" }, { name: "Leonardo DiCaprio", emoji: "🎬", file: "erkek_02.jpg" }, { name: "Brad Pitt", emoji: "🎬", file: "erkek_03.jpg" }, { name: "Will Smith", emoji: "🎬", file: "erkek_04.jpg" }, { name: "Nicolas Cage", emoji: "🎬", file: "erkek_05.jpg" },
            { name: "Jason Statham", emoji: "🎬", file: "erkek_06.jpg" }, { name: "Robert Downey Jr.", emoji: "🎬", file: "erkek_07.jpg" }, { name: "Hugh Jackman", emoji: "🎬", file: "erkek_08.jpg" }, { name: "Vin Diesel", emoji: "🎬", file: "erkek_09.jpg" }, { name: "Kenan İmirzalıoğlu", emoji: "🎬", file: "erkek_10.jpg" },
            { name: "Burak Özçivit", emoji: "🎬", file: "erkek_11.jpg" }, { name: "Aras Bulut İynemli", emoji: "🎬", file: "erkek_12.jpg" }, { name: "Kerem Bürsin", emoji: "🎬", file: "erkek_13.jpg" }, { name: "Çağatay Ulusoy", emoji: "🎬", file: "erkek_14.jpg" }, { name: "Kıvanç Tatlıtuğ", emoji: "🎬", file: "erkek_15.jpg" },
            { name: "Barış Arduç", emoji: "🎬", file: "erkek_16.jpg" }, { name: "Deniz Can Aktaş", emoji: "🎬", file: "erkek_17.jpg" }, { name: "Yağız Can Konyalı", emoji: "🎬", file: "erkek_18.jpg" }, { name: "çihangir cehan", emoji: "🎬", file: "erkek_19.jpg" }, { name: "Johnny Depp", emoji: "🎬", file: "erkek_20.jpg" },
            { name: "Sarp Levendoğlu", emoji: "🎬", file: "erkek_21.jpg" }, { name: "Şevket Çoruh", emoji: "🎬", file: "erkek_22.jpg" }, { name: "Tom Hardy", emoji: "🎬", file: "erkek_23.jpg" }, { name: "Tom Holland", emoji: "🎬", file: "erkek_24.jpg" }, { name: "Robert Pattinson", emoji: "🎬", file: "erkek_25.jpg" },
            { name: "Çağlar Ertuğrul", emoji: "🎬", file: "erkek_26.png" }, { name: "Pedro Pascal", emoji: "🎬", file: "erkek_27.jpg" }, { name: "Michael B. Jordan", emoji: "🎬", file: "erkek_28.jpg" }, { name: "Ahmet Rıfat Şungar", emoji: "🎬", file: "erkek_29.jpg" }, { name: "Halit Ergenç", emoji: "🎬", file: "erkek_30.jpg" },
            { name: "Sylvester Stallone", emoji: "🎬", file: "erkek_31.jpg" }, { name: "Jim Carrey", emoji: "🎬", file: "erkek_32.jpg" }, { name: "berk ali çatal", emoji: "🎬", file: "erkek_33.jpg" }, { name: "Jackie Chan", emoji: "🎬", file: "erkek_34.jpg" }, { name: "Bruce Willis", emoji: "🎬", file: "erkek_35.jpg" }
        ]
    },
    anime: {
        name: 'Kız Anime', icon: '🌸', color: '#c084fc', items: [
            { name: "Erza Scarlet", emoji: "🌸", file: "kız_01.jpg" },
            { name: "Revy", emoji: "🌸", file: "kız_02.jpg" },
            { name: "Asuna Yuuki", emoji: "🌸", file: "kız_03.jpg" },
            { name: "Hinatsuru", emoji: "🌸", file: "kız_04.jpg" },
            { name: "Mizore Shirayuki", emoji: "🌸", file: "kız_05.jpg" },
            { name: "Shura Kirigakure", emoji: "🌸", file: "kız_06.jpg" },
            { name: "Lucy Heartfilia", emoji: "🌸", file: "kız_07.jpg" },
            { name: "Millianna", emoji: "🌸", file: "kız_08.jpg" },
            { name: "Celty Sturluson", emoji: "🌸", file: "kız_09.jpg" },
            { name: "Tsunade Senju", emoji: "🌸", file: "kız_10.jpg" },
            { name: "Kagura", emoji: "🌸", file: "kız_11.jpg" },
            { name: "Rumi", emoji: "🌸", file: "kız_12.jpg" },
            { name: "Marin Kitagawa", emoji: "🌸", file: "kız_13.jpg" },
            { name: "Seras Victoria", emoji: "🌸", file: "kız_14.jpg" },
            { name: "Rias Gremory", emoji: "🌸", file: "kız_15.jpg" },
            { name: "Usagi Tsukino", emoji: "🌸", file: "kız_16.jpg" },
            { name: "Mikasa Ackerman", emoji: "🌸", file: "kız_17.jpg" },
            { name: "Yoruichi Shihouin", emoji: "🌸", file: "kız_18.jpg" },
            { name: "Nami", emoji: "🌸", file: "kız_19.jpg" },
            { name: "Winry Rockbell", emoji: "🌸", file: "kız_20.jpg" },
            { name: "Kaguya Shinomiya", emoji: "🌸", file: "kız_21.jpg" },
            { name: "Nezuko Kamado", emoji: "🌸", file: "kız_22.jpg" },
            { name: "Anya Forger", emoji: "🌸", file: "kız_23.jpg" },
            { name: "Rem", emoji: "🌸", file: "kız_24.jpg" },
            { name: "Rukia", emoji: "🌸", file: "kız_25.jpg" },
            { name: "Sakura", emoji: "🌸", file: "kız_26.jpg" },
            { name: "Power", emoji: "🌸", file: "kız_27.jpg" },
            { name: "Yor Forger", emoji: "🌸", file: "kız_28.jpg" },
            { name: "Hinata Hyuga", emoji: "🌸", file: "kız_29.jpg" },
            { name: "Makima", emoji: "🌸", file: "kız_30.jpg" },
            { name: "Nico Robin", emoji: "🌸", file: "kız_31.jpg" },
            { name: "Emilia", emoji: "🌸", file: "kız_32.jpg" },
            { name: "Zero Two", emoji: "🌸", file: "kız_33.jpg" },
            { name: "C.C.", emoji: "🌸", file: "kız_34.jpg" },
            { name: "Boa Hancock", emoji: "🌸", file: "kız_35.jpg" },
            { name: "Satsuki Kiryuin", emoji: "🌸", file: "kız_36.jpg" },
            { name: "Android 18", emoji: "🌸", file: "kız_37.jpg" },
            { name: "Esdeath", emoji: "🌸", file: "kız_38.jpg" },
            { name: "Fubuki", emoji: "🌸", file: "kız_39.jpg" },
            { name: "Rangiku Matsumoto", emoji: "🌸", file: "kız_40.jpg" },
            { name: "Mereoleona Vermillion", emoji: "🌸", file: "kız_41.jpg" },
            { name: "Faye Valentine", emoji: "🌸", file: "kız_42.jpg" },
            { name: "Fujiko Mine", emoji: "🌸", file: "kız_43.jpg" },
            { name: "Mitsuri Kanroji", emoji: "🌸", file: "kız_44.jpg" },
            { name: "Akeno Himejima", emoji: "🌸", file: "kız_45.jpg" },
            { name: "YoRHa No.2 Type B (", emoji: "🌸", file: "kız_46.jpg" },
            { name: "Lucy Heartfilia", emoji: "🌸", file: "kız_47.jpg" },
            { name: ": Mai Sakurajima", emoji: "🌸", file: "kız_48.jpg" },
            { name: "Orihime Inoue", emoji: "🌸", file: "kız_49.jpg" },
            { name: "Tatsumaki", emoji: "🌸", file: "kız_50.jpg" }
        ]
    }
};

let HG_AC = null;
function hgInitAudio() {
    if (HG.muted) return;
    try {
        HG_AC = HG_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (HG_AC.state === 'suspended') HG_AC.resume();
    } catch (e) { HG_AC = null; }
}
function hgTone(freq, dur, type, vol, delay) {
    if (!HG_AC || HG.muted) return;
    try {
        const t0 = HG_AC.currentTime + (delay || 0);
        const o = HG_AC.createOscillator(), g = HG_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(HG_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const HG_SFX = {
    flash() { hgTone(880, .09, 'sine', .12); hgTone(1320, .12, 'sine', .08, .05); },
    reveal() { hgTone(660, .1, 'triangle', .1); },
    win() { hgTone(523, .1, 'sine', .13); hgTone(659, .1, 'sine', .13, .09); hgTone(784, .2, 'sine', .14, .18); },
    fast() { hgTone(620, .08, 'sine', .12); hgTone(830, .08, 'sine', .11, .06); hgTone(1240, .16, 'sine', .12, .12); },
    wrong() { hgTone(150, .25, 'sawtooth', .11); },
    milestone() { hgTone(520, .14, 'sine', .12); hgTone(660, .14, 'sine', .12, .12); hgTone(880, .22, 'sine', .13, .24); },
    tick() { hgTone(1100, .04, 'sine', .05); },
    over() { hgTone(440, .2, 'sine', .12); hgTone(330, .2, 'sine', .12, .18); hgTone(220, .35, 'sine', .13, .36); }
};
window.hgToggleMute = function () {
    HG.muted = !HG.muted;
    document.getElementById('hgMuteBtn').textContent = HG.muted ? '🔇' : '🔊';
    if (!HG.muted) hgInitAudio();
};

function hgHexA(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
function hgApplyTheme(idx, instant) {
    HG.themeIdx = HG_CLAMP(idx, 0, HG_THEMES.length - 1);
    const th = HG_THEMES[HG.themeIdx];
    document.documentElement.style.setProperty('--hg-acc', th.acc);
    const a = document.getElementById('hgBgA'), b = document.getElementById('hgBgB');
    a.style.display = 'block'; b.style.display = 'block';
    document.getElementById('hgFx').style.display = 'block';
    if (instant) {
        a.style.background = th.bg; b.style.opacity = 0;
    } else {
        b.style.background = th.bg; b.style.opacity = 1;
        setTimeout(() => { a.style.background = th.bg; b.style.opacity = 0; }, 1500);
    }
    hgBuildParticles();
}
function hgHideLayers() {
    document.getElementById('hgBgA').style.display = 'none';
    document.getElementById('hgBgB').style.display = 'none';
    document.getElementById('hgFx').style.display = 'none';
}
function hgBuildParticles() {
    const fx = document.getElementById('hgFx'); fx.innerHTML = '';
    const th = HG_THEMES[HG.themeIdx];
    const count = Math.max(2, 14 - HG.themeIdx * 2);
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'hg-pt';
        const size = HG_RND(4, 11);
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = HG_RND(0, 100) + '%';
        s.style.background = th.acc;
        s.style.boxShadow = '0 0 ' + (size * 2) + 'px ' + hgHexA(th.acc, 0.8);
        s.style.setProperty('--sway', HG_RND(-70, 70) + 'px');
        s.style.animationDuration = HG_RND(7, 16) + 's';
        s.style.animationDelay = '-' + HG_RND(0, 14) + 's';
        fx.appendChild(s);
    }
}

function hgClearTimers() { HG.timers.forEach(id => clearTimeout(id)); HG.timers = []; }
function hgLater(fn, ms) { const id = setTimeout(fn, ms); HG.timers.push(id); return id; }

window.startHizliFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    document.getElementById('hizliCategoryScreen').style.display = 'block';
    hgRenderCats();
    changeTheme('space');
};
window.hgBackToMode = function () {
    hgStopAll();
    hideAllMainScreens();
    document.getElementById('modeScreen').style.display = 'block';
    changeTheme('space');
};
function hgStopAll() {
    HG.on = false; HG.paused = false;
    hgClearTimers();
    cancelAnimationFrame(HG.raf);
    document.getElementById('hgOverlay').classList.remove('show');
    document.getElementById('hgExitModal').style.display = 'none';
    hgHideLayers();
}
window.hgGoCats = function () {
    hgStopAll();
    hideAllMainScreens();
    document.getElementById('hizliCategoryScreen').style.display = 'block';
    hgRenderCats();
};
window.hgGoProfile = function () {
    hgStopAll();
    hideAllMainScreens();
    document.getElementById('profileScreen').style.display = 'block';
    changeTheme('space');
};

function hgBestKey() { return 'hizli_best_' + HG.catId; }
function hgLoadBest() {
    try { return parseInt(localStorage.getItem(hgBestKey()) || '0') || 0; } catch (e) { return 0; }
}
function hgSaveBest() { try { localStorage.setItem(hgBestKey(), String(HG.best)); } catch (e) { } }

window.hgRenderCats = function () {
    const grid = document.getElementById('hizliCategoryGrid');
    grid.innerHTML = Object.entries(HG_CATS).map(([id, c]) => {
        const best = parseInt(localStorage.getItem('hizli_best_' + id) || '0') || 0;
        return '<div class="category-card" style="--cc:' + c.color + '" onclick="hgPickCategory(\'' + id + '\')">' +
            '<div class="category-icon">' + c.icon + '</div>' +
            '<div class="category-title">' + c.name + '</div>' +
            '<div class="category-subtitle">' + c.items.length + ' görsel</div>' +
            (best > 0 ? '<div style="margin-top:6px;color:#facc15;font-size:11px;font-weight:700">🏆 En iyi: ' + best + '</div>' : '') +
            '</div>';
    }).join('');
};
window.hgPickCategory = function (id) {
    hgInitAudio();
    try { hgTone(660, .08, 'triangle', .1); } catch (e) { }
    HG.catId = id;
    const cat = HG_CATS[id];
    hideAllMainScreens();
    document.getElementById('hizliCountScreen').style.display = 'block';
    const inp = document.getElementById('hgCountInput');
    inp.max = cat.items.length;
    inp.value = Math.min(10, cat.items.length);
    document.getElementById('hgCountMax').textContent = '/ max ' + cat.items.length;
    document.getElementById('hgCountSub').textContent = cat.icon + ' ' + cat.name + ' - ' + cat.items.length + ' görsel mevcut • Kaç soru oynamak istersin?';
    document.getElementById('hgCountErr').textContent = '';
};
window.hgValidateCount = function () {
    const inp = document.getElementById('hgCountInput');
    const err = document.getElementById('hgCountErr');
    const v = parseInt(inp.value);
    const max = HG_CATS[HG.catId] ? HG_CATS[HG.catId].items.length : 50;
    if (!v || v < 1) { err.textContent = 'En az 1 soru seç!'; return false; }
    if (v > max) { err.textContent = 'Maksimum ' + max + '!'; return false; }
    err.textContent = '';
    return true;
};
window.hgSetVis = function (v) {
    HG.showAnswer = v;
    document.getElementById('hgVisYes').classList.toggle('selected', v);
    document.getElementById('hgVisNo').classList.toggle('selected', !v);
    document.getElementById('hgVisDesc').textContent = v ?
        'Her yanlışta doğrusu anında gösterilir' :
        'Oyun içinde hiçbir şey belli olmaz, her şey sonuç ekranında açıklanır';
};
window.hgLaunchGame = function () {
    if (!hgValidateCount()) return;
    hideAllMainScreens();
    document.getElementById('hizliGameScreen').style.display = 'block';
    hgStartGame(HG.catId, parseInt(document.getElementById('hgCountInput').value));
};
window.hgReplay = function () {
    hideAllMainScreens();
    document.getElementById('hizliGameScreen').style.display = 'block';
    hgStartGame(HG.catId, HG.total);
};

function hgStartGame(catId, total) {
    HG.on = true; HG.paused = false;
    HG.catId = catId;
    HG.total = total || HG_CATS[catId].items.length;
    HG.answered = 0;
    HG.history = [];
    HG.level = 1; HG.score = 0; HG.streak = 0;
    HG.best = hgLoadBest();
    HG.queue = HG_SHUFFLE(HG_CATS[catId].items).slice(0, HG.total);
    document.getElementById('hgOverlay').classList.remove('show');
    document.getElementById('hgExitModal').style.display = 'none';
    document.getElementById('hgScore').textContent = '⭐ 0';
    document.getElementById('hgStreak').style.display = 'none';
    document.getElementById('hgCat').textContent = HG_CATS[catId].icon + ' ' + HG_CATS[catId].name;
    document.getElementById('hgMuteBtn').textContent = HG.muted ? '🔇' : '🔊';
    hgApplyTheme(0, true);
    hgStartLevel();
}
window.hgStartGame = hgStartGame;

function hgStartLevel() {
    HG.timeMax = 8;
    HG.time = 8;
    HG.lastTickSec = 99;
    HG.phase = 'pre';

    document.getElementById('hgLevel').textContent = 'SORU ' + (HG.answered + 1) + '/' + HG.total;
    hgUpdateTimerUI(true);

    if (HG.queue.length === 0) { hgEndGame(); return; }
    HG.cur = HG.queue.pop();

    const st = document.getElementById('hgStage');
    st.classList.add('warn'); st.classList.remove('flashnow');
    document.getElementById('hgTag').textContent = '👁️ DİKKAT';
    document.getElementById('hgWarn').style.display = '';
    document.getElementById('hgImgWrap').style.display = 'none';
    document.getElementById('hgNameFlash').style.display = 'none';
    document.getElementById('hgQ').style.display = 'none';
    document.getElementById('hgFb').style.display = 'none';

    const or = document.getElementById('hgOpts');
    or.innerHTML = '';
    or.classList.add('hidden');

    hgPreload(HG.cur);
    hgLater(hgShowSplash, 200);
}

function hgImgUrl(it) {
    if (it.file) return it.file;
    const seed = encodeURIComponent(it.name + '_' + HG.catId + '_' + HG.level);
    return 'https://picsum.photos/seed/' + seed + '/600/600';
}
function hgPreload(it) {
    try {
        const img = new Image();
        img.onload = () => { HG.preloaded = img.src; };
        img.src = hgImgUrl(it);
    } catch (e) { }
}

function hgShowSplash() {
    if (!HG.on) return;
    const sp = document.getElementById('hgSplash');
    document.getElementById('hgSpl1').textContent = 'SORU ' + (HG.answered + 1) + '/' + HG.total;
    document.getElementById('hgSpl2').textContent = 'Flaş: 0.60 saniye, iyi bak!';
    sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
    hgTone(500, .08, 'sine', .08);
    hgLater(hgRunFlash, 750);
}

function hgRunFlash() {
    if (!HG.on) return;
    HG.phase = 'flash';
    const st = document.getElementById('hgStage');
    st.classList.remove('warn');
    document.getElementById('hgWarn').style.display = 'none';
    document.getElementById('hgImgWrap').style.display = '';
    document.getElementById('hgFlashImg').src = hgImgUrl(HG.cur);
    document.getElementById('hgNameFlash').style.display = 'none';
    document.getElementById('hgTag').textContent = '⚡ FLAŞ!';
    st.classList.remove('flashnow'); void st.offsetWidth; st.classList.add('flashnow');
    HG_SFX.flash();
    hgLater(hgHideFlash, 600);
}
function hgHideFlash() {
    if (!HG.on) return;
    document.getElementById('hgImgWrap').style.display = 'none';
    document.getElementById('hgQ').style.display = '';
    document.getElementById('hgTag').textContent = '🤔 HATIRLA';
    HG_SFX.reveal();
    hgLater(hgShowOptions, 420);
}

function hgShowOptions() {
    if (!HG.on) return;
    HG.phase = 'answer';
    const pool = HG_CATS[HG.catId].items.filter(it => it.name !== HG.cur.name);
    HG.opts = HG_SHUFFLE([HG.cur, ...HG_SHUFFLE(pool).slice(0, 3)]);
    const or = document.getElementById('hgOpts');
    or.innerHTML = '';
    or.classList.remove('hidden');
    HG.opts.forEach((o, i) => {
        const b = document.createElement('button');
        b.className = 'hg-opt';
        b.textContent = o.name;
        b.onclick = () => hgPick(i, b);
        or.appendChild(b);
    });
    if (HG.queue.length > 0) hgPreload(HG.queue[HG.queue.length - 1]);

    HG.lock = false;
    HG.lastT = performance.now();
    cancelAnimationFrame(HG.raf);
    hgTimerLoop();
}

function hgPick(i, btn) {
    if (!HG.on || HG.lock || HG.paused) return;
    HG.lock = true;
    HG.phase = 'feedback';
    const ok = HG.opts[i].name === HG.cur.name;
    const or = document.getElementById('hgOpts');
    for (const b of or.children) {
        b.disabled = true;
        if (HG.showAnswer && b.textContent === HG.cur.name) b.classList.add('correct');
    }
    if (ok) {
        const left = HG.time;
        const fast = (HG.timeMax - left) < 1;
        let pts = 80 + Math.ceil(left) * 15;
        const notes = [];
        if (fast) { pts += 40; notes.push('⚡ hızlı +40'); }
        HG.streak++;
        if (HG.streak >= 2) {
            const sb = Math.min(HG.streak, 8) * 25;
            pts += sb;
            notes.push('🔥 seri x' + HG.streak + ' (+' + sb + ')');
            if (HG.showAnswer) {
                const st = document.getElementById('hgStreak');
                st.style.display = '';
                st.textContent = '🔥 x' + HG.streak;
            }
        }
        HG.score += pts;
        const fb = document.getElementById('hgFb');
        if (HG.showAnswer) {
            document.getElementById('hgScore').textContent = '⭐ ' + HG.score;
            fb.textContent = '✓ ' + HG.cur.name + ' | +' + pts + (notes.length ? ' | ' + notes.join(' | ') : '');
            fb.className = 'hg-fb ok';
            fb.style.display = '';
            hgFloatTxt(window.innerWidth / 2, window.innerHeight * 0.35, '+' + pts, '#4ade80');
            fast ? HG_SFX.fast() : HG_SFX.win();
        } else {
            hgTone(420, .05, 'sine', .05);
        }

        hgRecord(true, HG.cur.name, pts);
        hgAdvanceAfterFeedback(HG.showAnswer ? 1400 : 700);
    } else {
        if (HG.showAnswer) {
            btn.classList.add('wrong');
            const pnl = document.getElementById('hgPanel');
            pnl.classList.remove('shake'); void pnl.offsetWidth; pnl.classList.add('shake');
        }
        HG.streak = 0;
        document.getElementById('hgStreak').style.display = 'none';
        const fb = document.getElementById('hgFb');
        if (HG.showAnswer) {
            fb.textContent = '❌ Doğrusu: ' + HG.cur.name;
            fb.className = 'hg-fb bad';
            fb.style.display = '';
            HG_SFX.wrong();
        } else {
            hgTone(420, .05, 'sine', .05);
        }
        hgRecord(false, HG.opts[i].name, 0);
        hgAdvanceAfterFeedback(HG.showAnswer ? 1500 : 700);
    }
}

function hgTimerLoop() {
    if (!HG.on) return;
    const now = performance.now();
    const dt = (now - HG.lastT) / 1000;
    HG.lastT = now;
    if (!HG.paused && HG.phase === 'answer' && !HG.lock) {
        HG.time -= dt;
        const sec = Math.ceil(HG.time);
        if (sec <= 3 && sec >= 1 && sec !== HG.lastTickSec) { HG.lastTickSec = sec; HG_SFX.tick(); }
        if (HG.time <= 0) { HG.time = 0; hgUpdateTimerUI(); hgTimeout(); return; }
        hgUpdateTimerUI();
    }
    HG.raf = requestAnimationFrame(hgTimerLoop);
}
function hgTimeout() {
    if (!HG.on || HG.phase !== 'answer') return;
    HG.lock = true;
    HG.phase = 'feedback';
    const or = document.getElementById('hgOpts');
    for (const b of or.children) {
        b.disabled = true;
        if (HG.showAnswer && b.textContent === HG.cur.name) b.classList.add('correct');
    }
    HG.streak = 0;
    document.getElementById('hgStreak').style.display = 'none';
    const fb = document.getElementById('hgFb');
    if (HG.showAnswer) {
        fb.textContent = '⏱️ Süre! Doğrusu: ' + HG.cur.name;
        fb.className = 'hg-fb bad';
        fb.style.display = '';
    }
    hgRecord(false, null, 0);
    hgAdvanceAfterFeedback(HG.showAnswer ? 1500 : 700);
}
function hgUpdateTimerUI(standby) {
    const p = Math.max(0, HG.time / HG.timeMax);
    document.getElementById('hgTfill').style.width = (p * 100) + '%';
    const low = HG.time <= 2 && !standby && HG.phase === 'answer';
    document.getElementById('hgTnum').textContent = standby ? '' : HG.time.toFixed(1) + 's';
    document.getElementById('hgTnum').className = 'hg-tnum' + (low ? ' low' : '');
    document.getElementById('hgTfill').className = 'hg-tfill' + (low ? ' low' : '');
}

window.hgQuitGame = function () {
    if (!HG.on) { hgGoCats(); return; }
    hgRequestExit();
};
window.hgRequestExit = function () {
    if (!HG.on) { hgGoCats(); return; }
    if (document.getElementById('hgOverlay').classList.contains('show') ||
        document.getElementById('hgExitModal').style.display === 'flex') return;
    HG.paused = true;
    HG.phaseAtPause = HG.phase;
    hgClearTimers();
    const st = document.getElementById('hgStage');
    st.classList.remove('warn');
    document.getElementById('hgExitModal').style.display = 'flex';
};
window.hgConfirmExit = function () {
    hgGoCats();
};
window.hgCancelExit = function () {
    document.getElementById('hgExitModal').style.display = 'none';
    HG.paused = false;
    const sp = document.getElementById('hgSplash');
    document.getElementById('hgSpl1').textContent = 'HAZIR?';
    document.getElementById('hgSpl2').textContent = '3... 2... 1...';
    sp.classList.remove('show'); void sp.offsetWidth; sp.classList.add('show');
    hgLater(() => {
        if (!HG.on) return;
        if (HG.phaseAtPause === 'answer') {
            HG.lastT = performance.now();
        } else {
            hgRunFlash();
        }
    }, 700);
};

function hgFloatTxt(x, y, txt, color) {
    const s = document.createElement('span');
    s.className = 'hg-ftxt';
    s.textContent = txt;
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.transform = 'translateX(-50%)';
    s.style.color = color;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
}

function hgRecord(ok, picked, pts) {
    HG.history.push({ it: HG.cur, ok: ok, picked: picked, pts: pts });
    HG.answered++;
}
function hgAdvanceAfterFeedback(delay) {
    const finished = HG.answered >= HG.total;
    hgLater(() => {
        if (!HG.on) return;
        if (finished) { hgEndGame(); return; }
        hgStartLevel();
    }, delay);
}

function hgEndGame() {
    if (!HG.on) return;
    HG.on = false;
    HG.phase = 'over';
    hgClearTimers();
    cancelAnimationFrame(HG.raf);
    const correct = HG.history.filter(h => h.ok).length;
    const wrongs = HG.history.length - correct;
    const allOk = wrongs === 0 && HG.history.length > 0;
    if (allOk) { HG_SFX.milestone(); HG_SFX.win(); } else { HG_SFX.over(); }
    const isRec = HG.score > HG.best && HG.score > 0;
    if (isRec) { HG.best = HG.score; hgSaveBest(); }
    if (HG.score > 0) {
        let totalBest = 0;
        try { totalBest = parseInt(localStorage.getItem('hizli_best') || '0') || 0; } catch (e) { }
        if (HG.score > totalBest) { try { localStorage.setItem('hizli_best', String(HG.score)); } catch (e) { } }
    }
    const cat = HG_CATS[HG.catId];
    document.getElementById('hgResEmoji').textContent = allOk ? '🏆' : '📊';
    document.getElementById('hgResTitle').textContent = allOk ? 'ZAFER!' : 'Oyun Bitti!';
    document.getElementById('hgResSub').textContent = '✅ ' + correct + ' doğru | ❌ ' + wrongs + ' yanlış';
    document.getElementById('hgResCat').textContent = cat.icon + ' ' + cat.name + ' • ' + HG.total + ' Soru';
    document.getElementById('hgResScore').textContent = HG.score;
    document.getElementById('hgResBest').textContent = HG.best;
    document.getElementById('hgResRec').style.display = isRec ? '' : 'none';
    const listEl = document.getElementById('hgResList');
    if (HG.history.length === 0) {
        listEl.style.display = 'none';
    } else {
        listEl.style.display = '';
        listEl.innerHTML = HG.history.map(h => {
            const img = (h.it.file && h.it.file.length) ? h.it.file : ('https://picsum.photos/seed/' + encodeURIComponent(h.it.name + '_' + HG.catId) + '/120/120');
            return '<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);margin-bottom:6px">' +
                '<img src="' + img + '" onerror="this.style.display=\'none\'" style="width:42px;height:42px;border-radius:10px;object-fit:cover;background:rgba(255,255,255,.06);flex-shrink:0">' +
                '<div style="flex:1;min-width:0"><div style="font-weight:800;font-size:13.5px;color:#fff">' + h.it.name + '</div>' +
                (h.ok ? '' : '<div style="font-size:11px;color:#ff6b6b;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Doğrusu: ' + h.it.name + (h.picked ? ' | Senin cevabın: ' + h.picked : ' | Süre bitti') + '</div>') + '</div>' +
                (h.ok ? '<span style="color:#4ade80;font-weight:800;font-size:13.5px;flex-shrink:0">✓ +' + h.pts + '</span>' : '<span style="color:#ff6b6b;font-weight:800;font-size:15px;flex-shrink:0">✗</span>') +
                '</div>';
        }).join('');
    }
    hideAllMainScreens();
    document.getElementById('hizliResultScreen').style.display = 'block';
}

document.addEventListener('keydown', e => {
    const gs = document.getElementById('hizliGameScreen');
    if (e.key === 'Escape' && gs && gs.style.display === 'block' &&
        !document.getElementById('hgOverlay').classList.contains('show')) hgRequestExit();
});

const ZG_CATS = {
    aburcubur: {
        name: "Abur Cubur", icon: "🍿", color: "#f59e0b", items: [
            { emoji: '🍿', name: 'Ülker Pötibör Bisküvi', image: 'aburcubur_1.jpg' },
            { emoji: '🍿', name: 'Eti Benim\'o', image: 'aburcubur_2.jpg' },
            { emoji: '🍿', name: 'Ülker Çokoprens', image: 'aburcubur_3.jpg' },
            { emoji: '🍿', name: 'Ülker Biskrem Extra', image: 'aburcubur_4.jpg' },
            { emoji: '🍿', name: 'Ülker İkram', image: 'aburcubur_5.jpg' },
            { emoji: '🍿', name: 'Ülker Halley', image: 'aburcubur_6.jpg' },
            { emoji: '🍿', name: 'Ülker Çikolata', image: 'aburcubur_7.jpg' },
            { emoji: '🍿', name: 'Milka', image: 'aburcubur_8.jpg' },
            { emoji: '🍿', name: 'Toblerone', image: 'aburcubur_9.jpg' },
            { emoji: '🍿', name: 'Ferrero Rocher', image: 'aburcubur_10.jpg' },
            { emoji: '🍿', name: 'Nestlé 1927', image: 'aburcubur_11.jpg' },
            { emoji: '🍿', name: 'Uludağ Limonata', image: 'aburcubur_12.jpg' },
            { emoji: '🍿', name: 'Coca-Cola', image: 'aburcubur_13.jpg' },
            { emoji: '🍿', name: 'Sprite', image: 'aburcubur_14.jpg' },
            { emoji: '🍿', name: 'Lipton Ice Tea', image: 'aburcubur_15.jpg' },
            { emoji: '🍿', name: 'Mis Ayran', image: 'aburcubur_16.jpg' },
            { emoji: '🍿', name: 'Didi', image: 'aburcubur_17.jpg' },
            { emoji: '🍿', name: 'Lay\'s Yoğurtlu', image: 'aburcubur_18.jpg' },
            { emoji: '🍿', name: 'Patos Rolls', image: 'aburcubur_19.jpg' },
            { emoji: '🍿', name: 'Lay\'s Fırından', image: 'aburcubur_20.jpg' },
            { emoji: '🍿', name: 'Doritos Hot Corn', image: 'aburcubur_21.jpg' },
            { emoji: '🍿', name: 'Ruffles Originals', image: 'aburcubur_22.jpg' },
            { emoji: '🍿', name: 'Patos Acılı', image: 'aburcubur_23.jpg' },
            { emoji: '🍿', name: 'Cipso Yoğurtlu', image: 'aburcubur_24.jpg' },
            { emoji: '🍿', name: 'Ruffles Ketçap', image: 'aburcubur_25.jpg' },
            { emoji: '🍿', name: 'Master Potato', image: 'aburcubur_26.jpg' },
            { emoji: '🍿', name: 'Eti Browni Gold', image: 'aburcubur_27.jpg' },
            { emoji: '🍿', name: 'Eti Burçak', image: 'aburcubur_28.jpg' }
        ]
    },
    biskuvi: {
        name: "Bisküviler", icon: "🍪", color: "#d97706", items: [
            { name: 'tutku', image: 'bisküvi_1.jpg' },
            { name: 'saklıköy', image: 'bisküvi_2.jpg' },
            { name: 'albeni', image: 'bisküvi_3.jpg' },
            { name: 'biscolata', image: 'bisküvi_4.jpg' },
            { name: 'negro', image: 'bisküvi_5.jpg' },
            { name: 'çizi', image: 'bisküvi_6.jpg' },
            { name: 'halflayf', image: 'bisküvi_7.jpg' },
            { name: 'probis', image: 'bisküvi_8.jpg' },
            { name: 'burcak', image: 'bisküvi_9.jpg' },
            { name: 'hanımeler', image: 'bisküvi_10.jpg' }
        ]
    },
    cips: {
        name: "Cipsler", icon: "🥔", color: "#facc15", items: [
            { name: 'cereza soganlı', image: 'cipsler_1.jpg' },
            { name: 'lays', image: 'cipsler_2.jpg' },
            { name: 'rufels ketcaplı', image: 'cipsler_3.jpg' },
            { name: 'rufles', image: 'cipsler_4.jpg' },
            { name: 'cereza peynirli', image: 'cipsler_5.jpg' },
            { name: 'lays türüflü', image: 'cipsler_6.jpg' },
            { name: 'doritos peynir', image: 'cipsler_7.jpg' },
            { name: 'patos', image: 'cipsler_8.jpg' },
            { name: 'lasy baharatlı', image: 'cipsler_9.jpg' },
            { name: 'doritos storm', image: 'cipsler_10.jpg' },
            { name: 'doritos taco', image: 'cipsler_11.jpg' },
            { name: 'rufles acılı', image: 'cipsler_12.jpg' },
            { name: 'lays fırından', image: 'cipsler_13.jpg' },
            { name: 'cipso tube', image: 'cipsler_14.jpg' },
            { name: 'master patato sogan krema', image: 'cipsler_15.jpg' }
        ]
    },
    icecek: {
        name: "İçecekler", icon: "🥤", color: "#38bdf8", items: [
            { name: 'Fuse Tea kavun cilek', image: 'icecek_1.jpg' },
            { name: 'beypazarı', image: 'icecek_2.jpg' },
            { name: 'monter çilekli', image: 'icecek_3.jpg' },
            { name: 'cocacola', image: 'icecek_4.jpg' },
            { name: 'fanta', image: 'icecek_5.jpg' },
            { name: 'sarıyer cola', image: 'icecek_6.jpg' },
            { name: 'camlıca gazoz', image: 'icecek_7.jpg' },
            { name: 'burn', image: 'icecek_8.jpg' },
            { name: 'furuti limon', image: 'icecek_9.jpg' },
            { name: 'uludağ', image: 'icecek_10.jpg' },
            { name: 'cupa cups', image: 'icecek_11.jpg' },
            { name: 'redbul', image: 'icecek_12.jpg' },
            { name: 'capey', image: 'icecek_13.jpg' },
            { name: 'furiti muz', image: 'icecek_14.jpg' },
            { name: 'cocacola vanilya', image: 'icecek_15.jpg' },
            { name: 'monter', image: 'icecek_16.jpg' },
            { name: 'fuse tea mango', image: 'icecek_17.jpg' },
            { name: 'cola turka', image: 'icecek_18.jpg' },
            { name: 'balck burn', image: 'icecek_19.jpg' },
            { name: 'schaweps', image: 'icecek_20.jpg' }
        ]
    },
    bayrak: {
        name: "Bayraklar", icon: "🚩", color: "#ef4444", items: [
            { emoji: '🇰🇷', name: 'Güney Kore', image: 'bayraklar_01.jpg' },
            { emoji: '🇷', name: 'Fransa', image: 'bayraklar_02.png' },
            { emoji: '🇲🇰', name: 'Kuzey Makedonya', image: 'bayraklar_03.jpg' },
            { emoji: '🇹🇷', name: 'Türkiye', image: 'bayraklar_04.png' },
            { emoji: '🇮🇱', name: 'İsrail', image: 'bayraklar_05.jpg' },
            { emoji: '🇩🇰', name: 'Danimarka', image: 'bayraklar_06.png' },
            { emoji: '🇺🇸', name: 'Amerika Birleşik Devletleri', image: 'bayraklar_07.jpg' },
            { emoji: '🇧🇷', name: 'Brezilya', image: 'bayraklar_08.png' },
            { emoji: '🇺🇿', name: 'Özbekistan', image: 'bayraklar_09.jpg' },
            { emoji: '🇾', name: 'Suriye', image: 'bayraklar_10.png' },
            { emoji: '🇦🇲', name: 'Ermenistan', image: 'bayraklar_11.png' },
            { emoji: '🇦🇿', name: 'Azerbaycan', image: 'bayraklar_12.png' },
            { emoji: '🇲', name: 'Türkmenistan', image: 'bayraklar_13.png' },
            { emoji: '🇵🇰', name: 'Pakistan', image: 'bayraklar_14.png' },
            { emoji: '🇩🇪', name: 'Almanya', image: 'bayraklar_15.png' },
            { emoji: '🇦', name: 'Güney Afrika', image: 'bayraklar_16.jpg' }
        ]
    },
    marvel: {
        name: "Marvel", icon: "🦸", color: "#f44336", items: [
            { name: "Captain America", emoji: "🛡️", file: "marvel_01.png" },
            { name: "Iron Man", emoji: "🤖", file: "marvel_02.png" },
            { name: "Spider-Man", emoji: "🕷️", file: "marvel_03.png" },
            { name: "Hulk", emoji: "💪", file: "marvel_04.png" },
            { name: "Thor", emoji: "⚡", file: "marvel_05.png" },
            { name: "Black Widow", emoji: "🕷️", file: "marvel_06.png" },
            { name: "Doctor Strange", emoji: "🪄", file: "marvel_07.png" },
            { name: "Black Panther", emoji: "🐆", file: "marvel_08.png" },
            { name: "Loki", emoji: "😈", file: "marvel_09.png" },
            { name: "Thanos", emoji: "💜", file: "marvel_10.png" },
            { name: "Rocket", emoji: "🦝", file: "marvel_11.png" },
            { name: "Star-Lord", emoji: "⭐", file: "marvel_12.png" },
            { name: "Gamora", emoji: "💚", file: "marvel_13.png" },
            { name: "Groot", emoji: "🌳", file: "marvel_14.png" },
            { name: "Venom", emoji: "🖤", file: "marvel_15.png" },
            { name: "Doctor Doom", emoji: "🟢", file: "marvel_16.png" },
            { name: "Wolverine", emoji: "⚔️", file: "marvel_17.png" },
            { name: "Deadpool", emoji: "🔴", file: "marvel_18.png" },
            { name: "Ant-Man", emoji: "🐜", file: "marvel_19.png" },
            { name: "Wasp", emoji: "🐝", file: "marvel_20.png" },
            { name: "Scorpion", emoji: "🦂", file: "marvel_21.png" },
            { name: "Rhino", emoji: "🦏", file: "marvel_22.png" },
            { name: "Scarlet Witch", emoji: "🔴", file: "marvel_23.png" },
            { name: "Hawkeye", emoji: "🏹", file: "marvel_24.png" },
            { name: "Vision", emoji: "💎", file: "marvel_25.png" },
            { name: "Winter Soldier", emoji: "❄️", file: "marvel_26.png" },
            { name: "Juggernaut", emoji: "🟡", file: "marvel_27.png" },
            { name: "Red Hulk", emoji: "🔴", file: "marvel_28.png" },
            { name: "Moon Knight", emoji: "🌙", file: "marvel_29.png" },
            { name: "Daredevil", emoji: "🔴", file: "marvel_30.png" },
            { name: "Phoenix", emoji: "🔥", file: "marvel_31.webp" },
            { name: "Magneto", emoji: "🧲", file: "marvel_32.webp" },
            { name: "Professor X", emoji: "🧠", file: "marvel_33.webp" },
            { name: "Storm", emoji: "🌪️", file: "marvel_34.avif" },
            { name: "Beast", emoji: "🐾", file: "marvel_35.webp" },
            { name: "Mystique", emoji: "🔵", file: "marvel_36.jpg" },
            { name: "Nick Fury", emoji: "💪", file: "marvel_37.jpg" },
            { name: "Ghost Rider", emoji: "🔥", file: "marvel_38.jpg" },
            { name: "Sentry", emoji: "🌟", file: "marvel_39.jpg" },
            { name: "Jessica Jones", emoji: "🔵", file: "marvel_40.jpg" },
            { name: "knull", emoji: "🔵", file: "marvel_41.jpg" },
            { name: "şahng chi", emoji: "🔵", file: "marvel_42.jpg" },
            { name: "silver surfe", emoji: "🔵", file: "marvel_43.jpg" },
            { name: "carnage", emoji: "🔵", file: "marvel_44.jpg" },
            { name: "collosus", emoji: "🔵", file: "marvel_45.jpg" }
        ]
    },
    dc: {
        name: "DC", icon: "🦇", color: "#3b82f6", items: [
            { name: "Batman", emoji: "🦇", file: "dc_01.png" },
            { name: "Superman", emoji: "🦸", file: "dc_02.png" },
            { name: "Lex Luthor", emoji: "🤵", file: "dc_03.png" },
            { name: "Joker", emoji: "🃏", file: "dc_04.png" },
            { name: "Green Arrow", emoji: "🏹", file: "dc_05.png" },
            { name: "Supergirl", emoji: "🦸‍♀️", file: "dc_06.png" },
            { name: "Darkseid", emoji: "🪨", file: "dc_07.png" },
            { name: "Alfred Pennyworth", emoji: "🤵‍♂️", file: "dc_08.png" },
            { name: "Aquaman", emoji: "🔱", file: "dc_09.png" },
            { name: "Flash", emoji: "⚡", file: "dc_10.png" },
            { name: "Wonder Woman", emoji: "🛡️", file: "dc_11.png" },
            { name: "Deathstroke", emoji: "🗡️", file: "dc_12.png" },
            { name: "Krypto", emoji: "🐕", file: "dc_13.png" },
            { name: "Two-Face", emoji: "🎭", file: "dc_14.png" },
            { name: "Blue Beetle", emoji: "🪲", file: "dc_15.png" },
            { name: "Black Adam", emoji: "🌩️", file: "dc_16.png" },
            { name: "Deadshot", emoji: "🎯", file: "dc_17.jpg" },
            { name: "Mr. Freeze", emoji: "❄️", file: "dc_18.jpg" },
            { name: "Catwoman", emoji: "🐱", file: "dc_19.jpg" },
            { name: "Penguin", emoji: "🐧", file: "dc_20.jpg" },
            { name: "Green Lantern", emoji: "💚", file: "dc_21.jpg" },
            { name: "King Shark", emoji: "🦈", file: "dc_22.jpg" },
            { name: "Peacemaker", emoji: "🕊️", file: "dc_23.jpg" },
            { name: "Harley Quinn", emoji: "🔨", file: "dc_24.jpg" },
            { name: "The Atom", emoji: "⚛️", file: "dc_25.jpg" },
            { name: "Sinestro", emoji: "💛", file: "dc_26.jpg" },
            { name: "cyborg", emoji: "💛", file: "dc_27.jpg" },
            { name: "nıghetwing", emoji: "💛", file: "dc_28.jpg" },
            { name: "red hood", emoji: "💛", file: "dc_29.jpg" },
            { name: "Martian Manhunter", emoji: "💛", file: "dc_30.jpg" }
        ]
    },
    lol: {
        name: "LoL Kostüm", icon: "🎮", color: "#a78bfa", items: [
            { name: 'Riven', image: 'lol_1.avif' },
            { name: 'Cassiopeia', image: 'lol_2.jpg' },
            { name: 'Kayle', image: 'lol_3.avif' },
            { name: 'nunu ve wulump', image: 'lol_4.jpg' },
            { name: 'Kayle', image: 'lol_5.avif' },
            { name: 'Lux', image: 'lol_6.jpg' },
            { name: 'Jax', image: 'lol_7.avif' },
            { name: 'Gwen', image: 'lol_8.jpg' },
            { name: 'Ahri', image: 'lol_9.jpg' },
            { name: 'Kayle', image: 'lol_10.avif' },
            { name: 'jhin', image: 'lol_11.jpg' },
            { name: 'singed', image: 'lol_12.avif' },
            { name: 'Irelia', image: 'lol_15.avif' },
            { name: 'jnix', image: 'lol_16.jpg' },
            { name: 'Shen', image: 'lol_17.jpg' },
            { name: 'Kindred', image: 'lol_18.jpg' },
            { name: 'warwick', image: 'lol_19.jpg' },
            { name: 'jax', image: 'lol_20.jpg' },
            { name: 'swain', image: 'lol_21.jpg' },
            { name: 'Kayle', image: 'lol_22.jpg' },
            { name: 'Kayle', image: 'lol_23.jpg' },
            { name: 'set', image: 'lol_24.jpg' },
            { name: 'samira', image: 'lol_25.jpg' },
            { name: 'jhin', image: 'lol_26.jpg' },
            { name: 'ekko', image: 'lol_27.jpg' },
            { name: 'yasuo', image: 'lol_28.jpg' },
            { name: 'malphite', image: 'lol_29.jpg' },
            { name: 'nunu ve wulump', image: 'lol_30.jpg' }
        ]
    },
    mobilelegends: {
        name: "Mobile Legends", icon: "⚔️", color: "#22d3ee", items: [
            { name: 'roger', image: 'mobil_1.jpg' },
            { name: 'bane', image: 'mobil_2.jpg' },
            { name: 'beatrix', image: 'mobil_3.jpg' },
            { name: 'gusion', image: 'mobil_4.jpg' },
            { name: 'badang', image: 'mobil_5.jpg' },
            { name: 'chou', image: 'mobil_6.jpg' },
            { name: 'pharsa', image: 'mobil_7.jpg' },
            { name: 'gord', image: 'mobil_8.jpg' },
            { name: 'sun', image: 'mobil_9.jpg' },
            { name: 'minator', image: 'mobil_10.jpg' },
            { name: 'gatotgaca', image: 'mobil_11.jpg' },
            { name: 'edhit', image: 'mobil_12.jpg' },
            { name: 'karia', image: 'mobil_13.jpg' },
            { name: 'vexsana', image: 'mobil_14.jpg' },
            { name: 'lesley', image: 'mobil_15.jpg' },
            { name: 'novaria', image: 'mobil_17.jpg' },
            { name: 'miya', image: 'mobil_18.jpg' },
            { name: 'natan', image: 'mobil_19.jpg' },
            { name: 'chou', image: 'mobil_20.jpg' },
            { name: 'fanney', image: 'mobil_21.jpg' },
            { name: 'lxia', image: 'mobil_22.jpg' },
            { name: 'freya', image: 'mobil_23.jpg' },
            { name: 'gusion', image: 'mobil_24.jpg' },
            { name: 'thamuz', image: 'mobil_25.jpg' }
        ]
    },
    oyunkarakteri: {
        name: "Oyun Karakteri", icon: "🕹️", color: "#4ade80", items: [
            { name: "Sub-Zero", emoji: "🧊", file: "oyun_01.jpg" },
            { name: "Arthur Morgan", emoji: "🤠", file: "oyun_02.webp" },
            { name: "Sonic", emoji: "🦔", file: "oyun_03.jpg" },
            { name: "Dante", emoji: "🔫", file: "oyun_04.webp" },
            { name: "Agent 47", emoji: "🔫", file: "oyun_05.jpg" },
            { name: "Scorpion", emoji: "🥷", file: "oyun_06.jpg" },
            { name: "Ryu", emoji: "👊", file: "oyun_07.jpg" },
            { name: "Kratos", emoji: "🪓", file: "oyun_08.jpg" },
            { name: "Geralt", emoji: "⚔️", file: "oyun_09.jpg" },
            { name: "Master Chief", emoji: "🔫", file: "oyun_10.jpg" },
            { name: "Malenia", emoji: "⚔️", file: "oyun_11.jpg" },
            { name: "CJ", emoji: "🔫", file: "oyun_12.jpg" },
            { name: "Mario", emoji: "🍄", file: "oyun_13.jpg" },
            { name: "Gordon Freeman", emoji: "🔧", file: "oyun_14.jpg" },
            { name: "Steve", emoji: "⛏️", file: "oyun_15.jpg" },
            { name: "Cyberpunk", emoji: "🦾", file: "oyun_16 (9).jpg" },
            { name: "Niko Bellic", emoji: "🔫", file: "oyun_17.jpg" },
            { name: "Aloy", emoji: "🏹", file: "oyun_18.jpg" },
            { name: "Ezio", emoji: "🗡️", file: "oyun_19.jpg" },
            { name: "Lara Croft", emoji: "🏹", file: "oyun_20.jpg" },
            { name: "Sam Fisher", emoji: "🔫", file: "oyun_21.jpg" },
            { name: "Ellie", emoji: "🏹", file: "oyun_22.jpg" },
            { name: "Solid Snake", emoji: "🐍", file: "oyun_23.jpg" },
            { name: "Ken", emoji: "👊", file: "oyun_24.jpg" },
            { name: "King Kong", emoji: "🦍", file: "oyun_25.jpg" },
            { name: "Noob Saibot", emoji: "🥷", file: "oyun_26.jpg" },
            { name: "Nathan Drake", emoji: "🗺️", file: "oyun_27.jpg" },
            { name: "Atreus", emoji: "🏹", file: "oyun_28.jpg" },
            { name: "Rayman", emoji: "✊", file: "oyun_29.jpg" },
            { name: "Max Payne", emoji: "🔫", file: "oyun_30.jpg" },
            { name: "kung lao", emoji: "🔫", file: "oyun_31.jpg" },
            { name: "lio kang", emoji: "🔫", file: "oyun_32.jpg" },
            { name: "raidan", emoji: "🔫", file: "oyun_33.jpg" },
            { name: "luigi", emoji: "🔫", file: "oyun_34.jpg" },
            { name: "leon kennedy", emoji: "🔫", file: "oyun_35.jpg" }
        ]
    },
    oyunlar: {
        name: "Oyunlar", icon: "👾", color: "#c084fc", items: [
            { name: "God of War", emoji: "🪓", file: "oyunlar1.jpg" },
            { name: "Minecraft", emoji: "⛏️", file: "oyunlar2.jpg" },
            { name: "CS:GO", emoji: "🔫", file: "oyunlar3.jpg" },
            { name: "League of Legends", emoji: "🧙", file: "oyunlar4.jpg" },
            { name: "Forza Horizon 5", emoji: "🏎️", file: "oyunlar5.jpg" },
            { name: "Cyberpunk 2077", emoji: "🦾", file: "oyunlar6.jpg" },
            { name: "Apex Legends", emoji: "🔺", file: "oyunlar7.jpg" },
            { name: "Fortnite", emoji: "🚌", file: "oyunlar8.jpg" },
            { name: "Chivalry 2", emoji: "⚔️", file: "oyunlar9.jpg" },
            { name: "Valorant", emoji: "🎯", file: "oyunlar10.jpg" },
            { name: "Roblox", emoji: "🧱", file: "oyunlar11.jpg" },
            { name: "PUBG Mobile", emoji: "🪂", file: "oyunlar12.jpg" },
            { name: "BioShock", emoji: "🌊", file: "oyunlar13.jpg" },
            { name: "Elden Ring", emoji: "💍", file: "oyunlar14.jpg" },
            { name: "Doom Eternal", emoji: "👹", file: "oyunlar15.jpg" },
            { name: "S.T.A.L.K.E.R. 2", emoji: "☢️", file: "oyunlar16.jpg" },
            { name: "Baldur's Gate 3", emoji: "🐉", file: "oyunlar17.jpg" },
            { name: "Grand Theft Auto V", emoji: "🚗", file: "oyunlar18.jpg" },
            { name: "Battlefield V", emoji: "💥", file: "oyunlar19.jpg" },
            { name: "Resident Evil 2", emoji: "🧟", file: "oyunlar20.jpg" },
            { name: "Halo", emoji: "👨‍🚀", file: "oyunlar21.jpg" },
            { name: "CoD: Modern Warfare III", emoji: "🎖️", file: "oyunlar22.jpg" },
            { name: "Mafia III", emoji: "🕴️", file: "oyunlar23.jpg" },
            { name: "Forza Horizon 6", emoji: "🏎️", file: "oyunlar24.jpg" },
            { name: "Mount & Blade: Warband", emoji: "🐴", file: "oyunlar25.jpg" },
            { name: "Mobile Legends", emoji: "📱", file: "oyunlar26.jpg" },
            { name: "uncherted", emoji: "📱", file: "oyunlar27.jpg" },
            { name: "outlas tirilas", emoji: "📱", file: "oyunlar28.jpg" },
            { name: "palworld", emoji: "📱", file: "oyunlar29.jpg" },
            { name: "ark survıval evolved", emoji: "📱", file: "oyunlar30.jpg" }
        ]
    },
    repci: {
        name: "Repçiler", icon: "🎤", color: "#ec4899", items: [
            { name: "lvbelc5", emoji: "", file: "repçi_1.jpg" },
            { name: "uzi", emoji: "", file: "repçi_2.jpg" },
            { name: "motive", emoji: "", file: "repçi_3.jpg" },
            { name: "ceza", emoji: "", file: "repçi_4.jpg" },
            { name: "sagapa kajmer", emoji: "", file: "repçi_5.jpg" },
            { name: "morm ender", emoji: "", file: "repçi_6.jpg" },
            { name: "kil hakan", emoji: "", file: "repçi_7.jpg" },
            { name: "blok 3", emoji: "", file: "repçi_8.jpg" },
            { name: "batuflex", emoji: "", file: "repçi_9.jpg" },
            { name: "ati242", emoji: "", file: "repçi_10.jpg" },
            { name: "çakal", emoji: "", file: "repçi_11.jpg" },
            { name: "ben fero", emoji: "", file: "repçi_12.jpg" },
            { name: "berkçan güven", emoji: "", file: "repçi_13.jpg" },
            { name: "reckol", emoji: "", file: "repçi_14.jpg" },
            { name: "tepki", emoji: "", file: "repçi_15.jpg" },
            { name: "era7capone", emoji: "", file: "repçi_16.jpg" },
            { name: "kontkar", emoji: "", file: "repçi_17.jpg" },
            { name: "ezhel", emoji: "", file: "repçi_18.jpg" },
            { name: "murda", emoji: "", file: "repçi_19.jpg" },
            { name: "sefo", emoji: "", file: "repçi_20.jpg" },
            { name: "Şanışer", emoji: "", file: "repçi_21.jpg" },
            { name: "contra", emoji: "", file: "repçi_22.jpg" },
            { name: "allame", emoji: "", file: "repçi_23.jpg" },
            { name: "gazapizim", emoji: "", file: "repçi_24.jpg" },
            { name: "mero", emoji: "", file: "repçi_25.jpg" }
        ]
    },
    dizi: {
        name: "Diziler", icon: "📺", color: "#fb7185", items: [
            { name: "Kurtlar Vadisi", emoji: "🐺", file: "dizi_01.jpg" },
            { name: "Yasak Elma", emoji: "🍎", file: "dizi_02.jpg" },
            { name: "Behzat Ç", emoji: "🚬", file: "dizi_03.jpg" },
            { name: "Leyla ile Mecnun", emoji: "❤️", file: "dizi_04.jpg" },
            { name: "Arka Sokaklar", emoji: "🚓", file: "dizi_05.jpg" },
            { name: "Dexter", emoji: "🔪", file: "dizi_07.jpg" },
            { name: "Stranger Things", emoji: "👾", file: "dizi_08.jpg" },
            { name: "The Office", emoji: "📎", file: "dizi_09.jpg" },
            { name: "Game of Thrones", emoji: "🐉", file: "dizi_10.jpg" },
            { name: "Prison Break", emoji: "🔓", file: "dizi_11.jpg" },
            { name: "Supernatural", emoji: "😈", file: "dizi_12.jpg" },
            { name: "Breaking Bad", emoji: "🧪", file: "dizi_13.jpg" },
            { name: "Sherlock", emoji: "🔍", file: "dizi_14.jpg" },
            { name: "Mr. Robot", emoji: "💻", file: "dizi_15.jpg" },
            { name: "Vikings", emoji: "🪓", file: "dizi_16.jpg" },
            { name: "black miror", emoji: "🪓", file: "dizi_17.jpg" },
            { name: "ricky and morty", emoji: "🪓", file: "dizi_18.jpg" },
            { name: "avatar son hava büküçü", emoji: "🪓", file: "dizi_19.jpg" },
            { name: "eşref rüya", emoji: "🪓", file: "dizi_20.jpg" }
        ]
    },
    film: {
        name: "Filmler", icon: "🎬", color: "#fbbf24", items: [
            { name: "Tosun Paşa", emoji: "👳", file: "flim_01.jpg" },
            { name: "Bekçiler Kralı", emoji: "👮", file: "flim_02.jpg" },
            { name: "Vizontele Tuuba", emoji: "📺", file: "flim_03.jpg" },
            { name: "Hokkabaz", emoji: "🎩", file: "flim_04.jpg" },
            { name: "Organize İşler Sazan Sarmalı", emoji: "😎", file: "flim_05.jpg" },
            { name: "Yüzüklerin Efendisi Kralın Dönüşü", emoji: "💍", file: "flim_06.jpg" },
            { name: "Esaretin Bedeli", emoji: "🔑", file: "flim_07.jpg" },
            { name: "Baba", emoji: "🤵", file: "flim_08.jpg" },
            { name: "Kara Şövalye", emoji: "🦇", file: "flim_09.jpg" },
            { name: "Dövüş Kulübü", emoji: "👊", file: "flim_10.jpg" },
            { name: "Yeşil Yol", emoji: "🟢", file: "flim_11.jpg" },
            { name: "Prestij", emoji: "✨", file: "flim_12.jpg" },
            { name: "Matrix", emoji: "💊", file: "flim_13.jpg" },
            { name: "Geleceğe Dönüş", emoji: "🚗", file: "flim_14.jpg" },
            { name: "Yıldızlararası", emoji: "🌌", file: "flim_15.jpg" },
            { name: "Terminatör", emoji: "🤖", file: "flim_16.jpg" },
            { name: "Can Dostum", emoji: "❤️", file: "flim_17.jpg" },
            { name: "Avengers Sonsuzluk Savaşı", emoji: "💥", file: "flim_18.jpg" },
            { name: "Dangal", emoji: "🤼", file: "flim_19.jpg" },
            { name: "V for Vendetta", emoji: "🎭", file: "flim_20.jpg" },
            { name: "Karayip Korsanları", emoji: "🏴‍☠️", file: "flim_21.jpg" },
            { name: "Hababam Sınıfı", emoji: "🎓", file: "flim_22.jpg" },
            { name: "Kuzuların Sessizliği", emoji: "🦋", file: "flim_23.jpg" },
            { name: "X-Men Geçmiş Günler Gelecek", emoji: "⚡", file: "flim_24.jpg" },
            { name: "Ip Man", emoji: "🥋", file: "flim_25.jpg" }
        ]
    },
    hayvan: {
        name: "Hayvanlar", icon: "🦁", color: "#34d399", items: [
            { name: "kaplan", emoji: "", file: "hayvan_1.jpg" },
            { name: "aslan", emoji: "", file: "hayvan_2.jpg" },
            { name: "kara panter", emoji: "", file: "hayvan_3.jpg" },
            { name: "leopar", emoji: "", file: "hayvan_4.jpg" },
            { name: "çita", emoji: "", file: "hayvan_5.jpg" },
            { name: "vaşak", emoji: "", file: "hayvan_6.jpg" },
            { name: "fil", emoji: "", file: "hayvan_7.jpg" },
            { name: "zürafa", emoji: "", file: "hayvan_8.jpg" },
            { name: "zebra", emoji: "", file: "hayvan_9.jpg" },
            { name: "karınca yiyen", emoji: "", file: "hayvan_10.jpg" },
            { name: "şempanze", emoji: "", file: "hayvan_11.jpg" },
            { name: "goril", emoji: "", file: "hayvan_12.jpg" },
            { name: "su aygırı", emoji: "", file: "hayvan_13.jpg" },
            { name: "boğa", emoji: "", file: "hayvan_14.jpg" },
            { name: "lama", emoji: "", file: "hayvan_15.jpg" },
            { name: "kedi", emoji: "", file: "hayvan_16.jpg" },
            { name: "köpek", emoji: "", file: "hayvan_17.jpg" },
            { name: "su samuru", emoji: "", file: "hayvan_18.jpg" },
            { name: "ornitorenk", emoji: "", file: "hayvan_19.jpg" },
            { name: "yarasa", emoji: "", file: "hayvan_20.jpg" }
        ]
    },
};

// zoom tahmin
const ZG = {
    on: false, paused: false, lock: true, muted: false,
    catId: null, level: 1, score: 0, streak: 0, best: 0,
    queue: [], cur: null, total: 10, answered: 0, history: [],
    anchor: { x: 0.5, y: 0.5 }, zJit: 1,
    time: 0, timeMax: 0, raf: 0, lastT: 0,
    timers: [], phase: 'idle', themeIdx: 0, hintUsed: false
};
try { ZG.bestTotal = parseInt(localStorage.getItem('zoom_best') || '0') || 0; } catch (e) { ZG.bestTotal = 0; }

const ZG_LEVELS = [
    { zoom: 7.0, points: 30, label: 'Çok Yakın', sec: 15 },
    { zoom: 5.0, points: 20, label: 'Yakın', sec: 14 },
    { zoom: 3.4, points: 12, label: 'Orta', sec: 13 },
    { zoom: 2.2, points: 6, label: 'Uzak', sec: 12 },
    { zoom: 1.0, points: 2, label: 'Tam Görünüm', sec: 12 }
];
const ZG_STREAK_BONUS = 5; // 3+ seri bonusu

const ZG_THEMES = [
    { name: 'Derin Mavi', acc: '#22d3ee', bg: 'radial-gradient(1100px 550px at 80% -10%, rgba(34,211,238,.15), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(59,130,246,.12), transparent 60%), linear-gradient(135deg,#000a14 0%,#001b2e 55%,#000a14 100%)' },
    { name: 'Mor Nebula', acc: '#c084fc', bg: 'radial-gradient(1000px 600px at 75% 0%, rgba(192,132,252,.18), transparent 60%), radial-gradient(900px 500px at 15% 105%, rgba(236,72,153,.12), transparent 60%), linear-gradient(135deg,#0d001f 0%,#230045 55%,#0d001f 100%)' },
    { name: 'Zümrüt', acc: '#4ade80', bg: 'radial-gradient(1000px 550px at 80% -5%, rgba(74,222,128,.13), transparent 60%), linear-gradient(135deg,#02120a 0%,#052e1c 55%,#02120a 100%)' },
    { name: 'Kehribar', acc: '#fbbf24', bg: 'radial-gradient(1000px 550px at 80% -5%, rgba(251,191,36,.12), transparent 60%), linear-gradient(135deg,#140d02 0%,#2e1f05 55%,#140d02 100%)' },
    { name: 'Kızıl', acc: '#fb7185', bg: 'radial-gradient(1000px 550px at 80% -5%, rgba(251,113,133,.13), transparent 60%), linear-gradient(135deg,#150208 0%,#330612 55%,#150208 100%)' },
    { name: 'Grafit', acc: '#b0a490', bg: 'radial-gradient(900px 480px at 80% -5%, rgba(176,164,144,.06), transparent 60%), linear-gradient(135deg,#0a0a0b 0%,#161513 55%,#0a0a0b 100%)' },
    { name: 'Simsiyah', acc: '#8c8c98', bg: 'linear-gradient(135deg,#050506 0%,#0e0e11 55%,#050506 100%)' }
];

const ZG_RND = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const ZG_CLAMP = (v, a, b) => Math.min(b, Math.max(a, v));
const ZG_SHUFFLE = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
const zgEl = s => document.getElementById(s);

let ZG_AC = null;
function zgInitAudio() {
    if (ZG.muted) return;
    try {
        ZG_AC = ZG_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (ZG_AC.state === 'suspended') ZG_AC.resume();
    } catch (e) { ZG_AC = null; }
}
function zgTone(freq, dur, type, vol, delay) {
    if (!ZG_AC || ZG.muted) return;
    try {
        const t0 = ZG_AC.currentTime + (delay || 0);
        const o = ZG_AC.createOscillator(), g = ZG_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(ZG_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const ZG_SFX = {
    zoom() { zgTone(300, .16, 'sine', .1); zgTone(460, .14, 'sine', .08, .06); },
    win() { zgTone(523, .1, 'sine', .13); zgTone(659, .1, 'sine', .13, .09); zgTone(784, .2, 'sine', .14, .18); },
    wrong() { zgTone(160, .22, 'sawtooth', .1); },
    hint() { zgTone(740, .09, 'triangle', .1); zgTone(980, .12, 'triangle', .08, .07); },
    tick() { zgTone(1100, .04, 'sine', .045); },
    over() { zgTone(440, .2, 'sine', .12); zgTone(330, .2, 'sine', .12, .18); zgTone(220, .35, 'sine', .13, .36); },
    record() { zgTone(660, .12, 'sine', .13); zgTone(880, .12, 'sine', .13, .1); zgTone(1174, .26, 'sine', .14, .2); }
};
window.zgToggleMute = function () {
    ZG.muted = !ZG.muted;
    zgEl('zgMuteBtn').textContent = ZG.muted ? '🔇' : '🔊';
    if (!ZG.muted) { zgInitAudio(); zgTone(660, .09, 'triangle', .1); }
};

function zgHexA(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
function zgApplyTheme(idx, instant) {
    ZG.themeIdx = ZG_CLAMP(idx, 0, ZG_THEMES.length - 1);
    const th = ZG_THEMES[ZG.themeIdx];
    const a = zgEl('zgBgA'), b = zgEl('zgBgB');
    a.style.display = 'block'; b.style.display = 'block';
    zgEl('zgFx').style.display = 'block';
    if (instant) { a.style.background = th.bg; b.style.opacity = 0; }
    else {
        b.style.background = th.bg; b.style.opacity = 1;
        zgLater(() => { a.style.background = th.bg; b.style.opacity = 0; }, 1500);
    }
    zgBuildParticles();
}
function zgHideLayers() {
    zgEl('zgBgA').style.display = 'none';
    zgEl('zgBgB').style.display = 'none';
    zgEl('zgFx').style.display = 'none';
}
function zgBuildParticles() {
    const fx = zgEl('zgFx'); fx.innerHTML = '';
    const th = ZG_THEMES[ZG.themeIdx];
    const count = Math.max(2, 14 - ZG.themeIdx * 2);
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'zg-pt';
        const size = ZG_RND(4, 11);
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = ZG_RND(0, 100) + '%';
        s.style.background = th.acc;
        s.style.boxShadow = '0 0 ' + (size * 2) + 'px ' + zgHexA(th.acc, 0.8);
        s.style.setProperty('--sway', ZG_RND(-70, 70) + 'px');
        s.style.animationDuration = ZG_RND(7, 16) + 's';
        s.style.animationDelay = '-' + ZG_RND(0, 14) + 's';
        fx.appendChild(s);
    }
}

function zgClearTimers() { ZG.timers.forEach(id => clearTimeout(id)); ZG.timers = []; }
function zgLater(fn, ms) { const id = setTimeout(fn, ms); ZG.timers.push(id); return id; }

function zgPoolOf(catId) {
    const cat = ZG_CATS[catId];
    if (!cat) return [];
    return cat.items
        .map((it, i) => ({
            name: (it.name || '').trim(),
            emoji: (it.emoji || '').trim(),
            file: (it.file || it.image || '').trim(),
            _i: i
        }))
        .filter(it => it.name.length > 0);
}
function zgImgUrl(it) {
    if (it.file) return it.file;
    return 'https://picsum.photos/seed/' + encodeURIComponent('zg_' + ZG.catId + '_' + it._i) + '/800/600';
}
function zgBestKey() { return 'zoom_best_' + ZG.catId; }
function zgLoadBest() { try { return parseInt(localStorage.getItem(zgBestKey()) || '0') || 0; } catch (e) { return 0; } }
function zgSaveBest() { try { localStorage.setItem(zgBestKey(), String(ZG.best)); } catch (e) { } }

window.startZoomFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    zgEl('zoomCategoryScreen').style.display = 'block';
    zgRenderCats();
    changeTheme('space');
};
window.zgBackToMode = function () {
    zgStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    zgEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.zgGoCats = function () {
    zgStopAll();
    hideAllMainScreens();
    zgEl('zoomCategoryScreen').style.display = 'block';
    zgRenderCats();
    changeTheme('space');
};
window.zgGoProfile = function () {
    zgStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    zgEl('profileScreen').style.display = 'block';
    changeTheme('space');
};
function zgStopAll() {
    ZG.on = false; ZG.paused = false; ZG.lock = true;
    zgClearTimers();
    cancelAnimationFrame(ZG.raf);
    zgEl('zgExitModal').style.display = 'none';
    zgEl('zgOverlay').classList.remove('show');
    zgHideLayers();
}
window.zgRequestExit = function () {
    if (!ZG.on) { zgBackToMode(); return; }
    ZG.paused = true;
    zgEl('zgExitModal').style.display = 'flex';
};
window.zgConfirmExit = function () {
    zgEl('zgExitModal').style.display = 'none';
    zgGoCats();
};
window.zgCancelExit = function () {
    zgEl('zgExitModal').style.display = 'none';
    ZG.paused = false; ZG.lastT = 0;
};

window.zgRenderCats = function () {
    const grid = zgEl('zoomCategoryGrid');
    grid.innerHTML = Object.keys(ZG_CATS).map(id => {
        const c = ZG_CATS[id];
        const total = c.items.length;
        const filled = zgPoolOf(id).length;
        const pct = total ? Math.round(filled / total * 100) : 0;
        const best = parseInt(localStorage.getItem('zoom_best_' + id) || '0') || 0;
        return '<div class="category-card" style="--cc:' + c.color + '" onclick="zgPickCategory(\'' + id + '\')">' +
            '<div class="category-icon">' + c.icon + '</div>' +
            '<div class="category-title">' + c.name + '</div>' +
            '<div class="category-subtitle">' + total + ' görsel</div>' +
            '<div class="zg-fillbar"><span style="width:' + pct + '%"></span></div>' +
            '<div class="zg-filltext">' + filled + ' / ' + total + ' dolu</div>' +
            (best > 0 ? '<div style="margin-top:5px;color:#facc15;font-size:11px;font-weight:700">🏆 En iyi: ' + best + '</div>' : '') +
            '</div>';
    }).join('');
};

window.zgPickCategory = function (id) {
    zgInitAudio();
    zgTone(660, .08, 'triangle', .1);
    ZG.catId = id;
    const cat = ZG_CATS[id];
    const pool = zgPoolOf(id);
    hideAllMainScreens();
    zgEl('zoomCountScreen').style.display = 'block';
    const inp = zgEl('zgCountInput');
    const max = Math.max(0, pool.length);
    inp.max = max;
    inp.value = Math.max(1, Math.min(10, max));
    zgEl('zgCountMax').textContent = '/ max ' + max;
    zgEl('zgCountSub').textContent = cat.icon + ' ' + cat.name + ' - ' + pool.length + ' / ' + cat.items.length +
        ' görsel hazır • Kaç soru oynamak istersin?';
    zgEl('zgCountErr').textContent = '';
    const note = zgEl('zgCountNote');
    if (pool.length < 4) {
        note.innerHTML = '⚠️ Bu kategoride oynayabilmek için <b>en az 4 görselin</b> adını girmen gerekiyor. ' +
            'Şu an <b>' + pool.length + '</b> dolu.<br>Kod içinde <b>ZG_CATS.' + id + '.items</b> satırlarını doldur.';
    } else {
        note.innerHTML = '🔍 Her soruda görselin <b>rastgele bir noktasına</b> zoomlanır, hep aynı yere bakmazsın.<br>' +
            '⌨️ Cevabı <b>yazarak</b> ver. Her yanlışta görüntü biraz daha açılır, <b>5. seviyede tamamen görünür</b>.';
    }
};

window.zgValidateCount = function () {
    const inp = zgEl('zgCountInput');
    const err = zgEl('zgCountErr');
    const v = parseInt(inp.value);
    const max = zgPoolOf(ZG.catId).length;
    if (max < 4) { err.textContent = 'Bu kategoride en az 4 görsel adı girmelisin!'; return false; }
    if (!v || v < 1) { err.textContent = 'En az 1 soru seç!'; return false; }
    if (v > max) { err.textContent = 'Maksimum ' + max + ' soru (hazır görsel sayısı)!'; return false; }
    err.textContent = '';
    return true;
};

window.zgLaunchGame = function () {
    if (!zgValidateCount()) return;
    hideAllMainScreens();
    zgEl('zoomGameScreen').style.display = 'block';
    zgStartGame(ZG.catId, parseInt(zgEl('zgCountInput').value));
};
window.zgReplay = function () {
    hideAllMainScreens();
    zgEl('zoomGameScreen').style.display = 'block';
    zgStartGame(ZG.catId, ZG.total);
};

function zgNewAnchor() {
    const zMax = ZG_LEVELS[0].zoom * 1.08;
    const m = 0.5 / zMax;
    return {
        x: m + Math.random() * (1 - 2 * m),
        y: m + Math.random() * (1 - 2 * m)
    };
}
function zgClampAnchor(a, z) {
    const m = 0.5 / z;
    return {
        x: Math.min(1 - m, Math.max(m, a.x)),
        y: Math.min(1 - m, Math.max(m, a.y))
    };
}
function zgZoomFor(level) {
    const base = ZG_LEVELS[level - 1].zoom;
    // son seviyede tam görünüm, jitter yok
    if (base <= 1) return 1;
    return +(base * ZG.zJit).toFixed(3);
}
function zgIsFullView() { return zgZoomFor(ZG.level) <= 1; }
function zgApplyZoom(animate, intro) {
    const img = zgEl('zgImg');
    if (img.style.display === 'none') return;
    const z = zgZoomFor(ZG.level);
    const set = (zz) => {
        const aa = zgClampAnchor(ZG.anchor, zz);
        const tx = (-zz * (aa.x - 0.5)) * 100;
        const ty = (-zz * (aa.y - 0.5)) * 100;
        img.style.transform = 'translate(' + tx.toFixed(3) + '%,' + ty.toFixed(3) + '%) scale(' + zz.toFixed(3) + ')';
    };
    img.classList.remove('anim');
    if (animate && intro) {
        set(z * 1.4);
        void img.offsetWidth; // reflow
        img.classList.add('anim');
        set(z);
    } else {
        if (animate) img.classList.add('anim');
        set(z);
        void img.offsetWidth;
    }
    const full = z <= 1;
    zgEl('zgFrame').classList.toggle('full', full);
    zgEl('zgZoomBadge').textContent = full ? '🖼️ TAM GÖRÜNÜM' : '🔬 ' + z.toFixed(1) + 'x';
}
function zgUpdateLevelUI() {
    const lv = ZG_LEVELS[ZG.level - 1];
    zgEl('zgLevelDots').innerHTML = ZG_LEVELS.map((_, i) => {
        let c = 'zg-ldot';
        if (i < ZG.level - 1) c += ' used';
        if (i === ZG.level - 1) c += ' active';
        return '<div class="' + c + '"></div>';
    }).join('');
    zgEl('zgLevelLabel').textContent = 'SEVİYE ' + ZG.level + ' • ' + lv.label.toUpperCase();
    zgEl('zgLevelPts').textContent = lv.points + ' Puan';
}
function zgUpdateTimerUI() {
    const p = ZG.timeMax > 0 ? ZG_CLAMP(ZG.time / ZG.timeMax, 0, 1) : 0;
    const f = zgEl('zgTfill');
    f.style.width = (p * 100).toFixed(1) + '%';
    f.classList.toggle('warn', p < 0.34);
}

function zgStartGame(catId, total) {
    const pool = zgPoolOf(catId);
    if (pool.length < 4) { zgGoCats(); return; }
    ZG.on = true; ZG.paused = false; ZG.lock = true;
    ZG.catId = catId;
    ZG.total = ZG_CLAMP(total || 10, 1, pool.length);
    ZG.answered = 0; ZG.history = [];
    ZG.level = 1; ZG.score = 0; ZG.streak = 0;
    ZG.best = zgLoadBest();
    ZG.queue = ZG_SHUFFLE(pool).slice(0, ZG.total);
    ZG.phase = 'play';
    zgEl('zgExitModal').style.display = 'none';
    zgEl('zgOverlay').classList.remove('show');
    zgEl('zgScore').textContent = '⭐ 0';
    zgEl('zgStreak').style.display = 'none';
    zgEl('zgCat').textContent = ZG_CATS[catId].icon + ' ' + ZG_CATS[catId].name;
    zgEl('zgMuteBtn').textContent = ZG.muted ? '🔇' : '🔊';
    zgApplyTheme(0, true);
    zgStartQuestion();
}
window.zgStartGame = zgStartGame;

function zgStartQuestion() {
    if (!ZG.on) return;
    if (ZG.queue.length === 0) { zgEndGame(); return; }
    ZG.cur = ZG.queue.pop();
    ZG.level = 1;
    ZG.hintUsed = false;
    ZG.lock = true;
    ZG.zJit = 0.94 + Math.random() * 0.12;
    ZG.anchor = zgNewAnchor();
    zgEl('zgQ').textContent = 'SORU ' + (ZG.answered + 1) + '/' + ZG.total;
    zgEl('zgHintLine').classList.remove('show');
    zgEl('zgHintBtn').disabled = false;
    zgEl('zgSkipBtn').disabled = false;
    zgEl('zgTypeInput').value = '';
    zgEl('zgTypeInput').disabled = false;
    zgEl('zgTypeInput').placeholder = 'Cevabını yaz... (' + ZG.cur.name.length + ' harf)';
    zgEl('zgOverlay').classList.remove('show');
    zgEl('zgFrame').classList.remove('full');
    zgUpdateLevelUI();

    const img = zgEl('zgImg'), ph = zgEl('zgPh');
    img.classList.remove('anim');
    img.style.transform = 'translate(0,0) scale(1)';
    ph.style.display = 'none';
    img.style.display = 'none';
    zgEl('zgPhEmoji').textContent = ZG.cur.emoji || '🖼️';
    zgEl('zgPhLabel').textContent = 'Yükleniyor...';

    img.onload = () => {
        if (!ZG.on) return;
        ph.style.display = 'none';
        img.style.display = 'block';
        zgApplyZoom(false, false);
        zgBeginAnswer();
    };
    img.onerror = () => {
        if (!ZG.on) return;
        img.style.display = 'none';
        ph.style.display = 'flex';
        zgEl('zgPhLabel').textContent = (ZG.cur.emoji || '🖼️') + '  ' + ZG.cur.name;
        zgApplyZoom(false, false);
        zgBeginAnswer();
    };
    img.src = zgImgUrl(ZG.cur);
}

function zgBeginAnswer() {
    if (!ZG.on) return;
    ZG.lock = false;
    zgStartTimer();
    zgTone(420, .09, 'sine', .08);
    try { zgEl('zgTypeInput').focus(); } catch (e) { }
}

function zgEsc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function zgNorm(s) {
    return String(s || '').toLowerCase()
        .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ş/g, 's')
        .replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ç/g, 'c')
        .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function zgLev(a, b) {
    const m = [];
    for (let i = 0; i <= b.length; i++) m[i] = [i];
    for (let j = 0; j <= a.length; j++) m[0][j] = j;
    for (let i = 1; i <= b.length; i++)
        for (let j = 1; j <= a.length; j++)
            m[i][j] = b[i - 1] === a[j - 1] ? m[i - 1][j - 1] : Math.min(m[i - 1][j - 1] + 1, m[i][j - 1] + 1, m[i - 1][j] + 1);
    return m[b.length][a.length];
}
function zgMatchTyped(text) {
    const n = zgNorm(text);
    if (!n) return null;
    const pool = zgPoolOf(ZG.catId);
    const hit = pool.find(p => zgNorm(p.name) === n);
    if (hit) return hit.name;
    let bestName = null, bestD = 1e9;
    pool.forEach(p => {
        const d = zgLev(zgNorm(p.name), n);
        if (d < bestD) { bestD = d; bestName = p.name; }
    });
    const tol = n.length <= 5 ? 1 : (n.length <= 9 ? 2 : 3);
    return bestD <= tol ? bestName : null;
}
window.zgSubmitTyped = function () {
    if (ZG.lock || !ZG.on) return;
    const v = zgEl('zgTypeInput').value;
    if (!v.trim()) return;
    const m = zgMatchTyped(v);
    zgEl('zgTypeInput').value = '';
    if (!m) {
        zgWrongFx('🤔 Tanıyamadım, yazımı kontrol edip tekrar dene');
        ZG_SFX.wrong();
        return;
    }
    zgTryAnswer(m);
};

function zgTryAnswer(name) {
    if (ZG.lock || !ZG.on) return;
    if (zgNorm(name) === zgNorm(ZG.cur.name)) { zgWin(); return; }
    ZG_SFX.wrong();
    if (ZG.level < ZG_LEVELS.length) {
        zgWrongFx('❌ "' + name + '" değil, görüntü biraz daha açılıyor');
        zgNextLevel();
    } else {
        zgLose(name);
    }
}
function zgWrongFx(msg) {
    const p = zgEl('zgPanel');
    p.classList.remove('shake'); void p.offsetWidth; p.classList.add('shake');
    if (msg) {
        const hl = zgEl('zgHintLine');
        hl.classList.add('show');
        zgEl('zgHintText').textContent = msg;
    }
}
function zgNextLevel() {
    ZG.level++;
    zgUpdateLevelUI();
    zgApplyZoom(true, true);
    ZG_SFX.zoom();
    zgStartTimer();
}
function zgWin() {
    ZG.lock = true;
    cancelAnimationFrame(ZG.raf);
    const base = ZG_LEVELS[ZG.level - 1].points;
    ZG.streak++;
    const bonus = ZG.streak >= 3 ? ZG_STREAK_BONUS : 0;
    const pts = base + bonus;
    ZG.score += pts;
    zgEl('zgScore').textContent = '⭐ ' + ZG.score;
    const st = zgEl('zgStreak');
    if (ZG.streak >= 2) { st.style.display = ''; st.textContent = '🔥 x' + ZG.streak; }
    zgEl('zgTypeInput').disabled = true;
    zgEl('zgHintBtn').disabled = true;
    zgEl('zgSkipBtn').disabled = true;
    ZG_SFX.win();
    zgShowOverlay('✅', ZG.cur.name, '+' + pts + ' Puan' + (bonus ? '  (🔥 +' + bonus + ' seri bonusu)' : ''), true);
    zgApplyTheme(ZG_CLAMP(ZG.streak - 1, 0, ZG_THEMES.length - 1), false);
    zgRecord(true, ZG.cur.name, pts);
}
function zgLose(picked) {
    ZG.lock = true;
    ZG.streak = 0;
    zgEl('zgStreak').style.display = 'none';
    cancelAnimationFrame(ZG.raf);
    zgEl('zgTypeInput').disabled = true;
    zgEl('zgHintBtn').disabled = true;
    zgEl('zgSkipBtn').disabled = true;
    ZG_SFX.over();
    zgShowOverlay('❌', ZG.cur.name, 'Doğru cevap buydu', false);
    zgRecord(false, picked || null, 0);
}
function zgShowOverlay(em, ttl, sub, good) {
    zgEl('zgOvEm').textContent = em;
    zgEl('zgOvTtl').textContent = ttl;
    zgEl('zgOvTtl').style.color = good ? '#4ade80' : '#ff6b6b';
    zgEl('zgOvSub').textContent = sub;
    const ov = zgEl('zgOverlay');
    ov.classList.remove('show'); void ov.offsetWidth; ov.classList.add('show');
    const fx = zgEl('zgFlashFx');
    fx.classList.remove('go'); void fx.offsetWidth; fx.classList.add('go');
}
function zgRecord(ok, picked, pts) {
    ZG.history.push({ it: ZG.cur, ok: ok, picked: picked, pts: pts, level: ZG.level });
    ZG.answered++;
    const finished = ZG.answered >= ZG.total || ZG.queue.length === 0;
    zgLater(() => {
        if (!ZG.on) return;
        if (finished) { zgEndGame(); return; }
        zgStartQuestion();
    }, 1900);
}

function zgStartTimer() {
    ZG.timeMax = ZG_LEVELS[ZG.level - 1].sec;
    ZG.time = ZG.timeMax;
    zgUpdateTimerUI();
    cancelAnimationFrame(ZG.raf);
    ZG.lastT = 0;
    let lastTick = 99;
    const step = (t) => {
        if (!ZG.on) return;
        if (ZG.paused) { ZG.lastT = t; ZG.raf = requestAnimationFrame(step); return; }
        if (!ZG.lastT) ZG.lastT = t;
        const dt = (t - ZG.lastT) / 1000;
        ZG.lastT = t;
        ZG.time = Math.max(0, ZG.time - dt);
        zgUpdateTimerUI();
        const sec = Math.ceil(ZG.time);
        if (sec !== lastTick && sec <= 3 && sec > 0) { lastTick = sec; ZG_SFX.tick(); }
        if (ZG.time <= 0) { zgTimeout(); return; }
        ZG.raf = requestAnimationFrame(step);
    };
    ZG.raf = requestAnimationFrame(step);
}
function zgTimeout() {
    cancelAnimationFrame(ZG.raf);
    if (ZG.lock || !ZG.on) return;
    if (ZG.level < ZG_LEVELS.length) {
        zgWrongFx('⏱ Süre doldu, görüntü uzaklaşıyor');
        zgNextLevel();
    } else {
        zgLose(null);
    }
}

window.zgUseHint = function () {
    if (ZG.lock || !ZG.on || ZG.hintUsed) return;
    ZG.hintUsed = true;
    ZG_SFX.hint();
    const nm = ZG.cur.name;
    const letters = nm.split('').map((ch, i) => (i === 0 || ch === ' ') ? ch : '_').join('');
    zgEl('zgHintText').textContent = (ZG.cur.emoji ? ZG.cur.emoji + '  ' : '') + letters + '   (' + nm.length + ' harf)';
    zgEl('zgHintLine').classList.add('show');
    zgEl('zgHintBtn').disabled = true;
};
window.zgSkip = function () {
    if (ZG.lock || !ZG.on) return;
    ZG.lock = true;
    cancelAnimationFrame(ZG.raf);
    ZG.streak = 0;
    zgEl('zgStreak').style.display = 'none';
    zgEl('zgTypeInput').disabled = true;
    zgEl('zgHintBtn').disabled = true;
    zgEl('zgSkipBtn').disabled = true;
    ZG_SFX.over();
    zgShowOverlay('⏭️', ZG.cur.name, 'Pas geçildi • 0 Puan', false);
    zgRecord(false, null, 0);
};

function zgEndGame() {
    if (!ZG.on) return;
    ZG.on = false; ZG.lock = true; ZG.phase = 'over';
    zgClearTimers();
    cancelAnimationFrame(ZG.raf);
    const correct = ZG.history.filter(h => h.ok).length;
    const wrongs = ZG.history.length - correct;
    const allOk = wrongs === 0 && ZG.history.length > 0;
    if (allOk) ZG_SFX.record(); else ZG_SFX.over();
    const isRec = ZG.score > ZG.best && ZG.score > 0;
    if (isRec) { ZG.best = ZG.score; zgSaveBest(); }
    if (ZG.score > 0) {
        let tb = 0;
        try { tb = parseInt(localStorage.getItem('zoom_best') || '0') || 0; } catch (e) { }
        if (ZG.score > tb) { try { localStorage.setItem('zoom_best', String(ZG.score)); } catch (e) { } }
    }
    try { if (ZG.score > 0 && typeof addPoints === 'function') addPoints(ZG.score); } catch (e) { }
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }

    const cat = ZG_CATS[ZG.catId];
    zgEl('zgResEmoji').textContent = allOk ? '🏆' : '🔍';
    zgEl('zgResTitle').textContent = allOk ? 'KUSURSUZ!' : 'Oyun Bitti!';
    zgEl('zgResSub').textContent = '✅ ' + correct + ' doğru | ❌ ' + wrongs + ' yanlış';
    zgEl('zgResCat').textContent = cat.icon + ' ' + cat.name + ' • ' + ZG.total + ' Soru';
    zgEl('zgResScore').textContent = ZG.score;
    zgEl('zgResCorrect').textContent = correct + '/' + ZG.history.length;
    zgEl('zgResBest').textContent = ZG.best;
    zgEl('zgResRec').style.display = isRec ? '' : 'none';
    const list = zgEl('zgResList');
    if (ZG.history.length === 0) {
        list.style.display = 'none';
    } else {
        list.style.display = '';
        list.innerHTML = ZG.history.map(h => {
            const img = h.it.file ? h.it.file : ('https://picsum.photos/seed/' + encodeURIComponent('zg_' + ZG.catId + '_' + h.it._i) + '/120/120');
            return '<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);margin-bottom:6px">' +
                '<img src="' + zgEsc(img) + '" onerror="this.style.display=\'none\'" style="width:42px;height:42px;border-radius:10px;object-fit:cover;background:rgba(255,255,255,.06);flex-shrink:0">' +
                '<div style="flex:1;min-width:0"><div style="font-weight:800;font-size:13.5px;color:#fff">' + zgEsc(h.it.name) + '</div>' +
                (h.ok
                    ? '<div style="font-size:11px;color:#8a8ab0;font-weight:700">Seviye ' + h.level + ' • ' + ZG_LEVELS[h.level - 1].label + '</div>'
                    : '<div style="font-size:11px;color:#ff6b6b;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
                    (h.picked ? 'Senin cevabın: ' + zgEsc(h.picked) : 'Bilinemedi') + '</div>') +
                '</div>' +
                (h.ok ? '<span style="color:#4ade80;font-weight:800;font-size:13.5px;flex-shrink:0">✓ +' + h.pts + '</span>'
                    : '<span style="color:#ff6b6b;font-weight:800;font-size:15px;flex-shrink:0">✗</span>') +
                '</div>';
        }).join('');
    }
    hideAllMainScreens();
    zgEl('zoomResultScreen').style.display = 'block';
    changeTheme('space');
}

document.addEventListener('keydown', e => {
    const gs = zgEl('zoomGameScreen');
    if (e.key === 'Escape' && gs && gs.style.display === 'block') zgRequestExit();
});

// eşleştirme
const ESL = {
    on: false, paused: false, lock: true, muted: false,
    level: 1, score: 0, streak: 0, best: 0,
    cards: [], flipped: [], matched: 0, totalPairs: 0,
    moves: 0, combo: 0, maxLevel: 20,
    time: 0, timeMax: 0, raf: 0, lastT: 0,
    timers: [], phase: 'idle', levelStartTime: 0
};
try { ESL.best = parseInt(localStorage.getItem('eslestirme_best') || '0') || 0; } catch (e) { ESL.best = 0; }

const ESL_EMOJIS = [
    '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍏',
    '🍐', '🍑', '🍒', '🍓', '🫐', '🥝', '🍅', '🥥', '🥑', '🍆',
    '🥔', '🥕', '🌽', '🌶️', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅',
    '🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🫓', '🥨', '🥯', '🥞',
    '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭',
    '🥪', '🌮', '🌯', '🫔', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲',
    '🫕', '🥣', '🥗', '🍿', '🧈', '🧂', '🥫', '🍱', '🍘', '🍙',
    '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮',
    '🍡', '🥟', '🥠', '🥡', '🦀', '🦞', '🦐', '🦑', '🦪', '🍦',
    '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬',
    '🍭', '🍮', '🍯', '🍼', '🥛', '☕', '🫖', '🍵', '🍶', '🍾',
    '🍷', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃', '🫗', '🥤', '🧋',
    '🧃', '🧉', '🧊', '🥢', '🍽️', '🍴', '🥄', '🔪', '🫙', '🏺'
];

const ESL_RND = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const ESL_CLAMP = (v, a, b) => Math.min(b, Math.max(a, v));
const ESL_SHUFFLE = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
const eslEl = s => document.getElementById(s);

let ESL_AC = null;
function eslInitAudio() {
    if (ESL.muted) return;
    try {
        ESL_AC = ESL_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (ESL_AC.state === 'suspended') ESL_AC.resume();
    } catch (e) { ESL_AC = null; }
}
function eslTone(freq, dur, type, vol, delay) {
    if (!ESL_AC || ESL.muted) return;
    try {
        const t0 = ESL_AC.currentTime + (delay || 0);
        const o = ESL_AC.createOscillator(), g = ESL_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(ESL_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const ESL_SFX = {
    flip() { eslTone(600, .08, 'triangle', .08); },
    match() { eslTone(523, .1, 'sine', .12); eslTone(659, .1, 'sine', .12, .08); eslTone(784, .2, 'sine', .13, .16); },
    wrong() { eslTone(200, .2, 'sawtooth', .08); },
    combo() { eslTone(880, .08, 'sine', .1); eslTone(1100, .08, 'sine', .1, .06); eslTone(1320, .15, 'sine', .11, .12); },
    levelUp() { eslTone(523, .12, 'sine', .12); eslTone(659, .12, 'sine', .12, .1); eslTone(784, .12, 'sine', .12, .2); eslTone(1047, .25, 'sine', .14, .3); },
    gameOver() { eslTone(440, .2, 'sine', .1); eslTone(330, .2, 'sine', .1, .18); eslTone(220, .35, 'sine', .11, .36); },
    tick() { eslTone(1100, .04, 'sine', .04); }
};
window.eslToggleMute = function () {
    ESL.muted = !ESL.muted;
    eslEl('eslMuteBtn').textContent = ESL.muted ? '🔇' : '🔊';
    if (!ESL.muted) eslInitAudio();
};

function eslLevelConfig(lvl) {
    const pairs = lvl + 1;
    const totalCards = pairs * 2;
    const timeMax = Math.max(15, 10 + pairs * 4);
    return { pairs, totalCards, timeMax };
}

window.startEslestirmeFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    eslEl('eslestirmeGameScreen').style.display = 'block';
    eslStartGame();
};
window.eslBackToMode = function () {
    eslStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    eslEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.eslGoProfile = function () {
    eslStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    eslEl('profileScreen').style.display = 'block';
    changeTheme('space');
};
function eslStopAll() {
    ESL.on = false; ESL.paused = false; ESL.lock = true;
    eslClearTimers();
    cancelAnimationFrame(ESL.raf);
    eslEl('eslExitModal').style.display = 'none';
    eslEl('eslLevelOverlay').classList.remove('show');
    eslEl('eslGameOverOverlay').classList.remove('show');
}
window.eslRequestExit = function () {
    if (!ESL.on) { eslBackToMode(); return; }
    ESL.paused = true;
    eslEl('eslExitModal').style.display = 'flex';
};
window.eslConfirmExit = function () {
    eslEl('eslExitModal').style.display = 'none';
    eslBackToMode();
};
window.eslCancelExit = function () {
    eslEl('eslExitModal').style.display = 'none';
    ESL.paused = false;
};

function eslClearTimers() { ESL.timers.forEach(id => clearTimeout(id)); ESL.timers = []; }
function eslLater(fn, ms) { const id = setTimeout(fn, ms); ESL.timers.push(id); return id; }

function eslStartGame() {
    eslInitAudio();
    ESL.on = true; ESL.paused = false; ESL.lock = false;
    ESL.level = 1; ESL.score = 0; ESL.streak = 0; ESL.combo = 0;
    ESL.best = parseInt(localStorage.getItem('eslestirme_best') || '0') || 0;
    eslEl('eslExitModal').style.display = 'none';
    eslEl('eslLevelOverlay').classList.remove('show');
    eslEl('eslGameOverOverlay').classList.remove('show');
    eslEl('eslScore').textContent = '⭐ 0';
    eslEl('eslStreak').style.display = 'none';
    eslEl('eslMuteBtn').textContent = ESL.muted ? '🔇' : '🔊';
    eslStartLevel();
}
window.eslStartGame = eslStartGame;
window.eslRestartGame = function () {
    eslEl('eslGameOverOverlay').classList.remove('show');
    eslStartGame();
};

function eslStartLevel() {
    const config = eslLevelConfig(ESL.level);
    ESL.totalPairs = config.pairs;
    ESL.matched = 0;
    ESL.moves = 0;
    ESL.flipped = [];
    ESL.lock = false;
    ESL.combo = 0;
    ESL.timeMax = config.timeMax;
    ESL.time = config.timeMax;
    ESL.levelStartTime = Date.now();

    const selectedEmojis = ESL_SHUFFLE(ESL_EMOJIS).slice(0, config.pairs);
    const cardEmojis = ESL_SHUFFLE([...selectedEmojis, ...selectedEmojis]);
    ESL.cards = cardEmojis.map((emoji, i) => ({
        id: i,
        emoji: emoji,
        flipped: false,
        matched: false
    }));

    eslEl('eslLevel').textContent = 'SEVİYE ' + ESL.level;

    eslRenderBoard();

    eslStartTimer();
}

function eslRenderBoard() {
    const board = eslEl('eslGameBoard');
    board.innerHTML = '';

    const total = ESL.cards.length;
    let cols;
    if (total <= 4) cols = 2;
    else if (total <= 9) cols = 3;
    else if (total <= 16) cols = 4;
    else if (total <= 25) cols = 5;
    else cols = 6;

    board.style.gridTemplateColumns = 'repeat(' + cols + ', minmax(0, 1fr))';
    board.style.maxWidth = (cols * 100 + (cols - 1) * 14) + 'px';

    ESL.cards.forEach((card, i) => {
        const el = document.createElement('div');
        el.className = 'esl-card' + (card.flipped ? ' esl-flipped' : '') + (card.matched ? ' esl-matched' : '');
        el.dataset.id = card.id;
        el.innerHTML = '<div class="esl-card-face esl-card-back">❓</div>' +
            '<div class="esl-card-face esl-card-front">' + card.emoji + '</div>';
        el.onclick = () => eslFlipCard(card.id);
        board.appendChild(el);
    });
}

function eslFlipCard(id) {
    if (ESL.lock) return;

    const card = ESL.cards[id];
    if (!card || card.flipped || card.matched) return;
    if (ESL.flipped.length >= 2) return;

    eslInitAudio();
    ESL_SFX.flip();

    card.flipped = true;
    ESL.flipped.push(card);

    const el = document.querySelector('.esl-card[data-id="' + id + '"]');
    if (el) el.classList.add('esl-flipped');

    if (ESL.flipped.length === 2) {
        ESL.moves++;
        ESL.lock = true;

        const a = ESL.flipped[0], b = ESL.flipped[1];

        if (a.emoji === b.emoji) {
            setTimeout(() => eslMatchFound(a, b), 400);
        } else {
            setTimeout(() => eslNoMatch(a, b), 800);
        }
    }
}

function eslMatchFound(a, b) {
    a.matched = true;
    b.matched = true;
    ESL.matched++;
    ESL.streak++;
    ESL.combo++;

    const basePoints = 10 * ESL.level;
    const timeBonus = Math.ceil(ESL.time) * 2;
    const comboBonus = ESL.combo >= 2 ? ESL.combo * 5 : 0;
    const totalPoints = basePoints + timeBonus + comboBonus;

    ESL.score += totalPoints;

    ESL_SFX.match();

    const elA = document.querySelector('.esl-card[data-id="' + a.id + '"]');
    const elB = document.querySelector('.esl-card[data-id="' + b.id + '"]');
    if (elA) elA.classList.add('esl-matched');
    if (elB) elB.classList.add('esl-matched');

    eslFloatPoints('+' + totalPoints);

    if (ESL.combo >= 2) {
        eslShowCombo(ESL.combo);
        ESL_SFX.combo();
    }

    ESL.flipped = [];
    ESL.lock = false;
    eslUpdateUI();

    if (ESL.matched >= ESL.totalPairs) {
        setTimeout(() => eslLevelComplete(), 600);
    }
}

function eslNoMatch(a, b) {
    ESL.streak = 0;
    ESL.combo = 0;

    ESL_SFX.wrong();

    a.flipped = false;
    b.flipped = false;

    const elA = document.querySelector('.esl-card[data-id="' + a.id + '"]');
    const elB = document.querySelector('.esl-card[data-id="' + b.id + '"]');

    if (elA) {
        elA.classList.add('esl-wrong');
        setTimeout(() => {
            elA.classList.remove('esl-flipped', 'esl-wrong');
        }, 500);
    }
    if (elB) {
        elB.classList.add('esl-wrong');
        setTimeout(() => {
            elB.classList.remove('esl-flipped', 'esl-wrong');
        }, 500);
    }

    ESL.flipped = [];
    setTimeout(() => { ESL.lock = false; }, 500);
    eslUpdateUI();
}

function eslStartTimer() {
    cancelAnimationFrame(ESL.raf);
    ESL.lastT = 0;
    let lastTick = 99;
    const step = (t) => {
        if (!ESL.on) return;
        if (ESL.paused) { ESL.lastT = t; ESL.raf = requestAnimationFrame(step); return; }
        if (!ESL.lastT) ESL.lastT = t;
        const dt = (t - ESL.lastT) / 1000;
        ESL.lastT = t;
        ESL.time = Math.max(0, ESL.time - dt);
        eslUpdateTimerUI();
        const sec = Math.ceil(ESL.time);
        if (sec !== lastTick && sec <= 3 && sec > 0) { lastTick = sec; ESL_SFX.tick(); }
        if (ESL.time <= 0) { eslGameOver(); return; }
        ESL.raf = requestAnimationFrame(step);
    };
    ESL.raf = requestAnimationFrame(step);
}

function eslUpdateTimerUI() {
    const bar = eslEl('eslTimerBar');
    const pct = ESL.timeMax > 0 ? ESL_CLAMP(ESL.time / ESL.timeMax, 0, 1) * 100 : 0;
    bar.style.width = pct + '%';
    bar.classList.toggle('low', pct < 30);
}

function eslLevelComplete() {
    cancelAnimationFrame(ESL.raf);
    ESL_SFX.levelUp();

    const timeUsed = ((Date.now() - ESL.levelStartTime) / 1000).toFixed(1);

    eslEl('eslLvOvEmoji').textContent = '🎉';
    eslEl('eslLvOvTitle').textContent = 'Seviye ' + ESL.level + ' Tamamlandı!';
    eslEl('eslLvOvSub').textContent = 'Tüm ' + ESL.totalPairs + ' çifti buldun!';
    eslEl('eslLvOvTime').textContent = timeUsed + 's';
    eslEl('eslLvOvMoves').textContent = ESL.moves;
    eslEl('eslLvOvPts').textContent = '+' + ESL.score;

    eslEl('eslLevelOverlay').classList.add('show');
}

window.eslNextLevel = function () {
    eslEl('eslLevelOverlay').classList.remove('show');
    ESL.level++;

    if (ESL.level > ESL.maxLevel) {
        eslShowGameOver(true);
        return;
    }

    eslStartLevel();
    eslUpdateUI();
};

function eslGameOver() {
    cancelAnimationFrame(ESL.raf);
    ESL_SFX.gameOver();
    eslShowGameOver(false);
}

function eslShowGameOver(allClear) {
    const isRecord = ESL.score > ESL.best && ESL.score > 0;
    if (isRecord) {
        ESL.best = ESL.score;
        try { localStorage.setItem('eslestirme_best', String(ESL.best)); } catch (e) { }
        try { if (ESL.score > 0 && typeof addPoints === 'function') addPoints(ESL.score); } catch (e) { }
    }

    eslEl('eslGoEmoji').textContent = allClear ? '👑' : '⏱️';
    eslEl('eslGoTitle').textContent = allClear ? 'MÜKEMMEL!' : 'Süre Doldu!';
    eslEl('eslGoSub').textContent = allClear
        ? 'Tüm ' + ESL.maxLevel + ' seviyeyi tamamladın!'
        : 'Seviye ' + ESL.level + '\'de süre bitti.';
    eslEl('eslGoLevel').textContent = ESL.level;
    eslEl('eslGoScore').textContent = ESL.score;
    eslEl('eslGoBest').textContent = ESL.best;
    eslEl('eslGoRecord').style.display = isRecord ? 'block' : 'none';

    eslEl('eslGameOverOverlay').classList.add('show');
}

function eslUpdateUI() {
    eslEl('eslScore').textContent = '⭐ ' + ESL.score;
    eslEl('eslStreak').textContent = '🔥 x' + ESL.streak;
    eslEl('eslStreak').style.display = ESL.streak >= 2 ? '' : 'none';
}

function eslFloatPoints(text) {
    const el = document.createElement('div');
    el.className = 'esl-float-points';
    el.textContent = text;
    el.style.left = (window.innerWidth / 2 - 30) + 'px';
    el.style.top = (window.innerHeight / 2 - 50) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

function eslShowCombo(count) {
    const el = eslEl('eslComboDisplay');
    el.textContent = '🔥 ' + count + 'x COMBO!';
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 800);
}

document.addEventListener('keydown', e => {
    const gs = eslEl('eslestirmeGameScreen');
    if (e.key === 'Escape' && gs && gs.style.display === 'block') eslRequestExit();
});

// yılan
const YL = {
    on: false, paused: false, lock: true, muted: false, dead: false,
    level: 1, score: 0, best: 0, maxLevel: 20,
    snake: [], dir: { x: 1, y: 0 }, nextDirs: [],
    food: null, golden: false,
    eaten: 0, target: 0, levelScore: 0,
    streak: 0, lastEatTime: 0,
    time: 0, timeMax: 0, tickMs: 190, acc: 0,
    raf: 0, lastT: 0, lastSec: -1,
    timers: [], levelStartTime: 0, phase: 'idle',
    gridSize: 17, cell: 30, ctx: null,
    bg: null, sprApple: null, sprStar: null
};
try { YL.best = parseInt(localStorage.getItem('yilan_best') || '0') || 0; } catch (e) { YL.best = 0; }

const ylEl = s => document.getElementById(s);
const ylRnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const ylClamp = (v, a, b) => Math.min(b, Math.max(a, v));

let YL_AC = null;
function ylInitAudio() {
    if (YL.muted) return;
    try {
        YL_AC = YL_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (YL_AC.state === 'suspended') YL_AC.resume();
    } catch (e) { YL_AC = null; }
}
function ylTone(freq, dur, type, vol, delay) {
    if (!YL_AC || YL.muted) return;
    try {
        const t0 = YL_AC.currentTime + (delay || 0);
        const o = YL_AC.createOscillator(), g = YL_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(YL_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const YL_SFX = {
    eat() { ylTone(660, .07, 'triangle', .1); ylTone(880, .09, 'sine', .1, .05); },
    golden() { ylTone(880, .1, 'sine', .12); ylTone(1174, .1, 'sine', .12, .08); ylTone(1568, .18, 'sine', .13, .16); },
    combo() { ylTone(988, .07, 'sine', .1); ylTone(1319, .12, 'sine', .11, .06); },
    levelUp() { ylTone(523, .12, 'sine', .12); ylTone(659, .12, 'sine', .12, .1); ylTone(784, .12, 'sine', .12, .2); ylTone(1047, .25, 'sine', .14, .3); },
    gameOver() { ylTone(392, .18, 'sawtooth', .08); ylTone(294, .18, 'sawtooth', .08, .16); ylTone(196, .35, 'sawtooth', .09, .32); },
    tick() { ylTone(1200, .04, 'sine', .05); },
    beep(f) { ylTone(f || 700, .12, 'square', .07); }
};
window.ylToggleMute = function () {
    YL.muted = !YL.muted;
    ylEl('ylMuteBtn').textContent = YL.muted ? '🔇' : '🔊';
    if (!YL.muted) ylInitAudio();
};

function ylLevelConfig(lvl) {
    const target = 4 + lvl;
    const tickMs = Math.max(75, 190 - (lvl - 1) * 7);
    const timeMax = Math.round(12 + target * 4.5);
    return { target, tickMs, timeMax };
}

function ylClearTimers() { YL.timers.forEach(id => clearTimeout(id)); YL.timers = []; }
function ylLater(fn, ms) { const id = setTimeout(fn, ms); YL.timers.push(id); return id; }

window.startYilanFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    ylEl('yilanGameScreen').style.display = 'block';
    ylStartGame();
};
window.ylBackToMode = function () {
    ylStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    ylEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.ylGoProfile = function () {
    ylStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    ylEl('profileScreen').style.display = 'block';
    changeTheme('space');
};
function ylStopAll() {
    YL.on = false; YL.paused = false; YL.lock = true; YL.phase = 'idle';
    ylClearTimers();
    cancelAnimationFrame(YL.raf);
    ylEl('ylExitModal').style.display = 'none';
    ylEl('ylLevelOverlay').classList.remove('show');
    ylEl('ylGameOverOverlay').classList.remove('show');
    const cd = ylEl('ylCountdown'); if (cd) cd.style.display = 'none';
    const wrap = ylEl('ylCanvasWrap');
    if (wrap) wrap.querySelectorAll('.yl-death-flash').forEach(f => f.remove());
}
window.ylRequestExit = function () {
    if (!YL.on) { ylBackToMode(); return; }
    YL.paused = true;
    ylEl('ylExitModal').style.display = 'flex';
};
window.ylConfirmExit = function () {
    ylEl('ylExitModal').style.display = 'none';
    ylBackToMode();
};
window.ylCancelExit = function () {
    ylEl('ylExitModal').style.display = 'none';
    YL.paused = false;
};

function ylStartGame() {
    ylInitAudio();
    YL.on = true; YL.paused = false; YL.lock = true; YL.dead = false;
    YL.level = 1; YL.score = 0; YL.streak = 0;
    YL.best = parseInt(localStorage.getItem('yilan_best') || '0') || 0;
    if (!YL.ctx) YL.ctx = ylEl('ylCanvas').getContext('2d');
    ylBuildSprites();
    ylEl('ylExitModal').style.display = 'none';
    ylEl('ylLevelOverlay').classList.remove('show');
    ylEl('ylGameOverOverlay').classList.remove('show');
    ylEl('ylScore').textContent = '⭐ 0';
    ylEl('ylStreak').style.display = 'none';
    ylEl('ylMuteBtn').textContent = YL.muted ? '🔇' : '🔊';
    ylFitCanvas();
    ylStartLevel();
}
window.ylRestartGame = function () {
    ylEl('ylGameOverOverlay').classList.remove('show');
    const wrap = ylEl('ylCanvasWrap');
    if (wrap) wrap.querySelectorAll('.yl-death-flash').forEach(f => f.remove());
    ylStartGame();
};

function ylFitCanvas() {
    const cv = ylEl('ylCanvas');
    if (!cv) return;
    const avail = Math.min(window.innerWidth - 48, window.innerHeight - 330);
    const size = Math.max(255, Math.min(510, Math.floor(avail)));
    cv.style.width = size + 'px';
    cv.style.height = size + 'px';
}
window.addEventListener('resize', () => { if (YL.on) ylFitCanvas(); });

function ylStartLevel() {
    const cfg = ylLevelConfig(YL.level);
    YL.target = cfg.target;
    YL.eaten = 0;
    YL.levelScore = 0;
    YL.streak = 0;
    YL.lastEatTime = 0;
    YL.tickMs = cfg.tickMs;
    YL.timeMax = cfg.timeMax;
    YL.time = cfg.timeMax;
    YL.acc = 0;
    YL.lastT = 0;
    YL.lastSec = -1;
    YL.dead = false;
    YL.lock = true;
    YL.phase = 'countdown';
    YL.dir = { x: 1, y: 0 };
    YL.nextDirs = [];
    const mid = Math.floor(YL.gridSize / 2);
    YL.snake = [{ x: mid, y: mid }, { x: mid - 1, y: mid }, { x: mid - 2, y: mid }];
    ylSpawnFood();

    ylEl('ylLevel').textContent = 'SEVİYE ' + YL.level;
    ylEl('ylLevelOverlay').classList.remove('show');
    ylUpdateUI();
    ylUpdateTimerUI();
    ylDraw();
    ylCountdown(3);
}

function ylCountdown(n) {
    if (!YL.on) return;
    const cd = ylEl('ylCountdown');
    if (n <= 0) {
        cd.style.display = 'none';
        YL.phase = 'playing';
        YL.lock = false;
        YL.levelStartTime = Date.now();
        YL.lastT = 0;
        YL.raf = requestAnimationFrame(ylLoop);
        return;
    }
    cd.style.display = 'flex';
    cd.textContent = n;
    YL_SFX.beep(600 + (3 - n) * 120);
    ylLater(() => ylCountdown(n - 1), 600);
}

function ylSpawnFood() {
    const occupied = new Set(YL.snake.map(s => s.x + ',' + s.y));
    let x = 0, y = 0, tries = 0;
    do {
        x = ylRnd(0, YL.gridSize - 1);
        y = ylRnd(0, YL.gridSize - 1);
        tries++;
    } while (occupied.has(x + ',' + y) && tries < 500);
    YL.food = { x, y };
    YL.golden = (YL.eaten + 1) % 5 === 0; // her 5. yem altın
}

function ylLoop(t) {
    if (!YL.on || YL.phase !== 'playing') return;
    if (YL.paused) { YL.lastT = t; YL.raf = requestAnimationFrame(ylLoop); return; }
    if (!YL.lastT) YL.lastT = t;
    const dt = Math.min(250, t - YL.lastT);
    YL.lastT = t;

    YL.time = Math.max(0, YL.time - dt / 1000);
    ylUpdateTimerUI();
    const sec = Math.ceil(YL.time);
    if (sec !== YL.lastSec && sec <= 3 && sec > 0) { YL.lastSec = sec; YL_SFX.tick(); }
    if (YL.time <= 0) { ylDie('time'); return; }

    if (!YL.lock) {
        YL.acc += dt;
        while (YL.acc >= YL.tickMs && YL.phase === 'playing') {
            YL.acc -= YL.tickMs;
            ylStep();
        }
    }
    if (YL.phase !== 'playing') return;

    ylDraw();
    YL.raf = requestAnimationFrame(ylLoop);
}

function ylStep() {
    while (YL.nextDirs.length) {
        const d = YL.nextDirs.shift();
        if (d.x !== -YL.dir.x || d.y !== -YL.dir.y) { YL.dir = d; break; }
    }
    const head = YL.snake[0];
    const nx = head.x + YL.dir.x;
    const ny = head.y + YL.dir.y;

    if (nx < 0 || ny < 0 || nx >= YL.gridSize || ny >= YL.gridSize) { ylDie('wall'); return; }

    const willGrow = YL.food && nx === YL.food.x && ny === YL.food.y;

    const bodyToCheck = willGrow ? YL.snake : YL.snake.slice(0, -1);
    for (let i = 0; i < bodyToCheck.length; i++) {
        if (bodyToCheck[i].x === nx && bodyToCheck[i].y === ny) { ylDie('self'); return; }
    }

    YL.snake.unshift({ x: nx, y: ny });
    if (willGrow) ylEatFood();
    else YL.snake.pop();
}

function ylEatFood() {
    YL.eaten++;
    const now = Date.now();
    if (now - YL.lastEatTime <= 4000 && YL.lastEatTime > 0) YL.streak++;
    else YL.streak = 1;
    YL.lastEatTime = now;

    let pts = 10 + YL.level;
    if (YL.golden) {
        pts = 50 + YL.level * 2;
        YL.time = Math.min(YL.timeMax, YL.time + 3); // altın yem +3 sn
    }
    const comboBonus = YL.streak >= 2 ? YL.streak * 5 : 0;
    pts += comboBonus;
    YL.score += pts;
    YL.levelScore += pts;

    if (YL.golden) YL_SFX.golden(); else YL_SFX.eat();
    if (comboBonus > 0) YL_SFX.combo();

    ylFloatPoints('+' + pts);
    if (YL.streak >= 3) ylShowCombo(YL.streak);
    ylUpdateUI();

    if (YL.eaten >= YL.target) { ylLevelComplete(); return; }
    ylSpawnFood();
}

function ylUpdateUI() {
    ylEl('ylScore').textContent = '⭐ ' + YL.score;
    ylEl('ylFoodBadge').textContent = (YL.golden ? '⭐ ' : '🍎 ') + YL.eaten + '/' + YL.target;
    ylEl('ylStreak').textContent = '🔥 x' + YL.streak;
    ylEl('ylStreak').style.display = YL.streak >= 2 ? '' : 'none';
}

function ylUpdateTimerUI() {
    const bar = ylEl('ylTimerBar');
    const pct = YL.timeMax > 0 ? ylClamp(YL.time / YL.timeMax, 0, 1) : 0;
    bar.style.transform = 'scaleX(' + pct.toFixed(3) + ')';
    bar.classList.toggle('low', pct < 0.3);
}

function ylLevelComplete() {
    YL.phase = 'complete';
    cancelAnimationFrame(YL.raf);
    YL_SFX.levelUp();

    const timeBonus = Math.floor(YL.time) * 2;
    YL.score += timeBonus;
    YL.levelScore += timeBonus;
    ylUpdateUI();

    const timeUsed = ((Date.now() - YL.levelStartTime) / 1000).toFixed(1);
    ylEl('ylLvOvEmoji').textContent = '🎉';
    ylEl('ylLvOvTitle').textContent = 'Seviye ' + YL.level + ' Tamamlandı!';
    ylEl('ylLvOvSub').textContent = 'Tüm ' + YL.target + ' yemi yedin!' + (timeBonus > 0 ? ' ⏱️ Süre bonusu: +' + timeBonus : '');
    ylEl('ylLvOvTime').textContent = timeUsed + 's';
    ylEl('ylLvOvFood').textContent = YL.eaten;
    ylEl('ylLvOvPts').textContent = '+' + YL.levelScore;

    ylEl('ylLevelOverlay').classList.add('show');
}

window.ylNextLevel = function () {
    ylEl('ylLevelOverlay').classList.remove('show');
    YL.level++;
    if (YL.level > YL.maxLevel) {
        ylShowGameOver(true, 'clear');
        return;
    }
    ylStartLevel();
};

function ylDie(reason) {
    if (YL.phase !== 'playing') return;
    YL.phase = 'over';
    YL.dead = true;
    cancelAnimationFrame(YL.raf);
    YL_SFX.gameOver();

    const wrap = ylEl('ylCanvasWrap');
    const flash = document.createElement('div');
    flash.className = 'yl-death-flash';
    wrap.appendChild(flash);
    ylDraw();

    ylLater(() => {
        flash.remove();
        ylShowGameOver(false, reason);
    }, 650);
}

function ylShowGameOver(allClear, reason) {
    const isRecord = YL.score > YL.best && YL.score > 0;
    if (isRecord) {
        YL.best = YL.score;
        try { localStorage.setItem('yilan_best', String(YL.best)); } catch (e) { }
        try { if (YL.score > 0 && typeof addPoints === 'function') addPoints(YL.score); } catch (e) { }
    }

    const subs = {
        wall: 'Duvara çarptın! 💥',
        self: 'Kendine çarptın! 🐍',
        time: 'Süre bitti! ⏱️',
        clear: 'Tüm ' + YL.maxLevel + ' seviyeyi tamamladın! Efsanesin!'
    };
    ylEl('ylGoEmoji').textContent = allClear ? '👑' : (reason === 'time' ? '⏱️' : '💥');
    ylEl('ylGoTitle').textContent = allClear ? 'MÜKEMMEL!' : 'Oyun Bitti!';
    ylEl('ylGoSub').textContent = subs[reason] || '';
    ylEl('ylGoLevel').textContent = YL.level;
    ylEl('ylGoScore').textContent = YL.score;
    ylEl('ylGoBest').textContent = YL.best;
    ylEl('ylGoRecord').style.display = isRecord ? 'block' : 'none';

    ylEl('ylGameOverOverlay').classList.add('show');
}

function ylRoundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
    else {
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
    }
    ctx.fill();
}

function ylDraw() {
    const ctx = YL.ctx;
    if (!ctx) return;
    const cs = YL.cell, W = YL.gridSize * cs;

    if (YL.bg) ctx.drawImage(YL.bg, 0, 0);
    else ctx.clearRect(0, 0, W, W);

    if (YL.food) {
        const f = YL.food;
        const cx = f.x * cs + cs / 2, cy = f.y * cs + cs / 2;
        const pulse = 1 + Math.sin(Date.now() / 200) * 0.12;
        if (YL.golden) {
            ctx.strokeStyle = 'rgba(250,204,21,' + (0.35 + 0.25 * Math.sin(Date.now() / 180)).toFixed(3) + ')';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(cx, cy, cs * 0.55 * pulse, 0, Math.PI * 2);
            ctx.stroke();
        }
        const spr = YL.golden ? YL.sprStar : YL.sprApple;
        if (spr) {
            const dw = spr.width * pulse, dh = spr.height * pulse;
            ctx.drawImage(spr, cx - dw / 2, cy - dh / 2, dw, dh);
        }
    }

    const len = YL.snake.length;
    for (let i = len - 1; i >= 0; i--) {
        const s = YL.snake[i];
        if (i === 0 && !YL.dead) {
            ctx.fillStyle = 'rgba(74,222,128,0.18)';
            ylRoundRect(ctx, s.x * cs - 2, s.y * cs - 2, cs + 4, cs + 4, 9);
        }
        const t = len > 1 ? i / (len - 1) : 0;
        if (YL.dead) {
            ctx.fillStyle = i === 0 ? '#dc2626' : '#ef4444';
        } else {
            const r = Math.round(74 - 52 * t);
            const g = Math.round(222 - 121 * t);
            const b = Math.round(128 - 75 * t);
            ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        ylRoundRect(ctx, s.x * cs + 1.5, s.y * cs + 1.5, cs - 3, cs - 3, 7);
    }

    if (len && !YL.dead) {
        const h = YL.snake[0];
        const cx = h.x * cs + cs / 2, cy = h.y * cs + cs / 2;
        const dx = YL.dir.x, dy = YL.dir.y;
        const ex = dy !== 0 ? 6 : 0, ey = dx !== 0 ? 6 : 0;
        const fx = dx * 4, fy = dy * 4;
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(cx + fx + ex, cy + fy + ey, 3.2, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + fx - ex, cy + fy - ey, 3.2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#052e16';
        ctx.beginPath(); ctx.arc(cx + fx * 1.4 + ex, cy + fy * 1.4 + ey, 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + fx * 1.4 - ex, cy + fy * 1.4 - ey, 1.5, 0, Math.PI * 2); ctx.fill();
    }
}

function ylBuildSprites() {
    const n = YL.gridSize, cs = YL.cell, W = n * cs;

    const bg = document.createElement('canvas');
    bg.width = W; bg.height = W;
    const bx = bg.getContext('2d');
    if (bx) {
        const grad = bx.createRadialGradient(W / 2, W * 0.4, 10, W / 2, W / 2, W * 0.8);
        grad.addColorStop(0, '#0c1f14');
        grad.addColorStop(1, '#060d09');
        bx.fillStyle = grad;
        bx.fillRect(0, 0, W, W);
        bx.strokeStyle = 'rgba(34,197,94,0.07)';
        bx.lineWidth = 1;
        for (let i = 1; i < n; i++) {
            bx.beginPath(); bx.moveTo(i * cs, 0); bx.lineTo(i * cs, W); bx.stroke();
            bx.beginPath(); bx.moveTo(0, i * cs); bx.lineTo(W, i * cs); bx.stroke();
        }
        YL.bg = bg;
    }

    const mk = emoji => {
        const pad = Math.ceil(cs * 0.4);
        const c = document.createElement('canvas');
        c.width = cs + pad * 2; c.height = cs + pad * 2;
        const x = c.getContext('2d');
        if (!x) return null;
        x.font = cs + 'px serif';
        x.textAlign = 'center';
        x.textBaseline = 'middle';
        x.fillText(emoji, c.width / 2, c.height / 2 + 1);
        return c;
    };
    YL.sprApple = mk('🍎');
    YL.sprStar = mk('⭐');
}

function ylFloatPoints(text) {
    const cv = ylEl('ylCanvas').getBoundingClientRect();
    const cs = cv.width / YL.gridSize;
    const anchor = YL.food || YL.snake[0] || { x: 8, y: 8 };
    const el = document.createElement('div');
    el.className = 'yl-float-points';
    el.textContent = text;
    el.style.left = (cv.left + anchor.x * cs + cs / 2 - 20) + 'px';
    el.style.top = (cv.top + anchor.y * cs - 10) + 'px';
    document.body.appendChild(el);
    ylLater(() => el.remove(), 1000);
}

function ylShowCombo(streak) {
    const el = ylEl('ylComboDisplay');
    el.textContent = '🔥 COMBO x' + streak + '!';
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    ylLater(() => el.classList.remove('show'), 800);
}

const YL_KEYS = {
    ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0],
    w: [0, -1], W: [0, -1], s: [0, 1], S: [0, 1],
    a: [-1, 0], A: [-1, 0], d: [1, 0], D: [1, 0]
};
document.addEventListener('keydown', e => {
    const gs = ylEl('yilanGameScreen');
    if (!gs || gs.style.display !== 'block') return;
    if (e.key === 'Escape') { ylRequestExit(); return; }
    const d = YL_KEYS[e.key];
    if (d) {
        e.preventDefault();
        ylSetDir(d[0], d[1]);
    }
});
window.ylSetDir = function (x, y) {
    if (!YL.on || YL.lock || YL.paused || YL.phase !== 'playing') return;
    const q = YL.nextDirs;
    const last = q.length ? q[q.length - 1] : YL.dir;
    if ((x === -last.x && y === -last.y) || (x === last.x && y === last.y)) return;
    if (q.length < 2) q.push({ x, y });
};

(function () {
    const wrap = ylEl('ylCanvasWrap');
    if (!wrap) return;
    let sx = 0, sy = 0, active = false;
    wrap.addEventListener('touchstart', e => {
        const t = e.touches[0];
        sx = t.clientX; sy = t.clientY; active = true;
    }, { passive: true });
    wrap.addEventListener('touchmove', e => { e.preventDefault(); }, { passive: false });
    wrap.addEventListener('touchend', e => {
        if (!active) return;
        active = false;
        const t = e.changedTouches[0];
        const dx = t.clientX - sx, dy = t.clientY - sy;
        if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return;
        if (Math.abs(dx) > Math.abs(dy)) ylSetDir(dx > 0 ? 1 : -1, 0);
        else ylSetDir(0, dy > 0 ? 1 : -1);
    }, { passive: true });
})();

// köstebek
const KB = {
    on: false, paused: false, muted: false,
    level: 1, score: 0, best: 0, maxLevel: 20,
    whacked: 0, target: 0, levelScore: 0, streak: 0,
    time: 0, timeMax: 0, cfg: null,
    holes: [], holeCount: 9,
    spawnTimer: 0, raf: 0, lastT: 0, lastSec: -1,
    timers: [], levelStartTime: 0, phase: 'idle'
};
try { KB.best = parseInt(localStorage.getItem('kostebek_best') || '0') || 0; } catch (e) { KB.best = 0; }

const kbEl = s => document.getElementById(s);
const kbRnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const kbClamp = (v, a, b) => Math.min(b, Math.max(a, v));

let KB_AC = null;
function kbInitAudio() {
    if (KB.muted) return;
    try {
        KB_AC = KB_AC || new (window.AudioContext || window.webkitAudioContext)();
        if (KB_AC.state === 'suspended') KB_AC.resume();
    } catch (e) { KB_AC = null; }
}
function kbTone(freq, dur, type, vol, delay) {
    if (!KB_AC || KB.muted) return;
    try {
        const t0 = KB_AC.currentTime + (delay || 0);
        const o = KB_AC.createOscillator(), g = KB_AC.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t0);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g); g.connect(KB_AC.destination);
        o.start(t0); o.stop(t0 + dur + 0.05);
    } catch (e) { }
}
const KB_SFX = {
    whack() { kbTone(320, .07, 'square', .11); kbTone(170, .11, 'triangle', .13, .02); },
    golden() { kbTone(880, .1, 'sine', .12); kbTone(1174, .1, 'sine', .12, .08); kbTone(1568, .18, 'sine', .13, .16); },
    bomb() { kbTone(130, .28, 'sawtooth', .15); kbTone(85, .4, 'sawtooth', .13, .05); },
    combo() { kbTone(988, .07, 'sine', .1); kbTone(1319, .12, 'sine', .11, .06); },
    escape() { kbTone(240, .1, 'sine', .05); },
    levelUp() { kbTone(523, .12, 'sine', .12); kbTone(659, .12, 'sine', .12, .1); kbTone(784, .12, 'sine', .12, .2); kbTone(1047, .25, 'sine', .14, .3); },
    gameOver() { kbTone(392, .18, 'sawtooth', .08); kbTone(294, .18, 'sawtooth', .08, .16); kbTone(196, .35, 'sawtooth', .09, .32); },
    tick() { kbTone(1200, .04, 'sine', .05); },
    beep(f) { kbTone(f || 700, .12, 'square', .07); }
};
window.kbToggleMute = function () {
    KB.muted = !KB.muted;
    kbEl('kbMuteBtn').textContent = KB.muted ? '🔇' : '🔊';
    if (!KB.muted) kbInitAudio();
};

function kbLevelConfig(lvl) {
    const target = 5 + lvl;
    const timeMax = Math.round(10 + target * 2.6);
    const popMs = Math.max(340, 1000 - (lvl - 1) * 40);
    const showMs = Math.max(560, 1500 - (lvl - 1) * 55);
    const maxUp = Math.min(4, 1 + Math.floor(lvl / 4));
    const bombChance = Math.min(0.26, 0.08 + lvl * 0.012);
    const goldenChance = 0.07;
    return { target, timeMax, popMs, showMs, maxUp, bombChance, goldenChance };
}

function kbClearTimers() { KB.timers.forEach(id => clearTimeout(id)); KB.timers = []; }
function kbLater(fn, ms) { const id = setTimeout(fn, ms); KB.timers.push(id); return id; }

window.startKostebekFromMode = function () {
    try { isInTest = true; stopBgMusic(); } catch (e) { }
    hideAllMainScreens();
    kbEl('kostebekGameScreen').style.display = 'block';
    kbStartGame();
};
window.kbBackToMode = function () {
    kbStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    kbEl('modeScreen').style.display = 'block';
    changeTheme('space');
};
window.kbGoProfile = function () {
    kbStopAll();
    try { isInTest = false; if (soundEnabled) startBgMusic(); } catch (e) { }
    hideAllMainScreens();
    kbEl('profileScreen').style.display = 'block';
    changeTheme('space');
};
function kbStopAll() {
    KB.on = false; KB.paused = false; KB.phase = 'idle';
    kbClearTimers();
    cancelAnimationFrame(KB.raf);
    kbEl('kbExitModal').style.display = 'none';
    kbEl('kbLevelOverlay').classList.remove('show');
    kbEl('kbGameOverOverlay').classList.remove('show');
    const cd = kbEl('kbCountdown'); if (cd) cd.style.display = 'none';
}
window.kbRequestExit = function () {
    if (!KB.on) { kbBackToMode(); return; }
    KB.paused = true;
    kbEl('kbExitModal').style.display = 'flex';
};
window.kbConfirmExit = function () {
    kbEl('kbExitModal').style.display = 'none';
    kbBackToMode();
};
window.kbCancelExit = function () {
    kbEl('kbExitModal').style.display = 'none';
    KB.paused = false;
    KB.lastT = 0;
};

function kbBuildBoard() {
    const board = kbEl('kbBoard');
    board.innerHTML = '';
    KB.holes = [];
    for (let i = 0; i < KB.holeCount; i++) {
        const hole = document.createElement('div');
        hole.className = 'kb-hole';
        hole.innerHTML = '<div class="kb-mole">🐹</div><div class="kb-pit"></div>';
        hole.addEventListener('pointerdown', e => { e.preventDefault(); kbWhack(i); });
        board.appendChild(hole);
        KB.holes.push({ el: hole, mole: hole.querySelector('.kb-mole'), active: false, type: null, hideTimer: 0 });
    }
}

function kbStartGame() {
    kbInitAudio();
    KB.on = true; KB.paused = false;
    KB.level = 1; KB.score = 0; KB.streak = 0;
    KB.best = parseInt(localStorage.getItem('kostebek_best') || '0') || 0;
    kbEl('kbExitModal').style.display = 'none';
    kbEl('kbLevelOverlay').classList.remove('show');
    kbEl('kbGameOverOverlay').classList.remove('show');
    kbEl('kbScore').textContent = '⭐ 0';
    kbEl('kbStreak').style.display = 'none';
    kbEl('kbMuteBtn').textContent = KB.muted ? '🔇' : '🔊';
    if (!KB.holes.length) kbBuildBoard();
    kbStartLevel();
}
window.kbRestartGame = function () {
    kbEl('kbGameOverOverlay').classList.remove('show');
    kbStartGame();
};

function kbStartLevel() {
    KB.cfg = kbLevelConfig(KB.level);
    KB.target = KB.cfg.target;
    KB.whacked = 0;
    KB.levelScore = 0;
    KB.streak = 0;
    KB.timeMax = KB.cfg.timeMax;
    KB.time = KB.cfg.timeMax;
    KB.lastT = 0;
    KB.lastSec = -1;
    KB.phase = 'countdown';
    KB.paused = false;
    kbHideAllMoles();
    kbEl('kbLevel').textContent = 'SEVİYE ' + KB.level;
    kbEl('kbLevelOverlay').classList.remove('show');
    kbUpdateUI();
    kbUpdateTimerUI();
    kbCountdown(3);
}

function kbHideAllMoles() {
    KB.holes.forEach(h => {
        if (h.hideTimer) { clearTimeout(h.hideTimer); h.hideTimer = 0; }
        h.active = false; h.type = null;
        h.el.classList.remove('kb-up', 'kb-hit', 'kb-bombflash');
        h.mole.textContent = '🐹';
    });
}

function kbCountdown(n) {
    if (!KB.on) return;
    const cd = kbEl('kbCountdown');
    if (n <= 0) {
        cd.style.display = 'none';
        KB.phase = 'playing';
        KB.levelStartTime = Date.now();
        KB.lastT = 0;
        kbScheduleSpawn();
        KB.raf = requestAnimationFrame(kbLoop);
        return;
    }
    cd.style.display = 'flex';
    cd.textContent = n;
    KB_SFX.beep(600 + (3 - n) * 120);
    kbLater(() => kbCountdown(n - 1), 600);
}

function kbScheduleSpawn() {
    if (!KB.on || KB.phase !== 'playing') return;
    const jitter = KB.cfg.popMs * (0.7 + Math.random() * 0.6);
    KB.spawnTimer = kbLater(() => {
        if (KB.phase === 'playing' && !KB.paused) kbTrySpawn();
        kbScheduleSpawn();
    }, jitter);
}

function kbTrySpawn() {
    let activeCount = 0;
    const free = [];
    KB.holes.forEach((h, i) => { if (h.active) activeCount++; else free.push(i); });
    if (activeCount >= KB.cfg.maxUp || !free.length) return;

    const i = free[kbRnd(0, free.length - 1)];
    const h = KB.holes[i];
    const r = Math.random();
    h.type = r < KB.cfg.bombChance ? 'bomb'
        : (r < KB.cfg.bombChance + KB.cfg.goldenChance ? 'golden' : 'normal');
    h.active = true;
    h.mole.textContent = h.type === 'bomb' ? '💣' : h.type === 'golden' ? '⭐' : '🐹';
    h.el.classList.remove('kb-hit', 'kb-bombflash');
    h.el.classList.add('kb-up');
    const showFor = Math.round(KB.cfg.showMs * (0.85 + Math.random() * 0.3));
    h.hideTimer = kbLater(() => kbMoleEscape(i), showFor);
}

function kbMoleEscape(i) {
    const h = KB.holes[i];
    if (!h || !h.active) return;
    const type = h.type;
    h.active = false; h.type = null; h.hideTimer = 0;
    h.el.classList.remove('kb-up');
    if (type !== 'bomb' && KB.phase === 'playing' && KB.streak > 0) {
        KB.streak = 0;
        KB_SFX.escape();
        kbUpdateUI();
    }
}

function kbWhack(i) {
    if (!KB.on || KB.paused || KB.phase !== 'playing') return;
    const h = KB.holes[i];
    if (!h || !h.active) return;
    kbInitAudio();
    h.active = false;
    if (h.hideTimer) { clearTimeout(h.hideTimer); h.hideTimer = 0; }
    const type = h.type;
    h.type = null;

    if (type === 'bomb') {
        KB.score = Math.max(0, KB.score - 20);
        KB.levelScore = Math.max(0, KB.levelScore - 20);
        KB.streak = 0;
        KB.time = Math.max(0.5, KB.time - 2);
        KB_SFX.bomb();
        h.mole.textContent = '💥';
        h.el.classList.add('kb-bombflash');
        kbFloatPointsAt(h.el, '-20', true);
        kbShowComboText('💥 BOMBA!');
    } else {
        KB.streak++;
        KB.whacked++;
        let pts = 10 + KB.level;
        if (type === 'golden') {
            pts = 50 + KB.level * 2;
            KB.time = Math.min(KB.timeMax, KB.time + 3);
            KB_SFX.golden();
            h.mole.textContent = '🌟';
        } else {
            KB_SFX.whack();
            h.mole.textContent = '💫';
        }
        const comboBonus = KB.streak >= 3 ? KB.streak * 5 : 0;
        if (comboBonus > 0) KB_SFX.combo();
        pts += comboBonus;
        KB.score += pts;
        KB.levelScore += pts;
        kbFloatPointsAt(h.el, '+' + pts, false);
        if (KB.streak >= 4) kbShowComboText('🔥 COMBO x' + KB.streak + '!');
    }

    h.el.classList.add('kb-hit');
    h.el.classList.remove('kb-up');
    kbLater(() => {
        h.el.classList.remove('kb-hit', 'kb-bombflash');
        h.mole.textContent = '🐹';
    }, 240);

    kbUpdateUI();
    if (KB.whacked >= KB.target) kbLevelComplete();
}

function kbLoop(t) {
    if (!KB.on || KB.phase !== 'playing') return;
    if (KB.paused) { KB.lastT = t; KB.raf = requestAnimationFrame(kbLoop); return; }
    if (!KB.lastT) KB.lastT = t;
    const dt = Math.min(250, t - KB.lastT);
    KB.lastT = t;

    KB.time = Math.max(0, KB.time - dt / 1000);
    kbUpdateTimerUI();
    const sec = Math.ceil(KB.time);
    if (sec !== KB.lastSec && sec <= 3 && sec > 0) { KB.lastSec = sec; KB_SFX.tick(); }
    if (KB.time <= 0) { kbGameOver(); return; }

    KB.raf = requestAnimationFrame(kbLoop);
}

function kbUpdateUI() {
    kbEl('kbScore').textContent = '⭐ ' + KB.score;
    kbEl('kbWhackBadge').textContent = '🎯 ' + KB.whacked + '/' + KB.target;
    kbEl('kbStreak').textContent = '🔥 x' + KB.streak;
    kbEl('kbStreak').style.display = KB.streak >= 2 ? '' : 'none';
}

function kbUpdateTimerUI() {
    const bar = kbEl('kbTimerBar');
    const pct = KB.timeMax > 0 ? kbClamp(KB.time / KB.timeMax, 0, 1) : 0;
    bar.style.transform = 'scaleX(' + pct.toFixed(3) + ')';
    bar.classList.toggle('low', pct < 0.3);
}

function kbLevelComplete() {
    KB.phase = 'complete';
    cancelAnimationFrame(KB.raf);
    kbClearTimers();
    kbHideAllMoles();
    KB_SFX.levelUp();

    const timeBonus = Math.floor(KB.time) * 2;
    KB.score += timeBonus;
    KB.levelScore += timeBonus;
    kbUpdateUI();

    const timeUsed = ((Date.now() - KB.levelStartTime) / 1000).toFixed(1);
    kbEl('kbLvOvEmoji').textContent = '🎉';
    kbEl('kbLvOvTitle').textContent = 'Seviye ' + KB.level + ' Tamamlandı!';
    kbEl('kbLvOvSub').textContent = KB.target + ' köstebek vurdun!' + (timeBonus > 0 ? ' ⏱️ Süre bonusu: +' + timeBonus : '');
    kbEl('kbLvOvTime').textContent = timeUsed + 's';
    kbEl('kbLvOvWhack').textContent = KB.whacked;
    kbEl('kbLvOvPts').textContent = '+' + KB.levelScore;

    kbEl('kbLevelOverlay').classList.add('show');
}

window.kbNextLevel = function () {
    kbEl('kbLevelOverlay').classList.remove('show');
    KB.level++;
    if (KB.level > KB.maxLevel) {
        kbShowGameOver(true);
        return;
    }
    kbStartLevel();
};

function kbGameOver() {
    if (KB.phase !== 'playing') return;
    KB.phase = 'over';
    cancelAnimationFrame(KB.raf);
    kbClearTimers();
    kbHideAllMoles();
    KB_SFX.gameOver();
    kbShowGameOver(false);
}

function kbShowGameOver(allClear) {
    const isRecord = KB.score > KB.best && KB.score > 0;
    if (isRecord) {
        KB.best = KB.score;
        try { localStorage.setItem('kostebek_best', String(KB.best)); } catch (e) { }
        try { if (KB.score > 0 && typeof addPoints === 'function') addPoints(KB.score); } catch (e) { }
    }

    kbEl('kbGoEmoji').textContent = allClear ? '👑' : '⏱️';
    kbEl('kbGoTitle').textContent = allClear ? 'MÜKEMMEL!' : 'Süre Doldu!';
    kbEl('kbGoSub').textContent = allClear
        ? 'Tüm ' + KB.maxLevel + ' seviyeyi tamamladın! Efsanesin!'
        : 'Seviye ' + KB.level + '\'de süre bitti.';
    kbEl('kbGoLevel').textContent = KB.level;
    kbEl('kbGoScore').textContent = KB.score;
    kbEl('kbGoBest').textContent = KB.best;
    kbEl('kbGoRecord').style.display = isRecord ? 'block' : 'none';

    kbEl('kbGameOverOverlay').classList.add('show');
}

function kbFloatPointsAt(el, text, bad) {
    const r = el.getBoundingClientRect();
    const p = document.createElement('div');
    p.className = 'kb-float-points' + (bad ? ' bad' : '');
    p.textContent = text;
    p.style.left = (r.left + r.width / 2 - 20) + 'px';
    p.style.top = (r.top + r.height / 3) + 'px';
    document.body.appendChild(p);
    kbLater(() => p.remove(), 1000);
}

function kbShowComboText(text) {
    const el = kbEl('kbComboDisplay');
    el.textContent = text;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    kbLater(() => el.classList.remove('show'), 800);
}

document.addEventListener('keydown', e => {
    const gs = kbEl('kostebekGameScreen');
    if (e.key === 'Escape' && gs && gs.style.display === 'block') kbRequestExit();
});
