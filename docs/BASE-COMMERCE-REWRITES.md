# Rewrites Base Commerce (BC-S11.8)

O projeto **site-echannel** (`echannel.com.br` na raiz) faz proxy de `/base-commerce/*` para os três deploys do monorepo [base-commerce](https://github.com/GrupoPowertrend/ecommerces/base-commerce).

## Variáveis (Vercel → site-echannel)

| Variável | Exemplo |
|----------|---------|
| `BASE_COMMERCE_API_ORIGIN` | `https://base-commerce-api-….vercel.app` |
| `BASE_COMMERCE_ADMIN_ORIGIN` | `https://base-commerce-admin-….vercel.app` |
| `BASE_COMMERCE_STOREFRONT_ORIGIN` | `https://base-commerce-storefront-….vercel.app` |

Sem trailing slash. Se omitidas, **nenhum** rewrite é registrado (dev local do marketing site).

## Ordem das rotas

1. `/base-commerce/api/*` → API (`API_GLOBAL_PREFIX=base-commerce/api`)
2. `/base-commerce/admin/*` → Admin (`NEXT_PUBLIC_BASE_PATH=/base-commerce/admin`)
3. `/base-commerce/*` → Storefront (`NEXT_PUBLIC_BASE_PATH=/base-commerce`)

Arquivos estáticos em `public/base-commerce/` (ex. verificação Google) têm prioridade sobre rewrites.

## Smoke (após BC-S11.9)

```bash
curl -sI "https://echannel.com.br/base-commerce/demo/pt-BR"
curl -sS -X POST "https://echannel.com.br/base-commerce/api/graphql" \
  -H "Content-Type: application/json" \
  -d '{"query":"{ health }"}'
```

Ver também `base-commerce/docs/DEPLOY-PRODUCTION-MVP.md` e `scripts/smoke-production-mvp.sh`.
