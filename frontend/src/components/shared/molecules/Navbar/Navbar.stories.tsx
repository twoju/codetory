import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '.';

const meta: Meta<typeof Navbar> = {
  title: 'Molecule/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '헤더 문서입니다.',
    docs: {
      description: {
        component: `Navbar 에 대한 내용을 설명하기`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    tab: 'home',
  },
};
