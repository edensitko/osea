import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChargingStation, FaCarBattery } from 'react-icons/fa';

const HeroContainer = styled(motion.section)`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 6rem 4rem;
  background-color: ${props => props.theme.background.default};
  overflow: hidden;
  background-image: url('/images/bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${props => props.theme.background.default}dd,
      ${props => props.theme.background.default}99
    );
    z-index: 1;
  }


`;

const HeroContent = styled(motion.div)`
  margin: 0 30px;
  padding: 6rem 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;


 
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    align-items: center;
    text-align: center;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${props => props.theme.neutral.white};
  margin-bottom: 1.5rem;
  font-weight: bold;
  max-width: 800px;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.neutral.white};
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  overflow: hidden;
  position: relative;

  svg {
    font-size: 1.3em;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primary.main};
  color: ${props => props.theme.neutral.white};
  border: none;

  &:hover {
    background-color: ${props => props.theme.primary.dark};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.primary.main};
  border: 2px solid ${props => props.theme.primary.main};

  &:hover {
    background-color: ${props => props.theme.primary.main}20;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const HeroImage = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  z-index: 2;
  width: 40%;
  max-width: 600px;

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroContent>
        <HeroTitle
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          מטעינים את העתיד
        </HeroTitle>
        <HeroSubtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          פתרונות טעינה מתקדמים לרכבים חשמליים. מובילים את המהפכה האקולוגית עם טכנולוגיה חכמה ומקיימת
        </HeroSubtitle>
        <ButtonContainer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChargingStation />
            השירותים שלנו
          </PrimaryButton>
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCarBattery />
            צור קשר
          </SecondaryButton>
        </ButtonContainer>
      </HeroContent>
     
    </HeroContainer>
  );
};

export default HeroSection;
