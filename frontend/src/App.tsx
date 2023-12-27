/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <div css={Layout}>
        <GlobalStyle />
        <Router />
      </div>
    </>
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
