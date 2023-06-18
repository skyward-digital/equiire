import { Avatar } from '#/ui/components/Avatar';

export function UserProfile({ className }: { className: string }) {
  return (
    <div
      className={`${className} bg-vc-border-gradient inset-x-0 w-full rounded-lg bg-opacity-10 p-px dark:shadow-lg dark:shadow-black/20`}
    >
      <div className="flex items-center gap-2 rounded-lg bg-white p-3.5 dark:bg-black lg:px-5 lg:py-3">
        <a href="https://vercel.com" title="Vercel">
          <Avatar
            className="bg-orange-400 dark:bg-orange-500"
            width={40}
            height={40}
          >
            DS
          </Avatar>
        </a>

        <div>
          <p className="dark:text-white">Dan Spratling</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @danspratling
          </p>
        </div>
      </div>
    </div>
  );
}
