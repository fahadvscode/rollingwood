import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Home, Ruler, Bath, Layers, Car, Download } from "lucide-react"
import type { Metadata } from "next"

const floorPlans = {
  haven: {
    slug: "haven",
    name: "Haven",
    collection: "Classic",
    storeys: 3,
    sqft: 1325,
    sqftFormatted: "1,325.14",
    beds: 3,
    baths: 3,
    levels: ["Ground Floor", "Main Floor", "Second Floor"],
    description: "The Haven is a 1,325 sq ft, 3-storey, 3-bedroom, 3-bathroom freehold townhome model in the Classic Collection at Rollingwood Townhomes by Regency Property in Brampton, Ontario. As the most accessible model in the project, the Haven offers a ground-floor entry level, a main living level, and a top-level bedroom suite — making it a strong fit for first-time buyers, smaller families, and investors targeting Sheridan College student renters.",
    bestFor: ["First-time buyers", "Small families", "Investors", "Student rental market"],
    features: [
      "Ground-floor entry with storage",
      "Open-concept main floor living",
      "3 full bedrooms on upper level",
      "2-car garage",
      "Natural oak staircase",
      "Stone countertops",
    ],
  },
  "laguna-b": {
    slug: "laguna-b",
    name: "Laguna B",
    collection: "Classic",
    storeys: 3,
    sqft: 1383,
    sqftFormatted: "1,382.89",
    beds: 3,
    baths: 3,
    levels: ["Ground Floor", "Main Floor", "Second Floor"],
    description: "The Laguna B is a 1,383 sq ft, 3-storey, 3-bedroom, 3-bathroom freehold townhome model in the Classic Collection at Rollingwood Townhomes by Regency Property in Brampton, Ontario. This model offers a well-balanced layout that maximizes space efficiency while providing comfortable living areas for young professionals, small families, and investors seeking rental income.",
    bestFor: ["Young professionals", "Small families", "Investors", "Couples planning to grow"],
    features: [
      "Efficient 3-storey layout",
      "Modern open-concept design",
      "Private outdoor space",
      "2-car garage",
      "Premium kitchen finishes",
      "Chrome bathroom fixtures",
    ],
  },
  "crown-b": {
    slug: "crown-b",
    name: "Crown B",
    collection: "Classic",
    storeys: 3,
    sqft: 1403,
    sqftFormatted: "1,403.05",
    beds: 3,
    baths: 3,
    levels: ["Ground Floor", "Main Floor", "Second Floor"],
    description: "The Crown B is a 1,403 sq ft, 3-storey, 3-bedroom, 3-bathroom freehold townhome model in the Classic Collection at Rollingwood Townhomes by Regency Property in Brampton, Ontario. As the largest model in the Classic Collection, the Crown B offers additional living space while maintaining the efficient 3-storey design, making it ideal for growing families and work-from-home professionals.",
    bestFor: ["Growing families", "Work-from-home professionals", "Upgraders", "Quality-focused buyers"],
    features: [
      "Largest Classic Collection model",
      "Enhanced living spaces",
      "Flexible room configurations",
      "2-car garage",
      "Premium stone countertops",
      "Natural light throughout",
    ],
  },
  everwood: {
    slug: "everwood",
    name: "Everwood",
    collection: "Signature",
    storeys: 4,
    sqft: 1861,
    sqftFormatted: "1,861.24",
    beds: 4,
    baths: 5,
    levels: ["Ground Floor", "Main Floor", "Second Floor", "Third Floor"],
    description: "The Everwood is a 1,861 sq ft, 4-storey, 4-bedroom, 5-bathroom freehold townhome model in the Signature Collection at Rollingwood Townhomes by Regency Property in Brampton, Ontario. With four spacious levels and ample bathrooms for the whole family, the Everwood is designed for larger families, multigenerational households, and investors seeking premium rental returns in the Brampton market.",
    bestFor: ["Large families", "Multigenerational households", "Premium investors", "Executive rentals"],
    features: [
      "4 generous bedrooms",
      "5 full bathrooms",
      "Ground-floor flex space",
      "2-car garage",
      "Multiple living areas",
      "Premium finishes throughout",
    ],
  },
  "laguna-a": {
    slug: "laguna-a",
    name: "Laguna A",
    collection: "Signature",
    storeys: 4,
    sqft: 1964,
    sqftFormatted: "1,964.07",
    beds: 4,
    baths: 5,
    levels: ["Ground Floor", "Main Floor", "Second Floor", "Third Floor"],
    description: "The Laguna A is a 1,964 sq ft, 4-storey, 4-bedroom, 5-bathroom freehold townhome model in the Signature Collection at Rollingwood Townhomes by Regency Property in Brampton, Ontario. Nearly 2,000 sq ft of thoughtfully designed living space across four levels makes the Laguna A an excellent choice for multigenerational families, work-from-home professionals who need dedicated office space, and investors targeting premium rentals.",
    bestFor: ["Multigenerational families", "Work-from-home professionals", "Premium investors", "Space seekers"],
    features: [
      "Nearly 2,000 sq ft",
      "4 bedrooms + home office potential",
      "5 full bathrooms",
      "2-car garage",
      "Flexible ground floor",
      "High-end kitchen finishes",
    ],
  },
  "crown-a": {
    slug: "crown-a",
    name: "Crown A",
    collection: "Signature",
    storeys: 4,
    sqft: 1971,
    sqftFormatted: "1,971.36",
    beds: 5,
    baths: 4,
    levels: ["Ground Floor", "Main Floor", "Second Floor", "Third Floor"],
    description: "The Crown A is the largest model at Rollingwood Townhomes — a 1,971 sq ft, 4-storey, 5-bedroom, 4-bathroom freehold townhome in the Signature Collection by Regency Property in Brampton, Ontario. With five full bedrooms across four storeys, the Crown A is purpose-built for multigenerational households, large families, and investors targeting premium long-term rentals near Sheridan College and the Hwy 407 corridor.",
    bestFor: ["Large multigenerational families", "Maximum space seekers", "Premium rental investors", "Extended families"],
    features: [
      "Largest model at Rollingwood",
      "5 full bedrooms",
      "4 bathrooms + 2 powder rooms",
      "2-car garage",
      "Ultimate multigenerational layout",
      "Premium Signature finishes",
    ],
  },
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const plan = floorPlans[slug as keyof typeof floorPlans]
  if (!plan) return { title: "Floor Plan Not Found" }
  
  return {
    title: `${plan.name} — ${plan.sqft.toLocaleString()} sq ft ${plan.storeys}-Storey Townhome | Rollingwood Brampton`,
    description: `${plan.name} floor plan at Rollingwood Townhomes. ${plan.sqft.toLocaleString()} sq ft, ${plan.storeys}-storey, ${plan.beds}-bedroom, ${plan.baths}-bathroom freehold townhome in the ${plan.collection} Collection. From $600,000s.`,
  }
}

export async function generateStaticParams() {
  return Object.keys(floorPlans).map((slug) => ({ slug }))
}

export default async function FloorPlanDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const plan = floorPlans[slug as keyof typeof floorPlans]
  
  if (!plan) {
    notFound()
  }

  const allPlans = Object.values(floorPlans)
  const currentIndex = allPlans.findIndex(p => p.slug === slug)
  const prevPlan = currentIndex > 0 ? allPlans[currentIndex - 1] : null
  const nextPlan = currentIndex < allPlans.length - 1 ? allPlans[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 font-sans text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/floor-plans" className="hover:text-primary transition-colors">Floor Plans</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{plan.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <span className={`font-sans text-xs font-semibold px-3 py-1 rounded-sm ${
                  plan.collection === "Classic" 
                    ? "bg-accent/20 text-accent" 
                    : "bg-secondary/30 text-secondary"
                }`}>
                  {plan.collection} Collection · {plan.storeys}-Storey
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-primary-foreground">
                  {plan.name}
                </h1>
                <p className="mt-2 font-sans text-lg text-primary-foreground/80">
                  {plan.sqftFormatted} sq ft · {plan.beds} Bedrooms · {plan.baths} Bathrooms · Freehold Townhome
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans">
                  <Link href="/register">
                    Get Price & Availability
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Floor Plan Visualization */}
              <div className="lg:col-span-2">
                <div className="bg-muted border border-border rounded-sm p-8">
                  <h2 className="font-sans text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-6">
                    Floor Plan Levels
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {plan.levels.map((level, index) => (
                      <div key={level} className="bg-card border border-border rounded-sm p-6">
                        <div className="aspect-[4/3] bg-primary/5 flex items-center justify-center mb-4 rounded-sm">
                          <div className="text-center">
                            <Layers className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                            <p className="font-sans text-xs text-muted-foreground">Level {index}</p>
                          </div>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-primary">{level}</h3>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                      <Link href="/register">
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Floor Plan PDF
                      </Link>
                    </Button>
                    <p className="font-sans text-xs text-muted-foreground mt-2">
                      Register to receive high-resolution floor plans and pricing
                    </p>
                  </div>
                </div>
              </div>

              {/* Specs Sidebar */}
              <div className="lg:col-span-1">
                {/* Quick Specs */}
                <div className="bg-card border border-border rounded-sm p-6 mb-6">
                  <h2 className="font-sans text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                    Quick Specs
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-5 w-5 text-secondary" />
                        <span className="font-sans text-sm text-muted-foreground">Size</span>
                      </div>
                      <span className="font-serif text-base font-semibold text-foreground">{plan.sqft.toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <Layers className="h-5 w-5 text-secondary" />
                        <span className="font-sans text-sm text-muted-foreground">Storeys</span>
                      </div>
                      <span className="font-serif text-base font-semibold text-foreground">{plan.storeys}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <Home className="h-5 w-5 text-secondary" />
                        <span className="font-sans text-sm text-muted-foreground">Bedrooms</span>
                      </div>
                      <span className="font-serif text-base font-semibold text-foreground">{plan.beds}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <Bath className="h-5 w-5 text-secondary" />
                        <span className="font-sans text-sm text-muted-foreground">Bathrooms</span>
                      </div>
                      <span className="font-serif text-base font-semibold text-foreground">{plan.baths}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <Car className="h-5 w-5 text-secondary" />
                        <span className="font-sans text-sm text-muted-foreground">Garage</span>
                      </div>
                      <span className="font-serif text-base font-semibold text-foreground">2-Car</span>
                    </div>
                  </div>
                </div>

                {/* Best For */}
                <div className="bg-card border border-border rounded-sm p-6 mb-6">
                  <h2 className="font-sans text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                    Best For
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {plan.bestFor.map((item) => (
                      <span key={item} className="font-sans text-xs bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-card border border-border rounded-sm p-6">
                  <h2 className="font-sans text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                    Features
                  </h2>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span className="font-sans text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">
              About the {plan.name} Model
            </h2>
            <p className="font-serif text-lg text-foreground leading-relaxed">
              {plan.description}
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {prevPlan ? (
                <Link 
                  href={`/floor-plans/${prevPlan.slug}`}
                  className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>{prevPlan.name}</span>
                </Link>
              ) : <div />}
              
              <Link 
                href="/floor-plans"
                className="font-sans text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                View All Floor Plans
              </Link>
              
              {nextPlan ? (
                <Link 
                  href={`/floor-plans/${nextPlan.slug}`}
                  className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>{nextPlan.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-secondary-foreground mb-4">
              Interested in the {plan.name}?
            </h2>
            <p className="font-sans text-base text-secondary-foreground/80 mb-6">
              Register now to receive detailed pricing, availability, and schedule a private consultation.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
              <Link href="/register">
                Register for {plan.name} Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
