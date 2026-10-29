# SEO, GEO e IA Search — site Echannel

Plano operacional para **www.echannel.com.br** (`echannel/site`), alinhado ao brief [ECHANNEL-SITE-TEAM-BRIEF.md](../../base-commerce/docs/ECHANNEL-SITE-TEAM-BRIEF.md) e ao padrão Powertrend ([SEO_AI_SEARCH_ARCHITECTURAL_PATTERN.md](https://github.com/Powertrend/site/blob/main/docs/SEO_AI_SEARCH_ARCHITECTURAL_PATTERN.md)).

**North star IA Search:** ser a **fonte citável** em português sobre **hub de soluções para e-commerce e comércio de bairro (PMEs)** — Perplexity, ChatGPT Search, Google AI Overviews — sem canibalizar SEO das lojas Base Commerce em `/base-commerce/{slug}/`.

---

## 1. Três camadas

| Camada | Objetivo | Mecanismos |
|--------|----------|------------|
| **SEO técnico** | Indexação correta | canonical `www`, sitemap, robots, Core Web Vitals, HTTPS |
| **GEO** | Citação em motores generativos | FAQ visível + FAQPage JSON-LD, llms.txt factual, tabelas/listas, zero lorem |
| **IA Search** | Descoberta rápida por crawlers de IA | robots explícitos (GPTBot, PerplexityBot…), IndexNow, structured data rico |

Base Commerce replica princípios similares **por loja** (`@base/seo`, llms.txt tenant). O site na raiz foca **marca + mall + educação**.

---

## 2. Implementado (baseline)

| Artefato | Caminho |
|----------|---------|
| Config canônica | `lib/site-config.ts` (`NEXT_PUBLIC_SITE_URL`) |
| Metadata + OG/Twitter | `lib/seo/page-seo.ts`, `layout.tsx` |
| JSON-LD | WebSite, Organization (mínimo), SoftwareApplication, FAQPage |
| FAQ visível (GEO) | `src/data/home-faq.ts`, `HomeFaqSection.tsx` |
| llms.txt | `public/llms.txt` + `<link rel="alternate">` |
| robots (IA explícita) | `src/app/robots.ts`, `lib/seo/robots-config.ts` |
| sitemap | `src/app/sitemap.ts` |
| IndexNow (API) | `lib/indexnow.ts`, `POST /api/indexnow` |

---

## 3. Roadmap editorial (forte em IA)

### Fase E1 — Fundação (atual)

- [x] Home indexável com proposta clara + FAQ
- [x] IndexNow: API + rota `/{key}.txt` + `.env.example` — ver [INDEXNOW.md](./INDEXNOW.md)
- [ ] Search Console — **último passo manual** (§7 abaixo)
- [ ] Gate legal **EG-D1**: Organization/LocalBusiness com CNPJ/endereço reais (substituir schema mínimo)

### Fase E2 — Páginas citáveis (GEO)

Cada página = **uma intenção de pergunta** que usuários fazem a assistentes de IA:

| Rota planejada | Pergunta-alvo (IA) | Status |
|----------------|-------------------|--------|
| `/planos` | Quanto custa / quais planos Echannel e Base Commerce? | live |
| `/solucoes` | Quais soluções o Echannel oferece (incl. Base Commerce)? | live |
| `/comercio-de-bairro` | Como digitalizar comércio de bairro com o hub? | live |
| `/o-que-e-echannel` | O que é o hub Echannel vs loja virtual vs marketplace? | live |
| `/e-commerce-pme` | Soluções de e-commerce para PME no Echannel | live |

Regras GEO:

- Primeiro parágrafo = **resposta direta** (40–80 palavras).
- H2 = perguntas literais; resposta factual abaixo.
- FAQ local + JSON-LD por página quando >3 Q&A.
- Atualizar `llms.txt` e sitemap a cada página nova.

### Fase E3 — Autoridade e entidades

- `ItemList` / `Service` para trilhas (lojista, consumidor, shopping).
- `sameAs` (LinkedIn, Instagram) quando URLs reais substituirem `#` no footer.
- Artigos blog (opcional) interligados à home — hub “shopping digital IA Brasil”.

### Fase E4 — IA Search operacional

- Pipeline deploy: `POST /api/indexnow` com URLs alteradas (CI ou manual pós-merge).
- Monitorar citações (Perplexity prompts de teste mensais — planilha interna).
- Não bloquear Google-Extended / GPTBot (já allow em robots).

### Fase E5 — Separação BC

- Site **não** indexa `/base-commerce/*` no sitemap institucional (sitemap BC por tenant).
- llms.txt do site **linka** demo/admin; lojas geram llms próprio no storefront.

---

## 4. Checklist de validação

- [ ] [Rich Results Test](https://search.google.com/test/rich-results) — FAQPage na home
- [ ] `curl -s https://www.echannel.com.br/llms.txt | head`
- [ ] `curl -s https://www.echannel.com.br/robots.txt` — entradas GPTBot/PerplexityBot
- [ ] Canonical = `www` em todas as páginas
- [ ] Prompts de teste IA: “O que é Echannel?”, “shopping digital com IA Brasil”, “Echannel vs e-commerce”

---

## 5. Env (Vercel)

Ver `.env.example` e [INDEXNOW.md](./INDEXNOW.md). A chave IndexNow é servida dinamicamente em `/{INDEXNOW_API_KEY}.txt`.

---

## 6. Referências

- Base Commerce: `docs/product/seo-geo-ai-search.md`
- Marketing espelho: `echannel-shopping/apps/marketing/public/llms.txt`
- Brief site ↔ BC: `base-commerce/docs/ECHANNEL-SITE-TEAM-BRIEF.md`

---

## 7. Google Search Console (fazer por último)

Depois do deploy em produção com sitemap completo:

1. Adicionar propriedade `https://www.echannel.com.br` (prefixo ou domínio).
2. Validar DNS ou arquivo HTML (Vercel).
3. Enviar sitemap: `https://www.echannel.com.br/sitemap.xml`.
4. Inspecionar URL: `/`, `/planos`, `/comercio-de-bairro`, `/o-que-e-echannel`.
5. (Opcional) Rich Results Test nas páginas com FAQPage JSON-LD.
6. Disparar IndexNow ([INDEXNOW.md](./INDEXNOW.md)) — complementar, não substitui o Search Console.
