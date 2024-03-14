import { useEffect } from 'react';
import { adminApi } from '../apis';
import { css } from '@emotion/react';
import Button from '../components/shared/atoms/Button';
import bg from '../assets/pngs/bg.png';
import character from '../assets/pngs/character.png';
import Text from '../components/shared/atoms/Text';
import Divider from '../components/shared/atoms/Divider';
import QuestList from '../components/shared/organisms/QuestList';
import quest01 from '../assets/pngs/quest01.png';
import { black } from '../styles/ColorSystem';
import MoreBtn from '../components/shared/atoms/MoreBtn';
import TitleText from '../components/shared/atoms/TitleText';

const name = '준서';

const questListDummy = [
  {
    url: quest01,
    title: '고려시대 벽란도 학습하기',
    content: '오늘은 수학적으로 비교도 한대!',
  },
  {
    url: quest01,
    title: '고려시대 벽란도 학습하기',
    content: '오늘은 수학적으로 비교도 한대!',
  },
  {
    url: quest01,
    title: '고려시대 벽란도 학습하기',
    content: '오늘은 수학적으로 비교도 한대!',
  },
];

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
      <div css={BottomLayout}>
        <div css={TitleDiv}>
          <TitleText title="오늘의 퀘스트" />
          <MoreBtn url="/" />
        </div>
        <QuestList questList={questListDummy} />
      </div>
      <Divider />
      <div css={VideoLayout}>
        <TitleText title='추천 이야기' />
        <div css={VideoDiv}></div>
        <Button themes='ghost' text='다른 이야기' />
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
  height: 500px;
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

const BottomLayout = css`
  position: relative;
  margin-top: 450px;
  padding: 0 3rem 2.4rem 3rem;
`;

const TitleDiv = css`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VideoLayout = css`
  padding: 2.4rem 3rem 2.4rem 3rem;
`;

const VideoDiv = css`
  height: 10rem;
  width: 6rem;
`;

export default Home;
