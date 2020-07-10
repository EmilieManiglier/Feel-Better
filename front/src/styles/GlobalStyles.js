import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .app {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .main {
    color: ${({ theme }) => theme.text};
  }

  .footer-li {
    color: ${({ theme }) => theme.text};
  }
  
  .profile-input {
    color: ${({ theme }) => theme.text};

    &::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
  
  .mood-title {
    color: ${({ theme }) => theme.moodTitle};
  }

  .nav-links {
    color:  ${({ theme }) => theme.headerLink};

    &--active {
      color:  ${({ theme }) => theme.headerLink};
    }

    &:hover {
      color:  ${({ theme }) => theme.headerLinkHover};
    }
  }
`;

export default GlobalStyles;
