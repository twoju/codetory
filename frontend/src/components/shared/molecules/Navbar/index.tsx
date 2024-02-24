import { css } from '@emotion/react';
import { gray3 } from '../../../../styles/ColorSystem';

interface Props {
  tab: 'home' | 'story' | 'roadmpa' | 'mypage';
}

function Navbar({ tab = 'home' }: Props) {
  return (
    <div css={[Style, tab]}>
      <div css={Nav}></div>
    </div>
  );
}

const Style = css`
  width: 100%;
  height: 72px;
  background-color: '#ffffff';
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  color: ${gray3};
  padding-top: 30px;
  box-sizing: border-box;
`;

const Nav = css`
  padding-left: 30px;
`;

export default Navbar;
