import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar is a global component that shows up on the left side of the screen, allowing users to navigate through the app.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    user: {
      _id: '1',
      name: 'John Doe',
      email: 'johndoe@acme.com',
      company: 'Acme Inc',
      sub: '123',
      address: {
        addressLine1: '123 Main St',
        addressLine2: 'Suite 100',
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345',
        country: 'USA',
      },
      phone: '123-456-7890',
      contact: 'Jane Doe',
      recordStatus: 'ACTIVE',
      paymentCustomerId: 'cus_123',
      // __v: 0,
    },
  },
};
