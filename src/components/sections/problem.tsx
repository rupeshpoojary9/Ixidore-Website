"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileWarning, Clock, DollarSign, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: <FileWarning className="h-10 w-10 text-primary" />,
    title: 'Document Review Bottleneck',
    description: 'Engineers spend hours manually searching through specs, drawings, and submittals to answer RFIs and prepare bids.',
    stat: '40%',
    statLabel: 'of engineering time on docs'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Slow RFI Turnaround',
    description: 'Manual RFI processing takes 3-7 days, causing project delays and frustrating clients who expect faster responses.',
    stat: '3-7 days',
    statLabel: 'average RFI response time'
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: 'Time-Consuming Estimation',
    description: 'Quote comparisons and bid preparation are manual, error-prone processes that slow down procurement and impact win rates.',
    stat: '4-5 days',
    statLabel: 'to prepare competitive bids'
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-primary" />,
    title: 'Reactive Project Management',
    description: 'Issues surface too late—schedule slips, supplier delays, and submittal bottlenecks aren\'t caught until they cost real money.',
    stat: '$70k-$290k',
    statLabel: 'lost per project to delays'
  },
];

export default function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="problem" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <AlertCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">The High Cost of Manual Work</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground font-heading max-w-3xl">
            Is Your Firm Bleeding Profit from Inefficiency?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            MEP engineering is complex enough. Manual document processing, slow RFI cycles, and reactive project management drain resources and kill margins.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point) => (
            <motion.div key={point.title} variants={itemVariants}>
              <Card className="h-full text-center bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border hover:border-primary/50 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="items-center relative z-10">
                  <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {point.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold font-heading group-hover:text-primary transition-colors">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                  
                  <div className="pt-2 border-t">
                    <div className="text-2xl font-bold text-primary">
                      {point.stat}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {point.statLabel}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Only 26% of companies get real value from AI.
              </p>
              <p className="text-muted-foreground">
                We focus on the 74% by targeting simple, high-impact problems first—starting with the manual tasks that steal your team's time every single day.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}