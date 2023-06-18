import clsx from 'clsx';

export type TableProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['table'];

export const Table = (props: TableProps) => {
  const { children, className, ...rest } = props;

  return (
    <table className={clsx('table-auto border-collapse', className)} {...rest}>
      {children}
    </table>
  );
};
