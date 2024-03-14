import { css } from '@emotion/react';
import { black, gray1 } from '../../../../styles/ColorSystem';

export interface ItemProps {
  url: string;
  title: string;
  content: string;
}

function QuestItem({ url, title, content }: ItemProps) {
  return (
    <div css={DivStyle}>
      <img src={url} css={ImgStyle} alt="questImg" />
      <div>
        <div css={TitleStyle}>{title}</div>
        <div css={ContentStyle}>{content}</div>
      </div>
    </div>
  );
}

const DivStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.4rem;
`;

const ImgStyle = css`
  background-color: #f2f2f2;
  width: 9rem;
  height: 9rem;
  border-radius: 90px;
`;

const TitleStyle = css`
  color: ${black};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.6rem;
`;

const ContentStyle = css`
  color: ${gray1};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
`;
export default QuestItem;
