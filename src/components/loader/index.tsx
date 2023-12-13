import { Typography } from '@mui/material';
import clsx from 'clsx';

interface Props {
  className?: string;
  text?: string;
}

const Loader: React.FC<Props> = ({ className, text }) => {
  return (
    <div
      className={clsx(
        `w-full h-full flex flex-col items-center justify-center bg-primary-white/50 
        absolute top-[50%] -translate-y-[50%] left-0 md:rounded-2xl z-50`,
        className,
      )}
    >
      <div className="loader" />
      {text && (
        <Typography
          variant="h4"
          component="p"
          className="text-primary-softDark"
        >
          {text}
        </Typography>
      )}
    </div>
  );
};

export default Loader;
