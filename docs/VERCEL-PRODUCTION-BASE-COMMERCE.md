# Vercel Production — site-echannel + proxy Base Commerce

Checklist para **echannel-site** (Production) passar a proxy `/base-commerce/*` para os deploys BC.

## 1. Variáveis (Production)

**Vercel → projeto `echannel-site` (ou site-echannel) → Settings → Environment Variables → Production**

| Variável | Valor (MVP atual) |
|----------|-------------------|
| `BASE_COMMERCE_API_ORIGIN` | `https://base-commerce-api.vercel.app` |
| `BASE_COMMERCE_ADMIN_ORIGIN` | `https://base-commerce-admin.vercel.app` |
| `BASE_COMMERCE_STOREFRONT_ORIGIN` | `https://base-commerce-storefront.vercel.app` *(opcional no primeiro deploy — ver §3)* |

Sem barra no final. Também manter `NEXT_PUBLIC_SITE_URL=https://www.echannel.com.br` se ainda não estiver.

Rewrites são lidos **no build** (`next.config.ts` → `baseCommerceRewrites()`). Depois de salvar envs:

1. **Deployments → Production → Redeploy** (marque *Use existing Build Cache* **off** se quiser garantir config nova).

## 2. Código no ar (git)

| Passo | Ação |
|-------|------|
| A | Merge PR **feat → `develop`** (home Stitch + rewrites BC-S11.8) se ainda aberta |
| B | PR **`develop` → `main`** e merge quando QA ok |
| C | Production Vercel deve rastrear **`main`** atualizada (commit com `lib/base-commerce-rewrites.ts` + `next.config.ts`) |

Se Production ainda apontar para commit **anterior** aos rewrites, o proxy **não existe** mesmo com envs corretas.

## 3. API + admin sem storefront (opcional)

Para liberar **só** API e admin antes da vitrine:

- Defina **apenas** `BASE_COMMERCE_API_ORIGIN` e `BASE_COMMERCE_ADMIN_ORIGIN`.
- **Não** defina `BASE_COMMERCE_STOREFRONT_ORIGIN` (ou remova na Vercel).
- Redeploy Production.

Rotas `/base-commerce/demo/*` e vitrine no domínio www **não** proxy até incluir storefront.

Implementação: `lib/base-commerce-rewrites.ts` registra rewrites **por origem** presente (não exige as três).

## 4. Smoke no browser (ordem)

1. **API direta (BC)** — deve responder antes de testar www:
   - https://base-commerce-api.vercel.app/base-commerce/api  
   - Esperado: resposta do app (ex. Hello World / health), não 404 Vercel.

2. **Site com rewrites** — só depois de envs + redeploy + merge na branch de Production:
   - https://www.echannel.com.br/base-commerce/api  
   - https://www.echannel.com.br/base-commerce/admin/login  

3. **Storefront** (quando env storefront configurado):
   - https://www.echannel.com.br/base-commerce/demo/pt-BR  

4. **Admin / auth** — se login redireciona errado:
   - No projeto **base-commerce-admin**, `AUTH_URL` / callbacks devem usar `https://www.echannel.com.br/base-commerce/admin` em produção.
   - Workaround temporário (não ideal): apontar auth para `*.vercel.app` só em homolog.

Arquivos estáticos em `public/base-commerce/` (ex. Google verification) continuam servidos pelo Next **antes** dos rewrites.

## 5. curl rápido

```bash
curl -sI "https://www.echannel.com.br/base-commerce/admin/login" | head -5
curl -sS "https://base-commerce-api.vercel.app/base-commerce/api" | head -3
```

## 6. Search Console

Por último no rollout geral — ver [SEO-GEO-IA-SEARCH-PLAN.md §7](./SEO-GEO-IA-SEARCH-PLAN.md).

## Referências

- [BASE-COMMERCE-REWRITES.md](./BASE-COMMERCE-REWRITES.md)
- `base-commerce/docs/DEPLOY-PRODUCTION-MVP.md` (monorepo BC)
