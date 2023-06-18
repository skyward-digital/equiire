import '#/styles/globals.css';
import { Metadata } from 'next';
import { Sidebar } from '#/ui/components/Sidebar/Sidebar';
import ThemeProvider from './ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'Next.js App Router',
    template: '%s | Next.js App Router',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-1100 flex overflow-y-scroll bg-white">
        <ThemeProvider>
          <Sidebar />

          <main className="flex min-h-screen w-full flex-col pl-72">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
