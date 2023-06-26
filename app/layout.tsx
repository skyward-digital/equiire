import '#/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
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

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const mazzard = localFont({
  src: [
    {
      path: '../public/fonts/MazzardH-Bold.otf',
      weight: '700',
    },
    {
      path: '../public/fonts/MazzardH-SemiBold.otf',
      weight: '600',
    },
    {
      path: '../public/fonts/MazzardH-Regular.otf',
      weight: '400',
    },
  ],
  variable: '--font-mazzard',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mazzard.variable} ${inter.className}`}>
      <body className="flex overflow-y-scroll bg-white dark:bg-black">
        <ThemeProvider>
          <Sidebar />

          <main className="mt-4 flex min-h-screen w-full flex-col pl-72">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
