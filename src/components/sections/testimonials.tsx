"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Ixidore transformed our operations. The workflow automation they implemented saved us over 20 hours a week and significantly reduced errors. It was a game-changer for our small team.",
    author: "Jane Doe",
    role: "CEO, Small Business Owner",
    company: "TechStart Co.",
    initials: "JD",
    metric: "20+ hours saved weekly"
  },
  {
    quote: "The ROI was incredible. Within 3 months, we saw a 40% reduction in operational costs and our team could finally focus on growth instead of repetitive tasks.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "BuildRight Construction",
    initials: "MC",
    metric: "40% cost reduction"
  },
  {
    quote: "What impressed me most was their hands-on approach. They didn't just recommend solutions—they built and implemented everything. Our client response time went from hours to minutes.",
    author: "Sarah Williams",
    role: "Practice Owner",
    company: "Williams Legal Services",
    initials: "SW",
    metric: "95% faster responses"
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
    <section id="testimonials" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Star className="h-4 w-4 text-accent fill-accent" />
            <span className="text-sm font-semibold text-accent">Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading max-w-3xl">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See what our clients are saying about the impact of our AI solutions on their operations and bottom line.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="mx-auto mt-16 max-w-6xl grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-accent/50 group relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-6 md:p-8 relative z-10">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-10 w-10 text-accent/30" />
                  </div>
                  
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-base leading-relaxed text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Metric badge */}
                  <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">{testimonial.metric}</span>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t">
                    <Avatar className="h-12 w-12 border-2 border-accent/20">
                      {index === 0 && testimonialImage && (
                        <AvatarImage 
                          src={testimonialImage.imageUrl} 
                          alt={testimonial.author} 
                          data-ai-hint={testimonialImage.imageHint} 
                        />
                      )}
                      <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats banner */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-accent/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Businesses Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">$500K+</div>
                  <div className="text-sm text-muted-foreground">Saved Annually</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}