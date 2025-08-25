'use client'

import Image from 'next/image'
import Countdown from '../components/Countdown'

export default function Home() {
    return (
        <div className='hero-bg min-h-screen flex justify-center items-center text-white relative'>
            {/* Logo */}
            <div className='absolute top-4 left-1/2 transform -translate-x-1/2'>
                <Image
                    src='/echannel-logo.png'
                    alt='Logo Echannel'
                    width={384}
                    height={200}
                    className='w-48 sm:w-64 md:w-96 lg:w-96 xl:w-96 h-auto'
                    priority
                />
            </div>

            <div className='flex flex-col items-center text-center px-4'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-4 sm:mb-6 drop-shadow-lg'>
                    O futuro do e-commerce é inteligente e já começou!
                </h1>
                <p className='text-xl sm:text-2xl font-semibold mb-6 drop-shadow-lg'>
                    Entre nessa com a plataforma que usa dados e automação para
                    fazer seu faturamento decolar!
                </p>

                {/* Countdown Timer */}
                <Countdown />

                <div className='flex text-2xl sm:text-3xl mb-6 drop-shadow-xl'>
                    <h1 className='text-3xl sm:text-4xl font-bold mb-6 drop-shadow-xl'>
                        Prepare-se para o Lançamento!
                    </h1>
                </div>

                {/* Social Media Links */}
                <div className='mt-4 space-x-4 flex justify-center'>
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
