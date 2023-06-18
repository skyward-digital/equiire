export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const navigation: { name: string; items: Item[] }[] = [
  {
    name: 'Logged out Pages',
    items: [
      {
        name: 'Login',
        slug: 'login',
      },
      {
        name: 'Sign Up',
        slug: 'sign-up',
      },
      {
        name: 'Loan Application',
        slug: '#',
      },
    ],
  },
  {
    name: 'Authenticated/Logged in Pages',
    items: [
      {
        name: 'Dashboard',
        slug: '',
      },
      {
        name: 'Loans',
        slug: '#',
      },
      {
        name: 'Payments',
        slug: 'history',
      },
      {
        name: 'Settings',
        slug: 'settings',
      },
    ],
  },
];
