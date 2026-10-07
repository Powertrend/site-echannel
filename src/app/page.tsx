'use client'

import Image from 'next/image'
import Countdown from '../components/Countdown'
import {
    landingCountdown,
    landingHero,
    landingTracks,
} from '../data/landing-content'

export default function Home() {
    return (
        <div className='hero-bg min-h-screen flex justify-center items-center text-white relative py-24'>
            <div className='absolute top-4 left-1/2 transform -translate-x-1/2'>
                <Image
                    src='/echannel-logo.png'
                    alt='Logo Echannel'
                    width={384}
                    height={200}
                    className='w-48 sm:w-64 md:w-96 h-auto'
                    priority
                />
            </div>

            <div className='flex max-w-5xl flex-col items-center px-4 text-center'>
                <h1 className='mt-8 mb-4 text-2xl font-bold drop-shadow-lg sm:mb-6 sm:text-3xl md:text-4xl'>
                    {landingHero.title}
                </h1>
                <p className='mb-8 max-w-3xl text-base font-medium leading-relaxed drop-shadow-lg sm:text-lg md:text-xl'>
                    {landingHero.subtitle}
                </p>

                <div className='mb-10 grid w-full gap-4 sm:grid-cols-3'>
                    {landingTracks.map((track) => (
                        <article
                            key={track.id}
                            className='flex flex-col rounded-xl border border-white/25 bg-black/35 p-4 text-left backdrop-blur-sm'
                        >
                            <h2 className='text-lg font-bold'>{track.title}</h2>
                            <p className='mt-2 flex-1 text-sm leading-relaxed text-white/90'>
                                {track.body}
                            </p>
                            <a
                                href={track.href}
                                className='mt-4 inline-flex items-center justify-center rounded-lg bg-white/95 px-3 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white'
                            >
                                {track.cta}
                            </a>
                        </article>
                    ))}
                </div>

                <p className='text-lg font-semibold drop-shadow-lg sm:text-xl'>
                    {landingCountdown.headline}
                </p>
                <p className='mt-2 mb-4 max-w-2xl text-sm text-white/90 sm:text-base'>
                    {landingCountdown.note}
                </p>

                <Countdown />

                <p className='mt-4 text-2xl font-bold drop-shadow-xl sm:text-3xl'>
                    {landingCountdown.launchLabel}
                </p>

                <div className='mt-8 flex justify-center space-x-4'>
                    <a
                        href='#'
                        className='text-gray-400 hover:text-white'
                        title='Facebook'
                    >
                        <i className='fab fa-facebook-f'></i>
                        <span className='sr-only'>Facebook</span>
                    </a>
                    <a
                        href='#'
                        className='text-gray-400 hover:text-white'
                        title='Twitter'
                    >
                        <i className='fab fa-twitter'></i>
                        <span className='sr-only'>Twitter</span>
                    </a>
                    <a
                        href='#'
                        className='text-gray-400 hover:text-white'
                        title='Instagram'
                    >
                        <i className='fab fa-instagram'></i>
                        <span className='sr-only'>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
