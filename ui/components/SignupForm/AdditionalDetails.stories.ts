import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalDetailsForm } from '.';

const meta: Meta<typeof AdditionalDetailsForm> = {
  title: 'Components/SignupForm/AdditionalDetails',
  component: AdditionalDetailsForm,
  parameters: {
    docs: {
      description: {
        component:
          'AdditionalDetailsForm is the form where users enter their additional details, such as their address, during the sign up flow.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AdditionalDetailsForm>;

export const Default: Story = {};
