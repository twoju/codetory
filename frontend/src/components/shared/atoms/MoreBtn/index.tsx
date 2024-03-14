import { css } from '@emotion/react';
import { gray3 } from '../../../../styles/ColorSystem';
import { NavLink } from 'react-router-dom';

interface Props {
  url: string;
}

function MoreBtn({ url }: Props) {
  return (
    <NavLink to={url} css={Style}>
      더보기
    </NavLink>
  );
}

const Style = css`
  color: ${gray3};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: normal;
  opacity: 0.75;
  text-decoration: none;
`;

export default MoreBtn;
