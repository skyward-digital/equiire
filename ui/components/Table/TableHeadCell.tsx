import clsx from 'clsx';

export type TableHeadCellProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['th'];

export const TableHeadCell = (props: TableHeadCellProps) => {
  const { children, className, ...rest } = props;

  return (
    <th
      className={clsx(
        'px-8 pb-4 text-xs font-normal uppercase text-gray-600 dark:text-gray-400',
        className,
      )}
      {...rest}
    >
      {children}
    </th>
  );
};
