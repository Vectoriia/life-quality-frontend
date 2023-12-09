import AppBar from '@/components/app-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
