import type { Metadata } from 'next'
import { siteConfig } from '../site-config'

export const HOME_PAGE_SEO = {
    title: 'Echannel — Hub de soluções para e-commerce e comércio de bairro',
    description: siteConfig.defaultDescription,
    path: '/',
} as const

export function buildPageMetadata(options: {
    title: string
    description: string
    path: string
}): Metadata {
    const canonical = `${siteConfig.siteUrl}${options.path === '/' ? '' : options.path}`

    return {
        title: options.title,
        description: options.description,
        metadataBase: new URL(siteConfig.siteUrl),
        alternates: { canonical },
        openGraph: {
            title: options.title,
            description: options.description,
            url: canonical,
            siteName: siteConfig.brandName,
            locale: 'pt_BR',
            type: 'website',
            images: [
                {
                    url: '/echannel-logo.png',
                    width: 1200,
                    height: 630,
                    alt: 'Echannel — Hub de soluções para PMEs',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: options.title,
            description: options.description,
            images: ['/echannel-logo.png'],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}
