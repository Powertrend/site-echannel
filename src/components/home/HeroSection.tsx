import { homeHeroContent } from '../../data/home-hero'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { StatsBar } from './StatsBar'

function EyeIcon() {
    return (
        <svg
            className='h-4 w-4'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            aria-hidden
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z'
            />
            <circle cx='12' cy='12' r='3' />
        </svg>
    )
}

export function HeroSection() {
    const { badge, title, subtitle, primaryCta, demoLiveCta, whatsappCta } =
        homeHeroContent

    return (
        <section className='bg-[#f4f8fb] pt-10 pb-12 sm:pt-14 sm:pb-16'>
            <Container className='text-center'>
                <p className='inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-900 sm:text-sm'>
                    <span aria-hidden>🇧🇷</span>
                    {badge}
                </p>
                <h1 className='font-heading mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]'>
                    {title}
                </h1>
                <p className='mx-auto mt-4 max-w-2xl text-base text-neutral sm:text-lg'>
                    {subtitle}
                </p>
                <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
                    <Button
                        variant='primary'
                        href={primaryCta.href}
                        className='shadow-sm'
                    >
                        {primaryCta.label}
                    </Button>
                    <Button
                        variant='outlined'
                        href={
                            demoLiveCta.disabled
                                ? undefined
                                : demoLiveCta.href ?? undefined
                        }
                        disabled={demoLiveCta.disabled}
                        title={
                            demoLiveCta.disabled
                                ? demoLiveCta.disabledHint
                                : undefined
                        }
                        className='border-primary bg-white text-primary hover:bg-white disabled:cursor-not-allowed disabled:opacity-55'
                    >
                        <EyeIcon />
                        {demoLiveCta.label}
                    </Button>
                    <Button
                        variant='tertiary'
                        href={whatsappCta.href}
                        external
                        className='flex-wrap gap-1.5 sm:flex-nowrap'
                    >
                        <i className='fab fa-whatsapp text-lg' aria-hidden />
                        <span>{whatsappCta.label}</span>
                        <span className='rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold sm:text-xs'>
                            {whatsappCta.pill}
                        </span>
                    </Button>
                </div>
                <StatsBar />
            </Container>
        </section>
    )
}
