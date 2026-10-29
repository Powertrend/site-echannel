import { SiteFooter } from '../../components/layout/SiteFooter'
import { Container } from '../../components/ui/Container'
import { buildPageMetadata } from '../../../lib/seo/page-seo'

export const metadata = buildPageMetadata({
    title: 'Política de privacidade — Echannel',
    description: 'Política de privacidade do site Echannel.',
    path: '/privacidade',
})

export default function PrivacidadePage() {
    return (
        <>
            <main className='py-16'>
                <Container className='max-w-3xl'>
                    <h1 className='font-heading text-3xl font-bold'>
                        Política de privacidade
                    </h1>
                    <p className='mt-4 text-neutral'>
                        Documento legal em elaboração. LGPD — revisão jurídica
                        pendente.
                    </p>
                </Container>
            </main>
            <SiteFooter />
        </>
    )
}
