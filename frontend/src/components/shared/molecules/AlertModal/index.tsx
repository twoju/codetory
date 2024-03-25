import { css } from '@emotion/react';
import Backdrop from '../../atoms/Backdrop';
import Button from '../../atoms/Button';
import { black, gray3 } from '../../../../styles/ColorSystem';

interface Props {
  title: string;
  content: string;
  onClose: (e?: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
}

function AlertModal({ title, content, onClose, isOpen }: Props) {
  if (!isOpen) {
    return null;
  }

  return (
    <div css={DivStyle}>
      <Backdrop />
      <div css={ModalStyle}>
        <div css={TitleStyle}>{title}</div>
        <div css={ConStyle}>{content}</div>
        <Button themes="default" text="확인" onClick={onClose} />
      </div>
    </div>
  );
}

const DivStyle = css`
  width: min(100%, 430px);
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const ModalStyle = css`
  width: fit-content;
  height: fit-content;
  min-width: 30rem;
  padding: 2.5rem;
  background-color: white;
  border-radius: 1.6rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleStyle = css`
  color: ${black};
  margin-bottom: 1.6rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
`;

const ConStyle = css`
  color: ${gray3};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2rem;
`;

export default AlertModal;
