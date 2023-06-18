export type TableRowProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['tr'];

export const TableRow = (props: TableRowProps) => {
  const { children, className, ...rest } = props;

  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  );
};
