import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={className} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;
