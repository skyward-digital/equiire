import {
  CreditCardIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from '#/lib/@heroicons/react/24/outline';
import { getServerSession } from '#/app/api/session';
import { TabHeading } from '#/ui/components/TabHeading';
// import { UserPaymentCards } from './UserPaymentCards';
import {
  CompanyForm,
  NameForm,
  EmailForm,
  AddressForm,
  PhoneForm,
  PasswordForm,
} from './components';

export default async function SettingsPage() {
  const { user } = await getServerSession();

  return (
    <>
      <TabHeading
        links={[
          { id: 'details', title: 'Company Details', Icon: DocumentTextIcon },
          { id: 'security', title: 'Security', Icon: ShieldCheckIcon },
          { id: 'payment', title: 'Cards/Banks', Icon: CreditCardIcon },
        ]}
      />

      <div className="prose prose-sm dark:prose-invert mb-16 max-w-none">
        <Wrapper id="details" title="Company Details">
          <CompanyForm company={user.company} />
          <NameForm name={user.name} />
          <EmailForm email={user.email} />
          <AddressForm address={user.address} />
          <PhoneForm phone={user.phone} />
        </Wrapper>

        <Wrapper id="security" title="Security">
          <PasswordForm />
        </Wrapper>

        <Wrapper id="payment" title="Cards/Banks">
          {/* <UserPaymentCards /> */}
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-auto grid max-w-2xl gap-8">
      <h2 id={id} className="font-brand scroll-mt-40 text-2xl font-semibold">
        {title}
      </h2>

      {children}
    </div>
  );
};
