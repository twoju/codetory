import { Global, css } from '@emotion/react';
import { ColorSystem } from './ColorSystem';
import emotionReset from 'emotion-reset';

const style = css`
  ${emotionReset}
  ${ColorSystem};

  html,
  body {
    box-sizing: border-box;
    font-family: 'Pretendard';
    font-size: 10px;
    --ms-overflow-style: none;
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
