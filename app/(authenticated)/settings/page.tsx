import { Metadata } from 'next';
import {
  CreditCardIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  BuildingLibraryIcon,
  UserIcon,
} from '#/lib/@heroicons/react/24/outline';
import { TabHeading } from '#/ui/components/TabHeading';
import { SettingsCardLink } from '#/ui/components/SettingsCard';
import {
  CompanyForm,
  NameForm,
  EmailForm,
  AddressForm,
  PhoneForm,
  PasswordForm,
  LegalNameForm,
  DateOfBirthForm,
  SSNForm,
  LegalBusinessNameForm,
  EINForm,
  EntityTypeForm,
  BusinessAddressForm,
  BusinessPhoneForm,
  FormationDateForm,
  WebsiteForm,
  IndustryForm,
} from './components';
import {
  setStripePaymentPortal,
  getStripePaymentMethods,
} from '#/app/api/payments';
import { Button } from '#/ui/components/Button';
import { getUser } from '#/app/api/profile';
import { User } from '#/app/api/profile/user';
import { getCustomerFields } from '#/lib/getCustomerFields';
import { getBusinessFields } from '#/lib/getBusinessFields';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Your account details and user information',
};

export type CustomerFields = {
  fullLegalName: User['fullLegalName'];
  dateOfBirth: User['dateOfBirth'];
  phone: User['phone'];
  ssn: User['ssn'];
  address: User['address'];
};

export type BusinessFields = {
  legalBusinessName: User['legalBusinessName'];
  company: User['company'];
  ein: User['ein'];
  entityType: User['entityType'];
  businessAddress: User['businessAddress'];
  businessPhone: User['businessPhone'];
  formationDate: User['formationDate'];
  website: User['website'];
  industry: User['industry'];
};

export default async function SettingsPage() {
  const [user, paymentPortal, paymentMethods] = await Promise.all([
    getUser(),
    setStripePaymentPortal({
      returnUrl: `/settings`,
    }),
    getStripePaymentMethods(),
  ]);

  const [defaultPayment, ...restPayments] = paymentMethods.docs;

  const customerFields = getCustomerFields(user);
  const businessFields = getBusinessFields(user);

  return (
    <>
      <TabHeading
        links={[
          {
            id: 'personal',
            title: 'Personal Information',
            Icon: UserIcon,
          },
          {
            id: 'company',
            title: 'Company Information',
            Icon: DocumentTextIcon,
          },
          { id: 'payment', title: 'Cards/Banks', Icon: CreditCardIcon },
        ]}
      />

      <div className="prose prose-sm dark:prose-invert mb-16 mt-4 max-w-none space-y-8">
        <Wrapper id="personal" title="Personal Information">
          <NameForm name={user.name} />
          <LegalNameForm
            fullLegalName={user.fullLegalName}
            customerFields={customerFields}
          />
          <EmailForm email={user.email} />
          <PasswordForm />
          <AddressForm address={user.address} />
          <DateOfBirthForm
            dateOfBirth={user.dateOfBirth}
            customerFields={customerFields}
          />
          <PhoneForm phone={user.phone} />
          <SSNForm ssn={user.ssn} customerFields={customerFields} />
        </Wrapper>
        <Wrapper id="company" title="Company Information">
          <LegalBusinessNameForm
            legalBusinessName={user.legalBusinessName}
            businessFields={businessFields}
          />
          <CompanyForm company={user.company} />
          <EINForm ein={user.ein} businessFields={businessFields} />
          <EntityTypeForm
            entityType={user.entityType}
            businessFields={businessFields}
          />
          <BusinessAddressForm
            businessAddress={user.businessAddress}
            businessFields={businessFields}
          />
          <BusinessPhoneForm
            businessPhone={user.businessPhone}
            businessFields={businessFields}
          />
          <FormationDateForm
            formationDate={user.formationDate}
            businessFields={businessFields}
          />
          <WebsiteForm website={user.website} businessFields={businessFields} />
          <IndustryForm
            industry={user.industry}
            businessFields={businessFields}
          />
        </Wrapper>
        <Wrapper
          id="payment"
          title="Cards/Banks"
          buttonLink={paymentPortal?.url}
          buttonLabel="Add new"
        >
          {defaultPayment && (
            <>
              <h3 className="mb-0 mt-4 text-base font-semibold text-gray-400">
                Default Card
              </h3>

              <SettingsCardLink
                title={`${defaultPayment.paymentMethodInfo.brand} ${
                  defaultPayment.paymentMethodInfo.funding === 'debit'
                    ? '(debit)'
                    : ''
                }`}
                detail={`${
                  defaultPayment.type === 'card' ? '•••• •••• ••••' : '••••'
                } ${defaultPayment.paymentMethodInfo.last4}`}
                placeholder="0123 4567 8910 1112"
                Icon={
                  defaultPayment.type === 'card'
                    ? CreditCardIcon
                    : BuildingLibraryIcon
                }
                link={paymentPortal?.url}
              />

              <h3 className="mb-0 mt-4 text-base font-semibold text-gray-400">
                Linked Cards
              </h3>

              {restPayments.map(({ id, type, paymentMethodInfo: info }) => (
                <SettingsCardLink
                  key={id}
                  title={`${info.brand} ${
                    info.funding === 'debit' ? '(debit)' : ''
                  }`}
                  detail={`${type === 'card' ? '•••• •••• ••••' : '••••'} ${
                    info.last4
                  }`}
                  placeholder="0123 4567 8910 1112"
                  Icon={type === 'card' ? CreditCardIcon : BuildingLibraryIcon}
                  link={paymentPortal?.url}
                />
              ))}
            </>
          )}
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = ({
  id,
  title,
  buttonLink,
  buttonLabel,
  children,
}: {
  id: string;
  title: string;
  buttonLink?: string;
  buttonLabel?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-auto grid max-w-2xl gap-6">
      <div className="mt-6 flex items-center justify-between">
        <h2
          id={id}
          className="font-brand mb-2 mt-3 scroll-mt-40 text-2xl font-semibold"
        >
          {title}
        </h2>

        {buttonLink && buttonLabel && (
          <Button variant="secondary" size="sm" href={buttonLink}>
            {buttonLabel}
          </Button>
        )}
      </div>

      {children}
    </div>
  );
};
