import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaBolt, FaStar, FaCheck, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { serviceImages, productImages } from '../styles/images';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Hero = styled.div`
  text-align: center;
  margin: 8rem auto 6rem;
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary.main};
  text-shadow: 0 2px 10px rgba(0, 119, 190, 0.1);
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.text.secondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const SearchBar = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  transform: translateY(20px);
  opacity: 0;
  animation: slideUp 0.5s ease forwards;

  @keyframes slideUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 3rem 1.2rem 1rem;
  border-radius: 16px;
  border: 2px solid ${props => `${props.theme.primary.main}22`};
  background: ${props => `${props.theme.background.paper}44`};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.text.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary.main};
    box-shadow: 0 0 0 4px ${props => `${props.theme.primary.main}22`};
  }

  &::placeholder {
    color: ${props => props.theme.text.secondary};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.text.secondary};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.primary.main};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  color: ${props => props.theme.text.primary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProductMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.span`
  color: ${props => props.theme.primary.main};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.2rem;
  color: #ffd700;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.secondary};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  svg {
    color: ${props => props.theme.primary.main};
  }
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: ${props => props.theme.primary.main};
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary.dark};
  }
`;

interface ProductPageProps {
  addToCart: (product: any) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const products = [
    {
      id: 1,
      name: 'עמדת טעינה ביתית',
      description: 'עמדת טעינה חכמה לרכב חשמלי עם חיבור WiFi ואפליקציה',
      price: 4999,
      image: '/images/placeholder_600x400.jpg',
      rating: 5,
      features: [
        'טעינה מהירה עד 22kW',
        'חיבור WiFi מובנה',
        'אפליקציה חכמה',
        'התקנה מקצועית',
      ],
    },
    {
      id: 2,
      name: 'מערכת סולארית 10kW',
      description: 'מערכת סולארית מושלמת לבית פרטי כולל התקנה ואחריות',
      price: 49999,
      image: '/images/placeholder_600x400.jpg',
      rating: 4.5,
      features: [
        'פאנלים איכותיים',
        'ממיר מתקדם',
        'אחריות ל-25 שנה',
        'התקנה מקצועית',
      ],
    },
    {
      id: 3,
      name: 'סוללת גיבוי ביתית',
      description: 'סוללת גיבוי חכמה לשמירה על אספקת חשמל רציפה',
      price: 24999,
      image: '/images/placeholder_600x400.jpg',
      rating: 4.8,
      features: [
        'קיבולת 10kWh',
        'מערכת ניהול חכמה',
        'התראות בזמן אמת',
        'התקנה מקצועית',
      ],
    },
    {
      id: 4,
      name: 'ערכת תאורת LED',
      description: 'ערכת תאורת LED חסכונית לבית או לעסק',
      price: 1999,
      image: '/images/placeholder_600x400.jpg',
      rating: 4.7,
      features: [
        'חיסכון של עד 80% בחשמל',
        'אורך חיים ארוך',
        'תאורה איכותית',
        'התקנה קלה',
      ],
    },
    {
      id: 5,
      name: 'מערכת ניהול אנרגיה',
      description: 'מערכת חכמה לניהול וניטור צריכת החשמל בבית',
      price: 3499,
      image: '/images/placeholder_600x400.jpg',
      rating: 4.6,
      features: [
        'ניטור בזמן אמת',
        'חיסכון אוטומטי',
        'התראות חריגה',
        'ממשק ידידותי',
      ],
    },
    {
      id: 6,
      name: 'מערכת בקרת אקלים',
      description: 'מערכת חכמה לשליטה על מיזוג האוויר וחיסכון באנרגיה',
      price: 2999,
      image: '/images/placeholder_600x400.jpg',
      rating: 4.9,
      features: [
        'בקרה מרחוק',
        'תזמון חכם',
        'חיסכון באנרגיה',
        'התקנה מקצועית',
      ],
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Hero>
        <Title>המוצרים שלנו</Title>
        <Subtitle>
          גלו את מגוון הפתרונות החכמים שלנו לבית ולעסק - מעמדות טעינה ועד מערכות סולאריות
        </Subtitle>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="חפש מוצרים..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchBar>
      </Hero>

      <ProductGrid>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => handleProductClick(product.id)}
          >
            <ProductImage src={product.image} alt={product.name} />
            <ProductContent>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductMeta>
                <ProductPrice>₪{product.price.toLocaleString()}</ProductPrice>
                <Rating>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} opacity={i < product.rating ? 1 : 0.3} />
                  ))}
                </Rating>
              </ProductMeta>
              <Features>
                {product.features.map((feature, i) => (
                  <Feature key={i}>
                    <FaCheck />
                    {feature}
                  </Feature>
                ))}
              </Features>
              <AddToCartButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addToCart(product)}
              >
                <FaShoppingCart />
                הוסף לסל
              </AddToCartButton>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductPage;
