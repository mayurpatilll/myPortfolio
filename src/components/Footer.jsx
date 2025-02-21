import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  padding: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

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

const Copyright = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="https://github.com/mayurpatilll" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mayurarunpatil/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:mayurpatil05072000@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </SocialLinks>
        <Copyright>© {new Date().getFullYear()} Mayur Patil. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 