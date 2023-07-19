import { useState } from 'react';
import clsx from 'clsx';
import * as RadioGroupRadix from '@radix-ui/react-radio-group';

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
    <RadioGroupRadix.Root
      defaultValue={defaultValue || leftValue}
      aria-label={ariaLabel}
      onValueChange={setValue}
      className="flex"
    >
      <div
        className={clsx(
          'flex items-center py-2',
          value === leftValue
            ? 'bg-brand z-10 rounded-full px-7 text-white'
            : 'z-0 rounded-l-full bg-gray-100 pl-7 pr-14 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
      >
        <RadioGroupRadix.Item
          value={leftValue}
          id="left"
        ></RadioGroupRadix.Item>
        <label htmlFor="left" className="font-semibold">
          {leftLabel}
        </label>
      </div>
      <div
        className={clsx(
          '-ml-7 flex items-center py-2',
          value === rightValue
            ? 'bg-brand z-10 rounded-full px-7 text-white'
            : 'z-0 rounded-r-full bg-gray-100 pl-14 pr-7 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
      >
        <RadioGroupRadix.Item
          value={rightValue}
          id="right"
        ></RadioGroupRadix.Item>
        <label htmlFor="right" className="font-semibold">
          {rightLabel}
        </label>
      </div>
    </RadioGroupRadix.Root>
  );
}
