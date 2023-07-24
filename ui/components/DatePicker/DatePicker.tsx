import * as React from 'react';
import clsx from 'clsx';
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { Calendar } from '#/ui/components/Calendar';

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
}

export function DatePicker({ className, defaultOpen }: DatePickerProps) {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className={clsx('grid max-w-[250px] gap-2', className)}>
      <PopoverPrimitive.Root defaultOpen={defaultOpen}>
        <PopoverPrimitive.Trigger asChild>
          <div className="relative">
            <button className="shadow-xs focus:border-brand-400 focus:ring-brand-100 relative inline-flex w-full  gap-x-2 rounded-lg border bg-white py-2 pl-10 pr-3 text-base text-gray-600 no-underline placeholder:text-gray-300 focus:outline-none focus:ring dark:bg-black dark:text-gray-100 placeholder:dark:text-gray-600">
              {date ? format(date, 'MM/dd/yyyy') : 'Pick a date'}
            </button>
            <CalendarIcon className="absolute top-1/2 ml-3 h-5 w-5 -translate-y-1/2  text-gray-500 dark:text-gray-400" />
            <ChevronDownIcon className="absolute right-0 top-1/2 mr-3 h-5 w-5 -translate-y-1/2" />
          </div>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content className="z-50 w-auto rounded-md border bg-white p-4 outline-none dark:bg-black">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                if (date) {
                  setDate(date);
                }
              }}
            />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  );
}
