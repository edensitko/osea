import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChargingStation } from 'react-icons/fa';

const ChargingStationsContainer = styled(motion.section)`
  padding: 6rem 4rem;
  background-color: ${props => props.theme.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${props => props.theme.text.dark};
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

const SectionTitle = styled.h2`
  color: ${props => props.theme.primary.main};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px ${props => props.theme.shadows.default};
`;

const StationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  z-index: 2;
  position: relative;
`;

const StationCard = styled(motion.div)`
  background-color: ${props => props.theme.background.paper};
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.neutral.gray[300]};
  box-shadow: 
    0 10px 20px ${props => props.theme.shadows.default},
    0 0 30px ${props => props.theme.primary.main}20;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 
      0 15px 25px ${props => props.theme.shadows.default},
      0 0 40px ${props => props.theme.primary.main}40;
  }
`;

const StationIcon = styled.div`
  color: ${props => props.theme.primary.main};
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationTitle = styled.h3`
  color: ${props => props.theme.text.dark};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
`;

const StationDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const StationPower = styled.div`
  color: ${props => props.theme.primary.main};
  font-weight: bold;
`;

const ChargingStations = () => {
  const [stations] = useState([
    {
      name: 'עמדת טעינה ADVICE 11kw חכמה',
      description: 'כבל מובנה באורך 5 מטרים, ניהול חכם של עומסי טעינה',
      power: '11kW'
    },
    {
      name: 'עמדת טעינה A.R ESCO 22kw',
      description: 'כבל מובנה באורך 5 מטרים, ביצועים גבוהים',
      power: '22kW'
    },
    {
      name: 'עמדת טעינה VOLTEC',
      description: 'פתרון טעינה בקיבולת גבוהה, מערכת ניהול מתקדמת',
      power: '22kW'
    },
    {
      name: 'עמדת טעינה TADIRAN אנרגיה חדשה',
      description: 'עמדת טעינה מנוהלת עם בקרת עומסים מתקדמת',
      power: '22kW'
    }
  ]);

  return (
    <ChargingStationsContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <BackgroundOverlay />
      <SectionTitle>עמדות טעינה לרכבים חשמליים</SectionTitle>
      <StationsGrid>
        {stations.map((station, index) => (
          <StationCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <StationIcon><FaChargingStation /></StationIcon>
            <StationTitle>{station.name}</StationTitle>
            <StationDescription>{station.description}</StationDescription>
            <StationPower>הספק: {station.power}</StationPower>
          </StationCard>
        ))}
      </StationsGrid>
    </ChargingStationsContainer>
  );
};

export default ChargingStations;
