import { DarkModeToggle } from '#/ui/components/Header/DarkModeToggle';
import { VectorLogoE } from '#/ui/assets/VectorLogoE';

export const metadata = {
  title: 'Login',
};

// This layout should be different from the main app layout which can be achieved by turning this into a root layout (and removing the layout at app/layout.tsx)
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VectorLogoE className="fixed top-0 -z-10 hidden h-screen w-full max-w-full overflow-auto sm:block" />
      <DarkModeToggle className="fixed right-0 top-0 hidden sm:block" />
      <div className="sm:my-20">{children}</div>
    </>
  );
}
