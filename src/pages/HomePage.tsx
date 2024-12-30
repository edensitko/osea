import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import ServicesGrid from '../components/ServicesGrid';
import WorkProcess from '../components/WorkProcess';
import BlogSection from '../components/BlogSection';
import ProductCarousel from '../components/ProductCarousel';
import CustomerSuggestions from '../components/CustomerSuggestions';
import QASection from '../components/QASection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header toggleCart={() => {}} cartItemCount={0} />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <ServicesGrid />
      <WorkProcess />
      <BlogSection />
      <ProductCarousel />
      <CustomerSuggestions />
      <QASection />
      <Footer />
    </>
  );
};

export default HomePage;
