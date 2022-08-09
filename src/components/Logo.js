import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  // eslint-disable-next-line
  const PRIMARY_LIGHT = theme.palette.primary.light;
  // eslint-disable-next-line
  const PRIMARY_MAIN = theme.palette.primary.main;
  // eslint-disable-next-line
  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 200, height: 100, ...sx }}>
      <img src='https://cdn.discordapp.com/attachments/853917347210330132/1006473990648369152/webLogo.png ' alt="photoURL" />
    </Box >

  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
