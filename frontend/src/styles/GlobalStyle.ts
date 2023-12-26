import { css } from '@emotion/react';
import { ColorSystem } from './ColorSystem';
import emotionReset from 'emotion-reset';

export const GlobalStyle = css`
  ${emotionReset}
  ${ColorSystem};

  html,
  body {
    box-sizing: border-box;
    font-family: 'Pretendard';
    --ms-overflow-style: none;
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
