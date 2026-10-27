import type { FaqItem } from '../../lib/seo/schemas'

export const oQueEEchannelHero = {
    eyebrow: 'HUB ECHANNEL',
    title: 'O que é o Echannel?',
    lede:
        'Echannel é um hub de soluções digitais para pequenas e médias empresas no Brasil: reúne e-commerce (loja virtual Base Commerce), comércio de bairro (vitrine local, retirada e entrega no raio) e ferramentas para polos comerciais — uma marca e vários produtos, não um marketplace que compete com o lojista.',
    subtitle:
        'Diferente de “só um site” ou de um shopping que fica com a relação com o cliente, o Echannel entrega ferramentas para você vender com sua marca.',
} as const

export const oQueEEchannelCompare = [
    {
        term: 'Hub Echannel',
        definition:
            'Portfólio + operação: escolha trilha PME, bairro ou polo; planos mensais; suporte em português.',
    },
    {
        term: 'Loja virtual (Base Commerce)',
        definition:
            'Produto concreto de e-commerce multi-tenant em /base-commerce/{slug}/ — catálogo, checkout, admin.',
    },
    {
        term: 'Marketplace',
        definition:
            'Não é o modelo: o Echannel não centraliza clientes para revender margem; cada lojista mantém sua marca.',
    },
    {
        term: 'Comércio de bairro',
        definition:
            'Módulo para loja física: vitrine local, WhatsApp, retirada no balcão e entrega delimitada por região.',
    },
] as const

export const oQueEEchannelFaqs: FaqItem[] = [
    {
        question: 'Echannel é marketplace?',
        answer:
            'Não. É hub de soluções: você usa ferramentas Echannel (e Base Commerce quando precisa de loja completa) com sua marca, preço e cliente — sem leilão de margem típico de marketplace.',
    },
    {
        question: 'Preciso usar Base Commerce para estar no Echannel?',
        answer:
            'Base Commerce é a solução de e-commerce completa do ecossistema. Comércio de bairro e polos podem combinar módulos conforme plano; o onboarding define o pacote (Starter, Bairro, Polo).',
    },
    {
        question: 'Quem opera a tecnologia?',
        answer:
            'Powertrend (tecnologia). Site institucional canônico: www.echannel.com.br. Lojas de clientes ficam em paths /base-commerce/{slug}/ separados do marketing.',
    },
    {
        question: 'Como começo?',
        answer:
            'Planos em /planos, vitrine demo em /base-commerce/demo/pt-BR ou WhatsApp +55 31 99378-5549. Assinatura passa por /assinar/{plano} ou contato comercial.',
    },
]
