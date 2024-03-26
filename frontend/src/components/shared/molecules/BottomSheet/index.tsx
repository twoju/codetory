import { css, keyframes } from '@emotion/react';
import Backdrop from '../../atoms/Backdrop';
import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function BottomSheet({ isOpen, onClose, children }: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <div css={DivStyle}>
      <Backdrop onClose={onClose} />
      <div css={SheetStyle}>
        <div
          css={[ClickStyle, isOpen ? CloseAnimation : OpenAnimation]}
          onClick={onClose}
        ></div>
        <div css={ChildStyle}>{children}</div>
      </div>
    </div>
  );
}

const FadeIn = keyframes`
    from {
        transform: none;
    }
    to {
        transform: translateY(100%);
    }
`;

const FadeOut = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: none;
    }
`;

const DivStyle = css`
  width: min(100%, 430px);
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const SheetStyle = css`
  width: min(100%, 430px);
  height: 50vh;
  position: absolute;
  bottom: 0;
  background: white;
  border-radius: 1.6rem 1.6rem 0 0;
  padding: 2.5rem;
  box-sizing: border-box;
`;

const ClickStyle = css`
  width: min(100%, 380px);
  height: 100%;
  position: absolute;
`;

const OpenAnimation = css`
  animation: ${FadeIn} 0.3s ease-in-out forwards;
`;

const CloseAnimation = css`
  animation: ${FadeOut} 0.3s ease-in-out forwards;
`;

const ChildStyle = css`
  position: relative;
`;

export default BottomSheet;
