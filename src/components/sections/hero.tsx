"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HardHat, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-grid-pattern-light opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <HardHat className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Exclusively for the MEP Industry</span>
          </motion.div>

          <div className="max-w-4xl space-y-6">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight"
              variants={itemVariants}
            >
              Stop Wasting Engineering Hours on Manual Tasks.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Automate Your MEP Workflows.
              </span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed"
              variants={itemVariants}
            >
              Ixidore is the only AI consulting firm dedicated to MEP engineering. We solve your most tedious coordination challenges so your team can get back to what they do best—engineering.
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 md:gap-6 pt-2"
            >
              {[
                'Reduce RFI Cycles by 60%',
                'Eliminate 90% of False Clashes',
                'Accelerate Project Delivery by 25%'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Button 
              asChild 
              size="lg" 
              className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105 px-8"
            >
              <Link href="#assessment">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="font-bold rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105 px-8 border-2 bg-white"
            >
              <Link href="#solution">
                See Our Easy-Win Solutions
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
