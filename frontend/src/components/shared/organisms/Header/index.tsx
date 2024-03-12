import { css } from '@emotion/react';
import { gray3 } from '../../../../styles/ColorSystem';
import { ReactNode } from 'react';

interface Props {
  page: 'default' | 'tab' | 'home';
  title?: string;
  cost?: ReactNode;
}

function Header({ page = 'default', title, cost }: Props) {
  return (
    <div css={[Style, page]}>
      <div>{title}</div>
      {cost}
    </div>
  );
}

const Style = css`
  width: min(430px, 100%);
  position: fixed;
  height: 72px;
  background-color: transparent;
  font-size: 2.25rem;
  font-weight: 600;
  font-style: normal;
  color: ${gray3};
  padding: 2.5rem 2.6rem 0.5rem 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: relative;
`;

export default Header;
