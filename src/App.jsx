// src/App.jsx
import React from "react";

/**
 * Landing final — notícias 2025 + venda por WhatsApp
 * Substitua src/App.jsx por este arquivo e adicione o Google Fonts no index.html.
 */

const SETTINGS = {
  siteTitle: "Projeto de Riqueza",
  primaryGold: "#FFD700",
  bgMain: "#0A0A0A",
  cardBg: "#121212",
  textPrimary: "#FFFFFF",
  textSecondary: "#CCCCCC",
  whatsappNumber: "5532984113557",
  whatsappMessage: "Olá, quero comprar o curso Rumo à Reserva e receber a planilha após pagamento.",
};

// Notícias curadas e linkadas (2025)
const ARTICLES = [
  {
    id: 1,
    title: "Maioria dos brasileiros admite entender pouco de finanças, diz pesquisa (2025)",
    source: "Observatório Febraban (Jul 2025)",
    summary: "Levantamento do Observatório Febraban (julho/2025) mostra baixa literacia financeira entre a população — reforça a necessidade de educação e ferramentas práticas.",
    url: "https://portal.febraban.org.br/noticia/4324/pt-br/",
    img: "https://images.unsplash.com/photo-1542223616-9d7e8287f1b8?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Como ter mais dinheiro em 2025: organização e metas práticas",
    source: "Forbes Brasil (Jan 2025)",
    summary: "Artigo com passos práticos para estabelecer metas, cortar desperdícios e transformar sobra de caixa em poupança/investimento.",
    url: "https://forbes.com.br/colunas/2025/01/eduardo-mira-como-ter-mais-dinheiro-em-2025/",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Semana ENEF 2025 foca educação financeira para crianças e jovens",
    source: "Gov.br / ENEF (Mai 2025)",
    summary: "A 12ª Semana Nacional de Educação Financeira (ENEF) trouxe materiais e ações para escolas e famílias em 2025.",
    url: "https://www.gov.br/semanaenef/pt-br",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Caderneta de poupança recua, mas segue popular em 2025",
    source: "ANBIMA (2025)",
    summary: "Relatório ANBIMA 2025 mostra tendências de poupança e opções de investimento por faixa de renda — importante entender alternativas para seu dinheiro render mais.",
    url: "https://www.anbima.com.br/pt_br/noticias/caderneta-de-poupanca-recua-mas-ainda-e-o-investimento-preferido-da-populacao-brasileira-segundo-anbima.htm",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "4 passos para cuidar melhor do seu dinheiro em 2025",
    source: "B3 / BoraInvestir",
    summary: "Guia prático com passos para organizar as contas, priorizar objetivos e transformar intenção em hábito financeiro.",
    url: "https://borainvestir.b3.com.br/objetivos-financeiros/organizar-as-contas/4-passos-para-cuidar-melhor-do-seu-dinheiro-em-2025/",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60",
  },
];

function Header() {
  return (
    <header style={{ background: SETTINGS.bgMain, padding: 14 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 52, height: 52, borderRadius: 10, background: SETTINGS.primaryGold, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: SETTINGS.bgMain }}>
            PR
          </div>
          <div>
            <div style={{ fontFamily: "'Merriweather', serif", fontSize: 18, color: SETTINGS.textPrimary, fontWeight: 800 }}>{SETTINGS.siteTitle}</div>
            <div style={{ color: SETTINGS.textSecondary, fontSize: 12 }}>Educação financeira prática</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 12 }}>
          <a href="#noticias" style={{ color: SETTINGS.textPrimary, textDecoration: "none", fontWeight: 600 }}>Notícias</a>
          <a href="#venda" style={{ color: SETTINGS.primaryGold, textDecoration: "none", fontWeight: 800 }}>Comprar</a>
          <a href={`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryGold, textDecoration: "none", border: `1px solid ${SETTINGS.primaryGold}`, padding: "8px 10px", borderRadius: 8 }}>WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const wa = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
  return (
    <section style={{ background: SETTINGS.bgMain, color: SETTINGS.textPrimary, padding: "56px 0", borderBottom: `1px solid rgba(255,255,255,0.03)` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: 28, alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontFamily: "'Merriweather', serif", fontSize: 40 }}>Notícias e ferramentas para transformar sua relação com o dinheiro</h1>
          <p style={{ color: SETTINGS.textSecondary, marginTop: 12, fontSize: 18 }}>
            Conteúdo 100% atual (2025) e direto ao ponto — entenda por que organizar suas finanças é o primeiro passo para ter mais liberdade.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <a href={wa} target="_blank" rel="noreferrer" style={{ background: SETTINGS.primaryGold, color: SETTINGS.bgMain, padding: "12px 16px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>
              Comprar pelo WhatsApp
            </a>
            <a href="#noticias" style={{ color: SETTINGS.textPrimary, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>Ver notícias</a>
          </div>

          <div style={{ marginTop: 14, color: SETTINGS.textSecondary }}>
            <strong style={{ color: SETTINGS.primaryGold }}>Por que comprar a planilha?</strong>
            <ul style={{ color: SETTINGS.textSecondary }}>
              <li>Organização imediata: modelo pronto que evita erros comuns.</li>
              <li>Foco em resultados: metas, metas automáticas e visão clara do que sobra no mês.</li>
              <li>Entrega rápida: planilha enviada após confirmação via WhatsApp — simples e segura.</li>
            </ul>
          </div>
        </div>

        <div style={{ background: "#0f0f0f", borderRadius: 12, padding: 16, border: `1px solid rgba(255,215,0,0.06)` }}>
          <h3 style={{ marginTop: 0, color: SETTINGS.primaryGold, fontFamily: "'Merriweather', serif" }}>Oferta especial</h3>
          <p style={{ color: SETTINGS.textSecondary }}>Compre pelo WhatsApp e ganhe um checklist de apoio para começar a poupar hoje.</p>
          <a href={wa} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 10, background: SETTINGS.primaryGold, color: SETTINGS.bgMain, padding: "10px 14px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>
            Comprar agora
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsGrid() {
  return (
    <section id="noticias" style={{ background: SETTINGS.bgMain, padding: "48px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Merriweather', serif", color: SETTINGS.textPrimary }}>Notícias 2025 — seleção atualizada</h2>
        <p style={{ color: SETTINGS.textSecondary }}>Fontes originais e linkadas — leia na fonte e entenda o contexto.</p>

        <div style={{ marginTop: 20, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {ARTICLES.map(a => (
            <article key={a.id} style={{ background: SETTINGS.cardBg, padding: 14, borderRadius: 10, color: SETTINGS.textPrimary }}>
              <div style={{ height: 140, backgroundImage: `url(${a.img})`, backgroundSize: "cover", borderRadius: 8 }} />
              <h3 style={{ margin: "12px 0 6px", fontFamily: "'Merriweather', serif" }}>{a.title}</h3>
              <p style={{ margin: "6px 0", color: SETTINGS.textSecondary }}>{a.summary}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <small style={{ color: SETTINGS.textSecondary }}>{a.source}</small>
                <a href={a.url} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryGold, fontWeight: 800, textDecoration: "none" }}>Ler na fonte</a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 20, color: SETTINGS.textSecondary }}>
          <strong>Fontes:</strong> Observatório Febraban; Forbes Brasil; Semana ENEF (Gov.br); ANBIMA; B3 / BoraInvestir. Veja os links nas matérias acima. :contentReference[oaicite:1]{index=1}
        </div>
      </div>
    </section>
  );
}

function SalesFooter() {
  const wa = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
  return (
    <section id="venda" style={{ background: SETTINGS.bgMain, padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.03)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ margin: 0, fontFamily: "'Merriweather', serif", color: SETTINGS.textPrimary }}>Pronto para começar?</h3>
          <p style={{ color: SETTINGS.textSecondary }}>Adquira a planilha e receba instruções e suporte inicial via WhatsApp.</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href={wa} target="_blank" rel="noreferrer" style={{ background: SETTINGS.primaryGold, color: SETTINGS.bgMain, padding: "12px 16px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Comprar pelo WhatsApp</a>
          <a href={`mailto:${SETTINGS.whatsappNumber}@example.com`} style={{ color: SETTINGS.textPrimary, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>Fale por email</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#060606", color: SETTINGS.textSecondary, padding: 20 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>© {new Date().getFullYear()} Projeto de Riqueza</div>
        <div>
          <a href={`https://wa.me/${SETTINGS.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryGold, textDecoration: "none", marginRight: 12 }}>WhatsApp</a>
          <a href={`mailto:${SETTINGS.emailContact}`} style={{ color: SETTINGS.primaryGold, textDecoration: "none" }}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial", background: SETTINGS.bgMain, color: SETTINGS.textPrimary, minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <NewsGrid />
        <SalesFooter />
      </main>
      <Footer />
    </div>
  );
}
