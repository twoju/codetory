import type { Meta, StoryObj } from '@storybook/react';
import QuestList from '.';
import quest01 from '../../../../assets/pngs/quest01.png';

const meta: Meta<typeof QuestList> = {
  title: 'Organism/QuestList',
  component: QuestList,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'QuestList 문서입니다.',
    docs: {
      description: {
        component: `QuestList는 quest 목록을 받아서 아이템에 하나씩 mapping 해주는 organism 입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestList>;

export const Default: Story = {
  args: {
    questList: [
      {
        url: quest01,
        title: '고려시대 벽란도 학습하기',
        content: '오늘은 수학적으로 비교도 한대!',
      },
      {
        url: quest01,
        title: '고려시대 벽란도 학습하기',
        content: '오늘은 수학적으로 비교도 한대!',
      },
    ],
  },
};
