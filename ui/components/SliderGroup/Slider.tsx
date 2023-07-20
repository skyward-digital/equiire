import clsx from 'clsx';

export function Slider({ widthClass = 'w-1/2' }) {
  return (
    <div className="relative my-3">
      <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-700"></div>
      <div
        className={clsx('bg-brand absolute top-0 h-3 rounded-full', widthClass)}
      ></div>
    </div>
  );
}
