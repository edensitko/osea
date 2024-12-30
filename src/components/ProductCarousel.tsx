import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaChargingStation } from 'react-icons/fa';
import LogoImage from '../assets/logo.png';

const CarouselContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.neutral.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary.main};
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${props => props.theme.primary.main};
  cursor: pointer;
  padding: 0 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.primary.light};
  }

  &:disabled {
    color: rgba(208,172,143,0.3);
    cursor: not-allowed;
  }
`;

const ProductSlide = styled(motion.div)`
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  border: 1px solid rgba(208,172,143,0.2);
  box-shadow: 
    0 15px 30px rgba(0,0,0,0.2),
    0 0 30px rgba(208,172,143,0.1);
  padding: 2rem;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.1);
  }
`;

const ProductImageContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const FallbackLogo = styled.img`
  max-width: 200px;
  max-height: 200px;
  opacity: 0.7;
`;

const ProductDetails = styled.div`
  flex: 1;
  text-align: right;
`;

const ProductTitle = styled.h3`
  color: ${props => props.theme.primary.main};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ProductDescription = styled.p`
  color: ${props => props.theme.text.light};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const ProductFeatures = styled.ul`
  list-style-type: disc;
  padding-right: 1.5rem;
  color: ${props => props.theme.text.secondary};
  line-height: 1.8;
`;

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      image: '/images/placeholder_600x400.jpg',
      title: 'עמדת טעינה ביתית AC',
      description: 'פתרון טעינה מושלם לבית, עם יכולת טעינה מהירה וקלה לרכבים חשמליים',
      features: [
        'הספק טעינה של עד 22 קילוואט',
        'תאימות לכל סוגי הרכבים החשמליים',
        'ממשק משתמש ידידותי וקל להפעלה',
        'התקנה פשוטה וזריזה'
      ]
    },
    {
      image: '/images/placeholder_600x400.jpg',
      title: 'עמדת טעינה ציבורית מהירה',
      description: 'עמדת טעינה מתקדמת לשימוש ציבורי, המאפשרת טעינה מהירה ויעילה',
      features: [
        'הספק טעינה של עד 150 קילוואט',
        'תמיכה במספר סוגי מחברים',
        'מערכת תשלום אינטגרלית',
        'ניטור וניהול מרחוק'
      ]
    },
    {
      image: '/images/placeholder_600x400.jpg',
      title: 'עמדת טעינה לצי רכבים',
      description: 'פתרון טעינה מקיף וחכם לחברות וצי רכבים עסקיים',
      features: [
        'ניהול מרכזי של עמדות הטעינה',
        'דוחות צריכה ועלויות מפורטים',
        'תמיכה בטעינה סימולטנית',
        'התאמה אישית לצרכי הארגון'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <CarouselContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionTitle>מוצרי טעינה</SectionTitle>
      <CarouselWrapper>
        <NavigationButton 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
        >
          <FaChevronRight />
        </NavigationButton>
        
        <AnimatePresence mode="wait">
          <ProductSlide
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ProductDetails>
              <ProductTitle>{products[currentSlide].title}</ProductTitle>
              <ProductDescription>
                {products[currentSlide].description}
              </ProductDescription>
              <ProductFeatures>
                {products[currentSlide].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ProductFeatures>
            </ProductDetails>
            <ProductImageContainer 
              style={{ 
                backgroundImage: products[currentSlide].image ? `url(${products[currentSlide].image})` : 'none' 
              }}
            >
              {!products[currentSlide].image && <FallbackLogo src={LogoImage} alt="NH Energy Logo" />}
            </ProductImageContainer>
          </ProductSlide>
        </AnimatePresence>
        
        <NavigationButton 
          onClick={nextSlide} 
          disabled={currentSlide === products.length - 1}
        >
          <FaChevronLeft />
        </NavigationButton>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default ProductCarousel;
