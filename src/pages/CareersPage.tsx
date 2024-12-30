import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaRocket, FaHandshake, FaFileUpload, FaCheck } from 'react-icons/fa';

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
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};
  text-align: center;

  svg {
    font-size: 2.5rem;
    color: ${props => props.theme.primary.main};
    margin-bottom: 1rem;
  }
`;

const BenefitTitle = styled.h3`
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
`;

const BenefitDescription = styled.p`
  color: ${props => props.theme.text.secondary};
`;

const JobsList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const JobCard = styled(motion.div)`
  background: ${props => `${props.theme.background.paper}22`};
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => `${props.theme.primary.main}22`};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobInfo = styled.div``;

const JobTitle = styled.h2`
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.primary.main};
  }
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text.secondary};
  font-size: 0.9rem;
`;

const JobDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  margin-bottom: 1rem;
`;

const JobRequirements = styled.ul`
  color: ${props => props.theme.text.secondary};
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    svg {
      color: ${props => props.theme.primary.main};
      font-size: 0.8rem;
    }
  }
`;

const ApplyButton = styled(motion.button)`
  background: ${props => props.theme.primary.main};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary.dark};
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: ${props => props.theme.background.default};
  padding: 2rem;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid ${props => `${props.theme.text.primary}22`};
  background: ${props => `${props.theme.background.paper}88`};
  color: ${props => props.theme.text.primary};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary.main};
  }
`;

const FileInput = styled.div`
  position: relative;
  padding: 2rem;
  border: 2px dashed ${props => `${props.theme.primary.main}44`};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary.main};
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  svg {
    font-size: 2rem;
    color: ${props => props.theme.primary.main};
    margin-bottom: 0.5rem;
  }
`;

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const benefits = [
    {
      icon: FaUsers,
      title: 'צוות מנצח',
      description: 'הצטרפו לצוות מקצועי ותומך',
    },
    {
      icon: FaRocket,
      title: 'הזדמנויות צמיחה',
      description: 'אפשרויות קידום והתפתחות מקצועית',
    },
    {
      icon: FaHandshake,
      title: 'סביבת עבודה נעימה',
      description: 'אווירה משפחתית ותנאים מעולים',
    },
  ];

  const jobs = [
    {
      title: 'טכנאי חשמל',
      type: 'משרה מלאה',
      location: 'תל אביב',
      description: 'אנחנו ים טכנאי חשמל מנוסה להצטרף לצוות שלנו',
      requirements: [
        'ניסיון של 3 שנים לפחות',
        'רישיון חשמלאי מוסמך',
        'יכולת עבודה בצוות',
        'זמינות למשמרות',
      ],
    },
    {
      title: 'מנהל פרויקטים',
      type: 'משרה מלאה',
      location: 'ירושלים',
      description: 'דרוש מנהל פרויקטים לניהול פרויקטי אנרגיה ירוקה',
      requirements: [
        'ניסיון בניהול פרויקטים',
        'הבנה בתחום האנרגיה',
        'יכולת ניהול צוות',
        'אנגלית ברמה גבוהה',
      ],
    },
    {
      title: 'מתקין מערכות סולאריות',
      type: 'משרה מלאה',
      location: 'חיפה',
      description: 'דרוש מתקין מערכות סולאריות עם ניסיון',
      requirements: [
        'ניסיון בהתקנת מערכות סולאריות',
        'יכולת עבודה בגובה',
        'רישיון נהיגה',
        'זמינות לנסיעות',
      ],
    },
  ];

  return (
    <Container>
      <Hero>
        <Title> לעבוד איתנו</Title>
        <Subtitle>
          הצטרפו למשפחת NH Energy ותהיו חלק מהמהפכה הירוקה. אנחנו מציעים סביבת עבודה דינמית, אתגרית ומתגמלת.
        </Subtitle>
      </Hero>

      <Grid>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <benefit.icon />
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDescription>{benefit.description}</BenefitDescription>
          </BenefitCard>
        ))}
      </Grid>

      <JobsList>
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <JobInfo>
              <JobTitle>
                <FaBriefcase />
                {job.title}
              </JobTitle>
              <JobMeta>
                <span>{job.type}</span>
                <span>•</span>
                <span>{job.location}</span>
              </JobMeta>
              <JobDescription>{job.description}</JobDescription>
              <JobRequirements>
                {job.requirements.map((req, i) => (
                  <li key={i}>
                    <FaCheck /> {req}
                  </li>
                ))}
              </JobRequirements>
            </JobInfo>
            <ApplyButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedJob(job.title)}
            >
              <FaFileUpload />
              הגש מועמדות
            </ApplyButton>
          </JobCard>
        ))}
      </JobsList>

      {selectedJob && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <CloseButton onClick={() => setSelectedJob(null)}>×</CloseButton>
            <h2>הגש מועמדות ל{selectedJob}</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Input type="text" placeholder="שם מלא" required />
              <Input type="email" placeholder="אימייל" required />
              <Input type="tel" placeholder="טלפון" required />
              <FileInput>
                <FaFileUpload />
                <p>העלה קורות חיים</p>
                <input type="file" accept=".pdf,.doc,.docx" required />
              </FileInput>
              <ApplyButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
              >
                שלח מועמדות
              </ApplyButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default CareersPage;
