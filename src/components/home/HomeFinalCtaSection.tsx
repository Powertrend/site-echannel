import { finalCtaSection } from '../../data/site-footer'
import { MaterialSymbol } from '../icons/material-symbol'
import { Container } from '../ui/Container'

export function HomeFinalCtaSection() {
    const { badge, title, subtitle, specialistCta, specialistHref, signupCta, signupHref } =
        finalCtaSection

    return (
        <section
            className='bg-[#c4121e] text-white'
            aria-labelledby='final-cta-heading'
        >
            <Container className='py-12 sm:py-14 lg:py-16'>
                <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12'>
                    <div className='max-w-2xl'>
                        <p className='inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold sm:text-sm'>
                            <span
                                className='h-2 w-2 shrink-0 rounded-full bg-tertiary'
                                aria-hidden
                            />
                            {badge}
                        </p>
                        <h2
                            id='final-cta-heading'
                            className='font-heading mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.35rem]'
                        >
                            {title}
                        </h2>
                        <p className='mt-4 text-base leading-relaxed text-white/90 sm:text-lg'>
                            {subtitle}
                        </p>
                    </div>

                    <div className='flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row'>
                        <a
                            href={specialistHref}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center justify-center gap-2 rounded-xl bg-tertiary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-tertiary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c4121e] sm:text-base'
                        >
                            <MaterialSymbol
                                name='chat'
                                size={22}
                                weight={400}
                                className='text-white'
                            />
                            {specialistCta}
                        </a>
                        <a
                            href={signupHref}
                            className='inline-flex items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#0f172a] transition hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c4121e] sm:text-base'
                        >
                            {signupCta}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}
