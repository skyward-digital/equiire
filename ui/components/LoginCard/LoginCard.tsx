import { LoginForm } from '../LoginForm';
import { Logo } from '#/ui/assets/Logo';

export function LoginCard({ className }: { className: string }) {
  return (
    <section
      className={`${className} shadow-xs mx-auto max-w-[557px] rounded-lg border border-gray-100 bg-white px-1 pb-16 pt-20 dark:border-gray-600 dark:bg-black sm:px-24`}
    >
      <h1 className="text-brand-primary font-brand mb-10 text-center text-3xl font-bold sm:text-left">
        Smart and Flexible <span className="text-brand-secondary">Loans</span>
      </h1>
      <LoginForm className="px-3" />
      <Logo className="mx-auto mt-16" width="288" height="74" />
    </section>
  );
}
