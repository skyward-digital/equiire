import { useState } from 'react';
import { OtpInput } from './OtpInput';
import { Button } from '#/ui/components/Button';

export function OtpForm({ onSuccess }: { onSuccess: (otp: string) => void }) {
  const length = 6;
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);

  const onSubmit = (e: any) => {
    e.preventDefault();
    onSuccess(otp);
  };

  return (
    <form onSubmit={onSubmit} className="grid max-w-2xl justify-center gap-14">
      <OtpInput value={otp} valueLength={length} onChange={onChange} />
      <Button
        className="w-full max-w-sm justify-self-center"
        variant="primary"
        type="submit"
        disabled={otp.length !== length}
      >
        Submit
      </Button>
    </form>
  );
}
