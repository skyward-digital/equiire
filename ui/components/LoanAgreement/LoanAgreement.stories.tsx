import type { Meta, StoryObj } from '@storybook/react';
import { LoanAgreement } from './LoanAgreement';

const meta: Meta<typeof LoanAgreement> = {
  title: 'Components/LoanAgreement',
  component: LoanAgreement,
  parameters: {
    docs: {
      description: {
        component:
          'LoanAgreement component is a dialog that loads an iframe where the user will sign a loan agreement document',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoanAgreement>;

export const Default: Story = {
  args: {
    defaultOpen: true,
  },
};
