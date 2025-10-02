import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Repeat, AlertTriangle, Users } from 'lucide-react';

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: 'Wasted Hours',
    description: 'Are you or your team bogged down by manual tasks that steal focus from core business activities?',
  },
  {
    icon: <Repeat className="h-8 w-8 text-accent" />,
    title: 'Repetitive Workflows',
    description: 'Data entry, report generation, and routine client communication drain energy and invite burnout.',
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-accent" />,
    title: 'Costly Human Error',
    description: 'Mistakes in manual processes can lead to financial loss, compliance risks, and a damaged reputation.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Slow Client Response',
    description: 'In a competitive market, delays in responding to inquiries and support requests mean lost business.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading">
            Is Your Business Facing These Bottlenecks?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Operational friction silently drains your resources and hinders growth. We target these common pain points to unlock your business's true potential through process optimization with AI.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <Card key={point.title} className="text-center bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center">
                {point.icon}
                <CardTitle className="text-xl font-semibold font-heading">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
