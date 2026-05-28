import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Ruler, Bath, Layers, Car } from "lucide-react"
import { images } from "@/lib/images"

export const metadata = {
  title: "Floor Plans — Rollingwood Townhomes | 6 Models from 1,325 to 1,971 sq ft",
  description: "View all 6 floor plan models at Rollingwood Townhomes Brampton. Classic Collection (Haven, Laguna B, Crown B) 3-storey 3-bedroom. Signature Collection (Everwood, Laguna A, Crown A) 4-storey 4-5 bedroom. From $600,000s.",
}

const floorPlans = [
  {
    slug: "haven",
    name: "Haven",
    collection: "Classic",
    storeys: 3,
    sqft: 1325,
    beds: 3,
    baths: 3,
    description: "The most accessible model in the project, perfect for first-time buyers and investors.",
    bestFor: ["First-time buyers", "Small families", "Investors"],
  },
  {
    slug: "laguna-b",
    name: "Laguna B",
    collection: "Classic",
    storeys: 3,
    sqft: 1383,
    beds: 3,
    baths: 3,
    description: "A well-balanced 3-bedroom layout with efficient use of space throughout.",
    bestFor: ["Young professionals", "Small families", "Investors"],
  },
  {
    slug: "crown-b",
    name: "Crown B",
    collection: "Classic",
    storeys: 3,
    sqft: 1403,
    beds: 3,
    baths: 3,
    description: "The largest model in the Classic Collection with premium finishes.",
    bestFor: ["Growing families", "Upgraders", "Work-from-home professionals"],
  },
  {
    slug: "everwood",
    name: "Everwood",
    collection: "Signature",
    storeys: 4,
    sqft: 1861,
    beds: 4,
    baths: 5,
    description: "Spacious 4-storey layout designed for larger families who need room to grow.",
    bestFor: ["Large families", "Multigenerational living", "Premium investors"],
  },
  {
    slug: "laguna-a",
    name: "Laguna A",
    collection: "Signature",
    storeys: 4,
    sqft: 1964,
    beds: 4,
    baths: 5,
    description: "Nearly 2,000 sq ft of living space across four thoughtfully designed levels.",
    bestFor: ["Multigenerational families", "Work-from-home professionals", "Investors"],
  },
  {
    slug: "crown-a",
    name: "Crown A",
    collection: "Signature",
    storeys: 4,
    sqft: 1971,
    beds: 5,
    baths: 4,
    description: "The flagship model — the largest townhome at Rollingwood with 5 full bedrooms.",
    bestFor: ["Large multigenerational families", "Premium rentals", "Maximum space seekers"],
  },
]

export default function FloorPlansPage() {
  const classicModels = floorPlans.filter(p => p.collection === "Classic")
  const signatureModels = floorPlans.filter(p => p.collection === "Signature")

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.interiors.one}
              alt="Rollingwood interior design"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              6 Models Available
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Floor Plans
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 max-w-3xl">
              Explore all 6 townhome models at Rollingwood — from the efficient 1,325 sq ft Haven to the expansive 1,971 sq ft Crown A. Two collections designed to fit every lifestyle.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Compare All Models</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card border border-border rounded-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="font-sans text-xs font-semibold tracking-wider uppercase text-left p-4">Model</th>
                    <th className="font-sans text-xs font-semibold tracking-wider uppercase text-left p-4">Collection</th>
                    <th className="font-sans text-xs font-semibold tracking-wider uppercase text-left p-4">Storeys</th>
                    <th className="font-sans text-xs font-semibold tracking-wider uppercase text-left p-4">Sq Ft</th>
                    <th className="font-sans text-xs font-semibold tracking-wider uppercase text-left p-4">Beds</th>
                    <th className="font-sans text-xs font-semibold tracking-wider uppercase text-left p-4">Baths</th>
                    <th className="font-sans text-xs font-semibold tracking-wider uppercase text-left p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {floorPlans.map((plan, index) => (
                    <tr key={plan.slug} className={index % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                      <td className="font-serif text-base font-semibold text-foreground p-4">{plan.name}</td>
                      <td className="font-sans text-sm text-muted-foreground p-4">
                        <span className={`px-2 py-1 rounded-sm text-xs font-semibold ${
                          plan.collection === "Classic" 
                            ? "bg-accent/10 text-accent" 
                            : "bg-secondary/20 text-secondary-foreground"
                        }`}>
                          {plan.collection}
                        </span>
                      </td>
                      <td className="font-sans text-sm text-foreground p-4">{plan.storeys}</td>
                      <td className="font-sans text-sm font-semibold text-foreground p-4">{plan.sqft.toLocaleString()}</td>
                      <td className="font-sans text-sm text-foreground p-4">{plan.beds}</td>
                      <td className="font-sans text-sm text-foreground p-4">{plan.baths}</td>
                      <td className="p-4">
                        <Link 
                          href={`/floor-plans/${plan.slug}`}
                          className="font-sans text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                        >
                          View Details →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Classic Collection */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                3-Storey Townhomes
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary">
                Classic Collection
              </h2>
              <p className="font-sans text-base text-muted-foreground mt-2 max-w-2xl">
                Three efficient floor plans ranging from 1,325 to 1,403 sq ft. Perfect for first-time buyers, small families, and investors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classicModels.map((plan, index) => (
                <FloorPlanCard key={plan.slug} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Signature Collection */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                4-Storey Townhomes
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary">
                Signature Collection
              </h2>
              <p className="font-sans text-base text-muted-foreground mt-2 max-w-2xl">
                Three spacious floor plans ranging from 1,861 to 1,971 sq ft. Designed for multigenerational families and those who need extra space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {signatureModels.map((plan, index) => (
                <FloorPlanCard key={plan.slug} plan={plan} index={index + 3} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-secondary-foreground mb-4">
              Which Model is Right for You?
            </h2>
            <p className="font-sans text-base text-secondary-foreground/80 mb-8">
              Register now to receive detailed floor plans, pricing information, and expert guidance on choosing the best model for your needs.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
              <Link href="/register">
                Get Full Floor Plans & Pricing
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

const interiorImages = images.interiors.gallery

function FloorPlanCard({ plan, index }: { plan: typeof floorPlans[0]; index: number }) {
  return (
    <div className="bg-card border border-border rounded-sm overflow-hidden group hover:shadow-lg transition-shadow">
      {/* Floor plan image */}
      <div className="aspect-[4/3] relative">
        <Image
          src={interiorImages[index % interiorImages.length]}
          alt={`${plan.name} model interior`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`font-sans text-xs font-semibold px-2 py-1 rounded-sm ${
              plan.collection === "Classic" 
                ? "bg-accent/10 text-accent" 
                : "bg-secondary/20 text-secondary-foreground"
            }`}>
              {plan.collection}
            </span>
            <h3 className="text-2xl font-serif font-bold text-primary mt-2">{plan.name}</h3>
          </div>
          <div className="text-right">
            <p className="font-serif text-2xl font-bold text-secondary">{plan.sqft.toLocaleString()}</p>
            <p className="font-sans text-xs text-muted-foreground">sq ft</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4 py-4 border-y border-border">
          <div className="text-center">
            <Layers className="h-5 w-5 text-secondary mx-auto mb-1" />
            <p className="font-sans text-sm font-semibold text-foreground">{plan.storeys}</p>
            <p className="font-sans text-xs text-muted-foreground">Storeys</p>
          </div>
          <div className="text-center">
            <Home className="h-5 w-5 text-secondary mx-auto mb-1" />
            <p className="font-sans text-sm font-semibold text-foreground">{plan.beds}</p>
            <p className="font-sans text-xs text-muted-foreground">Beds</p>
          </div>
          <div className="text-center">
            <Bath className="h-5 w-5 text-secondary mx-auto mb-1" />
            <p className="font-sans text-sm font-semibold text-foreground">{plan.baths}</p>
            <p className="font-sans text-xs text-muted-foreground">Baths</p>
          </div>
          <div className="text-center">
            <Car className="h-5 w-5 text-secondary mx-auto mb-1" />
            <p className="font-sans text-sm font-semibold text-foreground">2</p>
            <p className="font-sans text-xs text-muted-foreground">Car</p>
          </div>
        </div>

        <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
          {plan.description}
        </p>

        <div className="mb-4">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-2">Best For</p>
          <div className="flex flex-wrap gap-2">
            {plan.bestFor.map((item) => (
              <span key={item} className="font-sans text-xs bg-muted px-2 py-1 rounded-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>

        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
          <Link href={`/floor-plans/${plan.slug}`}>
            View Full Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
