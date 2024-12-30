import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaLightbulb, 
  FaHandshake, 
  FaStar, 
  FaProjectDiagram, 
  FaTrophy, 
  FaSmile 
} from 'react-icons/fa';

const AboutContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 4rem;
  background-color: ${props => props.theme.background.default};
  position: relative;
  overflow: hidden;
`;

const SectionContent = styled.div`
  display: flex;
  width: 100%;
  gap: 4rem;
  align-items: flex-start;
`;

const ImageContainer = styled(motion.div)`
  flex: 0 0 auto;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 
    0 10px 20px rgba(0,0,0,0.3),
    0 0 30px ${props => props.theme.primary.main}20;
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8) contrast(1.2);
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const AboutParagraph = styled.p`
  color: ${props => props.theme.text.dark};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: right;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const StatBox = styled(motion.div)`
  background: ${props => props.theme.background.paper};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.neutral.gray[300]};

  svg {
    color: ${props => props.theme.primary.main};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: ${props => props.theme.primary.main};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: ${props => props.theme.typography.fontWeights.medium};
  }

  p {
    color: ${props => props.theme.text.secondary};
    font-size: 1rem;
    font-weight: ${props => props.theme.typography.fontWeights.regular};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 
      0 10px 20px ${props => props.theme.shadows.default},
      0 0 20px ${props => props.theme.primary.main}20;
  }
`;

const AboutSection = () => {
  const stats = [
    {
      icon: <FaStar />,
      number: "4.9",
      label: "דירוג לקוחות"
    },
    {
      icon: <FaProjectDiagram />,
      number: "150+",
      label: "פרויקטים מבוצעים"
    },
    {
      icon: <FaTrophy />,
      number: "15+",
      label: "שנות ניסיון"
    },
    {
      icon: <FaSmile />,
      number: "100%",
      label: "שביעות רצון"
    }
  ];

  return (
    <AboutContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionContent>
        <ImageContainer
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AboutImage 
            src="/images/us.jpg" 
            alt="נ.ה אנרגיה סולארית - הצוות המקצועי" 
          />
        </ImageContainer>
        <ContentContainer>
          <AboutParagraph>
            נ.ה אנרגיה סולארית היא חברה מובילה בתחום פתרונות האנרגיה החלופית והטעינה החשמלית. 
            עם צוות מקצועי ומנוסה, אנו מספקים פתרונות חדשניים וכוללניים לעסקים ולבתים פרטיים. 
            החזון שלנו הוא להוביל את המהפכה האקולוגית תוך מתן פתרונות טכנולוגיים מתקדמים ומקיימים.
          </AboutParagraph>
          <StatsContainer>
            {stats.map((stat, index) => (
              <StatBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.icon}
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatBox>
            ))}
          </StatsContainer>
        </ContentContainer>
      </SectionContent>
    </AboutContainer>
  );
};

export default AboutSection;
