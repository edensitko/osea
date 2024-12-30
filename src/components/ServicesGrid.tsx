import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaPlug, 
  FaCarBattery, 
  FaCar, 
  FaBuilding, 
  FaTaxi, 
  FaClipboardList, 
  FaCalculator, 
  FaNetworkWired,
  FaTools 
} from 'react-icons/fa';

const ServicesContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background.default};
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary.main};
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.background.paper};
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.primary.light};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary.main};
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.text.dark};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: ${props => props.theme.typography.fontWeights.regular};
`;

const services = [
  {
    icon: <FaPlug />,
    title: "התקנת עמדות טעינה",
    description: "התקנה מקצועית של עמדות טעינה לרכבים חשמליים"
  },
  {
    icon: <FaCarBattery />,
    title: "תחזוקת סוללות",
    description: "שירותי תחזוקה ותיקון לסוללות רכבים חשמליים"
  },
  {
    icon: <FaCar />,
    title: "ייעוץ רכב חשמלי",
    description: "ייעוץ מקצועי בבחירת רכב חשמלי המתאים לצרכיך"
  },
  {
    icon: <FaBuilding />,
    title: "פתרונות לבניינים",
    description: "התקנת תשתיות טעינה בבנייני מגורים ומשרדים"
  }
];

const ServicesGrid = () => {
  return (
    <ServicesContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>השירותים שלנו</SectionTitle>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  );
};

export default ServicesGrid;
