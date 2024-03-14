import { css } from '@emotion/react';

function Divider() {
  return <div css={Style}></div>;
}

const Style = css`
  width: 100%;
  height: 0.6rem;
  background-color: #f2f2f2;
`;
export default Divider;
