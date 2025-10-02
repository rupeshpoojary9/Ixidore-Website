"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, ExternalLink } from 'lucide-react';
import Logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30" />
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-8">
          
          {/* Company Info - Spans 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <Image 
                src={Logo}
                alt="Ixidore Logo" 
                width={256} 
                height={256}
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Expert AI consulting for small businesses. We implement custom automation to solve your biggest operational challenges and drive measurable growth.
            </p>
            
            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all hover:scale-110 shadow-sm hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all hover:scale-110 shadow-sm hover:shadow-md"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all hover:scale-110 shadow-sm hover:shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4 font-heading text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <span className="text-sm text-foreground font-medium">
                    Available for consultation
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <span className="text-sm text-foreground font-medium">
                    Serving businesses nationwide
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Section - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4 font-heading text-lg">Ready to Transform?</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Get your free AI opportunity assessment and discover how we can automate your workflows.
            </p>
            <Button 
              asChild 
              className="w-full font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Link href="#assessment" className="flex items-center justify-center gap-2">
                Schedule Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <div className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/10">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-accent">No commitment required.</span> Let's discuss your unique challenges and explore how AI can help.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Ixidore. All Rights Reserved. Built with AI-powered excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              Privacy Policy
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              Terms of Service
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link 
              href="/cookies" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              Cookie Policy
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}