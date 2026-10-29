'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    adminPanelHref,
    headerBrandPill,
    mainNavLinks,
} from '../../data/site-nav'
import { buildWhatsAppUrl } from '../../data/landing-content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const whatsappHref = buildWhatsAppUrl(
    'Olá! Vim pelo site Echannel e quero falar com o time.',
)

const navLinkClass =
    'whitespace-nowrap rounded-md px-1.5 py-1 text-[11px] font-medium text-neutral transition hover:text-foreground min-[1300px]:px-2 min-[1300px]:text-xs'

export function SiteHeader() {
    const [open, setOpen] = useState(false)

    return (
        <header className='sticky top-0 z-50 border-b border-border-subtle bg-white/95 backdrop-blur-sm'>
            <Container>
                <div className='flex h-[3.75rem] min-w-0 items-center gap-2 min-[1180px]:h-16 min-[1180px]:gap-3'>
                    <Link
                        href='/'
                        className='flex min-w-0 shrink-0 items-center gap-2'
                    >
                        <Image
                            src='/echannel-logo.png'
                            alt='Echannel'
                            width={120}
                            height={40}
                            className='h-8 w-auto min-[1180px]:h-9'
                            priority
                        />
                        <span className='hidden rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-[10px] font-semibold leading-tight text-sky-800 min-[1180px]:inline min-[1300px]:text-[11px]'>
                            {headerBrandPill}
                        </span>
                    </Link>

                    <nav
                        className='hidden min-w-0 flex-1 items-center justify-center gap-0 min-[1180px]:flex min-[1180px]:flex-nowrap'
                        aria-label='Principal'
                    >
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={navLinkClass}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className='ml-auto flex shrink-0 items-center gap-1.5 min-[1180px]:ml-0 min-[1180px]:gap-2'>
                        <Button
                            variant='tertiary'
                            href={whatsappHref}
                            external
                            className='hidden px-2.5 py-2 text-xs min-[1180px]:inline-flex xl:px-3'
                        >
                            <i
                                className='fab fa-whatsapp text-base'
                                aria-hidden
                            />
                            <span className='hidden min-[1300px]:inline'>
                                Falar no WhatsApp
                            </span>
                            <span className='min-[1300px]:hidden'>WhatsApp</span>
                        </Button>
                        <Button
                            variant='primary'
                            href={adminPanelHref}
                            className='hidden px-2.5 py-2 text-xs min-[1180px]:inline-flex xl:px-3'
                        >
                            <span className='hidden min-[1300px]:inline'>
                                Acesse Painel ADM
                            </span>
                            <span className='min-[1300px]:hidden'>Painel</span>
                        </Button>

                        <button
                            type='button'
                            className='inline-flex rounded-lg border border-border-subtle p-2 min-[1180px]:hidden'
                            aria-expanded={open}
                            aria-controls='mobile-nav'
                            onClick={() => setOpen((v) => !v)}
                        >
                            <span className='sr-only'>Menu</span>
                            <svg
                                className='h-6 w-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                aria-hidden
                            >
                                {open ? (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                ) : (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>

            {open ? (
                <div
                    id='mobile-nav'
                    className='border-t border-border-subtle bg-white min-[1180px]:hidden'
                >
                    <Container className='flex flex-col gap-1 py-4'>
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className='rounded-lg px-3 py-2 text-sm font-medium hover:bg-surface-muted'
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className='mt-3 flex flex-col gap-2 border-t border-border-subtle pt-3'>
                            <Button
                                variant='tertiary'
                                href={whatsappHref}
                                external
                                className='w-full'
                            >
                                Falar no WhatsApp
                            </Button>
                            <Button
                                variant='primary'
                                href={adminPanelHref}
                                className='w-full'
                            >
                                Acesse Painel ADM
                            </Button>
                        </div>
                    </Container>
                </div>
            ) : null}
        </header>
    )
}
