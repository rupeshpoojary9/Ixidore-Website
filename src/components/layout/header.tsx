"use client"

import * as React from "react"
import Link from "next/link"
import { Bot, Menu, Briefcase, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-heading">
              Ixidore
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="#problem"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            The Problem
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Services
          </Link>
          <Link
            href="#why-us"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Why Us
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild className="hidden font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md transition-all hover:shadow-lg md:flex">
            <Link href="#assessment">Schedule a Discovery Call</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
               <Button
                variant="ghost"
                className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                 <div className="flex flex-col gap-4">
                  <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setOpen(false)}>
                    <Bot className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg font-heading">
                      Ixidore
                    </span>
                  </Link>
                  <nav className="grid gap-2">
                     <Link
                      href="#problem"
                      onClick={() => setOpen(false)}
                      className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent/80 hover:text-accent-foreground"
                    >
                      <Briefcase className="h-5 w-5" />
                      <span>The Problem</span>
                    </Link>
                    <Link
                      href="#services"
                      onClick={() => setOpen(false)}
                      className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent/80 hover:text-accent-foreground"
                    >
                       <Briefcase className="h-5 w-5" />
                       <span>Services</span>
                    </Link>
                     <Link
                      href="#why-us"
                      onClick={() => setOpen(false)}
                      className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent/80 hover:text-accent-foreground"
                    >
                      <Briefcase className="h-5 w-5" />
                      <span>Why Us</span>
                    </Link>
                  </nav>
                   <Button asChild className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md transition-all hover:shadow-lg">
                      <Link href="#assessment" onClick={() => setOpen(false)}>Schedule a Discovery Call <Phone className="ml-2 h-4 w-4" /></Link>
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
