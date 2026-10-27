import Link from 'next/link'
import {
    footerBrand,
    footerColumns,
    footerLegal,
    type FooterLink,
} from '../../data/site-footer'
import { MaterialSymbol } from '../icons/material-symbol'
import { Container } from '../ui/Container'

function FooterNavLink({ link }: { link: FooterLink }) {
    const className =
        'text-sm text-[#64748b] transition hover:text-[#0f172a]'

    if (link.external) {
        return (
            <a
                href={link.href}
                className={className}
                target='_blank'
                rel='noopener noreferrer'
            >
                {link.label}
            </a>
        )
    }

    return (
        <Link href={link.href} className={className}>
            {link.label}
        </Link>
    )
}

export function SiteFooter() {
    const year = new Date().getFullYear()
    const { name, pill, description, trustBadge } = footerBrand

    return (
        <footer className='border-t border-[#eef2f6] bg-white'>
            <Container className='py-12 sm:py-14 lg:py-16'>
                <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8'>
                    <div className='sm:col-span-2 lg:col-span-4'>
                        <div className='flex flex-wrap items-center gap-2'>
                            <span className='font-heading text-2xl font-bold lowercase text-primary'>
                                {name}
                            </span>
                            <span className='rounded-full border border-sky-100 bg-sky-50 px-2.5 py-0.5 text-[11px] font-semibold text-sky-800'>
                                {pill}
                            </span>
                        </div>
                        <p className='mt-4 max-w-sm text-sm leading-relaxed text-[#64748b]'>
                            {description}
                        </p>
                        <p className='mt-5 inline-flex max-w-md items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-xs font-medium leading-snug text-[#475569] sm:text-[13px]'>
                            <MaterialSymbol
                                name='verified_user'
                                size={20}
                                weight={400}
                                className='shrink-0 text-tertiary'
                            />
                            {trustBadge}
                        </p>
                    </div>

                    {footerColumns.map((column) => (
                        <div key={column.title} className='lg:col-span-2'>
                            <p className='font-heading text-sm font-bold text-[#0f172a] sm:text-base'>
                                {column.title}
                            </p>
                            <ul className='mt-4 space-y-2.5'>
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <FooterNavLink link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>

            <div className='border-t border-[#eef2f6]'>
                <Container className='flex flex-col gap-4 py-5 text-xs text-[#64748b] sm:flex-row sm:items-center sm:justify-between sm:text-sm'>
                    <p>
                        © {year} {footerLegal.companyLine}
                    </p>
                    <div className='flex flex-wrap gap-x-5 gap-y-2'>
                        {footerLegal.statusItems.map((item) => (
                            <span
                                key={item}
                                className='inline-flex items-center gap-2'
                            >
                                <span
                                    className='h-2 w-2 shrink-0 rounded-full bg-tertiary'
                                    aria-hidden
                                />
                                {item}
                            </span>
                        ))}
                    </div>
                </Container>
            </div>
        </footer>
    )
}
