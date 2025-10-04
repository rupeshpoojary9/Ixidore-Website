"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-8">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-2 group" aria-label="Ixidore Home">
              <Image 
                src={Logo}
                alt="Ixidore Logo" 
                width={256} 
                height={256}
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              The only AI consulting firm exclusively for the MEP industry. We help you eliminate manual work and get back to engineering.
            </p>
            
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/company/ixidore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/ixidore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-foreground mb-4 font-heading text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#problem" className="text-sm text-muted-foreground hover:text-primary transition-colors">The Problem</Link></li>
              <li><Link href="#solution" className="text-sm text-muted-foreground hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="#why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why Ixidore</Link></li>
              <li><Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Results</Link></li>
              <li><Link href="#assessment" className="text-sm text-muted-foreground hover:text-primary transition-colors">Free Consultation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
             <h3 className="font-semibold text-foreground mb-4 font-heading text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a href="mailto:contact@ixidore.com" className="text-sm text-foreground hover:text-primary transition-colors font-medium">contact@ixidore.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 bg-primary/5 p-6 rounded-lg">
            <h3 className="font-semibold text-foreground mb-4 font-heading text-lg">Ready to Automate?</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Discover your firm's AI potential. Get a free, no-obligation analysis from our MEP experts.
            </p>
            <Button 
              asChild 
              className="w-full font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md transition-all"
            >
              <Link href="#assessment" className="flex items-center justify-center gap-2">
                Book My Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Ixidore. All Rights Reserved. AI for the MEP industry.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
