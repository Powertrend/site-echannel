import { buildWhatsAppUrl } from './landing-content'

export type PillarAccent = 'primary' | 'tertiary' | 'polo'

export const pillarsSectionHeader = {
    eyebrow: 'PILARES ESTRUTURAIS',
    title: 'Três formas práticas de vender sem dor de cabeça',
    subtitle:
        'Do mercadinho do bairro à loja que entrega no Brasil todo ou ao polo comercial da sua cidade. Você escolhe o ritmo do seu negócio.',
    trustBadge: {
        symbol: 'savings',
        text: 'Sem taxas escondidas por venda',
    },
} as const

export type HomePillar = {
    id: string
    accent: PillarAccent
    iconSymbol: string
    categoryLabel: string
    cornerBadge?: string
    title: string
    body: string
    features: readonly string[]
    cta: string
    ctaTrailingSymbol: 'arrow_forward' | 'forum'
    ctaVariant: 'primary' | 'tertiary' | 'poloSoft'
    href: string
    external: boolean
}

export const homePillars: readonly HomePillar[] = [
    {
        id: 'pme-ecommerce',
        accent: 'primary',
        iconSymbol: 'shopping_bag',
        categoryLabel: 'Base Commerce',
        title: 'PME — e-commerce',
        body: 'Sua loja virtual completa com a solução Base Commerce. Catálogo de produtos, checkout transparente rápido, emissão de nota, gestão de estoque e operação enxuta sem equipe de TI.',
        features: [
            'Checkout rápido Pix/Cartão integrado',
            'Cálculo automático Correios e Melhor Envio',
            'IA para cadastro e descrição rápida de fotos',
        ],
        cta: 'Quero vender online',
        ctaTrailingSymbol: 'arrow_forward',
        ctaVariant: 'primary',
        href: buildWhatsAppUrl(
            'Olá! Tenho uma PME e quero vender online com o Echannel.',
        ),
        external: true,
    },
    {
        id: 'comercio-bairro',
        accent: 'tertiary',
        iconSymbol: 'storefront',
        categoryLabel: 'Raio Local & Retirada',
        cornerBadge: 'Varejo de Rua',
        title: 'Comércio de bairro',
        body: 'A força da sua loja física ampliada no digital. Conecte sua loja da esquina aos clientes da vizinhança com vitrine local, pedidos por WhatsApp ou web, e retirada expressa no balcão sem filas.',
        features: [
            'Raio de entrega local por motoboy e bairro',
            "Aviso automático de 'Pronto para Retirar' no WhatsApp",
            'Catálogo direto no celular dos moradores locais',
        ],
        cta: 'Fortalecer meu bairro',
        ctaTrailingSymbol: 'arrow_forward',
        ctaVariant: 'tertiary',
        href: buildWhatsAppUrl(
            'Olá! Tenho comércio de bairro e quero fortalecer minha loja com o Echannel.',
        ),
        external: true,
    },
    {
        id: 'polo-associacao',
        accent: 'polo',
        iconSymbol: 'hub',
        categoryLabel: 'CDLs, Ruas & Associações',
        title: 'Polo ou associação',
        body: 'União que gera escala para várias PMEs. Para associações comerciais (CDLs/ACIs), ruas temáticas, eixos comerciais, galerias ou praças de alimentação que querem uma vitrine coletiva integrada.',
        features: [
            'Vitrine única do polo com busca por loja ou item',
            'Divisão automática de pagamentos (Split bancário)',
            'Gestão centralizada com autonomia total de cada lojista',
        ],
        cta: 'Falar com o time Echannel',
        ctaTrailingSymbol: 'forum',
        ctaVariant: 'poloSoft',
        href: buildWhatsAppUrl(
            'Olá! Represento um polo ou associação e quero falar com o Echannel.',
        ),
        external: true,
    },
]
