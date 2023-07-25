import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectItem } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Select component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const args = {
  placeholder: 'Select an option',
};

export const Example: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </Select>
  ),
};
Example.args = args;
