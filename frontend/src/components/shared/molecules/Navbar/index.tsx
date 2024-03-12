import { css } from '@emotion/react';
import FilledHome from '../../../../assets/svgs/filledHome.svg?react';
import FilledStory from '../../../../assets/svgs/filledStory.svg?react';
import FilledRoadmap from '../../../../assets/svgs/filledRoadmap.svg?react';
import FilledMypage from '../../../../assets/svgs/filledMypage.svg?react';
import LineHome from '../../../../assets/svgs/lineHome.svg?react';
import LineStory from '../../../../assets/svgs/lineStory.svg?react';
import LineRoadmap from '../../../../assets/svgs/lineRoadmap.svg?react';
import LineMypage from '../../../../assets/svgs/lineMypage.svg?react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <div css={[Style]}>
      <NavLink to={'/'} css={Nav}>
        {location.pathname == '/' ? <FilledHome /> : <LineHome />}
      </NavLink>
      <NavLink to={'/story'} css={Nav}>
        {location.pathname == '/story' ? <FilledStory /> : <LineStory />}
      </NavLink>
      <NavLink to={'/roadmap'} css={Nav}>
        {location.pathname == '/roadmap' ? <FilledRoadmap /> : <LineRoadmap />}
      </NavLink>
      <NavLink to={'/mypage'} css={Nav}>
        {location.pathname == '/mypage' ? <FilledMypage /> : <LineMypage />}
      </NavLink>
    </div>
  );
}

const Style = css`
  width: min(100%, 430px);
  height: 72px;
  position: fixed;
  bottom: 0;
  background-color: '#ffffff';
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  box-shadow: 0px -4px 8px 0px rgba(224, 224, 224, 0.15);
  padding: 0.7rem 0 calc(env(safe-area-inset-bottom) + 0.7rem) 0;
`;

const Nav = css`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  & > svg {
    width: 2.6rem;
    height: 2.6rem;
    :hover {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;

export default Navbar;
