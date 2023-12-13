
import { AuthenticateResponse } from 'core/api/baseApi';
import { Session } from 'next-auth';

export type UserData = Omit<
AuthenticateResponse,
  'jwtToken' | 'id'
> & { id: number };

export interface UserSession extends Session {
  accessToken: string;
  accessTokenExpires: number;
  signInError?: string;
  userData: UserData;
}
