import clsx from 'clsx';

export type TableCellProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['td'];

export const TableCell = (props: TableCellProps) => {
  const { children, className, ...rest } = props;

  return (
    <td className={clsx('px-8 py-4 align-middle', className)} {...rest}>
      {children}
    </td>
  );
};
