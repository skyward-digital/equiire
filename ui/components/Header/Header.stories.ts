import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Header component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    user: {
      _id: '1',
      name: 'John Doe',
      email: 'johndoe@acme.com',
      company: 'Acme Inc',
    },
  },
};
