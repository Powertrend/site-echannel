# Especificação — Home Stitch (print detalhado v2)

Documento de **conteúdo + layout** para implementação. Alimenta `src/data/*` e componentes em `src/components/home/*`.  
Design system: ver `IMPLEMENTATION-EPIC-SPRINTS.md` (Primary `#DC2626`, Tertiary `#16A34A`, Secondary `#0F172A`, faixas `#F4F7FA`).

**Revisão:** 2026-10-27 · alinhado ao conceito **hub PME · e-commerce · comércio de bairro**.

---

## Decisões PO (fechadas)

| # | Tema | Decisão | Implementação |
|---|------|---------|---------------|
| 1 | **Ver Lojas Bairro ao Vivo** | Destino = produto **Echannel Bairro** | `echannelBairroLiveHref` em `src/data/product-decisions.ts` **`null`** até revisão do projeto — CTA desabilitado ou oculto até PO preencher URL |
| 2 | Plano R$ 149 | Nome **`Bairro`** (não “Mainnet”) | `pricing-plans.ts` / badge **Mais Vendido** |
| 3 | Stat **0% taxa sobre vendas** | **Sim**, exibir | `statsZeroFeeClaimEnabled = true`; footnote legal opcional no footer |
| 4 | Bloco **IA** na home | **Referência** — IA integrada nos **produtos** do hub | Copy institucional; sem badge de produto entregue nesta página; detalhe técnico nos apps BC / futuros módulos |

---

## 1. Header (sticky, fundo branco)

| Item | Label / destino |
|------|-----------------|
| Logo | echannel (wordmark vermelho) → `/` |
| Nav | Ver §1.1 |
| CTA secundário | **Falar no WhatsApp** (verde) → `wa.me` |
| CTA primário | **Acesse Painel ADM** (vermelho) → `/base-commerce/admin` |

**Mobile:** hamburger; CTAs WhatsApp + Painel visíveis ou no drawer (decisão S1).

### 1.1 Navegação (8 itens — print v2)

| # | Label no mockup | Href sugerido | Sprint |
|---|-----------------|---------------|--------|
| 1 | Para quem quer vender | `/#solucoes` ou `/solucoes` | S1 / S3 |
| 2 | Soluções PME | `/solucoes#pme` | S3 |
| 3 | Comércio de Bairro | `/comercio-de-bairro` | S3 |
| 4 | Pólos & Associações | `/solucoes#polos` | S3 |
| 5 | Planos | `/planos` ou `/#planos` | S2 |
| 6 | Demonstração | `/#demo` | S2 |
| 7 | FAQ | `/#faq` | S2 |
| 8 | Loja Demo | `/base-commerce/demo/pt-BR` | S1 (link externo path) |

> **Nota:** nav longa — desktop inline; tablet reduzir ou mega-menu; mobile agrupar (“Soluções”, “Planos”, “Demo”, “FAQ”).

---

## 2. Hero

| Elemento | Copy (mockup) |
|----------|----------------|
| H1 | Hub de soluções para o comércio da sua PME. |
| Subtítulo | E-commerce + comércio de bairro + ferramentas digitais (expandir 1 linha como no print) |
| CTA 1 (primary red) | **Conhecer Soluções para PMEs** → `#solucoes` |
| CTA 2 (outline red) | **Ver Lojas Bairro ao Vivo** → **Echannel Bairro** (`echannelBairroLiveHref` — **vazio até revisão**) |
| CTA 3 (green) | **Suporte WhatsApp** / WhatsApp → `buildWhatsAppUrl(...)` |

### 2.1 Stats bar (4 cards brancos)

| Valor | Legenda | Material Symbol (Stitch) | Cor | Badge |
|-------|---------|--------------------------|-----|-------|
| +2.400 | Lojistas ativos | `storefront` | `#991b1b` | pill verde **Ativo** |
| R$ 48M | Transacionados | `payments` | `#15803d` | label **Volume 2024** |
| 99.9% | De disponibilidade | `bolt` | `#64748b` | dot verde |
| 0% | Sem comissões abusivas | `paid` | `#991b1b` | pill **Transparência** |

Coleção: **Material Symbols Outlined** (export HTML do Stitch) — mapa em `src/components/icons/home-stat-icons.tsx`.

| Valor | Gate PO |
|-------|---------|
| +2.400 / R$ 48M / 99.9% | Real ou disclaimer “projeção” |
| 0% | Validar claim legal/comercial |

Implementação: `StatsBar` + prop `disclaimer?: string` abaixo da barra se não auditado.

---

## 3. Pilares — “Três formas práticas de vender sem dor de cabeça”

**Section id:** `#solucoes`

| Card | Accent | Título | Bullets (resumo mockup) | CTA |
|------|--------|--------|-------------------------|-----|
| 1 | Vermelho | PME — e-commerce | Catálogo, checkout, frete | **Quero vender online** (red) |
| 2 | Verde | Comércio de bairro | Presença local, WhatsApp, entrega expressa | **Fortalecer meu bairro** (green) |
| 3 | Azul | Polo ou associação | Agrupar lojistas, venda colaborativa | **Falar com o time Echannel** (blue `#2563EB` ou token `accent-polo`) |

**Componente:** `SolutionPillarGrid` — ícone line stroke na cor do accent.

---

## 4. IA — “Inteligência Artificial onde realmente faz diferença no caixa”

**Eyebrow:** `SEM FUMAÇA TECH` (verde, centrado) · **Componente:** `HomeAiSection` · **Dados:** `home-ai-section.ts`

| # | Título | Ícone | Faixa inferior |
|---|--------|-------|----------------|
| 1 | Foto do Celular → Produto Pronto | `photo_camera` | `bolt` — Economiza até 8 horas… |
| 2 | Atendente WhatsApp Inteligente | `smart_toy` | `schedule` — Zero clientes sem resposta… |
| 3 | Alerta Esperto de Reposição | `inventory_2` | `trending_up` — Evita dinheiro parado… |

**Modo:** `homeAiSectionMode = reference-only` — subtítulo deixa claro que são **capacidades do portfólio**, não um checkout de feature nesta URL. **GEO:** parágrafo factual 2 frases; evitar “já disponível na home”.

---

## 5. Demo + promo (split 50/50)

**Section id:** `#demo` · **Componente:** `DemoPromoSection` · **Dados:** `home-demo-section.ts`

### 5.1 Esquerda — `StorefrontPreviewMock`

- Chrome: `demo.echannel.com.br/vitrine-bairro` + badge **Simulação Real**
- Loja **Mercadinho & Casa Central** (MC), produtos pães/café/queijo, link **Navegar na Loja Demo** → `demoStorefrontPath`
- **Não** iframe BC na v1

### 5.2 Direita — `TrialPromoCard`

| Elemento | Copy |
|----------|------|
| Badge | Condição Especial de Lançamento Regional |
| Título | **30 dias grátis de implantação assistida** |
| Corpo | Vagas prioritárias para as primeiras 50 PMEs… (copy literal Stitch) |
| Timer | H/M/S até fim do dia local (`TrialCountdown`) |
| CTA | **Garantir Meus 30 Dias Grátis** → WhatsApp |

---

## 6. Pricing — “Preço justo para quem vive do balcão e da venda real”

**Section id:** `#planos`

| Plano | Preço | Badge | Destaque features (mockup) |
|-------|-------|-------|----------------------------|
| Starter e-commerce | R$ 89/mês | — | Loja virtual, 100 produtos, PIX/cartão |
| **Bairro** | R$ 149/mês | **Mais Vendido** (red) | Loja física + entrega, gestão entregas bairro |
| Polo & Associações | R$ 389/mês | — | Portal coletivo, capacitação equipe |

**Componente:** `PricingCard` × 3; card do meio `scale-105` ou border primary.

CTAs por card: **Assinar** / **Começar** → Epic 5 (checkout BC).

Toggle mensal/anual: **fora do print v2** — backlog opcional.

---

## 7. FAQ — “Perguntas Frequentes de Lojistas Reais”

**Section id:** `#faq` · **Componente:** `HomeFaqSection` (cards abertos — mock v2) · **Dados:** `merchant-faq.ts` (visível) + `home-faq.ts` (JSON-LD).

| Pergunta (mockup) | Direção da resposta |
|-------------------|---------------------|
| Preciso de conhecimento técnico ou ser programador? | Não-code, implantação assistida, painel simples |
| Como funciona a entrega no comércio de bairro? | Logística flexível, retirada, entrega local (sem prometer SLA não contratado) |

**Manter** também FAQ hub/IA em `home-faq.ts` — unificar ou split:

- `merchant-faq.ts` (lojista — cards abertos na home)
- `home-faq.ts` (GEO / IA Search — pode mesclar as 7 existentes + 2 novas)

JSON-LD `FAQPage`: todas as perguntas visíveis na home.

---

## 8. Banner + footer (print v2)

**Componentes:** `HomeFinalCtaSection` + `SiteFooter` · **Dados:** `site-footer.ts`

### CTA pós-FAQ
- Fundo `#c4121e`, layout desktop: copy à esquerda, botões à direita
- Badge pill: “Comece hoje em menos de 10 minutos” (dot verde)
- Subtítulo 30 dias sem compromisso
- CTAs: **Falar com Especialista Agora** (verde + ícone chat) · **Cadastrar sem Cartão** (branco)

### Footer
- Col 1: wordmark `echannel` + pill **PMEs Brasil**, descrição, selo “Tecnologia Segura…”
- Cols 2–4: **Soluções & Varejo**, **Atendimento & Apoio**, **Institucional** (links do mock)
- Barra inferior: © Echannel Soluções Digitais Ltda. + status “Operação 100% Nacional” / “Servidores e Dados no Brasil”

---

## 9. Arquivo de dados sugerido

```text
src/data/
  site-nav.ts          # header links
  home-hero.ts         # hero + stats
  home-pillars.ts      # 3 pilares
  home-ai-features.ts  # 3 IA
  home-trial.ts        # promo 30 dias
  pricing-plans.ts     # 3 tiers (shared com /planos)
  merchant-faq.ts      # FAQ lojista (UI home)
  home-faq.ts          # GEO extended (merge strategy)
```

---

## 10. Checklist paridade visual (QA vs print)

- [x] 8 links nav + 2 CTAs header
- [x] 3 CTAs hero (Bairro ao Vivo desabilitado até PO URL)
- [x] 4 stats com legendas exatas
- [x] Título seção pilares literal
- [x] 3 cards IA (Reposição / inventory_2)
- [ ] Mock mobile padaria + card trial + countdown (QA visual)
- [x] Pricing “Mais Vendido” no plano R$ 149
- [x] FAQ lojista (cards + ícone vermelho)
- [ ] Ancoras `#solucoes`, `#demo`, `#planos`, `#faq`

---

## 11. Pendências PO (restantes)

1. **URL Echannel Bairro** — preencher `echannelBairroLiveHref` após revisão do projeto (CTA hero + eventual item nav).  
2. **Footnote legal** opcional para stat 0% taxa (texto jurídico).  
3. **Mercadinho & Casa Central** — mock estático ok; link “ver ao vivo” = mesmo gate do item 1.
