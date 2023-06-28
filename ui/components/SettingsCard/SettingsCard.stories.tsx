import type { Meta, StoryObj } from '@storybook/react';
import { SettingsCard } from '.';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Input } from '../Form/Input';

const meta: Meta<typeof SettingsCard> = {
  title: 'Components/SettingsCard',
  component: SettingsCard,
  parameters: {
    docs: {
      description: {
        component:
          'SettingsCard is a form component that takes a title placeholder & icon (for the default view) and details if available, as well as the form content (children) and form functionality. This provides flexible reuse of the card while creating a standardised approach.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SettingsCard>;

export const Empty: Story = {
  args: {
    title: 'Full Name',
    Icon: UserCircleIcon,
    placeholder: 'Enter your name',
    children: (
      <Input
        id="company"
        label="Company Name"
        required="Company is required"
        autocomplete="organization"
      />
    ),
  },
};

export const Filled: Story = {
  args: {
    title: 'Full Name',
    Icon: UserCircleIcon,
    detail: 'Jane Doe',
    placeholder: 'Enter your name',
    children: (
      <Input
        id="company"
        label="Company Name"
        required="Company is required"
        autocomplete="organization"
      />
    ),
  },
};

export const Expanded: Story = {
  args: {
    title: 'Full Name',
    Icon: UserCircleIcon,
    detail: 'Jane Doe',
    placeholder: 'Enter your name',
    expanded: true,
    children: (
      <Input
        id="company"
        label="Company Name"
        required="Company is required"
        autocomplete="organization"
      />
    ),
  },
};
