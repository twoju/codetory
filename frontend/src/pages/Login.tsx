import Button from '../components/shared/atoms/Button';
import NaverLogo from '../assets/pngs/btnG_아이콘원형.png';
import CTLogo from '../assets/svgs/logo.svg?react';
import { css } from '@emotion/react';

function Login() {

  const handleLogin = async () => {
    const url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code';
    const NAVER_URL =
      `${url}` +
      '&client_id=' +
      `${import.meta.env.VITE_APP_NAVER_CLIENT_ID}` +
      '&redirect_uri=' +
      `${import.meta.env.VITE_APP_NAVER_REDIRECT_URI}` +
      '&state=1234';
    window.location.href = await NAVER_URL;
  };

  return (
    <div css={Layout}>
      <CTLogo />
      <Button
        text="네이버로 시작하기"
        themes="login"
        children={NaverLogo}
        onClick={handleLogin}
      />
    </div>
  );
}

export default Login;

const Layout = css`
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22rem;
  & > svg {
    margin-top: 10rem;
    width: 16rem;
    height: 100%;
  }
`;
