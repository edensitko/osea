import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const QASectionContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background.default};
`;

const QAHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.primary.main};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.text.secondary};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const QAList = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QAItem = styled(motion.div)`
  background-color: ${props => props.theme.background.paper};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px ${props => props.theme.shadows.default};
`;

const Question = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.text.primary};
  font-size: 1.1rem;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
    transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
    color: ${props => props.theme.primary.main};
  }

  &:hover {
    background-color: ${props => props.theme.primary.main}10;
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.primary.main};

  svg {
    font-size: 1.2rem;
  }
`;

const qaItems = [
  {
    id: 1,
    question: 'איך מתקינים עמדת טעינה ביתית?',
    answer: 'התקנת עמדת טעינה ביתית מתבצעת על ידי חשמלאי מוסמך. אנחנו מספקים שירות התקנה מלא הכולל בדיקת תשתית החשמל, התקנת העמדה וחיבור למערכת הניהול החכמה שלנו.'
  },
  {
    id: 2,
    question: 'כמה זמן לוקח להטעין רכב חשמלי?',
    answer: 'זמן הטעינה תלוי בגודל הסוללה ובהספק עמדת הטעינה. עם עמדת טעינה ביתית סטנדרטית, הטעינה המלאה אורכת בין 6-8 שעות. עמדות טעינה מהירות יכולות להטעין את הרכב ב-30 דקות עד שעה.'
  },
  {
    id: 3,
    question: 'האם המערכת הסולארית עובדת גם בחורף?',
    answer: 'כן, מערכות סולאריות עובדות גם בחורף ובימים מעוננים, אם כי בתפוקה נמוכה יותר. המערכות שלנו מתוכננות לספק אנרגיה לאורך כל השנה, עם התחשבות בשינויי מזג האוויר העונתיים.'
  },
  {
    id: 4,
    question: 'מה אורך החיים של סוללת האחסון?',
    answer: 'סוללות האחסון שלנו מתוכננות לאורך חיים של 10-15 שנים, עם ירידה מינימלית בביצועים. אנו מספקים אחריות של 10 שנים על כל סוללות האחסון שלנו.'
  }
];

const QASection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <QASectionContainer>
      <QAHeader>
        <Title
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          שאלות נפוצות
        </Title>
        <Subtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          מצאו תשובות לשאלות הנפוצות ביותר
        </Subtitle>
      </QAHeader>
      <QAList
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {qaItems.map((item) => (
          <QAItem key={item.id}>
            <Question
              isOpen={openItem === item.id}
              onClick={() => toggleItem(item.id)}
            >
              <IconWrapper>
                <FaQuestionCircle />
                {item.question}
              </IconWrapper>
              <FaChevronDown />
            </Question>
            <AnimatePresence>
              {openItem === item.id && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </Answer>
              )}
            </AnimatePresence>
          </QAItem>
        ))}
      </QAList>
    </QASectionContainer>
  );
};

export default QASection;
