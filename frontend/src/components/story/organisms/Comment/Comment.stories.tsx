import type { Meta, StoryObj } from '@storybook/react';
import Comment from '.';

const meta: Meta<typeof Comment> = {
  title: 'Organism/Comment',
  component: Comment,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'Comment 문서입니다.',
    docs: {
      description: {
        component: `Comment 전 페이지에 걸쳐서 사용자의 재화 정보를 알려주는 Chip 입니다. Header에서 포함되어 사용되고 있습니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Default: Story = {};
