'use client';
import { useForm } from 'react-hook-form';
import {
  BuildingOffice2Icon,
  UserIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  KeyIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
import { Input, Checkbox } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { useCurrentSection } from '#/hooks/useCurrentSection';

export default function SettingsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const currentSection = useCurrentSection(['details', 'security', 'payment']);

  // Despite all the forms, we only capture data once so there's only one submit handler. We save every time a user closes a card.
  const onSubmit = (data: any) => {
    console.log({ data });
    // Here you would typically send the data to your server
    // to update the user account.
  };
} from '#/lib/@heroicons/react/24/outline';
import { TabHeading } from '#/ui/components/TabHeading';

  const password: string = watch('password');
  const confirmPassword: string = watch('confirmPassword');

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
        {/* user details form */}
        <div className="mx-auto grid max-w-2xl gap-8">
          <h2
            id="details"
            className="font-brand scroll-mt-40 text-2xl font-semibold"
          >
            Company Details
          </h2>

          {/* Edit card collapsed */}
          <SettingsCard
            title="Company"
            // detail="This is the company name"
            placeholder="Acme Inc."
            Icon={BuildingOffice2Icon}
            onSave={handleSubmit(onSubmit)}
            errors={errors.company}
          >
            <Input
              id="company"
              label="Company Name"
              register={register}
              required="Company is required"
              error={errors.company}
              autocomplete="organization"
            />
          </SettingsCard>

          <SettingsCard
            title="Contact"
            // detail="This is the company name"
            placeholder="Jane Doe"
            Icon={UserIcon}
            onSave={handleSubmit(onSubmit)}
            errors={errors.firstname || errors.lastname}
          >
            <Input
              id="firstname"
              label="First Name"
              register={register}
              required="First name is required"
              error={errors.firstname}
              autocomplete="given-name"
            />

            <Input
              id="lastname"
              label="Last Name"
              register={register}
              required="Last name is required"
              error={errors.lastname}
              autocomplete="family-name"
            />
          </SettingsCard>

          <SettingsCard
            title="Email"
            // detail="This is the company name"
            placeholder="jane.doe@acme.inc"
            Icon={EnvelopeIcon}
            onSave={handleSubmit(onSubmit)}
            errors={errors.email}
          >
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="test@test.com"
              register={register}
              required="Email is required"
              pattern={{
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              }}
              error={errors.email}
            />
          </SettingsCard>

          <SettingsCard
            title="Address"
            // detail="This is the company name"
            placeholder="Acme Inc., 123 Main St, New York, NY 10001"
            Icon={MapPinIcon}
            onSave={handleSubmit(onSubmit)}
            errors={
              errors.address1 || errors.city || errors.state || errors.zip
            }
          >
            {/* TODO: Question - Should we implement an address lookup here? */}
            <Input
              id="address1"
              label="Address 1"
              placeholder="123 Main St"
              register={register}
              required="Address is required"
              error={errors.address1}
              autocomplete="address-line1"
            />

            <Input
              id="address2"
              label="Address 2"
              placeholder="Apt 1"
              register={register}
              error={errors.address2}
              autocomplete="address-line2"
            />

            <Input
              id="city"
              label="City"
              placeholder="New York"
              register={register}
              required="City is required"
              error={errors.city}
              autocomplete="address-level2"
            />

            <div className="flex gap-2">
              {/* This should probably be a select as states are fixed */}
              <Input
                id="state"
                label="State"
                placeholder="NY"
                register={register}
                required="State is required"
                error={errors.state}
                className="w-1/2"
                autocomplete="address-level1"
              />

              <Input
                id="zip"
                label="Zip"
                placeholder="10001"
                register={register}
                required="Zip is required"
                size={5}
                error={errors.zip}
                className="w-1/2"
                autocomplete="postal-code"
              />
            </div>
          </SettingsCard>

          <SettingsCard
            title="Phone Number"
            // detail="This is the company name"
            placeholder="+1 (555) 555-5555"
            Icon={PhoneIcon}
            onSave={handleSubmit(onSubmit)}
            errors={errors.phone}
          >
            <Input
              id="phone"
              type="tel"
              label="Phone Number"
              placeholder="+1 (555) 555-5555"
              register={register}
              required="Phone number is required"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              error={errors.phone}
            />
          </SettingsCard>
        </div>

        {/* Password reset form */}
        <div className="mx-auto mt-8 grid max-w-2xl gap-8">
          <h2
            id="security"
            className="font-brand scroll-mt-40 text-2xl font-semibold"
          >
            Security
          </h2>

          <SettingsCard
            title="Password"
            // detail="This is the company name"
            placeholder="*****"
            Icon={KeyIcon}
            onSave={() => {
              handleSubmit(onSubmit);
            }}
            errors={
              errors.password ||
              errors.confirmPassword ||
              errors.currentPassword
            }
          >
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="New Password"
              register={register}
              required="Password is required"
              error={errors.password}
            />

            <Input
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="New Password"
              register={register}
              required="Password confirmation is required"
              validate={(value: string) =>
                value === password || 'The passwords do not match'
              }
              error={errors.confirmPassword}
            />

            {password && password === confirmPassword ? (
              <Input
                id="currentPassword"
                type="password"
                label="Password"
                placeholder="Old Password"
                register={register}
                required="You need to enter your current password to update your password"
                error={errors.currentPassword}
              />
            ) : null}
          </SettingsCard>
        </div>

        {/* Payment details */}
        <div className="mx-auto mt-8 grid max-w-2xl gap-8">
          <h2
            id="payment"
            className="font-brand scroll-mt-40 text-2xl font-semibold"
          >
            Cards/Banks
          </h2>

          <h3 className="mb-0 text-base font-semibold text-gray-400">
            Preferred
          </h3>
          {/* Credit Card example */}
          <SettingsCard
            title="Mastercard"
            detail="•••• 4756"
            placeholder="4242 4242 4242 4242"
            Icon={CreditCardIcon}
            onSave={handleSubmit(onSubmit)}
            errors={errors.cc_fullname || errors.cc_number}
          >
            <Input
              id="cc_fullname"
              label="Full Name"
              register={register}
              required="Name is required"
              error={errors.cc_fullname}
              autocomplete="cc-given-name"
            />

            <Input
              id="cc_number"
              label="Card Number"
              register={register}
              required="Name is required"
              placeholder="4242 4242 4242 4242"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              maxLength={19}
              error={errors.cc_number}
              autocomplete="cc-number"
            />

            <div className="mb-2 grid grid-cols-2 gap-4">
              <Input
                id="cc_expiry"
                type="text"
                label="Expiry"
                placeholder="mm/yy"
                pattern="[0-9\/]{5}"
                maxLength={5}
                inputMode="numeric"
                register={register}
                required="Expiry date is required"
                error={errors.cc_expiry}
                autocomplete="cc-exp"
              />

              <Input
                id="cc_cvc"
                type="password"
                label="CVC"
                placeholder="123"
                pattern="[0-9]{3}"
                maxLength={3}
                inputMode="numeric"
                register={register}
                required="CVC is required"
                error={errors.cc_cvc}
                autocomplete="cc-csc"
              />
            </div>

            <Checkbox
              id="cc_default"
              label="Default payment method"
              register={register}
              error={errors.cc_default}
              checked
            />
          </SettingsCard>

          <h3 className="mb-0 text-base font-semibold text-gray-400">
            Linked Cards/Banks
          </h3>

          <SettingsCard
            title="Luna Smith"
            detail="•••• 4756"
            placeholder="1234 5678"
            Icon={BuildingLibraryIcon}
            onSave={handleSubmit(onSubmit)}
            errors={
              errors.bank_fullname ||
              errors.bank_acc_number ||
              errors.currentPassword
            }
          >
            <Input
              id="bank_fullname"
              label="Name on Account"
              register={register}
              required="Name is required"
              error={errors.bank_fullname}
            />

            <Input
              id="account_number"
              label="Account Number"
              register={register}
              required="Account Number is required"
              placeholder="4242 4242"
              inputMode="numeric"
              pattern="[0-9\s]{8}"
              maxLength={8}
              error={errors.account_number}
            />

            <Checkbox
              id="cc_default"
              label="Set as default payment method"
              register={register}
              error={errors.cc_default}
            />
          </SettingsCard>
        </div>
      </div>
    </>
  );
}
