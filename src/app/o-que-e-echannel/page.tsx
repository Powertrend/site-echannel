import { GeoContentPage } from '../../components/geo/GeoContentPage'
import { JsonLd } from '../../components/JsonLd'
import { HomeFinalCtaSection } from '../../components/home/HomeFinalCtaSection'
import { SiteFooter } from '../../components/layout/SiteFooter'
import {
    oQueEEchannelCompare,
    oQueEEchannelFaqs,
    oQueEEchannelHero,
} from '../../data/o-que-e-echannel-page'
import { buildPageMetadata } from '../../../lib/seo/page-seo'
import { getFAQSchema } from '../../../lib/seo/schemas'

export const metadata = buildPageMetadata({
    title: 'O que é o Echannel? Hub vs marketplace vs loja virtual',
    description:
        'Echannel é hub de soluções para PMEs: e-commerce Base Commerce, comércio de bairro e polos — não é marketplace. Respostas diretas para SEO e IA.',
    path: '/o-que-e-echannel',
})

export default function OQueEEchannelPage() {
    const hero = oQueEEchannelHero

    return (
        <>
            <JsonLd data={getFAQSchema(oQueEEchannelFaqs)} />
            <main>
                <GeoContentPage
                    eyebrow={hero.eyebrow}
                    title={hero.title}
                    lede={hero.lede}
                    subtitle={hero.subtitle}
                    compare={oQueEEchannelCompare}
                    faqs={oQueEEchannelFaqs}
                    faqTitle='Hub, marketplace e loja virtual'
                    ctas={[
                        { label: 'Ver planos', href: '/planos', variant: 'primary' },
                        {
                            label: 'Comércio de bairro',
                            href: '/comercio-de-bairro',
                            variant: 'outlined',
                        },
                    ]}
                />
            </main>
            <HomeFinalCtaSection />
            <SiteFooter />
        </>
    )
}
