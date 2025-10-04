"use client";

import { Gem, Target, Wrench, Award, HardHat, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const differentiators = [
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: 'Exclusive MEP Focus',
    description: "We are the only AI consulting firm built exclusively for the MEP industry. We speak your language and understand your challenges.",
    stat: '100%',
    statLabel: 'Dedicated to MEP'
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Focus on Quick ROI',
    description: "Our 'Easy-Win' methodology delivers measurable results in 30-90 days, not 6+ months. We target high-impact problems first.",
    stat: '3-5x ROI',
    statLabel: 'Within 6 Months'
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Deep BIM Expertise',
    description: "We don't just know AI; we live in Revit, Navisworks, and Procore. Our solutions integrate seamlessly with your existing tools.",
    stat: 'Zero',
    statLabel: 'Disruption to Your Stack'
  },
];

export default function WhyChooseUsSection() {
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
    <section id="why-us" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">The Ixidore Difference</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground font-heading max-w-3xl">
            A Partner That Understands Your World
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We're not generalist tech consultants. We're MEP workflow specialists who use AI as a tool to solve your most pressing operational problems.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {differentiators.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="h-full p-8 text-center bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border hover:border-primary/50 group">
                <div className="space-y-4">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all shadow-sm">
                    {item.icon}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">
                      {item.stat}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.statLabel}
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold font-heading group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-8 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/20">
            <p className="text-xl font-semibold text-foreground mb-2">
              "We analyze your workflows first, then implement technology."
            </p>
            <p className="text-muted-foreground">
              Our consulting-first approach ensures the solutions we build solve the right problems and are adopted by your team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
