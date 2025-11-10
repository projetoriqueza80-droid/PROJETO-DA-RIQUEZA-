// src/App.jsx
import React from "react";

/**
 * Fix rápido: força fundo escuro e textos legíveis.
 * Cole inteiro em src/App.jsx e commite.
 */

const SETTINGS = {
  bgMain: "#0A0A0A",
  cardBg: "#121212",
  gold: "#FFD700",
  text: "#FFFFFF",
  textSecondary: "#CCCCCC",
  whatsappNumber: "5532984113557",
  whatsappMessage: "Olá, quero comprar o curso Rumo à Reserva e receber a planilha após pagamento."
};

const styles = {
  root: {
    minHeight: "100vh",
    background: SETTINGS.bgMain,
    color: SETTINGS.text,
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
    margin: 0,
    padding: 0,
  },
  container: { maxWidth: 1100, margin: "0 auto", padding: "24px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  navLink: { color: SETTINGS.text, textDecoration: "none", marginLeft: 12 },
  hero: { display: "grid", gridTemplateColumns: "1fr 380px", gap: 28, alignItems: "center", padding: "40px 0" },
  cta: { background: SETTINGS.gold, color: SETTINGS.bgMain, padding: "12px 16px", borderRadius: 8, fontWeight: 800, textDecoration: "none" },
  card: { background: SETTINGS.cardBg, padding: 14, borderRadius: 10 }
};

function Header() {
  const wa = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
  return (
    <header style={styles.container}>
      <div style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 48, height: 48, background: SETTINGS.gold, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: SETTINGS.bgMain, fontWeight: 800 }}>PR</div>
          <div>
            <div style={{ fontWeight: 800 }}>Projeto de Riqueza</div>
            <div style={{ color: SETTINGS.textSecondary, fontSize: 12 }}>Educação financeira</div>
          </div>
        </div>
        <nav>
          <a href="#noticias" style={styles.navLink}>Notícias</a>
          <a href={wa} target="_blank" rel="noreferrer" style={{ ...styles.navLink, marginLeft: 16, border: `1px solid ${SETTINGS.gold}`, padding: "8px 10px", borderRadius: 8, color: SETTINGS.gold }}>WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const wa = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
  return (
    <section style={{ ...styles.container, ...styles.hero }}>
      <div>
        <h1 style={{ margin: 0 }}>Guarde mais. Viva melhor.</h1>
        <p style={{ color: SETTINGS.textSecondary, marginTop: 12 }}>Notícias e ferramentas para organizar suas finanças em 2025.</p>
        <div style={{ marginTop: 16 }}>
          <a href={wa} target="_blank" rel="noreferrer" style={styles.cta}>Comprar pelo WhatsApp</a>
        </div>
      </div>
      <div style={styles.card}>
        <h3 style={{ marginTop: 0, color: SETTINGS.gold }}>Oferta especial</h3>
        <p style={{ color: SETTINGS.textSecondary }}>Planilha entregue após confirmação via WhatsApp — suporte inicial incluso.</p>
      </div>
    </section>
  );
}

function NewsSection() {
  const items = [
    { id: 1, title: "Maioria dos brasileiros admite entender pouco de finanças (2025)", source: "Febraban", url: "#" },
    { id: 2, title: "Como ter mais dinheiro em 2025: metas e organização", source: "Forbes Brasil", url: "#" },
    { id: 3, title: "Semana ENEF 2025: ações para escolas e famílias", source: "Gov.br", url: "#" },
  ];
  return (
    <section id="noticias" style={{ padding: "24px 0", ...styles.container }}>
      <h2 style={{ fontFamily: "'Merriweather', serif" }}>Notícias 2025</h2>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginTop: 12 }}>
        {items.map(i => (
          <article key={i.id} style={{ background: SETTINGS.cardBg, padding: 12, borderRadius: 8 }}>
            <h3 style={{ margin: "6px 0 8px", color: SETTINGS.text }}>{i.title}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", color: SETTINGS.textSecondary }}>
              <small>{i.source}</small>
              <a href={i.url} style={{ color: SETTINGS.gold, fontWeight: 700 }}>Ler</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: 24, background: "#060606", color: SETTINGS.textSecondary }}>
      <div style={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>© {new Date().getFullYear()} Projeto de Riqueza</div>
          <div>
            <a href={`mailto:seuemail@exemplo.com`} style={{ color: SETTINGS.gold, textDecoration: "none" }}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  // Force global background in case CSS elsewhere set white
  React.useEffect(() => {
    document.documentElement.style.background = SETTINGS.bgMain;
    document.body.style.background = SETTINGS.bgMain;
    document.body.style.color = SETTINGS.text;
    document.body.style.margin = "0";
  }, []);
  return (
    <div style={styles.root}>
      <Header />
      <main>
        <Hero />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
