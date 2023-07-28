import { useForm } from 'react-hook-form';
import { UserIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';

export function PersonalInformationForm({
  setStep,
  formData,
  setFormData,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: Object;
  setFormData: React.Dispatch<React.SetStateAction<Object>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setFormData({ ...formData, ...data });
    setStep((step: number) => step + 1);

    // Here you would typically send the data to your server
    // to create a new user account.
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
        required="Name is required"
        error={errors.name}
      />
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Your email"
        register={register}
        required="Email is required"
        pattern={{
          value: /^\S+@\S+$/i,
          message: 'Invalid email address',
        }}
        error={errors.email}
      />
      <Input
        id="company"
        type="text"
        label="Company"
        placeholder="Cool Company"
        register={register}
        required="Company is required"
        error={errors.company}
        Icon={PencilIcon}
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
