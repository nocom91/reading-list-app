import { Meta, StoryObj } from '@storybook/angular';
import { Form } from './form';

const meta: Meta<Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<Form>;

export const Start: Story = {};
