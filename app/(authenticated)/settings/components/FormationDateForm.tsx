'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import format from 'date-fns/format';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { Label } from '#/ui/components/Label';
import { DatePicker } from '#/ui/components/DatePicker';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';
import { BusinessFields } from '#/app/(authenticated)/settings/page';

export const FormationDateForm = (props: {
  formationDate: User['formationDate'];
  businessFields: BusinessFields;
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [formationDate, setFormationDate] = useState(
    props.formationDate ? new Date(props.formationDate) : undefined,
  );

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/business', {
      method: 'PATCH',
      body: JSON.stringify({
        ...props.businessFields,
        // here we set to the state as we are using a date picker field
        formationDate,
      }),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();

    // update the state so it reflects the new data immediately
    setFormationDate(new Date(json.data.formationDate));

    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });

    // To ensure that areas where this data is reused updates too, like the header
    router.refresh();
  };

  return (
    <SettingsCard
      title="Formation Date"
      detail={formationDate && format(formationDate, 'MM/dd/yyyy')}
      placeholder="01/01/1970"
      Icon={CalendarDaysIcon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <div>
        <Label
          htmlFor="formationdate"
          className="mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400"
        >
          Formation Date
        </Label>
        <DatePicker
          id="formationdate"
          value={formationDate}
          onValueChange={setFormationDate}
          disableFuture
        />
      </div>
    </SettingsCard>
  );
};
