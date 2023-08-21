import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import statesFullList from 'states-us';
import { PencilIcon } from '@heroicons/react/24/outline';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';
import { Select, SelectItem } from '#/ui/components/Select';
import { Label } from '../Label';
import { FormData } from '#/app/(login)/sign-up/SignUp';

export function AdditionalDetailsForm({
  setStep,
  formData,
  setFormData,
  existingAccount,
  loan,
  updateSession,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  existingAccount?: boolean;
  loan: any;
  updateSession: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (existingAccount) {
      const [company, address, phone] = await Promise.all([
        fetch('/api/profile/company', {
          method: 'PATCH',
          body: JSON.stringify({
            company: data.company,
          }),
        }),
        fetch('/api/profile/address', {
          method: 'PATCH',
          body: JSON.stringify({
            address: {
              addressLine1: data.addressLine1,
              addressLine2: data.addressLine2,
              city: data.city,
              state: data.state,
              postalCode: data.postalCode,
            },
          }),
        }),
        fetch('/api/profile/phone', {
          method: 'PATCH',
          body: JSON.stringify({
            phone: data.phone,
          }),
        }),
      ]);

      if (
        company.status === 200 &&
        address.status === 200 &&
        phone.status === 200
      ) {
        const json = await address.json();

        updateSession({
          user: {
            ...json.data,
            phone: data.phone,
            company: data.company,
          },
        });

        const loanres = await fetch('/api/loans', {
          method: 'POST',
          body: JSON.stringify({
            type: loan.type,
            amount: parseInt(loan.amount),
            length: parseInt(loan.length),
            monthlyPayment: parseInt(loan.monthlyPayment),
            startDate: loan.startDate,
          }),
        });

        if (loanres.status === 200) {
          router.push(`/overview`);
        }
      }
    } else {
      setFormData({ ...formData, ...data });
      setStep((step: number) => step + 1);
    }
  };

  const states = statesFullList
    .filter((state) => !state.territory)
    .map((state) => ({
      label: state.name,
      value: state.abbreviation,
    }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-2xl gap-6">
      <Input
        id="company"
        type="text"
        label="Company"
        placeholder="Cool Company"
        register={register}
        value={formData?.company}
        required="Company is required"
        error={errors.company}
        Icon={PencilIcon}
      />
      <Input
        id="addressLine1"
        type="text"
        label="Address Line 1"
        placeholder="123 Main St"
        register={register}
        value={formData?.addressLine1}
        required="Address Line 1 is required"
        error={errors.addressLine1}
        autocomplete="address-line1"
      />
      <Input
        id="addressLine2"
        type="text"
        label="Address Line 2"
        placeholder="123 Main St"
        register={register}
        value={formData?.addressLine2}
        error={errors.addressLine2}
        autocomplete="address-line2"
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <Input
          id="city"
          type="text"
          label="City"
          placeholder="Anytown"
          register={register}
          value={formData?.city}
          required="City is required"
          error={errors.city}
          className="col-span-2 sm:col-span-2"
          autocomplete="address-level2"
        />
        <div className="col-span-2 mb-6 flex flex-col">
          <Label
            className="mb-2 font-semibold text-gray-600 dark:text-gray-400"
            htmlFor="state"
          >
            State
          </Label>
          <Controller
            name="state"
            control={control}
            defaultValue={formData?.state || 'AL'}
            render={({ field: { onChange, name, value } }) => (
              <Select id={name} value={value} onValueChange={onChange}>
                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
        <Input
          id="postalCode"
          type="text"
          label="Zip Code"
          placeholder="12345"
          register={register}
          value={formData?.postalCode}
          required="Zip Code is required"
          error={errors.postalCode}
          className="col-span-1 sm:col-span-1"
          autocomplete="postal-code"
          inputMode="numeric"
        />
      </div>
      <Input
        id="phone"
        type="tel"
        label="Phone Number"
        placeholder="(XXX) XXX-XXXX"
        register={register}
        value={formData?.phone}
        required="Phone Number is required"
        error={errors.phone}
        // pattern={{
        //   value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
        //   message: 'Invalid phone number.',
        // }}
      />
      <Button
        variant="primary"
        className="mt-3 w-full max-w-xs justify-self-center"
      >
        Next
      </Button>
    </form>
  );
}
