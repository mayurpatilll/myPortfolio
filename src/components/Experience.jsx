import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  background: linear-gradient(45deg, ${props => props.theme.colors.accent}, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.accent}, transparent);
  }
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.accent}, transparent);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background: white;
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const CompanyLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  color: ${props => props.theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${props => props.theme.colors.accent};
    border-radius: 50%;
  }
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Achievement = styled(motion.li)`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
  }
`;

const Experience = () => {
  const experiences = [
    {
      company: "Walmart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Walmart_logo_%282025%3B_Stacked_alt%29.svg/800px-Walmart_logo_%282025%3B_Stacked_alt%29.svg.png",
      role: "Software Engineer III",
      duration: "Mar 2025 - Present",
      achievements: [
        "Built an automated data pipeline to monitor 15+ fraud prevention strategies for Walmart Marketplace sellers, enabling seamless data flow and automated reporting via email.",
        "Boosted end-user productivity by 99% by building a multi-search feature that reduced a 140-click workflow to a single action.",
        "Eliminated a critical bottleneck by adding real-time URL validation and a Kafka feedback loop, achieving 0% incidents."
      ]
    },
    {
      company: "TraceLink",
      logo: "https://www.credly.com/org/tracelink",
      role: "Software Engineer",
      duration: "April 2023 - Jan 2025",
      achievements: [
        "Developed APIs and features for work items, tasks, recalls, and compliance exceptions",
        "Built an email integration feature for creating work items and compliance exceptions via email.",
        "Implemented notifications functionality using the Factory Method design pattern.",
        "Worked with the Page Types team to reduce page creation time from multiple days to just 5 minutes using a drag-and-drop interface."
      ]
    },
    {
      company: "Amazon",
      logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      role: "Software Engineer",
      duration: "Aug 2022 - Mar 2023",
      achievements: [
        "Owned and delivered the Series Subscription feature for the Kindle/Books Japan team.",
        "Enhanced the Kindle Offer Notification Widget by adding features like an offer timer and creating a unified widget for both eBooks and print books.",
        "Improved user engagement by 21% and impacted 100,000+ users."
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <CompanyHeader>
              <LogoContainer>
                <CompanyLogo src={exp.logo} alt={exp.company} />
              </LogoContainer>
              <CompanyInfo>
                <CompanyName>{exp.company}</CompanyName>
                <Role>{exp.role}</Role>
                <Duration>{exp.duration}</Duration>
              </CompanyInfo>
            </CompanyHeader>
            <AchievementsList>
              {exp.achievements.map((achievement, i) => (
                <Achievement
                  key={i}
                  variants={achievementVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                >
                  {achievement}
                </Achievement>
              ))}
            </AchievementsList>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience; 
