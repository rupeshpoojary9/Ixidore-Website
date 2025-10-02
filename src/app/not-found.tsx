
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 items-center justify-center py-20 md:py-32 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="container mx-auto px-4 md:px-6"
        >
          <Card className="max-w-md mx-auto text-center shadow-2xl border-2 hover:border-accent/50 transition-all">
            <CardHeader>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 mb-4"
              >
                <AlertTriangle className="h-10 w-10 text-accent" />
              </motion.div>
              <CardTitle className="text-3xl font-bold font-heading">
                404 - Page Not Found
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Oops! The page you're looking for seems to have gotten lost in the digital ether. It might have been moved, deleted, or maybe it never existed.
              </p>
              <Button asChild size="lg" className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Return to Homepage
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
