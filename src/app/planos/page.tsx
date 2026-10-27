import { JsonLd } from '../../components/JsonLd'
import { HomeFinalCtaSection } from '../../components/home/HomeFinalCtaSection'
import { PricingFaqSection } from '../../components/home/PricingFaqSection'
import { PricingSection } from '../../components/home/PricingSection'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { pricingFaqsPtBr } from '../../data/pricing-faq'
import { buildPageMetadata } from '../../../lib/seo/page-seo'
import { getFAQSchema } from '../../../lib/seo/schemas'

export const metadata = buildPageMetadata({
    title: 'Planos e preços — Echannel',
    description:
        'Planos transparentes para PMEs: Starter e-commerce, Bairro e Polo & Associação. Mensalidade fixa, sem comissão abusiva sobre vendas.',
    path: '/planos',
})

export default function PlanosPage() {
    return (
        <>
            <JsonLd data={getFAQSchema(pricingFaqsPtBr)} />
            <main>
                <PricingSection headingLevel='h1' sectionId={null} />
                <PricingFaqSection />
            </main>
            <HomeFinalCtaSection />
            <SiteFooter />
        </>
    )
}
