import { css } from '@emotion/react';
import QuestItem, { ItemProps } from '../../molecules/QuestItem';

interface ListProps {
  questList: ItemProps[];
}

function QuestList({ questList }: ListProps) {
  return (
    <div css={DivStyle}>
      {questList.map((item, idx) => (
        <QuestItem
          key={idx}
          url={item.url}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

const DivStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export default QuestList;
