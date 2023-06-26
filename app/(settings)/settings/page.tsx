'use client';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';

export default function SettingsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your server
    // to create a new user account.
  };

  const password: string = watch('password');
  const confirmPassword: string = watch('confirmPassword');

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      {/* user details form */}
      <div className="grid gap-8">
        <h2 className="text-base">Details</h2>

        {/* Company */}
        <Input
          id="company"
          label="Company Name"
          register={register}
          required="Company is required"
          error={errors.company}
          autocomplete="organization"
        />

        <div className="mb-2 grid grid-cols-2 gap-4">
          {/* Contact Details */}
          <Input
            id="firstname"
            label="First Name"
            register={register}
            required="First name is required"
            error={errors.firstname}
            autocomplete="given-name"
          />

          <Input
            id="lastname"
            label="Last Name"
            register={register}
            required="Last name is required"
            error={errors.lastname}
            autocomplete="family-name"
          />
        </div>

        {/* Email Address */}
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="test@test.com"
          register={register}
          required="Email is required"
          pattern={{
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          }}
          error={errors.email}
        />

        {/* Address */}
        {/* TODO: Question - Should we implement an address lookup here? */}
        <div className="grid gap-2">
          <Input
            id="address1"
            label="Address 1"
            placeholder="123 Main St"
            register={register}
            required="Address is required"
            error={errors.address1}
            autocomplete="address-line1"
          />

          <Input
            id="address2"
            label="Address 2"
            placeholder="Apt 1"
            register={register}
            error={errors.address2}
            autocomplete="address-line2"
          />

          <Input
            id="city"
            label="City"
            placeholder="New York"
            register={register}
            required="City is required"
            error={errors.city}
            autocomplete="address-level2"
          />

          <div className="flex gap-2">
            {/* This should probably be a select as states are fixed */}
            <Input
              id="state"
              label="State"
              placeholder="NY"
              register={register}
              required="State is required"
              error={errors.state}
              className="w-1/2"
              autocomplete="address-level1"
            />

            <Input
              id="zip"
              label="Zip"
              placeholder="10001"
              register={register}
              required="Zip is required"
              size={5}
              error={errors.zip}
              className="w-1/2"
              autocomplete="postal-code"
            />
          </div>
        </div>

        {/* Phone Number */}
        <Input
          id="phone"
          type="tel"
          label="Phone Number"
          placeholder="+1 (555) 555-5555"
          register={register}
          required="Phone number is required"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          error={errors.phone}
        />
      </div>

      {/* Password reset form */}
      <div>
        <h2 className="text-base">Security</h2>

        <div className="mb-2 grid grid-cols-2 gap-4">
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="New Password"
            register={register}
            required="Password is required"
            error={errors.password}
          />

          <Input
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="New Password"
            register={register}
            required="Password is required"
            validate={(value: string) =>
              value === password || 'The passwords do not match'
            }
            error={errors.confirmPassword}
          />
        </div>

        {password && password === confirmPassword ? (
          <Input
            id="currentPassword"
            type="password"
            label="Password"
            placeholder="Old Password"
            register={register}
            required="You need to enter your current password to update your password"
            error={errors.currentPassword}
          />
        ) : null}
      </div>
    </div>
  );
}
