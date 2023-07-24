import { useState } from 'react';
import clsx from 'clsx';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

type RadioGroupProps = {
  left: {
    label: string;
    value: string;
  };
  right: {
    label: string;
    value: string;
  };
  defaultValue?: string;
  ariaLabel: string;
};

export function RadioGroup({
  left,
  right,
  ariaLabel,
  defaultValue,
}: RadioGroupProps) {
  const [value, setValue] = useState('credit-builder');

  const { label: leftLabel, value: leftValue } = left;
  const { label: rightLabel, value: rightValue } = right;

  return (
    <RadioGroupPrimitive.Root
      defaultValue={defaultValue || leftValue}
      aria-label={ariaLabel}
      onValueChange={setValue}
      className="flex"
    >
      <RadioGroupPrimitive.Item
        value={leftValue}
        id="left"
        className={clsx(
          'flex items-center py-2 focus:outline-none ',
          value === leftValue
            ? 'bg-brand focus:ring-brand-100 focus:border-brand-300 z-10 rounded-full px-7 text-white focus:ring-2 focus:ring-offset-2'
            : 'z-0 rounded-l-full bg-gray-100 pl-7 pr-14 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
      >
        <label htmlFor="left" className="font-semibold">
          {leftLabel}
        </label>
      </RadioGroupPrimitive.Item>
      <RadioGroupPrimitive.Item
        value={rightValue}
        id="right"
        className={clsx(
          '-ml-7 flex items-center py-2 focus:outline-none ',
          value === rightValue
            ? 'bg-brand focus:ring-brand-100 focus:border-brand-300 z-10 rounded-full px-7 text-white focus:ring-2 focus:ring-offset-2'
            : 'z-0 rounded-r-full bg-gray-100 pl-14 pr-7 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
      >
        <label htmlFor="right" className="font-semibold">
          {rightLabel}
        </label>
      </RadioGroupPrimitive.Item>
    </RadioGroupPrimitive.Root>
  );
}
