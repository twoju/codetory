import { css } from '@emotion/react';
import { black } from '../../../../styles/ColorSystem';

interface Props {
  text: string;
}

function Text({ text }: Props) {
  return <div css={Style}>{text}</div>;
}

const Style = css`
  color: ${black};
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: pre-line;
`;

export default Text;
