import clsx from 'clsx';

type SelectProps = {
  label: string;
  id: string;
  options: { label: string; value: string }[];
  register?: any;
  required?: string;
  validate?: any;
  pattern?: string | { value: string | RegExp; message: string };
  error?: any;
  hint?: string;
  className?: string;
};

export const Select = ({
  label,
  id,
  register,
  required,
  validate,
  pattern,
  error,
  hint,
  options,
  className,
}: SelectProps) => {
  const hookFormRegister = register
    ? register(id, { required, validate, pattern })
    : undefined;

  return (
    <div className={clsx(className)}>
      <label
        htmlFor={id}
        className="mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400 "
      >
        {label}
      </label>
      <select
        className={clsx(
          'shadow-xs inline-flex w-full gap-x-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-600 no-underline placeholder:text-gray-300 dark:bg-black dark:text-gray-100 placeholder:dark:text-gray-600',
          error && 'border-semantic-error',
        )}
        id={id}
        {...hookFormRegister}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p
        className={clsx(
          'mt-2 text-sm',
          error && 'text-semantic-error',
          hint && !error && 'dark:text-brand-secondary text-gray-600',
          !hint && !error && 'h-5',
        )}
      >
        {error?.message ?? hint ?? ' '}
      </p>
    </div>
  );
};
