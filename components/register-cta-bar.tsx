"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RegisterCtaBar() {
  const pathname = usePathname()

  if (pathname === "/register") {
    return null
  }

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 pb-[env(safe-area-inset-bottom)] md:hidden"
      role="region"
      aria-label="Register for pricing"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <p className="font-sans text-xs text-muted-foreground leading-tight flex-1 min-w-0">
          <span className="font-semibold text-foreground block">Freehold townhomes</span>
          From the $600,000s · Brampton
        </p>
        <Button
          asChild
          size="lg"
          className="shrink-0 h-12 px-5 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans text-sm"
        >
          <Link href="/register">
            Register
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </div>
  )
}
