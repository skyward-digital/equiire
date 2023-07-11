import { ForgotPasswordCard } from '#/ui/components/ForgotPasswordCard';

export default async function Page() {
  return (
    <div className="mt-10 sm:mt-40">
      <ForgotPasswordCard token={true} />
    </div>
  );
}
