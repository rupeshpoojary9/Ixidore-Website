
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
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
              <CardTitle className="text-3xl font-bold font-heading">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              {lastUpdated && <p className="text-sm">Last updated: {lastUpdated}</p>}
              
              <p>
                Ixidore ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://ixidore.com (the "Site") and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">Information We Collect</h3>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, and business information like your company name, industry, business description, pain points, goals, and technology stack, that you voluntarily give to us when you fill out our AI Readiness Assessment form.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">How We Use Your Information</h3>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Respond to your inquiries and provide you with a customized AI opportunity assessment.</li>
                <li>Email you regarding your interest in our services.</li>
                <li>Improve our website and services.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">Disclosure of Your Information</h3>
              <p>
                We do not sell or rent your personal information. We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including email delivery. We use Resend (resend.com) to send email notifications from our assessment form.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">Security of Your Information</h3>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">Your Rights</h3>
              <p>
                You have the right to request access to the personal data we hold about you, to have any inaccuracies corrected, or to request deletion of your data. To make such a request, please contact us using the contact information provided below.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">Contact Us</h3>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:poojary.rupesh12@gmail.com" className="text-accent hover:underline">poojary.rupesh12@gmail.com</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
