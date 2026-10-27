# site-echannel

Site institucional Echannel (`www.echannel.com.br`) — Next.js App Router, proxy Base Commerce em `/base-commerce/*`.

## Git (branches)

- **`develop`** — integração; abra PRs de feature **para `develop`** e faça merge aqui.
- **`main`** — produção/release; **não** mergear features direto na `main`.

## Requisitos

- Node.js **20.9+** (Next.js 16)
- **pnpm** 10.x

## Desenvolvimento

Com **pnpm** já no PATH (instalação standalone ou `npm i -g pnpm`):

```bash
pnpm install
pnpm dev
```

Opcional — pin da versão via [Corepack](https://nodejs.org/api/corepack.html) (nem todo pacote Node no Linux inclui o binário `corepack`; no Arch/CachyOS use `sudo pacman -S nodejs-corepack` ou pnpm global):

```bash
corepack enable
corepack prepare pnpm@10.33.0 --activate
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Servidor de desenvolvimento (Turbopack padrão no Next 16) |
| `pnpm build` | Build de produção |
| `pnpm start` | Servir build |
| `pnpm lint` | ESLint (flat config) |

## Deploy na Vercel

A Vercel detecta **pnpm** pelo `pnpm-lock.yaml`. Detalhes: [docs/PACKAGE-MANAGER-VERCEL.md](./docs/PACKAGE-MANAGER-VERCEL.md).

Variáveis: ver `.env.example` (`NEXT_PUBLIC_SITE_URL`, `BASE_COMMERCE_*_ORIGIN`, `INDEXNOW_API_KEY`).

## Documentação interna

- [BASE-COMMERCE-REWRITES.md](./docs/BASE-COMMERCE-REWRITES.md)
- [IMPLEMENTATION-EPIC-SPRINTS.md](./docs/IMPLEMENTATION-EPIC-SPRINTS.md)
- [HOME-MOCKUP-SPEC.md](./docs/HOME-MOCKUP-SPEC.md)
