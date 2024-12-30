import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar, FaCheck, FaArrowRight } from 'react-icons/fa';
import { serviceImages, productImages } from '../styles/images';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.text.secondary};
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary.main};
    transform: translateX(-5px);
  }

  svg {
    transform: rotate(180deg);
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => `${props.theme.primary.main}22`};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary.main};
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.2rem;
  color: #ffd700;
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text.secondary};
  line-height: 1.8;
`;

const Features = styled.div`
  margin-top: 2rem;
`;

const FeaturesTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.secondary};
  font-size: 1.1rem;

  svg {
    color: ${props => props.theme.primary.main};
  }
`;

const AddToCartButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 1.2rem;
  border: none;
  border-radius: 12px;
  background: ${props => props.theme.primary.main};
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
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

const SingleProductPage: React.FC<ProductPageProps> = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'עמדת טעינה ביתית',
      description: 'עמדת טעינה חכמה לרכב חשמלי עם חיבור WiFi ואפליקציה. המערכת מאפשרת טעינה מהירה ויעילה, עם אפשרויות תזמון וניטור מרחוק. העמדה מגיעה עם התקנה מקצועית ואחריות מלאה.',
      price: 4999,
      image: '/images/placeholder_600x400.jpg',
      rating: 5,
      features: [
        'טעינה מהירה עד 22kW',
        'חיבור WiFi מובנה',
        'אפליקציה חכמה',
        'התקנה מקצועית',
        'אחריות מורחבת',
        'תמיכה טכנית 24/7',
        'עדכוני תוכנה אוטומטיים',
        'מערכת הגנה מתקדמת'
      ],
    },
    {
      id: 2,
      name: 'מערכת סולארית 10kW',
      description: 'מערכת סולארית מושלמת לבית פרטי כולל התקנה ואחריות. המערכת כוללת פאנלים סולאריים איכותיים, ממיר מתקדם ומערכת ניטור חכמה. מתאימה לבתים פרטיים וצריכת חשמל ממוצעת.',
      price: 49999,
      image: '/images/placeholder_600x400.jpg',
      rating: 4.5,
      features: [
        'פאנלים איכותיים',
        'ממיר מתקדם',
        'אחריות ל-25 שנה',
        'התקנה מקצועית',
        'מערכת ניטור מתקדמת',
        'תחזוקה שוטפת',
        'חיסכון משמעותי בחשמל',
        'ידידותי לסביבה'
      ],
    },
    // ... rest of the products
  ];

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <Container>
        <h1>מוצר לא נמצא</h1>
        <BackButton onClick={() => navigate('/products')}>
          <FaArrowRight /> חזרה למוצרים
        </BackButton>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={() => navigate('/products')}>
        <FaArrowRight /> חזרה למוצרים
      </BackButton>
      
      <ProductContainer>
        <ImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ImageContainer>

        <ProductInfo>
          <div>
            <Title>{product.name}</Title>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} opacity={i < product.rating ? 1 : 0.3} />
              ))}
            </Rating>
          </div>

          <Price>₪{product.price.toLocaleString()}</Price>
          
          <Description>{product.description}</Description>

          <Features>
            <FeaturesTitle>תכונות עיקריות</FeaturesTitle>
            <FeaturesList>
              {product.features.map((feature, i) => (
                <Feature key={i}>
                  <FaCheck />
                  {feature}
                </Feature>
              ))}
            </FeaturesList>
          </Features>

          <AddToCartButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart />
            הוסף לסל
          </AddToCartButton>
        </ProductInfo>
      </ProductContainer>
    </Container>
  );
};

export default SingleProductPage;
