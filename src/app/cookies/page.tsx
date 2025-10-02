
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function CookiePolicyPage() {
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
              <CardTitle className="text-3xl font-bold font-heading">Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
               {lastUpdated && <p className="text-sm">Last updated: {lastUpdated}</p>}

              <p>
                This Cookie Policy explains how Ixidore ("we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our website at https://ixidore.com ("Site"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">What Are Cookies</h3>
              <p>
                As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
              </p>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">How We Use Cookies</h3>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                </li>
                <li>
                  <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. We do not use third-party analytics services like Google Analytics at this time.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> These cookies are used to provide enhanced functionality and personalization. For example, they may be used to remember your preferences.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">Disabling Cookies</h3>
              <p>
                You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
              </p>

              <h3 className="text-2xl font-semibold text-foreground pt-4 font-heading">More Information</h3>
              <p>
                Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through our preferred contact method:
              </p>
              <p>
                Email: <a href="mailto:poojary.rupesh12@gmail.com" className="text-accent hover:underline">poojary.rupesh12@gmail.com</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
