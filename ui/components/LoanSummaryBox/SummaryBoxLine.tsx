import clsx from 'clsx';

type SummaryBoxLineProps = {
  className?: string;
  Icon: any;
  children: React.ReactNode;
  value?: string;
};

export function SummaryBoxLine({
  className,
  Icon,
  value,
  children,
}: SummaryBoxLineProps) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between text-sm text-gray-600 dark:text-gray-200',
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 " />
        <p className="font-bold dark:text-white">{children}</p>
      </div>
      <p>{value}</p>
    </div>
  );
}
