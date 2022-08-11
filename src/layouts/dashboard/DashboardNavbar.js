// material
import { alpha, styled } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, Box } from '@mui/material';
// components
//
import AccountPopover from './AccountPopover';
import CustomizedSwitches from './CustomizedSwitches';

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
  return (
    <RootStyle>
      <ToolbarStyle>
        <Box sx={{ mb: 1, mx: 115, mt: 1 }}>
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 2.5 }}>

            <CustomizedSwitches />
            <NotificationsPopover />
            <AccountPopover />
          </Stack>
        </Box>
      </ToolbarStyle>
    </RootStyle>
  );
}
