import { css } from '@emotion/react';
import ReactPlayer from 'react-player';
import SortTab from '../components/story/molecules/SortTab';
import ImgDummy from '../assets/pngs/profile.png';
import ReelTest from '../assets/reels01.mp4';
import { useState } from 'react';
import BottomInfo from '../components/story/organisms/BottomInfo';

function Story() {
  const [playState, setPlayState] = useState<boolean>(true);

  const playingHandler = () => {
    setPlayState((pre) => !pre);
  };

  return (
    <div css={DivStyle}>
      <div css={VideoStyle} onClick={playingHandler}>
        <ReactPlayer
          url={ReelTest}
          width={'100%'}
          height={'auto'}
          playing={playState}
          muted={true}
          loop={true}
        />
      </div>
      <div css={TabStyle}>
        <SortTab level={0} />
      </div>
      <div css={BottomStyle}>
        <BottomInfo
          name={'6_seo'}
          url={ImgDummy}
          id={1}
          content={'고려 인삼 누가 삼? 고려인 삼?'}
        />
      </div>
    </div>
  );
}

const DivStyle = css`
  background-color: lightslategray;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const VideoStyle = css`
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const TabStyle = css`
  padding-left: 3rem;
  margin-top: 72px;
`;

const BottomStyle = css`
  padding: 0 3rem;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 10vh;
`;
export default Story;
