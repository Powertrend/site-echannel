import { buildWhatsAppUrl } from './landing-content'
import { adminPanelHref } from './site-nav'

export const finalCtaSection = {
    badge: 'Comece hoje em menos de 10 minutos',
    title: 'Pronto para profissionalizar o comércio da sua PME?',
    subtitle:
        'Venda na internet, conquiste clientes do seu bairro e use ferramentas com IA para poupar tempo da sua equipe. Teste por 30 dias sem compromisso.',
    specialistCta: 'Falar com Especialista Agora',
    specialistHref: buildWhatsAppUrl(
        'Olá! Quero falar com um especialista Echannel agora.',
    ),
    signupCta: 'Cadastrar sem Cartão',
    signupHref: '/assinar/starter',
} as const

export const footerBrand = {
    name: 'echannel',
    pill: 'PMEs Brasil',
    description:
        'Plataforma completa de soluções digitais para comércio de bairro, mercadinhos e negócios locais em todo o Brasil.',
    trustBadge:
        'Tecnologia Segura 100% Brasileira • Suporte Local',
} as const

export type FooterLink = { label: string; href: string; external?: boolean }

export const footerColumns: {
    title: string
    links: FooterLink[]
}[] = [
    {
        title: 'Soluções & Varejo',
        links: [
            {
                label: 'Solução Base Commerce',
                href: '/e-commerce-pme',
            },
            {
                label: 'Vitrine Local de Bairro',
                href: '/comercio-de-bairro',
            },
            {
                label: 'Hub para Polos Comerciais',
                href: '/solucoes#polos',
            },
            {
                label: 'Gestão de Pedidos WhatsApp',
                href: '/#demo',
            },
            {
                label: 'Catálogo Digital Rápido',
                href: '/planos',
            },
        ],
    },
    {
        title: 'Atendimento & Apoio',
        links: [
            {
                label: 'Suporte em Português',
                href: buildWhatsAppUrl(
                    'Olá! Preciso de suporte em português no Echannel.',
                ),
                external: true,
            },
            { label: 'Central de Ajuda ao Lojista', href: '/#faq' },
            {
                label: 'Atendimento via WhatsApp',
                href: buildWhatsAppUrl('Olá! Vim pelo site Echannel.'),
                external: true,
            },
            {
                label: 'Integração Pix & Balcão',
                href: '/comercio-de-bairro',
            },
            {
                label: 'Treinamento de Equipe',
                href: buildWhatsAppUrl(
                    'Olá! Quero saber sobre treinamento de equipe Echannel.',
                ),
                external: true,
            },
        ],
    },
    {
        title: 'Institucional',
        links: [
            { label: 'Sobre o Echannel', href: '/o-que-e-echannel' },
            { label: 'Termos de Uso', href: '/termos' },
            { label: 'Política de Privacidade', href: '/privacidade' },
            {
                label: 'Segurança de Dados (LGPD)',
                href: '/privacidade',
            },
            {
                label: 'Painel do Lojista',
                href: adminPanelHref,
            },
        ],
    },
]

export const footerLegal = {
    companyLine:
        'Echannel Soluções Digitais Ltda. Feito para o comércio de bairro e PMEs brasileiras.',
    statusItems: ['Operação 100% Nacional', 'Servidores e Dados no Brasil'],
} as const
