
const services = [
  {
    title: "Kasvohoidot",
    description: "Ihonhoitoa, kosteutusta ja luonnollista hehkua.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900"
  },
  {
    title: "Käsi- ja kynsihoidot",
    description: "Kauniit, huolitellut kädet ja kynnet.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900"
  },
  {
    title: "Kauneudenhoito",
    description: "Rentouttavia hetkiä ja hyvää oloa.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900"
  }
];

export default function App() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Ihalan <span>Kauneushoito</span>
          <small>BEAUTY & WELLNESS</small>
        </a>

        <nav>
          <a href="#palvelut">Palvelut</a>
          <a href="#meista">Meistä</a>
          <a href="#yhteystiedot">Yhteystiedot</a>
        </nav>

        <a className="nav-button" href="#varaa">Varaa aika</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">KAUNEUTTA JA HYVÄÄ OLOA RAISIOSSA</p>
            <h1>Oma hetki.<br /><em>Oma hehkusi.</em></h1>
            <p className="hero-description">
              Pysähdy hetkeksi arjen kiireiden keskellä.
              Anna itsellesi aikaa, huolenpitoa ja rentoutumista.
            </p>
            <a href="#varaa" className="primary-button">
              Varaa oma aikasi →
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200"
              alt="Kauneushoidon rauhallinen tunnelma"
            />
            <div className="image-label">HETKI VAIN SINULLE</div>
          </div>
        </section>

        <section className="services" id="palvelut">
          <p className="eyebrow">TUTUSTU PALVELUIHIMME</p>
          <h2>Kauneutta <em>sinun ehdoillasi.</em></h2>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#varaa">Tutustu palveluun →</a>
              </article>
            ))}
          </div>

          <p className="notice">
            Palvelut ovat alustavia esimerkkikategorioita.
          </p>
        </section>

        <section className="about" id="meista">
          <div>
            <p className="eyebrow">IHANAN OMA KAUNEUSHETKISI</p>
            <h2>Hyvä olo alkaa <em>pienistä hetkistä.</em></h2>
            <p>
              Kauneudenhoito on aikaa itsellesi.
              Tervetuloa nauttimaan rauhallisesta hetkestä
              ja henkilökohtaisesta palvelusta.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1000"
            alt="Kauneushoitolan sisustus"
          />
        </section>

        <section className="booking" id="varaa">
          <p className="eyebrow">AIKA SINULLE</p>
          <h2>Ansaitset hetken <em>itsellesi.</em></h2>
          <p>Varaa aikasi helposti verkossa.</p>
          <a href="https://timma.fi/" className="primary-button">
            Varaa aika verkossa →
          </a>
          <small>Demo: oikea ajanvarauslinkki lisätään myöhemmin.</small>
        </section>
      </main>

      <footer id="yhteystiedot">
        <h2>Ihalan Kauneushoito</h2>
        <p>Jokirannankuja 15, 21260 Raisio</p>
        <p>044 930 3124</p>
        <p>© {new Date().getFullYear()} Ihalan Kauneushoito</p>
        <small>Itsenäinen esittelysivusto – ei yrityksen virallinen sivusto.</small>
      </footer>
    </>
  );
}
