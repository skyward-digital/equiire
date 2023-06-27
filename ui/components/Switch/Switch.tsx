import { useState } from 'react';
import clsx from 'clsx';

export type SwitchProps = {
  label: string;
  hideLabel?: boolean;
  reversed?: boolean;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export const Switch = ({
  label,
  hideLabel = false,
  reversed,
  size = 'md',
  checked = false,
  disabled = false,
  onChange,
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    setEnabled(!enabled);
    onChange(enabled);
  };

  return (
    <button
      className={clsx(
        'flex items-center gap-2 rounded-lg p-2.5',
        reversed && 'flex-row-reverse',
      )}
      onClick={handleChange}
    >
      <span
        className={clsx(
          enabled ? 'bg-brand-primary' : 'bg-gray-200',
          'focus:ring-brand-primary relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black',
          {
            'h-4 w-8': size === 'sm',
            'h-6 w-11': size === 'md',
            'h-8 w-14': size === 'lg',
          },
        )}
      >
        {hideLabel ? <span className="sr-only">{label}</span> : null}
        <span
          className={clsx(
            {
              'h-3 w-3': size === 'sm',
              'h-5 w-5': size === 'md',
              'h-7 w-7': size === 'lg',
            },
            enabled
              ? {
                  'translate-x-4': size === 'sm',
                  'translate-x-5': size === 'md',
                  'translate-x-6': size === 'lg',
                }
              : 'translate-x-0',
            'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          )}
        />
      </span>
      {!hideLabel ? <span>{label}</span> : null}
    </button>
  );
};
