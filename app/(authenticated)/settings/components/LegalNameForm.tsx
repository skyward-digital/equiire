'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { UserIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';
import { CustomerFields } from '#/app/(authenticated)/settings/page';

export const LegalNameForm = (props: {
  fullLegalName: User['fullLegalName'];
  customerFields: CustomerFields;
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [legalName, setLegalName] = useState(props.fullLegalName);

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/customer', {
      method: 'PATCH',
      body: JSON.stringify({
        ...props.customerFields,
        fullLegalName: data.legalname,
      }),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();

    // update the state so it reflects the new data immediately
    setLegalName(json.data.fullLegalName);

    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });

    // To ensure that areas where this data is reused updates too, like the header
    router.refresh();
  };

  return (
    <SettingsCard
      title="Legal Name"
      detail={legalName}
      placeholder="Jane Claire Doe"
      Icon={UserIcon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Input
        id="legalname"
        label="Legal Name"
        value={legalName}
        register={register}
        required="Legal name is required"
        error={errors.legalname}
      />
    </SettingsCard>
  );
};
