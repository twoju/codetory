import { css } from '@emotion/react';
import { main } from '@src/styles/ColorSystem';

interface Props {
  text: string;
}

function Button({ text }: Props) {
  return <div css={BtnStyle}>{text}</div>;
}

const BtnStyle = css`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  border-radius: 0.8rem;
  background-color: ${main};
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

export default Button;
