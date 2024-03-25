import { css } from '@emotion/react';
import { black, gray2, main } from '../../../../styles/ColorSystem';

interface Props {
  placehold: string;
  setInput: (value: string) => void;
}
function Input({ placehold, setInput }: Props) {
  const areaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <textarea
      css={DivStyle}
      onChange={areaChangeHandler}
      rows={1}
      placeholder={placehold}
    ></textarea>
  );
}

const DivStyle = css`
  width: 100%;
  padding: 1rem 1rem;
  height: 1.8rem;
  color: ${black};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  border: 1px solid ${gray2};
  border-radius: 0.8rem;
  resize: none;
  display: flex;
  align-items: center;

  /* -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  } */

  :hover {
    border-color: rgb(68, 116, 244, 0.5);
  }
  :active {
    border-color: ${main};
  }
  ::placeholder {
    font-weight: 300;
    color: ${gray2};
  }
`;

export default Input;
