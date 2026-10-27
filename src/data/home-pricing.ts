import { getAssinarPath } from '../../lib/plan-checkout'
import { pricingPlanBairroName } from './product-decisions'

export const pricingSectionHeader = {
    eyebrow: 'PLANOS TRANSPARENTES',
    title: 'Preço justo para quem vive do balcão e da venda real',
    subtitle:
        'Nada de surpresas no fim do mês ou percentuais sobre o seu faturamento. Você sabe exatamente o que paga.',
} as const

export type PricingPlanId = 'starter' | 'bairro' | 'polo'

export type PricingPlan = {
    id: PricingPlanId
    eyebrow: string
    eyebrowAccent?: boolean
    featuredBadge?: string
    name: string
    description: string
    priceMain: string
    priceSuffix: string
    priceAccent?: boolean
    features: readonly (
        | { text: string; highlight?: boolean; icon?: 'smart_toy' }
        | string
    )[]
    cta: string
    ctaHref: string
    ctaVariant: 'pricingMuted' | 'primary'
    featured?: boolean
}

function feature(text: string, opts?: { highlight?: boolean; icon?: 'smart_toy' }) {
    return opts ? { text, ...opts } : text
}

export const homePricingPlans: readonly PricingPlan[] = [
    {
        id: 'starter',
        eyebrow: 'INÍCIO RÁPIDO',
        name: 'Starter e-commerce',
        description:
            'Para quem quer começar a vender na internet com baixo custo e controle simples.',
        priceMain: 'R$ 89',
        priceSuffix: '/mês',
        features: [
            'Loja Virtual Base Commerce',
            'Catálogo até 500 produtos',
            'Suporte humanizado via WhatsApp',
            'Taxa zero por pedido',
            'Integração Pix & Cartão',
        ],
        cta: 'Assinar Starter',
        ctaHref: getAssinarPath('starter'),
        ctaVariant: 'pricingMuted',
    },
    {
        id: 'bairro',
        eyebrow: 'LOJAS FÍSICAS & VIZINHANÇA',
        eyebrowAccent: true,
        featuredBadge: 'Mais Vendido',
        name: pricingPlanBairroName,
        description:
            'Para lojas físicas que querem dominar as vendas e pedidos da sua própria região.',
        priceMain: 'R$ 149',
        priceSuffix: '/mês',
        priceAccent: true,
        featured: true,
        features: [
            'Tudo incluso do plano Starter',
            'Módulo de Vitrine de Bairro',
            'Retirada no Balcão em 15 min',
            'Gestão de entregas locais via motoboy',
            feature('IA de atendimento no WhatsApp inclusa', {
                highlight: true,
                icon: 'smart_toy',
            }),
        ],
        cta: 'Turbinar Minha Loja no Bairro',
        ctaHref: getAssinarPath('bairro'),
        ctaVariant: 'primary',
    },
    {
        id: 'polo',
        eyebrow: 'REDE DE LOJISTAS',
        name: 'Polo & Associação',
        description:
            'Para associações de lojistas, ruas comerciais, centros de compras e coletivos.',
        priceMain: 'R$ 389',
        priceSuffix: '/mês ou sob medida',
        features: [
            'Até 30 lojas integradas por polo',
            'Portal coletivo da rua/bairro',
            'Divisão automática de receitas (split)',
            'Treinamento presencial ou online da equipe',
            'Gerente de conta regional dedicado',
        ],
        cta: 'Falar com Consultor de Polo',
        ctaHref: getAssinarPath('polo'),
        ctaVariant: 'pricingMuted',
    },
]
