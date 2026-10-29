# IndexNow — site Echannel

Notifica Bing/Yandex (e ecossistema IndexNow) quando URLs institucionais mudam.

## Configuração

1. Copie `.env.example` → `.env.local` (local) ou variáveis na Vercel.
2. Gere `INDEXNOW_API_KEY` (UUID recomendado).
3. O app serve a chave em `https://www.echannel.com.br/{INDEXNOW_API_KEY}.txt` via `src/app/[filename]/route.ts`.
4. (Opcional) Defina `INDEXNOW_SUBMIT_SECRET` e envie `Authorization: Bearer {secret}` no POST.

## Verificar

```bash
curl -s "$NEXT_PUBLIC_SITE_URL/api/indexnow"
# {"configured":true,"endpoint":"/api/indexnow"}
```

## Enviar URLs após deploy

```bash
SITE=https://www.echannel.com.br
SECRET=seu_INDEXNOW_SUBMIT_SECRET

curl -s -X POST "$SITE/api/indexnow" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $SECRET" \
  -d '{"urls":[
    "'"$SITE"'/",
    "'"$SITE"'/planos",
    "'"$SITE"'/comercio-de-bairro",
    "'"$SITE"'/o-que-e-echannel",
    "'"$SITE"'/e-commerce-pme"
  ]}'
```

Sem `INDEXNOW_SUBMIT_SECRET`, o POST aceita qualquer caller — use secret em produção.

## Search Console

**Por último no rollout:** registrar propriedade, enviar sitemap e inspecionar URLs — ver [SEO-GEO-IA-SEARCH-PLAN.md § Search Console (manual)](./SEO-GEO-IA-SEARCH-PLAN.md).
