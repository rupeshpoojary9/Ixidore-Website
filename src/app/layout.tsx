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

export const metadata: Metadata = {
  title: 'AI Solutions for Small Business | Automate & Grow with Ixidore',
  description: 'AI consulting for small businesses. We help you automate workflows, cut costs, and optimize processes with custom AI solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontPoppins.variable} ${fontPTSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
