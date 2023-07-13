import { Header } from '#/ui/components/Header/Header';
import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';

export default function Page() {
  return (
    <>
      <Header title="Dashboard" />

      <div className="container flex flex-1 flex-col items-center justify-center gap-8 py-4 pt-24">
        <NotificationBanner
          status="warning"
          message="You still need to complete your account setup"
          link="#"
          linkLabel="Complete setup"
        />

        <div className="h-full p-4">Dashboard page</div>
      </div>
    </>
  );
}
