"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Bot, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: 'AI Readiness Audit',
    description: 'A deep dive into your current processes to identify the highest-impact automation opportunities and create a clear implementation roadmap.',
    outcomes: ['Workflow Analysis', 'AI Opportunity Map', 'Document Automation Plan'],
    badge: 'Foundation',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: 'Quick-Win AI Implementation',
    description: 'We build and deploy targeted AI solutions for 1-3 critical workflows to deliver immediate value and measurable ROI.',
    outcomes: ['Appointment Automation', 'Intelligent Chatbots', 'Workflow Optimization'],
    badge: 'Most Popular',
    badgeColor: 'bg-accent/10 text-accent border-accent/20'
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: 'Ongoing AI Optimization',
    description: 'A retainer service to monitor, tweak, and expand your AI systems for sustained peak performance and continuous improvement.',
    outcomes: ['Performance Monitoring', 'System Enhancements', 'Scalable AI Infrastructure'],
    badge: 'Growth',
    badgeColor: 'bg-green-100 text-green-700 border-green-200'
  },
];

const roiData = [
  { task: 'Manual Data Entry', hoursBefore: 15, hoursAfter: 2, savings: '87%', color: 'text-green-600' },
  { task: 'Client Onboarding', hoursBefore: 8, hoursAfter: 1, savings: '88%', color: 'text-green-600' },
  { task: 'Report Generation', hoursBefore: 10, hoursAfter: 0.5, savings: '95%', color: 'text-emerald-600' },
  { task: 'Answering FAQs', hoursBefore: 20, hoursAfter: 3, savings: '85%', color: 'text-green-600' },
];

export default function SolutionSection() {
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
    <section id="services" className="w-full py-20 md:py-32 relative overflow-hidden">
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
            <Bot className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Our Solutions</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading max-w-3xl">
            Your Path to AI-Powered Efficiency
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We offer results-focused AI consulting for small businesses. No jargon, just tangible outcomes and workflow automation.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-accent/50 group relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative z-10">
                  <div className="mb-4 p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all inline-flex w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-heading group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="pt-2 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow relative z-10">
                  <div className="space-y-3 p-4 rounded-lg bg-secondary/30">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">
                      Example Outcomes:
                    </h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Table */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-primary-dark font-heading">
              Real ROI: Time Saved Per Month
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our AI solutions transform daily operations into streamlined, automated workflows
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-card shadow-xl border-2 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-bold text-foreground">Task</TableHead>
                    <TableHead className="text-center font-bold text-foreground">Before AI</TableHead>
                    <TableHead className="text-center font-bold text-foreground">After AI</TableHead>
                    <TableHead className="text-right font-bold text-accent">Time Saved</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roiData.map((row, index) => (
                    <TableRow key={row.task} className="hover:bg-secondary/30 transition-colors">
                      <TableCell className="font-medium">{row.task}</TableCell>
                      <TableCell className="text-center">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-semibold">
                          {row.hoursBefore} hrs
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                          {row.hoursAfter} hrs
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className={`text-lg font-bold ${row.color}`}>
                          {row.savings}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </motion.div>

        {/* Pricing CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-lg">
            <CardContent className="p-8">
              <p className="text-xl font-semibold text-primary-dark mb-4">
                Custom Pricing for Your Unique Needs
              </p>
              <p className="text-muted-foreground mb-6">
                Final pricing is customized per business. Every solution is tailored to your specific workflows and goals.
              </p>
              <Button asChild size="lg" className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg">
                <Link href="#assessment" className="flex items-center gap-2">
                  Book a Free Call for Your Personalized Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}