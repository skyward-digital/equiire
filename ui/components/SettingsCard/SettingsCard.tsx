import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Badge } from '../Badge';
import { Button } from '../Button';

type SettingsCardProps = {
  title: string;
  detail?: string;
  placeholder: string;
  expanded: boolean;
  setExpanded: any;
  Icon?: any;
  onSubmit?: any;
  children: React.ReactNode;
  secret?: boolean;
};

export const SettingsCard = ({
  title,
  detail,
  placeholder,
  expanded,
  setExpanded,
  Icon,
  onSubmit,
  children,
  secret,
}: SettingsCardProps) => {
  const onSave = (e: any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={onSave}
      className="dark:border-brand-secondary rounded-xl border border-gray-300 bg-white px-4 py-2 dark:bg-black"
    >
      {/* Title area */}
      <div className="h-18 flex max-w-xs items-center justify-between gap-4 sm:max-w-none md:h-16">
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
          <Icon className="h-6 w-6" />
          <div className="not-prose flex flex-col">
            <p className="font-semibold">{title}</p>
            {detail && !secret ? (
              <p className="text-gray-500 dark:text-gray-100">{detail}</p>
            ) : (
              <p className="text-gray-300 dark:text-gray-500">{placeholder}</p>
            )}
          </div>
        </div>

        {expanded ? (
          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setExpanded(false)}
            >
              Close
            </Button>
            {/* Setting this as a submit button causes a weird refresh issue - needs debugging */}
            {onSubmit && (
              <Button
                variant="secondary-brand"
                size="sm"
                type="button"
                onClick={onSave}
              >
                Save
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {!detail && (
              <Badge type="warning" Icon={ExclamationCircleIcon}>
                Missing Info
              </Badge>
            )}
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setExpanded(true)}
            >
              {onSubmit ? 'Edit' : 'View'}
            </Button>
          </div>
        )}
      </div>

      {/* Editable area */}
      {expanded && (
        <div className="mb-4 mt-2 grid gap-2 border-t border-gray-200 px-10 pt-6 text-sm dark:border-gray-500">
          {children}
        </div>
      )}
    </form>
  );
};

type SettingsCardLinkProps = {
  title: string;
  detail?: string;
  placeholder: string;
  Icon?: any;
  link: string;
};

export const SettingsCardLink = ({
  title,
  detail,
  placeholder,
  Icon,
  link,
}: SettingsCardLinkProps) => {
  return (
    <div className="dark:border-brand-secondary rounded-xl border border-gray-300 bg-white px-4 py-2 dark:bg-black">
      {/* Title area */}
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
          <Icon className="h-6 w-6" />
          <div className="not-prose flex flex-col">
            <p className="font-semibold capitalize">{title}</p>
            {detail ? (
              <p className="text-gray-500 dark:text-gray-100">{detail}</p>
            ) : (
              <p className="text-gray-300 dark:text-gray-500">{placeholder}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <Button href={link} variant="secondary" size="sm">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};
