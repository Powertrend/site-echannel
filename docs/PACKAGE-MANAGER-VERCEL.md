# pnpm + Next.js na Vercel

Alinhado à documentação oficial:

- [Package Managers](https://vercel.com/docs/package-managers) — detecção por `pnpm-lock.yaml`
- [Upgrading Next.js](https://nextjs.org/docs/app/getting-started/upgrading) — `pnpm i next@latest react@latest react-dom@latest eslint-config-next@latest`
- [Version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) — Turbopack padrão; scripts sem `--turbopack`

## Repositório

| Item | Valor |
|------|--------|
| Gerenciador | **pnpm** 10.x |
| Campo `packageManager` | `pnpm@10.33.0` (Corepack na Vercel) |
| Lockfile | `pnpm-lock.yaml` (commitar) |
| npm/yarn | Não usar — remover `package-lock.json` / `yarn.lock` |

## Comandos locais

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

**Corepack ausente** (ex.: fish + Node do sistema sem `corepack`): use pnpm já instalado (`~/.local/share/pnpm` ou `npm i -g pnpm@10.33.0`). No Arch/CachyOS: `sudo pacman -S nodejs-corepack` se quiser Corepack.

## Vercel (site-echannel)

1. **Não** commitar `package-lock.json` — só `pnpm-lock.yaml`.
2. Build: usa `pnpm install` automaticamente quando existe `pnpm-lock.yaml`.
3. Opcional (pin explícito): env `ENABLE_EXPERIMENTAL_COREPACK=1` + `packageManager` no `package.json` ([Configure a Build](https://vercel.com/docs/builds/configure-a-build#corepack)).
4. Override manual (evitar se possível): `installCommand: "pnpm install"` em `vercel.json` — ver nota sobre versão antiga do pnpm na doc Vercel.

## Upgrade Next.js

```bash
pnpm next upgrade
# ou
pnpm add next@latest react@latest react-dom@latest eslint-config-next@latest
```

Next.js 16+: `next lint` removido — usar `eslint .` (já no `package.json`).
