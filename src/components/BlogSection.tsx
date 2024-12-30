import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBlog, FaCalendar, FaUser } from 'react-icons/fa';
import LogoImage from '../assets/logo.png';

const BlogContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.neutral.black};
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary.main};
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogPost = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(208,172,143,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-15px);
    background: rgba(255,255,255,0.1);
    box-shadow: 
      0 15px 30px rgba(0,0,0,0.2),
      0 0 30px rgba(208,172,143,0.3);
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FallbackLogo = styled.img`
  max-width: 150px;
  max-height: 150px;
  opacity: 0.7;
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: ${props => props.theme.primary.main};
  font-size: 1.2rem;
`;

const PostExcerpt = styled.p`
  color: ${props => props.theme.text.light};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.text.secondary};
  font-size: 0.8rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.primary.main};
  }
`;

const BlogSection = () => {
  const blogPosts = [
    {
      image: '/path/to/blog-post-1.jpg',
      title: 'המהפכה החשמלית: עתיד התחבורה',
      excerpt: 'סקירה מקיפה על השינויים המהותיים בעולם התחבורה עם המעבר לרכבים חשמליים',
      author: 'דני כהן',
      date: '15 בינואר 2024'
    },
    {
      image: '/path/to/blog-post-2.jpg',
      title: 'טעינה חכמה: טכנולוגיות עתיד',
      excerpt: 'חשיפה לטכנולוגיות החדשניות ביותר בתחום טעינת הרכבים החשמליים',
      author: 'שרה לוי',
      date: '22 בדצמבר 2023'
    },
    {
      image: '/path/to/blog-post-3.jpg',
      title: 'קיימות ואנרגיה ירוקה',
      excerpt: 'כיצד הרכבים החשמליים תורמים להפחתת פליטות הפחמן ולשמירה על הסביבה',
      author: 'אלון ברקת',
      date: '5 בנובמבר 2023'
    }
  ];

  return (
    <BlogContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionTitle>בלוג אנרגיה חדשה</SectionTitle>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <PostImage 
              style={{ 
                backgroundImage: post.image ? `url(${post.image})` : 'none' 
              }}
            >
              {!post.image && <FallbackLogo src={LogoImage} alt="NH Energy Logo" />}
            </PostImage>
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <PostMeta>
                <MetaItem>
                  <FaUser />
                  {post.author}
                </MetaItem>
                <MetaItem>
                  <FaCalendar />
                  {post.date}
                </MetaItem>
              </PostMeta>
            </PostContent>
          </BlogPost>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogSection;
