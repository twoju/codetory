import { css, keyframes } from '@emotion/react';
import { main } from '../../../../styles/ColorSystem';

function Loading() {
  return (
    <div css={Layout}>
      <div css={Circle} />
      <div css={Circle} />
      <div css={Circle} />
      <div css={Shadow} />
      <div css={Shadow} />
      <div css={Shadow} />
    </div>
  );
}

const Layout = css`
  width: 60px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
`;

const Jump = keyframes`
    0% {
    top: 20px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 8px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
`;

const Circle = css`
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  background-color: ${main};
  left: 15%;
  transform-origin: 50%;
  animation: ${Jump} 0.5s alternate infinite ease;
  &:nth-of-type(2) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;

const ShadowMove = keyframes`
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }

  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
`;

const Shadow = css`
  width: 5px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(203, 203, 203, 0.75);
  position: absolute;
  top: 30px;
  transform-origin: 50%;
  z-index: 3;
  left: 15%;
  filter: blur(1px);
  animation: ${ShadowMove} 0.5s alternate infinite ease;
  &:nth-of-type(4) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-of-type(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;
export default Loading;
