import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant =
    | 'primary'
    | 'secondary'
    | 'inverted'
    | 'outlined'
    | 'tertiary'
    | 'polo'
    | 'poloSoft'
    | 'pricingMuted'

const variantClasses: Record<Variant, string> = {
    primary:
        'bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary',
    secondary:
        'bg-surface-muted text-foreground hover:bg-border-subtle focus-visible:ring-neutral',
    inverted:
        'bg-foreground text-white hover:bg-neutral focus-visible:ring-foreground',
    outlined:
        'border-2 border-primary bg-transparent text-primary hover:bg-primary/5 focus-visible:ring-primary',
    tertiary:
        'bg-tertiary text-white hover:bg-tertiary-hover focus-visible:ring-tertiary',
    polo: 'bg-polo text-white hover:bg-polo-hover focus-visible:ring-polo',
    poloSoft:
        'bg-[#eff6ff] text-polo hover:bg-[#dbeafe] focus-visible:ring-polo',
    pricingMuted:
        'bg-[#eef2ff] text-[#334155] hover:bg-[#e0e7ff] focus-visible:ring-polo',
}

type ButtonProps = {
    variant?: Variant
    href?: string
    external?: boolean
    disabled?: boolean
    className?: string
    children: ReactNode
    title?: string
}

export function Button({
    variant = 'primary',
    href,
    external,
    disabled,
    className = '',
    children,
    title,
}: ButtonProps) {
    const base =
        'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const classes = `${base} ${variantClasses[variant]} ${className}`

    if (href && !disabled) {
        if (external) {
            return (
                <a
                    href={href}
                    className={classes}
                    target='_blank'
                    rel='noopener noreferrer'
                    title={title}
                >
                    {children}
                </a>
            )
        }
        return (
            <Link href={href} className={classes} title={title}>
                {children}
            </Link>
        )
    }

    return (
        <span
            role='link'
            aria-disabled={disabled}
            className={classes}
            title={title ?? (disabled ? 'Em breve' : undefined)}
        >
            {children}
        </span>
    )
}
