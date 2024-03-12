import type { Meta, StoryObj } from '@storybook/react';
import CostBox from '.';

const meta: Meta<typeof CostBox> = {
  title: 'Molecule/CostBox',
  component: CostBox,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'CostBox 문서입니다.',
    docs: {
      description: {
        component: `CostBox는 전 페이지에 걸쳐서 사용자의 재화 정보를 알려주는 Chip 입니다. Header에서 포함되어 사용되고 있습니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CostBox>;

export const Default: Story = {
  args: {
    star: 10,
    puzzle: 100,
  },
};
