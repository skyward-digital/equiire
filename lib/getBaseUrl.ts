import { cache } from 'react';

export const getBaseUrl = cache(() => {
  return process.env.BASE_URL ?? // Try baseurl first
    process.env.VERCEL_URL // then try vercelUrl
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT ?? 3000}`;
});
