"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Loader2, Sparkles, Clock, Shield, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "This field is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  businessDescription: z.string().min(1, { message: "This field is required." }),
  industry: z.string().min(1, { message: "This field is required." }),
  keyPainPoints: z.string().min(1, { message: "This field is required." }),
  businessGoals: z.string().min(1, { message: "This field is required." }),
  currentTechStack: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AIReadinessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessDescription: "",
      industry: "",
      keyPainPoints: "",
      currentTechStack: "",
      businessGoals: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/send-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send assessment');
      }

      setIsSuccess(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly at poojary.rupesh12@gmail.com');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="assessment" className="w-full py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
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
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Free Assessment</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading max-w-3xl">
            Get Your Free AI Opportunity Assessment
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
            Fill out this form to send us your details. We'll get back to you within 24 hours to schedule your free assessment.
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-accent" />
            <span><span className="font-semibold text-foreground">5 minutes</span> to complete</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span><span className="font-semibold text-foreground">100% confidential</span></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            <span><span className="font-semibold text-foreground">No commitment</span> required</span>
          </div>
        </motion.div>

        <motion.div 
          className="mx-auto mt-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-card shadow-2xl border-2 hover:border-accent/50 transition-all duration-300">
            <CardHeader className="space-y-3 pb-6">
              <CardTitle className="font-heading text-2xl">Business Information</CardTitle>
              <CardDescription className="text-base">
                Your answers will help us prepare a customized AI strategy for your business.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {isSuccess && (
                <motion.div 
                  className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl flex items-start gap-3 shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-2 rounded-full bg-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-green-900 text-lg">Success!</p>
                    <p className="text-sm text-green-700 mt-1">Your assessment request has been sent. We'll contact you within 24 hours!</p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div 
                  className="mb-6 p-5 bg-red-50 border-2 border-red-200 rounded-xl shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-red-700 leading-relaxed">{error}</p>
                </motion.div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Contact Information Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2">
                      <div className="h-8 w-1 bg-accent rounded-full" />
                      <h3 className="font-semibold text-lg">Contact Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="bg-white border-2 focus:border-accent transition-colors h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Email *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@company.com" 
                              {...field} 
                              className="bg-white border-2 focus:border-accent transition-colors h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(123) 456-7890" 
                            {...field} 
                            className="bg-white border-2 focus:border-accent transition-colors h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Business Information Section */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2 pb-2">
                      <div className="h-8 w-1 bg-accent rounded-full" />
                      <h3 className="font-semibold text-lg">Business Information</h3>
                    </div>
                    
                    <FormField control={form.control} name="industry" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Industry *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Healthcare, Construction, Legal" 
                            {...field} 
                            className="bg-white border-2 focus:border-accent transition-colors h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="businessDescription" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Business Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your business and its primary operations..." 
                            {...field} 
                            className="bg-white border-2 focus:border-accent transition-colors min-h-[100px] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="currentTechStack" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Current Technology</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Quickbooks, Salesforce, Google Workspace" 
                            {...field} 
                            className="bg-white border-2 focus:border-accent transition-colors h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Challenges & Goals Section */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2 pb-2">
                      <div className="h-8 w-1 bg-accent rounded-full" />
                      <h3 className="font-semibold text-lg">Challenges & Goals</h3>
                    </div>
                    
                    <FormField control={form.control} name="keyPainPoints" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Key Pain Points *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What are the biggest challenges or frustrations in your daily operations?" 
                            {...field} 
                            className="bg-white border-2 focus:border-accent transition-colors min-h-[100px] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="businessGoals" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Business Goals *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What are you trying to achieve in the next 6-12 months?" 
                            {...field} 
                            className="bg-white border-2 focus:border-accent transition-colors min-h-[100px] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] h-14 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Your Information...
                        </>
                      ) : (
                        <>
                          Get My Free Assessment
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      By submitting, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Additional trust element */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-md">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-accent">What happens next?</span> We'll review your information and schedule a 30-minute discovery call to discuss your unique challenges and how AI can help your business grow.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}