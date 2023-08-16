import { getServerSession } from '#/app/api/session';
import { SignUp } from './SignUp';

export default async function Page() {
  const { user } = await getServerSession();
  // return null;
  return <SignUp user={user} />;
}
