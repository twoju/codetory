import { css } from '@emotion/react';
import Input from '../../atoms/Input';
import { gray2, main } from '../../../../styles/ColorSystem';
import { useState } from 'react';

function CommentInput() {
  const [text, setText] = useState<string>('');

  const buttonClickHandler = () => {
    console.log('clicked', text);
  };

  return (
    <div css={DivStyle}>
      <Input placehold={'댓글을 입력해주세요'} setInput={setText} />
      <button
        css={[BtnStyle, text && BtnColor]}
        disabled={text ? false : true}
        onClick={buttonClickHandler}
      >
        등록
      </button>
    </div>
  );
}

const DivStyle = css`
  display: flex;
  gap: 0.1rem;
`;

const BtnStyle = css`
  padding: 1rem 0 1rem 1rem;
  box-sizing: border-box;
  width: 6rem;
  font-size: 1.4rem;
  background: none;
  border: none;
  color: ${gray2};
`;

const BtnColor = css`
  color: ${main};
  font-weight: 500;
  cursor: pointer;
`;

export default CommentInput;
