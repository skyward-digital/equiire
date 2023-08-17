import { Metadata } from 'next';
import { ForgotPassword } from './ForgotPassword';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

export default async function Page() {
  return <ForgotPassword />;
}
