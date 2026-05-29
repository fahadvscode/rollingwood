import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { images } from '@/lib/images'
import { siteUrl } from '@/lib/site'
import { RegisterCtaBar } from '@/components/register-cta-bar'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "28x28" },
      { url: "/icon.png", sizes: "28x28", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  title: 'Rollingwood Townhomes — New Freehold Townhomes by Regency Property in Brampton',
  description: 'Rollingwood Townhomes is a new pre-construction freehold townhouse community by Regency Property at 150 Rollingwood Drive, Brampton. 118 townhomes in 6 models from $600,000s. Classic 3-storey (1,325-1,403 sq ft) and Signature 4-storey (1,861-1,971 sq ft) collections. Occupancy 2027-2028.',
  keywords: ['Rollingwood Townhomes', 'Brampton townhomes', 'pre-construction townhomes Brampton', 'Regency Property', 'freehold townhomes Brampton', 'new townhomes Brampton 2027', 'Fletcher Creek South townhomes'],
  authors: [{ name: 'Rollingwood Townhomes' }],
  creator: 'Rollingwood Townhomes',
  publisher: 'Rollingwood Townhomes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Rollingwood Townhomes',
    title: 'Rollingwood Townhomes — New Freehold Townhomes by Regency Property in Brampton',
    description: '118 new freehold townhomes at 150 Rollingwood Drive, Brampton. 6 models from $600,000s. 3-storey Classic & 4-storey Signature collections. Occupancy 2027-2028.',
    images: [
      {
        url: images.og,
        width: 1200,
        height: 630,
        alt: 'Rollingwood Townhomes - New Freehold Townhomes in Brampton by Regency Property',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rollingwood Townhomes — New Freehold Townhomes in Brampton',
    description: '118 new freehold townhomes from $600,000s. 6 models in Classic & Signature collections. Occupancy 2027-2028.',
    images: [images.og],
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Brampton',
    'geo.position': '43.6663;-79.7375',
    'ICBM': '43.6663, -79.7375',
  },
}

export const viewport: Viewport = {
  themeColor: '#313C38',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Schema for Real Estate Development
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateDevelopment",
  "name": "Rollingwood Townhomes",
  "alternateName": "Rolling Woods Townhomes",
  "description": "118 new pre-construction freehold townhomes by Regency Property at 150 Rollingwood Drive, Brampton. 6 models from $600,000s across Classic 3-storey and Signature 4-storey collections.",
  "url": siteUrl,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "150 Rollingwood Drive",
    "addressLocality": "Brampton",
    "addressRegion": "ON",
    "postalCode": "L6Y 5J6",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6663,
    "longitude": -79.7375
  },
  "developer": {
    "@type": "Organization",
    "name": "Regency Property",
    "alternateName": ["Regency Development", "Regency Developments"]
  },
  "numberOfUnits": 118,
  "propertyType": "Townhouse",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "600000",
      "priceCurrency": "CAD",
      "valueAddedTaxIncluded": false
    },
    "availability": "https://schema.org/PreOrder"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} font-serif antialiased`}>
        {children}
        <RegisterCtaBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
