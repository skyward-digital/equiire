import type { Meta, StoryObj } from '@storybook/react';
import { LoanCalculator } from '.';

const meta: Meta<typeof LoanCalculator> = {
  title: 'Components/LoanCalculator',
  component: LoanCalculator,
  parameters: {
    docs: {
      description: {
        component:
          'LoanCalculator is a component where the user tailors their loan to them',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoanCalculator>;

export const Default: Story = {};
