import { siteConfig } from '../../lib/site-config'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    const paths = [
        '/',
        '/planos',
        '/solucoes',
        '/comercio-de-bairro',
        '/o-que-e-echannel',
        '/e-commerce-pme',
        '/assinar/starter',
        '/assinar/bairro',
        '/assinar/polo',
        '/termos',
        '/privacidade',
    ]

    return paths.map((path) => ({
        url: `${siteConfig.siteUrl}${path === '/' ? '' : path}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: path === '/' ? 1 : 0.7,
    }))
}
