import { css } from '@emotion/react';
import { gray3 } from '../../../../styles/ColorSystem';

interface Props {
  page: 'default' | 'story' | 'others';
  title?: string;
}

function Header({ page = 'default', title }: Props) {
  return <div css={[Style, page]}>{title}</div>;
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

export default Header;
