/** Número informado: 31993785549 → E.164 BR */
export const whatsappPhoneE164 = '5531993785549'

export function buildWhatsAppUrl(message: string): string {
    return `https://wa.me/${whatsappPhoneE164}?text=${encodeURIComponent(message)}`
}

export const landingHero = {
    title: 'Hub de soluções para o comércio da sua PME.',
    subtitle:
        'Echannel reúne e-commerce, comércio de bairro e ferramentas digitais pensadas para pequenas e médias empresas venderem online e na vizinhança — com IA onde faz diferença.',
} as const

export const landingTracks = [
    {
        id: 'pme-ecommerce',
        title: 'PME — e-commerce',
        body: 'Loja virtual, catálogo, checkout e operação enxuta: soluções para quem quer vender na internet sem montar um departamento de TI.',
        cta: 'Quero vender online',
        whatsappMessage:
            'Olá! Tenho uma PME e quero soluções de e-commerce no Echannel.',
    },
    {
        id: 'comercio-bairro',
        title: 'Comércio de bairro',
        body: 'Digitalize a loja da esquina: vitrine local, retirada no balcão, divulgação no bairro e presença no hub — físico e digital juntos.',
        cta: 'Fortalecer meu bairro',
        whatsappMessage:
            'Olá! Tenho comércio de bairro e quero entrar no hub Echannel.',
    },
    {
        id: 'polo-bairro',
        title: 'Polo ou associação',
        body: 'Para quem articula um eixo comercial: várias PMEs, praça de alimentação ou associação de lojistas — visão de hub e ferramentas compartilhadas.',
        cta: 'Falar com o time Echannel',
        whatsappMessage:
            'Olá! Represento um polo ou associação de comércio de bairro e quero falar com o Echannel.',
    },
] as const

export const landingCountdown = {
    headline: 'Novidades do hub Echannel (preview)',
    note: 'PMEs e comércios de bairro: vagas limitadas na fase de abertura. Cadastre interesse antes do lançamento completo.',
    launchLabel: 'Prepare-se para o lançamento!',
} as const
