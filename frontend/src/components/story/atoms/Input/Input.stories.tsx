import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Atom/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'Input 문서입니다.',
    docs: {
      description: {
        component: `Input은 story 페이지의 컴포넌트로 댓글 창에서 댓글 입력 input으로 사용됩니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
};
