import { useState } from 'react';
import { css } from '@emotion/react';
import Profile from '../../molecules/Profile';
import ContentTab from '../../molecules/ContentTab';
import LikeIcon from '../../../../assets/svgs/heart.svg?react';
import CommentIcon from '../../../../assets/svgs/comment.svg?react';
import ShareIcon from '../../../../assets/svgs/share.svg?react';

interface Props {
  name: string;
  url: string;
  id: number;
  content: string;
  onClose: () => void;
}

const dummyTags = ['벽란도', '고려시대', '퀘스트', '체험'];

function BottomInfo({ name, url, id, content, onClose }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const likeHandler = () => {
    setIsLiked((pre) => !pre);
  };

  return (
    <>
      <div css={DivStyle}>
        <div css={LeftBox}>
          <Profile name={name} url={url} id={id} />
          <ContentTab tags={dummyTags} content={content} />
        </div>
        <div css={RightBox}>
          <div css={isLiked ? LikeStyle : UnlikeStyle}>
            <LikeIcon onClick={likeHandler} />
          </div>
          <CommentIcon onClick={onClose} />
          <ShareIcon />
        </div>
      </div>
    </>
  );
}

const DivStyle = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem;
  box-sizing: border-box;
`;

const LeftBox = css`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const RightBox = css`
  display: flex;
  flex-direction: column;
  gap: 2.15rem;
  & > svg {
    cursor: pointer;
  }
`;

const UnlikeStyle = css`
  & > svg {
    fill-opacity: 0;
    fill: #f17148;
    transition: 0.2s;
    cursor: pointer;
  }
`;

const LikeStyle = css`
  & > svg {
    fill: #f17148;
    fill-opacity: 1;
    transition: 0.2s;
    cursor: pointer;
    & > path {
      stroke: #f17148;
    }
  }
`;

export default BottomInfo;
