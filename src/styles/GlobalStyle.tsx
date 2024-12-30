import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Heebo', sans-serif;
    background-color: ${props => props.theme.background.default};
    color: ${props => props.theme.text.primary};
    transition: all 0.3s ease;
    direction: rtl;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.primary.main};
    margin-bottom: 1rem;
    font-weight: ${props => props.theme.typography.fontWeights.bold};
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.text.secondary};
  }

  a {
    color: ${props => props.theme.primary.main};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.primary.light};
    }
  }

  button {
    cursor: pointer;
    font-family: 'Heebo', sans-serif;
    border: none;
    background: none;
    transition: all 0.3s ease;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea {
    font-family: 'Heebo', sans-serif;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.neutral.gray[300]};
    background-color: ${props => props.theme.background.paper};
    color: ${props => props.theme.text.primary};
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.primary.main};
      box-shadow: 0 0 0 2px ${props => props.theme.primary.main}20;
    }

    &::placeholder {
      color: ${props => props.theme.text.secondary};
    }
  }

  section {
    padding: 4rem 2rem;
    
    @media (max-width: 768px) {
      padding: 3rem 1rem;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .fadeIn {
    animation: fadeIn 0.5s ease forwards;
  }

  .slideUp {
    animation: slideUp 0.5s ease forwards;
  }
`;

export default GlobalStyle;
