import { ComercioBairroLanding } from '../../components/comercio-bairro/ComercioBairroLanding'
import { JsonLd } from '../../components/JsonLd'
import { HomeFinalCtaSection } from '../../components/home/HomeFinalCtaSection'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { comercioBairroFaqs } from '../../data/comercio-bairro-page'
import { buildPageMetadata } from '../../../lib/seo/page-seo'
import { getFAQSchema } from '../../../lib/seo/schemas'

export const metadata = buildPageMetadata({
    title: 'Comércio de bairro — digitalize sua loja | Echannel',
    description:
        'Vitrine local, retirada no balcão, entrega no raio do bairro e pedidos via WhatsApp para mercadinhos e lojas de rua — hub Echannel para PMEs.',
    path: '/comercio-de-bairro',
})

export default function ComercioDeBairroPage() {
    return (
        <>
            <JsonLd data={getFAQSchema(comercioBairroFaqs)} />
            <main>
                <ComercioBairroLanding />
            </main>
            <HomeFinalCtaSection />
            <SiteFooter />
        </>
    )
}
