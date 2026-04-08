import { FinalCtaSection } from '@/components/organisms/FinalCtaSection'
import { FeaturesSection } from '@/components/organisms/FeaturesSection'
import { FooterSection } from '@/components/organisms/FooterSection'
import { HeroSection } from '@/components/organisms/HeroSection'
import { PricingSection } from '@/components/organisms/PricingSection'
import { LandingTemplate } from '@/components/templates/LandingTemplate'
import { TopNav } from '@/components/molecules/TopNav'

export function LandingPage() {
  return (
    <LandingTemplate
      topNav={<TopNav />}
      hero={<HeroSection />}
      features={<FeaturesSection />}
      pricing={<PricingSection />}
      finalCta={<FinalCtaSection />}
      footer={<FooterSection />}
    />
  )
}

