'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
// import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';

// We do not yet allow users to update email addresses, as it can have a lot of knock on effects
export const EmailForm = (props: { email: User['email'] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const { update: updateSession } = useSession();

  const [email, setEmail] = useState(props.email);

  // const onSubmit = async (data: any) => {
  //   // local api as we need to update on the client
  //   const res = await fetch('/api/profile/email', {
  //     method: 'PATCH',
  //     body: JSON.stringify(data),
  //   });

  //   const json = await res.json();

  //   // update the state so it reflects the new data immediately
  //   setEmail(json.data.email);

  //   // Update the session so it remembers the new data as the user navigates
  //   updateSession({ user: json.data });
  // };

  return (
    <SettingsCard
      title="Email"
      detail={email}
      placeholder="jane.doe@acme.inc"
      Icon={EnvelopeIcon}
      // onSave={handleSubmit(onSubmit)}
      errors={errors.email}
    >
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="jane.doe@equiire.com"
        value={email}
        register={register}
        required="Email is required"
        pattern={{
          value: /^\S+@\S+$/i,
          message: 'Invalid email address',
        }}
        error={errors.email}
        disabled
      />
    </SettingsCard>
  );
};
