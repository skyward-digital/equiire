import { LoginCard } from '#/ui/components/LoginCard';

export default function Page() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h1 className="font-brand text-xl font-bold">Login</h1>

      <LoginCard />
    </div>
  );
}
