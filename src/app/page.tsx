import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ProblemSection from '@/components/sections/problem';
import SolutionSection from '@/components/sections/solution';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import TestimonialsSection from '@/components/sections/testimonials';
import AIReadinessForm from '@/components/sections/ai-readiness-form';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <AIReadinessForm />
      </main>
      <Footer />
    </div>
  );
}
