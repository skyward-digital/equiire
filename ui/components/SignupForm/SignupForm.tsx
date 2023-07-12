'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { PencilIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from '#/ui/components/Button';

const PersonalInformationForm = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setStep((step: number) => step + 1);

    // Here you would typically send the data to your server
    // to create a new user account.
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-2xl gap-6">
      <Input
        id="name"
        type="text"
        icon={UserIcon}
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
        icon={PencilIcon}
      />
      <Button style="primary" className="w-full max-w-xs justify-self-center">
        Next
      </Button>
    </form>
  );
};

const AdditionalDetailsForm = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setStep((step: number) => step + 1);

    // Here you would typically send the data to your server
    // to create a new user account.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-2xl gap-6">
      <Input
        id="address1"
        type="text"
        label="Address Line 1"
        placeholder="123 Main St"
        register={register}
        required="Address Line 1 is required"
        error={errors.address1}
      />
      <Input
        id="address2"
        type="text"
        label="Address Line 2"
        placeholder="123 Main St"
        register={register}
        error={errors.address2}
      />
      <div className="flex gap-2">
        <Input
          id="city"
          type="text"
          label="City"
          placeholder="Anytown"
          register={register}
          required="City is required"
          error={errors.city}
        />
        <Input
          id="state"
          type="text"
          label="State"
          placeholder="Alabama"
          register={register}
          required="State is required"
          error={errors.state}
        />
        <Input
          id="zipcode"
          type="text"
          label="Zip Code"
          placeholder="12345"
          register={register}
          required="Zip Code is required"
          error={errors.zipcode}
        />
      </div>
      <Input
        id="telephone"
        type="tel"
        label="Phone Number"
        placeholder="(XXX) XXX-XXXX"
        register={register}
        required="Phone Number is required"
        error={errors.telephone}
      />
      <Button style="primary" className="w-full max-w-xs justify-self-center">
        Next
      </Button>
    </form>
  );
};

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    // Here you would typically send the data to your server
    // to create a new user account.
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
      <Button style="primary" className="w-full max-w-xs justify-self-center">
        Next
      </Button>
    </form>
  );
};

const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInformationForm },
  { title: 'Additional Information', component: AdditionalDetailsForm },
  { title: 'Password', component: PasswordForm },
];

export function SignupForm() {
  const [step, setStep] = useState<number>(0);

  const { component: Form, title } = FORM_STEPS[step];

  return (
    <>
      <h2 className="text-brand-primary mb-10 text-center font-semibold">
        {title}
      </h2>
      <Form setStep={setStep} />
    </>
  );
}
