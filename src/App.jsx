// src/App.jsx
import React, { useEffect, useState } from "react";

/**
 * Landing: Educação Financeira
 * - Usa VITE_NEWS_API_KEY (opcional) para buscar notícias reais
 * - Usa VITE_KIWIFY_CHECKOUT para link de compra
 *
 * Para notícias reais: crie variável Vercel VITE_NEWS_API_KEY com uma chave do NewsAPI (ou outro serviço)
 * Ex.: https://newsapi.org/
 */

const DEFAULT_ARTICLES = [
  {
    id: 1,
    title: "5 passos simples para começar a poupar hoje",
    source: "Guia Financeiro",
    summary:
      "Comece separando 10% da sua renda, automatize transferências e crie metas pequenas. Pequenos hábitos viram grandes resultados.",
    url: "#",
  },
  {
    id: 2,
    title: "Como montar uma reserva de emergência eficiente",
    source: "Economia Hoje",
    summary:
      "Reserve entre 3–6 meses de despesas em uma conta separada. Priorize liquidez e segurança nos primeiros passos.",
    url: "#",
  },
  {
    id: 3,
    title: "Dicas para reduzir gastos fixos sem perder qualidade de vida",
    source: "Vida e Dinheiro",
    summary:
      "Reveja planos de assinatura, negocie contratos e avalie pacotes mais econômicos: cada real economizado pode virar investimento.",
    url: "#",
  },
];

function Hero() {
  return (
    <header style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.title}>Projeto de Riqueza</h1>
        <p style={styles.lead}>
          Notícias, guias e ferramentas práticas para você guardar dinheiro e conquistar estabilidade financeira.
        </p>
        <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
          <a href="#noticias" style={styles.cta}>Ver notícias</a>
          <a href="#planilha" style={styles.secondary}>Baixar planilha</a>
        </div>
      </div>
    </header>
  );
}

function NewsList({ apiKey }) {
  const [loading, setLoading] = useState(Boolean(apiKey));
  const [articles, setArticles] = useState(DEFAULT_ARTICLES);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!apiKey) return;

    const controller = new AbortController();
    async function fetchNews() {
      setLoading(true);
      setError("");
      try {
        // Exemplo com NewsAPI. Substitua a URL se usar outro serviço.
        const q = encodeURIComponent("guardar dinheiro OR finanças OR educação financeira");
        const url = `https://newsapi.org/v2/everything?q=${q}&language=pt&pageSize=6&apiKey=${apiKey}`;

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Erro ao buscar notícias: ${res.status}`);
        const data = await res.json();
        if (data.articles && data.articles.length) {
          const mapped = data.articles.map((a, i) => ({
            id: i,
            title: a.title,
            source: (a.source && a.source.name) || "Fonte",
            summary: a.description || a.content || "",
            url: a.url || "#",
          }));
          setArticles(mapped);
        } else {
          setError("Nenhuma notícia encontrada pela API — usando conteúdo local.");
        }
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Erro ao buscar notícias.");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
    return () => controller.abort();
  }, [apiKey]);

  return (
    <section id="noticias" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Últimas notícias sobre finanças pessoais</h2>
        {apiKey ? (
          <p style={styles.muted}>
            Buscando notícias reais da API... {loading ? "Carregando..." : error ? `(erro: ${error})` : ""}
          </p>
        ) : (
          <p style={styles.muted}>Mostrando artigos selecionados. Quer notícias reais? Configure a chave da API.</p>
        )}

        <div style={styles.grid}>
          {articles.map((a) => (
            <article key={a.id} style={styles.card}>
              <h3 style={{ margin: 0 }}>{a.title}</h3>
              <p style={{ margin: "8px 0", color: "#444" }}>{a.summary}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <small style={styles.source}>{a.source}</small>
                <a href={a.url} target="_blank" rel="noreferrer" style={styles.link}>
                  Ler
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanilhaSection() {
  // Gera e baixa um CSV de exemplo com modelo de controle financeiro
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
    <section id="planilha" style={{ ...styles.section, background: "#fafafa" }}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Planilha de controle financeiro</h2>
        <p style={styles.muted}>
          Baixe um modelo de planilha simples para controlar entradas, saídas e metas. Você pode editar no Excel ou no Google Sheets.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={downloadCSV} style={styles.primary}>Baixar planilha (CSV)</button>
          <a href="#noticias" style={styles.secondary}>Ver dicas</a>
        </div>
      </div>
    </section>
  );
}

function SalesSection({ checkoutUrl }) {
  return (
    <section id="venda" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Curso + Planilha: "Rumo à Reserva"</h2>
        <p style={styles.muted}>
          Um kit completo com curso em vídeo, checklist e a planilha editável para organizar seu dinheiro e construir uma reserva.
        </p>

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 18 }}>
          <div style={styles.productCard}>
            <h3 style={{ marginTop: 0 }}>Plano Básico</h3>
            <p style={{ fontSize: 20, margin: "8px 0" }}>R$ 29,90</p>
            <ul>
              <li>Acesso às aulas</li>
              <li>Planilha modelo</li>
            </ul>
            <a href={checkoutUrl || "#"} target="_blank" rel="noreferrer" style={styles.buyButton}>
              Comprar agora
            </a>
          </div>

          <div style={styles.productCard}>
            <h3 style={{ marginTop: 0 }}>Plano Completo</h3>
            <p style={{ fontSize: 20, margin: "8px 0" }}>R$ 79,90</p>
            <ul>
              <li>Tudo do básico</li>
              <li>Suporte via e-mail por 30 dias</li>
              <li>Atualizações da planilha</li>
            </ul>
            <a href={checkoutUrl || "#"} target="_blank" rel="noreferrer" style={styles.buyButton}>
              Comprar agora
            </a>
          </div>
        </div>

        <small style={{ display: "block", marginTop: 12, color: "#666" }}>
          * Substitua o link de checkout pela sua URL da Kiwify em configurações (VITE_KIWIFY_CHECKOUT).
        </small>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "28px 0", background: "#111", color: "#ddd" }}>
      <div style={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>© {new Date().getFullYear()} Projeto de Riqueza</div>
          <div style={{ opacity: 0.9 }}>Contato: seuemail@exemplo.com</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  // Vite env vars: precisa usar prefixo VITE_
  const newsApiKey = import.meta.env.VITE_NEWS_API_KEY || "";
  const checkoutUrl = import.meta.env.VITE_KIWIFY_CHECKOUT || ""; // configure this in Vercel

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
      <Hero />
      <main>
        <NewsList apiKey={newsApiKey} />
        <PlanilhaSection />
        <SalesSection checkoutUrl={checkoutUrl} />
      </main>
      <Footer />
    </div>
  );
}

/* ===== styles ===== */
const styles = {
  hero: {
    padding: "48px 0",
    background: "linear-gradient(135deg,#0f172a,#0b1220)",
    color: "white",
  },
  container: { width: "min(1100px, 94%)", margin: "0 auto" },
  title: { fontSize: 40, margin: 0, letterSpacing: "-0.02em" },
  lead: { marginTop: 12, color: "#cbd5e1", maxWidth: 720 },
  cta: {
    background: "#06b6d4",
    color: "#021024",
    padding: "10px 16px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 700,
  },
  secondary: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "white",
    padding: "10px 16px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
  },
  section: { padding: "48px 0", borderBottom: "1px solid #eee" },
  h2: { margin: 0, fontSize: 26 },
  muted: { color: "#555", marginTop: 8 },
  grid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 14,
  },
  card: {
    background: "white",
    padding: 16,
    borderRadius: 10,
    boxShadow: "0 6px 18px rgba(14,20,30,0.06)",
  },
  source: { color: "#888" },
  link: { color: "#0369a1", fontWeight: 700, textDecoration: "none" },
  primary: {
    background: "#0f172a",
    color: "white",
    padding: "10px 16px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
  },
  productCard: {
    background: "white",
    padding: 18,
    borderRadius: 10,
    boxShadow: "0 8px 28px rgba(16,24,40,0.06)",
    minWidth: 240,
  },
  buyButton: {
    display: "inline-block",
    marginTop: 10,
    padding: "10px 14px",
    background: "#06b6d4",
    color: "#021024",
    textDecoration: "none",
    fontWeight: 800,
    borderRadius: 8,
  },
};
