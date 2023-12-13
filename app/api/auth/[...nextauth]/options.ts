import { TOKEN_EXPIRATION } from '@/constants';
import {  UserData, UserSession } from '@/types/session';
import { AuthenticateResponse } from 'core/api/baseApi';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from "next-auth/providers/credentials"

type StringifiedUserData = Omit<
  UserData,
  | 'id'
> & {
  id: string;
};

const formatUserData = (data: StringifiedUserData): UserData => {
  return {
    ...data,
    id: parseInt(data.id, 10),
  };
};

export const options : NextAuthOptions = {
    providers: [ 
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {},
        async authorize(credentials) { 
          const { ...restCredentials } =
            credentials as Omit<AuthenticateResponse, 'phone'>;
          const user = {
            ...restCredentials,
          };

          return user;
        }
      })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          const { jwtToken, ...userData } = user;
          const tokenData = {} as JWT;

          tokenData.accessToken = jwtToken;
          tokenData.userData = formatUserData(
            userData as unknown as StringifiedUserData,
          );
          tokenData.accessTokenExpires =
            Date.now() + (TOKEN_EXPIRATION - 10) * 1000;
          tokenData.signInError = undefined;
          tokenData.refreshError = undefined;

          return tokenData;
        }

        if (Date.now() < (token.accessTokenExpires as number)) {
          return token;
        }

        return token;
      },
      async session({ session, token }) {
        if (token) {
          const sessionData: UserSession = {
            ...session,
            accessToken: token.accessToken as string,
            accessTokenExpires: token.accessTokenExpires as number,
            userData: token.userData as UserData,
            signInError: token.signInError as string,
          };

          return sessionData;
        }

        return session;
      },
    },
}