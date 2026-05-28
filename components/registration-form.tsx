"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const inputClass =
  "h-12 text-base font-sans bg-background touch-manipulation"

const interestedInOptions = [
  { value: "classic", label: "Classic", hint: "3-storey, 3-bed" },
  { value: "signature", label: "Signature", hint: "4-storey, 4–5 bed" },
  { value: "both", label: "Both collections" },
  { value: "not-sure", label: "Not sure yet" },
]

const buyerTypeOptions = [
  { value: "first-time", label: "First-time buyer" },
  { value: "investor", label: "Investor" },
  { value: "upgrader", label: "Upgrading" },
  { value: "downsizer", label: "Downsizing" },
  { value: "multigenerational", label: "Multigenerational" },
]

const timeframeOptions = [
  { value: "asap", label: "Ready now" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-12-months", label: "6–12 months" },
  { value: "just-exploring", label: "Just exploring" },
]

type RegistrationFormProps = {
  variant?: "quick" | "full"
  id?: string
  className?: string
  onSuccess?: () => void
}

async function submitLead(data: FormData, defaults?: { buyerType?: string; homeInterest?: string }) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      buyerType: data.get("buyerType") || defaults?.buyerType || "first-time",
      homeInterest: data.get("interestedIn") || defaults?.homeInterest || "not-sure",
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
}

function RadioCards({
  name,
  legend,
  required,
  options,
  defaultValue,
  columns = 2,
}: {
  name: string
  legend: string
  required?: boolean
  defaultValue?: string
  columns?: 1 | 2
  options: { value: string; label: string; hint?: string }[]
}) {
  return (
    <fieldset>
      <legend className="font-sans text-sm font-medium text-foreground mb-3">
        {legend}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </legend>
      <div
        className={cn(
          "grid gap-2",
          columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        )}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-input bg-background px-4 py-3 transition-colors",
              "has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2",
              "has-[:checked]:border-secondary has-[:checked]:bg-secondary/10"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              required={required}
              defaultChecked={defaultValue === option.value}
              className="h-5 w-5 shrink-0 accent-primary"
            />
            <span className="font-sans text-sm leading-snug">
              <span className="font-medium text-foreground block">{option.label}</span>
              {option.hint && (
                <span className="text-muted-foreground text-xs">{option.hint}</span>
              )}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function RegistrationForm({
  variant = "full",
  id = "registration-form",
  className,
  onSuccess,
}: RegistrationFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [optionalOpen, setOptionalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await submitLead(
        new FormData(e.currentTarget),
        variant === "quick"
          ? { buyerType: "first-time", homeInterest: "not-sure" }
          : undefined
      )
      onSuccess?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  const isQuick = variant === "quick"

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn("space-y-5", className)}
      noValidate={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${id}-firstName`} className="font-sans text-sm font-medium">
            First name <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${id}-firstName`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            enterKeyHint="next"
            className={inputClass}
            placeholder="Jane"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${id}-lastName`} className="font-sans text-sm font-medium">
            Last name <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${id}-lastName`}
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            enterKeyHint="next"
            className={inputClass}
            placeholder="Smith"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor={`${id}-email`} className="font-sans text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            enterKeyHint="next"
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor={`${id}-phone`} className="font-sans text-sm font-medium">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            enterKeyHint={isQuick ? "go" : "next"}
            className={inputClass}
            placeholder="(416) 555-0123"
          />
        </div>
      </div>

      {!isQuick && (
        <>
          <RadioCards
            name="interestedIn"
            legend="Which collection interests you?"
            required
            defaultValue="not-sure"
            options={interestedInOptions}
          />

          <RadioCards
            name="buyerType"
            legend="I am a…"
            required
            defaultValue="first-time"
            columns={1}
            options={buyerTypeOptions}
          />

          <Collapsible open={optionalOpen} onOpenChange={setOptionalOpen}>
            <CollapsibleTrigger
              type="button"
              className="flex w-full items-center justify-between rounded-md border border-dashed border-input bg-muted/50 px-4 py-3 font-sans text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <span>Add optional details (agent, timeline, questions)</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                  optionalOpen && "rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`${id}-timeframe`} className="font-sans text-sm font-medium">
                  Purchase timeline
                </Label>
                <select
                  id={`${id}-timeframe`}
                  name="timeframe"
                  className={cn(inputClass, "flex w-full rounded-md border border-input px-3")}
                >
                  <option value="">Select (optional)</option>
                  {timeframeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`${id}-agentName`} className="font-sans text-sm font-medium">
                    Agent name
                  </Label>
                  <Input
                    id={`${id}-agentName`}
                    name="agentName"
                    autoComplete="off"
                    className={inputClass}
                    placeholder="If you have a realtor"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${id}-brokerage`} className="font-sans text-sm font-medium">
                    Brokerage
                  </Label>
                  <Input
                    id={`${id}-brokerage`}
                    name="brokerage"
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="Brokerage name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-comments`} className="font-sans text-sm font-medium">
                  Questions or comments
                </Label>
                <textarea
                  id={`${id}-comments`}
                  name="comments"
                  rows={3}
                  className={cn(
                    "flex w-full rounded-md border border-input bg-background px-3 py-3 text-base font-sans resize-none touch-manipulation",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                  placeholder="Anything you'd like us to know?"
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </>
      )}

      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
        By submitting, you agree to be contacted about Rollingwood Townhomes. We respect your
        privacy and won&apos;t share your information.
      </p>

      {error && (
        <p
          role="alert"
          className="font-sans text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-4 py-3"
        >
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full h-14 text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            {isQuick ? "Get floor plans & pricing" : "Submit registration"}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
          </>
        )}
      </Button>
    </form>
  )
}
