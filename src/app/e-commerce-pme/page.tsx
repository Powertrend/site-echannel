import { GeoContentPage } from '../../components/geo/GeoContentPage'
import { JsonLd } from '../../components/JsonLd'
import { HomeFinalCtaSection } from '../../components/home/HomeFinalCtaSection'
import { SiteFooter } from '../../components/layout/SiteFooter'
import {
    ecommercePmeFaqs,
    ecommercePmeHero,
    ecommercePmeHighlights,
} from '../../data/ecommerce-pme-page'
import { buildPageMetadata } from '../../../lib/seo/page-seo'
import { getFAQSchema } from '../../../lib/seo/schemas'

export const metadata = buildPageMetadata({
    title: 'E-commerce para PME — Base Commerce | Echannel',
    description:
        'Loja virtual, checkout e painel admin para PMEs: plano Starter, demo Base Commerce e suporte em português no hub Echannel.',
    path: '/e-commerce-pme',
})

export default function EcommercePmePage() {
    const hero = ecommercePmeHero

    return (
        <>
            <JsonLd data={getFAQSchema(ecommercePmeFaqs)} />
            <main>
                <GeoContentPage
                    eyebrow={hero.eyebrow}
                    title={hero.title}
                    lede={hero.lede}
                    subtitle={hero.subtitle}
                    highlights={ecommercePmeHighlights}
                    faqs={ecommercePmeFaqs}
                    ctas={[
                        {
                            label: 'Assinar Starter',
                            href: '/assinar/starter',
                            variant: 'primary',
                        },
                        {
                            label: 'Loja demo',
                            href: hero.demoHref,
                            variant: 'outlined',
                        },
                        {
                            label: 'Soluções PME',
                            href: hero.solucoesHref,
                            variant: 'tertiary',
                        },
                    ]}
                />
            </main>
            <HomeFinalCtaSection />
            <SiteFooter />
        </>
    )
}
