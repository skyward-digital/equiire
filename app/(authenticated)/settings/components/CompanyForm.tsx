'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';

//
export const CompanyForm = (props: { company: User['company'] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [company, setCompany] = useState(props.company);

  const onSubmit = async (data: any) => {
    // the API is currently missing for this
    //
    // local api as we need to update on the client
    // const res = await fetch('/api/profile/company', {
    //   method: 'PATCH',
    //   body: JSON.stringify(data),
    // });
    // const json = await res.json();
    // // update the state so it reflects the new data immediately
    // setCompany(json.data.name);
    // // Update the session so it remembers the new data as the user navigates
    // updateSession({ user: json.data });
  };

  return (
    <SettingsCard
      title="Company"
      detail={company}
      placeholder="Acme Inc."
      Icon={BuildingOffice2Icon}
      onSave={handleSubmit(onSubmit)}
      errors={errors.company}
    >
      <Input
        id="company"
        label="Company Name"
        value={company}
        register={register}
        required="Company is required"
        error={errors.company}
        autocomplete="organization"
      />
    </SettingsCard>
  );
};
