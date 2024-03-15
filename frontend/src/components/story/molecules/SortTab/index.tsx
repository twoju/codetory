import { css } from '@emotion/react';
import { main } from '../../../../styles/ColorSystem';
import { useState } from 'react';

interface TabProp {
  level: number;
}

function SortTab({ level }: TabProp) {
  const [nowTab, setNowTab] = useState<number>(0);
  const nowLevel = () => {
    switch (level) {
      case 1:
        return '선사시대';
      case 2:
        return '원삼국시대';
      case 3:
        return '삼국시대';
      case 4:
        return '고려시대';
      case 5:
        return '조선시대';
      default:
        return '고려시대';
    }
  };
  return (
    <div css={DivLayout}>
      <div
        css={nowTab == 0 ? SelectedTabStyle : TabStyle}
        onClick={() => setNowTab(0)}
      >
        {nowLevel()}
      </div>
      <div
        css={nowTab == 1 ? SelectedTabStyle : TabStyle}
        onClick={() => setNowTab(1)}
      >
        최신순
      </div>
    </div>
  );
}

const DivLayout = css`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`;

const SelectedTabStyle = css`
  color: ${main};
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  text-decoration: underline;
  text-underline-position: under;
  text-shadow: 1px 1px 4px rgba(255, 255, 255, 0.1);
`;

const TabStyle = css`
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
`;

export default SortTab;
