"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Repeat, AlertTriangle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: <Clock className="h-10 w-10 text-accent" />,
    title: 'Wasted Hours',
    description: 'Are you or your team bogged down by manual tasks that steal focus from core business activities?',
    stat: '20+ hrs/week',
    statLabel: 'lost to busywork'
  },
  {
    icon: <Repeat className="h-10 w-10 text-accent" />,
    title: 'Repetitive Workflows',
    description: 'Data entry, report generation, and routine client communication drain energy and invite burnout.',
    stat: '85%',
    statLabel: 'of tasks repeatable'
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-accent" />,
    title: 'Costly Human Error',
    description: 'Mistakes in manual processes can lead to financial loss, compliance risks, and a damaged reputation.',
    stat: '90%',
    statLabel: 'errors preventable'
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Slow Client Response',
    description: 'In a competitive market, delays in responding to inquiries and support requests mean lost business.',
    stat: '60%',
    statLabel: 'of leads expect instant replies'
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
    <section id="problem" className="w-full py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">Sound Familiar?</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading max-w-3xl">
            Is Your Business Facing These Bottlenecks?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Operational friction silently drains your resources and hinders growth. We target these common pain points to unlock your business's true potential.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point, index) => (
            <motion.div key={point.title} variants={itemVariants}>
              <Card className="h-full text-center bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-accent/50 group relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="items-center relative z-10">
                  <div className="mb-4 p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {point.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold font-heading group-hover:text-accent transition-colors">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                  
                  {/* Stat badge */}
                  <div className="pt-2 border-t">
                    <div className="text-2xl font-bold text-accent">
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

        {/* Call-out box */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
                These challenges aren't just frustrating—they're expensive.
              </p>
              <p className="text-muted-foreground">
                The average small business loses <span className="font-bold text-accent">$10,000+ annually</span> to inefficient processes. 
                Let's change that.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}