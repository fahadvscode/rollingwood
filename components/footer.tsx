import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { images } from "@/lib/images"

const footerLinks = {
  project: [
    { name: "Floor Plans", href: "/floor-plans" },
    { name: "Location", href: "/location" },
    { name: "Neighbourhood", href: "/neighbourhood" },
    { name: "Builder", href: "/builder" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Investment Guide", href: "/investment" },
    { name: "First-Time Buyer Guide", href: "/first-time-buyer-guide" },
    { name: "Register", href: "/register" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src={images.logoFooter}
                alt="Rollingwood Townhomes"
                width={160}
                height={45}
                className="h-10 w-auto mb-4"
              />
            </div>
            <p className="font-sans text-sm text-primary-foreground/80 leading-relaxed mb-6">
              New freehold townhomes by Regency Property at 150 Rollingwood Drive, Brampton. From the $600,000s.
            </p>
            <Image
              src={images.regency}
              alt="Regency Property"
              width={100}
              height={30}
              className="h-6 w-auto opacity-70"
            />
          </div>

          {/* Project Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-secondary uppercase mb-6">
              Project
            </h4>
            <ul className="space-y-3">
              {footerLinks.project.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-secondary uppercase mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-secondary uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-primary-foreground/80">
                  150 Rollingwood Drive<br />
                  Brampton, ON L6Y 5J6
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <Link
                  href="tel:+1-000-000-0000"
                  className="font-sans text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contact for Details
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <Link
                  href="/register"
                  className="font-sans text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Register for Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-primary-foreground/60">
              Floor plans and renderings courtesy of Regency Property. Designed by Turner Fleischer Architects. Specifications subject to change without notice.
            </p>
            <p className="font-sans text-xs text-primary-foreground/60">
              Last updated: May 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
