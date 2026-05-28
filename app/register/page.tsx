"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, ArrowRight, Home, MapPin, FileText, Clock } from "lucide-react"
import { images } from "@/lib/images"

const benefits = [
  { icon: FileText, text: "Detailed floor plans for all 6 models" },
  { icon: Home, text: "Pricing & availability updates" },
  { icon: Clock, text: "Early access to new releases" },
  { icon: MapPin, text: "Priority scheduling for site visits" },
]

const interestedInOptions = [
  { value: "classic", label: "Classic Collection (3-storey, 3-bed)" },
  { value: "signature", label: "Signature Collection (4-storey, 4-5 bed)" },
  { value: "both", label: "Both Collections" },
  { value: "not-sure", label: "Not Sure Yet" },
]

const buyerTypeOptions = [
  { value: "first-time", label: "First-Time Buyer" },
  { value: "investor", label: "Investor" },
  { value: "upgrader", label: "Upgrading from Current Home" },
  { value: "downsizer", label: "Downsizing" },
  { value: "multigenerational", label: "Multigenerational Family" },
]

const timeframeOptions = [
  { value: "asap", label: "Ready to Purchase Now" },
  { value: "3-6-months", label: "Within 3-6 Months" },
  { value: "6-12-months", label: "Within 6-12 Months" },
  { value: "just-exploring", label: "Just Exploring Options" },
]

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          buyerType: data.get("buyerType"),
          homeInterest: data.get("interestedIn"),
          purchaseTimeframe: data.get("timeframe") || undefined,
          agentName: data.get("agentName") || undefined,
          brokerage: data.get("brokerage") || undefined,
          comments: data.get("comments") || undefined,
          consent: true,
        }),
      })

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}))
        throw new Error(
          typeof payload.error === "string"
            ? payload.error
            : "Registration failed. Please try again."
        )
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-muted">
          <section className="py-20">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card border border-border rounded-sm p-12">
                <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">
                  Registration Complete
                </h1>
                <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                  Thank you for registering for Rollingwood Townhomes. Our team will be in touch shortly with detailed floor plans, pricing information, and answers to any questions you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                    <Link href="/floor-plans">
                      Explore Floor Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-sans">
                    <Link href="/">
                      Return Home
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-muted">
        {/* Hero */}
        <section className="bg-primary py-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.interiors.three}
              alt="Rollingwood interior"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              Get Platinum Access
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Register Now
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 max-w-3xl">
              Be among the first to receive pricing, floor plans, and exclusive access to Rollingwood Townhomes.
            </p>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Benefits Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-sm p-6 sticky top-8">
                  <h2 className="font-serif text-xl font-bold text-primary mb-6">
                    What You&apos;ll Receive
                  </h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit.text} className="flex items-start gap-3">
                        <benefit.icon className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-foreground">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-sans text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Project Highlights
                    </h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="font-sans text-sm text-muted-foreground">Starting Price</dt>
                        <dd className="font-sans text-sm font-semibold text-foreground">From $600,000s</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-sans text-sm text-muted-foreground">Ownership</dt>
                        <dd className="font-sans text-sm font-semibold text-foreground">Freehold</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-sans text-sm text-muted-foreground">Occupancy</dt>
                        <dd className="font-sans text-sm font-semibold text-foreground">2027-2028</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-sans text-sm text-muted-foreground">Total Units</dt>
                        <dd className="font-sans text-sm font-semibold text-foreground">118</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-sm p-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-2">
                    Request Information
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground mb-8">
                    Complete the form below and a member of our team will be in touch within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="font-sans text-sm font-medium">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="font-sans"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="font-sans text-sm font-medium">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="font-sans"
                            placeholder="Smith"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-sans text-sm font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="font-sans"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-sans text-sm font-medium">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            className="font-sans"
                            placeholder="(416) 555-0123"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interest Details */}
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Your Interest
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="interestedIn" className="font-sans text-sm font-medium">
                            Collection Interest *
                          </Label>
                          <select
                            id="interestedIn"
                            name="interestedIn"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-sans ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select an option</option>
                            {interestedInOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="buyerType" className="font-sans text-sm font-medium">
                            Buyer Type *
                          </Label>
                          <select
                            id="buyerType"
                            name="buyerType"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-sans ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select an option</option>
                            {buyerTypeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor="timeframe" className="font-sans text-sm font-medium">
                            Purchase Timeframe
                          </Label>
                          <select
                            id="timeframe"
                            name="timeframe"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-sans ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select an option</option>
                            {timeframeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Agent Information */}
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Working with an Agent?
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="agentName" className="font-sans text-sm font-medium">
                            Agent Name (if applicable)
                          </Label>
                          <Input
                            id="agentName"
                            name="agentName"
                            type="text"
                            className="font-sans"
                            placeholder="Agent's full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="brokerage" className="font-sans text-sm font-medium">
                            Brokerage
                          </Label>
                          <Input
                            id="brokerage"
                            name="brokerage"
                            type="text"
                            className="font-sans"
                            placeholder="Brokerage name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="space-y-2">
                      <Label htmlFor="comments" className="font-sans text-sm font-medium">
                        Questions or Comments
                      </Label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-sans ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                        placeholder="Any specific questions about Rollingwood Townhomes?"
                      />
                    </div>

                    {/* Privacy */}
                    <div className="bg-muted rounded-sm p-4">
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        By submitting this form, you agree to receive communications about Rollingwood Townhomes from our sales team. Your information will be handled according to our privacy policy and will not be shared with third parties.
                      </p>
                    </div>

                    {error && (
                      <p className="font-sans text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-sm px-4 py-3">
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans text-base"
                    >
                      {loading ? "Submitting..." : "Submit Registration"}
                      {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
