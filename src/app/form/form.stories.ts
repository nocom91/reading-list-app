import { Meta, StoryObj } from '@storybook/angular';
import { Form } from './form';

const meta: Meta<Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story) => {
      return {
        template: `
        <div>
          ${story().template}
        </div>
      `,
      };
    },
  ],
};

export default meta;
type Story = StoryObj<Form>;

export const Start: Story = {};
