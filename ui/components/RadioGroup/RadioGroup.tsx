import clsx from 'clsx';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Label } from '#/ui/components/Label';

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: [Option, Option];
  ariaLabel?: string;
  className?: string;
};

export function RadioGroup({
  value,
  onChange,
  options,
  ariaLabel,
  id,
  className,
}: RadioGroupProps) {
  const {
    label: leftLabel,
    value: leftValue,
    disabled: leftDisabled,
  } = options[0];
  const {
    label: rightLabel,
    value: rightValue,
    disabled: rightDisabled,
  } = options[1];

  return (
    <RadioGroupPrimitive.Root
      aria-label={ariaLabel}
      onValueChange={onChange}
      className={clsx(className, 'flex')}
      id={id}
    >
      <RadioGroupPrimitive.Item
        value={leftValue}
        id={`${id}-left`}
        className={clsx(
          'flex items-center py-2 focus:outline-none disabled:pointer-events-none',
          value === leftValue
            ? 'bg-brand focus:ring-brand-100 focus:border-brand-300 z-10 rounded-full px-7 text-white focus:ring-2 focus:ring-offset-2'
            : 'z-0 rounded-l-full bg-gray-100 pl-7 pr-14 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
        disabled={leftDisabled}
      >
        <Label htmlFor={`${id}-left`} className="cursor-pointer font-semibold">
          {leftLabel}
        </Label>
      </RadioGroupPrimitive.Item>

      <RadioGroupPrimitive.Item
        value={rightValue}
        id={`${id}-right`}
        className={clsx(
          '-ml-7 flex items-center py-2 focus:outline-none disabled:pointer-events-none',
          value === rightValue
            ? 'bg-brand focus:ring-brand-100 focus:border-brand-300 z-10 rounded-full px-7 text-white focus:ring-2 focus:ring-offset-2'
            : 'z-0 rounded-r-full bg-gray-100 pl-14 pr-7 text-gray-400 dark:bg-gray-700 dark:text-gray-500',
        )}
        disabled={rightDisabled}
      >
        <Label htmlFor={`${id}-right`} className="cursor-pointer font-semibold">
          {rightLabel}
        </Label>
      </RadioGroupPrimitive.Item>
    </RadioGroupPrimitive.Root>
  );
}
