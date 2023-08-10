import type { Meta, StoryObj } from '@storybook/react';
import { PersonalInformationForm } from '.';

const meta: Meta<typeof PersonalInformationForm> = {
  title: 'Components/SignupForm/PersonalInformation',
  component: PersonalInformationForm,
  parameters: {
    docs: {
      description: {
        component:
          'PersonalInformationForm is the form where users enter their personal details during the sign up flow.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PersonalInformationForm>;

export const Default: Story = {};
