import { ResetPasswordForm } from '#/ui/components/ResetPasswordForm';

export default async function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Forgot password</h1>
      <ResetPasswordForm />
    </div>
  );
}
