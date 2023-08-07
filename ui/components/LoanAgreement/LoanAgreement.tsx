'use client';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XMarkIcon } from '@heroicons/react/24/outline';
//import { useState, useEffect } from 'react';

type LoanAgreementProps = {
  iframeUrl?: string;
};

export function LoanAgreement({ iframeUrl }: LoanAgreementProps) {
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.append('closeModal', 'true');
      window.location.href = currentUrl.toString();
    }
  };

  return (
    <DialogPrimitive.Root defaultOpen onOpenChange={handleOpenChange}>
      <DialogPrimitive.Trigger />
      <DialogPrimitive.Portal container={document.body}>
        <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <DialogPrimitive.Content className="dark:border-brand-secondary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] shadow-xs fixed left-[50%] top-[50%] z-50 grid h-full w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] border bg-white duration-200 sm:h-full">
          <iframe src={iframeUrl} className="mt-10 h-full w-full sm:mt-0" />

          <DialogPrimitive.Close className="ring-offset-brand focus:ring-ring absolute right-4 top-4 rounded-full border border-gray-300 bg-white p-3 text-gray-600 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white dark:border-none dark:bg-black dark:text-gray-300 sm:-right-14 sm:top-4">
            <XMarkIcon className="h-4 w-4" strokeWidth={2.5} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
