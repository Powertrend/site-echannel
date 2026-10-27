import Link from 'next/link'
import type { FaqItem } from '../../../lib/seo/schemas'
import { MaterialSymbol } from '../icons/material-symbol'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

type CompareRow = { term: string; definition: string }

type Highlight = { icon: string; title: string; body: string }

type GeoContentPageProps = {
    eyebrow: string
    title: string
    lede: string
    subtitle: string
    faqs: FaqItem[]
    faqTitle?: string
    compare?: readonly CompareRow[]
    highlights?: readonly Highlight[]
    ctas?: { label: string; href: string; variant?: 'primary' | 'tertiary' | 'outlined'; external?: boolean }[]
}

export function GeoContentPage({
    eyebrow,
    title,
    lede,
    subtitle,
    faqs,
    faqTitle = 'Perguntas frequentes',
    compare,
    highlights,
    ctas = [],
}: GeoContentPageProps) {
    return (
        <>
            <section className='bg-[#f4f7fa] py-12 sm:py-16 lg:py-20'>
                <Container>
                    <div className='mx-auto max-w-3xl text-center'>
                        <p className='text-xs font-bold tracking-[0.12em] text-primary sm:text-sm'>
                            {eyebrow}
                        </p>
                        <h1 className='font-heading mt-3 text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl'>
                            {title}
                        </h1>
                        <p className='mt-5 text-base leading-relaxed text-[#334155] sm:text-lg'>
                            {lede}
                        </p>
                        <p className='mt-3 text-sm text-[#64748b] sm:text-base'>
                            {subtitle}
                        </p>
                        {ctas.length > 0 ? (
                            <div className='mt-8 flex flex-wrap justify-center gap-3'>
                                {ctas.map((cta) => (
                                    <Button
                                        key={cta.label}
                                        variant={cta.variant ?? 'primary'}
                                        href={cta.href}
                                        external={cta.external}
                                    >
                                        {cta.label}
                                    </Button>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </Container>
            </section>

            {compare ? (
                <section className='bg-white py-12 sm:py-16'>
                    <Container className='max-w-3xl'>
                        <h2 className='font-heading text-2xl font-bold text-[#0f172a]'>
                            Conceitos em uma tabela
                        </h2>
                        <dl className='mt-8 divide-y divide-[#eef2f6] rounded-2xl border border-[#eef2f6]'>
                            {compare.map((row) => (
                                <div
                                    key={row.term}
                                    className='grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4'
                                >
                                    <dt className='font-heading text-sm font-bold text-[#0f172a]'>
                                        {row.term}
                                    </dt>
                                    <dd className='text-sm leading-relaxed text-[#64748b]'>
                                        {row.definition}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Container>
                </section>
            ) : null}

            {highlights ? (
                <section className='bg-white py-12 sm:py-16'>
                    <Container>
                        <h2 className='font-heading text-center text-2xl font-bold text-[#0f172a]'>
                            O que a PME leva na prática
                        </h2>
                        <ul className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                            {highlights.map((item) => (
                                <li
                                    key={item.title}
                                    className='rounded-2xl border border-[#eef2f6] bg-[#f8fafc] p-5'
                                >
                                    <MaterialSymbol
                                        name={item.icon}
                                        size={28}
                                        className='text-primary'
                                    />
                                    <h3 className='font-heading mt-3 font-bold text-[#0f172a]'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-2 text-sm text-[#64748b]'>
                                        {item.body}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </section>
            ) : null}

            <section
                className='bg-[#f4f7fa] py-12 sm:py-16'
                aria-labelledby='geo-faq-heading'
            >
                <Container>
                    <h2
                        id='geo-faq-heading'
                        className='font-heading text-center text-2xl font-bold text-[#0f172a]'
                    >
                        {faqTitle}
                    </h2>
                    <dl className='mx-auto mt-10 max-w-4xl space-y-4'>
                        {faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className='rounded-2xl border border-[#eef2f6] bg-white p-5 sm:p-6'
                            >
                                <dt className='font-heading font-bold text-[#0f172a]'>
                                    {faq.question}
                                </dt>
                                <dd className='mt-2 text-sm leading-relaxed text-[#64748b] sm:text-base'>
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <p className='mt-8 text-center text-sm text-[#64748b]'>
                        <Link
                            href='/'
                            className='font-medium text-primary underline-offset-2 hover:underline'
                        >
                            Voltar à home
                        </Link>
                    </p>
                </Container>
            </section>
        </>
    )
}
