import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        if (typeof credentials === 'undefined') return null;

        const loginResponse = await fetch(`${process.env.BASEURL}/api/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });

        const { data: tokens } = await loginResponse.json();

        // exit if login failed
        if (!loginResponse.ok || !tokens) return null;

        const profileResponse = await fetch(
          `${process.env.BASEURL}/api/profile?access_token=${tokens.accessToken}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          },
        );

        const { data: user } = await profileResponse.json();

        if (profileResponse.ok) {
          return {
            user,
            tokens,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token, user }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (c !== 'iat' && c !== 'exp' && c !== 'jti' && c !== 'accessToken') {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});
      return {
        ...session,
        user: sanitizedToken.user,
        tokens: sanitizedToken.tokens,
      };
    },
    async jwt({ token, user, account, profile }) {
      if (typeof user !== 'undefined') {
        // user has just signed in so the user object is populated
        return user as JWT;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
    // signOut: '/api/logout',
    // verifyRequest: '/auth/verify-request', // (used for check email message)
  },
};
