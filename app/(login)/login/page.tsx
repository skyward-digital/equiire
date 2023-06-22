import { LoginForm } from '#/ui/components/LoginForm';

export default function Page() {
  return (
    <div className="prose prose-sm max-w-none">
      <h1 className="text-xl font-bold">Login</h1>

      <LoginForm />
    </div>
  );
}
