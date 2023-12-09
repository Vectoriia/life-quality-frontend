import { Box, List, ListItem, ListItemIcon, ListItemText, Drawer as MuiDrawer, Typography } from '@mui/material';
import Link from 'next/link';
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { PropsWithChildren, ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

interface DrawerItem {
  title: string;
  route: string;
  icon: ReactNode;
  selected?: boolean;
}

const DrawerItems: DrawerItem[] = [
  {
    title: "Пацієнти",
    route: "/patients",
    icon: <MdOutlinePeopleAlt className="text-green" />
  },
  {
    title: "Аналізи",
    route: "/analysis",
    icon: <BsFillClipboard2PlusFill className="text-blue" />
  },
];

interface Props extends PropsWithChildren {
    open?: boolean;
    isPermanent?: boolean;
}

const Drawer: React.FC<Props> = ({
    open,
    children,
    isPermanent,
}) => {
  const path = usePathname();

  const items: DrawerItem[] = useMemo(() => {
    return DrawerItems.map((item) => {
      return {
        selected: path === item.route,
        ...item,
      }
    });
  }, [path])

  return (
      <MuiDrawer
      variant={isPermanent ? "permanent" : "temporary"}
      open={isPermanent || open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      PaperProps={{
        sx: {
            marginTop: '70px',
            backgroundColor: '#EEF4F9'
        }
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {items.map((item) => (
            <ListItem key={item.route}>
              <Link 
                className={clsx(
                  'no-underline flex items-center bg-white w-full px-5 rounded-sm gap-2',
                  item.selected && 'drop-shadow-md',
                )} 
                href={item.route}
              >
                {item.icon}
                <Typography variant="body2">{item.title}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
        {children}
      </Box>
    </MuiDrawer>
  )
};

export default Drawer;