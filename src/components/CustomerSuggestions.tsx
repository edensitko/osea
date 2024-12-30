import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const SuggestionsContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.text.secondary};
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary.main};  
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: ${props => props.theme.background.paper};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 20px ${props => props.theme.shadows.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid ${props => props.theme.primary.light};
`;

const QuoteIcon = styled.div`
  color: ${props => props.theme.primary.main};  
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  color: ${props => props.theme.text.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CustomerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid ${props => props.theme.primary.main};
`;

const CustomerName = styled.h4`
  color: ${props => props.theme.text.dark};
  margin-bottom: 0.5rem;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
`;

const CustomerTitle = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const CustomerSuggestions = () => {
  const testimonials = [
    {
      image: '/path/to/customer1.jpg',
      name: 'דני כהן',
      title: 'מנכ"ל חברת תחבורה ירוקה',
      quote: 'המעבר לעמדות הטעינה של אנרגיה חדשה שדרג משמעותית את תפעול צי הרכבים שלנו. הפתרונות החכמים והמקצועיים הביאו לחיסכון ניכר בעלויות ולשיפור משמעותי בביצועים.'
    },
    {
      image: '/path/to/customer2.jpg',
      name: 'שרה לוי',
      title: 'מנהלת פרויקטים סביבתיים',
      quote: 'אנרגיה חדשה הם השותפים המושלמים למהפכה החשמלית. הם לא רק מספקים טכנולוגיה מתקדמת, אלא גם מציעים חזון ברור של עתיד מקיים ונקי יותר.'
    },
    {
      image: '/path/to/customer3.jpg',
      name: 'אלון ברקת',
      title: 'יזם בתחום הטכנולוגיה',
      quote: 'הפתרונות של אנרגיה חדשה הם מעבר לכל הציפיות. מהייעוץ המקצועי ועד להתקנה המדויקת, הם הוכיחו שהם מובילי השוק בתחום הטעינה החשמלית.'
    }
  ];

  return (
    <SuggestionsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>מה אומרים הלקוחות שלנו</SectionTitle>
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <QuoteIcon><FaQuoteLeft /></QuoteIcon>
            <TestimonialText>"{testimonial.quote}"</TestimonialText>
            <CustomerProfile>
              <CustomerImage 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <CustomerName>{testimonial.name}</CustomerName>
              <CustomerTitle>{testimonial.title}</CustomerTitle>
            </CustomerProfile>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </SuggestionsContainer>
  );
};

export default CustomerSuggestions;
