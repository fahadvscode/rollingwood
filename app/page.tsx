import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  HeroSection, 
  FactsGrid, 
  WhyRollingwood, 
  CollectionsPreview, 
  LocationPreview,
  CTASection 
} from "@/components/home-sections"
import { QuickRegisterSection } from "@/components/quick-register-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <QuickRegisterSection />
        <FactsGrid />
        <WhyRollingwood />
        <CollectionsPreview />
        <LocationPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
