import './App.css';
import Router from './router/Router';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  return (
    <div css={Layout}>
      <Router />
    </div>
  );
}

const Layout = css`
  max-width: 430px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  @media screen and (min-width: 431px) {
    margin: 0 auto;
  }
`;
export default App;
