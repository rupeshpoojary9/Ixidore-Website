
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { Poppins, PT_Sans } from 'next/font/google';

const fontPoppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
});
const fontPTSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const title = 'Ixidore | AI Consulting for the MEP Industry';
const description = 'We help MEP engineering firms and contractors eliminate manual work with tailored AI solutions. Reduce coordination costs, accelerate timelines, and increase profitability.';
const url = 'https://ixidore.com'; // Replace with your actual domain

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['MEP AI consulting', 'BIM automation', 'Revit AI', 'Navisworks automation', 'MEP engineering AI', 'construction AI'],
  authors: [{ name: 'Ixidore' }],
  metadataBase: new URL(url),
  openGraph: {
    type: 'website',
    url: url,
    title: title,
    description: description,
    siteName: 'Ixidore',
    images: [{
      url: '/og-image-mep.png', // It's a good practice to have a specific Open Graph image
      width: 1200,
      height: 630,
      alt: 'Ixidore AI for MEP Industry',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/og-image-mep.png'],
    creator: '@ixidore', // Replace with your Twitter handle
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ixidore",
    "url": url,
    "logo": `${url}/logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nationwide",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-555-5555", // Add your phone number
      "contactType": "Sales",
      "email": "contact@ixidore.com"
    },
    "sameAs": [
      "https://twitter.com/ixidore",
      "https://linkedin.com/company/ixidore"
    ],
    "serviceType": "AI Consulting",
    "areaServed": "United States"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-XXXX-Y', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
        {/* End Google Analytics */}
      </head>
      <body className={`${fontPoppins.variable} ${fontPTSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
