import Link from 'next/link';
import { Header } from '#/ui/components/Header/Header';
import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';

export default function Page() {
  return (
    <>
      <Header title="Dashboard" />

      <div className="container flex flex-1 flex-col items-center justify-center gap-8 py-4">
        <NotificationBanner type="warning">
          <p>Notification</p>
          <Link href="#">Done</Link>
        </NotificationBanner>

        <div className="h-full p-4">Dashboard page</div>
      </div>
    </>
  );
}
