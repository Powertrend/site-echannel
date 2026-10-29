import Image from 'next/image'
import Link from 'next/link'
import { storefrontPreview } from '../../data/home-demo-section'
import { MaterialSymbol } from '../icons/material-symbol'

export function StorefrontPreviewMock() {
    const {
        browserUrl,
        simulationBadge,
        storeInitials,
        storeName,
        storeMeta,
        openBadge,
        products,
        cartHint,
        demoLinkLabel,
        demoHref,
    } = storefrontPreview

    return (
        <div className='flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)]'>
            <div className='flex items-center gap-1.5 border-b border-[#e8ecf0] bg-[#f8fafc] px-2.5 py-2 sm:gap-2 sm:px-4 sm:py-3'>
                <div className='flex shrink-0 gap-1.5' aria-hidden>
                    <span className='h-2.5 w-2.5 rounded-full bg-[#f87171]' />
                    <span className='h-2.5 w-2.5 rounded-full bg-[#fbbf24]' />
                    <span className='h-2.5 w-2.5 rounded-full bg-[#4ade80]' />
                </div>
                <p className='min-w-0 flex-1 truncate rounded-md border border-[#e2e8f0] bg-white px-2 py-1 text-center text-[10px] text-[#64748b] sm:px-3 sm:py-1.5 sm:text-xs'>
                    {browserUrl}
                </p>
                <span className='inline-flex max-w-[38%] shrink-0 items-center gap-1 truncate rounded-full border border-[#86efac] bg-white px-1.5 py-0.5 text-[9px] font-semibold text-[#15803d] sm:max-w-none sm:px-2.5 sm:text-xs'>
                    <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]' aria-hidden />
                    <span className='truncate'>{simulationBadge}</span>
                </span>
            </div>

            <div className='min-h-0 flex-1 bg-[#eef6fc] p-3 sm:p-4 md:p-5'>
                <div className='rounded-2xl bg-[#e3f2fb] p-3 sm:p-4 md:p-5'>
                    <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                        <div className='flex min-w-0 items-start gap-2.5 sm:gap-3'>
                            <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-sm'>
                                {storeInitials}
                            </span>
                            <div className='min-w-0'>
                                <p className='font-heading text-base font-bold text-[#0f172a] sm:text-lg md:text-xl'>
                                    {storeName}
                                </p>
                                <p className='mt-0.5 text-xs text-[#64748b] sm:text-sm'>
                                    {storeMeta}
                                </p>
                            </div>
                        </div>
                        <span className='inline-flex w-fit shrink-0 items-center gap-1 self-start rounded-full border-2 border-[#86efac] bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#15803d] sm:px-3 sm:py-1 sm:text-xs md:text-sm'>
                            <MaterialSymbol
                                name='check_circle'
                                size={16}
                                weight={400}
                                className='sm:hidden'
                            />
                            <MaterialSymbol
                                name='check_circle'
                                size={18}
                                weight={400}
                                className='hidden sm:block'
                            />
                            {openBadge}
                        </span>
                    </div>

                    <div className='mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-5 sm:gap-2 md:gap-3'>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className='flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#f1f5f9] bg-white shadow-sm min-[420px]:flex-col'
                            >
                                <div className='relative aspect-[5/4] w-full min-h-[88px] bg-[#f8fafc] min-[420px]:aspect-[4/3]'>
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        fill
                                        unoptimized
                                        className='object-cover'
                                        sizes='(max-width: 420px) 100vw, (max-width: 900px) 28vw, 200px'
                                    />
                                    <button
                                        type='button'
                                        className='absolute right-1.5 bottom-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-tertiary text-white shadow-md sm:h-8 sm:w-8'
                                        aria-label={`Adicionar ${product.title}`}
                                    >
                                        <MaterialSymbol
                                            name='add'
                                            size={18}
                                            weight={400}
                                        />
                                    </button>
                                </div>
                                <div className='flex flex-1 flex-col p-2 min-[420px]:p-2.5'>
                                    <p className='line-clamp-2 text-[11px] font-medium leading-snug text-[#334155] min-[420px]:text-xs md:text-sm'>
                                        {product.title}
                                    </p>
                                    <p className='mt-1 text-sm font-bold text-primary min-[420px]:text-base'>
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-4 flex flex-col gap-2 border-t border-[#cbd5e1]/50 pt-3 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-4'>
                        <p className='flex min-w-0 items-start gap-2 text-xs text-[#334155] sm:items-center sm:text-sm md:text-base'>
                            <MaterialSymbol
                                name='shopping_cart'
                                size={20}
                                weight={400}
                                className='mt-0.5 shrink-0 text-tertiary sm:mt-0'
                            />
                            <span className='leading-snug'>{cartHint}</span>
                        </p>
                        <Link
                            href={demoHref}
                            className='inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary hover:underline sm:text-sm md:text-base'
                        >
                            {demoLinkLabel}
                            <MaterialSymbol
                                name='open_in_new'
                                size={16}
                                weight={400}
                                className='sm:hidden'
                            />
                            <MaterialSymbol
                                name='open_in_new'
                                size={18}
                                weight={400}
                                className='hidden sm:block'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
