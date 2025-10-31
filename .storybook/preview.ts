import { TuiRoot } from '@taiga-ui/core';
import type { Preview } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [TuiRoot],
      providers: [NG_EVENT_PLUGINS]
    })
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