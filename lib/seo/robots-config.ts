import type { MetadataRoute } from 'next'

/** SEO clássico + GEO: crawlers de IA explícitos (padrão Powertrend / @echannel/seo). */
export function buildPublicRobotsRules(
    extraDisallow: string[] = [],
): MetadataRoute.Robots['rules'] {
    const privatePaths = ['/api/', '/_next/', ...extraDisallow]

    const aiAllow = {
        allow: '/' as const,
        disallow: privatePaths,
    }

    return [
        { userAgent: '*', allow: '/', disallow: privatePaths },
        { userAgent: 'GPTBot', ...aiAllow },
        { userAgent: 'ChatGPT-User', ...aiAllow },
        { userAgent: 'OAI-SearchBot', ...aiAllow },
        { userAgent: 'Claude-Web', ...aiAllow },
        { userAgent: 'anthropic-ai', ...aiAllow },
        { userAgent: 'ClaudeBot', ...aiAllow },
        { userAgent: 'PerplexityBot', ...aiAllow },
        { userAgent: 'Google-Extended', ...aiAllow },
        { userAgent: 'Applebot-Extended', ...aiAllow },
        { userAgent: 'Omgilibot', ...aiAllow },
        { userAgent: 'CCBot', disallow: '/' },
        { userAgent: 'DotBot', disallow: '/' },
        { userAgent: 'SemrushBot', disallow: '/' },
        { userAgent: 'AhrefsBot', disallow: '/' },
    ]
}
