import { useState } from 'react';
import clsx from 'clsx';

export type SwitchProps = {
  label: string;
  hideLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export const Switch = ({
  label,
  hideLabel = false,
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
    <div className="flex items-center space-x-2">
      <button
        className={clsx(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
          {
            'h-4 w-8': size === 'sm',
            'h-6 w-11': size === 'md',
            'h-8 w-14': size === 'lg',
          },
        )}
        onClick={handleChange}
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
      </button>
      {!hideLabel ? (
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {label}
        </span>
      ) : null}
    </div>
  );
};
