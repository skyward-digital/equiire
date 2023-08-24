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
import { CustomerFields } from '#/app/(authenticated)/settings/page';
import { getDateWithoutTimezone } from '#/lib/getDateWithoutTimezone';

export const DateOfBirthForm = (props: {
  dateOfBirth: User['dateOfBirth'];
  customerFields: CustomerFields;
}) => {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  // This is what is saved in the database and what we display in the detail of the settings card
  const [dateOfBirthDb, setDateOfBirthDb] = useState(
    props.dateOfBirth ? new Date(props.dateOfBirth) : undefined,
  );
  // This is what we use in the form fields (ensures that the 'detail' doesn't update while the user changes the date)
  const [dateOfBirth, setDateOfBirth] = useState(dateOfBirthDb);

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/customer', {
      method: 'PATCH',
      body: JSON.stringify({
        ...props.customerFields,
        // here we set to the state as we are using a date picker field that doesn't use register
        dateOfBirth,
      }),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();

    // update the state so it reflects the new data immediately
    setDateOfBirthDb(new Date(json.data.dateOfBirth));

    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });

    // To ensure that areas where this data is reused updates too, like the header
    router.refresh();
  };

  return (
    <SettingsCard
      title="Date of Birth"
      detail={
        dateOfBirthDb &&
        format(getDateWithoutTimezone(dateOfBirthDb), 'MM/dd/yyyy')
      }
      placeholder="01/01/1970"
      Icon={CalendarDaysIcon}
      onSubmit={handleSubmit(onSubmit)}
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
          onValueChange={(value) => setDateOfBirth(value)}
          disableFuture
        />
      </div>
    </SettingsCard>
  );
};
