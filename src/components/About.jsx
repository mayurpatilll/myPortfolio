import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.secondary} 0%,
    ${props => props.theme.colors.primary} 100%
  );
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const AboutContent = styled(motion.div)`
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, ${props => props.theme.colors.accent}, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: ${props => props.theme.colors.accent};
      border-radius: 2px;
    }
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid ${props => props.theme.colors.accent};
    border-radius: 15px;
    z-index: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 511px;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  filter: grayscale(100%);
  transition: all 0.5s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: grayscale(0%);
    transform: translateY(-10px);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I am a passionate software engineer with more than 3 years of experience in building scalable and efficient systems. 
            My expertise lies in designing and developing backend services, optimizing performance, and 
            implementing high-impact features that enhance user experience.
          </p>
          <p>
            With experience at leading tech companies like TraceLink and Amazon, I've developed a strong foundation in full-stack development and occasionally engage in competitive programming.
          </p>
        </AboutContent>
        <ProfileImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProfileImage 
            src="/profile.jpg"
            alt="Mayur Patil" 
          />
        </ProfileImageContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 