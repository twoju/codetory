import { css } from '@emotion/react';
import CommentInput from '../../molecules/CommentInput';
import { black, gray2 } from '../../../../styles/ColorSystem';
import profileImg from '../../../../assets/pngs/profile.png';

const comments = [
  {
    id: 1,
    image: profileImg,
    comment: '댓글이당',
    writer: '수지',
    writerId: '3',
  },
  {
    id: 2,
    image: profileImg,
    comment: '댓글이당',
    writer: '수지',
    writerId: '3',
  },
  {
    id: 3,
    image: profileImg,
    comment: '댓글이당',
    writer: '수지',
    writerId: '3',
  },
  {
    id: 4,
    image: profileImg,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus itaque doloribus, qui porro doloremque et neque quos. Ipsa aliquam optio cum nulla corrupti accusantium officiis vel ab veritatis maiores.',
    writer: '수지',
    writerId: '3',
  },
];

function Comment() {
  return (
    <div css={DivStyle}>
      <div css={TitleStyle}>
        댓글 <span>{comments.length}</span>
      </div>
      <CommentInput />
      <div css={CommentDiv}>
        {comments.map((comment, idx) => (
          <>
            <div key={idx} css={CommentItem}>
              <img src={comment.image} />
              <span>
                {comment.writer}
                <div>{comment.comment}</div>
              </span>
            </div>
            {idx + 1 != comments.length && <div css={LineDivide}></div>}
          </>
        ))}
      </div>
    </div>
  );
}

const DivStyle = css`
  height: 90%;
  overflow: visible;
`;

const TitleStyle = css`
  color: ${black};
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2rem;
  & > span {
    color: ${gray2};
    font-weight: 500;
  }
`;

const CommentDiv = css`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 70%;
  margin: 2rem 0;
`;

const LineDivide = css`
  width: 100%;
  border: 0.5px solid rgb(219, 219, 219, 0.5);
`;

const CommentItem = css`
  display: flex;
  padding: 1rem 0;
  align-items: start;
  & > img {
    width: 3rem;
    height: 3rem;
    background: violet;
    border-radius: 50%;
    margin-right: 1rem;
  }
  & > span {
    color: rgba(85, 85, 85, 0.5);
    font-size: 1.6rem;
    font-weight: 600;
    line-height: normal;
    padding-top: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    & > div {
      color: ${black};
      font-size: 1.8rem;
      font-weight: 400;
      line-height: normal;
      margin-top: 1rem;
    }
  }
`;

export default Comment;
