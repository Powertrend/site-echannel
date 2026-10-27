import type { FaqItem } from '../../lib/seo/schemas'

export const faqSectionHeader = {
    eyebrow: 'TIRE SUAS DÚVIDAS',
    title: 'Perguntas Frequentes de Lojistas Reais',
    subtitle:
        'Respostas diretas e sem juridiquês sobre como o Echannel opera no seu dia a dia.',
} as const

/** FAQ visível na home (mock Stitch — cards abertos). */
export const homeMerchantFaqs: FaqItem[] = [
    {
        question:
            'Preciso de conhecimento técnico ou programador para usar o Echannel?',
        answer:
            'Não! A plataforma foi desenvolvida para ser operada pelo próprio comerciante ou pelos atendentes da loja diretamente no celular ou computador do caixa. Você adiciona fotos, altera preços e aceita pedidos em poucos cliques, sem mexer em nenhuma linha de código.',
    },
    {
        question: 'Como funciona a entrega para quem é comércio de bairro?',
        answer:
            'Você pode delimitar os bairros atendidos e definir taxas fixas ou gratuitas para moradores próximos. Os clientes também podem optar por “Retirar no Balcão”: assim que você embala o produto, envia um aviso pelo WhatsApp avisando que o pedido já está pronto para busca imediata.',
    },
    {
        question: 'O que é a solução Base Commerce inclusa no hub?',
        answer:
            'Base Commerce é a plataforma de e-commerce da Powertrend (catálogo, checkout e painel admin). No plano compartilhado, sua loja fica em www.echannel.com.br/base-commerce/{slug}/{idioma}/ — é a solução do hub para PMEs que precisam de loja virtual completa, integrada ao restante do ecossistema Echannel.',
    },
]
