import ModeSelector from '@components/mode-selector';
import useAppDispatch from '@hooks/use-app-dispatch';
import useAppSelector from '@hooks/use-app-selector';
import {
  AppBar as MuiAppBar, Typography
} from '@mui/material';
import { setTestIncidentsFilter } from '@store/ui';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';


const HomeAppBar: React.FC = ({
}) => {
  const dispatch = useAppDispatch();
  const { isTest } = useAppSelector((state) => state.ui);

  const handleChangeMode = () => {
    dispatch(setTestIncidentsFilter(!isTest))
  }

  const content = useMemo(() => {
    return (
      <div className="py-4 px-6">
        <div>
          <ModeSelector isTest={isTest} handleChange={handleChangeMode} />
        </div>
        <div className="flex">
          <Typography variant="h6">
            No Incident Participation
          </Typography>
          <div>

          </div>
        </div>
      </div>
    )
  }, [isTest]);

  return (
    <MuiAppBar className={twMerge(
      'flex flex-row h-[64px] py-[8px] items-center justify-between relative bg-background-default',
    )}>
      {content}
    </MuiAppBar>
  )
}

export default HomeAppBar
