"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  function onSubmit(values: FormData) {
    const subject = "New AI Opportunity Assessment Lead";
    const body = `
      Name: ${values.name}
      Email: ${values.email}
      Phone: ${values.phone || 'N/A'}
      
      Business Description: ${values.businessDescription}
      Industry: ${values.industry}
      Key Pain Points: ${values.keyPainPoints}
      Business Goals: ${values.businessGoals}
      Current Tech Stack: ${values.currentTechStack || 'N/A'}
    `.trim().replace(/^ +/gm, '');

    window.location.href = `mailto:poojary.rupesh12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="assessment" className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading">
            Get Your Free AI Opportunity Assessment
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Fill out this form to send us your details. We'll get back to you to schedule your free assessment.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Card className="bg-card shadow-md">
            <CardHeader>
              <CardTitle className="font-heading">Business Information</CardTitle>
              <CardDescription>Your answers will help us prepare for our conversation.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} className="bg-white" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input placeholder="you@company.com" {...field} className="bg-white" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                   <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl><Input placeholder="(123) 456-7890" {...field} className="bg-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="businessDescription" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Description</FormLabel>
                      <FormControl><Textarea placeholder="Describe your business and its primary operations..." {...field} className="bg-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="industry" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <FormControl><Input placeholder="e.g., Healthcare, Construction, Legal" {...field} className="bg-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="keyPainPoints" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Pain Points</FormLabel>
                      <FormControl><Textarea placeholder="What are the biggest challenges or frustrations in your daily operations?" {...field} className="bg-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="businessGoals" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Goals</FormLabel>
                      <FormControl><Textarea placeholder="What are you trying to achieve in the next 6-12 months?" {...field} className="bg-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="currentTechStack" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Technology (Optional)</FormLabel>
                      <FormControl><Input placeholder="e.g., Quickbooks, Salesforce, Google Workspace" {...field} className="bg-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full shadow-md transition-all hover:shadow-lg">
                    Send Your Information
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
