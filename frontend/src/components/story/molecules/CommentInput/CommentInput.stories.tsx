import type { Meta, StoryObj } from '@storybook/react';
import CommentInput from '.';

const meta: Meta<typeof CommentInput> = {
  title: 'Molecule/CommentInput',
  component: CommentInput,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'CommentInput 문서입니다.',
    docs: {
      description: {
        component: `CommentInput story 페이지의 컴포넌트로 댓글 창에서 댓글 입력 input으로 사용됩니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentInput>;

export const Default: Story = {
};
