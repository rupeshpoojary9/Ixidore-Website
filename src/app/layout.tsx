
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

const title = 'AI Consulting for Small Business | Automate & Grow with Ixidore';
const description = 'Unlock growth with AI consulting for small businesses. Ixidore helps you automate workflows, cut costs, reduce errors, and optimize processes with tailored AI solutions that deliver ROI.';
const url = 'https://ixidore.com';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['AI consulting', 'small business automation', 'workflow optimization', 'AI solutions'],
  authors: [{ name: 'Ixidore' }],
  metadataBase: new URL(url),
  openGraph: {
    type: 'website',
    url: url,
    title: title,
    description: description,
    siteName: 'Ixidore',
    images: [{
      url: '/og-image.png', // It's a good practice to have a specific Open Graph image
      width: 1200,
      height: 630,
      alt: 'Ixidore AI Solutions for Small Business',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/og-image.png'],
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
    "@type": "Organization",
    "name": "Ixidore",
    "url": url,
    "logo": `${url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-555-5555", // Add your phone number
      "contactType": "Customer Service",
      "email": "poojary.rupesh12@gmail.com"
    },
    "sameAs": [
      "https://twitter.com/ixidore",
      "https://linkedin.com/company/ixidore"
    ],
    "description": description
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
