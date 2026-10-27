import type { FaqItem } from '../../lib/seo/schemas'
import { homeMerchantFaqs } from './merchant-faq'

/** FAQ extra para GEO / IA Search (não duplica perguntas da seção lojista). */
const geoExtendedFaqs: FaqItem[] = [
    {
        question: 'O que é o Echannel?',
        answer:
            'Echannel é um hub de soluções para comércio eletrônico e comércio de bairro no Brasil, focado em PMEs: ferramentas para vender online, fortalecer a loja local e participar de polos comerciais digitais, com inteligência artificial aplicada onde gera resultado prático.',
    },
    {
        question: 'Para quem o Echannel foi pensado?',
        answer:
            'Pequenas e médias empresas: lojistas que querem e-commerce, comerciantes de bairro que querem digitalizar sem perder o cliente da região, e líderes de polos comerciais ou associações que querem articular várias PMEs em um hub.',
    },
    {
        question: 'O Echannel usa inteligência artificial?',
        answer:
            'Sim, de forma aplicada: apoio à descoberta de produtos, atendimento e automações úteis para PMEs, além de conteúdo estruturado para busca tradicional e assistentes de IA (FAQ, llms.txt, dados schema.org).',
    },
    {
        question: 'Como começo ou qual é o site oficial?',
        answer:
            'Site canônico: https://www.echannel.com.br. A abertura é gradual; fale pelo WhatsApp +55 31 99378-5549 ou use os CTAs da home. Demo técnica de loja: /base-commerce/demo/pt-BR quando a infra estiver ativa.',
    },
]

/** FAQPage JSON-LD: lojista (home) + extensão GEO. */
export const homeFaqsPtBr: FaqItem[] = [
    ...homeMerchantFaqs,
    ...geoExtendedFaqs,
]
