import type { ReactNode } from 'react'

export function Container({
    children,
    className = '',
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div
            className={`mx-auto w-full max-w-[1680px] px-1 sm:px-1.5 md:px-2 lg:px-2.5 ${className}`}
        >
            {children}
        </div>
    )
}
