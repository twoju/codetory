import { css } from '@emotion/react';
import ReactPlayer from 'react-player';
import SortTab from '../components/story/molecules/SortTab';
import Profile from '../components/story/molecules/Profile';
import ImgDummy from '../assets/pngs/profile.png';
import ReelTest from '../assets/reels01.mp4';

function Story() {
  return (
    <div css={DivStyle}>
      <div css={VideoStyle}>
        <ReactPlayer url={ReelTest} width={'100%'} height={'auto'} playing={true} muted={true} loop={true} />
      </div>
      <div css={TabStyle}>
        <SortTab level={0} />
      </div>
      <div css={BottomStyle}>
        <Profile name={'6_seo'} url={ImgDummy} id={1} />
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
  padding-left: 3rem;
  width: 100%;
  position: absolute;
  bottom: 10vh;
`;
export default Story;
