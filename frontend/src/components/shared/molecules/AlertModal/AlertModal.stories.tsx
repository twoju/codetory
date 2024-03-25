import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from '.';

const meta: Meta<typeof AlertModal> = {
  title: 'Molecule/AlertModal',
  component: AlertModal,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '버튼 문서입니다.',
    docs: {
        description: {
            component: `AlertModal 에 대한 내용을 설명하기`
        }
    }
  }
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
    args: {
        title: '앗! 오픈 준비중이에요',
        content: '이 기능은 개발 진행 중입니다.'
    }
};