import { Metadata } from 'next';
import { ResetPassword } from './ResetPassword';

export const metadata: Metadata = {
  title: 'Reset password',
};

export default async function Page() {
  return <ResetPassword />;
}
