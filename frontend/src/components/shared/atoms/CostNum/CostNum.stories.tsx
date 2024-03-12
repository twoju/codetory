import type { Meta, StoryObj } from '@storybook/react';
import CostNum from '.';
import FilledStar from '../../../../assets/svgs/star.svg?react';

const meta: Meta<typeof CostNum> = {
  title: 'Atom/CostNum',
  component: CostNum,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'CostNum 문서입니다.',
    docs: {
      description: {
        component: `CostNum 에 대한 내용을 설명하기`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CostNum>;

export const Default: Story = {
  args: {
    icon: <FilledStar />,
    cost: 10,
  },
};
