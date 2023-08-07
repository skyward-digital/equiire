import { notFound, redirect } from 'next/navigation';
import { setSignRequest } from '#/app/api/loans';
import { LoanAgreement } from '#/ui/components/LoanAgreement';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | null;
  };
}) {
  const id = searchParams['id'] || '';
  const closeModal = searchParams['closeModal'] || false;

  if (!id) {
    notFound();
  }

  if (closeModal) {
    redirect(`/loans/${id}`);
  }

  const signatureDocumentUrl = (await setSignRequest(id)) as string;

  return <LoanAgreement iframeUrl={signatureDocumentUrl} />;
}
