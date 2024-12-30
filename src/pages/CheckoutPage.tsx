import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCreditCard, FaLock, FaCheck, FaShoppingCart, FaTruck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.primary.main};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.text.primary};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid ${props => `${props.theme.text.primary}22`};
  background: ${props => `${props.theme.background.default}88`};
  color: ${props => props.theme.text.primary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary.main};
    box-shadow: 0 0 0 2px ${props => `${props.theme.primary.main}33`};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;

const OrderSummary = styled.div`
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};
  height: fit-content;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: ${props => props.theme.text.primary};
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => `${props.theme.text.primary}11`};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid ${props => `${props.theme.primary.main}33`};
  color: ${props => props.theme.text.primary};
  font-weight: bold;
  font-size: 1.2rem;
`;

const PayButton = styled(motion.button)`
  background: ${props => props.theme.primary.main};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:disabled {
    background: ${props => `${props.theme.text.primary}33`};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${props => props.theme.primary.dark};
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1rem;
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

interface StepProps {
  active: boolean;
  completed: boolean;
  isLast: boolean;
}

const Step = styled.div<StepProps>`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  color: ${props => props.active ? props.theme.primary.main : props.completed ? props.theme.primary.light : props.theme.text.secondary};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    display: ${props => props.isLast ? 'none' : 'block'};
    width: 50px;
    height: 2px;
    background: ${props => props.completed ? props.theme.primary.main : props.theme.text.secondary}33;
    margin-right: 1rem;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  color: ${props => props.theme.primary.main};
  font-size: 1.2rem;
  margin-top: 2rem;

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const ShippingInfo = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => `${props.theme.text.primary}11`};
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.primary.main};
  }
`;

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutPageProps {
  cartItems: CartItem[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const steps = [
    { id: 1, label: 'פרטים אישיים', icon: FaLock },
    { id: 2, label: 'פרטי משלוח', icon: FaTruck },
    { id: 3, label: 'פרטי תשלום', icon: FaCreditCard },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 30; // Free shipping over 500₪
  const finalTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      setIsProcessing(true);
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsProcessing(false);
      setIsSuccess(true);
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <Container>
      <Title>
        <FaShoppingCart style={{ marginLeft: '0.5rem' }} />
        השלמת הזמנה
      </Title>
      
      <StepIndicator>
        {steps.map((s, index) => (
          <Step 
            key={s.id} 
            active={s.id === step}
            completed={s.id < step}
            isLast={index === steps.length - 1}
          >
            {s.id < step ? <FaCheck /> : <s.icon />} {s.label}
          </Step>
        ))}
      </StepIndicator>

      <CheckoutGrid>
        <FormSection>
          {!isSuccess ? (
            <Form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <SectionTitle>
                    <FaLock /> פרטים אישיים
                  </SectionTitle>
                  <InputGroup>
                    <Label>שם מלא</Label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>אימייל</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>טלפון</Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                </>
              )}

              {step === 2 && (
                <>
                  <SectionTitle>
                    <FaTruck /> פרטי משלוח
                  </SectionTitle>
                  <InputGroup>
                    <Label>כתובת</Label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>עיר</Label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>מיקוד</Label>
                    <Input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>
                </>
              )}

              {step === 3 && (
                <>
                  <SectionTitle>
                    <FaCreditCard /> פרטי תשלום
                  </SectionTitle>
                  <InputGroup>
                    <Label>מספר כרטיס</Label>
                    <Input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      maxLength={16}
                      required
                    />
                  </InputGroup>
                  <CardGrid>
                    <InputGroup>
                      <Label>תוקף</Label>
                      <Input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        maxLength={5}
                        required
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>CVV</Label>
                      <Input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength={3}
                        required
                      />
                    </InputGroup>
                  </CardGrid>
                </>
              )}

              <PayButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  'מעבד תשלום...'
                ) : step === steps.length ? (
                  'אישור תשלום'
                ) : (
                  'המשך'
                )}
              </PayButton>
            </Form>
          ) : (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaCheck />
              <p>ההזמנה התקבלה בהצלחה!</p>
              <p>מספר הזמנה: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </SuccessMessage>
          )}
        </FormSection>

        <OrderSummary>
          <SectionTitle>סיכום הזמנה</SectionTitle>
          {cartItems.map(item => (
            <SummaryItem key={item.id}>
              <span>{item.name} x{item.quantity}</span>
              <span>₪{(item.price * item.quantity).toLocaleString()}</span>
            </SummaryItem>
          ))}
          <SummaryItem>
            <span>משלוח</span>
            <span>{shipping === 0 ? 'חינם' : `₪${shipping}`}</span>
          </SummaryItem>
          <Total>
            <span>סה"כ לתשלום</span>
            <span>₪{finalTotal.toLocaleString()}</span>
          </Total>
          <ShippingInfo>
            <FaTruck />
            {total > 500 ? 
              'משלוח חינם להזמנות מעל ₪500' : 
              `עוד ₪${(500 - total).toLocaleString()} למשלוח חינם`
            }
          </ShippingInfo>
        </OrderSummary>
      </CheckoutGrid>
    </Container>
  );
};

export default CheckoutPage;
