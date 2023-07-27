import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import { Avatar } from '#/ui/components/Avatar';

type UserProfileProps = {
  user: AuthSession['user'];
  className: string;
};

export function UserProfile({ user, className }: UserProfileProps) {
  const username = user?.company ? user.company : user.name;
  const avatar = username
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className={className}>
      <Link
        href="/settings"
        className="flex items-center gap-2 rounded-lg p-2.5"
      >
        <p>{user.company ? user.company : user.name}</p>
        <Avatar className="bg-brand-500" width={24} height={24}>
          {avatar}
        </Avatar>
      </Link>
    </div>
  );
}

export default async function UserProfileComposable(props: any) {
  const session = (await getServerSession(authOptions)) as AuthSession;
  return <UserProfile user={session.user} {...props} />;
}
