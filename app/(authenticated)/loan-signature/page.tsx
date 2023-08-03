'use client';
import { useSearchParams } from 'next/navigation';
import { createSignatureRequest } from '#/app/api/loan-signature/createSignatureRequest';
import { Button } from '#/ui/components/Button';

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id') || '';

  const onClick = () => {
    createSignatureRequest(id);
  };
  return (
    <div className="mx-auto max-w-2xl p-10">
      <Button onClick={onClick}>Signature</Button>
    </div>
  );
}
