import { Checkbox } from './Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Checkbox component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'text',
    label: 'Accept terms and condidtions',
  },
};

export const Checked: Story = {
  args: {
    id: 'email',
    label: 'Accept terms and condidtions',
    checked: true,
  },
};
