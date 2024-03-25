import { css } from '@emotion/react';

function Backdrop() {
  return <div css={DivStyle}></div>;
}

const DivStyle = css`
  background: rgb(85, 85, 85, 0.7);
  width: 100%;
  height: 100%;
`;

export default Backdrop;
