import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const PopupContent = styled(motion.div)`
  width: 400px;
  height: 100%;
  background: ${props => `${props.theme.background.default}ee`};
  backdrop-filter: blur(20px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  direction: rtl;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: ${props => props.theme.text.primary};
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => `${props.theme.text.primary}11`};
  }
`;

const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: -1rem;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => `${props.theme.background.paper}33`};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => `${props.theme.primary.main}66`};
    border-radius: 4px;
  }
`;

const CartItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => `${props.theme.background.paper}33`};
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid ${props => `${props.theme.primary.main}22`};
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  color: ${props => props.theme.text.primary};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.span`
  color: ${props => props.theme.primary.main};
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const QuantityButton = styled(motion.button)`
  background: ${props => `${props.theme.primary.main}22`};
  border: none;
  color: ${props => props.theme.primary.main};
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary.main};
    color: white;
  }
`;

const Quantity = styled.span`
  color: ${props => props.theme.text.primary};
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme.error.main};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => `${props.theme.error.main}11`};
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => `${props.theme.text.primary}22`};
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.text.primary};
  font-weight: bold;
  font-size: 1.2rem;
`;

const CheckoutButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.primary.main};
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary.dark};
  }

  &:disabled {
    background: ${props => `${props.theme.text.primary}33`};
    cursor: not-allowed;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  color: ${props => props.theme.text.primary};
  opacity: 0.7;
  text-align: center;

  svg {
    font-size: 3rem;
    opacity: 0.5;
  }
`;

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartPopup: React.FC<CartPopupProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <PopupOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <PopupContent
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={e => e.stopPropagation()}
          >
            <Header>
              <Title>
                <FaShoppingCart /> סל קניות
              </Title>
              <CloseButton
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes />
              </CloseButton>
            </Header>

            <CartItems>
              {items.length === 0 ? (
                <EmptyCart>
                  <FaShoppingCart />
                  <p>הסל שלך ריק</p>
                  <p>הוסף מוצרים לסל כדי להמשיך בקנייה</p>
                </EmptyCart>
              ) : (
                items.map(item => (
                  <CartItem
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemDetails>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>₪{item.price.toLocaleString()}</ItemPrice>
                      <QuantityControl>
                        <QuantityButton
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaMinus size={12} />
                        </QuantityButton>
                        <Quantity>{item.quantity}</Quantity>
                        <QuantityButton
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaPlus size={12} />
                        </QuantityButton>
                      </QuantityControl>
                    </ItemDetails>
                    <RemoveButton
                      onClick={() => onRemoveItem(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTrash />
                    </RemoveButton>
                  </CartItem>
                ))
              )}
            </CartItems>

            <Footer>
              <Total>
                <span>סה"כ:</span>
                <span>₪{total.toLocaleString()}</span>
              </Total>
              <CheckoutButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
              >
                המשך לתשלום
              </CheckoutButton>
            </Footer>
          </PopupContent>
        </PopupOverlay>
      )}
    </AnimatePresence>
  );
};

export default CartPopup;
