import {
    homePillars,
    pillarsSectionHeader,
    type HomePillar,
    type PillarAccent,
} from '../../data/home-pillars'
import { MaterialSymbol } from '../icons/material-symbol'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const accentStyles: Record<
    PillarAccent,
    {
        iconWrap: string
        iconColor: string
        category: string
    }
> = {
    primary: {
        iconWrap: 'bg-[#fee2e2]',
        iconColor: 'text-primary',
        category: 'bg-[#fee2e2] text-[#991b1b]',
    },
    tertiary: {
        iconWrap: 'bg-[#dcfce7]',
        iconColor: 'text-tertiary',
        category: 'bg-[#dcfce7] text-[#15803d]',
    },
    polo: {
        iconWrap: 'bg-[#eff6ff]',
        iconColor: 'text-polo',
        category: 'bg-[#eff6ff] text-polo',
    },
}

const ctaVariantMap = {
    primary: 'primary',
    tertiary: 'tertiary',
    poloSoft: 'poloSoft',
} as const

function PillarFeatureList({ items }: { items: readonly string[] }) {
    return (
        <ul className='mt-6 space-y-3'>
            {items.map((item) => (
                <li
                    key={item}
                    className='flex items-start gap-2.5 text-base leading-snug text-[#64748b] sm:text-lg'
                >
                    <MaterialSymbol
                        name='check_circle'
                        size={22}
                        weight={400}
                        className='mt-0.5 shrink-0 text-tertiary'
                    />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

function PillarCard({ pillar }: { pillar: HomePillar }) {
    const styles = accentStyles[pillar.accent]

    return (
        <article className='relative flex flex-col rounded-2xl border border-[#e8ecf0] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:p-8'>
            {pillar.cornerBadge ? (
                <span className='absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-tertiary px-2.5 py-1 text-xs font-semibold text-white sm:text-sm'>
                    <span
                        className='h-1.5 w-1.5 rounded-full bg-white'
                        aria-hidden
                    />
                    {pillar.cornerBadge}
                </span>
            ) : null}

            <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${styles.iconWrap}`}
            >
                <MaterialSymbol
                    name={pillar.iconSymbol}
                    size={32}
                    weight={400}
                    className={styles.iconColor}
                />
            </span>

            <span
                className={`mt-5 inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-semibold sm:text-sm ${styles.category}`}
            >
                {pillar.categoryLabel}
            </span>

            <h3 className='font-heading mt-4 text-xl font-bold text-[#0f172a] sm:text-2xl'>
                {pillar.title}
            </h3>
            <p className='mt-3 text-base leading-relaxed text-[#64748b] sm:text-lg'>
                {pillar.body}
            </p>

            <PillarFeatureList items={pillar.features} />

            <Button
                variant={ctaVariantMap[pillar.ctaVariant]}
                href={pillar.href}
                external={pillar.external}
                className='mt-8 w-full py-3.5 text-base sm:text-lg'
            >
                {pillar.cta}
                <MaterialSymbol
                    name={pillar.ctaTrailingSymbol}
                    size={20}
                    weight={400}
                    className={
                        pillar.ctaVariant === 'poloSoft'
                            ? 'text-polo'
                            : 'text-white'
                    }
                />
            </Button>
        </article>
    )
}

export function SolutionPillarGrid() {
    const { eyebrow, title, subtitle, trustBadge } = pillarsSectionHeader

    return (
        <section
            id='solucoes'
            className='scroll-mt-20 bg-[#f4f7fa] py-14 sm:py-20'
        >
            <Container>
                <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12'>
                    <div className='max-w-3xl'>
                        <p className='text-xs font-bold tracking-[0.12em] text-primary sm:text-sm'>
                            {eyebrow}
                        </p>
                        <h2 className='font-heading mt-3 text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl lg:text-[2.5rem]'>
                            {title}
                        </h2>
                        <p className='mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg'>
                            {subtitle}
                        </p>
                    </div>
                    <div className='shrink-0 lg:pt-2'>
                        <span className='inline-flex items-center gap-2 rounded-full border border-[#e9d5ff] bg-[#faf5ff] px-4 py-2.5 text-sm font-medium text-[#6b21a8] sm:text-base'>
                            <MaterialSymbol
                                name={trustBadge.symbol}
                                size={22}
                                weight={400}
                                className='text-primary'
                            />
                            {trustBadge.text}
                        </span>
                    </div>
                </div>

                <div className='mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8'>
                    {homePillars.map((pillar) => (
                        <PillarCard key={pillar.id} pillar={pillar} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
