import { css } from '@emotion/react';
import Loading from '../components/shared/atoms/Loading';
import { adminApi } from '../apis';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface BodyPropType {
  name: string;
  email: string;
}

const initialBodyProps = {
  name: '',
  email: '',
};

function NaverLogin() {
  const [token, setToken] = useState<string>('');
  const [body, setBody] = useState<BodyPropType>(initialBodyProps);
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code) {
      adminApi.naverLogin(code).then((res) => {
        setToken(res.access_token);
        localStorage.setItem('token', token);
      });
    }
  }, []);

  useEffect(() => {
    if (token) {
      adminApi.getNaverInfo(token).then((res) => {
        if (res) setBody(res);
      });
    }
  }, [token]);

  useEffect(() => {
    if (body) {
      adminApi.createUser(body).then((res) => console.log(res));
      navigate('/');
    }
  }, [body]);

  return (
    <div css={Layout}>
      <Loading />
    </div>
  );
}

export default NaverLogin;

const Layout = css`
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
