---
title: Vercel Production — proxy Base Commerce (site-echannel)
audience: equipe echannel/site
updated: 2026-10-29
refs:
  - BASE-COMMERCE-REWRITES.md
  - ../base-commerce/docs/ECHANNEL-SITE-TEAM-BRIEF.md (monorepo BC)
---

# Vercel Production — site-echannel + proxy `/base-commerce/*`

Runbook para a equipe do **site** (`Powertrend/site`, projeto Vercel **echannel-site**) liberar API e admin Base Commerce em **`https://www.echannel.com.br/base-commerce/…`**.

O monorepo **Base Commerce** (`Powertrend/base-commerce`) já está em Production nos projetos `base-commerce-api` e `base-commerce-admin`. **Este documento cobre só o que falta no site + git do site.**

---

## Resumo executivo

| Área | Status |
|------|--------|
| API BC (`base-commerce-api`) | Production OK — path `/base-commerce/api/*` na URL `.vercel.app` |
| Admin BC (`base-commerce-admin`) | Production OK — `AUTH_URL` aponta para `www` (redirect canônico) |
| **Site (`echannel-site`)** | **Pendente:** envs no build + código em **`main`** + redeploy Production |

Sintoma atual: `www.echannel.com.br/base-commerce/admin/login` → **404** da landing Next (rewrites **não** registrados no build).

---

## O que mudou no código (repo site)

**Referência:** commit `2e3746a` (PR **#5** → `develop`).

| Artefato | Mudança |
|----------|---------|
| `lib/base-commerce-rewrites.ts` | **Rewrites parciais:** basta `BASE_COMMERCE_API_ORIGIN` + `BASE_COMMERCE_ADMIN_ORIGIN`. Storefront **opcional**. |
| `docs/VERCEL-PRODUCTION-BASE-COMMERCE.md` | Este runbook |
| `docs/BASE-COMMERCE-REWRITES.md` | Matriz de paths + smoke |
| `.env.example` | Comentários `BASE_COMMERCE_*_ORIGIN` |
| `README.md`, `docs/PACKAGE-MANAGER-VERCEL.md` | Links para Production BC |

**Contexto git**

- PR **#4** (home Stitch) — já mergeada em **`develop`**.
- PR **#5** — merge em **`develop`** (rewrites parciais + docs).
- **Production ainda precisa** de PR **`develop` → `main`** com esses commits (hoje `main` pode estar só até PR #3, out/2025).

---

## Checklist — ordem obrigatória

| # | Ação | Quem | Onde |
|---|------|------|------|
| 1 | Merge **PR #5** em `develop` | Site | GitHub `Powertrend/site` |
| 2 | Abrir PR **`develop` → `main`**, merge após review | Site | GitHub |
| 3 | Confirmar Vercel **Production Branch = `main`** | Site | Vercel → echannel-site → Settings → Git |
| 4 | Cadastrar envs **Production** (§2) | Site | Vercel → Environment Variables |
| 5 | **Redeploy Production** (ideal: **sem** cache de build) | Site | Deployments → … → Redeploy |
| 6 | Smoke §5 | Site + BC | Browser / curl |

Não é possível configurar envs/redeploy da Vercel pelo repo BC — **dashboard Vercel** do projeto **echannel-site**.

---

## 1. Variáveis de ambiente (Vercel)

**Projeto:** `echannel-site` (domínio `www.echannel.com.br` / `echannel.com.br`).

**Settings → Environment Variables → marcar Production** (Preview pode usar os mesmos valores ou URLs de Preview dos apps BC).

| Variável | Tipo Vercel | Obrigatório (MVP) | Valor exemplo |
|----------|-------------|-------------------|---------------|
| `NEXT_PUBLIC_SITE_URL` | Config | Sim | `https://www.echannel.com.br` |
| `BASE_COMMERCE_API_ORIGIN` | Config | Sim | `https://base-commerce-api.vercel.app` |
| `BASE_COMMERCE_ADMIN_ORIGIN` | Config | Sim | `https://base-commerce-admin.vercel.app` |
| `BASE_COMMERCE_STOREFRONT_ORIGIN` | Config | **Não** (MVP) | Omitir ou vazio até existir deploy storefront |

Regras:

- **Sem barra final** nos origins.
- **Sensitive = off** (são URLs públicas, não secrets).
- Rewrites são montados em **`next.config.ts` no build**. Alterar env **exige redeploy** com build novo.

### MVP: só API + admin

- Defina **apenas** `BASE_COMMERCE_API_ORIGIN` e `BASE_COMMERCE_ADMIN_ORIGIN`.
- **Não** crie `BASE_COMMERCE_STOREFRONT_ORIGIN` (ou remova na Vercel).
- Rotas `/base-commerce/demo/*` **não** proxy até incluir storefront.

### Comportamento legado (antes do PR #5)

Se Production ainda rodar commit antigo de `base-commerce-rewrites.ts` que exigia **as três** envs, faltando storefront → **nenhum** rewrite. Por isso o merge **#5** + **`develop`→`main`** é necessário.

---

## 2. Contrato de proxy (destino)

O site encaminha para os deploys BC **com o mesmo path público**:

| Público (www) | Destino Vercel |
|---------------|----------------|
| `/base-commerce/api/:path*` | `{BASE_COMMERCE_API_ORIGIN}/base-commerce/api/:path*` |
| `/base-commerce/admin/:path*` | `{BASE_COMMERCE_ADMIN_ORIGIN}/base-commerce/admin/:path*` |
| `/base-commerce/:path*` | `{BASE_COMMERCE_STOREFRONT_ORIGIN}/base-commerce/:path*` *(só se env storefront)* |

Pré-requisitos no **BC** (time Base Commerce — já configurado em Production):

- API: `API_GLOBAL_PREFIX=base-commerce/api`
- Admin: `NEXT_PUBLIC_BASE_PATH=/base-commerce/admin`

Arquivos em `public/base-commerce/` (ex. verificação Google) são servidos pelo site **antes** dos rewrites.

---

## 3. Git e branches (site)

| Branch | Uso |
|--------|-----|
| `develop` | Integração; PRs de feature (incl. #4 Stitch, #5 rewrites) |
| `main` | **Production Vercel** — deve conter rewrites parciais após release |

Fluxo release:

```text
PR #5 → develop  →  PR develop → main  →  deploy Production automático
```

---

## 4. Admin / Auth (projeto BC — só revisão)

Se após proxy o login “pula” para `echannel.com.br/login` (404 na landing), o ajuste é no projeto **`base-commerce-admin`**, não no site:

| Variável | Production (Config) |
|----------|---------------------|
| `AUTH_URL` | `https://www.echannel.com.br/base-commerce/admin` |
| `GRAPHQL_URL` | `https://www.echannel.com.br/base-commerce/api/graphql` |
| `NEXT_PUBLIC_BASE_PATH` | `/base-commerce/admin` |

Fix de redirect no middleware admin: merge **PR #52/#53** no monorepo BC (já em `main`).

**Workaround homolog:** testar admin direto em `https://base-commerce-admin.vercel.app/base-commerce/admin/login` só se `AUTH_URL` temporariamente apontar para `.vercel.app` — **não** usar em Production final.

---

## 5. Smoke tests (ordem)

### 5.1 API BC direta (antes do www)

Deve passar **antes** de culpar o site:

```bash
curl -sS "https://base-commerce-api.vercel.app/base-commerce/api"
# Esperado: corpo tipo "Hello World!" (200)

curl -sS -X POST "https://base-commerce-api.vercel.app/base-commerce/api/graphql" \
  -H "Content-Type: application/json" \
  -d '{"query":"{ health }"}'
# Esperado: {"data":{"health":"ok"}}
```

### 5.2 Site com rewrites (após envs + redeploy + `main` atualizada)

Use host canônico **`www`**:

| Teste | URL | Esperado |
|-------|-----|----------|
| Admin login | https://www.echannel.com.br/base-commerce/admin/login | Tela de login BC (não 404 landing) |
| API raiz | https://www.echannel.com.br/base-commerce/api | Resposta API (não HTML Next 404) |
| GraphQL | `POST` https://www.echannel.com.br/base-commerce/api/graphql | JSON `{ health }` |

```bash
curl -sI "https://www.echannel.com.br/base-commerce/admin/login" | head -8
curl -sS "https://www.echannel.com.br/base-commerce/api" | head -3
```

### 5.3 Storefront (depois)

Com `BASE_COMMERCE_STOREFRONT_ORIGIN` + deploy storefront:

- https://www.echannel.com.br/base-commerce/demo/pt-BR

---

## 6. Diagnóstico rápido

| Sintoma | Causa provável |
|---------|----------------|
| 404 HTML “This page could not be found” (título Echannel) | Rewrites vazios: envs faltando no **build**, commit antigo em **main**, ou redeploy não feito |
| `echannel.com.br/login?callbackUrl=…` | Admin `AUTH_URL` / middleware — ver §4 |
| API `.vercel.app/…/base-commerce/api` OK, www falha | Só site — §1 e §5 |
| `Cannot GET /` na API `.vercel.app` | Normal com prefixo — usar `/base-commerce/api` |

---

## 7. Referências cruzadas

| Documento | Repo |
|-----------|------|
| [BASE-COMMERCE-REWRITES.md](./BASE-COMMERCE-REWRITES.md) | site |
| [PACKAGE-MANAGER-VERCEL.md](./PACKAGE-MANAGER-VERCEL.md) | site |
| `docs/ECHANNEL-SITE-TEAM-BRIEF.md` | base-commerce |
| `docs/DEPLOY-PRODUCTION-MVP.md` | base-commerce |
| `docs/VERCEL-SETUP-POWERTREND.md` | base-commerce (envs API/admin) |

**Contato:** dúvidas de path público / OAuth / GraphQL → time Base Commerce; domínio, rewrites, landing → time site.

---

## 8. Search Console

Após proxy estável — [SEO-GEO-IA-SEARCH-PLAN.md §7](./SEO-GEO-IA-SEARCH-PLAN.md).
