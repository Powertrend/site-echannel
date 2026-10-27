import { siteConfig } from '../../lib/site-config'

export type NavLink = { label: string; href: string; external?: boolean }

/** Ordem compacta — uma linha no desktop (≥1180px). */
export const mainNavLinks: NavLink[] = [
    { label: 'Para quem quer vender', href: '/#solucoes' },
    { label: 'Soluções PME', href: '/solucoes#pme' },
    { label: 'Comércio de Bairro', href: '/comercio-de-bairro' },
    { label: 'Polos & Associações', href: '/solucoes#polos' },
    { label: 'Planos', href: '/planos' },
    { label: 'Demonstração', href: '/#demo' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Loja Demo', href: siteConfig.demoStorefrontPath },
]

export const adminPanelHref = siteConfig.adminPath

export const headerBrandPill = 'Hub de Soluções para PMEs'
