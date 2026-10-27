import { siteConfig } from './site-config'
import type { PricingPlanId } from '../src/data/home-pricing'

/** Slug BC da loja plataforma (Epic 5 — confirmar com time Base Commerce). */
export const platformStoreSlug = 'echannel'

/**
 * SKU ou path de produto por plano na loja BC (null = checkout externo ainda não publicado).
 * @see docs/CHECKOUT-BASE-COMMERCE.md
 */
export const planCheckoutSkus: Record<PricingPlanId, string | null> = {
    starter: null,
    bairro: null,
    polo: null,
}

const UTM = {
    source: 'echannel-site',
    medium: 'pricing',
    campaign: 'planos',
} as const

export function getAssinarPath(planId: PricingPlanId): string {
    return `/assinar/${planId}`
}

/** URL externa de checkout BC quando SKU + base estiverem configurados. */
export function buildPlanCheckoutUrl(planId: PricingPlanId): string | null {
    const sku = planCheckoutSkus[planId]
    const base =
        process.env.NEXT_PUBLIC_BC_CHECKOUT_BASE_URL?.trim().replace(/\/+$/, '') ??
        ''

    if (!sku || !base) return null

    const url = new URL(`${base}/${encodeURIComponent(sku)}`)
    url.searchParams.set('utm_source', UTM.source)
    url.searchParams.set('utm_medium', UTM.medium)
    url.searchParams.set('utm_campaign', UTM.campaign)
    url.searchParams.set('utm_content', planId)
    return url.toString()
}

export function absoluteAssinarUrl(planId: PricingPlanId): string {
    const path = getAssinarPath(planId)
    const site = siteConfig.siteUrl.replace(/\/+$/, '')
    return `${site}${path}`
}

export const validPlanIds: PricingPlanId[] = ['starter', 'bairro', 'polo']

export function isPricingPlanId(value: string): value is PricingPlanId {
    return (validPlanIds as string[]).includes(value)
}
