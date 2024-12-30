import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  direction: rtl;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactForm = styled(motion.form)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #0077be;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  direction: rtl;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-height: 150px;
  direction: rtl;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0077be;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactIcon = styled.div`
  color: #0077be;
  margin-left: 1rem;
  font-size: 1.5rem;
`;

const ContactText = styled.span`
  color: #666;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement form submission logic
    alert('תודה על פנייתכם. נחזור אליכם בהקדם!');
  };

  return (
    <PageContainer>
      <Header toggleCart={() => {}} cartItemCount={0} />
      <ContactContainer>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#0077be', marginBottom: '1.5rem' }}>פרטי התקשרות</h2>
          <ContactItem>
            <ContactIcon><FaMapMarkerAlt /></ContactIcon>
            <ContactText>רחוב הרצל 123, תל אביב</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaPhone /></ContactIcon>
            <ContactText>03-1234567</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaEnvelope /></ContactIcon>
            <ContactText>info@newhenergyisrael.com</ContactText>
          </ContactItem>
        </ContactInfo>
        <ContactForm
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ color: '#0077be', marginBottom: '1.5rem', textAlign: 'center' }}>צור קשר</h2>
          <FormGroup>
            <Label>שם מלא</Label>
            <Input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label>אימייל</Label>
            <Input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label>טלפון</Label>
            <Input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>הודעה</Label>
            <TextArea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <SubmitButton type="submit">שלח הודעה</SubmitButton>
        </ContactForm>
      </ContactContainer>
      <Footer />
    </PageContainer>
  );
};

export default ContactPage;
