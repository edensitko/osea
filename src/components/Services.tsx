import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSolarPanel, FaBolt, FaChargingStation, FaTools, FaShieldAlt, FaLeaf } from 'react-icons/fa';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

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
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.primary.main};
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
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
  line-height: 1.6;
`;

const ServicesSection = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  direction: rtl;
  background: ${props => props.theme.background.default};

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const VideoContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 50%;
  height: 600px;
  perspective: 1000px;
  z-index: 1;

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    height: 400px;
  }
`;

const VideoCube = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${props => `${props.theme.background.default}33`},
      ${props => `${props.theme.background.default}11`}
    );
    border-radius: 20px;
  }
`;

const InfoContainer = styled(motion.div)`
  width: 50%;
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}33`};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  z-index: 2;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${props => `${props.theme.background.paper}33`};
  border-radius: 15px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};

  h3 {
    color: ${props => props.theme.primary.main};
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.text.primary};
    font-size: 1rem;
  }
`;

const TitleHero = styled(motion.h2)`
  font-size: 3rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DescriptionHero = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.text.primary};
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      icon: FaSolarPanel,
      title: 'מערכות סולאריות',
      description: 'התקנה ותחזוקה של מערכות סולאריות ביתיות ומסחריות לייצור חשמל נקי וחסכוני.',
    },
    {
      icon: FaBolt,
      title: 'עבודות חשמל',
      description: 'שירותי חשמל מקצועיים לבתים ועסקים, כולל התקנות, תיקונים ושדרוגים.',
    },
    {
      icon: FaChargingStation,
      title: 'עמדות טעינה',
      description: 'התקנת עמדות טעינה לרכבים חשמליים בבתים פרטיים וחניונים ציבוריים.',
    },
    {
      icon: FaTools,
      title: 'תחזוקה שוטפת',
      description: 'שירותי תחזוקה מקיפים למערכות חשמל וסולאריות להבטחת ביצועים מיטביים.',
    },
    {
      icon: FaShieldAlt,
      title: 'בדיקות בטיחות',
      description: 'בדיקות תקופתיות ואישורי בטיחות למערכות חשמל בהתאם לתקנים.',
    },
    {
      icon: FaLeaf,
      title: 'ייעוץ אנרגטי',
      description: 'ייעוץ מקצועי לחיסכון באנרגיה ומעבר לאנרגיה ירוקה.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cubeVariants = {
    hidden: { 
      opacity: 0,
      x: -200,
      rotateY: 45,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <Container>
      <Hero>
        <Title>צור קשר</Title>
        <Subtitle>
          אנחנו מציעים מגוון רחב של שירותי חשמל ואנרגיה ירוקה, עם דגש על איכות, מקצועיות ושירות מעולה.
        </Subtitle>
      </Hero>

      <Grid>
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
          </ServiceCard>
        ))}
      </Grid>

      <ServicesSection>
        <ContentWrapper>
          <VideoContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VideoCube variants={cubeVariants}>
              <video autoPlay loop muted playsInline>
                <source src="/videos/charging-station.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoCube>
          </VideoContainer>

          <InfoContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TitleHero variants={itemVariants}>
              פתרונות טעינה חכמים
            </TitleHero>
            <DescriptionHero variants={itemVariants}>
              אנחנו מספקים פתרונות טעינה מתקדמים המותאמים לצרכים שלך. הטכנולוגיה שלנו מאפשרת טעינה מהירה, יעילה וחכמה לכל סוגי הרכבים החשמליים.
            </DescriptionHero>
            <StatsContainer variants={containerVariants}>
              <StatItem variants={itemVariants}>
                <h3>500+</h3>
                <p>התקנות מוצלחות</p>
              </StatItem>
              <StatItem variants={itemVariants}>
                <h3>24/7</h3>
                <p>תמיכה טכנית</p>
              </StatItem>
              <StatItem variants={itemVariants}>
                <h3>98%</h3>
                <p>שביעות רצון</p>
              </StatItem>
              <StatItem variants={itemVariants}>
                <h3>5+</h3>
                <p>שנות ניסיון</p>
              </StatItem>
            </StatsContainer>
          </InfoContainer>
        </ContentWrapper>
      </ServicesSection>
    </Container>
  );
};

export default Services;
