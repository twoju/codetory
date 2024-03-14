import type { Meta, StoryObj } from '@storybook/react';
import QuestItem from '.';
import quest01 from '../../../../assets/pngs/quest01.png';

const meta: Meta<typeof QuestItem> = {
  title: 'Molecule/QuestItem',
  component: QuestItem,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'QuestItem 문서입니다.',
    docs: {
      description: {
        component: `QuestItem은 QuestList를 구성하는 요소입니다. 퀘스트 종류를 받아와서 그에 맞는 이미지와 퀘스트 이름을 띄워줍니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestItem>;

export const Default: Story = {
  args: {
    url: quest01,
    title: '고려시대 벽란도 학습하기',
    content: '오늘은 수학적으로 비교도 한대!',
  },
};
