import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      <Helmet>
        <title>NeelShri Jyotish Kendr - Expert Astrologer & Gemologist</title>
        <meta name="description" content="Professional astrology services with 10+ years experience in Lal Kitab, Reiki, Healing, Numerology and Gemology. Get accurate predictions and spiritual guidance." />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;