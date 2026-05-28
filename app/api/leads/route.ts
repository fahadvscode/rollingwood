import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { leadRegistrationSchema, toRollingwoodLeadRow } from "@/lib/leads"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = leadRegistrationSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()
    const row = toRollingwoodLeadRow(parsed.data)

    const { data, error } = await supabase
      .from("rollingwood_leads")
      .insert(row)
      .select("id")
      .single()

    if (error) {
      console.error("rollingwood_leads insert:", error)
      return NextResponse.json(
        { error: "Failed to save registration. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 201 })
  } catch (err) {
    console.error("leads API:", err)
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    )
  }
}
