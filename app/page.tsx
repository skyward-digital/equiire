import Image from 'next/image';
import { Badge } from '#/ui/components/Badge';
import { ButtonLink } from '#/ui/components/Button';
import { Header } from '#/ui/components/Header/Header';
import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';
import ClockImage from './images/clock.png';

export default function Page() {
  return (
    <>
      <Header />

      <div className="container flex flex-1 flex-col items-center justify-center gap-8 py-4 pt-24">
        <NotificationBanner
          status="warning"
          message="You still need to complete your account setup"
          link="#"
          linkLabel="Complete setup"
        />

        {/* Loan Card */}
        <div className="w-full rounded-xl border shadow-sm dark:border-gray-600">
          {/* Header can be its own component - ID, Status, children */}
          <div className="flex w-full justify-between gap-4 border-b px-8 py-4 dark:border-gray-600">
            <div className="flex items-center gap-4">
              <p className="font-brand -mb-1 text-xl font-semibold text-gray-400 dark:text-gray-200">
                #7389142
              </p>
              <Badge type="info" dot>
                Processing
              </Badge>
            </div>

            {/* Buttons need refactoring */}
            <div className="flex items-center gap-4">
              <ButtonLink href="#" style="secondary" size="sm">
                View loan details
              </ButtonLink>
              <ButtonLink href="#" style="primary" size="sm">
                Make early payment
              </ButtonLink>
            </div>
          </div>

          <div className="flex justify-between gap-8 p-8">
            <div className="w-1/2">
              <h2 className="font-brand text-7xl">
                Loan of <strong className="text-brand">$85,000</strong>
                <br />
                in <strong className="text-brand">October 2023</strong>
              </h2>
            </div>
            <div className="w-2/5 space-y-4">
              <p className="text-success-600 text-xl font-semibold">
                Add loan details
              </p>
              <p className="text-xl font-semibold text-gray-600">
                Complete account setup
              </p>
              <p className="text-xl font-semibold text-gray-300">
                Add payment information
              </p>
              <p className="text-xl font-semibold text-gray-300">
                Sign loan agreement
              </p>
              {/* OR */}
              <Image src={ClockImage} alt="clock" width={448} height={289} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
