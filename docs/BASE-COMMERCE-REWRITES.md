# Rewrites Base Commerce (BC-S11.8)

O projeto **site-echannel** (`echannel.com.br` na raiz) faz proxy de `/base-commerce/*` para os três deploys do monorepo [base-commerce](https://github.com/GrupoPowertrend/ecommerces/base-commerce).

## Variáveis (Vercel → site-echannel)

| Variável | Exemplo |
|----------|---------|
| `BASE_COMMERCE_API_ORIGIN` | `https://base-commerce-api.vercel.app` |
| `BASE_COMMERCE_ADMIN_ORIGIN` | `https://base-commerce-admin.vercel.app` |
| `BASE_COMMERCE_STOREFRONT_ORIGIN` | `https://base-commerce-storefront.vercel.app` |

Sem trailing slash. Se **todas** omitidas, nenhum rewrite (dev local do marketing). API e admin funcionam só com `BASE_COMMERCE_API_ORIGIN` + `BASE_COMMERCE_ADMIN_ORIGIN`; storefront é opcional até o deploy da vitrine.

## Ordem das rotas

1. `/base-commerce/api/*` → API (`API_GLOBAL_PREFIX=base-commerce/api`)
2. `/base-commerce/admin/*` → Admin (`NEXT_PUBLIC_BASE_PATH=/base-commerce/admin`)
3. `/base-commerce/*` → Storefront (`NEXT_PUBLIC_BASE_PATH=/base-commerce`)

Arquivos estáticos em `public/base-commerce/` (ex. verificação Google) têm prioridade sobre rewrites.

## Smoke (ordem)

1. API BC direta: `https://base-commerce-api.vercel.app/base-commerce/api`
2. Com rewrites no site: `https://www.echannel.com.br/base-commerce/admin/login`
3. Vitrine (com storefront env): `https://www.echannel.com.br/base-commerce/demo/pt-BR`

Checklist Vercel (envs + redeploy + `develop`→`main`): [VERCEL-PRODUCTION-BASE-COMMERCE.md](./VERCEL-PRODUCTION-BASE-COMMERCE.md).

```bash
curl -sS "https://base-commerce-api.vercel.app/base-commerce/api" | head -3
curl -sI "https://www.echannel.com.br/base-commerce/admin/login" | head -5
```

Ver também `base-commerce/docs/DEPLOY-PRODUCTION-MVP.md`.
