import type { Preview } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

const preview: Preview = {
  decorators: [
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;