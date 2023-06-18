export type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
      <p>{title}</p>
    </header>
  );
};
