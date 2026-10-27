import {
    homePricingPlans,
    pricingSectionHeader,
    type PricingPlan,
} from '../../data/home-pricing'
import { MaterialSymbol } from '../icons/material-symbol'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

function PricingFeature({
    item,
}: {
    item: PricingPlan['features'][number]
}) {
    const normalized =
        typeof item === 'string'
            ? { text: item, highlight: false as const, icon: undefined }
            : item

    return (
        <li className='flex items-start gap-2.5'>
            <MaterialSymbol
                name='check_circle'
                size={20}
                weight={400}
                className='mt-0.5 shrink-0 text-tertiary'
            />
            <span
                className={`inline-flex items-center gap-1.5 text-sm leading-snug sm:text-base ${
                    normalized.highlight
                        ? 'font-medium text-tertiary'
                        : 'text-[#475569]'
                }`}
            >
                {normalized.icon ? (
                    <MaterialSymbol
                        name={normalized.icon}
                        size={18}
                        weight={400}
                        className='text-tertiary'
                    />
                ) : null}
                {normalized.text}
            </span>
        </li>
    )
}

function PricingCard({ plan }: { plan: PricingPlan }) {
    const featured = plan.featured === true

    return (
        <article
            className={`relative flex h-full flex-col rounded-2xl border bg-white p-5 shadow-[0_2px_16px_rgba(15,23,42,0.06)] sm:p-6 lg:p-7 ${
                featured
                    ? 'z-10 border-primary shadow-[0_8px_32px_rgba(220,38,38,0.12)] lg:scale-[1.03]'
                    : 'border-[#e8ecf0]'
            }`}
        >
            {plan.featuredBadge ? (
                <span className='absolute -top-3.5 left-1/2 w-[max(92%,16rem)] -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-center text-[10px] font-semibold text-white sm:text-xs'>
                    {plan.featuredBadge}
                </span>
            ) : null}

            <p
                className={`text-[10px] font-bold tracking-[0.14em] sm:text-xs ${
                    plan.eyebrowAccent ? 'text-primary' : 'text-[#94a3b8]'
                }`}
            >
                {plan.eyebrow}
            </p>
            <h3 className='font-heading mt-2 text-xl font-bold text-[#0f172a] sm:text-2xl'>
                {plan.name}
            </h3>
            <p className='mt-2 text-sm leading-relaxed text-[#64748b] sm:text-base'>
                {plan.description}
            </p>

            <p className='mt-5 flex flex-wrap items-baseline gap-1'>
                <span
                    className={`font-heading text-3xl font-bold sm:text-4xl ${
                        plan.priceAccent ? 'text-primary' : 'text-[#0f172a]'
                    }`}
                >
                    {plan.priceMain}
                </span>
                <span className='text-sm text-[#64748b] sm:text-base'>
                    {plan.priceSuffix}
                </span>
            </p>

            <ul className='mt-6 flex flex-1 flex-col gap-3 border-t border-[#f1f5f9] pt-6'>
                {plan.features.map((item) => (
                    <PricingFeature
                        key={
                            typeof item === 'string'
                                ? item
                                : item.text
                        }
                        item={item}
                    />
                ))}
            </ul>

            <Button
                variant={plan.ctaVariant}
                href={plan.ctaHref}
                external={/^https?:\/\//.test(plan.ctaHref)}
                className='mt-8 w-full rounded-xl py-3.5 text-sm font-semibold sm:text-base'
            >
                {plan.cta}
            </Button>
        </article>
    )
}

type PricingSectionProps = {
    /** Home usa h2 + id planos; página dedicada usa h1 sem id duplicado. */
    headingLevel?: 'h1' | 'h2'
    sectionId?: string | null
}

export function PricingSection({
    headingLevel = 'h2',
    sectionId = 'planos',
}: PricingSectionProps = {}) {
    const { eyebrow, title, subtitle } = pricingSectionHeader
    const Heading = headingLevel

    return (
        <section
            id={sectionId ?? undefined}
            className='scroll-mt-20 bg-[#f4f7fa] py-12 sm:py-16 lg:py-20'
        >
            <Container>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='text-xs font-bold tracking-[0.12em] text-primary sm:text-sm'>
                        {eyebrow}
                    </p>
                    <Heading className='font-heading mt-3 text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl lg:text-[2.5rem]'>
                        {title}
                    </Heading>
                    <p className='mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg'>
                        {subtitle}
                    </p>
                </div>

                <div className='mt-10 grid grid-cols-1 items-stretch gap-6 min-[900px]:grid-cols-3 min-[900px]:gap-4 lg:mt-12 lg:gap-6'>
                    {homePricingPlans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
