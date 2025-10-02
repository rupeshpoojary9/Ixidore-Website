"use client";

import { Gem, Target, Wrench, Award, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const differentiators = [
  {
    icon: <Gem className="h-12 w-12 text-accent" />,
    title: '5+ Years of AI Experience',
    description: 'We have a proven track record of successfully implementing AI solutions that deliver real-world results.',
    stat: '50+',
    statLabel: 'Businesses Transformed'
  },
  {
    icon: <Target className="h-12 w-12 text-accent" />,
    title: 'Focus on Measurable ROI',
    description: 'Our goal is to deliver a clear return on your investment, whether through cost savings, increased revenue, or time saved.',
    stat: '85%',
    statLabel: 'Average Time Saved'
  },
  {
    icon: <Wrench className="h-12 w-12 text-accent" />,
    title: 'Hands-On Implementation',
    description: "We don't just advise; we partner with you to build, integrate, and manage your AI systems from start to finish.",
    stat: '30 Days',
    statLabel: 'Average Deployment'
  },
];

const additionalBenefits = [
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Industry Expertise',
    description: 'Experience across healthcare, legal, construction, and more'
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Rapid Implementation',
    description: 'See results in weeks, not months with our proven methodology'
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: 'Data Security',
    description: 'Enterprise-grade security and compliance built into every solution'
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
    <section id="why-us" className="w-full py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Why Ixidore?</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading max-w-3xl">
            A Partner Invested in Your Success
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We combine technical expertise with a deep understanding of small business challenges to deliver solutions that work for you.
          </p>
        </motion.div>

        {/* Main differentiators */}
        <motion.div 
          className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {differentiators.map((item, index) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="h-full p-8 text-center bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-accent/50 group relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all shadow-md group-hover:shadow-lg">
                    {item.icon}
                  </div>
                  
                  {/* Stat */}
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-accent">
                      {item.stat}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.statLabel}
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold font-heading group-hover:text-accent transition-colors">
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

        {/* Additional benefits */}
        <motion.div 
          className="mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-card to-secondary/30 shadow-lg border-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-center mb-8 font-heading">
                Plus, You Get All of This
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {additionalBenefits.map((benefit) => (
                  <div 
                    key={benefit.title}
                    className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-card/50 hover:bg-card transition-colors"
                  >
                    <div className="p-3 rounded-full bg-accent/10">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Trust statement */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-2 border-accent/20">
            <p className="text-xl font-semibold text-foreground mb-2">
              "We don't just deliver technology—we deliver results."
            </p>
            <p className="text-muted-foreground">
              Your success is our mission. We're committed to transforming your business operations and driving measurable growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}