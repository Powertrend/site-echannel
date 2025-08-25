'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        // Defina aqui a data de lançamento
        const targetDate = new Date('2025-12-31T23:59:59')

        const calculateTimeLeft = (): TimeLeft => {
            const now = new Date().getTime()
            const difference = targetDate.getTime() - now

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                }
            }

            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        // Calcular o tempo inicial
        const initialTime = calculateTimeLeft()
        setTimeLeft(initialTime)

        // Configurar o timer
        const timer = setInterval(() => {
            const newTime = calculateTimeLeft()
            setTimeLeft(newTime)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0')
    }

    return (
        <div className='flex text-2xl sm:text-3xl md:text-4xl mb-4 drop-shadow-lg'>
            <div className='mr-2'>
                <span className='font-semibold'>
                    {formatNumber(timeLeft.days)}
                </span>{' '}
                Dias
            </div>
            <div className='mr-2'>
                <span className='font-semibold'>
                    {formatNumber(timeLeft.hours)}
                </span>{' '}
                Horas
            </div>
            <div className='mr-2'>
                <span className='font-semibold'>
                    {formatNumber(timeLeft.minutes)}
                </span>{' '}
                Minutos
            </div>
            <div>
                <span className='font-semibold'>
                    {formatNumber(timeLeft.seconds)}
                </span>{' '}
                Segundos
            </div>
        </div>
    )
}
