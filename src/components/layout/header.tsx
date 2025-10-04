"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight, HardHat } from "lucide-react"
import Logo from '@/assets/logo.png';

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? 'border-border/60 bg-background/98 backdrop-blur-md shadow-sm' 
          : 'border-transparent bg-background/80 backdrop-blur'
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center">
        {/* Logo */}
        <div className="mr-6 lg:mr-8 flex">
          <Link href="/" className="flex items-center space-x-2 group" aria-label="Ixidore Home">
            <Image 
              src={Logo}
              alt="Ixidore Logo" 
              width={300} 
              height={300}
              priority
              className="h-12 md:h-12 w-auto transition-transform group-hover:scale-105 mt-3"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-8 text-sm font-medium md:flex">
          <Link
            href="#problem"
            className="transition-colors text-foreground/70 hover:text-primary relative group"
          >
            The Problem
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#solution"
            className="transition-colors text-foreground/70 hover:text-primary relative group"
          >
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#why-us"
            className="transition-colors text-foreground/70 hover:text-primary relative group"
          >
            Why Ixidore
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#testimonials"
            className="transition-colors text-foreground/70 hover:text-primary relative group"
          >
            Results
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex flex-1 items-center justify-end gap-2 lg:gap-4">

          {/* CTA Button */}
          <Button 
            asChild 
            className="hidden font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105 md:flex"
            size="default"
          >
            <Link href="#assessment" className="flex items-center gap-2">
              <span>Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-primary/10"
                aria-label="Toggle Menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0 bg-background">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2" 
                    onClick={() => setOpen(false)}
                    aria-label="Ixidore Home"
                  >
                    <Image 
                      src={Logo}
                      alt="Ixidore Logo" 
                      width={256} 
                      height={256}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 p-6">
                  <div className="grid gap-3">
                    <Link
                      href="#problem"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg p-4 hover:bg-primary/10 transition-colors group"
                    >
                      <span className="font-medium">The Problem</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#solution"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg p-4 hover:bg-primary/10 transition-colors group"
                    >
                      <span className="font-medium">Solutions</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#why-us"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg p-4 hover:bg-primary/10 transition-colors group"
                    >
                      <span className="font-medium">Why Ixidore</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#testimonials"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg p-4 hover:bg-primary/10 transition-colors group"
                    >
                      <span className="font-medium">Results</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t space-y-4 bg-secondary/20">
                  <Button 
                    asChild 
                    className="w-full font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md"
                  >
                    <Link 
                      href="#assessment" 
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2"
                    >
                      Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
