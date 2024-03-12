import { useEffect } from 'react';
import { adminApi } from '../apis';
import { css } from '@emotion/react';
import Button from '../components/shared/atoms/Button';
import bg from '../assets/pngs/bg.png';
import character from '../assets/pngs/character.png';
import Text from '../components/shared/atoms/Text';

const name = '준서';

function Home() {
  useEffect(() => {
    adminApi.homeTest().then((res) => console.log(res));
  }, []);
  return (
    <div css={HomeStyle}>
      <div css={DivLayout}>
        <div style={{ marginTop: '9.5rem' }}>
          <Text text={`${name} 안녕~👋 \n오늘의 퀘스트가 기다리고 있어!`} />
        </div>
        <img src={character} css={CharStyle} alt="character" />
        <div css={DivBtn}>
          <Button text="입장하기" themes="default" />
        </div>
      </div>
    </div>
  );
}

const HomeStyle = css`
  width: 100%;
`;

const DivLayout = css`
  padding: 0 3rem;
  width: min(100%, 430px);
  height: 580px;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: center/cover no-repeat url(${bg});
`;

const CharStyle = css`
  position: absolute;
  width: min(100%, 172px);
  transform: translate(-50%, -50%);
  left: 60%;
  top: 60%;
`;

const DivBtn = css`
  padding-bottom: 2rem;
`;

export default Home;
