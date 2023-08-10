import Link from 'next/link';
import { Avatar } from '#/ui/components/Avatar';
import { User } from '#/app/api/profile/user';

type UserProfileProps = {
  user: User;
  className?: string;
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
        className="focus:outline-brand-100 flex items-center gap-2 rounded-lg p-2.5 "
      >
        <p>{user.company ? user.company : user.name}</p>
        <Avatar className="bg-brand-500" width={24} height={24}>
          {avatar}
        </Avatar>
      </Link>
    </div>
  );
}
