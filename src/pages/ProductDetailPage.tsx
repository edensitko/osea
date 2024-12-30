import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaBolt, FaClock, FaTools } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  direction: rtl;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary.main};
  font-weight: bold;
`;

const Description = styled.p`
  color: ${props => props.theme.text.primary};
  line-height: 1.6;
  opacity: 0.9;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.text.primary};

  svg {
    color: ${props => props.theme.primary.main};
    font-size: 1.5rem;
  }
`;

const AddToCartButton = styled(motion.button)`
  background: ${props => props.theme.primary.main};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 400px;

  svg {
    font-size: 1.2rem;
  }
`;

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

interface ProductDetailPageProps {
  addToCart: (product: Product) => void;
}

// Mock product data - replace with real data fetching
const getProduct = (id: string): Product => ({
  id: parseInt(id),
  name: 'עמדת טעינה חכמה Pro',
  price: 3999,
  quantity: 1,
  image: '/images/charger-pro.jpg',
  description: 'עמדת טעינה חכמה המאפשרת טעינה מהירה ויעילה לכל סוגי הרכבים החשמליים. כוללת חיבור WiFi, ניטור בזמן אמת, ותמיכה בטעינה דו-כיוונית.',
});

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ addToCart }) => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProduct(productId || '1');

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Container>
      <ImageSection>
        <img src={product.image} alt={product.name} />
      </ImageSection>
      
      <InfoSection>
        <div>
          <Title>{product.name}</Title>
          <Price>₪{product.price.toLocaleString()}</Price>
        </div>
        
        <Description>{product.description}</Description>
        
        <Features>
          <Feature>
            <FaBolt />
            <span>טעינה מהירה</span>
          </Feature>
          <Feature>
            <FaClock />
            <span>זמן טעינה מהיר</span>
          </Feature>
          <Feature>
            <FaTools />
            <span>התקנה מקצועית</span>
          </Feature>
          <Feature>
            <FaBolt />
            <span>חיסכון באנרגיה</span>
          </Feature>
        </Features>
        
        <AddToCartButton
          onClick={handleAddToCart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaShoppingCart /> הוסף לסל
        </AddToCartButton>
      </InfoSection>
    </Container>
  );
};

export default ProductDetailPage;
