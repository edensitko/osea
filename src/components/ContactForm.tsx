import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ContactContainer = styled(motion.section)`
  padding: 6rem 4rem;
  background-color: ${props => props.theme.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      135deg, 
      ${props => props.theme.primary.main}10, 
      ${props => props.theme.background.default} 50%, 
      ${props => props.theme.primary.main}10
    );
  opacity: 0.5;
  z-index: 1;
`;

const ContactContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 4rem;
  z-index: 2;
`;

const ContactInfo = styled.div`
  flex: 0 0 40%;
  background-color: ${props => props.theme.background.paper};
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 
    0 10px 20px rgba(0,0,0,0.1),
    0 0 30px ${props => props.theme.primary.main}20;
  border: 1px solid ${props => props.theme.neutral.gray[300]};
`;

const ContactTitle = styled.h2`
  color: ${props => props.theme.primary.main};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: right;
`;

const ContactDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: right;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.text.primary};

  svg {
    color: ${props => props.theme.primary.main};
    font-size: 1.5rem;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  background-color: ${props => props.theme.background.paper};
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 
    0 10px 20px rgba(0,0,0,0.1),
    0 0 30px ${props => props.theme.primary.main}20;
  border: 1px solid ${props => props.theme.neutral.gray[300]};
`;

const FormTitle = styled.h3`
  color: ${props => props.theme.primary.main};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text.primary};
  text-align: right;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${props => props.theme.neutral.gray[300]};
  border-radius: 8px;
  background-color: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary.main};
    box-shadow: 0 0 10px ${props => props.theme.primary.main}20;
  }
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${props => props.theme.neutral.gray[300]};
  border-radius: 8px;
  background-color: ${props => props.theme.background.default};
  color: ${props => props.theme.text.primary};
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary.main};
    box-shadow: 0 0 10px ${props => props.theme.primary.main}20;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 15px;
  background-color: ${props => props.theme.primary.main};
  color: ${props => props.theme.neutral.black};
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primary.light};
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  &:disabled {
    background-color: ${props => props.theme.neutral.gray[300]};
    cursor: not-allowed;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

interface ContactFormProps {
  
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const { isDarkMode } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted:', formData);
    alert('תודה על הודעתך! נחזור אליך בהקדם.');
  };

  return (
    <HeroContainer>
      <Hero>
        <Title>צור קשר</Title>
        <Subtitle>
          יש לכם שאלות? אנחנו כאן בשבילכם. צרו איתנו קשר ונחזור אליכם בהקדם.
        </Subtitle>
      </Hero>
      <ContactContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <BackgroundOverlay />
        <ContactContent>
          <ContactInfo>
            <ContactTitle>צור קשר</ContactTitle>
            <ContactDescription>
              אנחנו כאן כדי לענות על כל שאלה. השאירו פרטים ונחזור אליכם בהקדם.
            </ContactDescription>
            <ContactDetails>
              <ContactDetailItem>
                <FaEnvelope />
                <span>info@nhenergy.co.il</span>
              </ContactDetailItem>
              <ContactDetailItem>
                <FaPhone />
                <span>054-7654321</span>
              </ContactDetailItem>
              <ContactDetailItem>
                <FaMapMarkerAlt />
                <span>רחוב הטכנולוגיה 5, נס ציונה</span>
              </ContactDetailItem>
            </ContactDetails>
          </ContactInfo>
          <FormContainer>
            <FormTitle>השאירו הודעה</FormTitle>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <FormGroup>
                <FormLabel>שם מלא</FormLabel>
                <FormInput 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>אימייל</FormLabel>
                <FormInput 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>טלפון</FormLabel>
                <FormInput 
                  type="tel" 
                  id="phone"
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>הודעה</FormLabel>
                <FormTextArea 
                  id="message"
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded h-32"
                  required 
                />
              </FormGroup>
              <SubmitButton 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                שלח הודעה
              </SubmitButton>
            </form>
          </FormContainer>
        </ContactContent>
      </ContactContainer>
    </HeroContainer>
  );
};

export default ContactForm;
