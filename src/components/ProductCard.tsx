import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Card = styled.div`
  border: 1px solid ${props => props.theme.secondary.light};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  background-color: ${props => props.theme.background.paper};
  color: ${props => props.theme.text.dark};
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.text.dark};
  margin-bottom: 0.5rem;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text.secondary};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.typography.fontWeights.regular};
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.primary.main};
  font-weight: ${props => props.theme.typography.fontWeights.bold};
`;

const ProductCard = ({ product }: { product: any }) => {
  const { isDarkMode } = useTheme();
  console.log('ProductCard rendered with theme:', isDarkMode ? 'Dark' : 'Light');

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        <Image src={product.image} alt={product.name} />
        <Content>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>₪{product.price}</ProductPrice>
        </Content>
      </Card>
    </Link>
  );
};

export default ProductCard;
