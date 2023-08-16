'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export const ProgressCircle = ({
  progress = 0,
  width = 100,
  className = '',
}) => {
  const strokeWidth = 8;

  const [progressState, setProgressState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgressState((progressState) => {
        if (progressState > 100) return 100;
        if (progressState < 0) return 0;
        return progress;
      });
    }, 1);
  }, []);

  return (
    <div className={className}>
      <svg
        className="-rotate-90"
        width={width}
        height={width}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="fill-none stroke-gray-200 dark:stroke-gray-800"
          r="8"
          cx="16"
          cy="16"
          strokeWidth={strokeWidth}
        ></circle>

        <circle
          className={clsx(
            'fill-none duration-1000 ease-in-out will-change-transform',
            progressState
              ? 'stroke-brand'
              : 'stroke-gray-200 dark:stroke-gray-800',
          )}
          r="8"
          cx="16"
          cy="16"
          // strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray="100 100"
          strokeDashoffset={100 - progressState / 2}
        ></circle>
      </svg>
    </div>
  );
};
