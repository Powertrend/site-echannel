import { buildWhatsAppUrl } from './landing-content'
import {
    echannelBairroLiveHref,
    statsZeroFeeClaimEnabled,
} from './product-decisions'

export const homeHeroContent = {
    badge: 'Tecnologia para o Varejo Real Brasileiro',
    title: 'Hub de soluções para o comércio da sua PME.',
    subtitle:
        'e-commerce + comércio de bairro + ferramentas digitais com IA onde faz diferença.',
    primaryCta: {
        label: 'Conhecer Soluções para PMEs',
        href: '/#solucoes',
    },
    demoLiveCta: {
        label: 'Ver Lojas Bairro ao Vivo',
        href: echannelBairroLiveHref,
        disabled: echannelBairroLiveHref === null,
        disabledHint:
            'Em breve — URL Echannel Bairro será liberada após revisão do projeto.',
    },
    whatsappCta: {
        label: 'Suporte WhatsApp',
        pill: 'Atendimento em 5 min',
        href: buildWhatsAppUrl(
            'Olá! Quero suporte Echannel para minha PME.',
        ),
        external: true,
    },
} as const

export type StatCardConfig = {
    id: string
    value: string
    label: string
    icon: 'store' | 'money' | 'bolt' | 'fee'
    badge?:
        | { kind: 'pill'; text: string; tone: 'green' | 'red' }
        | { kind: 'label'; text: string }
        | { kind: 'dot' }
}

export const homeStats: StatCardConfig[] = [
    {
        id: 'lojistas',
        value: '+2.400',
        label: 'Lojistas ativos',
        icon: 'store',
        badge: { kind: 'pill', text: 'Ativo', tone: 'green' },
    },
    {
        id: 'volume',
        value: 'R$ 48M',
        label: 'Transacionados',
        icon: 'money',
        badge: { kind: 'label', text: 'Volume 2024' },
    },
    {
        id: 'uptime',
        value: '99.9%',
        label: 'De disponibilidade',
        icon: 'bolt',
        badge: { kind: 'dot' },
    },
    ...(statsZeroFeeClaimEnabled
        ? [
              {
                  id: 'fee',
                  value: '0%',
                  label: 'Sem comissões abusivas',
                  icon: 'fee' as const,
                  badge: {
                      kind: 'pill' as const,
                      text: 'Transparência',
                      tone: 'red' as const,
                  },
              },
          ]
        : []),
]

