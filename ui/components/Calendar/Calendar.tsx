import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { DayPicker } from 'react-day-picker';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  disablePast?: boolean;
  disableFuture?: boolean;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  disablePast = false,
  disableFuture = false,
  ...props
}: CalendarProps) {
  // We pass the today prop in Storybook stories so that the calendar doesn't change every day
  const today = props.today ? props.today : new Date();

  let disabled = undefined;
  if (disablePast) {
    disabled = { before: today };
  }
  if (disableFuture) {
    disabled = { after: today };
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      disabled={disabled}
      classNames={{
        months:
          'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 text-gray-700 dark:text-white',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm',
        nav: 'space-x-1 flex items-center',
        nav_button: 'h-5 w-5 bg-transparent p-0 opacity-50 hover:opacity-100',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'rounded-md w-8 text-sm font-normal',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative',
        day: 'h-8 w-8 p-0 font-normal rounded-full hover:bg-gray-25 dark:hover:bg-gray-800 focus:ring focus:outline-none focus:ring-brand-100',
        day_selected:
          'bg-brand rounded-full hover:bg-brand focus:bg-brand text-white',
        day_today:
          "after:content-['.'] after:absolute after:-bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:font-bold after:text-brand",
        day_outside: 'opacity-50',
        day_disabled: 'opacity-50',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
