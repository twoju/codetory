import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'Molecule/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '헤더 문서입니다.',
    docs: {
      description: {
        component: `Header 에 대한 내용을 설명하기`,
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
  },
};
