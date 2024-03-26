import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from '.';
import Comment from '../../../story/organisms/Comment';

const meta: Meta<typeof BottomSheet> = {
  title: 'Molecule/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'BottomSheet 문서입니다.',
    docs: {
      description: {
        component: `BottomSheet 아래에서 위로 올라오는 페이지로 Backdrop 컴포넌트를 포함하여 컨텐츠 위로 올라옵니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  args: {
    children: <Comment />,
  },
};
