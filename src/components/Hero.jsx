import styled, { keyframes } from 'styled-components';
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

// Update the rocket animations
const rocketHover = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const smokeEffect = keyframes`
  0% {
    transform: scale(0.8) translateY(0);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.2) translateY(5px);
    opacity: 0;
  }
`;

// Add styled components for rocket
const RocketContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
`;

const Rocket = styled.span`
  font-size: 1.5rem;
  display: inline-block;
  animation: ${rocketHover} 1s ease-in-out infinite;
  transform-origin: bottom center;
`;

const SmokeParticle = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.theme.colors.accent};
  animation: ${smokeEffect} 1.2s ease-out infinite;
  opacity: 0.5;
`;

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showRocket, setShowRocket] = useState(false);
  const [smokeParticles, setSmokeParticles] = useState([]);
  const fullText = "Hi, I'm Mayur Patil";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowRocket(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Update the smoke effect in your Hero component
  useEffect(() => {
    if (showRocket) {
      const interval = setInterval(() => {
        setSmokeParticles(prev => {
          // Keep only the last 5 particles
          const newParticles = [...prev, Date.now()];
          if (newParticles.length > 5) {
            return newParticles.slice(-5);
          }
          return newParticles;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [showRocket]);

  return (
    <HeroSection>
      <HeroContent>
        <Title>
          <AnimatedTitle>{displayedText}</AnimatedTitle>
        </Title>
        <Subtitle>
          Software Engineer | Backend Developer | AI Engineer
          {showRocket && (
            <RocketContainer>
              <Rocket>🚀</Rocket>
              {smokeParticles.map(id => (
                <SmokeParticle 
                  key={id}
                  style={{
                    left: `${Math.random() * 20 + 40}%`,
                    animationDelay: `${Math.random() * 0.2}s`
                  }}
                />
              ))}
            </RocketContainer>
          )}
        </Subtitle>
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