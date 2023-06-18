import { SignupForm } from '#/ui/components/SignupForm';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Signup</h1>
      <SignupForm />
    </div>
  );
}
