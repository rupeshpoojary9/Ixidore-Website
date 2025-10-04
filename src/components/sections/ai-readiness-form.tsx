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
import { sendEmail } from "@/ai/flows/send-email-flow";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const formSchema = z.object({
  name: z.string().min(1, { message: "This field is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  companyName: z.string().min(1, { message: "This field is required." }),
  role: z.string().min(1, { message: "Please select your role." }),
  biggestChallenge: z.string().min(1, { message: "This field is required." }),
  primaryTools: z.string().min(1, { message: "This field is required." }),
  phone: z.string().optional(),
});

type MepEmailData = z.infer<typeof formSchema>;

export default function AIReadinessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<MepEmailData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      role: "",
      biggestChallenge: "",
      primaryTools: "",
      phone: "",
    },
  });

  async function onSubmit(values: MepEmailData) {
    setIsSubmitting(true);
    setError("");

    const emailPayload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      businessDescription: `Company: ${values.companyName}\nRole: ${values.role}`,
      industry: "MEP Engineering/Construction",
      keyPainPoints: values.biggestChallenge,
      businessGoals: "Looking to solve MEP workflow challenges with AI.",
      currentTechStack: values.primaryTools,
    };

    try {
      await sendEmail(emailPayload);
      setIsSuccess(true);
      form.reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      if (err instanceof Error) {
        setError('Something went wrong. Please try again or contact us directly at contact@ixidore.com. Error: ' + err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="assessment" className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-light opacity-5" />
      
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
            <span className="text-sm font-semibold text-accent">Free Consultation</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground font-heading max-w-3xl">
            Get Your Free MEP AI Opportunity Analysis
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
            Fill out this form to start the conversation. We'll schedule a brief, no-obligation call to discuss your firm's specific challenges and identify high-impact AI opportunities.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span><span className="font-semibold text-foreground">2 minutes</span> to complete</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            <span><span className="font-semibold text-foreground">100% confidential</span></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
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
          <Card className="bg-card shadow-2xl border hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Start Your Analysis</CardTitle>
              <CardDescription>
                This information helps us prepare for our initial conversation.
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
                    <p className="font-bold text-green-900 text-lg">Thank You!</p>
                    <p className="text-sm text-green-700 mt-1">Your request has been sent. We'll contact you shortly to schedule your consultation!</p>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@mepfirm.com" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <FormField control={form.control} name="companyName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your MEP Firm" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                     <FormField control={form.control} name="role" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Role *</FormLabel>
                         <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Principal/Partner">Principal / Partner</SelectItem>
                            <SelectItem value="Director/VP of Operations">Director / VP of Operations</SelectItem>
                            <SelectItem value="Director/VP of Engineering">Director / VP of Engineering</SelectItem>
                            <SelectItem value="Project Executive/Manager">Project Executive / Manager</SelectItem>
                             <SelectItem value="BIM/VDC Manager">BIM / VDC Manager</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="biggestChallenge" render={({ field }) => (
                    <FormItem>
                      <FormLabel>What is your single biggest operational challenge? *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., 'Too much time spent on clash detection,' or 'RFI turnaround is too slow.'" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="primaryTools" render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are your primary BIM/PM tools? *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Revit, Navisworks, Procore" {...field} className="h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="pt-4">
                    <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full shadow-lg h-14 text-base">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                      ) : (
                        <>Request My Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      By submitting, you agree to our Privacy Policy.
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
