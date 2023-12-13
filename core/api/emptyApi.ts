import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';
import { HYDRATE } from 'next-redux-wrapper';
import queryString from 'query-string';

import { UserSession } from '@/types/session';
import environment from '@/utils/environment';

// initialize an empty api service that we'll inject endpoints into later as needed
// eslint-disable-next-line
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: environment.apiUrl,
    paramsSerializer: (params) =>
      queryString.stringify(params, { sort: false }),
    prepareHeaders: async (headers) => {
      try {
        const session = (await getSession()) as UserSession;

        if (session) {
          headers.set('authorization', `Bearer ${session.accessToken}`);
        }
      } catch {
        // Session does not exist. We're on server side. Do nothing
      }

      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }

    return undefined;
  },
  endpoints: () => ({}),
});
