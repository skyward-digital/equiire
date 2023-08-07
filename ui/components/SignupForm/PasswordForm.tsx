import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';
import { signup } from '#/hooks/useAuth';
import { Loan } from '#/app/(login)/sign-up/page';

type PasswordFormProps = {
  formData: {
    email: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    company: string;
    name: string;
    postalCode: string;
    state: string;
  };
  loan: Loan;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export function PasswordForm({
  formData,
  loan,
  setFormSubmitted,
}: PasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data: any) => {
    if (data?.password) {
      signup({ ...formData, password: data.password, loan });
      // They will then need to confirm their email
      setFormSubmitted(true);
    } else {
      console.log('Missing data');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-2xl gap-6">
      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Your password"
        register={register}
        required="Password is required"
        error={errors.password}
        hint="Passwords must have at least 8 characters"
        // We can put this in later, as it's an easy way for us to check invalid sign up behaviour
        /* pattern={{
          value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
          message:
            'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
        }} */
      />
      <Input
        id="confirm_password"
        type="password"
        label="Confirm password"
        placeholder="Password"
        register={register}
        required="Confirm Password is required"
        error={errors.confirm_password}
        validate={(value: string) =>
          value === getValues('password') || 'Passwords do not match'
        }
      />
      <Button
        variant="primary"
        className="mt-3 w-full max-w-xs justify-self-center"
      >
        Next
      </Button>
    </form>
  );
}
