'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';

{
  /* TODO: Question - Should we implement an address lookup here? */
}
export const AddressForm = (props: { address: User['address'] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [address, setAddress] = useState(props.address);

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
      onSave={handleSubmit(onSubmit)}
      errors={errors.address1 || errors.city || errors.state || errors.zip}
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
        {/* This should probably be a select as states are fixed */}
        <Input
          id="state"
          label="State"
          placeholder="NY"
          value={address.state}
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
