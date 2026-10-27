'use client'

import { useEffect, useState } from 'react'

type Hms = { hours: number; minutes: number; seconds: number }

function endOfLocalDay(): Date {
    const d = new Date()
    d.setHours(23, 59, 59, 999)
    return d
}

function calcHmsLeft(target: Date): Hms {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 }
    }
    const totalSeconds = Math.floor(diff / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return { hours, minutes, seconds }
}

function pad(n: number) {
    return n.toString().padStart(2, '0')
}

const units: { key: keyof Hms; label: string }[] = [
    { key: 'hours', label: 'Horas' },
    { key: 'minutes', label: 'Minutos' },
    { key: 'seconds', label: 'Segundos' },
]

export function TrialCountdown() {
    const [left, setLeft] = useState<Hms>(() => calcHmsLeft(endOfLocalDay()))

    useEffect(() => {
        const target = endOfLocalDay()
        const id = setInterval(() => setLeft(calcHmsLeft(target)), 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className='grid grid-cols-3 gap-2 sm:gap-3'>
            {units.map(({ key, label }) => (
                <div
                    key={key}
                    className='min-w-0 rounded-xl bg-[#eff6ff] px-1 py-3 text-center sm:px-2 sm:py-4 md:py-5'
                >
                    <span className='font-heading text-2xl font-bold leading-none text-primary sm:text-3xl md:text-4xl'>
                        {pad(left[key])}
                    </span>
                    <span className='mt-2 block text-xs font-medium text-[#64748b]'>
                        {label}
                    </span>
                </div>
            ))}
        </div>
    )
}
