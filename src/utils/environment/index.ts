const environment = {
  origin: process.env.NEXT_PUBLIC_ORIGIN,
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  authSecret: process.env.AUTH_SECRET,
  nextAuthUrl: process.env.NEXTAUTH_URL,
  isLocal: process.env.IS_LOCAL === 'true',
};

export default environment;
