'use client';
import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

type SettingsCardProps = {
  title: string;
  detail?: string;
  placeholder: string;
  Icon?: any;
  children: React.ReactNode;
};

export const SettingsCard = ({
  title,
  detail,
  placeholder,
  Icon,
  children,
}: SettingsCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="dark:border-brand-secondary rounded-xl border border-gray-300 bg-white px-4 py-2 dark:bg-black">
      {/* Title area */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
          <Icon className="h-6 w-6" />
          <div className="not-prose flex flex-col">
            <p className="font-semibold">{title}</p>
            {detail ? (
              <p className="text-gray-500 dark:text-gray-100">{detail}</p>
            ) : (
              <p className="text-gray-300 dark:text-gray-500">{placeholder}</p>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          {!detail && (
            <p className="flex items-center gap-1 rounded-lg border border-orange-200 bg-orange-50 px-2 py-0.5 ">
              <ExclamationCircleIcon
                className="h-5 w-5 text-orange-600"
                strokeWidth={1.5}
              />
              <span className="font-semibold text-orange-700">
                Missing Info
              </span>
            </p>
          )}
          <button className="text-sm text-gray-600 hover:text-gray-800">
            Edit
          </button>
        </div>
      </div>

      {/* Editable area */}
      <div className="mb-8 mt-4 grid gap-2 border-t border-gray-200 px-10 pt-6 text-sm">
        {children}
      </div>
    </div>
  );
};
