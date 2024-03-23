import { css } from '@emotion/react';
import { gray2 } from '../../../../styles/ColorSystem';

interface Props {
  tags: string[];
}

function HashTag({ tags }: Props) {
  return (
    <div css={DivStyle}>
      {tags.map((tag, idx) => (
        <div key={idx}># {tag}</div>
      ))}
    </div>
  );
}

const DivStyle = css`
  color: ${gray2};
  font-size: 1.8rem;
  font-weight: 300;
  line-height: normal;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default HashTag;
