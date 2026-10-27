/**
 * Decisões PO registradas (2026-10-27) — fonte única para CTAs e copy comercial.
 * @see docs/HOME-MOCKUP-SPEC.md § Decisões PO
 */

/** Destino do CTA hero "Ver Lojas Bairro ao Vivo" → produto Echannel Bairro. Vazio até revisão do projeto. */
export const echannelBairroLiveHref: string | null = null

/** Nome comercial do plano intermediário (R$ 149/mês). */
export const pricingPlanBairroName = 'Bairro' as const

/** Exibir claim "0% taxa sobre suas vendas" na StatsBar (validado PO). */
export const statsZeroFeeClaimEnabled = true

/**
 * Seção IA na home: referência de portfólio — IA integrada nos produtos Echannel,
 * não prometer features desta landing como entregues standalone.
 */
export const homeAiSectionMode = 'reference-only' as const
