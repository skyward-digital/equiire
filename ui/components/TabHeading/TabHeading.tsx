export type TabHeadingProps = {
  children: React.ReactNode;
};

export const TabHeading = ({ children }: TabHeadingProps) => {
  return (
    <nav className="sticky top-0 z-10 flex w-full gap-4 border-b border-gray-300 bg-white px-8 pt-2 pt-4 dark:bg-gray-800">
      {children}
    </nav>
  );
};
