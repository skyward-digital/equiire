export function Ping() {
  return (
    <span className="flex h-[11px] w-[11px]">
      <span className="bg-pink-600 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
      <span className="bg-pink-600 relative inline-flex h-[11px] w-[11px] rounded-full"></span>
    </span>
  );
}
