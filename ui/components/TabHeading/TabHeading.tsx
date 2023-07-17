export type TabHeadingProps = {
  children: React.ReactNode;
};

export const TabHeading = ({ children }: TabHeadingProps) => {
  return (
    <nav className="sticky top-0 z-10 flex w-full gap-4 border-b border-gray-300 bg-white px-8 pt-4 dark:border-gray-600 dark:bg-black">
      {children}
    </nav>
  );
};
