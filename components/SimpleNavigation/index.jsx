import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Link from 'next/link';

const actions = [
  { icon: <HomeIcon />, name: 'Home', link: '/' },
  { icon: <CodeIcon />, name: 'Code', link: '/code' },
  { icon: <InsightsIcon />, name: 'Data Science', link: '/data-science'  },
  { icon: <ViewInArIcon />, name: '3D', link: '/3d' },
];

export default function SimpleNavigation() {
  return (
    <Box sx={{ height: 'fit-content', transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Navigation SpeedDial"
        sx={{ position: 'absolute', top: 25, left: {xs: '10%', md: '49%'}, zIndex: 1 }}
        icon={<SpeedDialIcon />}
        direction='right'
        FabProps={{
          sx: {
            backgroundColor: 'var(--blue1)',
            '&:hover': {
              backgroundColor: 'var(--blue2)',
            },
            color: '#000'
          },
        }}
      >
        {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              href={action.link}
            />
        ))}
      </SpeedDial>
    </Box>
  );
}
