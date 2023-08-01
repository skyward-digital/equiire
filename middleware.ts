import { withAuth } from 'next-auth/middleware';

export default withAuth(function middleware() {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (
        (req.nextUrl.pathname.startsWith('/history') ||
          req.nextUrl.pathname.startsWith('/loans') ||
          req.nextUrl.pathname.startsWith('/overview') ||
          req.nextUrl.pathname.startsWith('/settings')) &&
        token === null
      ) {
        return false;
      }
      return true;
    },
  },
});
