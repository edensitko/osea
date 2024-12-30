import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaChargingStation, 
  FaClipboardCheck, 
  FaCogs, 
  FaCheckCircle 
} from 'react-icons/fa';

const ProcessContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary.main};
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, 
      transparent 0%, 
      ${props => props.theme.primary.main} 25%, 
      ${props => props.theme.primary.main} 75%, 
      transparent 100%
    );
    right: calc(50% - 2px);
    border-radius: 2px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
`;

const TimelineContent = styled.div<{ side: 'left' | 'right' }>`
  background: ${props => props.theme.background.paper};
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.primary.light};
  width: 45%;
  position: relative;
  transition: all 0.3s ease;
  
  ${props => props.side === 'left' ? `
    margin-right: auto;
    text-align: right;
    padding-right: 3rem;
  ` : `
    margin-left: auto;
    text-align: left;
    padding-left: 3rem;
  `}

  &:hover {
    transform: translateY(-10px);
    background: ${props => props.theme.background.paper};
    box-shadow: 
      0 15px 30px ${props => props.theme.shadows.default},
      0 0 30px ${props => props.theme.primary.light};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    
    ${props => props.side === 'left' ? `
      right: -20px;
      border-left: 20px solid ${props.theme.background.paper};
    ` : `
      left: -20px;
      border-right: 20px solid ${props.theme.background.paper};
    `}
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  right: calc(50% - 25px);
  background: ${props => props.theme.primary.main};
  color: ${props => props.theme.neutral.white};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1;
`;

const TimelineText = styled.div`
  color: ${props => props.theme.text.primary};
  h3 {
    color: ${props => props.theme.primary.main};
    margin-bottom: 0.5rem;
  }
  p {
    color: ${props => props.theme.text.secondary};
  }
`;

const WorkProcess: React.FC = () => {
  const processSteps = [
    {
      icon: <FaChargingStation />,
      title: 'ייעוץ ראשוני',
      description: 'פגישת ייעוץ מקיפה להבנת צרכי הטעינה והאנרגיה שלכם'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'סקר היתכנות',
      description: 'בדיקה מקצועית של התשתיות הקיימות ותכנון מדויק'
    },
    {
      icon: <FaCogs />,
      title: 'תכנון והתקנה',
      description: 'תכנון מפורט והתקנת תשתיות טעינה מתקדמות'
    },
    {
      icon: <FaCheckCircle />,
      title: 'הדרכה ותמיכה',
      description: 'הדרכה מלאה והמשך תמיכה מקצועית לאורך כל הדרך'
    }
  ];

  return (
    <ProcessContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>תהליך העבודה שלנו</SectionTitle>
      <TimelineContainer>
        {processSteps.map((step, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TimelineContent side={index % 2 === 0 ? 'left' : 'right'}>
              <TimelineText>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </TimelineText>
            </TimelineContent>
            <TimelineIcon>{step.icon}</TimelineIcon>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ProcessContainer>
  );
};

export default WorkProcess;
