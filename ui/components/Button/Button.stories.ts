import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Loading',
  },
};

export const Small: Story = {
  args: {
    children: 'Log In',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Log In',
    size: 'lg',
  },
};

export const Arrow: Story = {
  args: {
    children: 'Loading',
    variant: 'primary',
    arrow: true,
  },
};

export const Icon: Story = {
  args: {
    children: 'Loading',
    Icon: ShoppingCartIcon,
  },
};

export const IconOnly: Story = {
  args: {
    Icon: ShoppingCartIcon,
    'aria-label': 'Add to cart',
  },
};

export const Link: Story = {
  args: {
    children: 'Loading',
    variant: 'link',
    arrow: true,
  },
};
