import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.carlislelearning.com.au'),
  title: {
    default: 'Carlisle Learning | Workplace & Heavy Equipment Training | RTO 0581 Adelaide Hills SA',
    template: '%s | Carlisle Learning RTO 0581'
  },
  description: 'Registered Training Organisation (RTO 0581 Since 2003) based in Mount Barker & Murray Bridge, South Australia. Delivering White Card, Forklift LF, Boom Lift WP, Civil Excavator, Skid Steer, Austroads Traffic Management (TC/TMI), and CITB subsidised training with 100% guaranteed course delivery.',
  keywords: [
    'Carlisle Learning',
    'RTO 0581',
    'White Card Mount Barker',
    'Forklift Licence Adelaide Hills',
    'Civil Construction Training South Australia',
    'CITB Subsidies SA',
    'Austroads Traffic Management Training Adelaide',
    'Excavator Ticket SA',
    'Skid Steer Bobcat Licence',
    'Working at Heights Adelaide',
    'Confined Spaces Course SA',
    'Verification of Competency VOC Adelaide',
    'Heavy Equipment Training and Assessment P/L'
  ],
  authors: [{ name: 'Carlisle Learning & Development Pty Ltd' }],
  creator: 'Carlisle Learning',
  publisher: 'Carlisle Learning & Development Pty Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Carlisle Learning | Accredited Workplace & Heavy Equipment Training RTO 0581',
    description: 'Certified South Australian workplace training in Mount Barker. White Card, High Risk Work Licences, Civil Plant & CITB Subsidies.',
    url: 'https://www.carlislelearning.com.au',
    siteName: 'Carlisle Learning',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/heavy-equipment-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Carlisle Learning Heavy Equipment and Workplace Training'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlisle Learning | RTO 0581 Adelaide Hills & Murraylands',
    description: 'Accredited training for White Card, Forklift, Excavator, Heights & Austroads Traffic Management with CITB subsidies.'
  },
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
  icons: {
    icon: '/favicon.ico',
    apple: '/images/carlisle-badge.jpg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.carlislelearning.com.au/#organization',
        name: 'Carlisle Learning & Development Pty Ltd',
        alternateName: 'Heavy Equipment Training and Assessment P/L',
        url: 'https://www.carlislelearning.com.au',
        logo: 'https://www.carlislelearning.com.au/images/carlisle-badge.jpg',
        image: 'https://www.carlislelearning.com.au/images/heavy-equipment-hero.jpg',
        telephone: '(08) 8398 5468',
        email: 'admin@carlislelearning.com.au',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '20 Oborn Road',
          addressLocality: 'Mount Barker',
          addressRegion: 'SA',
          postalCode: '5251',
          addressCountry: 'AU'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -35.0694,
          longitude: 138.8642
        },
        description: 'Carlisle Learning is an Australian Registered Training Organisation (RTO 0581) providing certified workplace health and safety, heavy equipment plant operation, high risk licensing, and Austroads traffic management training across South Australia.',
        foundingDate: '2003',
        taxID: '30 008 165 062'
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.carlislelearning.com.au/#localbusiness',
        name: 'Carlisle Learning Centre',
        image: 'https://www.carlislelearning.com.au/images/heavy-equipment-hero.jpg',
        telephone: '(08) 8398 5468',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '20 Oborn Road',
          addressLocality: 'Mount Barker',
          addressRegion: 'SA',
          postalCode: '5251',
          addressCountry: 'AU'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '16:30'
          }
        ]
      }
    ]
  };

  return (
    <html lang="en-AU" className={`${inter.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
