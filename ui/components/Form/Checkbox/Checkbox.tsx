import clsx from 'clsx';

type CheckboxProps = {
  id: string;
  label: string;
  checked?: boolean;
  className?: string;
  register?: any;
  required?: string;
  error?: any;
};

export const Checkbox = ({
  id,
  label,
  checked,
  className,
  register,
  required,
  error,
}: CheckboxProps) => {
  const hookFormRegister = register ? register(id, { required }) : undefined;

  return (
    <div className={clsx(className, 'flex items-center gap-2')}>
      <input
        id={id}
        type="checkbox"
        checked={checked ?? undefined}
        className="h-4 w-4 rounded border-gray-300 shadow-sm checked:border-blue-600 checked:text-blue-600 focus:ring-blue-600"
        {...hookFormRegister}
      />
      <label
        htmlFor={id}
        className="dark:text-brand-secondary block text-gray-600"
      >
        {label}
      </label>

      {error && <span>{error.message}</span>}
    </div>
  );
};
