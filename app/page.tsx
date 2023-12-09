import AppBar from '@/src/components/app-bar';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <AppBar />
    <main className="flex flex-col items-center p-24">
      <h2>Home page</h2>
      <Button variant="contained">Sign in</Button>
    </main>
    </>
  );
}
