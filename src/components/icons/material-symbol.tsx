import type { CSSProperties, ReactNode } from 'react'

/** Ícones do export Stitch (Material Symbols Outlined, FILL 0). */
export type MaterialSymbolProps = {
    name: string
    className?: string
    /** Tamanho em px (default 24, grid Stitch). */
    size?: number
    /** Peso do traço — protótipo usa ~300. */
    weight?: 300 | 400
}

export function MaterialSymbol({
    name,
    className = '',
    size = 24,
    weight = 300,
}: MaterialSymbolProps): ReactNode {
    const style: CSSProperties = {
        fontFamily: '"Material Symbols Outlined"',
        fontSize: size,
        fontVariationSettings: `'FILL' 0, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
    }

    return (
        <span
            className={`material-symbols-outlined not-italic leading-none ${className}`}
            style={style}
            aria-hidden
        >
            {name}
        </span>
    )
}
