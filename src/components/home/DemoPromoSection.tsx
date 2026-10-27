import { Container } from '../ui/Container'
import { StorefrontPreviewMock } from './StorefrontPreviewMock'
import { TrialPromoCard } from './TrialPromoCard'

export function DemoPromoSection() {
    return (
        <section
            id='demo'
            className='scroll-mt-20 bg-[#f4f7fa] py-10 sm:py-14 lg:py-20'
        >
            <Container>
                <div className='grid grid-cols-1 items-stretch gap-6 min-[900px]:grid-cols-2 min-[900px]:gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]'>
                    <div className='min-w-0'>
                        <StorefrontPreviewMock />
                    </div>
                    <div className='flex min-h-0 min-w-0 min-[900px]:min-h-full'>
                        <TrialPromoCard />
                    </div>
                </div>
            </Container>
        </section>
    )
}
