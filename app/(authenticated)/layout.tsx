import { Header } from '#/ui/components/Header';
import Sidebar from '#/ui/components/Sidebar';
import { VectorSquare } from '#/ui/assets/VectorSquare';

export const metadata = {
  title: 'Settings',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VectorSquare className="fixed top-0 -z-10 h-screen w-full max-w-full overflow-auto text-gray-300 opacity-10 dark:text-gray-700 dark:opacity-10" />

      <div className="z-10 flex w-full flex-col">
        <Header />
        <Sidebar />
      </div>

      <main className="flex h-screen w-full flex-col overflow-auto pl-56 pt-20">
        {children}
      </main>
    </>
  );
}
