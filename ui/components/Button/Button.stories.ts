import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

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

export const Primary: Story = {
  args: {
    children: 'Loading',
    style: 'primary',
    arrow: true,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Log In',
    style: 'primary',
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    children: 'Loading',
    style: 'link',
    arrow: true,
  },
};
