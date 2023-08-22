import { useForm } from 'react-hook-form';
import { UserIcon } from '@heroicons/react/24/outline';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';
import { FormData } from '#/app/(login)/sign-up/SignUp';

export function PersonalInformationForm({
  setStep,
  formData,
  setFormData,
  existingAccount,
  updateSession,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  existingAccount?: boolean;
  updateSession: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (existingAccount) {
      const name = await fetch('/api/profile/name', {
        method: 'PATCH',
        body: JSON.stringify({
          name: data.name,
        }),
      });

      if (name.status === 200) {
        const json = await name.json();

        await updateSession({
          user: {
            ...json.data,
          },
        });

        setStep((step: number) => step + 1);
      }
    } else {
      setFormData({ ...formData, ...data });
      setStep((step: number) => step + 1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-2xl gap-6">
      <Input
        id="name"
        type="text"
        Icon={UserIcon}
        label="Contact Name"
        placeholder="Your name"
        register={register}
        value={formData?.name}
        required="Name is required"
        error={errors.name}
      />
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Your email"
        register={register}
        value={formData?.email}
        required="Email is required"
        pattern={{
          value: /^\S+@\S+$/i,
          message: 'Invalid email address',
        }}
        error={errors.email}
        disabled={existingAccount}
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
