import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '.';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'RadioGroup component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const args = {
  left: {
    label: 'Credit Builder',
    value: 'credit-builder',
  },
  right: {
    label: 'Standard Loan',
    value: 'standard',
  },
  defaultValue: 'credit-builder',
  ariaLabel: 'Choose your loan',
};

export const Default: Story = {
  args,
};
