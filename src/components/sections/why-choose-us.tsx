import { Gem, Target, Wrench } from 'lucide-react';

const differentiators = [
  {
    icon: <Gem className="h-10 w-10 text-accent" />,
    title: '5+ Years of AI Experience',
    description: 'We have a proven track record of successfully implementing AI solutions that deliver real-world results.',
  },
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: 'Focus on Measurable ROI',
    description: 'Our goal is to deliver a clear return on your investment, whether through cost savings, increased revenue, or time saved.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: 'Hands-On Implementation',
    description: "We don't just advise; we partner with you to build, integrate, and manage your AI systems from start to finish.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading">
            A Partner Invested in Your Success
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We combine technical expertise with a deep understanding of small business challenges to deliver solutions that work for you.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-12 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="grid gap-4 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold font-heading">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
