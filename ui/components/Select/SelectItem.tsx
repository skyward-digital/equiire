import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import { CheckIcon } from '@heroicons/react/24/outline';

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    {...props}
    className={clsx(
      className,
      'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-2.5  outline-none focus:bg-gray-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-gray-200 dark:focus:bg-gray-800',
    )}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="text-brand h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
