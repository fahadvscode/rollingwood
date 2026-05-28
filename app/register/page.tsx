"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Home, MapPin, FileText, Clock } from "lucide-react"
import { images } from "@/lib/images"

const benefits = [
  { icon: FileText, text: "Detailed floor plans for all 6 models" },
  { icon: Home, text: "Pricing & availability updates" },
  { icon: Clock, text: "Early access to new releases" },
  { icon: MapPin, text: "Priority scheduling for site visits" },
]

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-muted pb-24 md:pb-0">
          <section className="py-20">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card border border-border rounded-md p-10 sm:p-12">
                <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h1 className="text-3xl font-serif font-bold text-primary mb-4">
                  Registration complete
                </h1>
                <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                  Thank you for registering. Our team will be in touch within 24 hours with floor
                  plans, pricing, and answers to your questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans h-12">
                    <Link href="/floor-plans">
                      Explore floor plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary font-sans h-12">
                    <Link href="/">Return home</Link>
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
      <main className="bg-muted pb-28 md:pb-12">
        <section className="bg-primary py-10 sm:py-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.interiors.three}
              alt=""
              fill
              className="object-cover opacity-20"
              aria-hidden
            />
          </div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-3">
              Register for pricing &amp; floor plans
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary-foreground/85">
              Only 4 required fields to start. Optional details can be added below.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-md p-6 sm:p-10 shadow-sm">
              <RegistrationForm
                variant="full"
                id="full-register-form"
                onSuccess={() => setSubmitted(true)}
              />
            </div>

            <aside className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-start gap-3 rounded-md border border-border bg-card p-4"
                >
                  <benefit.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" aria-hidden />
                  <span className="font-sans text-sm text-foreground">{benefit.text}</span>
                </div>
              ))}
            </aside>

            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-sans text-sm">
              <div className="rounded-md bg-card border border-border p-3">
                <dt className="text-muted-foreground">From</dt>
                <dd className="font-semibold text-foreground">$600,000s</dd>
              </div>
              <div className="rounded-md bg-card border border-border p-3">
                <dt className="text-muted-foreground">Units</dt>
                <dd className="font-semibold text-foreground">118</dd>
              </div>
              <div className="rounded-md bg-card border border-border p-3">
                <dt className="text-muted-foreground">Ownership</dt>
                <dd className="font-semibold text-foreground">Freehold</dd>
              </div>
              <div className="rounded-md bg-card border border-border p-3">
                <dt className="text-muted-foreground">Occupancy</dt>
                <dd className="font-semibold text-foreground">2027–28</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
