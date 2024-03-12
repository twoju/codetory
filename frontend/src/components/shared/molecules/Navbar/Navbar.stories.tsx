import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '.';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof Navbar> = {
  title: 'Molecule/Navbar',
  component: Navbar,
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/',
      },
    }),
    layout: 'fullscreen',
    componentSubtitle: 'Navbar 문서입니다.',
    docs: {
      description: {
        component: `Navbar 는 어플 하단에 위치하여 페이지의 이동을 도와주는 하단 탭입니다. Router 파일에서 Wrapper로 감싸져 사용되고 있습니다.`,
      },
    },
  },
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
