'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { UserIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';

export const NameForm = (props: { name: User['name'] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState(props.name);

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/name', {
      method: 'PATCH',
      body: JSON.stringify({
        name: `${data.firstname} ${data.lastname}`,
      }),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();

    // update the state so it reflects the new data immediately
    setName(json.data.name);

    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });
  };

  return (
    <SettingsCard
      title="Contact"
      detail={name}
      placeholder="Jane Doe"
      Icon={UserIcon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Input
        id="firstname"
        label="First Name"
        value={name.split(' ')[0]}
        register={register}
        required="First name is required"
        error={errors.firstname}
        autocomplete="given-name"
      />

      <Input
        id="lastname"
        label="Last Name"
        value={name.split(' ')[1]}
        register={register}
        required="Last name is required"
        error={errors.lastname}
        autocomplete="family-name"
      />
    </SettingsCard>
  );
};
