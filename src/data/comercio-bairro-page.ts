import type { FaqItem } from '../../lib/seo/schemas'
import { buildWhatsAppUrl } from './landing-content'
import { pricingPlanBairroName } from './product-decisions'

export const comercioBairroHero = {
    eyebrow: 'COMÉRCIO DE BAIRRO',
    title: 'Digitalize a loja da esquina sem perder o cliente da vizinhança',
    /** Resposta direta GEO (40–80 palavras). */
    lede:
        'O Echannel ajuda mercadinhos, padarias e lojas de rua a vender pelo celular e pelo WhatsApp: vitrine local, pedidos online, retirada no balcão e entrega no raio do bairro — no mesmo hub das soluções de e-commerce para PMEs, sem montar equipe de TI.',
    subtitle:
        'Ideal para quem vive do balcão e quer repetir pedido, avisar “pronto para retirar” e organizar entregas locais em poucos cliques.',
    primaryCta: {
        label: `Conhecer plano ${pricingPlanBairroName}`,
        href: '/planos',
    },
    whatsappCta: {
        label: 'Falar com especialista',
        href: buildWhatsAppUrl(
            'Olá! Tenho comércio de bairro e quero digitalizar minha loja com o Echannel.',
        ),
    },
    demoCta: {
        label: 'Ver demonstração na home',
        href: '/#demo',
    },
} as const

export const comercioBairroBenefits = [
    {
        icon: 'storefront',
        title: 'Vitrine local no celular do morador',
        body: 'Catálogo pensado para quem compra perto de casa: produtos do dia, promoções e link fácil para compartilhar no bairro.',
    },
    {
        icon: 'two_wheeler',
        title: 'Entrega e taxa por região',
        body: 'Delimite bairros atendidos, taxa fixa ou frete grátis para vizinhos — você define a logística que a loja aguenta.',
    },
    {
        icon: 'takeout_dining',
        title: 'Retirada no balcão',
        body: 'Cliente escolhe buscar na loja; você embala e avisa pelo WhatsApp quando o pedido está pronto para retirada imediata.',
    },
    {
        icon: 'forum',
        title: 'Pedidos pelo WhatsApp integrados',
        body: 'Menos troca de print e planilha: pedidos entram no fluxo da loja com apoio de IA de atendimento no plano Bairro (conforme contrato).',
    },
] as const

export const comercioBairroSteps = {
    title: 'Como funciona na prática',
    items: [
        {
            step: '1',
            title: 'Cadastro e vitrine',
            body: 'Configure a loja, fotos e preços pelo painel — operável no caixa ou no celular do responsável.',
        },
        {
            step: '2',
            title: 'Divulgação no bairro',
            body: 'Compartilhe o link da vitrine local, QR no balcão ou grupos de moradores; clientes pedem web ou WhatsApp.',
        },
        {
            step: '3',
            title: 'Preparo, retirada ou entrega',
            body: 'Aceite pedidos, avise “pronto para retirar” ou despache no raio configurado — tudo rastreável para a equipe.',
        },
    ],
} as const

export const comercioBairroFaqHeader = {
    eyebrow: 'PERGUNTAS DO BAIRRO',
    title: 'Como digitalizar comércio de bairro com o Echannel?',
    subtitle:
        'Respostas objetivas para lojistas de rua, mercadinhos e varejo de proximidade.',
} as const

/** FAQ visível em /comercio-de-bairro + FAQPage JSON-LD. */
export const comercioBairroFaqs: FaqItem[] = [
    {
        question:
            'O Echannel serve para mercadinho, padaria ou loja de bairro?',
        answer:
            'Sim. A trilha comércio de bairro do hub Echannel é pensada para lojas físicas de proximidade: vitrine local, pedidos digitais, retirada no balcão e entrega no raio que você definir — além da opção de e-commerce completo via Base Commerce quando fizer sentido.',
    },
    {
        question: 'Como funciona a entrega para quem é comércio de bairro?',
        answer:
            'Você delimita os bairros ou o raio atendido e define taxas fixas ou entrega gratuita para moradores próximos. Também pode combinar com retirada no balcão. O Echannel não substitui o motoboy ou a frota da loja: organiza pedidos e regras; a operação física continua sob seu controle.',
    },
    {
        question: 'Preciso de programador para usar no dia a dia?',
        answer:
            'Não. O comerciante ou atendentes operam catálogo, preços e pedidos no celular ou computador do caixa, sem código. Implantação inicial pode contar com suporte humanizado via WhatsApp.',
    },
    {
        question: `Qual plano inclui vitrine de bairro e quanto custa?`,
        answer:
            `O plano ${pricingPlanBairroName} (R$ 149/mês na tabela comercial atual) inclui o módulo de vitrine de bairro, retirada no balcão, gestão de entregas locais e IA de atendimento no WhatsApp, além do pacote Starter e-commerce. Confira detalhes atualizados em /planos.`,
    },
    {
        question: 'Isso é marketplace ou minha marca?',
        answer:
            'Sua loja, sua marca e seu relacionamento com o cliente do bairro. O Echannel é hub de soluções (ferramentas + operação), não um marketplace que compete com o lojista pela margem.',
    },
]
