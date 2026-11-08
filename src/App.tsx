
import { useState } from "react";

const content = {
  FI: {
    nav: ["Palvelut", "Koulutus", "Meistä", "Yhteystiedot"],
    heroTag: "KAUNEUTTA JA HYVÄÄ OLOA RAISIOSSA",
    heroTitle: "Kauneus alkaa",
    heroAccent: "sinusta.",
    heroText: "Pysähdy hetkeksi. Nauti omasta ajastasi ja anna meidän huolehtia kauneudestasi.",
    heroButton: "Tutustu palveluihin",
    servicesTag: "PALVELUMME",
    servicesTitle: "Kauneutta jokaiseen hetkeen",
    servicesText: "Tutustu palveluihimme ja löydä itsellesi sopiva hoito.",
    nails: "Kynsipalvelut",
    nailsText: "Manikyyrit, geelilakkaukset, kynsien pidennykset ja huollot.",
    lashes: "Ripsi- ja kulmapalvelut",
    lashesText: "Ripsienpidennykset ja kulmien kauneudenhoito.",
    face: "Kasvohoidot",
    faceText: "Kasvojen ihonhoito ja kosmetologiset palvelut.",
    massage: "Hieronta",
    massageText: "Klassinen ja urheiluhieronta.",
    feet: "Jalkahoidot",
    feetText: "Pedikyyrit ja jalkojen hoito.",
    beauty: "Kauneuspalvelut",
    beautyText: "Meikki, sokerointi ja vahaus.",
    pricesTitle: "Hinnasto",
    manicure: "Hygieeninen manikyyri",
    gel: "Manikyyri + geeli",
    extension: "Kynsien pidennys",
    refill: "Muu palvelu (tarkemmat tiedot varmistettava)",
    short: "Lyhyet",
    medium: "Keskipitkät",
    long: "Pitkät",
    french: "Ranskalainen design",
    pedicure: "Pedikyyri + geelilakkaus",
    hygienicPedicure: "Hygieeninen pedikyyri + kantapäät",
    trainingTag: "OPI JA KEHITY",
    trainingTitle: "Koulutusta kauneudenhoidon ammattilaisille",
    trainingText: "Instagramissa esitelty koulutustoiminta. Kysy lisätietoja koulutuksista suoraan.",
    trainingButton: "Kysy koulutuksesta",
    aboutTag: "IHALAN KAUNEUSHOITO",
    aboutTitle: "Hetki vain sinulle",
    aboutText: "Kauneudenhoito on myös aikaa itsellesi. Tervetuloa tutustumaan palveluihimme ja nauttimaan omasta hetkestäsi.",
    contactTitle: "Tervetuloa",
    contactText: "Ota yhteyttä ja varaa oma aikasi.",
    book: "Soita ja varaa aika",
    address: "Jokirannankuja 15, 21260 Raisio",
    priceNote: "* Hinta tarkistettava. Palveluiden saatavuus ja hinnat kannattaa varmistaa ennen varausta.",
    demo: "Itsenäinen esittelysivusto – ei yrityksen virallinen verkkosivusto."
  },
  EN: {
    nav: ["Services", "Training", "About", "Contact"],
    heroTag: "BEAUTY AND WELLBEING IN RAISIO",
    heroTitle: "Beauty begins",
    heroAccent: "with you.",
    heroText: "Take a moment for yourself. Relax and let us take care of your beauty.",
    heroButton: "Explore services",
    servicesTag: "OUR SERVICES",
    servicesTitle: "Beauty for every moment",
    servicesText: "Explore our services and find the treatment that suits you.",
    nails: "Nail services",
    nailsText: "Manicures, gel polish, nail extensions and refills.",
    lashes: "Lash and brow services",
    lashesText: "Eyelash extensions and eyebrow beauty treatments.",
    face: "Facial treatments",
    faceText: "Skincare and cosmetology services.",
    massage: "Massage",
    massageText: "Classic and sports massage.",
    feet: "Foot care",
    feetText: "Pedicures and foot treatments.",
    beauty: "Beauty services",
    beautyText: "Makeup, sugaring and waxing.",
    pricesTitle: "Price list",
    manicure: "Hygienic manicure",
    gel: "Manicure + gel",
    extension: "Nail extensions",
    refill: "Other service (details to be confirmed)",
    short: "Short",
    medium: "Medium",
    long: "Long",
    french: "French design",
    pedicure: "Pedicure + gel polish",
    hygienicPedicure: "Hygienic pedicure + heels",
    trainingTag: "LEARN AND GROW",
    trainingTitle: "Beauty training",
    trainingText: "Training is featured on Instagram. Contact the salon directly for further information.",
    trainingButton: "Ask about training",
    aboutTag: "IHALAN KAUNEUSHOITO",
    aboutTitle: "A moment just for you",
    aboutText: "Beauty care is also time for yourself. Discover our services and enjoy a moment of relaxation.",
    contactTitle: "Welcome",
    contactText: "Get in touch and book your appointment.",
    book: "Call to book",
    address: "Jokirannankuja 15, 21260 Raisio",
    priceNote: "* Price to be confirmed. Please check service availability and prices before booking.",
    demo: "Independent presentation website – not the company's official website."
  },
  UA: {
    nav: ["Послуги", "Навчання", "Про нас", "Контакти"],
    heroTag: "КРАСА ТА ДОБРЕ САМОПОЧУТТЯ В РАЙСІО",
    heroTitle: "Краса починається",
    heroAccent: "з тебе.",
    heroText: "Зупинись на мить. Приділи час собі та довір нам турботу про твою красу.",
    heroButton: "Наші послуги",
    servicesTag: "НАШІ ПОСЛУГИ",
    servicesTitle: "Краса для кожної миті",
    servicesText: "Ознайомся з нашими послугами та обери догляд для себе.",
    nails: "Послуги для нігтів",
    nailsText: "Манікюр, гель-лак, нарощування та корекція нігтів.",
    lashes: "Вії та брови",
    lashesText: "Нарощування вій та догляд за бровами.",
    face: "Догляд за обличчям",
    faceText: "Догляд за шкірою та косметологічні послуги.",
    massage: "Масаж",
    massageText: "Класичний та спортивний масаж.",
    feet: "Догляд за ногами",
    feetText: "Педикюр та догляд за стопами.",
    beauty: "Послуги краси",
    beautyText: "Макіяж, шугаринг та воскова депіляція.",
    pricesTitle: "Прайс-лист",
    manicure: "Гігієнічний манікюр",
    gel: "Манікюр + гель",
    extension: "Нарощування нігтів",
    refill: "Інша послуга (деталі уточнюються)",
    short: "Короткі",
    medium: "Середні",
    long: "Довгі",
    french: "Французький дизайн",
    pedicure: "Педикюр + гель-лак",
    hygienicPedicure: "Гігієнічний педикюр + п'яти",
    trainingTag: "НАВЧАЙСЯ ТА РОЗВИВАЙСЯ",
    trainingTitle: "Навчання у сфері краси",
    trainingText: "Навчання представлено в Instagram. Деталі програм можна уточнити безпосередньо в салоні.",
    trainingButton: "Запитати про навчання",
    aboutTag: "IHALAN KAUNEUSHOITO",
    aboutTitle: "Час тільки для тебе",
    aboutText: "Догляд за красою — це також час для себе. Запрошуємо ознайомитися з нашими послугами та відпочити.",
    contactTitle: "Ласкаво просимо",
    contactText: "Зв'яжися з нами та заплануй свій візит.",
    book: "Зателефонувати для запису",
    address: "Jokirannankuja 15, 21260 Raisio",
    priceNote: "* Ціну необхідно уточнити. Перед записом перевіряйте наявність послуги та актуальну вартість.",
    demo: "Незалежний демонстраційний сайт — не офіційний сайт компанії."
  },
  RU: {
    nav: ["Услуги", "Обучение", "О нас", "Контакты"],
    heroTag: "КРАСОТА И ХОРОШЕЕ САМОЧУВСТВИЕ В РАЙСИО",
    heroTitle: "Красота начинается",
    heroAccent: "с тебя.",
    heroText: "Остановись на мгновение. Удели время себе и доверь нам заботу о своей красоте.",
    heroButton: "Наши услуги",
    servicesTag: "НАШИ УСЛУГИ",
    servicesTitle: "Красота для каждого момента",
    servicesText: "Познакомься с нашими услугами и выбери подходящий уход.",
    nails: "Услуги для ногтей",
    nailsText: "Маникюр, гель-лак, наращивание и коррекция ногтей.",
    lashes: "Ресницы и брови",
    lashesText: "Наращивание ресниц и уход за бровями.",
    face: "Уход за лицом",
    faceText: "Уход за кожей и косметологические услуги.",
    massage: "Массаж",
    massageText: "Классический и спортивный массаж.",
    feet: "Уход за ногами",
    feetText: "Педикюр и уход за стопами.",
    beauty: "Услуги красоты",
    beautyText: "Макияж, шугаринг и восковая депиляция.",
    pricesTitle: "Прайс-лист",
    manicure: "Гигиенический маникюр",
    gel: "Маникюр + гель",
    extension: "Наращивание ногтей",
    refill: "Другая услуга (подробности уточняются)",
    short: "Короткие",
    medium: "Средние",
    long: "Длинные",
    french: "Французский дизайн",
    pedicure: "Педикюр + гель-лак",
    hygienicPedicure: "Гигиенический педикюр + пятки",
    trainingTag: "УЧИСЬ И РАЗВИВАЙСЯ",
    trainingTitle: "Обучение в сфере красоты",
    trainingText: "Обучение представлено в Instagram. Подробности программ можно уточнить непосредственно в салоне.",
    trainingButton: "Узнать об обучении",
    aboutTag: "IHALAN KAUNEUSHOITO",
    aboutTitle: "Время только для тебя",
    aboutText: "Уход за красотой — это также время для себя. Приглашаем познакомиться с нашими услугами и отдохнуть.",
    contactTitle: "Добро пожаловать",
    contactText: "Свяжись с нами и запланируй свой визит.",
    book: "Позвонить для записи",
    address: "Jokirannankuja 15, 21260 Raisio",
    priceNote: "* Цену необходимо уточнить. Перед записью проверяйте наличие услуги и актуальную стоимость.",
    demo: "Независимый демонстрационный сайт — не официальный сайт компании."
  }
};

type Language = keyof typeof content;

const services = [
  { key: "nails", icon: "✧" },
  { key: "lashes", icon: "✦" },
  { key: "face", icon: "❀" },
  { key: "massage", icon: "◇" },
  { key: "feet", icon: "✧" },
  { key: "beauty", icon: "❋" }
] as const;

type PriceOption = [string, string];

type PriceItem = {
  name: string;
  price?: string;
  options?: PriceOption[];
};

export default function App() {
  const [language, setLanguage] = useState<Language>("FI");
  const t = content[language];

  const prices: PriceItem[] = [
    { name: t.manicure, price: "35 €" },
    { name: t.gel, price: "55 €" },
    {
      name: t.extension,
      options: [
        [t.short, "80 €"],
        [t.medium, "85 €"],
        [t.long, "90 €"]
      ]
    },
    {
      name: t.refill,
      options: [
        [t.short, "60 €"],
        [t.medium, "65 €"],
        [t.long, "70 €"]
      ]
    },
    { name: t.french, price: "+10 €" },
    { name: t.pedicure, price: "60 €" },
    { name: t.hygienicPedicure, price: "60 €*" }
  ];

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img
            src="/logo.png"
            alt="Ihalan Kauneushoitola"
            className="logo-image"
          />
        </a>

        <nav>
          {t.nav.map((item, index) => (
            <a key={item} href={["#palvelut", "#koulutus", "#meista", "#yhteystiedot"][index]}>
              {item}
            </a>
          ))}
        </nav>

        <div className="language-switch">
          {(["FI", "EN", "UA", "RU"] as Language[]).map((lang) => (
            <button
              key={lang}
              className={language === lang ? "active" : ""}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">{t.heroTag}</p>
            <h1>{t.heroTitle}<br /><em>{t.heroAccent}</em></h1>
            <p className="hero-description">{t.heroText}</p>
            <a href="#palvelut" className="primary-button">{t.heroButton} →</a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1200"
              alt="Manicure"
            />
          </div>
        </section>

        <section className="services" id="palvelut">
          <p className="eyebrow">{t.servicesTag}</p>
          <h2>{t.servicesTitle}</h2>
          <p className="section-intro">{t.servicesText}</p>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.key}>
                <span className="service-icon">{service.icon}</span>
                <h3>{t[service.key]}</h3>
                <p>{t[`${service.key}Text` as keyof typeof t]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="price-section">
          <div className="price-heading">
            <p className="eyebrow">{t.pricesTitle}</p>
            <h2>{t.pricesTitle}</h2>
          </div>
          <div className="price-list">
            {prices.map((item) => (
              <article className="price-item" key={item.name}>
                <div className="price-info">
                  <h3>{item.name}</h3>
                  {item.options && (
                    <div className="price-options">
                      {item.options.map(([name, price]) => (
                        <div className="price-option" key={name}>
                          <span>{name}</span>
                          <strong>{price}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {item.price && <strong className="price">{item.price}</strong>}
              </article>
            ))}
          </div>
          <p className="notice">{t.priceNote}</p>
        </section>

        <section className="training" id="koulutus">
          <p className="eyebrow">{t.trainingTag}</p>
          <h2>{t.trainingTitle}</h2>
          <p>{t.trainingText}</p>
          <a href="https://www.instagram.com/nails_by_akimenko_turku/" target="_blank" rel="noreferrer" className="outline-button">
            {t.trainingButton} →
          </a>
        </section>

        <section className="about" id="meista">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1000"
              alt="Beauty salon"
            />
          </div>
          <div className="about-content">
            <p className="eyebrow">{t.aboutTag}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>
        </section>

        <section className="booking" id="yhteystiedot">
          <p className="eyebrow">{t.contactTitle}</p>
          <h2>{t.contactText}</h2>
          <p>{t.address}</p>
          <a href="tel:+358449303124" className="primary-button">{t.book} · 044 930 3124</a>
          <a className="instagram-link" href="https://www.instagram.com/nails_by_akimenko_turku/" target="_blank" rel="noreferrer">
            Instagram @nails_by_akimenko_turku
          </a>
        </section>
      </main>

      <footer>
        <div className="footer-logo">Ihalan <span>Kauneushoito</span></div>
        <p>{t.address}</p>
        <p>044 930 3124</p>
        <p><a href="https://www.instagram.com/nails_by_akimenko_turku/" target="_blank" rel="noreferrer">Instagram</a></p>
        <small>{t.demo}</small>
      </footer>
    </>
  );
}
