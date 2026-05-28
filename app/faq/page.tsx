import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ — Rollingwood Townhomes Brampton | 60+ Questions Answered",
  description: "Frequently asked questions about Rollingwood Townhomes by Regency Property at 150 Rollingwood Drive, Brampton. Pricing, floor plans, deposit structure, occupancy dates, and more.",
}

const faqCategories = [
  {
    name: "Project Basics",
    faqs: [
      {
        question: "What is Rollingwood Townhomes?",
        answer: "Rollingwood Townhomes is a new pre-construction freehold townhouse community by Regency Property located at 150 Rollingwood Drive in Brampton, Ontario. The project includes 118 townhomes across 10 blocks, designed by Turner Fleischer Architects, in two collections: the 3-storey Classic Collection (1,325–1,403 sq ft, 3 bedrooms) and the 4-storey Signature Collection (1,861–1,971 sq ft, 4–5 bedrooms). Starting prices begin in the $600,000s.",
      },
      {
        question: "Where exactly is Rollingwood Townhomes located?",
        answer: "Rollingwood Townhomes is located at 150 Rollingwood Drive in the Fletcher's Creek South neighbourhood of Brampton, Ontario (postal code L6Y 5J6). The site is near the intersection of Mavis Road and Ray Lawson Boulevard, with Highway 407 approximately 5 minutes away.",
      },
      {
        question: "Who is the builder of Rollingwood Townhomes?",
        answer: "Rollingwood Townhomes is developed by Regency Property (also known as Regency Development or Regency Developments). Regency Property is a real estate developer with experience in the Greater Toronto Area residential market.",
      },
      {
        question: "Who is the architect for Rollingwood Townhomes?",
        answer: "The project is designed by Turner Fleischer Architects Inc., one of Ontario's most established architectural firms with over 250 residential projects in their portfolio. Turner Fleischer is known for creating liveable, market-tested floor plans.",
      },
      {
        question: "Is it spelled Rollingwood or Rolling Wood?",
        answer: "The official builder branding uses both 'Rolling Woods Townhomes' (two words) on the project microsite and 'Rollingwood' (one word) in various marketing materials. Both spellings refer to the same project at 150 Rollingwood Drive, Brampton.",
      },
      {
        question: "How many units are in Rollingwood Townhomes?",
        answer: "Rollingwood Townhomes includes 118 townhome units arranged across 10 blocks. The units are distributed between two collections: the Classic Collection (3-storey) and the Signature Collection (4-storey).",
      },
    ],
  },
  {
    name: "Pricing & Deposits",
    faqs: [
      {
        question: "What is the starting price for Rollingwood Townhomes?",
        answer: "Starting prices for Rollingwood Townhomes begin in the $600,000s. Final pricing varies by model, floor plan, lot location, and any upgrades selected. Contact a registered sales representative for current pricing and availability.",
      },
      {
        question: "What is the deposit structure for Rollingwood Townhomes?",
        answer: "The exact deposit structure will be confirmed at launch. GTA pre-construction norms typically require 15–20% of the purchase price spread over 12–18 months. Register for platinum access to receive detailed deposit information when released.",
      },
      {
        question: "Are there any HST savings available?",
        answer: "Yes, the builder is currently advertising 'New HST Savings Now Available' as a promotional offer. The specific savings amount and eligibility requirements should be confirmed directly with the sales team, as HST rebates depend on factors including whether you're an owner-occupant or investor.",
      },
      {
        question: "What closing costs should I expect?",
        answer: "Closing costs for pre-construction townhomes in Ontario typically include: land transfer tax (Ontario and potentially municipal), legal fees, title insurance, Tarion warranty enrollment, development charges (if applicable), utility connection fees, and HST on the purchase price (with potential rebates). Budget approximately 3–5% of the purchase price for closing costs beyond your deposit.",
      },
    ],
  },
  {
    name: "Floor Plans & Collections",
    faqs: [
      {
        question: "How many floor plan models are available?",
        answer: "Rollingwood Townhomes offers 6 floor plan models across two collections: Classic Collection (3 models: Haven at 1,325 sq ft, Laguna B at 1,383 sq ft, Crown B at 1,403 sq ft) and Signature Collection (3 models: Everwood at 1,861 sq ft, Laguna A at 1,964 sq ft, Crown A at 1,971 sq ft).",
      },
      {
        question: "What is the Classic Collection?",
        answer: "The Classic Collection features 3-storey townhomes ranging from 1,325 to 1,403 sq ft with 3 bedrooms and 3 bathrooms. Models include Haven, Laguna B, and Crown B. These units are ideal for first-time buyers, small families, and investors.",
      },
      {
        question: "What is the Signature Collection?",
        answer: "The Signature Collection features 4-storey townhomes ranging from 1,861 to 1,971 sq ft with 4–5 bedrooms and 4–5 bathrooms. Models include Everwood, Laguna A, and Crown A. These units are designed for multigenerational households, larger families, and investors seeking premium rentals.",
      },
      {
        question: "What is the largest model at Rollingwood?",
        answer: "The Crown A is the largest model at Rollingwood Townhomes, offering 1,971 sq ft across 4 storeys with 5 bedrooms and 4 bathrooms. It's designed for multigenerational households and large families.",
      },
      {
        question: "What is the smallest/most affordable model?",
        answer: "The Haven is the most compact model at 1,325 sq ft, making it the most accessible entry point to the project. It features 3 bedrooms and 3 bathrooms across 3 storeys, ideal for first-time buyers and investors.",
      },
      {
        question: "Do all units include a garage?",
        answer: "Yes, all models at Rollingwood Townhomes include a garage. The Signature Collection models, including the Crown A, feature a 2-car garage.",
      },
    ],
  },
  {
    name: "Timeline & Occupancy",
    faqs: [
      {
        question: "When is the estimated occupancy for Rollingwood Townhomes?",
        answer: "Estimated occupancy for Rollingwood Townhomes is 2027–2028. The exact occupancy date may vary depending on construction progress and will be confirmed as the project advances. Pre-construction buyers should plan for potential delays, which are common in the industry.",
      },
      {
        question: "What is the current status of Rollingwood Townhomes?",
        answer: "Rollingwood Townhomes is currently in the pre-construction phase with platinum registration open. Floor plans have been released and the sales process is underway.",
      },
      {
        question: "Is construction underway?",
        answer: "As a pre-construction project with occupancy estimated in 2027–2028, construction timelines should be confirmed with the builder. Register for updates to receive construction progress notifications.",
      },
    ],
  },
  {
    name: "Location & Neighbourhood",
    faqs: [
      {
        question: "What neighbourhood is Rollingwood Townhomes in?",
        answer: "Rollingwood Townhomes is located in the Fletcher's Creek South neighbourhood of southwest Brampton. This is a family-oriented, diverse community with excellent access to schools, parks, and amenities.",
      },
      {
        question: "How far is Sheridan College from Rollingwood?",
        answer: "Sheridan College Davis Campus is approximately 3 minutes by car (1.6 km) from Rollingwood Townhomes. This proximity creates both educational opportunities for families and strong rental demand for investors.",
      },
      {
        question: "How far is the closest GO Station?",
        answer: "Meadowvale GO Station is approximately 10 minutes (7 km) from Rollingwood Townhomes. Mount Pleasant GO Station is approximately 14 minutes (11 km) away. Both provide direct service to Union Station in downtown Toronto.",
      },
      {
        question: "How far is Highway 407 from Rollingwood?",
        answer: "Highway 407 is approximately 5 minutes (3 km) from Rollingwood Townhomes. Highway 401 is approximately 10 minutes (9 km) south of the site.",
      },
      {
        question: "How far is Toronto Pearson Airport?",
        answer: "Toronto Pearson International Airport is approximately 18 minutes (15 km) from Rollingwood Townhomes, making it very convenient for frequent travelers.",
      },
    ],
  },
  {
    name: "Ownership & Investment",
    faqs: [
      {
        question: "Is Rollingwood Townhomes freehold or condo?",
        answer: "Rollingwood Townhomes are freehold properties. This means you own both the home and the land it sits on, with no monthly condo fees or shared common elements. This is a significant advantage for buyers seeking full ownership and equity building.",
      },
      {
        question: "Is Rollingwood a good investment?",
        answer: "Rollingwood Townhomes offers several investment advantages: freehold ownership (no condo fees), proximity to Sheridan College (rental demand), location on the growing Mavis/407 corridor, pre-construction pricing (potential appreciation before occupancy), and multigenerational layouts suitable for premium rentals. As with any investment, conduct your own due diligence and consult with financial advisors.",
      },
      {
        question: "Can I rent out my unit at Rollingwood?",
        answer: "As freehold townhomes, there are no condo corporation restrictions on renting. You have full ownership rights to rent your property. The proximity to Sheridan College Davis Campus creates strong student rental demand, and the larger Signature Collection models are suitable for family or executive rentals.",
      },
      {
        question: "What is the rental potential for Rollingwood units?",
        answer: "Rental potential varies by unit size and market conditions. The proximity to Sheridan College Davis Campus supports student rental demand for Classic Collection models, while Signature Collection models with 4–5 bedrooms are suitable for family or multigenerational rentals at premium rates. Current rental comparables in the Fletcher's Creek South area can be researched on listing sites.",
      },
    ],
  },
]

// Generate JSON-LD structured data for FAQPage
function generateFAQSchema() {
  const allFaqs = faqCategories.flatMap(cat => cat.faqs)
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema()

  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              Questions Answered
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 max-w-3xl">
              Everything you need to know about Rollingwood Townhomes — pricing, floor plans, location, investment potential, and more.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category) => (
              <div key={category.name} className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6 pb-2 border-b border-secondary/30">
                  {category.name}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.name}-${index}`}
                      className="bg-card border border-border rounded-sm px-6"
                    >
                      <AccordionTrigger className="font-serif text-lg font-semibold text-foreground hover:text-primary text-left py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-8">
              Register to receive detailed information about Rollingwood Townhomes and get your specific questions answered by our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                <Link href="/register">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-sans">
                <Link href="/floor-plans">
                  View Floor Plans
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
