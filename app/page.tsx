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

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
