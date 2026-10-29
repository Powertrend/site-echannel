import { siteConfig } from '../../lib/site-config'
import { buildWhatsAppUrl } from './landing-content'

export const storefrontPreview = {
    browserUrl: 'demo.echannel.com.br/vitrine-bairro',
    simulationBadge: 'Simulação Real',
    storeInitials: 'MC',
    storeName: 'Mercadinho & Casa Central',
    storeMeta: 'Entrega em até 35 min • Pix e Balcão',
    openBadge: 'Aberto agora',
    cartHint: 'Pedido teste pronto para envio via WhatsApp',
    demoLinkLabel: 'Navegar na Loja Demo',
    demoHref: siteConfig.demoStorefrontPath,
    products: [
        {
            id: 'paes',
            title: 'Pães Artesanais Selecionados',
            price: 'R$ 14,90',
            imageSrc: '/demo-mercadinho/paes.jpg',
            imageAlt: 'Pães artesanais',
        },
        {
            id: 'cafe',
            title: 'Café Moído Especial 500g',
            price: 'R$ 22,50',
            imageSrc: '/demo-mercadinho/cafe.jpg',
            imageAlt: 'Café moído',
        },
        {
            id: 'queijo',
            title: 'Queijo Canastra Tradicional',
            price: 'R$ 38,00',
            imageSrc: '/demo-mercadinho/queijo.jpg',
            imageAlt: 'Queijo Canastra',
        },
    ],
} as const

export const trialPromo = {
    launchBadge: 'Condição Especial de Lançamento Regional',
    title: '30 dias grátis de implantação assistida',
    body: 'Vagas prioritárias para as primeiras 50 PMEs cadastradas na sua região. Configuramos seu catálogo, integrações de Pix e cálculo de frete sem nenhum custo inicial.',
    countdownLabel: 'Tempo restante para travar as condições:',
    cta: 'Garantir Meus 30 Dias Grátis',
    ctaHref: buildWhatsAppUrl(
        'Olá! Quero garantir os 30 dias grátis de implantação assistida Echannel.',
    ),
    footnote: 'Sem necessidade de cartão de crédito antecipado.',
} as const
