import { css } from '@emotion/react';

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
  background-color: var(--CT_MAIN);
  color: var(--CT_WHITE);
  font-size: 2rem;
  font-weight: 700;
`;

export default Button;
