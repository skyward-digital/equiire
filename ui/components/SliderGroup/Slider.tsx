import clsx from 'clsx';

type SliderProps = {
  width: string;
};

export function Slider({ width }: SliderProps) {
  return (
    <div className="relative my-3">
      <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-700"></div>
      <div
        // Tailwind classes cannot be applied dynamically (e.g. `w-${value}/{totalOptions}`), so we have to use inline styles here
        style={{ width }}
        className={clsx('bg-brand absolute top-0 h-3 rounded-full')}
      ></div>
    </div>
  );
}
