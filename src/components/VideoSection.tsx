import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { FaCertificate, FaHandshake, FaBolt, FaMoneyBillWave } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

interface Advantage {
  icon: React.ElementType;
  text: string;
  color: string;
}

const advantages: Advantage[] = [
  { 
    icon: FaCertificate, 
    text: "חשמלאי מוסמך",
    color: "text-yellow-500"
  },
  { 
    icon: FaHandshake, 
    text: "שירות אמין",
    color: "text-blue-500"
  },
  { 
    icon: FaBolt, 
    text: "יחס אנושי",
    color: "text-green-500"
  },
  { 
    icon: FaMoneyBillWave, 
    text: "מחיר שובר שוק",
    color: "text-red-500"
  }
];

const VideoSectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background.default};
  padding: 4rem 0;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 1rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

const VideoCubeContainer = styled(motion.div)`
  position: relative;
  width: 800px;
  height: 450px;
  perspective: 1000px;
  z-index: 1;
  margin-left: -100px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
    height: 450px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
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
    z-index: 2;
    pointer-events: none;
  }
`;

const InfoContainer = styled(motion.div)`
  width: 500px;
  background: ${props => `${props.theme.background.default}dd`};
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}33`};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 2;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1.5rem;
  text-align: right;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.text.primary};
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: right;
  opacity: 0.9;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AdvantageContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const AdvantageItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AdvantageIcon = styled(motion.div)`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text.primary};
`;

const AdvantageText = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.text.primary};
  opacity: 0.9;
`;

const VideoSection = () => {
  const { isDarkMode } = useTheme();

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

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  const advantageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6
      }
    }
  };

  return (
    <VideoSectionContainer>
      <ContentWrapper>
        <VideoCubeContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <VideoCube variants={cubeVariants}>
            <video autoPlay loop muted playsInline>
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoCube>
        </VideoCubeContainer>

        <InfoContainer
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={contentVariants}>
            פתרונות טעינה חכמים
          </Title>
          <Description variants={contentVariants}>
            אנחנו מספקים פתרונות טעינה מתקדמים המותאמים לצרכים שלך. הטכנולוגיה שלנו מאפשרת טעינה מהירה, יעילה וחכמה לכל סוגי הרכבים החשמליים.
          </Description>
          <AdvantageContainer
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={index}
                variants={advantageVariants}
              >
                <AdvantageIcon
                  variants={advantageVariants}
                  className={advantage.color}
                >
                  <advantage.icon />
                </AdvantageIcon>
                <AdvantageText
                  variants={advantageVariants}
                >
                  {advantage.text}
                </AdvantageText>
              </AdvantageItem>
            ))}
          </AdvantageContainer>
        </InfoContainer>
      </ContentWrapper>
    </VideoSectionContainer>
  );
};

export default VideoSection;
