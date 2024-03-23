import { css } from '@emotion/react';
import Content from '../../atoms/Content';
import HashTag from '../../atoms/HashTag';

interface Props {
  content: string;
  tags: string[];
}

function ContentTab({ content, tags }: Props) {
  return (
    <div css={divStyle}>
      <Content content={content} />
      <HashTag tags={tags} />
    </div>
  );
}

const divStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export default ContentTab;
