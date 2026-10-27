import { siteConfig } from '../site-config'

export type FaqItem = { question: string; answer: string }
export type JsonLdThing = Record<string, unknown>

export function getWebSiteSchema(): JsonLdThing {
    const { siteUrl, brandName, defaultDescription, locale } = siteConfig
    const orgId = `${siteUrl}/#organization`

    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: brandName,
        url: siteUrl,
        description: defaultDescription,
        inLanguage: locale,
        publisher: { '@id': orgId },
    }
}

/** Mínimo até gate legal (CNPJ/endereço) — não inventar dados. */
export function getMinimalOrganizationSchema(): JsonLdThing {
    const { siteUrl, brandName, defaultDescription } = siteConfig
    const logo = `${siteUrl}/echannel-logo.png`

    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: brandName,
        url: siteUrl,
        logo,
        description: defaultDescription,
        parentOrganization: {
            '@type': 'Organization',
            name: 'Powertrend Cloud Solutions',
            url: 'https://www.powertrend.com.br',
        },
    }
}

export function getWebPageSchema(options: {
    name: string
    description: string
    url: string
}): JsonLdThing {
    const { siteUrl } = siteConfig
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: options.name,
        description: options.description,
        url: options.url,
        isPartOf: { '@id': `${siteUrl}/#website` },
        inLanguage: siteConfig.locale,
    }
}

export function getFAQSchema(faqs: FaqItem[]): JsonLdThing {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

/** SoftwareApplication — sinal para IA sobre categoria de produto (mall digital). */
export function getSoftwareApplicationSchema(): JsonLdThing {
    const { siteUrl, brandName, defaultDescription } = siteConfig

    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: brandName,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: siteUrl,
        description: defaultDescription,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'BRL',
            description:
                'Abertura gradual; planos comerciais e loja demo disponíveis conforme fase de lançamento.',
        },
    }
}
