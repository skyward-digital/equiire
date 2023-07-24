export const ProgressCircle = ({ progress = 0, width = 100 }) => {
  if (progress > 100) progress = 100;
  const strokeWidth = 10;

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
        className="stroke-brand fill-none duration-1000 ease-in-out will-change-transform"
        r="16"
        cx="16"
        cy="16"
        // strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeDasharray="100 100"
        strokeDashoffset={100 - progress}
      ></circle>
    </svg>
  );
};
