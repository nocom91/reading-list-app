import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    config!.module!.rules!.push(
      ...[
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          type: 'asset/resource',
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    );
    return config;
  },
};

export default config;
