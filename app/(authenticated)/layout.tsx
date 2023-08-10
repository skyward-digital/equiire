import { VectorSquare } from '#/ui/assets/VectorSquare';
import { getUser } from '#/app/api/profile/getUser';
import { NavigationLayout } from '#/ui/components/NavigationLayout';

export const metadata = {
  title: 'Settings',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <>
      <VectorSquare className="fixed top-0 -z-10 h-screen w-full max-w-full overflow-auto text-gray-300 opacity-10 dark:text-gray-700 dark:opacity-10" />
      <NavigationLayout user={user} />
      <main className="flex h-screen w-full flex-col overflow-auto pt-20 lg:pl-56">
        {children}
      </main>
    </>
  );
}
