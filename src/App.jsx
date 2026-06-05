import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* Homepage Sections in Requested Order */}
        <Hero />
        <FeaturedDishes />
        <WhyChooseUs />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
