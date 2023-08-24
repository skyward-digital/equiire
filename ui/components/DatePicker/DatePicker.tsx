'use client';
import * as React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { getDateWithoutTimezone } from '#/lib/getDateWithoutTimezone';

import { Calendar } from '#/ui/components/Calendar';

export interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: Date;
  onValueChange: (value: Date) => void;
  defaultOpen?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
}

export function DatePicker({
  className,
  defaultOpen,
  value,
  disablePast = false,
  disableFuture = false,
  onValueChange,
}: DatePickerProps) {
  const [stringDate, setStringDate] = useState(
    value ? format(getDateWithoutTimezone(value), 'MM/dd/yyyy') : '',
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStringDate(e.target.value);

    // We compare the date the user chooses with today's date without any time or timezone
    const parsedDateWithoutTimezone = getDateWithoutTimezone(
      new Date(e.target.value),
    );
    const todayWithoutTimezone = getDateWithoutTimezone(new Date());
    const today = new Date();

    // If the date is invalid, set the date to today
    if (parsedDateWithoutTimezone.toString() === 'Invalid Date') {
      onValueChange(today);
    } else if (
      disablePast &&
      parsedDateWithoutTimezone < todayWithoutTimezone
    ) {
      onValueChange(today);
      setErrorMessage('Date cannot be in the past');
    } else if (
      disableFuture &&
      parsedDateWithoutTimezone > todayWithoutTimezone
    ) {
      onValueChange(today);
      setErrorMessage('Date cannot be in the future');
    } else {
      setErrorMessage('');
      onValueChange(new Date(e.target.value));
    }
  };

  return (
    <div className={clsx(className, 'max-w-[250px]')}>
      <PopoverPrimitive.Root defaultOpen={defaultOpen}>
        <div className={clsx('relative', className)}>
          <input
            value={stringDate}
            maxLength={10}
            className="shadow-xs focus:ring-brand-100 focus:border-brand-300 inline-flex w-full gap-x-2 rounded-lg border bg-white px-3 py-2 text-base text-gray-600 no-underline placeholder:text-gray-300 focus:outline-none focus:ring-4 dark:bg-black dark:text-gray-100 placeholder:dark:text-gray-600"
            placeholder="MM/DD/YYYY"
            onChange={handleTextChange}
          ></input>
          <PopoverPrimitive.Trigger asChild>
            <button className="focus:ring-brand-100 focus:border-brand-300 absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 rounded-md focus:outline-none focus:ring">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content className="z-50 w-auto rounded-md border bg-white p-4 outline-none dark:bg-black">
              <Calendar
                mode="single"
                selected={value}
                onSelect={(date) => {
                  if (!date) return;
                  setStringDate(date ? format(date, 'MM/dd/yyyy') : '');
                  onValueChange(date);
                  setErrorMessage('');
                }}
                disablePast={disablePast}
                defaultMonth={value}
                disableFuture={disableFuture}
              />
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </div>
      </PopoverPrimitive.Root>
      <p className="text-error mt-2 text-sm">{errorMessage}</p>
    </div>
  );
}
