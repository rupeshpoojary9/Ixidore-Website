import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Bot, Zap, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const services = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'AI Readiness Audit',
    description: 'A deep dive into your current processes to identify the highest-impact automation opportunities and create a clear implementation roadmap.',
    outcomes: ['Workflow Analysis', 'AI Opportunity Map', 'Document Automation Plan'],
  },
  {
    icon: <Bot className="h-8 w-8 text-accent" />,
    title: 'Quick-Win AI Implementation',
    description: 'We build and deploy targeted AI solutions for 1-3 critical workflows to deliver immediate value and measurable ROI.',
    outcomes: ['Appointment Automation', 'Intelligent Chatbots', 'Workflow Optimization'],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: 'Ongoing AI Optimization',
    description: 'A retainer service to monitor, tweak, and expand your AI systems for sustained peak performance and continuous improvement.',
    outcomes: ['Performance Monitoring', 'System Enhancements', 'Scalable AI Infrastructure'],
  },
];

const roiData = [
  { task: 'Manual Data Entry', hoursBefore: 15, hoursAfter: 2, savings: '87%' },
  { task: 'Client Onboarding', hoursBefore: 8, hoursAfter: 1, savings: '88%' },
  { task: 'Report Generation', hoursBefore: 10, hoursAfter: 0.5, savings: '95%' },
  { task: 'Answering FAQs', hoursBefore: 20, hoursAfter: 3, savings: '85%' },
];

export default function SolutionSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading">
            Your Path to AI-Powered Efficiency
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We offer results-focused AI consulting for small businesses. No jargon, just tangible outcomes and workflow automation.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col bg-card shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                </div>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2 font-heading">Example Outcomes:</h4>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
             <h3 className="text-2xl font-bold tracking-tight mb-4 text-primary-dark font-heading">Example ROI: Time Saved Per Month</h3>
             <Card className="max-w-4xl mx-auto bg-card shadow-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Task</TableHead>
                      <TableHead className="text-center font-semibold">Hours/Month (Before AI)</TableHead>
                      <TableHead className="text-center font-semibold">Hours/Month (After AI)</TableHead>
                      <TableHead className="text-right font-semibold text-accent">Time Saved</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roiData.map((row) => (
                      <TableRow key={row.task}>
                        <TableCell>{row.task}</TableCell>
                        <TableCell className="text-center">{row.hoursBefore} hrs</TableCell>
                        <TableCell className="text-center">{row.hoursAfter} hrs</TableCell>
                        <TableCell className="text-right font-bold text-accent">{row.savings}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
             </Card>
        </div>
        <div className="mt-12 text-center">
            <p className="text-lg font-semibold bg-accent/10 text-accent-foreground/80 border border-accent/20 rounded-lg p-4 max-w-3xl mx-auto">
              Final pricing is customized per business. Book a free call for a personalized quote.
            </p>
        </div>
      </div>
    </section>
  );
}
