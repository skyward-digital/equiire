'use client';
import { useCurrentSection } from '#/hooks/useCurrentSection';
import { TabLink } from './TabLink';

export type TabHeadingLinkProps = {
  id: string;
  title: string;
  Icon?: any;
};

export const TabHeading = ({
  links,
  children,
}: {
  links: TabHeadingLinkProps[];
  children?: React.ReactElement;
}) => {
  const currentSection = useCurrentSection(links.map((link) => link.id));

  return (
    <nav className="sticky top-0 z-10 flex w-full gap-4 border-b border-gray-300 bg-white px-8 pt-4 dark:border-gray-600 dark:bg-black">
      {links.map(({ id, title, Icon }: TabHeadingLinkProps) => (
        <TabLink
          key={id}
          title={title}
          Icon={Icon}
          href={`#${id}`}
          active={currentSection === id}
        />
      ))}

      {children}
    </nav>
  );
};
