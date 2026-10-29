import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '../../../components/JsonLd'
import { SiteFooter } from '../../../components/layout/SiteFooter'
import {
    homePricingPlans,
    type PricingPlan,
    type PricingPlanId,
} from '../../../data/home-pricing'
import { buildWhatsAppUrl } from '../../../data/landing-content'
import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import {
    buildPlanCheckoutUrl,
    isPricingPlanId,
    validPlanIds,
} from '../../../../lib/plan-checkout'
import { buildPageMetadata } from '../../../../lib/seo/page-seo'
import { getWebPageSchema } from '../../../../lib/seo/schemas'
import { siteConfig } from '../../../../lib/site-config'

type PageProps = { params: Promise<{ plan: string }> }

function findPlan(planId: PricingPlanId): PricingPlan | undefined {
    return homePricingPlans.find((p) => p.id === planId)
}

function whatsappForPlan(plan: PricingPlan): string {
    const messages: Record<PricingPlanId, string> = {
        starter: 'Olá! Quero assinar o plano Starter e-commerce Echannel.',
        bairro: `Olá! Quero assinar o plano Bairro Echannel.`,
        polo: 'Olá! Represento um polo ou associação e quero falar sobre o plano Polo Echannel.',
    }
    return buildWhatsAppUrl(messages[plan.id])
}

export function generateStaticParams() {
    return validPlanIds.map((plan) => ({ plan }))
}

export async function generateMetadata({ params }: PageProps) {
    const { plan: planSlug } = await params
    if (!isPricingPlanId(planSlug)) {
        return buildPageMetadata({
            title: 'Plano não encontrado — Echannel',
            description: siteConfig.defaultDescription,
            path: '/assinar',
        })
    }
    const plan = findPlan(planSlug)!
    return buildPageMetadata({
        title: `Assinar ${plan.name} — Echannel`,
        description: `${plan.description} ${plan.priceMain}${plan.priceSuffix}.`,
        path: `/assinar/${planSlug}`,
    })
}

export default async function AssinarPlanPage({ params }: PageProps) {
    const { plan: planSlug } = await params
    if (!isPricingPlanId(planSlug)) notFound()

    const plan = findPlan(planSlug)
    if (!plan) notFound()

    const checkoutUrl = buildPlanCheckoutUrl(plan.id)
    const pageUrl = `${siteConfig.siteUrl}/assinar/${plan.id}`

    return (
        <>
            <JsonLd
                data={getWebPageSchema({
                    name: `Assinar ${plan.name}`,
                    description: plan.description,
                    url: pageUrl,
                })}
            />
            <main className='bg-[#f4f7fa] py-12 sm:py-16'>
                <Container className='max-w-xl'>
                    <p className='text-xs font-bold tracking-[0.12em] text-primary'>
                        ASSINATURA ECHANNEL
                    </p>
                    <h1 className='font-heading mt-3 text-3xl font-bold text-[#0f172a]'>
                        {plan.name}
                    </h1>
                    <p className='mt-2 text-[#64748b]'>{plan.description}</p>
                    <p className='font-heading mt-6 text-4xl font-bold text-[#0f172a]'>
                        {plan.priceMain}
                        <span className='text-lg font-normal text-[#64748b]'>
                            {' '}
                            {plan.priceSuffix}
                        </span>
                    </p>

                    <ul className='mt-6 space-y-2 text-sm text-[#475569]'>
                        {plan.features.map((item) => {
                            const text =
                                typeof item === 'string' ? item : item.text
                            return (
                                <li key={text} className='flex gap-2'>
                                    <span className='text-tertiary'>✓</span>
                                    {text}
                                </li>
                            )
                        })}
                    </ul>

                    <div className='mt-8 flex flex-col gap-3'>
                        {checkoutUrl ? (
                            <Button
                                variant='primary'
                                href={checkoutUrl}
                                external
                                className='w-full py-3.5'
                            >
                                Ir para checkout seguro
                            </Button>
                        ) : (
                            <p className='rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#64748b]'>
                                Checkout online na loja plataforma em
                                homologação. Enquanto isso, finalize pelo
                                WhatsApp — nosso time ativa o plano{' '}
                                <strong>{plan.name}</strong>.
                            </p>
                        )}
                        <Button
                            variant='tertiary'
                            href={whatsappForPlan(plan)}
                            external
                            className='w-full py-3.5'
                        >
                            {plan.id === 'polo'
                                ? 'Falar com consultor no WhatsApp'
                                : 'Assinar via WhatsApp'}
                        </Button>
                        <Link
                            href='/planos'
                            className='text-center text-sm font-medium text-primary underline-offset-2 hover:underline'
                        >
                            Comparar todos os planos
                        </Link>
                    </div>
                </Container>
            </main>
            <SiteFooter />
        </>
    )
}
