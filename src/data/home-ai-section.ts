import { homeAiSectionMode } from './product-decisions'

export type HomeAiFeature = {
    id: string
    iconSymbol: string
    iconWrap: string
    iconColor: string
    title: string
    body: string
    highlightSymbol: string
    highlight: string
}

export const homeAiSectionHeader = {
    eyebrow: 'SEM FUMAÇA TECH',
    title: 'Inteligência Artificial onde realmente faz diferença no caixa',
    subtitle:
        homeAiSectionMode === 'reference-only'
            ? 'Referência do que a IA faz no ecossistema Echannel — cadastro, atendimento e estoque — sem prometer feature isolada nesta página. Disponibilidade conforme produto e plano.'
            : 'Sem prometer fumaça: IA aplicada ao dia a dia do varejo para acelerar cadastro, atendimento e reposição.',
} as const

export const homeAiFeatures: readonly HomeAiFeature[] = [
    {
        id: 'foto-produto',
        iconSymbol: 'photo_camera',
        iconWrap: 'bg-[#fce7f3]',
        iconColor: 'text-[#db2777]',
        title: 'Foto do Celular → Produto Pronto',
        body: 'Tire a foto do produto no balcão: a IA remove o fundo, sugere título, categoria e tags de busca — item pronto para publicar sem planilha ou equipe de TI.',
        highlightSymbol: 'bolt',
        highlight: 'Economiza até 8 horas por semana em cadastros',
    },
    {
        id: 'whatsapp',
        iconSymbol: 'smart_toy',
        iconWrap: 'bg-[#dcfce7]',
        iconColor: 'text-tertiary',
        title: 'Atendente WhatsApp Inteligente',
        body: 'Respostas rápidas sobre tamanho, horário de funcionamento e taxa de entrega — enquanto você atende o balcão e o cliente não fica no vácuo.',
        highlightSymbol: 'schedule',
        highlight: 'Zero clientes sem resposta no horário de almoço',
    },
    {
        id: 'reposicao',
        iconSymbol: 'inventory_2',
        iconWrap: 'bg-[#eff6ff]',
        iconColor: 'text-polo',
        title: 'Alerta Esperto de Reposição',
        body: 'A IA analisa giro de vendas e avisa o que repor antes do fim de semana ou feriado — menos ruptura na prateleira e menos dinheiro parado em estoque.',
        highlightSymbol: 'trending_up',
        highlight: 'Evita dinheiro parado em mercadoria sem giro',
    },
]
