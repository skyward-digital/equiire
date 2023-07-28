import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';

export function AdditionalDetailsForm({
  setStep,
  formData,
  setFormData,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: Object;
  setFormData: React.Dispatch<React.SetStateAction<Object>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setFormData({ ...formData, ...data });
    setStep((step: number) => step + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-2xl gap-6">
      <Input
        id="addressLine1"
        type="text"
        label="Address Line 1"
        placeholder="123 Main St"
        register={register}
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
          required="City is required"
          error={errors.city}
          className="col-span-2 sm:col-span-2"
          autocomplete="address-level2"
        />
        {/* Todo: change to select component  */}
        <Input
          id="state"
          label="State"
          register={register}
          placeholder="Alabama"
          required="State is required"
          error={errors.state}
          className="col-span-1 sm:col-span-2"
          autocomplete="address-level1"
        />
        {/* Todo: add inputMode prop (currently in other PR) */}
        <Input
          id="postalCode"
          type="text"
          label="Zip Code"
          placeholder="12345"
          register={register}
          required="Zip Code is required"
          error={errors.postalCode}
          className="col-span-1 sm:col-span-1"
          autocomplete="postal-code"
        />
      </div>
      <Input
        id="phone"
        type="tel"
        label="Phone Number"
        placeholder="(XXX) XXX-XXXX"
        register={register}
        required="Phone Number is required"
        error={errors.phone}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
