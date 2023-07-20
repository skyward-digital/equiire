import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function Select({
  placeholder,
  children,
}: {
  placeholder: string;
  children: React.ReactNode;
}) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="border-input ring-offset-background data-[state=open]:border-brand-300 focus:border-brand-300 shadow-xs flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-3 text-gray-600 placeholder:text-gray-600 focus:outline-none focus:ring-4 focus:ring-[#FFE3CC] disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:outline-none data-[state=open]:ring-4 data-[state=open]:ring-[#FFE3CC]">
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="h-4 w-4" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-600 shadow-lg data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
        >
          <SelectPrimitive.Viewport className="h-[var(--radix-select-trigger-height)] max-h-80 w-full min-w-[var(--radix-select-trigger-width)] p-1.5">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
