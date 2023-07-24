'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export const ProgressCircle = ({ progress = 0, width = 100 }) => {
  const strokeWidth = 10;

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
    <svg
      className="-rotate-90"
      viewBox={`0 -${3 + Math.ceil(strokeWidth / 5)} 32 ${
        34 + Math.ceil(strokeWidth)
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
    >
      <circle
        className="fill-none stroke-gray-200 dark:stroke-gray-800"
        r="16"
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
        r="16"
        cx="16"
        cy="16"
        // strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeDasharray="100 100"
        strokeDashoffset={100 - progressState}
      ></circle>
    </svg>
  );
};
