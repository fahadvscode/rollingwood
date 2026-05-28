"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { RegistrationForm } from "@/components/registration-form"
import { Button } from "@/components/ui/button"

export function QuickRegisterSection() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <section id="register" className="py-16 bg-muted scroll-mt-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle2 className="h-14 w-14 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">
            You&apos;re on the list
          </h2>
          <p className="font-sans text-muted-foreground mb-6">
            We&apos;ll send floor plans and pricing soon. Want to explore models now?
          </p>
          <Button asChild className="font-sans">
            <Link href="/floor-plans">
              View floor plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-16 bg-muted scroll-mt-24" aria-labelledby="quick-register-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              2-minute signup
            </span>
            <h2
              id="quick-register-heading"
              className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-primary mb-4 text-balance"
            >
              Get floor plans &amp; pricing
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Enter your details below — no account needed. Our team responds within 24 hours with
              availability, pricing, and all 6 floor plans.
            </p>
            <ul className="font-sans text-sm text-foreground space-y-2">
              <li className="flex gap-2">
                <span className="text-secondary font-bold">✓</span> Classic &amp; Signature collections
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">✓</span> From the $600,000s · Freehold
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">✓</span> Occupancy 2027–2028
              </li>
            </ul>
            <p className="mt-6 font-sans text-sm">
              <Link href="/register" className="text-primary font-medium underline-offset-4 hover:underline">
                Need to add more details? Use the full registration form →
              </Link>
            </p>
          </div>

          <div className="bg-card border border-border rounded-md p-6 sm:p-8 shadow-sm">
            <p className="font-sans text-sm text-muted-foreground mb-5">
              Fields marked <span className="text-destructive">*</span> are required.
            </p>
            <RegistrationForm
              variant="quick"
              id="quick-register-form"
              onSuccess={() => setSubmitted(true)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
