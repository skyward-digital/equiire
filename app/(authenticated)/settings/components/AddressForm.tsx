'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import statesFullList from 'states-us';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { User } from '#/app/api/profile/user';
import { Input } from '#/ui/components/Form';
import { Select, SelectItem } from '#/ui/components/Select';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { Label } from '#/ui/components/Label';

{
  /* TODO: Question - Should we implement an address lookup here? */
}
export const AddressForm = (props: { address: User['address'] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [address, setAddress] = useState(props.address);

  const states = statesFullList
    .filter((state) => !state.territory)
    .map((state) => ({
      label: state.name,
      value: state.abbreviation,
    }));

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/address', {
      method: 'PATCH',
      body: JSON.stringify({
        address: {
          addressLine1: data.address1,
          addressLine2: data.address2,
          city: data.city,
          state: data.state,
          postalCode: data.zip,
          country: 'US',
        },
      }),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();

    // update the state so it reflects the new data immediately
    setAddress(json.data.address);

    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });
  };

  return (
    <SettingsCard
      title="Address"
      detail={`${address.addressLine1}, ${address.city}, ${address.state} ${address.postalCode}`}
      placeholder="Acme Inc., 123 Main St, New York, NY 10001"
      Icon={MapPinIcon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Input
        id="address1"
        label="Address 1"
        placeholder="123 Main St"
        value={address.addressLine1}
        register={register}
        required="Address is required"
        error={errors.address1}
        autocomplete="address-line1"
      />

      <Input
        id="address2"
        label="Address 2"
        placeholder="Apt 1"
        value={address.addressLine2}
        register={register}
        error={errors.address2}
        autocomplete="address-line2"
      />

      <Input
        id="city"
        label="City"
        placeholder="New York"
        value={address.city}
        register={register}
        required="City is required"
        error={errors.city}
        autocomplete="address-level2"
      />

      <div className="flex gap-2">
        <div className="w-1/2">
          <Label
            className="mb-2 text-base font-semibold text-gray-600 dark:text-gray-400"
            htmlFor="state"
          >
            State
          </Label>
          <Controller
            name="state"
            control={control}
            defaultValue={address.state || 'AL'}
            render={({ field: { onChange, name, value } }) => (
              <Select
                id={name}
                value={value}
                onValueChange={onChange}
                className="mt-2"
              >
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
          id="zip"
          label="Zip"
          placeholder="10001"
          value={address.postalCode}
          register={register}
          required="Zip is required"
          size={5}
          error={errors.zip}
          className="w-1/2"
          autocomplete="postal-code"
        />
      </div>
    </SettingsCard>
  );
};
