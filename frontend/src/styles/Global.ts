import 'react-toastify/dist/ReactToastify.css';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.8px;
  }

  h1,h2,h3,h4,h5,h5, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateX(-35%);
      -webkit-transform: translateX(-35%);
      -moz-transform: translateX(-35%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
    }
  }

  @-webkit-keyframes fade {
    0% {
      opacity: 0;
      transform: translateX(-35%);
      -webkit-transform: translateX(-35%);
      -moz-transform: translateX(-35%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
    }
  }

  .icon-spin {
  -webkit-animation: icon-spin 2s infinite linear;
          animation: icon-spin 2s infinite linear;
  }

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
    }
}

`;
