import { css } from '@emotion/react';

interface Props {
  content: string;
}

function Content({ content }: Props) {
  return <div css={DivStyle}>{content}</div>;
}

const DivStyle = css`
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
`;

export default Content;
