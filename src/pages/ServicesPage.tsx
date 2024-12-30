import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSolarPanel, FaBolt, FaChargingStation, FaTools, FaShieldAlt, FaLeaf, FaCheck } from 'react-icons/fa';

const Container = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.primary.main};
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary.main};
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.secondary};
  margin-bottom: 0.5rem;

  svg {
    color: ${props => props.theme.primary.main};
    font-size: 1rem;
  }
`;

const DetailSection = styled.div`
  margin-top: 4rem;
  padding: 4rem;
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const DetailTitle = styled.h2`
  color: ${props => props.theme.text.primary};
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DetailCard = styled.div`
  padding: 2rem;
  border-radius: 15px;
  background: ${props => `${props.theme.background.default}44`};
  border: 1px solid ${props => `${props.theme.primary.main}22`};
`;

const DetailCardTitle = styled.h3`
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.primary.main};
  }
`;

const DetailCardText = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
`;

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: FaSolarPanel,
      title: 'מערכות סולאריות',
      description: 'התקנה ותחזוקה של מערכות סולאריות ביתיות ומסחריות',
      features: [
        'התקנת פאנלים סולאריים',
        'תחזוקה שוטפת',
        'ניטור ביצועים',
        'אחריות מקיפה',
      ],
    },
    {
      icon: FaBolt,
      title: 'עבודות חשמל',
      description: 'שירותי חשמל מקצועיים לבתים ועסקים',
      features: [
        'התקנות חשמל',
        'תיקוני חשמל',
        'שדרוג תשתיות',
        'בדיקות תקופתיות',
      ],
    },
    {
      icon: FaChargingStation,
      title: 'עמדות טעינה',
      description: 'התקנת עמדות טעינה לרכבים חשמליים',
      features: [
        'התקנה מקצועית',
        'תמיכה טכנית',
        'אחריות מורחבת',
        'שירות 24/7',
      ],
    },
    {
      icon: FaTools,
      title: 'תחזוקה שוטפת',
      description: 'שירותי תחזוקה למערכות חשמל וסולאריות',
      features: [
        'בדיקות תקופתיות',
        'ניקוי פאנלים',
        'החלפת רכיבים',
        'דוחות ביצועים',
      ],
    },
    {
      icon: FaShieldAlt,
      title: 'בדיקות בטיחות',
      description: 'בדיקות ואישורי בטיחות למערכות חשמל',
      features: [
        'בדיקות תקינה',
        'אישורי בטיחות',
        'דוחות מפורטים',
        'המלצות שיפור',
      ],
    },
    {
      icon: FaLeaf,
      title: 'ייעוץ אנרגטי',
      description: 'ייעוץ מקצועי לחיסכון באנרגיה',
      features: [
        'ניתוח צריכה',
        'המלצות לחיסכון',
        'תכנון מערכות',
        'ליווי מקצועי',
      ],
    },
  ];

  const additionalInfo = [
    {
      icon: FaShieldAlt,
      title: 'איכות ואמינות',
      text: 'אנחנו מחויבים לספק את השירות הטוב ביותר ללקוחותינו, תוך שימוש בציוד מתקדם ואיכותי.',
    },
    {
      icon: FaTools,
      title: 'צוות מקצועי',
      text: 'הצוות שלנו מורכב מאנשי מקצוע מנוסים ומוסמכים, המתמחים בכל תחומי החשמל והאנרגיה.',
    },
    {
      icon: FaBolt,
      title: 'זמינות גבוהה',
      text: 'אנחנו זמינים 24/7 לכל קריאה, ומתחייבים להגיע במהירות ולספק פתרון מקצועי.',
    },
    {
      icon: FaLeaf,
      title: 'חדשנות וקיימות',
      text: 'אנחנו מתעדכנים באופן שוטף בטכנולוגיות החדשות ביותר בתחום האנרגיה הירוקה.',
    },
  ];

  return (
    <Container>
      <Hero>
        <Title>השירותים שלנו</Title>
        <Subtitle>
          אנחנו מציעים מגוון רחב של שירותי חשמל ואנרגיה ירוקה, עם דגש על איכות, מקצועיות ושירות מעולה.
        </Subtitle>
      </Hero>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <service.icon />
            </IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <FeaturesList>
              {service.features.map((feature, i) => (
                <FeatureItem key={i}>
                  <FaCheck />
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <DetailSection>
        <DetailTitle>למה לבחור בנו?</DetailTitle>
        <DetailGrid>
          {additionalInfo.map((info, index) => (
            <DetailCard key={index}>
              <DetailCardTitle>
                <info.icon />
                {info.title}
              </DetailCardTitle>
              <DetailCardText>{info.text}</DetailCardText>
            </DetailCard>
          ))}
        </DetailGrid>
      </DetailSection>
    </Container>
  );
};

export default ServicesPage;
