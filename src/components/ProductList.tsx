import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlug, FaSolarPanel, FaBatteryFull } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ProductListContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background.paper};
`;

const ProductListHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.primary.main};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.text.secondary};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled(motion.div)`
  background-color: ${props => props.theme.background.default};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px ${props => props.theme.shadows.default};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px ${props => props.theme.shadows.medium};
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.primary.main}20;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    font-size: 2.5rem;
    color: ${props => props.theme.primary.main};
  }
`;

const ProductTitle = styled.h3`
  color: ${props => props.theme.primary.main};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PriceTag = styled.div`
  color: ${props => props.theme.primary.main};
  font-size: 1.5rem;
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary.main};
  color: ${props => props.theme.neutral.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primary.dark};
    transform: translateY(-2px);
  }
`;

const products = [
  {
    id: 1,
    title: 'עמדת טעינה חכמה',
    description: 'עמדת טעינה מתקדמת לרכב חשמלי עם חיבור WiFi ובקרה מרחוק',
    price: '₪3,999',
    icon: <FaPlug />,
  },
  {
    id: 2,
    title: 'פאנל סולארי Premium',
    description: 'פאנל סולארי באיכות גבוהה עם יעילות מקסימלית של 22%',
    price: '₪2,499',
    icon: <FaSolarPanel />,
  },
  {
    id: 3,
    title: 'סוללת אחסון ביתית',
    description: 'סוללת ליתיום לאחסון אנרגיה ביתית עם קיבולת של 10kWh',
    price: '₪12,999',
    icon: <FaBatteryFull />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProductList: React.FC = () => {
  const { isDarkMode } = useTheme();
  console.log('ProductList rendered with theme:', isDarkMode ? 'Dark' : 'Light');
  return (
    <ProductListContainer>
      <ProductListHeader>
        <Title
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          המוצרים שלנו
        </Title>
        <Subtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          פתרונות אנרגיה מתקדמים לבית ולעסק
        </Subtitle>
      </ProductListHeader>
      <ProductGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <ProductCard key={product.id} variants={itemVariants}>
            <IconWrapper>{product.icon}</IconWrapper>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <PriceTag>{product.price}</PriceTag>
            <Button>הוסף לסל</Button>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductListContainer>
  );
};

export default ProductList;
