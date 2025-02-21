import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 0;
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.secondary};
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  a {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  i {
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(112, 0, 255, 0.3);
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo href="#">Mayur Patil</Logo>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</MobileMenuButton>
        <NavLinks isOpen={isMobileMenuOpen}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <ResumeButton 
            href="/mayur-patil-resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download"></i>
            Resume
          </ResumeButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 