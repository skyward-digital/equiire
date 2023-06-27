import { LoginForm } from '../LoginForm';

export function LoginCard() {
  return (
    <section className="shadow-xs mx-auto max-w-[557px] rounded-lg border border-gray-100 bg-white px-1 pb-16 pt-20 dark:border-gray-600 dark:bg-black sm:px-24">
      <h1 className="text-brand-primary font-brand mb-10 text-3xl font-bold">
        Smart and Flexible <span className="text-brand-secondary">Loans</span>
      </h1>
      <LoginForm className="px-3" />
    </section>
  );
}
