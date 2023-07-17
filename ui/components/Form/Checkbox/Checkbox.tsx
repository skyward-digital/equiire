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
        className="checked:text-brand focus:ring-brand/70 border-brand-600 h-4 w-4 rounded bg-transparent shadow-sm focus:ring-offset-0"
        {...hookFormRegister}
      />
      <label htmlFor={id} className="block text-gray-600 dark:text-white">
        {label}
      </label>

      {error && <span>{error.message}</span>}
    </div>
  );
};
