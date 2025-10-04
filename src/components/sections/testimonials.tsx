"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The Intelligent Clash Filtering saved our VDC team about 75% of their review time. We went from days to hours. It's been a massive productivity boost.",
    author: "VP of Engineering",
    company: "Top 50 ENR MEP Firm",
    initials: "VP",
    metric: "75% reduction in clash review"
  },
  {
    quote: "Ixidore automated our RFI and submittal process. Their understanding of MEP documentation is unmatched. We're saving over $100k per project on coordination costs alone.",
    author: "Director of Operations",
    company: "National MEP Contractor",
    initials: "DO",
    metric: "$100k+ saved per project"
  },
  {
    quote: "We saw a 3x ROI in under 6 months. Their focus on 'easy wins' gave us immediate value and built the trust we needed to explore more advanced AI applications.",
    author: "Principal Partner",
    company: "Regional MEP Consulting Firm",
    initials: "PP",
    metric: "3x ROI in 6 months"
  }
];

export default function TestimonialsSection() {
  const testimonialImage = PlaceHolderImages.find(p => p.id === 'testimonial-avatar');

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
    <section id="testimonials" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary">Real-World Results</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground font-heading max-w-3xl">
            Trusted by Leading MEP Firms
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We deliver tangible results that save money, reduce risk, and accelerate project timelines. Here's what our clients are saying.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-6xl grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border hover:border-primary/50 group">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>
                  
                  <blockquote className="text-base leading-relaxed text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">{testimonial.metric}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">90%</div>
                  <div className="text-sm text-muted-foreground">Trivial Task Elimination</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">73%</div>
                  <div className="text-sm text-muted-foreground">Doc Analysis Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">88%</div>
                  <div className="text-sm text-muted-foreground">Faster Compliance</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">25%</div>
                  <div className="text-sm text-muted-foreground">Faster Delivery</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
