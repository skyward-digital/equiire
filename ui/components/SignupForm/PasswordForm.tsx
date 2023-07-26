import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';

export function PasswordForm({
  formData,
  setFormData,
}: {
  formData: Object;
  setFormData: React.Dispatch<React.SetStateAction<Object>>;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data: any) => {
    setFormData({ ...formData, password: data.password });
    console.log(formData);
    // Here, we'll send the data to sign up and login
    // Once we have a valid token, we'll redirect to the dashboard
    router.push('/');
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
