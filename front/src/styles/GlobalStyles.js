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

  .main-quote {
    color: ${({ theme }) => theme.quoteText};

    .quote-content {
      &:before {
        color: rgba(${({ theme }) => theme.quoteText}, 0.1);
      }

      &:after {
        color: rgba(${({ theme }) => theme.quoteText}, 0.1);
      }
    }
  }

  .choose-suggestion-input:not(:checked) + span:after,
  .choose-suggestion-input:checked + span:after {
    border: 2px solid ${({ theme }) => theme.suggestionCheckbox};
  }

  .choose-suggestion-btn {
    color: ${({ theme }) => theme.suggestionBtnText};
    background-color: ${({ theme }) => theme.suggestionBtnBackground};

    &:hover {
      color: ${({ theme }) => theme.suggestionBtnBackground};
    }
  }
`;

export default GlobalStyles;
