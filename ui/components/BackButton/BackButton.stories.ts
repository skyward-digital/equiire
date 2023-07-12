import type { Meta, StoryObj } from '@storybook/react';
import { BackButton } from '.';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
  parameters: {
    docs: {
      description: {
        component:
          'BackButton allows a user to go back. It is used typically to go back to the login page',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {};
