const DEFAULT_SITE_URL = 'https://www.echannel.com.br'

function normalizeSiteUrl(raw: string | undefined): string {
    const trimmed = raw?.trim().replace(/\/+$/, '')
    if (!trimmed) return DEFAULT_SITE_URL
    try {
        const url = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`)
        return `${url.protocol}//${url.host}`
    } catch {
        return DEFAULT_SITE_URL
    }
}

export const siteConfig = {
    brandName: 'Echannel',
    locale: 'pt-BR',
    defaultDescription:
        'Hub de soluções Echannel: e-commerce e comércio de bairro para PMEs no Brasil — loja virtual, presença local e ferramentas digitais com IA aplicada.',
    get siteUrl() {
        return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
    },
    whatsappE164: '5531993785549',
    /** Loja demo Base Commerce (tier shared) */
    demoStorefrontPath: '/base-commerce/demo/pt-BR',
    adminPath: '/base-commerce/admin',
} as const

export function absoluteUrl(path: string): string {
    const base = siteConfig.siteUrl
    if (path.startsWith('http')) return path
    return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
