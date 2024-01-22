import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';
const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths').default;

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config: InlineConfig): Promise<InlineConfig> => {
    config.plugins?.push(
      tsconfigPaths({
        projects: [
          path.resolve(path.dirname(__dirname), 'src', '../tsconfig.json'),
        ],
      }),
    );
    return config;
  },
};
export default config;
