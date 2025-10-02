import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';


export default function TestimonialsSection() {
    const testimonialImage = PlaceHolderImages.find(p => p.id === 'testimonial-avatar');

  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark font-heading">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See what our clients are saying about the impact of our AI solutions.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Card className="bg-card shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-center text-muted-foreground">
                “Ixidore transformed our operations. The workflow automation they implemented saved us over 20 hours a week and significantly reduced errors. It was a game-changer for our small team.”
              </blockquote>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <Avatar>
                  {testimonialImage && <AvatarImage src={testimonialImage.imageUrl} alt="Testimonial author" data-ai-hint={testimonialImage.imageHint} />}
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">CEO, Small Business Owner</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
