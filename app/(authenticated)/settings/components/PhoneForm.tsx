'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';

export const PhoneForm = (props: { phone: User['phone'] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [phone, setPhone] = useState(props.phone);

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/phone', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();

    // update the state so it reflects the new data immediately
    setPhone(json.data.phone);

    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });
  };

  return (
    <SettingsCard
      title="Phone Number"
      detail={phone}
      placeholder="+1 (555) 555-5555"
      Icon={PhoneIcon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Input
        id="phone"
        type="tel"
        label="Phone Number"
        placeholder="+1 (555) 555-5555"
        value={phone}
        register={register}
        required="Phone number is required"
        // pattern={{
        //   value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
        //   message: 'Invalid phone number.',
        // }}
        error={errors.phone}
      />
    </SettingsCard>
  );
};
