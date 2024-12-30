import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaShoppingCart, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

interface HeaderProps {
  toggleCart: () => void;
  cartItemCount: number;
}

interface ScrollProps {
  isScrolled: boolean;
}

const HeaderContainer = styled(motion.header)<ScrollProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.isScrolled 
    ? props.theme.background.default 
    : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.isScrolled 
    ? '0 2px 10px rgba(0,0,0,0.1)' 
    : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.isScrolled ? '0.5rem 0' : '1rem 0'};
`;

const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 2;
`;

const LogoImage = styled.img<ScrollProps>`
  height: ${props => props.isScrolled ? '40px' : '50px'};
  transition: all 0.3s ease;
  object-fit: contain;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text.primary};
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  transition: color 0.3s ease;
  position: relative;
  text-align: center;
  font-size: 1.1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary.main};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.primary.main};
    
    &::after {
      width: 100%;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background: transparent;
  
  &:hover {
    color: ${props => props.theme.primary.main};
    transform: translateY(-2px);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.primary.main};
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    color: ${props => props.theme.primary.light};
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${props => props.theme.primary.main};
  color: ${props => props.theme.neutral.white};
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)<ScrollProps>`
  position: fixed;
  top: ${props => props.isScrolled ? '60px' : '80px'};
  left: 0;
  right: 0;
  background-color: ${props => props.theme.background.paper};
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  direction: rtl;
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  text-align: right;
  border-bottom: 1px solid ${props => props.theme.neutral.gray[200]};

  &:last-child {
    border-bottom: none;
  }
`;

const Header: React.FC<HeaderProps> = ({ toggleCart, cartItemCount }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'בית' },
    { to: '/services', text: 'שירותים' },
    { to: '/contact', text: 'צור קשר' },
    { to: '/careers', text: 'לעבוד איתנו' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/yourphonenumber', label: 'WhatsApp' }
  ];

  return (
    <HeaderContainer
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderContent>
        <LogoContainer to="/">
          <LogoImage 
            src={logo}
            alt="NH Energy Logo"
            isScrolled={isScrolled}
          />
        </LogoContainer>

        <NavLinks>
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.to}>
              {link.text}
            </NavLink>
          ))}
        </NavLinks>

        <ActionButtons>
          <SocialIcons>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </SocialLink>
            ))}
          </SocialIcons>
          <IconButton onClick={toggleCart}>
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <CartCount>{cartItemCount}</CartCount>
            )}
          </IconButton>
          <IconButton onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </IconButton>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars />
          </MobileMenuButton>
        </ActionButtons>
      </HeaderContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isScrolled={isScrolled}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <MobileNavLink 
                key={index} 
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </MobileNavLink>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
