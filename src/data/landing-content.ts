/** Número informado: 31993785549 → E.164 BR */
export const whatsappPhoneE164 = '5531993785549'

export function buildWhatsAppUrl(message: string): string {
    return `https://wa.me/${whatsappPhoneE164}?text=${encodeURIComponent(message)}`
}

export const landingHero = {
    title: 'O shopping digital inteligente está chegando.',
    subtitle:
        'Descoberta por intenção, compra fluida e operação de mall — lojas, consumidores e shoppings no mesmo ecossistema Echannel.',
} as const

export const landingTracks = [
    {
        id: 'lojista',
        title: 'Sou lojista',
        body: 'Operação e vendas dentro do mall digital: catálogo, fila, split financeiro e expedição integrada à doca.',
        cta: 'Quero ser loja fundadora',
        whatsappMessage:
            'Olá! Sou lojista e quero ser loja fundadora no Echannel.',
    },
    {
        id: 'consumidor',
        title: 'Quero comprar',
        body: 'Experiência de shopping, não lista infinita: concierge, comparar, club VIP e retirada na baia.',
        cta: 'Entrar na lista VIP',
        whatsappMessage:
            'Olá! Quero entrar na lista VIP de abertura do Echannel.',
    },
    {
        id: 'shopping',
        title: 'Represento um shopping',
        body: 'Digitalize a operação do empreendimento: torre de controle, tenants, doca e dados do ecossistema.',
        cta: 'Falar com o time Echannel',
        whatsappMessage:
            'Olá! Represento um shopping e quero falar sobre o Echannel.',
    },
] as const

export const landingCountdown = {
    headline: 'Abertura do Echannel Jardins (preview)',
    note: 'Consumidores: acesso antecipado. Lojistas e shoppings: vagas limitadas antes da abertura.',
    launchLabel: 'Prepare-se para o lançamento!',
} as const
