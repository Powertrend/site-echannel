import {
    homeAiFeatures,
    homeAiSectionHeader,
    type HomeAiFeature,
} from '../../data/home-ai-section'
import { MaterialSymbol } from '../icons/material-symbol'
import { Container } from '../ui/Container'

function AiFeatureCard({ feature }: { feature: HomeAiFeature }) {
    return (
        <article className='flex h-full flex-col rounded-2xl border border-[#e8ecf0] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:p-8'>
            <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconWrap}`}
            >
                <MaterialSymbol
                    name={feature.iconSymbol}
                    size={32}
                    weight={400}
                    className={feature.iconColor}
                />
            </span>

            <h3 className='font-heading mt-5 text-xl font-bold leading-snug text-[#0f172a] sm:text-2xl'>
                {feature.title}
            </h3>
            <p className='mt-3 flex-1 text-base leading-relaxed text-[#64748b] sm:text-lg'>
                {feature.body}
            </p>

            <div className='mt-8 flex items-start gap-2.5 rounded-xl bg-[#eff6ff] px-4 py-3.5 sm:px-5 sm:py-4'>
                <MaterialSymbol
                    name={feature.highlightSymbol}
                    size={22}
                    weight={400}
                    className='mt-0.5 shrink-0 text-tertiary'
                />
                <p className='text-sm font-medium leading-snug text-[#334155] sm:text-base'>
                    {feature.highlight}
                </p>
            </div>
        </article>
    )
}

export function HomeAiSection() {
    const { eyebrow, title, subtitle } = homeAiSectionHeader

    return (
        <section className='bg-white py-14 sm:py-20' aria-labelledby='home-ai-heading'>
            <Container>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='text-xs font-bold tracking-[0.12em] text-tertiary sm:text-sm'>
                        {eyebrow}
                    </p>
                    <h2
                        id='home-ai-heading'
                        className='font-heading mt-3 text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl lg:text-[2.5rem]'
                    >
                        {title}
                    </h2>
                    <p className='mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg'>
                        {subtitle}
                    </p>
                </div>

                <div className='mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8'>
                    {homeAiFeatures.map((feature) => (
                        <AiFeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
