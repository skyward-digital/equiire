'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Select, SelectItem } from '#/ui/components/Select';
import { Label } from '#/ui/components/Label';
import { SettingsCard } from '#/ui/components/SettingsCard';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { User } from '#/app/api/profile/user';
import { BusinessFields } from '#/app/(authenticated)/settings/page';

const ENTITY_TYPES = [
  { label: 'Sole Trader', value: 'Sole Trader' },
  { label: 'Partnership', value: 'Partnership' },
  {
    label: 'Limited Liability Partnership',
    value: 'Limited Liability Partnership',
  },
  { label: 'Limited Liability Company', value: 'Limited Liability Company' },
  { label: 'Corporation', value: 'Corporation' },
  { label: 'Non-Profit Organisation', value: 'Non-Profit Organisation' },
  // todo: other
];

export const EntityTypeForm = (props: {
  entityType: User['entityType'];
  businessFields: BusinessFields;
}) => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { update: updateSession } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [entityType, setEntityType] = useState(props.entityType);

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/profile/business', {
      method: 'PATCH',
      body: JSON.stringify({
        ...props.businessFields,
        entityType: data.entityType,
      }),
    });

    if (res.status === 200) {
      setExpanded(false);
    }

    const json = await res.json();

    // update the state so it reflects the new data immediately
    setEntityType(json.data.entityType);

    // Update the session so it remembers the new data as the user navigates
    updateSession({ user: json.data });

    // To ensure that areas where this data is reused updates too, like the header
    router.refresh();
  };

  return (
    <SettingsCard
      title="Entity Type"
      detail={entityType}
      placeholder="Corporation"
      Icon={BuildingOffice2Icon}
      onSubmit={handleSubmit(onSubmit)}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <div>
        <Label
          className="mb-2 text-base font-semibold text-gray-600 dark:text-gray-400"
          htmlFor="entitytype"
        >
          Entity Type
        </Label>
        <Controller
          name="entityType"
          control={control}
          defaultValue={entityType || 'Sole Trader'}
          render={({ field: { onChange, name, value } }) => (
            <Select
              id={name}
              value={value}
              onValueChange={onChange}
              className="mt-2"
            >
              {ENTITY_TYPES.map((entity) => (
                <SelectItem key={entity.value} value={entity.value}>
                  {entity.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
    </SettingsCard>
  );
};
