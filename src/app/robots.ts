import { buildPublicRobotsRules } from '../../lib/seo/robots-config'
import { siteConfig } from '../../lib/site-config'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: buildPublicRobotsRules(),
        sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
        host: siteConfig.siteUrl,
    }
}
