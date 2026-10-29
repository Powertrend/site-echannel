import Link from 'next/link'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { Button } from '../../components/ui/Button'
import { Container } from '../../components/ui/Container'
import { homePillars, pillarsSectionHeader } from '../../data/home-pillars'
import { buildPageMetadata } from '../../../lib/seo/page-seo'

export const metadata = buildPageMetadata({
    title: 'Soluções PME — Echannel',
    description:
        'Soluções do hub Echannel para e-commerce (Base Commerce), comércio de bairro e polos comerciais — pensadas para PMEs brasileiras.',
    path: '/solucoes',
})

const sectionIds: Record<string, string> = {
    'pme-ecommerce': 'pme',
    'comercio-bairro': 'bairro',
    'polo-associacao': 'polos',
}

export default function SolucoesPage() {
    const { title, subtitle } = pillarsSectionHeader

    return (
        <>
            <main className='bg-[#f4f7fa] py-12 sm:py-16'>
                <Container>
                    <div className='mx-auto max-w-3xl text-center'>
                        <p className='text-xs font-bold tracking-[0.12em] text-primary sm:text-sm'>
                            HUB ECHANNEL
                        </p>
                        <h1 className='font-heading mt-3 text-3xl font-bold text-[#0f172a] sm:text-4xl'>
                            {title}
                        </h1>
                        <p className='mt-4 text-base text-[#64748b] sm:text-lg'>
                            {subtitle}
                        </p>
                        <p className='mt-6 text-sm text-[#64748b]'>
                            Compare também os{' '}
                            <Link
                                href='/planos'
                                className='font-medium text-primary underline-offset-2 hover:underline'
                            >
                                planos e preços
                            </Link>{' '}
                            ou volte à{' '}
                            <Link
                                href='/'
                                className='font-medium text-primary underline-offset-2 hover:underline'
                            >
                                home
                            </Link>
                            .
                        </p>
                    </div>

                    <div className='mt-12 space-y-10'>
                        {homePillars.map((pillar) => (
                            <section
                                key={pillar.id}
                                id={sectionIds[pillar.id]}
                                className='scroll-mt-24 rounded-2xl border border-[#e8ecf0] bg-white p-6 shadow-sm sm:p-8'
                            >
                                <p className='text-xs font-bold tracking-wide text-[#94a3b8]'>
                                    {pillar.categoryLabel}
                                </p>
                                <h2 className='font-heading mt-2 text-2xl font-bold text-[#0f172a]'>
                                    {pillar.title}
                                </h2>
                                <p className='mt-3 max-w-3xl text-[#64748b]'>
                                    {pillar.body}
                                </p>
                                <ul className='mt-4 list-inside list-disc space-y-1 text-sm text-[#475569]'>
                                    {pillar.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <div className='mt-6 flex flex-wrap gap-3'>
                                    <Button
                                        variant={pillar.ctaVariant}
                                        href={pillar.href}
                                        external={pillar.external}
                                    >
                                        {pillar.cta}
                                    </Button>
                                    {pillar.id === 'comercio-bairro' ? (
                                        <Button
                                            variant='outlined'
                                            href='/comercio-de-bairro'
                                        >
                                            Landing comércio de bairro
                                        </Button>
                                    ) : null}
                                </div>
                            </section>
                        ))}
                    </div>
                </Container>
            </main>
            <SiteFooter />
        </>
    )
}
