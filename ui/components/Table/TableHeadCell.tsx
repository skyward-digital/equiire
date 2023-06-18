export type TableHeadCellProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['th'];

export const TableHeadCell = (props: TableHeadCellProps) => {
  const { children, className, ...rest } = props;

  return (
    <th className={className} {...rest}>
      {children}
    </th>
  );
};
