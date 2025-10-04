"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, MessageSquare, Package, Calculator, Activity, ArrowRight, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const solutions = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Document Intelligence & Knowledge Extraction',
    description: 'AI ingests PDFs, Word, and Excel files to extract structured data—equipment specs, clauses, sections—then answers questions instantly.',
    effort: 'Low',
    timeline: '2-4 Weeks',
    metrics: ['40-60% reduction in doc review time', 'Instant answers from thousands of pages', 'RFI drafts with source citations']
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Client Communication & Automated Reporting',
    description: 'Scheduled weekly client reports with KPIs, top risks, and insights. Meeting transcriptions auto-generate action items.',
    effort: 'Low',
    timeline: '2-3 Weeks',
    metrics: ['Hours saved per PM per week', 'Faster client status responses', 'Automated meeting summaries']
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'RFI Triage & Drafting',
    description: 'AI classifies incoming RFIs, attaches relevant docs, and produces pre-filled draft responses for engineer approval.',
    effort: 'Medium',
    timeline: '3-4 Weeks',
    metrics: ['Median RFI turnaround cut by 50%+', '70% of RFI drafts accepted with minimal edits', 'Auto-routing to correct stakeholders']
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Supplier Quote Normalization & Bid Risk Scoring',
    description: 'Upload 3 supplier quotes → get normalized comparison table + recommended supplier. Tender uploads get win-probability scores.',
    effort: 'Low',
    timeline: '2-3 Weeks',
    metrics: ['50-70% faster quote comparison', 'Data-driven supplier selection', 'Win-probability prediction for bids']
  },
  {
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: 'AI-Assisted Estimator & Bid Drafting',
    description: 'Extract quantities from Revit/IFC → generate cost estimates from historical data → auto-draft bid narrative with confidence flags.',
    effort: 'Medium-High',
    timeline: '4-6 Weeks',
    metrics: ['2-3x faster estimation turnaround', 'Reduced variance vs. actual costs', 'Competitive bid narratives in minutes']
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: 'Project Health Watcher (Early Warnings)',
    description: 'Aggregate RFIs, schedule slips, submittal delays → composite risk score per project + weekly alerts + mitigation actions.',
    effort: 'Medium',
    timeline: '3-5 Weeks',
    metrics: ['Early detection of 60%+ of issues', 'Avg delay days reduced by 30%', 'Proactive risk mitigation']
  }
];

export default function SolutionsSection() {
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
    <section id="solution" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">6 Proven Easy-Win Solutions</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground font-heading max-w-3xl">
            Start with High-Impact, Low-Disruption AI
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We deliver measurable ROI in 30-90 days by targeting your most time-consuming manual tasks first. These are our most common starting points.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border hover:border-primary/50 group">
                <CardHeader>
                  <div className="mb-3 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col justify-end mt-auto">
                  <div className="space-y-3 mb-4">
                    {service.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-3 border-t">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                      {service.timeline}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                      {service.effort} Effort
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Customization CTA */}
        <motion.div 
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3 font-heading">Your Firm Has Unique Challenges</h3>
              <p className="text-muted-foreground mb-6">
                These are our most common starting points based on analysis with 50+ MEP firms—but we customize solutions for your specific workflows and pain points.
              </p>
              <Button asChild size="lg" className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg">
                <Link href="#assessment" className="flex items-center gap-2">
                  Discuss Your Specific Challenges
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