import { css } from '@emotion/react';
import { black, gray2, main } from '../../../../styles/ColorSystem';
import DeleteBtn from '../../../../assets/svgs/delete.svg?react';
import React, { useState } from 'react';

interface Props {
  placehold: string;
  setInput: (value: string) => void;
}
function Input({ placehold, setInput }: Props) {
  const [textVal, setTextVal] = useState<string>('');
  const areaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextVal(() => e.target.value);
    setInput(e.target.value);
  };

  const deleteTextHandler = () => {
    setTextVal(() => '');
  };

  return (
    <div css={Container}>
      <textarea
        typeof="search"
        css={DivStyle}
        onChange={areaChangeHandler}
        rows={1}
        placeholder={placehold}
        value={textVal}
      ></textarea>
      <div css={DeleteStyle} onClick={deleteTextHandler}>
        <DeleteBtn />
      </div>
    </div>
  );
}

const Container = css`
  width: 100%;
  position: relative;
`;

const DivStyle = css`
  width: 100%;
  padding: 1rem 0 1rem 1rem;
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

const DeleteStyle = css`
  background-color: rgb(85, 85, 85, 0.7);
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  & > svg > path {
    fill: white;
  }
`;

export default Input;
