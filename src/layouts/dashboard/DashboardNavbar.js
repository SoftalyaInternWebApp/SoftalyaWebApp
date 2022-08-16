// material
import { React, useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, Box, IconButton } from '@mui/material';
// components
//
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountPopover from './AccountPopover';

// import MyApp from './MyApp';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));


// ----------------------------------------------------------------------



export default function DashboardNavbar() {

  const [darkModeStatus, setDarkModeStatus] = useState(false)

  const darkMode = () => {

    let style = ''


    if (!darkModeStatus) {
      style = 'invert(1) hue-rotate(180deg)'
      setDarkModeStatus(true)
    } else {
      style = 'invert(0)'
      setDarkModeStatus(false)
    }

    document.querySelector('html').style.filter = style;
    document.querySelectorAll('img').forEach(item => {
      item.style.filter = style
    })
  }

  return (

    <RootStyle>
      <ToolbarStyle>
        <Box sx={{ mb: 1, mx: 120, mt: 1 }}>
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 2.5 }}>
            <IconButton color="primary" type="button" onClick={darkMode}>{darkModeStatus ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
            <NotificationsPopover />
            <AccountPopover />
          </Stack>
        </Box>
      </ToolbarStyle>
    </RootStyle>
  );
}