import type { FaqItem } from '../../lib/seo/schemas'
import { siteConfig } from '../../lib/site-config'

export const ecommercePmeHero = {
    eyebrow: 'E-COMMERCE PME',
    title: 'Soluções de loja virtual para PME no Echannel',
    lede:
        'Para quem quer vender na internet sem montar departamento de TI: o Echannel oferece o plano Starter e-commerce e a solução Base Commerce — catálogo, checkout Pix e cartão, painel admin e operação enxuta hospedada em www.echannel.com.br/base-commerce/{slug}/.',
    subtitle:
        'Ideal para PMEs que já vendem no balcão e querem canal online com suporte humanizado em português.',
    demoHref: siteConfig.demoStorefrontPath,
    planosHref: '/planos',
    solucoesHref: '/solucoes#pme',
} as const

export const ecommercePmeHighlights = [
    {
        icon: 'shopping_bag',
        title: 'Catálogo e checkout',
        body: 'Produtos, variações, frete e pagamento integrados — operação pensada para equipe pequena.',
    },
    {
        icon: 'dashboard',
        title: 'Painel admin',
        body: 'Pedidos, estoque e configurações em um painel web; acesso admin via /base-commerce/admin (loja plataforma).',
    },
    {
        icon: 'photo_camera',
        title: 'IA no cadastro',
        body: 'Capacidades de IA no ecossistema para acelerar fotos e descrições (conforme produto/plano contratado).',
    },
    {
        icon: 'support_agent',
        title: 'Suporte WhatsApp',
        body: 'Implantação e dúvidas do dia a dia com time em português — sem ticket infinito em inglês.',
    },
] as const

export const ecommercePmeFaqs: FaqItem[] = [
    {
        question: 'O que é Base Commerce no Echannel?',
        answer:
            'Plataforma de e-commerce da Powertrend usada pelo hub: multi-tenant, storefront público e admin por loja. No plano compartilhado Echannel, URLs seguem o padrão /base-commerce/{slug}/{idioma}/.',
    },
    {
        question: 'Quanto custa começar a vender online?',
        answer:
            'Tabela comercial atual: plano Starter a partir de R$ 89/mês (consulte /planos). Taxa zero por pedido na proposta comercial dos planos Starter e Bairro — validar contrato.',
    },
    {
        question: 'Posso ver uma loja demo antes de assinar?',
        answer:
            'Sim: vitrine demo em /base-commerce/demo/pt-BR e mock Mercadinho na home (/#demo). Não substituem sua loja real, servem para visualizar fluxo.',
    },
    {
        question: 'Como assino o plano Starter?',
        answer:
            'Use /assinar/starter para resumo do plano e contato, ou WhatsApp pelo site. Checkout direto na loja BC quando SKUs estiverem publicados (ver docs/CHECKOUT-BASE-COMMERCE.md).',
    },
]
