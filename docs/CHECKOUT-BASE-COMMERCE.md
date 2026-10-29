# Checkout Echannel → Base Commerce (Epic 5)

O site institucional **não** processa pagamento. CTAs de plano levam a:

1. **`/assinar/[plan]`** — resumo do plano + redirect quando checkout BC existir  
2. **WhatsApp** — fallback comercial enquanto SKU/checkout não estiverem na loja plataforma  

## Loja plataforma

| Campo | Valor atual (stub) |
|-------|-------------------|
| Slug da loja BC | `echannel` (`lib/plan-checkout.ts` → `platformStoreSlug`) |
| Demo vitrine | `/base-commerce/demo/pt-BR` |
| Admin | `/base-commerce/admin` |

## SKUs por plano

Preencher em `lib/plan-checkout.ts` → `planCheckoutSkus` quando BC publicar os produtos:

| Plano site | ID | Preço ref. | SKU BC (pendente) |
|------------|-----|------------|-------------------|
| Starter e-commerce | `starter` | R$ 89/mês | `null` |
| Bairro | `bairro` | R$ 149/mês | `null` |
| Polo & Associação | `polo` | R$ 389/mês | `null` |

## Variáveis de ambiente

```bash
# URL base do checkout na loja plataforma (ex.: https://www.echannel.com.br/base-commerce/echannel/pt-BR/checkout)
NEXT_PUBLIC_BC_CHECKOUT_BASE_URL=
```

Quando `planCheckoutSkus[plan]` e `NEXT_PUBLIC_BC_CHECKOUT_BASE_URL` estiverem definidos, `/assinar/[plan]` exibe **Ir para checkout seguro** com UTM (`utm_source=echannel-site`, `utm_content={plan}`).

## UTM padrão

- `utm_source=echannel-site`
- `utm_medium=pricing`
- `utm_campaign=planos`
- `utm_content=starter|bairro|polo`

## Donos

- **Base Commerce:** gateway Stone/Pagar.me, produtos, webhook  
- **Site:** rotas `/assinar/*`, links na home e `/planos`  

Última revisão: 2026-10-27
