import { z } from "zod"

export const buyerTypeValues = [
  "first-time",
  "investor",
  "upgrader",
  "downsizer",
  "multigenerational",
] as const

export const homeInterestValues = [
  "classic",
  "signature",
  "both",
  "not-sure",
] as const

export const timeframeValues = [
  "asap",
  "3-6-months",
  "6-12-months",
  "just-exploring",
] as const

export const leadRegistrationSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(7).max(30),
  buyerType: z.enum(buyerTypeValues),
  homeInterest: z.enum(homeInterestValues),
  purchaseTimeframe: z.enum(timeframeValues).optional().or(z.literal("")),
  agentName: z.string().max(200).optional().or(z.literal("")),
  brokerage: z.string().max(200).optional().or(z.literal("")),
  comments: z.string().max(5000).optional().or(z.literal("")),
  consent: z.boolean().optional().default(true),
})

export type LeadRegistrationInput = z.infer<typeof leadRegistrationSchema>

export type RollingwoodLeadInsert = {
  first_name: string
  last_name: string
  email: string
  phone: string | null
  buyer_type: (typeof buyerTypeValues)[number]
  home_interest: (typeof homeInterestValues)[number]
  purchase_timeframe: string | null
  agent_name: string | null
  brokerage: string | null
  comments: string | null
  consent: boolean
  lead_type: string
}

export function toRollingwoodLeadRow(
  input: LeadRegistrationInput
): RollingwoodLeadInsert {
  return {
    first_name: input.firstName.trim(),
    last_name: input.lastName.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone?.trim() || null,
    buyer_type: input.buyerType,
    home_interest: input.homeInterest,
    purchase_timeframe: input.purchaseTimeframe?.trim() || null,
    agent_name: input.agentName?.trim() || null,
    brokerage: input.brokerage?.trim() || null,
    comments: input.comments?.trim() || null,
    consent: input.consent ?? true,
    lead_type: "registration",
  }
}
