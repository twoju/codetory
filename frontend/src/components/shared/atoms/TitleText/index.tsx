import { css } from '@emotion/react';
import { black } from '../../../../styles/ColorSystem';

interface Props {
  title: string;
}

function TitleText({ title }: Props) {
  return <div css={Style}>{title}</div>;
}

const Style = css`
  color: ${black};
  font-size: 2.25rem;
  font-weight: 600;
  line-height: normal;
`;

export default TitleText;
