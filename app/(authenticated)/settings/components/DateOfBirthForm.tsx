'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';

export const DateOfBirthForm = (props: {
  dateOfBirth: User['dateOfBirth'];
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(props.dateOfBirth);

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
      title="Date of Birth"
      detail={dateOfBirth}
      placeholder="01/01/1970"
      Icon={CalendarDaysIcon}
      //onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      {/* Todo: datepicker */}
      <Input
        id="dateofbirth"
        label="Date of Birth"
        value={dateOfBirth}
        register={register}
        required="Date of birth is required"
        error={errors.dateofbirth}
      />
    </SettingsCard>
  );
};
