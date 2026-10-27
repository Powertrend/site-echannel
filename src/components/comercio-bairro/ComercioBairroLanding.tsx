import Link from 'next/link'
import {
    comercioBairroBenefits,
    comercioBairroFaqHeader,
    comercioBairroFaqs,
    comercioBairroHero,
    comercioBairroSteps,
} from '../../data/comercio-bairro-page'
import { MaterialSymbol } from '../icons/material-symbol'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function ComercioBairroLanding() {
    const hero = comercioBairroHero
    const faqHeader = comercioBairroFaqHeader

    return (
        <>
            <section className='bg-[#f4f7fa] py-12 sm:py-16 lg:py-20'>
                <Container>
                    <div className='mx-auto max-w-3xl text-center'>
                        <p className='text-xs font-bold tracking-[0.12em] text-tertiary sm:text-sm'>
                            {hero.eyebrow}
                        </p>
                        <h1 className='font-heading mt-3 text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl lg:text-[2.5rem]'>
                            {hero.title}
                        </h1>
                        <p className='mt-5 text-base leading-relaxed text-[#334155] sm:text-lg'>
                            {hero.lede}
                        </p>
                        <p className='mt-3 text-sm text-[#64748b] sm:text-base'>
                            {hero.subtitle}
                        </p>
                        <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
                            <Button variant='tertiary' href={hero.primaryCta.href}>
                                {hero.primaryCta.label}
                            </Button>
                            <Button
                                variant='primary'
                                href={hero.whatsappCta.href}
                                external
                            >
                                {hero.whatsappCta.label}
                            </Button>
                            <Button variant='outlined' href={hero.demoCta.href}>
                                {hero.demoCta.label}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='bg-white py-12 sm:py-16'>
                <Container>
                    <h2 className='font-heading text-center text-2xl font-bold text-[#0f172a] sm:text-3xl'>
                        O que a loja de bairro ganha no hub
                    </h2>
                    <ul className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        {comercioBairroBenefits.map((item) => (
                            <li
                                key={item.title}
                                className='rounded-2xl border border-[#eef2f6] bg-[#f8fafc] p-5'
                            >
                                <MaterialSymbol
                                    name={item.icon}
                                    size={28}
                                    weight={400}
                                    className='text-tertiary'
                                />
                                <h3 className='font-heading mt-3 text-lg font-bold text-[#0f172a]'>
                                    {item.title}
                                </h3>
                                <p className='mt-2 text-sm leading-relaxed text-[#64748b]'>
                                    {item.body}
                                </p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            <section className='bg-[#f4f7fa] py-12 sm:py-16'>
                <Container className='max-w-3xl'>
                    <h2 className='font-heading text-center text-2xl font-bold text-[#0f172a] sm:text-3xl'>
                        {comercioBairroSteps.title}
                    </h2>
                    <ol className='mt-10 space-y-6'>
                        {comercioBairroSteps.items.map((item) => (
                            <li
                                key={item.step}
                                className='flex gap-4 rounded-2xl border border-[#e8ecf0] bg-white p-5 sm:p-6'
                            >
                                <span
                                    className='font-heading flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tertiary text-lg font-bold text-white'
                                    aria-hidden
                                >
                                    {item.step}
                                </span>
                                <div>
                                    <h3 className='font-heading text-lg font-bold text-[#0f172a]'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-2 text-sm leading-relaxed text-[#64748b] sm:text-base'>
                                        {item.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <p className='mt-8 text-center text-sm text-[#64748b]'>
                        Veja também{' '}
                        <Link
                            href='/solucoes#bairro'
                            className='font-medium text-primary underline-offset-2 hover:underline'
                        >
                            soluções para comércio de bairro
                        </Link>{' '}
                        no hub e o mock{' '}
                        <Link
                            href='/#demo'
                            className='font-medium text-primary underline-offset-2 hover:underline'
                        >
                            Mercadinho & Casa Central
                        </Link>
                        .
                    </p>
                </Container>
            </section>

            <section
                className='bg-white py-12 sm:py-16 lg:py-20'
                aria-labelledby='bairro-faq-heading'
            >
                <Container>
                    <div className='mx-auto max-w-3xl text-center'>
                        <p className='text-xs font-bold tracking-[0.12em] text-primary sm:text-sm'>
                            {faqHeader.eyebrow}
                        </p>
                        <h2
                            id='bairro-faq-heading'
                            className='font-heading mt-3 text-2xl font-bold text-[#0f172a] sm:text-3xl'
                        >
                            {faqHeader.title}
                        </h2>
                        <p className='mt-4 text-base text-[#64748b]'>
                            {faqHeader.subtitle}
                        </p>
                    </div>

                    <dl className='mx-auto mt-10 max-w-4xl space-y-4 sm:space-y-5'>
                        {comercioBairroFaqs.map((faq) => (
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
        </>
    )
}
