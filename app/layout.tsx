import '#/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import ThemeProvider from './ThemeProvider';
import SessionProvider from './SessionProvider';

export const metadata: Metadata = {
  title: {
    default: 'Equiire Loans',
    template: '%s | Equiire',
  },
  description: 'A loan application platform for businesses',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en" className={`${mazzard.variable} ${inter.variable}`}>
      <body className="bg-white dark:bg-black">
        <ThemeProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
