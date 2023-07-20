import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    {...props}
    className={clsx(
      className,
      'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-2.5 outline-none hover:bg-gray-50 data-[disabled]:pointer-events-none data-[state=checked]:bg-gray-50 data-[disabled]:opacity-50',
    )}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator />
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
