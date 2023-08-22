'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HashtagIcon } from '@heroicons/react/24/outline';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { User } from '#/app/api/profile/user';
import { CustomerFields } from '#/app/(authenticated)/settings/page';

export const SSNForm = (props: {
  ssn: User['ssn'];
  customerFields: CustomerFields;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState('idle');

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/customer', {
      method: 'PATCH',
      body: JSON.stringify({
        ...props.customerFields,
        ssn: data.ssn,
      }),
    });

    if (res.status !== 200) {
      setStatus('error');
    } else {
      setExpanded(false);
    }
  };

  return (
    <SettingsCard
      title="Social Security Number"
      detail={props.ssn}
      placeholder="******"
      Icon={HashtagIcon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
      secret
    >
      <Input
        id="ssn"
        type="password"
        label="Social Security Number"
        placeholder="Social Security Number"
        register={register}
        required="Social Security Number is required"
        error={errors.ssn}
      />
      {status === 'error' ? (
        <p className="mt-0 text-sm text-red-500">
          There was an error updating your social security number.
        </p>
      ) : null}
    </SettingsCard>
  );
};
