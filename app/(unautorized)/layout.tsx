import Header from '@/components/header';
import UnauthorizedOnlyRoute from '@/components/unauthorized-only-route';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
        <main className="mt-[70px] min-h-[calc(100vh-80px)]">
          <UnauthorizedOnlyRoute>
            {children}
          </UnauthorizedOnlyRoute>
        </main>
    </>
  );
}
