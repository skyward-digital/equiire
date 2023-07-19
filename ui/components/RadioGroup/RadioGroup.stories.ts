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

export const Default: Story = {};
