// src/App.jsx
import React, { useEffect, useState } from "react";

/**
 * Landing finalizado: preto + dourado, imagens, notícias 2025, vendas por WhatsApp e CTAs persuasivos.
 * Substitua o arquivo src/App.jsx por este conteúdo e adicione o link do Google Font em index.html.
 */

const SETTINGS = {
  siteTitle: "Projeto de Riqueza",
  subtitle:
    "Notícias, guias práticos e ferramentas para você guardar dinheiro e construir segurança financeira.",
  primaryColor: "#D4AF37", // dourado
  bgDark: "#0b0b0b",
  cardBg: "#0f1112",
  textMuted: "#cfcfc7",
  heroBgImage: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1400&q=60",
  emailContact: "seuemail@exemplo.com",
  whatsappNumber: "5532984113557", // 55 + DDD + número (seu)
  whatsappMessageRaw: "Olá, quero informações sobre o curso Rumo à Reserva e a planilha.",
  planilhaStaticFile: "/planilha-controle-financeiro.xlsx",
  productImage: "https://images.unsplash.com/photo-1600880292089-90b0b3a26b0b?auto=format&fit=crop&w=900&q=60",
};

// Notícias reais / curadas (2025) — links das fontes (já verificadas)
const DEFAULT_ARTICLES = [
  {
    id: 1,
    title: "Observatório Febraban aponta baixa literacia financeira no Brasil (2025)",
    source: "Febraban (Observatório)",
    summary:
      "Pesquisa de 2025 revela que maioria dos brasileiros ainda tem pouco conhecimento financeiro — oportunidade para educação e organização.",
    url: "https://portal.febraban.org.br/noticia/4324/pt-br/",
    image: "https://images.unsplash.com/photo-1542223616-9d7e8287f1b8?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Como ter mais dinheiro em 2025: organização e metas práticas",
    source: "Forbes Brasil",
    summary:
      "Coluna com estratégias práticas para estabelecer metas, cortar desperdícios e direcionar sobra de caixa para poupança/investimentos.",
    url: "https://forbes.com.br/colunas/2025/01/eduardo-mira-como-ter-mais-dinheiro-em-2025/",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Semana Nacional de Educação Financeira (ENEF) — ações e materiais 2025",
    source: "Gov.br / ENEF 2025",
    summary:
      "A 12ª edição da Semana ENEF trouxe foco em educação financeira para crianças e jovens, com conteúdos para escolas e famílias.",
    url: "https://www.gov.br/semanaenef/pt-br",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Caderneta de poupança recua, mas segue popular em 2025",
    source: "ANBIMA",
    summary:
      "Relatório de maio de 2025 mostra tendências de preferência pela poupança e a busca por alternativas mais rentáveis.",
    url: "https://www.anbima.com.br/pt_br/noticias/caderneta-de-poupanca-recua-mas-ainda-e-o-investimento-preferido-da-populacao-brasileira-segundo-anbima.htm",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Planejar e agir: dados mostram lacunas entre intenção e prática financeira (B3)",
    source: "B3 / BoraInvestir",
    summary:
      "Estudo recente aponta que muitos brasileiros afirmam querer poupar, mas ainda não traduzem intenção em hábito — guia com passos práticos.",
    url: "https://borainvestir.b3.com.br/objetivos-financeiros/organizar-as-contas/4-passos-para-cuidar-melhor-do-seu-dinheiro-em-2025/",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60",
  },
];

function Header() {
  return (
    <header style={{ background: SETTINGS.bgDark, color: "white", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
      <div style={styles.container}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              background: SETTINGS.primaryColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: SETTINGS.bgDark,
              fontFamily: "'Merriweather', serif",
              fontSize: 18
            }}>
              PR
            </div>
            <div>
              <div style={{ fontWeight: 800, fontFamily: "'Merriweather', serif" }}>{SETTINGS.siteTitle}</div>
              <div style={{ fontSize: 12, opacity: 0.85, color: SETTINGS.textMuted }}>Educação financeira prática</div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 12 }}>
            <a href="#noticias" style={styles.navLink}>Notícias</a>
            <a href="#planilha" style={styles.navLink}>Planilha</a>
            <a href="#venda" style={styles.navLink}>Comprar</a>
            <a href={`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent("Olá, quero comprar o curso e a planilha.")}`} target="_blank" rel="noreferrer" style={{ ...styles.navLink, border: `1px solid ${SETTINGS.primaryColor}`, padding: "8px 12px", borderRadius: 8 }}>
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const waLink = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent("Olá! Quero saber mais sobre o curso Rumo à Reserva e como comprar.")}`;

  return (
    <section style={{ padding: "56px 0", background: `url(${SETTINGS.heroBgImage}) center/cover no-repeat, ${SETTINGS.bgDark}`, color: "#fff" }}>
      <div style={styles.container}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 28, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 44, margin: 0, fontFamily: "'Merriweather', serif", color: "#fff" }}>Guarde mais. Viva melhor.</h1>
            <p style={{ marginTop: 14, color: SETTINGS.textMuted, maxWidth: 720, fontSize: 18 }}>
              Aprenda a organizar seu dinheiro, criar reserva e investir com segurança — conteúdo direto ao ponto e ferramentas práticas.
            </p>

            <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
              <a href="#planilha" style={{ ...styles.cta, background: SETTINGS.primaryColor }}>Baixar planilha grátis</a>
              <a href={waLink} target="_blank" rel="noreferrer" style={{ ...styles.buyNow }}>Quero comprar pelo WhatsApp</a>
            </div>

            <div style={{ marginTop: 16, color: SETTINGS.textMuted }}>
              Promoção: adquirindo o Plano Completo você ganha uma sessão de consultoria rápida. <strong style={{ color: SETTINGS.primaryColor }}>Vagas limitadas.</strong>
            </div>
          </div>

          <div style={{
            background: "rgba(0,0,0,0.45)",
            borderRadius: 12,
            padding: 14,
            color: "#fff",
            border: `1px solid rgba(212,175,55,0.08)`
          }}>
            <h3 style={{ marginTop: 0 }}>O que você recebe</h3>
            <ul style={{ color: SETTINGS.textMuted }}>
              <li>Curso em vídeo direto ao ponto</li>
              <li>Planilha editável para controle mensal</li>
              <li>Checklist para montar reserva de emergência</li>
            </ul>
            <div style={{ marginTop: 12 }}>
              <a href={`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent("Quero comprar o Plano Básico")} `} target="_blank" rel="noreferrer" style={{ display: "inline-block", padding: "10px 14px", background: SETTINGS.primaryColor, color: SETTINGS.bgDark, fontWeight: 800, borderRadius: 8, textDecoration: "none" }}>
                Comprar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsList() {
  const [articles, setArticles] = useState(DEFAULT_ARTICLES);

  // (Optional) you could fetch live news if you add an API key and enable fetch here.
  return (
    <section id="noticias" style={{ padding: "48px 0", background: SETTINGS.bgDark }}>
      <div style={styles.container}>
        <h2 style={{ ...styles.h2, color: "#fff" }}>Notícias & Tendências (2025)</h2>
        <p style={{ color: SETTINGS.textMuted }}>Seleção de matérias recentes sobre educação financeira e como poupar em 2025.</p>

        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {articles.map((a) => (
            <article key={a.id} style={{ background: SETTINGS.cardBg, padding: 12, borderRadius: 10, overflow: "hidden", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}>
              <div style={{ height: 140, backgroundImage: `url(${a.image})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: 8 }} />
              <h3 style={{ margin: "12px 0 6px", fontFamily: "'Merriweather', serif", color: "#fff" }}>{a.title}</h3>
              <p style={{ margin: "6px 0", color: SETTINGS.textMuted }}>{a.summary}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <small style={{ color: SETTINGS.textMuted }}>{a.source}</small>
                <a href={a.url} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryColor, fontWeight: 700 }}>Ler</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanilhaSection() {
  function downloadCSV() {
    const headers = ["Mês","Categoria","Valor","Tipo","Observações"];
    const rows = [
      ["2025-11","Salário","4000","Entrada","Recebimento"],
      ["2025-11","Aluguel","1200","Saída","Apartamento"],
      ["2025-11","Supermercado","450","Saída","Mensal"],
      ["2025-11","Poupança","400","Entrada","Transferência automática"],
    ];
    const csv = [headers, ...rows].map(r => r.map(cell => `"${String(cell).replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "planilha-controle-financeiro.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="planilha" style={{ padding: "48px 0", background: "#f7f6f2" }}>
      <div style={styles.container}>
        <h2 style={{ ...styles.h2, color: "#111" }}>Planilha de controle financeiro</h2>
        <p style={{ color: "#444" }}>Baixe um modelo pronto para controlar entradas, saídas e metas. Edite no Excel ou no Google Sheets.</p>

        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
          <button onClick={() => {
            // tenta arquivo estático, senão gera CSV
            fetch(SETTINGS.planilhaStaticFile, { method: "HEAD" }).then(res => {
              if (res.ok) window.location.href = SETTINGS.planilhaStaticFile;
              else downloadCSV();
            }).catch(() => downloadCSV());
          }} style={{ padding: "10px 16px", borderRadius: 8, background: SETTINGS.bgDark, color: SETTINGS.primaryColor, border: `1px solid ${SETTINGS.primaryColor}`, fontWeight: 700 }}>
            Baixar planilha (XLSX/CSV)
          </button>

          <a href={`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent("Quero comprar o curso e receber a planilha.")}`} target="_blank" rel="noreferrer" style={{ color: "#333", textDecoration: "none", padding: "8px 12px" }}>Comprar pelo WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function SalesSection() {
  const waLink = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessageRaw)}`;

  return (
    <section id="venda" style={{ padding: "48px 0", background: SETTINGS.bgDark }}>
      <div style={styles.container}>
        <h2 style={{ ...styles.h2, color: "#fff" }}>Curso + Planilha: "Rumo à Reserva"</h2>
        <p style={{ color: SETTINGS.textMuted }}>Kit completo com vídeos, checklist e planilha editável. Vagas limitadas — garanta já sua vaga pelo WhatsApp.</p>

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 18 }}>
          <div style={{ background: "#fff", padding: 18, borderRadius: 10, minWidth: 260 }}>
            <img src={SETTINGS.productImage} alt="produto" style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
            <h3 style={{ marginTop: 0 }}>Plano Básico</h3>
            <p style={{ fontSize: 20, margin: "8px 0", fontWeight: 800 }}>R$ 29,90</p>
            <p style={{ color: "#444" }}>Aulas essenciais + planilha modelo.</p>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 10, padding: "10px 14px", background: SETTINGS.primaryColor, color: SETTINGS.bgDark, textDecoration: "none", borderRadius: 8, fontWeight: 800 }}>
              Comprar pelo WhatsApp
            </a>
          </div>

          <div style={{ background: "#fff", padding: 18, borderRadius: 10, minWidth: 260 }}>
            <img src={SETTINGS.productImage} alt="produto" style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
            <h3 style={{ marginTop: 0 }}>Plano Completo</h3>
            <p style={{ fontSize: 20, margin: "8px 0", fontWeight: 800 }}>R$ 79,90</p>
            <p style={{ color: "#444" }}>Tudo do básico + consultoria inicial (vaga limitada).</p>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 10, padding: "10px 14px", background: SETTINGS.primaryColor, color: SETTINGS.bgDark, textDecoration: "none", borderRadius: 8, fontWeight: 800 }}>
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>

        <div style={{ marginTop: 14, color: SETTINGS.textMuted }}>
          Frases para converter (visíveis para cliente): <br />
          <strong style={{ color: SETTINGS.primaryColor }}>“Garanta sua vaga e comece a economizar já — nossa metodologia entrega resultados reais em semanas.”</strong>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "28px 0", background: "#060606", color: SETTINGS.textMuted }}>
      <div style={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ color: "#fff" }}>© {new Date().getFullYear()} {SETTINGS.siteTitle}</div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href={`https://wa.me/${SETTINGS.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryColor, textDecoration: "none" }}>WhatsApp</a>
            <a href={`mailto:${SETTINGS.emailContact}`} style={{ color: SETTINGS.primaryColor, textDecoration: "none" }}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pr_leads_v3");
    if (stored) setSubscribed(true);
  }, []);

  return (
    <div style={{ fontFamily: "'Merriweather', serif, Inter, system-ui, -apple-system, 'Segoe UI', Roboto", background: SETTINGS.bgDark, color: "#e6e6e6", minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <NewsList />
        <PlanilhaSection />
        <SalesSection />
      </main>
      <Footer />

      {subscribed && (
        <div style={{ position: "fixed", right: 12, bottom: 12, background: SETTINGS.primaryColor, color: SETTINGS.bgDark, padding: "8px 12px", borderRadius: 999, fontWeight: 800 }}>
          Inscrito ✓
        </div>
      )}
    </div>
  );
}

/* ===== styles ===== */
const styles = {
  container: { width: "min(1100px, 94%)", margin: "0 auto" },
  navLink: { color: "rgba(255,255,255,0.92)", textDecoration: "none", padding: "6px 8px", fontWeight: 600 },
  cta: {
    background: SETTINGS.primaryColor,
    color: SETTINGS.bgDark,
    padding: "10px 16px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 800,
  },
  buyNow: {
    display: "inline-block",
    padding: "10px 14px",
    background: "transparent",
    border: `2px solid ${SETTINGS.primaryColor}`,
    color: SETTINGS.primaryColor,
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 800,
  },
  h2: { margin: 0, fontSize: 26, fontFamily: "'Merriweather', serif" },
};
