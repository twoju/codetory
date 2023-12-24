import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '버튼 문서입니다.',
    docs: {
        description: {
            component: `Button 에 대한 내용을 설명하기`
        }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: '입장하기',
  },
};
