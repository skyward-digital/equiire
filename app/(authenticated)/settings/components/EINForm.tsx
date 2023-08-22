'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { HashtagIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';

export const EINForm = (props: { ein: User['ein'] }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [ein, setEin] = useState(props.ein);

  //   const onSubmit = async (data: any) => {
  //     // local api as we need to update on the client
  //     const res = await fetch('/api/profile/name', {
  //       method: 'PATCH',
  //       body: JSON.stringify({
  //         name: `${data.firstname} ${data.lastname}`,
  //       }),
  //     });

  //     if (res.status === 200) {
  //       setExpanded(false);
  //     }

  //     const json = await res.json();

  //     // update the state so it reflects the new data immediately
  //     setName(json.data.name);

  //     // Update the session so it remembers the new data as the user navigates
  //     updateSession({ user: json.data });

  //     // To ensure that areas where this data is reused updates too, like the header
  //     router.refresh();
  //   };

  return (
    <SettingsCard
      title="Employer Identification Number"
      detail={ein}
      placeholder="1234567"
      Icon={HashtagIcon}
      //onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Input
        id="ein"
        label="Employer Identification Number"
        value={ein}
        register={register}
        error={errors.ein}
      />
    </SettingsCard>
  );
};
