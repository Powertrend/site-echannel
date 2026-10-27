import type { StatCardConfig } from '../../data/home-hero'
import { homeStats } from '../../data/home-hero'
import { HomeStatIcon } from '../icons/home-stat-icons'

function StatBadge({ badge }: { badge: NonNullable<StatCardConfig['badge']> }) {
    if (badge.kind === 'dot') {
        return (
            <span
                className='mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#15803d]'
                title='Online'
                aria-hidden
            />
        )
    }

    if (badge.kind === 'label') {
        return (
            <span className='text-base font-medium leading-none text-[#78716c] sm:text-lg'>
                {badge.text}
            </span>
        )
    }

    const toneClass =
        badge.tone === 'green'
            ? 'bg-[#dcfce7] text-[#15803d]'
            : 'bg-[#fee2e2] text-[#991b1b]'

    return (
        <span
            className={`rounded-full px-3 py-1 text-sm font-semibold leading-none sm:text-base ${toneClass}`}
        >
            {badge.text}
        </span>
    )
}

function StatCard({ stat }: { stat: StatCardConfig }) {
    return (
        <div className='rounded-2xl border border-[#e8ecf0] bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:p-6'>
            <div className='flex items-start justify-between gap-2'>
                <HomeStatIcon icon={stat.icon} />
                {stat.badge ? <StatBadge badge={stat.badge} /> : null}
            </div>
            <p className='font-heading mt-4 text-[2rem] font-bold leading-none tracking-tight text-[#0f172a] sm:mt-5 sm:text-[2.375rem] lg:text-[2.75rem]'>
                {stat.value}
            </p>
            <p className='mt-2.5 text-lg font-medium text-[#78716c] sm:mt-3 sm:text-xl'>
                {stat.label}
            </p>
        </div>
    )
}

export function StatsBar() {
    return (
        <div className='mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4'>
            {homeStats.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
            ))}
        </div>
    )
}
