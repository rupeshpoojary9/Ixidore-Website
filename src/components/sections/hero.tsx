"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';
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
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, -70, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            
            return (
              <motion.line
                key={i}
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
          >
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">5+ Years of AI Excellence</span>
          </motion.div>

          <div className="max-w-4xl space-y-6">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tighter text-primary-dark sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight"
              variants={itemVariants}
            >
              Stop Drowning in Busywork.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Start Scaling Your Business with AI.
              </span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed"
              variants={itemVariants}
            >
              We provide expert AI consulting for small businesses, implementing custom automation to solve your biggest operational headaches and free up your time for growth.
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 md:gap-6 pt-2"
            >
              {[
                'Save 20+ Hours/Week',
                'Reduce Errors by 90%',
                'Scale Without Hiring'
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
                Get Your Free AI Assessment 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="font-bold rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105 px-8 border-2"
            >
              <Link href="#services">
                See How It Works
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-3 pt-4"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Trusted by 50+ small businesses</span> to automate their workflows
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}