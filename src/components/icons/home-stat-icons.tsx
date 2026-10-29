import type { StatCardConfig } from '../../data/home-hero'
import { MaterialSymbol } from './material-symbol'

/**
 * Stats bar — mesmos glifos do protótipo Stitch (Material Symbols Outlined).
 * @see docs/HOME-MOCKUP-SPEC.md §2.1
 */
export const homeStatMaterialIcons: Record<
    StatCardConfig['icon'],
    { symbol: string; className: string }
> = {
    store: {
        symbol: 'storefront',
        className: 'text-[#991b1b]',
    },
    money: {
        symbol: 'payments',
        className: 'text-[#15803d]',
    },
    bolt: {
        symbol: 'bolt',
        className: 'text-[#64748b]',
    },
    fee: {
        symbol: 'paid',
        className: 'text-[#991b1b]',
    },
}

export function HomeStatIcon({ icon }: { icon: StatCardConfig['icon'] }) {
    const { symbol, className } = homeStatMaterialIcons[icon]
    return (
        <MaterialSymbol
            name={symbol}
            className={`shrink-0 ${className}`}
            size={36}
            weight={300}
        />
    )
}
