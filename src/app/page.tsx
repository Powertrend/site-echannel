import { HomeFinalCtaSection } from '../components/home/HomeFinalCtaSection'
import { SiteFooter } from '../components/layout/SiteFooter'
import { HeroSection } from '../components/home/HeroSection'
import { DemoPromoSection } from '../components/home/DemoPromoSection'
import { PricingSection } from '../components/home/PricingSection'
import { HomeAiSection } from '../components/home/HomeAiSection'
import { SolutionPillarGrid } from '../components/home/SolutionPillarGrid'
import HomeFaqSection from '../components/HomeFaqSection'

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <SolutionPillarGrid />
                <HomeAiSection />
                <DemoPromoSection />
                <PricingSection />
                <HomeFaqSection />
            </main>
            <HomeFinalCtaSection />
            <SiteFooter />
        </>
    )
}
