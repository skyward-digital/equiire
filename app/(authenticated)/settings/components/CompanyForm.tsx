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

  const [expanded, setExpanded] = useState(false);
  const [company, setCompany] = useState(props.company);

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/company', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();
    // update the state so it reflects the new data immediately
    setCompany(json.data.company);
    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });
  };

  return (
    <SettingsCard
      title="Company"
      detail={company}
      placeholder="Acme Inc."
      Icon={BuildingOffice2Icon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
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
