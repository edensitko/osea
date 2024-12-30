import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const FooterContainer = styled.footer`
  background: ${props => props.theme.background.default};
  padding: 4rem 0 2rem;
  direction: rtl;
`;

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LogoSection = styled(FooterSection)`
  img {
    width: 150px;
    height: auto;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.text.primary};
    opacity: 0.8;
    line-height: 1.6;
  }
`;

const Title = styled.h3`
  color: ${props => props.theme.text.primary};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.text.primary};
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.primary.main};
    transform: translateX(-5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.text.primary};
  opacity: 0.8;

  svg {
    color: ${props => props.theme.primary.main};
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text.primary};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    color: ${props => props.theme.primary.main};
    opacity: 1;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid ${props => `${props.theme.text.primary}22`};
  color: ${props => props.theme.text.primary};
  opacity: 0.8;
`;

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={logo} alt="NH Energy Logo" />
          <p>
            אנחנו מספקים פתרונות טעינה מתקדמים לרכבים חשמליים, עם מחויבות לאיכות, חדשנות וקיימות.
          </p>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </SocialLink>
          </SocialLinks>
        </LogoSection>

        <FooterSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title>ניווט מהיר</Title>
          <LinkList>
            <li><FooterLink to="/">דף הבית</FooterLink></li>
            <li><FooterLink to="/about">אודות</FooterLink></li>
            <li><FooterLink to="/services">שירותים</FooterLink></li>
            <li><FooterLink to="/products">מוצרים</FooterLink></li>
            <li><FooterLink to="/contact">צור קשר</FooterLink></li>
          </LinkList>
        </FooterSection>

        <FooterSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title>שירותים</Title>
          <LinkList>
            <li><FooterLink to="/services/installation">התקנת עמדות טעינה</FooterLink></li>
            <li><FooterLink to="/services/maintenance">תחזוקה ותמיכה</FooterLink></li>
            <li><FooterLink to="/services/consulting">ייעוץ והדרכה</FooterLink></li>
            <li><FooterLink to="/services/business">פתרונות עסקיים</FooterLink></li>
            <li><FooterLink to="/services/residential">פתרונות ביתיים</FooterLink></li>
          </LinkList>
        </FooterSection>

        <FooterSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title>צור קשר</Title>
          <ContactItem>
            <FaPhone />
            <span>123-456-7890</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <span>info@nhenergy.co.il</span>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>רחוב הראשי 123, תל אביב</span>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <Copyright>
        {new Date().getFullYear()} NH Energy. כל הזכויות שמורות.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
