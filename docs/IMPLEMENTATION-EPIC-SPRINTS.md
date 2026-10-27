# Epic e sprints — site Echannel (Stitch → produção)

**Referência visual:** protótipo Stitch (home long-scroll + design system).  
**Especificação detalhada (print v2):** [HOME-MOCKUP-SPEC.md](./HOME-MOCKUP-SPEC.md) — nav 8 itens, 3 CTAs hero, stats, demo padaria, pricing “Mais Vendido”, FAQ lojista.  
**Conceito:** hub de soluções para **e-commerce** e **comércio de bairro**, foco **PMEs**.  
**Stack:** Next.js 15 App Router, Tailwind v4, repo `echannel/site`.  
**Fora do repo:** checkout Stone/Pagar.me via **Base Commerce** (loja-plataforma) — ver [IMPLEMENTATION-EPIC-SPRINTS.md § Epic 5](./IMPLEMENTATION-EPIC-SPRINTS.md#epic-5--checkout-e-planos-comercial).

**Estado atual (baseline):** home escura legada (hero foto + countdown + FAQ texto); SEO/GEO parcial (`llms.txt`, robots IA, JSON-LD, sitemap); rewrites BC-S11.8; **sem** design system Stitch, **sem** header/footer institucional, **sem** seções do mockup claro.

---

## Mapa mockup → implementação

| # | Bloco no Stitch | Componente alvo | Rota |
|---|-----------------|-----------------|------|
| 1 | Header: 8 nav + WhatsApp + **Acesse Painel ADM** | `SiteHeader`, `site-nav.ts` | global |
| 2 | Hero H1 + **3 CTAs** + stats 4 cards | `HeroSection`, `StatsBar` | `/` |
| 3 | Pilares — título “Três formas práticas…” | `SolutionPillarGrid` `#solucoes` | `/` |
| 4 | IA — 3 cards (Produto Pronto, WhatsApp, Estoque) | `AiFeaturesSection` | `/` |
| 5 | Mock **Mercadinho & Casa Central** + trial 30d | `StorefrontPreviewMock`, `TrialPromoCard` `#demo` | `/` |
| 6 | Pricing — “Preço justo…” + badge **Mais Vendido** | `PricingSection` `#planos` | `/` + `/planos` |
| 7 | FAQ — “Perguntas… Lojistas Reais” acordeão | `FaqAccordion` `#faq` | `/` |
| 8 | Banner CTA vermelho + footer | `CtaBanner`, `SiteFooter` | global |
| — | Design system (cores, tipo, botões) | tokens + UI kit | — |

**Nav print v2:** Para quem quer vender · Soluções PME · Comércio de Bairro · Pólos & Associações · Planos · Demonstração · FAQ · **Loja Demo** (BC).

---

## Design system (contrato dev)

Extraído do kit Stitch — implementar em `src/styles/tokens.css` + `@theme` Tailwind v4.

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#DC2626` | CTAs principais, banner final, ícones destaque |
| `secondary` | `#0F172A` | Texto, botão inverted, títulos |
| `tertiary` | `#16A34A` | WhatsApp, pilar “Bairro”, sucesso |
| `neutral` | `#64748B` | Labels, bordas, texto secundário |
| `surface-muted` | `#F4F7FA` | Faixas alternadas (pilares, pricing) |

| Tipografia | Fonte | Papel |
|------------|-------|--------|
| Headline | **Outfit** (`next/font/google`) | H1–H3 |
| Body / label | **Inter** | parágrafos, UI, FAQ |

| Componente | Variantes |
|------------|-----------|
| `Button` | primary, secondary, inverted, outlined |
| `IconButton` | círculo (nav dock mobile) |
| `SearchInput` | opcional (blog/soluções — S4) |
| `Card` | radius ~12–16px, shadow suave |
| `Badge` | “Mais Vendido” no plano R$ 149 (Bairro) |
| `accent-polo` | azul ~`#2563EB` — CTA pilar associação |

**Substituir:** Geist + hero foto full-screen → layout claro, seções em faixas (mockup).

Assets: exportar ícones do Stitch ou usar Lucide/React Icons alinhados aos metáforas (carrinho, pin map, prédios, varinha IA).

---

## Epics (nível produto)

### Epic 1 — Fundação design system

**Objetivo:** qualquer tela nova usa tokens e átomos consistentes.

| ID | Story | Aceite |
|----|-------|--------|
| E1-S1 | Tokens CSS + Tailwind (`primary`, fonts Outfit/Inter) | build ok; dark mode **desligado** (mockup light-only) |
| E1-S2 | `Button` 4 variantes + estados hover/focus/disabled | Storybook opcional; snapshot manual |
| E1-S3 | `Card`, `Badge`, `Container` (max-width 1280) | usados em pelo menos 1 seção |
| E1-S4 | Remover `prefers-color-scheme` flip e `.hero-bg` legado | preparar `layout` claro |

**Dependências:** nenhuma.

---

### Epic 2 — Shell global (header / footer)

**Objetivo:** navegação do mockup + links BC + WhatsApp.

| ID | Story | Aceite |
|----|-------|--------|
| E2-S1 | `SiteHeader`: 8 links ([spec §1.1](./HOME-MOCKUP-SPEC.md#11-navegação-8-itens--print-v2)), WhatsApp, “Acesse Painel ADM” | mobile hamburger + Loja Demo |
| E2-S2 | `SiteFooter` colunas (Soluções, Suporte, Institucional) + links reais/placeholder | termos/privacidade placeholder ok |
| E2-S3 | `RootLayout` com header/footer; metadata intacta | JSON-LD permanece |

**Dependências:** Epic 1.

---

### Epic 3 — Home (conteúdo Stitch)

**Objetivo:** paridade visual funcional com mockup (dados ainda estáticos em `src/data/`).

| ID | Story | Aceite |
|----|-------|--------|
| E3-S1 | `HeroSection` + 3 CTAs; Bairro ao Vivo **disabled se `echannelBairroLiveHref` null** | `home-hero.ts` + `product-decisions.ts` |
| E3-S2 | `StatsBar` 4 métricas (+2.400 lojas, R$ 48M, 99.9%, 0% taxa) | disclaimer PO se não auditado |
| E3-S3 | `SolutionPillarGrid` + H2 “Três formas práticas…” | CTAs: online / bairro / time |
| E3-S4 | `AiFeaturesSection` modo **reference-only** (IA nos produtos) | copy + disclaimer na seção |
| E3-S5 | `StorefrontPreviewMock` (Mercadinho) + `TrialPromoCard` “Garantir 30 dias” | `#demo`; countdown H/M/S |
| E3-S6 | `PricingSection` — plano **Bairro** R$ 149 **Mais Vendido** | `pricing-plans.ts` + `product-decisions.ts` |
| E3-S7 | `FaqAccordion` “Lojistas Reais” + merge GEO `home-faq.ts` | JSON-LD todas perguntas visíveis |
| E3-S8 | `CtaBanner` vermelho pré-footer | 2 CTAs: WhatsApp + Criar conta (link plano) |

**Dependências:** Epic 1–2.

**Riscos:** métricas hero e trial 30 dias exigem validação jurídica/comercial.

---

### Epic 4 — Páginas secundárias (nav)

**Objetivo:** links do header não 404.

| ID | Story | Aceite |
|----|-------|--------|
| E4-S1 | `/planos` — pricing completo + FAQ planos + metadata | canonical + sitemap |
| E4-S2 | `/solucoes` — hub lista (Base Commerce + bairro + polo) | llms.txt atualizado |
| E4-S3 | `/comercio-de-bairro` — landing GEO | FAQ local + JSON-LD |
| E4-S4 | Ancoras `/solucoes#pme`, `#polos`; **“Lojas Bairro ao Vivo”** (PO define rota) | sem 404 no nav |
| E4-S5 | `/termos`, `/privacidade` mínimo | links footer |

**Dependências:** Epic 1–2; conteúdo PO.

---

### Epic 5 — Checkout e planos (comercial)

**Objetivo:** conversão Starter / Bairro / Polo sem duplicar gateway no site ([brief BC](../base-commerce/docs/ECHANNEL-SITE-TEAM-BRIEF.md)).

| ID | Story | Aceite |
|----|-------|--------|
| E5-S1 | Decisão PO: SKUs na loja BC `echannel` (ou slug) | doc 1 página |
| E5-S2 | CTAs “Assinar” / “Criar conta” → URL storefront checkout | UTM + plan slug |
| E5-S3 | Página intermediária opcional `/assinar/[plan]` (resumo + redirect) | 308/ link |
| E5-S4 | Stone/Pagar.me homolog na loja plataforma | webhook BC |
| E5-S5 | Pós-pagamento (manual ou API): provisionar tenant | runbook |

**Dependências:** BC Production/homolog; Epic 3–4 CTAs.

**Dono principal:** BC + financeiro; site só roteia.

---

### Epic 6 — SEO / GEO / IA Search (evolução)

**Objetivo:** reforçar citação IA após redesign.

| ID | Story | Aceite |
|----|-------|--------|
| E6-S1 | Atualizar `llms.txt` + FAQ por página nova | diff revisado |
| E6-S2 | `sitemap.ts` incluir `/planos`, `/solucoes`, … | Search Console |
| E6-S3 | IndexNow key + deploy hook | doc `.env.example` |
| E6-S4 | Organization schema pós gate legal EG-D1 | CNPJ/endereço reais |

**Dependências:** Epic 4; paralelo a Epic 3.

**Baseline já feito:** robots IA, FAQPage home, metadata — refatorar após mudança de layout.

---

### Epic 7 — Qualidade e release

| ID | Story | Aceite |
|----|-------|--------|
| E7-S1 | Lighthouse mobile ≥ 90 performance (best effort) | imagens next/image |
| E7-S2 | a11y: foco, contraste AA nos botões vermelho/verde | axe manual |
| E7-S3 | Smoke: rewrites BC + páginas estáticas GMC | checklist brief §9 |
| E7-S4 | Preview Vercel + QA PO sign-off | |

---

## Proposta de sprints (2 semanas cada)

Assume **1 dev front** + PO part-time + BC em paralelo.

### Sprint 1 — “Fundação clara”

| Entregas | Stories |
|----------|---------|
| Design system no código | E1-S1 … E1-S4 |
| Shell navegável | E2-S1 … E2-S3 |
| Hero + pilares (MVP home) | E3-S1, E3-S3 |

**DoD:** home parcial clara no ar (Preview); header/footer funcionais; WhatsApp + admin link.

---

### Sprint 2 — “Home completa”

| Entregas | Stories |
|----------|---------|
| IA + dashboard + trial | E3-S4, E3-S5 |
| Pricing home + FAQ acordeão + banner | E3-S6, E3-S7, E3-S8 |
| Stats bar | E3-S2 (com copy aprovada) |

**DoD:** home ≈ mockup Stitch; remover UI legada escura.

---

### Sprint 3 — “Planos e conteúdo hub”

| Entregas | Stories |
|----------|---------|
| `/planos` | E4-S1 |
| `/solucoes`, `/comercio-de-bairro` | E4-S2, E4-S3 |
| SEO sitemap/llms | E6-S1, E6-S2 |

**DoD:** CTAs pricing levam a destinos definidos (mesmo que checkout ainda stub).

---

### Sprint 4 — “Conversão + legal + polish”

| Entregas | Stories |
|----------|---------|
| Handoff checkout BC | E5-S1 … E5-S3 (mínimo link) |
| Termos/privacidade + stubs nav | E4-S4, E4-S5 |
| QA | E7-S1 … E7-S3 |

**DoD:** fluxo feliz “escolhi Bairro → cheguei no checkout BC demo/homolog”.

---

### Sprint 5 (buffer / BC) — “Pagamento vivo”

| Entregas | Stories |
|----------|---------|
| Stone/Pagar.me + pós-pagamento | E5-S4, E5-S5 |
| IndexNow + EG-D1 | E6-S3, E6-S4 |
| Release Production | E7-S4 |

**Gate:** BC-S11.9 / autorização PO.

---

## Estrutura de pastas sugerida (pós Sprint 1)

```text
src/
  app/
    page.tsx                 # composição home
    planos/page.tsx
    solucoes/page.tsx
    layout.tsx
  components/
    layout/ SiteHeader.tsx, SiteFooter.tsx
    home/   HeroSection.tsx, …
    ui/     Button.tsx, Card.tsx, …
  data/
    site-nav.ts, home-hero.ts, home-pillars.ts, home-ai-features.ts
    pricing-plans.ts, merchant-faq.ts, home-faq.ts
  styles/
    tokens.css
lib/
  site-config.ts
  seo/ …
public/
  llms.txt
  images/ … (dashboard mock export Stitch)
```

---

## Decisões PO

### Fechadas (2026-10-27)

| Item | Decisão |
|------|---------|
| CTA **Ver Lojas Bairro ao Vivo** | Produto **Echannel Bairro** — URL **`null`** em `product-decisions.ts` até revisão |
| Plano R$ 149 | Nome **Bairro** + badge Mais Vendido |
| Stat **0% taxa** | **Exibir** (`statsZeroFeeClaimEnabled`) |
| Seção **IA** na home | **Referência** ao portfólio (IA nos produtos); não vender como feature desta página |

Detalhe: [HOME-MOCKUP-SPEC.md § Decisões PO](./HOME-MOCKUP-SPEC.md#decisões-po-fechadas).

### Ainda em aberto antes / durante Sprint 1

1. **Métricas do hero** (+2.400, R$ 48M…) — reais vs disclaimer.  
2. **Trial 30 dias** — regras comerciais.  
3. Preços **89 / 149 / 389** — confirmados para contrato/checkout.  
4. **Painel ADM** — BC admin até login Echannel unificado.  
5. **Checkout** — loja-plataforma BC (Epic 5).  
6. **URL Echannel Bairro** — preencher após revisão do projeto.

---

## Rastreabilidade

| Artefato | Caminho |
|----------|---------|
| Brief site ↔ BC | `base-commerce/docs/ECHANNEL-SITE-TEAM-BRIEF.md` |
| SEO / GEO | `docs/SEO-GEO-IA-SEARCH-PLAN.md` |
| Rewrites | `docs/BASE-COMMERCE-REWRITES.md` |
| Este plano | `docs/IMPLEMENTATION-EPIC-SPRINTS.md` |
| Home detalhada (print v2) | `docs/HOME-MOCKUP-SPEC.md` |

---

## Próximo passo imediato

Kickoff **Sprint 1**: criar tokens Outfit/Inter + `Button` + `SiteHeader`/`SiteFooter` e primeira faixa hero clara — PR único “feat(design-system): fundação Stitch Echannel”.
