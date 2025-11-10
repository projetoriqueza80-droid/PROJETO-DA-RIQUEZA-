// src/App.jsx
import React from "react";

const LATEST_ARTICLES = [
  {
    title: "Semana ENEF 2025: Educação Financeira para Crianças e Jovens",
    url: "https://www.gov.br/semanaenef/pt-br",
    source: "Portal Gov.br"
  },
  {
    title: "4 passos para cuidar melhor do seu dinheiro em 2025",
    url: "https://borainvestir.b3.com.br/objetivos-financeiros/organizar-as-contas/4-passos-para-cuidar-melhor-do-seu-dinheiro-em-2025/",
    source: "B3 - Bora Investir"
  },
  {
    title: "Checagem Reuters sobre afirmações econômicas (exemplo de fact-check)",
    url: "https://www.reuters.com/fact-check/portugues/ZSFNLL7ENVLFTA5TDRSOMYJEHM-2024-04-12/",
    source: "Reuters Fact Check"
  },
  {
    title: "Dados e análises sobre finanças públicas e monitoramento",
    url: "https://agenciabrasil.ebc.com.br/economia/noticia/2025-02/superavit-primario-bate-recorde-em-janeiro-e-soma-r-8488-bilhoes",
    source: "Agência Brasil (via Monitor)"
  },
  {
    title: "Estudo: Impactos na circulação de moeda no Brasil (resumo acadêmico)",
    url: "https://arxiv.org/abs/2503.07876",
    source: "arXiv (estudo)"
  }
];

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#111" }}>
      <header style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px", background: "linear-gradient(90deg,#0b1220,#162032)", color: "white"
      }}>
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <div style={{
            width:48, height:48, borderRadius:10, background:"#0ea5a4", display:"flex",
            alignItems:"center", justifyContent:"center", fontWeight:700, color:"white"
          }}>PR</div>
          <div>
            <h1 style={{margin:0, fontSize:18}}>Projeto de Riqueza</h1>
            <div style={{fontSize:12, opacity:0.85}}>Notícias e educação financeira</div>
          </div>
        </div>

        <nav style={{display:"flex", gap:16}}>
          <a href="#noticias" style={{color:"white", textDecoration:"none"}}>Notícias</a>
          <a href="#planilha" style={{color:"white", textDecoration:"none"}}>Planilha</a>
          <a href="#venda" style={{color:"white", textDecoration:"none"}}>Comprar</a>
        </nav>
      </header>

      <main style={{maxWidth:1100, margin:"28px auto", padding:"0 20px"}}>
        {/* Hero */}
        <section style={{
          display:"flex", gap:24, alignItems:"center", background:"#f7fafc",
          padding:24, borderRadius:12, boxShadow:"0 6px 20px rgba(2,6,23,0.06)"
        }}>
          <div style={{flex:1}}>
            <h2 style={{marginTop:0}}>Aprenda a guardar e multiplicar seu dinheiro</h2>
            <p style={{lineHeight:1.6, color:"#333"}}>
              Notícias, guias práticos e uma planilha simples pra você controlar seu orçamento
              e alcançar metas. Conteúdo de qualidade e direto ao ponto — para quem quer resultados.
            </p>

            <div style={{display:"flex", gap:12, marginTop:12}}>
              <a href="#planilha" style={{
                background:"#0ea5a4", color:"white", padding:"10px 16px", borderRadius:8, textDecoration:"none"
              }}>Baixar planilha grátis</a>

              <a href="#venda" style={{
                border:"1px solid #0ea5a4", color:"#0ea5a4", padding:"10px 16px", borderRadius:8, textDecoration:"none"
              }}>Conhecer produto</a>
            </div>
          </div>

          <div style={{width:320, textAlign:"center"}}>
            <div style={{
              background:"linear-gradient(135deg,#111827,#374151)", color:"white",
              padding:20, borderRadius:12, minHeight:160, display:"flex", alignItems:"center", justifyContent:"center"
            }}>
              <div>
                <h3 style={{margin:0}}>Planilha de Controle</h3>
                <p style={{marginTop:8, marginBottom:0}}>Baixe e comece a organizar seu dinheiro hoje.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Notícias */}
        <section id="noticias" style={{marginTop:28}}>
          <h3>Últimas notícias e guias</h3>
          <div style={{display:"grid", gridTemplateColumns:"1fr 320px", gap:20, marginTop:12}}>
            <div>
              {LATEST_ARTICLES.map((a, idx) => (
                <article key={idx} style={{
                  padding:14, borderRadius:8, border:"1px solid #e6e6e6", marginBottom:12, background:"white"
                }}>
                  <a href={a.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#0b1220"}}>
                    <h4 style={{margin:"0 0 6px 0"}}>{a.title}</h4>
                  </a>
                  <div style={{fontSize:13, color:"#555"}}>Fonte: {a.source}</div>
                </article>
              ))}
            </div>

            <aside style={{padding:12, borderRadius:8, border:"1px solid #efefef", background:"#fff"}}>
              <h4 style={{marginTop:0}}>Destaques</h4>
              <ul style={{paddingLeft:18}}>
                <li>Checklist para emergência financeira</li>
                <li>3 metas simples para começar a poupar</li>
                <li>Como usar a planilha: passo a passo</li>
              </ul>
              <p style={{fontSize:12, color:"#666"}}>Fontes: Gov.br, B3, Reuters, Agência Brasil (links no feed).</p>
            </aside>
          </div>
        </section>

        {/* Planilha */}
        <section id="planilha" style={{marginTop:28, padding:18, borderRadius:10, background:"#fff", border:"1px solid #eee"}}>
          <h3>Planilha de controle financeiro</h3>
          <p style={{marginTop:6, color:"#333"}}>
            Baixe a planilha simples pra controlar receitas, despesas e metas. É um modelo editável em Excel / Google Sheets.
          </p>

          {/* Botões de download */}
          <div style={{display:"flex", gap:12, marginTop:12}}>
            <a href="/planilha-exemplo.xlsx" style={{
              background:"#111827", color:"white", padding:"10px 14px", borderRadius:8, textDecoration:"none"
            }}>Download .xlsx</a>

            <a href="https://docs.google.com/spreadsheets/" target="_blank" rel="noopener noreferrer" style={{
              border:"1px solid #111827", color:"#111827", padding:"10px 14px", borderRadius:8, textDecoration:"none"
            }}>Abrir no Google Sheets</a>
          </div>

          <details style={{marginTop:12}}>
            <summary>Como usar</summary>
            <ol style={{marginTop:8}}>
              <li>Abra a planilha e preencha suas receitas mensais.</li>
              <li>Liste despesas fixas e variáveis.</li>
              <li>Defina metas mensais de economia e acompanhe o progresso.</li>
            </ol>
          </details>
        </section>

        {/* Venda / CTA */}
        <section id="venda" style={{marginTop:28, padding:18, borderRadius:10, background:"#f8fafc", border:"1px solid #eef2f7"}}>
          <h3>Planilha + curso rápido (oferta)</h3>
          <p style={{color:"#333"}}>Pacote completo: planilha, vídeo-aulas curtas e suporte por email.</p>

          <div style={{display:"flex", gap:16, alignItems:"center", marginTop:12}}>
            <div style={{flex:1}}>
              <div style={{fontSize:22, fontWeight:700}}>R$ 29,90</div>
              <div style={{fontSize:13, color:"#666"}}>Pagamento seguro. Acesso imediato após a compra.</div>
            </div>

            {/* Placeholder do botão de checkout (troque pelo link do seu checkout da Kiwify) */}
            <div>
              <a href="https://checkout.kiwify.com.br/SEU_PRODUTO_AQUI" target="_blank" rel="noopener noreferrer"
                 style={{
                   background:"#0ea5a4", color:"white", padding:"12px 18px", borderRadius:10, textDecoration:"none", fontWeight:700
                 }}>
                Comprar agora
              </a>
              <div style={{fontSize:12, color:"#666", marginTop:8}}>Envio por email + link de download</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{marginTop:40, padding:"24px 0", textAlign:"center", color:"#666"}}>
          <div>© {new Date().getFullYear()} Projeto de Riqueza — Educação Financeira</div>
          <div style={{fontSize:12, marginTop:8}}>Fontes de notícias (snapshot): Gov.br, B3, Reuters, Agência Brasil, arXiv.</div>
        </footer>
      </main>
    </div>
  );
}
