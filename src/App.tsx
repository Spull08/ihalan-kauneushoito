
import { useState } from "react";

const translations = {
  FI: {
    nav: ["Palvelut ja hinnasto", "Tietoa", "Yhteystiedot"],
    eyebrow: "KAUNEUTTA JA HYVÄÄ OLOA",
    title: "Oma hetki.",
    title2: "Oma hehkusi.",
    intro: "Varaa aikaa itsellesi ja nauti kauneudenhoidon rauhallisesta hetkestä.",
    button: "Varaa aika",
    services: "Palvelut ja hinnasto",
    subtitle: "Kauneutta sinun ehdoillasi.",
    manicure: "Manikyyri",
    gel: "Manikyyri geelillä",
    extension: "Kynsien pidennys",
    correction: "Kynsihuolto",
    short: "Lyhyet kynnet",
    medium: "Keskipitkät kynnet",
    long: "Pitkät kynnet",
    french: "Ranskalainen manikyyri",
    pedicure: "Pedikyyri geelilakalla",
    hygienic: "Hygieeninen pedikyyri ja kantapäiden hoito",
    about: "Kauneutta ja hyvinvointia",
    aboutText: "Pieni hetki itsellesi, huolenpitoa ja kauniita yksityiskohtia.",
    contact: "Yhteystiedot",
    address: "Jokirannankuja 15, 21260 Raisio",
    booking: "Varaa oma aikasi",
    bookingText: "Ota yhteyttä ja varaa itsellesi sopiva aika.",
    extra: "Lisäpalvelu",
    prices: "Hinnat",
    notice: "Esittelysivusto. Palveluiden tiedot ja hinnat kannattaa vahvistaa ennen varausta."
  },
  EN: {
    nav: ["Services & prices", "About", "Contact"],
    eyebrow: "BEAUTY AND WELLBEING",
    title: "Your moment.",
    title2: "Your glow.",
    intro: "Take some time for yourself and enjoy a relaxing beauty treatment.",
    button: "Book an appointment",
    services: "Services & prices",
    subtitle: "Beauty on your terms.",
    manicure: "Hygienic manicure",
    gel: "Manicure with gel",
    extension: "Nail extensions",
    correction: "Nail refill",
    short: "Short nails",
    medium: "Medium nails",
    long: "Long nails",
    french: "French design",
    pedicure: "Pedicure with gel polish",
    hygienic: "Hygienic pedicure with heel care",
    about: "Beauty and wellbeing",
    aboutText: "A little time for yourself, personal care and beautiful details.",
    contact: "Contact",
    address: "Jokirannankuja 15, 21260 Raisio",
    booking: "Book your moment",
    bookingText: "Get in touch to arrange a suitable appointment.",
    extra: "Extra service",
    prices: "Prices",
    notice: "Demo website. Please confirm service details and prices before booking."
  },
  UA: {
    nav: ["Послуги та ціни", "Про нас", "Контакти"],
    eyebrow: "КРАСА ТА ГАРНЕ САМОПОЧУТТЯ",
    title: "Твій момент.",
    title2: "Твоє сяйво.",
    intro: "Приділи час собі та насолодись спокійною атмосферою догляду за красою.",
    button: "Записатися",
    services: "Послуги та ціни",
    subtitle: "Краса у твоєму стилі.",
    manicure: "Гігієнічний манікюр",
    gel: "Манікюр з гелем",
    extension: "Нарощування нігтів",
    correction: "Корекція нігтів",
    short: "Короткі нігті",
    medium: "Середня довжина",
    long: "Довгі нігті",
    french: "Французький дизайн",
    pedicure: "Педикюр з гель-лаком",
    hygienic: "Гігієнічний педикюр з обробкою п'ят",
    about: "Краса та турбота про себе",
    aboutText: "Трохи часу для себе, турбота та увага до деталей.",
    contact: "Контакти",
    address: "Jokirannankuja 15, 21260 Raisio",
    booking: "Заплануй свій візит",
    bookingText: "Зв'яжись із майстром, щоб домовитися про зручний час.",
    extra: "Додаткова послуга",
    prices: "Ціни",
    notice: "Демонстраційний сайт. Перед записом уточнюйте послуги та ціни."
  },
  RU: {
    nav: ["Услуги и цены", "О мастере", "Контакты"],
    eyebrow: "КРАСОТА И ХОРОШЕЕ САМОЧУВСТВИЕ",
    title: "Твой момент.",
    title2: "Твоё сияние.",
    intro: "Найди время для себя и насладись спокойной атмосферой ухода за красотой.",
    button: "Записаться",
    services: "Услуги и цены",
    subtitle: "Красота в твоём стиле.",
    manicure: "Гигиенический маникюр",
    gel: "Маникюр с гелем",
    extension: "Наращивание ногтей",
    correction: "Коррекция ногтей",
    short: "Короткие ногти",
    medium: "Средняя длина",
    long: "Длинные ногти",
    french: "Французский дизайн",
    pedicure: "Педикюр с гель-лаком",
    hygienic: "Гигиенический педикюр с обработкой пяток",
    about: "Красота и забота о себе",
    aboutText: "Немного времени для себя, забота и внимание к деталям.",
    contact: "Контакты",
    address: "Jokirannankuja 15, 21260 Raisio",
    booking: "Запланируй свой визит",
    bookingText: "Свяжись с мастером, чтобы договориться об удобном времени.",
    extra: "Дополнительная услуга",
    prices: "Цены",
    notice: "Демонстрационный сайт. Перед записью уточняйте услуги и цены."
  }
};

const languages = ["FI", "EN", "UA", "RU"] as const;

export default function App() {
  const [language, setLanguage] = useState<keyof typeof translations>("FI");
  const t = translations[language];

  const priceGroups = [
    { title: t.manicure, price: "35 €" },
    { title: t.gel, price: "55 €" },
    {
      title: t.extension,
      items: [
        [t.short, "80 €"],
        [t.medium, "85 €"],
        [t.long, "90 €"]
      ]
    },
    {
      title: t.correction,
      items: [
        [t.short, "60 €"],
        [t.medium, "65 €"],
        [t.long, "70 €"]
      ]
    },
    { title: t.french, price: "+10 €" },
    { title: t.pedicure, price: "60 €" },
    { title: t.hygienic, price: "60 €*" }
  ];

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Ihalan <span>Kauneushoito</span>
          <small>BEAUTY & WELLNESS</small>
        </a>

        <nav>
          <a href="#palvelut">{t.nav[0]}</a>
          <a href="#meista">{t.nav[1]}</a>
          <a href="#yhteystiedot">{t.nav[2]}</a>
        </nav>

        <div className="language-switch">
          {languages.map((lang) => (
            <button
              key={lang}
              className={language === lang ? "active" : ""}
              onClick={() => setLanguage(lang)}
              aria-label={`Language ${lang}`}
            >
              {lang}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">{t.eyebrow} · RAISIO</p>
            <h1>{t.title}<br /><em>{t.title2}</em></h1>
            <p className="hero-description">{t.intro}</p>
            <a href="#yhteystiedot" className="primary-button">
              {t.button} →
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1200"
              alt="Beautiful manicure"
            />
            <div className="image-label">A MOMENT JUST FOR YOU</div>
          </div>
        </section>

        <section className="services" id="palvelut">
          <p className="eyebrow">{t.prices}</p>
          <h2>{t.services}</h2>
          <p>{t.subtitle}</p>

          <div className="price-list">
            {priceGroups.map((item) => (
              <article className="price-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  {item.items && (
                    <div className="price-options">
                      {item.items.map(([name, price]) => (
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
          <p className="notice">{t.notice}</p>
        </section>

        <section className="about" id="meista">
          <div>
            <p className="eyebrow">IHALAN KAUNEUSHOITO</p>
            <h2>{t.about}</h2>
            <p>{t.aboutText}</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1000"
            alt="Nail care"
          />
        </section>

        <section className="booking">
          <p className="eyebrow">{t.contact}</p>
          <h2>{t.booking}</h2>
          <p>{t.bookingText}</p>
          <a href="tel:+358449303124" className="primary-button">
            044 930 3124
          </a>
        </section>
      </main>

      <footer id="yhteystiedot">
        <h2>Ihalan Kauneushoito</h2>
        <p>{t.address}</p>
        <p>044 930 3124</p>
        <p>
          <a href="https://www.instagram.com/nails_by_akimenko_turku/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
        <p>© {new Date().getFullYear()} Ihalan Kauneushoito</p>
        <small>Itsenäinen esittelysivusto – ei yrityksen virallinen sivusto.</small>
      </footer>
    </>
  );
}
