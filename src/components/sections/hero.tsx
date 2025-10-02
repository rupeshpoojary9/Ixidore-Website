"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center space-y-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl space-y-4">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tighter text-primary-dark sm:text-5xl md:text-6xl lg:text-7xl font-heading"
              variants={itemVariants}
            >
              Stop Drowning in Busywork. Start Scaling Your Business with AI.
            </motion.h1>
            <motion.p 
              className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              We provide expert AI consulting for small businesses, implementing custom automation to solve your biggest operational headaches.
            </motion.p>
          </div>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105">
              <Link href="#assessment">Get Your Free AI Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
