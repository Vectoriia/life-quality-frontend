import Header from '@/components/header';
import PrivateRoute from '@/components/private-route';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header isAuthorized />
      <main className="mt-[70px] min-h-[calc(100vh-80px)]">
        <PrivateRoute>
          {children}
        </PrivateRoute>
      </main>
    </>
  );
}
