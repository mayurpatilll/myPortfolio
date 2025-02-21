import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${props => props.theme.colors.accent};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled.div`
  background: ${props => props.theme.colors.secondary};
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
`;

const SkillItem = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;

  &:hover {
    transform: translateY(-3px);
    color: ${props => props.theme.colors.accent};
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "AWS", icon: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Background-PNG-Image.png" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
      ]
    },
    {
      title: "Achievements",
      skills: [
        { name: "CodeChef 4★", icon: "https://img.icons8.com/fluent/512/codechef.png" },
        { name: "LeetCode 1800+", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" },
        { name: "17K+ Installs", icon: "https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-play-store-vector-png-image_9183318.png" }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 