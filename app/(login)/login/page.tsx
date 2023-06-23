import { LoginForm } from '#/ui/components/LoginForm';

export default function Page() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h1 className="font-sans text-xl font-bold">Login</h1>

      <LoginForm />
    </div>
  );
}
