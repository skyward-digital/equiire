import Link from 'next/link';
import { Avatar } from '#/ui/components/Avatar';

export function UserProfile({ className }: { className: string }) {
  return (
    <div className={className}>
      <Link
        href="/settings"
        className="flex items-center gap-2 rounded-lg p-2.5"
      >
        <p>Dan Spratling</p>
        <Avatar className="bg-orange-500" width={24} height={24}>
          DS
        </Avatar>
      </Link>
    </div>
  );
}
