import React from 'react';
import clsx from 'clsx';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function Select({
  id,
  value,
  placeholder,
  children,
  className,
  onValueChange,
}: {
  id: string;
  value: string;
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
}) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={clsx(
          className,
          'shadow-xs ring-offset-background  data-[state=open]:border-brand-300 focus:border-brand-300 dark:data-[state=open]:border-brand-400 dark:focus:border-brand-300 focus:ring-brand-100 data-[state=open]:ring-brand-100 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-5 text-gray-600 placeholder:text-gray-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:outline-none data-[state=open]:ring-4 dark:text-gray-200 dark:placeholder:text-gray-600',
        )}
        id={id}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="h-4 w-4" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-600 shadow-lg data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 dark:bg-black"
        >
          <SelectPrimitive.Viewport className="h-[var(--radix-select-trigger-height)] max-h-80 w-full min-w-[var(--radix-select-trigger-width)] p-1.5">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
