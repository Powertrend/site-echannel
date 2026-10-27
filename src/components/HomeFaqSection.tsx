import {
    faqSectionHeader,
    homeMerchantFaqs,
} from '../data/merchant-faq'
import { MaterialSymbol } from './icons/material-symbol'
import { Container } from './ui/Container'

export default function HomeFaqSection() {
    const { eyebrow, title, subtitle } = faqSectionHeader

    return (
        <section
            id='faq'
            className='scroll-mt-20 bg-[#f4f7fa] py-12 sm:py-16 lg:py-20'
            aria-labelledby='faq-heading'
        >
            <Container>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='text-xs font-bold tracking-[0.12em] text-primary sm:text-sm'>
                        {eyebrow}
                    </p>
                    <h2
                        id='faq-heading'
                        className='font-heading mt-3 text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl lg:text-[2.5rem]'
                    >
                        {title}
                    </h2>
                    <p className='mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg'>
                        {subtitle}
                    </p>
                </div>

                <dl className='mx-auto mt-10 max-w-4xl space-y-4 sm:mt-12 sm:space-y-5'>
                    {homeMerchantFaqs.map((faq) => (
                        <div
                            key={faq.question}
                            className='rounded-2xl border border-[#eef2f6] bg-white p-5 shadow-[0_2px_16px_rgba(15,23,42,0.06)] sm:p-6'
                        >
                            <div className='flex gap-4'>
                                <span
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary sm:h-10 sm:w-10'
                                    aria-hidden
                                >
                                    <MaterialSymbol
                                        name='question_mark'
                                        size={22}
                                        weight={400}
                                        className='text-white'
                                    />
                                </span>
                                <div className='min-w-0 flex-1'>
                                    <dt className='font-heading text-base font-bold leading-snug text-[#0f172a] sm:text-lg'>
                                        {faq.question}
                                    </dt>
                                    <dd className='mt-3 text-sm leading-relaxed text-[#64748b] sm:text-base'>
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
