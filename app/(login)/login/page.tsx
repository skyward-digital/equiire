import { LoginForm } from '#/ui/components/LoginForm';

export default function Page() {
  return (
    <div className="prose prose-sm max-w-none dark:prose-invert">
      <h1 className="text-xl font-bold font-sans">Login</h1>

      <LoginForm />
    </div>
  );
}
