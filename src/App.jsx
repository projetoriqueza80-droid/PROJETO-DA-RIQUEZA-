// src/App.jsx
import React from "react";

/**
 * App final: imagens nas notícias, frases persuasivas, logo (se houver em /public/logo.png)
 * Substitua src/App.jsx por este arquivo e commit no GitHub. Se quiser eu gero o zip também.
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
  // imagens padrão (Unsplash) — você pode trocar por imagens próprias depois
  heroImage: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1400&q=60",
  productImage: "https://images.unsplash.com/photo-1600880292089-90b0b3a26b0b?auto=format&fit=crop&w=900&q=60",
};

const ARTICLES = [
  {
    id: 1,
    title: "Maioria dos brasileiros admite entender pouco de finanças (2025)",
    source: "Observatório Febraban (Jul 2025)",
    summary:
      "Pesquisa de 2025 mostra baixa literacia financeira — ferramenta prática acelera a aplicação do que se aprende.",
    url: "https://portal.febraban.org.br/noticia/4324/pt-br/",
    img: "https://images.unsplash.com/photo-1542223616-9d7e8287f1b8?auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 2,
    title: "Como ter mais dinheiro em 2025: organização e metas práticas",
    source: "Forbes Brasil (Jan 2025)",
    summary:
      "Aplique metas simples e transforme pequenas economias em resultados reais — a planilha guia cada passo.",
    url: "https://forbes.com.br/colunas/2025/01/eduardo-mira-como-ter-mais-dinheiro-em-2025/",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 3,
    title: "ENEF 2025: educação financeira chega às escolas",
    source: "Gov.br / ENEF (Mai 2025)",
    summary:
      "Materiais e ações 2025 reforçam que conhecimento só vira resultado com prática — a planilha facilita a prática.",
    url: "https://www.gov.br/semanaenef/pt-br",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 4,
    title: "Caderneta de poupança recua, mas segue popular (2025)",
    source: "ANBIMA (2025)",
    summary:
      "Entender prós e contras aumenta escolhas melhores — planilha ajuda a comparar cenários em minutos.",
    url: "https://www.anbima.com.br/pt_br/noticias/caderneta-de-poupanca-recua-mas-ainda-e-o-investimento-preferido-da-populacao-brasileira-segundo-anbima.htm",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=60",
  },
];

function LogoOrInitials() {
  // tenta carregar public/logo.png — se não existir, mostra as iniciais PR
  const logoUrl = "/logo.png";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {/* usa imagem se existir, senão fallback */}
      <img
        src={logoUrl}
        alt="Logo"
        onError={(e) => {
          // se imagem falhar, esconde a tag img e deixa o fallback
          e.currentTarget.style.display = "none";
          const el = e.currentTarget.nextSibling;
          if (el) el.style.display = "flex";
        }}
        style={{ width: 64, height: 64, objectFit: "contain", display: "block" }}
      />
      <div
        style={{
          display: "none",
          width: 64,
          height: 64,
          borderRadius: 10,
          background: SETTINGS.primaryGold,
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          color: SETTINGS.bgMain,
          fontFamily: "'Merriweather', serif",
          fontSize: 20,
        }}
      >
        PR
      </div>
    </div>
  );
}

function Header() {
  const wa = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
  return (
    <header style={{ background: SETTINGS.bgMain, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
      <div style={{ width: "min(1100px,94%)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <LogoOrInitials />
          <div>
            <div style={{ fontWeight: 800, fontFamily: "'Merriweather', serif", color: SETTINGS.textPrimary }}>{SETTINGS.siteTitle}</div>
            <div style={{ fontSize: 12, color: SETTINGS.textSecondary }}>Educação financeira prática</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 12 }}>
          <a href="#noticias" style={{ color: SETTINGS.textPrimary, textDecoration: "none", fontWeight: 600 }}>Notícias</a>
          <a href="#venda" style={{ color: SETTINGS.primaryGold, textDecoration: "none", fontWeight: 800 }}>Comprar</a>
          <a href={wa} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryGold, textDecoration: "none", border: `1px solid ${SETTINGS.primaryGold}`, padding: "8px 12px", borderRadius: 8 }}>
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const wa = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
  return (
    <section
      style={{
        padding: "56px 0",
        background: `linear-gradient(180deg, rgba(10,10,10,0.9), rgba(10,10,10,0.9)), url(${SETTINGS.heroImage}) center/cover no-repeat`,
        color: SETTINGS.textPrimary,
      }}
    >
      <div style={{ width: "min(1100px,94%)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 28, alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontFamily: "'Merriweather', serif", fontSize: 44 }}>Guarde mais. Viva melhor.</h1>
          <p style={{ marginTop: 14, color: SETTINGS.textSecondary, maxWidth: 720, fontSize: 18 }}>
            Conteúdo 2025, exemplos reais e uma planilha prática que mostra onde cortar e como fazer sobrar — sem teoria vazia.
          </p>

          <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
            <a href={wa} target="_blank" rel="noreferrer" style={{ background: SETTINGS.primaryGold, color: SETTINGS.bgMain, padding: "12px 16px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>
              Comprar pelo WhatsApp
            </a>
            <a href="#noticias" style={{ color: SETTINGS.textPrimary, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
              Ver notícias
            </a>
          </div>

          <div style={{ marginTop: 16, color: SETTINGS.textSecondary }}>
            <strong style={{ color: SETTINGS.primaryGold }}>Motivo real para comprar a planilha:</strong>
            <ul style={{ color: SETTINGS.textSecondary }}>
              <li><strong>Economize tempo:</strong> pronto para usar — preencha e veja o resultado em minutos.</li>
              <li><strong>Evite erros:</strong> cálculos automatizados e categorias prontas para sua renda.</li>
              <li><strong>Resultados rápidos:</strong> metas visíveis e passos semanais para economizar já.</li>
            </ul>
          </div>
        </div>

        <div style={{ background: "rgba(0,0,0,0.45)", borderRadius: 12, padding: 18, color: SETTINGS.textPrimary, border: `1px solid rgba(255,215,0,0.06)` }}>
          <h3 style={{ marginTop: 0, fontFamily: "'Merriweather', serif", color: SETTINGS.primaryGold }}>Oferta especial — Vagas limitadas</h3>
          <p style={{ color: SETTINGS.textSecondary }}>
            Compre pelo WhatsApp e receba: planilha editável + checklist inicial + orientação por mensagem.
          </p>
          <a href={wa} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 12, padding: "10px 14px", background: SETTINGS.primaryGold, color: SETTINGS.bgMain, textDecoration: "none", borderRadius: 8, fontWeight: 800 }}>
            Comprar agora pelo WhatsApp
          </a>
          <div style={{ marginTop: 12, color: SETTINGS.textSecondary }}>
            <em>Garantia:</em> se após 7 dias você não estiver satisfeito com a organização, nós reembolsamos a diferença (direito do consumidor será respeitado).
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsGrid() {
  return (
    <section id="noticias" style={{ background: SETTINGS.bgMain, padding: "48px 0" }}>
      <div style={{ width: "min(1100px,94%)", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Merriweather', serif", color: SETTINGS.textPrimary }}>Notícias 2025 — seleção atualizada</h2>
        <p style={{ color: SETTINGS.textSecondary }}>Matérias reais e curadas. Leia na fonte e entenda o contexto — links originais incluídos.</p>

        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {ARTICLES.map((a) => (
            <article key={a.id} style={{ background: SETTINGS.cardBg, padding: 12, borderRadius: 10, overflow: "hidden", color: SETTINGS.textPrimary, boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}>
              <div style={{ height: 160, backgroundImage: `url(${a.img})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: 8 }} />
              <h3 style={{ margin: "12px 0 6px", fontFamily: "'Merriweather', serif", color: SETTINGS.textPrimary }}>{a.title}</h3>
              <p style={{ margin: "6px 0", color: SETTINGS.textSecondary }}>{a.summary}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <small style={{ color: SETTINGS.textSecondary }}>{a.source}</small>
                <a href={a.url} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryGold, fontWeight: 800, textDecoration: "none" }}>
                  Ler na fonte
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 18, color: SETTINGS.textSecondary }}>
          <strong>Fontes:</strong> Observatório Febraban; Forbes Brasil; ENEF (Gov.br); ANBIMA; B3 / BoraInvestir.
        </div>
      </div>
    </section>
  );
}

function SalesSection() {
  const wa = `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
  return (
    <section id="venda" style={{ padding: "48px 0", background: SETTINGS.bgMain }}>
      <div style={{ width: "min(1100px,94%)", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Merriweather', serif", color: SETTINGS.textPrimary }}>Curso + Planilha: "Rumo à Reserva"</h2>
        <p style={{ color: SETTINGS.textSecondary }}>Kit completo — entregue após a confirmação da compra via WhatsApp.</p>

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 18 }}>
          <div style={{ background: SETTINGS.textPrimary, padding: 18, borderRadius: 10, minWidth: 260 }}>
            <img src={SETTINGS.productImage} alt="produto" style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
            <h3 style={{ marginTop: 0, color: SETTINGS.bgMain }}>Plano Básico</h3>
            <p style={{ fontSize: 20, margin: "8px 0", fontWeight: 800, color: SETTINGS.bgMain }}>R$ 29,90</p>
            <p style={{ color: SETTINGS.bgMain }}>Aulas essenciais + planilha entregue após confirmação.</p>
            <a href={wa} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 10, padding: "10px 14px", background: SETTINGS.primaryGold, color: SETTINGS.bgMain, textDecoration: "none", borderRadius: 8, fontWeight: 800 }}>
              Comprar pelo WhatsApp
            </a>
            <div style={{ marginTop: 12, color: SETTINGS.textSecondary }}>
              <strong>Frases que convertem (use na descrição do produto):</strong>
              <ul style={{ color: SETTINGS.textSecondary }}>
                <li>“A planilha que te mostra onde cortar sem perder qualidade de vida.”</li>
                <li>“Resultados visíveis: veja quanto você pode economizar já no primeiro mês.”</li>
                <li>“Entrega rápida pelo WhatsApp + suporte inicial para configurar sua planilha.”</li>
              </ul>
            </div>
          </div>

          <div style={{ background: SETTINGS.textPrimary, padding: 18, borderRadius: 10, minWidth: 260 }}>
            <img src={SETTINGS.productImage} alt="produto" style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
            <h3 style={{ marginTop: 0, color: SETTINGS.bgMain }}>Plano Completo</h3>
            <p style={{ fontSize: 20, margin: "8px 0", fontWeight: 800, color: SETTINGS.bgMain }}>R$ 79,90</p>
            <p style={{ color: SETTINGS.bgMain }}>Tudo do básico + consultoria inicial (vagas limitadas).</p>
            <a href={wa} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 10, padding: "10px 14px", background: SETTINGS.primaryGold, color: SETTINGS.bgMain, textDecoration: "none", borderRadius: 8, fontWeight: 800 }}>
              Comprar pelo WhatsApp
            </a>
            <div style={{ marginTop: 12, color: SETTINGS.textSecondary }}>
              <strong>Frases para anúncio / descrição:</strong>
              <ul style={{ color: SETTINGS.textSecondary }}>
                <li>“Pare de adiar — organize suas finanças e alcance metas reais.”</li>
                <li>“Planilha pronta + plano de ação — transforme intenção em hábito.”</li>
                <li>“Suporte por WhatsApp incluso: não te deixamos sozinho na configuração.”</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#060606", color: SETTINGS.textSecondary, padding: 20 }}>
      <div style={{ width: "min(1100px,94%)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>© {new Date().getFullYear()} Projeto de Riqueza</div>
        <div>
          <a href={`https://wa.me/${SETTINGS.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ color: SETTINGS.primaryGold, textDecoration: "none", marginRight: 12 }}>
            WhatsApp
          </a>
          <a href={`mailto:seuemail@exemplo.com`} style={{ color: SETTINGS.primaryGold, textDecoration: "none" }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  // força fundo escuro caso algum CSS externo sobrescreva
  React.useEffect(() => {
    document.documentElement.style.background = SETTINGS.bgMain;
    document.body.style.background = SETTINGS.bgMain;
    document.body.style.color = SETTINGS.textPrimary;
    document.body.style.margin = "0";
  }, []);

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial", background: SETTINGS.bgMain, color: SETTINGS.textPrimary, minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <NewsGrid />
        <SalesSection />
      </main>
      <Footer />
    </div>
  );
}
