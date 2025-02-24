import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    padding: 4rem 1rem;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 3rem 1rem;
    }
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles; 