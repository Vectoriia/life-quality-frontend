import BackgroundImage from '@/components/background-image';
import { Button, Typography } from '@mui/material';
import Image from "next/image";
import imageSrc from "public/images/home-bg-1.5.png";

export default function Home() {
  return (
    <>
      <BackgroundImage className='min-h-screen' image={
        <Image
          src={imageSrc}
          alt="Image Alt Text"
          className="object-cover object-center"
          fill
        />}
      >
        <main className="flex flex-col items-center p-24">
          <Typography variant="h1" className="font-extrabold md:text-[64px] text-[32px] text-center mb-6 text-blue">Покращіть якість<br />свого життя</Typography>
          <Button variant="contained" className="md:px-20 py-5" href="/sign-in">Увійти в систему</Button>
        </main>
      </BackgroundImage>
    </>
  );
}
