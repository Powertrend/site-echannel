import { trialPromo } from '../../data/home-demo-section'
import { MaterialSymbol } from '../icons/material-symbol'
import { Button } from '../ui/Button'
import { TrialCountdown } from './TrialCountdown'

/** Degradê do card promo (Stitch): branco no topo, azul suave na base e cantos. */
const TRIAL_CARD_GRADIENT =
    'linear-gradient(180deg, #ffffff 0%, #ffffff 42%, #f3f8ff 72%, #e3f0ff 100%)'

export function TrialPromoCard() {
    const {
        launchBadge,
        title,
        body,
        countdownLabel,
        cta,
        ctaHref,
        footnote,
    } = trialPromo

    return (
        <div className='relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#e2e8f0] shadow-[0_4px_24px_rgba(15,23,42,0.06)]'>
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0'
                style={{ background: TRIAL_CARD_GRADIENT }}
            />
            <div
                aria-hidden
                className='pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(147,197,253,0.35)_0%,transparent_70%)]'
            />

            <div className='relative flex min-h-0 flex-1 flex-col p-5 sm:p-6 md:p-7 lg:p-8'>
                <span className='inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-white sm:px-3.5 sm:text-sm'>
                    <MaterialSymbol
                        name='local_fire_department'
                        size={18}
                        weight={400}
                        className='shrink-0 text-white'
                    />
                    <span className='leading-tight'>{launchBadge}</span>
                </span>

                <h2 className='font-heading mt-4 text-xl font-bold leading-tight text-[#0f172a] sm:mt-5 sm:text-2xl lg:text-[1.75rem] xl:text-3xl'>
                    {title}
                </h2>
                <p className='mt-3 text-sm leading-relaxed text-[#64748b] sm:mt-4 sm:text-base lg:text-lg'>
                    {body}
                </p>

                <div className='mt-6 rounded-2xl border border-[#e2e8f0] bg-white p-3.5 shadow-sm sm:mt-8 sm:p-5'>
                    <p className='text-xs font-medium text-[#64748b] sm:text-sm md:text-base'>
                        {countdownLabel}
                    </p>
                    <div className='mt-3 sm:mt-4'>
                        <TrialCountdown />
                    </div>
                </div>

                <div className='mt-auto pt-6 sm:pt-8'>
                    <Button
                        variant='primary'
                        href={ctaHref}
                        external
                        className='w-full rounded-xl py-3.5 text-sm font-semibold sm:py-4 sm:text-base lg:text-lg'
                    >
                        {cta}
                        <MaterialSymbol
                            name='verified'
                            size={22}
                            weight={400}
                            className='text-white'
                        />
                    </Button>
                    <p className='mt-3 text-center text-[11px] text-[#64748b] sm:mt-4 sm:text-xs md:text-sm'>
                        {footnote}
                    </p>
                </div>
            </div>
        </div>
    )
}
