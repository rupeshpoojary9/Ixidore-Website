
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function TermsOfServicePage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-heading">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
               {lastUpdated && <p className="text-sm">Last updated: {lastUpdated}</p>}

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">1. Agreement to Terms</h3>
              <p>
                By accessing our website, https://ixidore.com (the "Site"), or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">2. Description of Service</h3>
              <p>
                Ixidore ("we," "us," or "our") provides AI consulting, strategy, and implementation services for small businesses (the "Service"). This includes, but is not limited to, AI readiness assessments, workflow automation, and custom AI solution development.
              </p>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">3. Use of the Site</h3>
              <p>
                You agree to use the Site for lawful purposes only. You are prohibited from using the site to post or transmit any material which is or may be infringing, threatening, false, misleading, inflammatory, libelous, invasive of privacy, obscene, pornographic, abusive, discriminating, illegal or any material that could constitute or encourage conduct that would be considered a criminal offence, violate the rights of any party or which may otherwise give rise to civil liability or violate any law.
              </p>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">4. Intellectual Property</h3>
              <p>
                The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Ixidore and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Ixidore.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">5. Disclaimer of Warranties; Limitation of Liability</h3>
              <p>
                Our services are provided "as is" and "as available". We do not guarantee any specific results or outcomes from the use of our services. While we strive to provide high-quality services, we make no representation or warranty that the services will be error-free or uninterrupted.
              </p>
              <p>
                In no event shall Ixidore, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">6. Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">7. Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">Contact Us</h3>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
