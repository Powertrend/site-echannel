import { pricingFaqsPtBr } from '../../data/pricing-faq'
import { MaterialSymbol } from '../icons/material-symbol'
import { Container } from '../ui/Container'

export function PricingFaqSection() {
    return (
        <section
            className='bg-white py-12 sm:py-16'
            aria-labelledby='pricing-faq-heading'
        >
            <Container>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='text-xs font-bold tracking-[0.12em] text-primary sm:text-sm'>
                        ANTES DE ASSINAR
                    </p>
                    <h2
                        id='pricing-faq-heading'
                        className='font-heading mt-3 text-2xl font-bold text-[#0f172a] sm:text-3xl'
                    >
                        Dúvidas sobre planos e cobrança
                    </h2>
                </div>

                <dl className='mx-auto mt-10 max-w-4xl space-y-4'>
                    {pricingFaqsPtBr.map((faq) => (
                        <div
                            key={faq.question}
                            className='rounded-2xl border border-[#eef2f6] bg-[#f8fafc] p-5 sm:p-6'
                        >
                            <div className='flex gap-4'>
                                <span
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10'
                                    aria-hidden
                                >
                                    <MaterialSymbol
                                        name='help'
                                        size={22}
                                        weight={400}
                                        className='text-primary'
                                    />
                                </span>
                                <div className='min-w-0 flex-1'>
                                    <dt className='font-heading text-base font-bold text-[#0f172a] sm:text-lg'>
                                        {faq.question}
                                    </dt>
                                    <dd className='mt-2 text-sm leading-relaxed text-[#64748b] sm:text-base'>
                                        {faq.answer}
                                    </dd>
                                </div>
                            </div>
                        </div>
                    ))}
                </dl>
            </Container>
        </section>
    )
}
