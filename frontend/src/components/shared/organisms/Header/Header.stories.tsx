import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';
import CostBox from '../../molecules/CostBox';

const meta: Meta<typeof Header> = {
  title: 'Organism/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '헤더 문서입니다.',
    docs: {
      description: {
        component: `Header는 어플 상단에 위치하며 Router에서 path에 따라 형태가 달라집니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    page: 'default',
    title: '로드맵',
    cost: <CostBox star={10} puzzle={10} />,
  },
};
