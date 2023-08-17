import { cache } from 'react';

export const getBaseUrl = cache(() => {
  const envUrl = process.env.BASE_URL || `https://${process.env.VERCEL_URL}`;

  return envUrl ? envUrl : `http://localhost:${process.env.PORT ?? 3000}`;
});
