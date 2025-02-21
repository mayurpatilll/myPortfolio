import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  padding-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TopSection = styled.div`
  margin-bottom: 2rem;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, ${props => props.theme.colors.text}, ${props => props.theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const AnimatedTitle = styled(motion.span)`
  display: inline-block;
`;

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Mayur Arun Patil";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <HeroSection>
      <HeroContent>
        <Title>
          <AnimatedTitle>{displayedText}</AnimatedTitle>
        </Title>
        <Subtitle>Software Engineer III at Walmart | Previously SDE at Amazon and TraceLink</Subtitle>
        <SocialLinks>
          <a href="https://github.com/mayurpatilll" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/mayurarunpatil" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://leetcode.com/u/mayurpatilll/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i>
          </a>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 