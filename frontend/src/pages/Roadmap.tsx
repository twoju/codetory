import { css } from '@emotion/react';
import Button from '../components/shared/atoms/Button';
import CharacterImg from '../assets/pngs/roadmapCT.png';
import RoadmapBG from '../assets/pngs/roadmapBG.png';
import ScheduleIcon from '../assets/svgs/schedule.svg?react';
import { black, gray3, main } from '../styles/ColorSystem';
import AlertModal from '../components/shared/molecules/AlertModal';
import { useState } from 'react';

const userInfo = {
  level: 6,
  progress: 90,
  character: CharacterImg,
  background: RoadmapBG,
};

function Roadmap() {
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const getKoreanLevel = (lv: number) => {
    switch (lv) {
      case 6:
        return '고려시대';
      default:
        return '석기시대';
    }
  };

  const getLevelDate = (lv: number) => {
    const fromTo = {
      from: '',
      to: '',
    };
    switch (lv) {
      case 6:
        fromTo.from = '918년 7월 25일';
        fromTo.to = '1392년 8월 13일';
        return fromTo;
      default:
        return fromTo;
    }
  };

  const alertHandler = () => {
    setIsAlert((pre) => !pre);
  };

  return (
    <div css={DivStyle}>
      <div css={TopDiv}>
        <div css={BGDiv} />
        <img css={CharacterDiv} src={userInfo.character} alt="캐릭터" />
        <div css={InnerDiv}>
          <div css={InfoDiv}>
            <p css={LevelText}>Lv. 0{userInfo.level}</p>
            <p css={LevelText}>{getKoreanLevel(userInfo.level)} 체험중</p>
            <p css={ProgressText}>
              {userInfo.progress}
              <span>%</span>
            </p>
            <div css={DateDiv}>
              <ScheduleIcon />
              <p>{getLevelDate(userInfo.level).from}</p>
              <p>~ {getLevelDate(userInfo.level).to}</p>
            </div>
          </div>
          <Button text="과거시험 입장하기" themes="default" onClick={alertHandler} />
        </div>
      </div>
      <AlertModal
        isOpen={isAlert}
        onClose={alertHandler}
        title={'앗! 준비중이에요'}
        content={'아직 개발 진행 중인 기능입니다.'}
      />
    </div>
  );
}

const DivStyle = css``;

const TopDiv = css`
  height: min(80vh, 70%);
  width: 100%;
  position: absolute;
`;

const BGDiv = css`
  width: min(100%, 430px);
  height: max(30vh, 40%);
  position: absolute;
  bottom: 0;
  background: center/cover no-repeat url(${userInfo.background});
`;

const CharacterDiv = css`
  position: absolute;
  bottom: 12%;
  right: 4%;
  transform: translateY(-10%);
  height: max(70%, 30rem);
`;

const InnerDiv = css`
  width: 100%;
  position: relative;
  top: 0;
  padding: 3rem;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoDiv = css`
  display: flex;
  flex-direction: column;
`;

const LevelText = css`
  color: ${black};
  font-size: 2.6rem;
  font-weight: 600;
  line-height: normal;
`;

const ProgressText = css`
  color: ${main};
  font-size: 8rem;
  font-weight: 700;
  line-height: normal;
  & > span {
    font-size: 2.6rem;
    font-weight: 600;
  }
`;

const DateDiv = css`
  color: ${gray3};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  & > svg {
    width: 2.2rem;
    & > path {
      fill: ${gray3};
    }
  }
`;
export default Roadmap;
