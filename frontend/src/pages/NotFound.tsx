import { css } from '@emotion/react';
import NotFoundImg from '../assets/pngs/404.png';
import Button from '../components/shared/atoms/Button';
import Text from '../components/shared/atoms/Text';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div css={ContainerStyle}>
      <Text text="페이지를 찾을 수 없어요" />
      <div css={DivStyle}>
        <img src={NotFoundImg} css={ImgStyle} alt="404" />
        <Button themes="default" text="홈으로" onClick={() => navigate('/')} />
      </div>
    </div>
  );
}

const ContainerStyle = css`
  width: min(100%, 430px);
  padding: 3rem;
  box-sizing: border-box;
`;

const DivStyle = css`
  display: flex;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 6rem;
`;

const ImgStyle = css`
  width: 80%;
`;

export default NotFound;
