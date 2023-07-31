import { Controller, useForm } from 'react-hook-form';
import statesFullList from 'states-us';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';
import { Select, SelectItem } from '#/ui/components/Select';
import { Label } from '../Label';

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
    control,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setFormData({ ...formData, ...data });
    setStep((step: number) => step + 1);
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
        id="address1"
        type="text"
        label="Address Line 1"
        placeholder="123 Main St"
        register={register}
        required="Address Line 1 is required"
        error={errors.address1}
        autocomplete="address-line1"
      />
      <Input
        id="address2"
        type="text"
        label="Address Line 2"
        placeholder="123 Main St"
        register={register}
        error={errors.address2}
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
            defaultValue="AL"
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
          id="zipcode"
          type="text"
          label="Zip Code"
          placeholder="12345"
          register={register}
          required="Zip Code is required"
          error={errors.zipcode}
          className="col-span-2 sm:col-span-1"
          autocomplete="postal-code"
          inputMode="numeric"
        />
      </div>
      <Input
        id="telephone"
        type="tel"
        label="Phone Number"
        placeholder="(XXX) XXX-XXXX"
        register={register}
        required="Phone Number is required"
        error={errors.telephone}
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
