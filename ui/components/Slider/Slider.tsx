import clsx from 'clsx';

type SliderProps = {
  progress: number; // 0-100
  className?: string;
};

export function Slider({ progress, className }: SliderProps) {
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  return (
    <div
      className={clsx('relative my-3 overflow-hidden rounded-full', className)}
    >
      <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-700"></div>
      <div
        style={{
          // @ts-ignore
          '--tw-translate-x': `-${100 - Math.round(progress * 100) / 100}%`,
        }}
        className="bg-brand absolute top-0 h-3 w-full transform rounded-full transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
