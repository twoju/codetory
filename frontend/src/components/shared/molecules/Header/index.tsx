import { css } from '@emotion/react';
import { gray3 } from '../../../../styles/ColorSystem';

interface Props {
  page: 'default' | 'tab' | 'home';
  title?: string;
}

function Header({ page = 'default', title }: Props) {
  return (
    <div css={[Style, page]}>
      <div css={Title}>{title}</div>
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

const Title = css`
  padding-left: 30px;
`;

export default Header;
