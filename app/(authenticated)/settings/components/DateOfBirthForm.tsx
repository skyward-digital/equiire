'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import format from 'date-fns/format';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';
import { DatePicker } from '#/ui/components/DatePicker';
import { Label } from '#/ui/components/Label';

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
  const [dateOfBirth, setDateOfBirth] = useState(
    props.dateOfBirth ? new Date(props.dateOfBirth) : undefined,
  );

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
      detail={dateOfBirth && format(dateOfBirth, 'MM/dd/yyyy')}
      placeholder="01/01/1970"
      Icon={CalendarDaysIcon}
      onSubmit={() => console.log('save')}
      //onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <div>
        <Label
          htmlFor="dateofbirth"
          className="mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400"
        >
          Date of Birth
        </Label>
        <DatePicker
          id="dateofbirth"
          value={dateOfBirth}
          onValueChange={setDateOfBirth}
        />
      </div>
    </SettingsCard>
  );
};
