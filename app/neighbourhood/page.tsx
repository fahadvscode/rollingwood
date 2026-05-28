import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, ShoppingBag, Trees, Utensils, Heart, Users, Car, Train, Plane, Building2, MapPin } from "lucide-react"
import { images } from "@/lib/images"

export const metadata = {
  title: "Neighbourhood — Fletcher's Creek South, Brampton | Schools, Parks, Transit, Amenities",
  description: "Discover Fletcher's Creek South neighbourhood in Brampton. Near Sheridan College Davis Campus, top-rated schools (Ray Lawson PS, Notre Dame CSS), parks, Heartland Town Centre shopping, GO Transit. Perfect for multigenerational families.",
}

// Detailed school information from research
const publicSchools = [
  { 
    name: "Ray Lawson Public School", 
    type: "Elementary (K-6)", 
    board: "Peel District School Board",
    distance: "1.2 km",
    description: "Highly-rated elementary school serving the immediate neighbourhood"
  },
  { 
    name: "Kingswood Drive Public School", 
    type: "Elementary", 
    board: "Peel District School Board",
    distance: "2.5 km",
    description: "Established community school with strong academic programs"
  },
  { 
    name: "West Credit Secondary School", 
    type: "Secondary (9-12)", 
    board: "Peel District School Board",
    distance: "4.5 km",
    description: "Comprehensive secondary school with diverse programs"
  },
  { 
    name: "Meadowvale Secondary School", 
    type: "Secondary (9-12)", 
    board: "Peel District School Board",
    distance: "5 km",
    description: "Well-established secondary school in nearby Mississauga"
  },
]

const catholicSchools = [
  { 
    name: "Our Lady of Peace Catholic Elementary", 
    type: "Elementary", 
    board: "Dufferin-Peel Catholic DSB",
    address: "15 Fincham Avenue, Brampton",
    distance: "3 km"
  },
  { 
    name: "St. Edmund Catholic Elementary", 
    type: "Elementary", 
    board: "Dufferin-Peel Catholic DSB",
    address: "1250 Melton Drive",
    distance: "4 km"
  },
  { 
    name: "St. Richard Catholic Elementary", 
    type: "Elementary", 
    board: "Dufferin-Peel Catholic DSB",
    distance: "3.5 km"
  },
  { 
    name: "Notre Dame Catholic Secondary School", 
    type: "Secondary", 
    board: "Dufferin-Peel Catholic DSB",
    distance: "5 km",
    description: "Large Catholic secondary school serving southwest Brampton"
  },
]

const postSecondary = [
  { 
    name: "Sheridan College Davis Campus", 
    type: "College", 
    distance: "1.6 km (3 min drive)",
    programs: "Business, Technology, Health Sciences",
    description: "Major post-secondary institution with over 10,000 students, creating strong rental demand"
  },
]

const privateSchools = [
  { 
    name: "John Knox Christian School", 
    type: "Private (K-8)", 
    distance: "4 km",
    description: "Christian-based private education"
  },
  { 
    name: "Khalsa Community School", 
    type: "Private", 
    distance: "5 km",
    description: "Sikh-faith community school"
  },
]

// Highway and transit information
const highways = [
  { 
    name: "Highway 407 ETR", 
    access: "Mavis Road On-Ramp",
    distance: "3 km (5 min)",
    description: "Express toll route connecting to Highway 400, 404, 427, and QEW"
  },
  { 
    name: "Highway 401", 
    access: "Mavis Road Interchange",
    distance: "9 km (10 min)",
    description: "Canada's busiest highway, direct access to Toronto and beyond"
  },
  { 
    name: "Highway 410", 
    access: "Via Highway 407/401",
    distance: "12 km (15 min)",
    description: "North-south corridor through Brampton"
  },
]

const transitOptions = [
  { 
    name: "Meadowvale GO Station", 
    type: "GO Transit (Milton Line)",
    distance: "7 km (10 min)",
    description: "Direct train service to Union Station, Toronto"
  },
  { 
    name: "Lisgar GO Station", 
    type: "GO Transit (Milton Line)",
    distance: "8 km (12 min)",
    description: "Alternative GO station with bus connections"
  },
  { 
    name: "Brampton Transit", 
    type: "Local Bus",
    routes: "Routes 3, 4, 18, 52, 54, 61, 66",
    description: "Multiple bus routes serve Sheridan College and surrounding area"
  },
  { 
    name: "Züm 511 Steeles", 
    type: "Bus Rapid Transit",
    description: "Express bus service along Steeles Avenue corridor"
  },
]

// Healthcare facilities
const healthcare = [
  { 
    name: "Mavis Walk-In Clinic & Family Practice", 
    type: "Walk-In Clinic",
    address: "Mavis Rd & Ray Lawson Blvd",
    distance: "0.5 km",
    description: "Immediate neighbourhood medical services"
  },
  { 
    name: "Brampton Civic Hospital", 
    type: "Full-Service Hospital",
    address: "2100 Bovaird Drive East",
    distance: "12 km (15 min)",
    description: "Major hospital with emergency department, part of William Osler Health System"
  },
  { 
    name: "Peel Memorial Centre", 
    type: "Urgent Care & Outpatient",
    address: "20 Lynch Street, Brampton",
    distance: "10 km (12 min)",
    description: "Urgent care centre (no referral needed), outpatient services"
  },
  { 
    name: "Pulse Urgent Care Centre", 
    type: "Urgent Care",
    distance: "8 km",
    description: "Walk-in urgent care for non-emergency medical needs"
  },
]

// Shopping centres with details
const shoppingCentres = [
  { 
    name: "Heartland Town Centre", 
    distance: "9 km (12 min)",
    stores: "180+ stores including Walmart, Costco, Canadian Tire, Winners, Home Depot",
    dining: "The Keg, Milestones, Tandoori Flame, East Side Marios, Famoso",
    description: "GTA's largest outdoor power centre at Mavis & Britannia"
  },
  { 
    name: "Shoppers World Brampton", 
    distance: "8 km (10 min)",
    description: "Community shopping centre with grocery and retail"
  },
  { 
    name: "Bramalea City Centre", 
    distance: "10 km (15 min)",
    stores: "370+ stores, Hudson's Bay, SportChek, H&M",
    description: "Brampton's largest enclosed shopping mall"
  },
  { 
    name: "Square One Shopping Centre", 
    distance: "15 km (20 min)",
    stores: "360+ stores, Holt Renfrew, Simons, Apple Store",
    description: "Ontario's largest shopping centre in Mississauga"
  },
]

// Parks and recreation
const parksRecreation = [
  { 
    name: "Rollingwood Park", 
    type: "Neighbourhood Park",
    address: "128 Rollingwood Drive",
    features: "Walking paths, green space, playground"
  },
  { 
    name: "Fletcher's Creek Greenway", 
    type: "Trail System",
    features: "Multi-use trails along Fletcher's Creek, cycling, walking"
  },
  { 
    name: "Meadowvale Conservation Area", 
    type: "Conservation Area",
    distance: "6 km",
    features: "Nature trails, fishing, picnic areas"
  },
  { 
    name: "Sheridan Woodlands Park", 
    type: "Natural Area",
    features: "Wooded trails, nature observation"
  },
  { 
    name: "Heart Lake Conservation Area", 
    type: "Conservation Area",
    distance: "15 km",
    features: "9+ km of hiking trails, swimming, fishing, camping"
  },
  { 
    name: "Claireville Conservation Area", 
    type: "Conservation Area",
    distance: "12 km",
    features: "Extensive hiking and mountain biking trails"
  },
]

const recreationCentres = [
  { 
    name: "Chris Gibson Recreation Centre", 
    distance: "5 km",
    features: "Pool, fitness centre, gymnasium, programs"
  },
  { 
    name: "Cassie Campbell Community Centre", 
    distance: "8 km",
    features: "Twin pad arena, fitness centre, meeting rooms"
  },
]

export default function NeighbourhoodPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.home.two}
              alt="Rollingwood neighbourhood"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              A Place Where Families Thrive
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Fletcher&apos;s Creek South
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 max-w-3xl">
              A vibrant, family-oriented neighbourhood in southwest Brampton with excellent schools, easy highway access, top healthcare, and diverse community amenities.
            </p>
          </div>
        </section>

        {/* About the Neighbourhood */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              About Fletcher&apos;s Creek South
            </h2>
            <div className="space-y-6">
              <p className="font-serif text-lg text-foreground leading-relaxed">
                Fletcher&apos;s Creek South is a master-planned neighbourhood in southwest Brampton, Ontario, known for its family-friendly atmosphere, diverse community, and excellent access to amenities. The neighbourhood takes its name from Fletcher&apos;s Creek, which runs through the area and provides scenic trails and green spaces.
              </p>
              <p className="font-serif text-lg text-foreground leading-relaxed">
                The community is particularly well-suited for multigenerational families. The neighbourhood has a significant South Asian population, with easy access to cultural amenities, places of worship, and specialty grocery stores. This makes it an ideal location for families seeking a supportive community environment.
              </p>
              <p className="font-serif text-lg text-foreground leading-relaxed">
                With Sheridan College Davis Campus just 3 minutes away and Highway 407 only 5 minutes from the site, residents enjoy both educational opportunities and excellent commuter connectivity to the entire GTA.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard label="Walk Score" value="62" description="Somewhat Walkable" />
              <StatCard label="To Highway 407" value="5 min" description="3 km via Mavis Rd" />
              <StatCard label="To Sheridan College" value="3 min" description="1.6 km" />
              <StatCard label="To Pearson Airport" value="18 min" description="15 km" />
            </div>
          </div>
        </section>

        {/* Schools Section - Comprehensive */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                Education
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary">
                Schools Near Rollingwood Townhomes
              </h2>
              <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto">
                Access to quality education at all levels, from elementary through post-secondary. Both Peel District School Board and Dufferin-Peel Catholic District School Board serve this area.
              </p>
            </div>

            {/* Post-Secondary - Featured */}
            <div className="mb-12">
              <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                Post-Secondary Education
              </h3>
              <div className="bg-primary text-primary-foreground rounded-sm p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                      <h4 className="font-serif text-2xl font-bold">Sheridan College Davis Campus</h4>
                    </div>
                    <p className="font-sans text-sm text-primary-foreground/80 mb-2">
                      1.6 km away (3 minute drive) | 10,000+ students
                    </p>
                    <p className="font-sans text-sm text-primary-foreground/70">
                      Programs in Business, Technology, and Health Sciences. Creates strong rental demand for investor buyers.
                    </p>
                  </div>
                  <div className="bg-secondary text-secondary-foreground px-6 py-4 rounded-sm text-center">
                    <p className="font-sans text-3xl font-bold">3 min</p>
                    <p className="font-sans text-xs uppercase tracking-wider">Drive Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Schools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                  Peel District School Board (Public)
                </h3>
                <div className="bg-card border border-border rounded-sm overflow-hidden">
                  <div className="divide-y divide-border">
                    {publicSchools.map((school) => (
                      <div key={school.name} className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-sans text-sm font-semibold text-foreground">{school.name}</h4>
                          <span className="font-sans text-xs text-secondary font-semibold">{school.distance}</span>
                        </div>
                        <p className="font-sans text-xs text-muted-foreground mb-1">{school.type}</p>
                        {school.description && (
                          <p className="font-sans text-xs text-muted-foreground">{school.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                  Dufferin-Peel Catholic District School Board
                </h3>
                <div className="bg-card border border-border rounded-sm overflow-hidden">
                  <div className="divide-y divide-border">
                    {catholicSchools.map((school) => (
                      <div key={school.name} className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-sans text-sm font-semibold text-foreground">{school.name}</h4>
                          <span className="font-sans text-xs text-secondary font-semibold">{school.distance}</span>
                        </div>
                        <p className="font-sans text-xs text-muted-foreground mb-1">{school.type}</p>
                        {school.address && (
                          <p className="font-sans text-xs text-muted-foreground">{school.address}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Private Schools */}
            <div>
              <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                Private & Faith-Based Schools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {privateSchools.map((school) => (
                  <div key={school.name} className="bg-card border border-border rounded-sm p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-sans text-sm font-semibold text-foreground">{school.name}</h4>
                      <span className="font-sans text-xs text-secondary font-semibold">{school.distance}</span>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground">{school.type} — {school.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Highways & Transit */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                Transportation
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary-foreground">
                Highway Access & Public Transit
              </h2>
              <p className="mt-4 font-sans text-base text-primary-foreground/70 max-w-2xl mx-auto">
                One of the most commute-friendly locations in southwest Brampton, with quick access to major highways and GO Transit.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Highways */}
              <div>
                <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                  Highway Access
                </h3>
                <div className="space-y-4">
                  {highways.map((highway) => (
                    <div key={highway.name} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm p-5">
                      <div className="flex items-start gap-4">
                        <Car className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-serif text-lg font-bold text-primary-foreground">{highway.name}</h4>
                            <span className="font-sans text-sm text-secondary font-semibold">{highway.distance}</span>
                          </div>
                          <p className="font-sans text-xs text-primary-foreground/70 mb-1">
                            Access via: {highway.access}
                          </p>
                          <p className="font-sans text-sm text-primary-foreground/80">
                            {highway.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit */}
              <div>
                <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                  Public Transit
                </h3>
                <div className="space-y-4">
                  {transitOptions.map((transit) => (
                    <div key={transit.name} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm p-5">
                      <div className="flex items-start gap-4">
                        <Train className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-serif text-lg font-bold text-primary-foreground">{transit.name}</h4>
                            {transit.distance && (
                              <span className="font-sans text-sm text-secondary font-semibold">{transit.distance}</span>
                            )}
                          </div>
                          <p className="font-sans text-xs text-primary-foreground/70 mb-1">
                            {transit.type}
                            {transit.routes && ` — ${transit.routes}`}
                          </p>
                          <p className="font-sans text-sm text-primary-foreground/80">
                            {transit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Airport */}
            <div className="mt-8 bg-secondary/20 border border-secondary/30 rounded-sm p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Plane className="h-8 w-8 text-secondary" />
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary-foreground">Toronto Pearson International Airport</h4>
                    <p className="font-sans text-sm text-primary-foreground/70">Canada&apos;s largest airport, international and domestic flights</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="font-sans text-3xl font-bold text-secondary">18 min</p>
                  <p className="font-sans text-xs text-primary-foreground/70">15 km via Highway 407</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                Healthcare
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary">
                Medical Facilities & Hospitals
              </h2>
              <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto">
                Access to comprehensive healthcare services, from neighbourhood walk-in clinics to full-service hospitals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthcare.map((facility) => (
                <div key={facility.name} className="bg-card border border-border rounded-sm p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif text-lg font-bold text-primary">{facility.name}</h4>
                        <span className="font-sans text-xs text-secondary font-semibold">{facility.distance}</span>
                      </div>
                      <p className="font-sans text-xs text-muted-foreground mb-2">{facility.type}</p>
                      {facility.address && (
                        <p className="font-sans text-xs text-muted-foreground mb-2">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          {facility.address}
                        </p>
                      )}
                      <p className="font-sans text-sm text-foreground">{facility.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shopping */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                Shopping & Retail
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary">
                Major Shopping Destinations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shoppingCentres.map((centre) => (
                <div key={centre.name} className="bg-card border border-border rounded-sm p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif text-xl font-bold text-primary">{centre.name}</h4>
                    <span className="font-sans text-sm text-secondary font-semibold">{centre.distance}</span>
                  </div>
                  <p className="font-sans text-sm text-foreground mb-3">{centre.description}</p>
                  {centre.stores && (
                    <div className="mb-2">
                      <p className="font-sans text-xs text-muted-foreground">
                        <ShoppingBag className="h-3 w-3 inline mr-1" />
                        <strong>Stores:</strong> {centre.stores}
                      </p>
                    </div>
                  )}
                  {centre.dining && (
                    <div>
                      <p className="font-sans text-xs text-muted-foreground">
                        <Utensils className="h-3 w-3 inline mr-1" />
                        <strong>Dining:</strong> {centre.dining}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parks & Recreation */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                Recreation
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-primary">
                Parks, Trails & Recreation Centres
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Parks */}
              <div>
                <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                  Parks & Natural Areas
                </h3>
                <div className="space-y-4">
                  {parksRecreation.map((park) => (
                    <div key={park.name} className="bg-card border border-border rounded-sm p-4">
                      <div className="flex items-start gap-3">
                        <Trees className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-sans text-sm font-semibold text-foreground">{park.name}</h4>
                            {park.distance && (
                              <span className="font-sans text-xs text-muted-foreground">{park.distance}</span>
                            )}
                          </div>
                          <p className="font-sans text-xs text-secondary mb-1">{park.type}</p>
                          <p className="font-sans text-xs text-muted-foreground">{park.features}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recreation Centres */}
              <div>
                <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-6">
                  Recreation Centres
                </h3>
                <div className="space-y-4">
                  {recreationCentres.map((centre) => (
                    <div key={centre.name} className="bg-card border border-border rounded-sm p-4">
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-sans text-sm font-semibold text-foreground">{centre.name}</h4>
                            <span className="font-sans text-xs text-muted-foreground">{centre.distance}</span>
                          </div>
                          <p className="font-sans text-xs text-muted-foreground">{centre.features}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Community Features */}
                <div className="mt-8 bg-muted rounded-sm p-6">
                  <h3 className="font-sans text-sm font-semibold tracking-wider text-secondary uppercase mb-4">
                    Community Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                      <span className="font-sans text-sm text-foreground">Strong South Asian community with cultural amenities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Utensils className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                      <span className="font-sans text-sm text-foreground">Diverse dining options including South Asian cuisine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShoppingBag className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                      <span className="font-sans text-sm text-foreground">Specialty grocery stores and ethnic markets nearby</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building2 className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                      <span className="font-sans text-sm text-foreground">Places of worship for various faiths within the community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-secondary-foreground mb-4">
              Ready to Call Fletcher&apos;s Creek South Home?
            </h2>
            <p className="font-sans text-base text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Register now to receive floor plans, pricing, and updates about Rollingwood Townhomes. Be first to access VIP pricing when sales launch.
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

function StatCard({ label, value, description }: { label: string; value: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-sm p-6 text-center">
      <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-2">{label}</p>
      <p className="font-serif text-3xl font-bold text-primary mb-1">{value}</p>
      <p className="font-sans text-xs text-muted-foreground">{description}</p>
    </div>
  )
}
