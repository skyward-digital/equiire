import { useState } from 'react';
import clsx from 'clsx';
import * as RadioGroupRadix from '@radix-ui/react-radio-group';

export function RadioGroup() {
  const [value, setValue] = useState('credit-builder');
  return (
    <RadioGroupRadix.Root
      defaultValue="credit-builder"
      aria-label="Choose your loan"
      onValueChange={setValue}
      className="flex"
    >
      <div
        className={clsx(
          'flex items-center py-2',
          value === 'credit-builder'
            ? 'bg-brand z-10 rounded-full px-7 text-white'
            : 'z-0 rounded-l-full bg-gray-100 pl-7 pr-14 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
      >
        <RadioGroupRadix.Item
          className=""
          value="credit-builder"
          id="credit-builder"
        ></RadioGroupRadix.Item>
        <label htmlFor="credit-builder" className="font-semibold">
          Credit Builder
        </label>
      </div>
      <div
        className={clsx(
          '-ml-7 flex items-center py-2',
          value === 'standard'
            ? 'bg-brand z-10 rounded-full px-7 text-white'
            : 'z-0 rounded-r-full bg-gray-100 pl-14 pr-7 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
      >
        <RadioGroupRadix.Item
          value="standard"
          id="standard"
        ></RadioGroupRadix.Item>
        <label htmlFor="standard" className="font-semibold">
          Standard Loan
        </label>
      </div>
    </RadioGroupRadix.Root>
  );
}
