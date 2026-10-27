import { SiteFooter } from '../../components/layout/SiteFooter'
import { Container } from '../../components/ui/Container'
import { buildPageMetadata } from '../../../lib/seo/page-seo'

export const metadata = buildPageMetadata({
    title: 'Termos de uso — Echannel',
    description: 'Termos de uso do site Echannel.',
    path: '/termos',
})

export default function TermosPage() {
    return (
        <>
            <main className='py-16'>
                <Container className='prose prose-neutral max-w-3xl'>
                    <h1 className='font-heading text-3xl font-bold'>
                        Termos de uso
                    </h1>
                    <p className='text-neutral'>
                        Documento legal em elaboração. Última atualização
                        prevista antes do go-live comercial.
                    </p>
                </Container>
            </main>
            <SiteFooter />
        </>
    )
}
