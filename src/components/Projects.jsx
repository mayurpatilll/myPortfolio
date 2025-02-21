import styled from 'styled-components';

const ProjectsSection = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  padding: 6rem 2rem;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${props => props.theme.colors.accent};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.accent}33;
  color: ${props => props.theme.colors.accent};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Pacman",
      description: "A 2D retro game with score tracking and map navigation. Won 3rd place in Code-A-Thon Hackathon.",
      image: "https://img.bbmd.gr/img/1260/max/82/2022/05/26/pacman1.jpg?t=9SYmNGEW_4hw3IscVNVoKw",
      tech: ["Flutter", "Dart", "Widgets"],
      github: "https://github.com/mayurpatilll/pacman",
      live: "https://github.com/mayurpatilll/pacman"
    },
    {
      title: "Hip Hop Stickers App",
      description: "Android app featuring Indian Hip Hop artist stickers. 17,000+ downloads with 4.7/5 rating on Google Play Store.",
      image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/27/Photos/Home%20Page/283043184740833-kY0G--621x414@LiveMint.png",
      tech: ["Android", "Java"],
      github: "https://github.com/mayurpatilll/HipHop-Stickers",
      live: "https://github.com/mayurpatilll/HipHop-Stickers"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 