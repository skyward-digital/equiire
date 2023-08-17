import { getOptionalServerSession } from '#/app/api/session';
import { SignUp } from './SignUp';

export default async function Page() {
  const { user } = await getOptionalServerSession();
  return <SignUp user={user} />;
}
