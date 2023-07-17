import clsx from 'clsx';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

const ActiveStep = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      className="z-10"
    >
      <circle cx="10.5" cy="10" r="5" fill="#FF8622" />
      <circle
        cx="10.5"
        cy="10"
        r="7.5"
        stroke="#FF9E4E"
        strokeOpacity="0.3"
        strokeWidth="5"
      />
    </svg>
  );
};

const InactiveStep = () => {
  return <div className="z-10 h-3 w-3 rounded-full bg-gray-300 "></div>;
};

const Line = () => {
  return (
    <div className="absolute z-0 w-full px-2">
      <div className="h-[2px] w-full bg-gray-100 dark:bg-gray-400"></div>
    </div>
  );
};

export const ProgressBar = ({
  currentStep,
  totalSteps,
  className,
}: ProgressBarProps) => {
  return (
    <div
      className={clsx(
        className,
        'relative mx-4 flex items-center justify-between',
      )}
    >
      {[...Array(totalSteps)].map((_, index) =>
        index === currentStep ? (
          <ActiveStep key={index} />
        ) : (
          <InactiveStep key={index} />
        ),
      )}

      <Line />
    </div>
  );
};
