import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Car, Train, Plane, GraduationCap, ShoppingBag, Building2 } from "lucide-react"
import { images } from "@/lib/images"

export const metadata = {
  title: "Location — 150 Rollingwood Drive, Brampton | Mavis Rd & Hwy 407",
  description: "Rollingwood Townhomes at 150 Rollingwood Drive, Brampton ON L6Y 5J6. Near Mavis Road & Highway 407. 3 min to Sheridan College, 10 min to GO Station, 18 min to Pearson Airport. Fletcher's Creek South neighbourhood.",
}

const driveTimesData = [
  { destination: "Sheridan College Davis Campus", time: "3 min", distance: "1.6 km", icon: GraduationCap },
  { destination: "Highway 407 ETR (Mavis Rd)", time: "5 min", distance: "3 km", icon: Car },
  { destination: "Meadowvale GO Station", time: "10 min", distance: "7 km", icon: Train },
  { destination: "Highway 401 (Mavis Rd)", time: "10 min", distance: "9 km", icon: Car },
  { destination: "Heartland Town Centre", time: "12 min", distance: "9 km", icon: ShoppingBag },
  { destination: "Lisgar GO Station", time: "12 min", distance: "8 km", icon: Train },
  { destination: "Bramalea City Centre", time: "15 min", distance: "10 km", icon: ShoppingBag },
  { destination: "Brampton Civic Hospital", time: "15 min", distance: "12 km", icon: Building2 },
  { destination: "Toronto Pearson Airport", time: "18 min", distance: "15 km", icon: Plane },
  { destination: "Square One (Mississauga)", time: "20 min", distance: "15 km", icon: ShoppingBag },
  { destination: "Downtown Mississauga", time: "22 min", distance: "18 km", icon: Building2 },
  { destination: "Downtown Toronto (off-peak)", time: "40 min", distance: "45 km", icon: Building2 },
]

export default function LocationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.community.one}
              alt="Rollingwood community location"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              Prime Brampton Location
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
              150 Rollingwood Drive
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 max-w-3xl">
              Mavis Road & Highway 407 — one of the GTA&apos;s most connected corridors
            </p>
          </div>
        </section>

        {/* Address & Map */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-primary">Full Address</h2>
                    <p className="font-sans text-lg text-foreground mt-2">
                      150 Rollingwood Drive<br />
                      Brampton, ON L6Y 5J6<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-sm p-6">
                  <h3 className="font-sans text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                    Location Details
                  </h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border">
                      <dt className="font-sans text-sm text-muted-foreground">Major Intersection</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground">Mavis Rd & Ray Lawson Blvd</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <dt className="font-sans text-sm text-muted-foreground">Neighbourhood</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground">Fletcher&apos;s Creek South</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <dt className="font-sans text-sm text-muted-foreground">City</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground">Brampton</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <dt className="font-sans text-sm text-muted-foreground">Region</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground">Peel Region</dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="font-sans text-sm text-muted-foreground">Coordinates</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground">43.6663, -79.7375</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Map placeholder with image */}
              <div className="bg-card border border-border rounded-sm overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={images.community.two}
                    alt="Rollingwood neighbourhood aerial view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              A Commuter&apos;s Dream Location
            </h2>
            <div className="prose prose-lg">
              <p className="font-serif text-lg text-foreground leading-relaxed mb-6">
                150 Rollingwood Drive sits at the southwestern edge of Brampton, just inside the Mavis Road and Ray Lawson Boulevard intersection. The site is approximately a 3-minute drive to Sheridan College Davis Campus, 10 minutes to Meadowvale GO Station and Brampton Mall, 12 minutes to Bramalea City Centre and Heartland Town Centre, 14 minutes to Mount Pleasant GO Station, and 16 minutes to downtown Brampton.
              </p>
              <p className="font-serif text-lg text-foreground leading-relaxed">
                Highway 407 is approximately 5 minutes away and Highway 401 is approximately 10 minutes south, making this one of the most commute-friendly addresses in southwest Brampton for buyers working in Mississauga, Vaughan, or downtown Toronto.
              </p>
            </div>
          </div>
        </section>

        {/* Drive Times */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                Connectivity
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary">
                Drive Times from Rollingwood
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {driveTimesData.map((item) => (
                <div key={item.destination} className="bg-card border border-border rounded-sm p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <item.icon className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground">{item.destination}</p>
                      <p className="font-sans text-xs text-muted-foreground">{item.distance}</p>
                    </div>
                  </div>
                  <span className="font-serif text-lg font-bold text-primary">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transit */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                  Public Transit
                </span>
                <h2 className="mt-2 text-3xl font-serif font-bold text-primary mb-6">
                  GO Transit & Brampton Transit
                </h2>
                <p className="font-serif text-lg text-foreground leading-relaxed mb-6">
                  Rollingwood Townhomes offers excellent access to the regional transit network. <strong>Meadowvale GO Station</strong> (Milton Line) is approximately 10 minutes away, providing direct train service to Union Station in downtown Toronto. <strong>Lisgar GO Station</strong> is 12 minutes away with additional bus connections.
                </p>
                <div className="bg-muted rounded-sm p-5 mb-6">
                  <h4 className="font-sans text-sm font-semibold text-primary mb-3">Brampton Transit Routes Nearby</h4>
                  <p className="font-sans text-sm text-muted-foreground">
                    Routes <strong>3, 4, 18, 52, 54, 61, 66</strong> serve Sheridan College and surrounding area. The <strong>Züm 511 Steeles</strong> Bus Rapid Transit provides express service along the Steeles Avenue corridor.
                  </p>
                </div>
                <p className="font-serif text-base text-foreground leading-relaxed">
                  MiWay (Mississauga Transit) connections are available at GO stations for travel throughout Mississauga.
                </p>
              </div>

              <div>
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                  Highway Access
                </span>
                <h2 className="mt-2 text-3xl font-serif font-bold text-primary mb-6">
                  407 ETR & 401 Corridor
                </h2>
                <p className="font-serif text-lg text-foreground leading-relaxed mb-6">
                  The site sits at the Mavis Road and Highway 407 intersection — one of the GTA&apos;s most active growth corridors. The <strong>407 ETR</strong> provides rapid toll-route access to Vaughan, Richmond Hill, and Markham to the north and east, connecting to Highways 400, 404, 427, and QEW.
                </p>
                <div className="bg-muted rounded-sm p-5 mb-6">
                  <h4 className="font-sans text-sm font-semibold text-primary mb-3">Key Highway Connections</h4>
                  <ul className="font-sans text-sm text-muted-foreground space-y-2">
                    <li><strong>Highway 407 ETR:</strong> 5 min (3 km) via Mavis Road</li>
                    <li><strong>Highway 401:</strong> 10 min (9 km) via Mavis Road</li>
                    <li><strong>Highway 410:</strong> 15 min via 407/401 interchange</li>
                    <li><strong>QEW:</strong> 20 min via 407 ETR west</li>
                  </ul>
                </div>
                <p className="font-serif text-base text-foreground leading-relaxed">
                  <strong>Toronto Pearson International Airport</strong> is just 18 minutes away (15 km) via Highway 407, ideal for frequent travellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-secondary-foreground mb-4">
              Experience the Location
            </h2>
            <p className="font-sans text-base text-secondary-foreground/80 mb-6">
              Register to receive more information about Rollingwood Townhomes and schedule a visit to explore the neighbourhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                <Link href="/register">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary font-sans">
                <Link href="/neighbourhood">
                  Explore Neighbourhood
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
