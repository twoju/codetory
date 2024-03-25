import { css } from '@emotion/react';

interface Props {
  onClose?: () => void;
}

function Backdrop({ onClose }: Props) {
  return <div css={DivStyle} onClick={onClose}></div>;
}

const DivStyle = css`
  background: rgb(85, 85, 85, 0.7);
  width: min(100%, 430px);
  height: 100vh;
  position: fixed;
  top: 0;
`;

export default Backdrop;
