import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string,
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Bulunamadı
      </Typography>
      <Typography variant="body2" align="center">
        için sonuç bulunamadı &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Yazım hatalarını kontrol etmeyi veya tam kelimeleri kullanmayı deneyin.
      </Typography>
    </Paper>
  );
}
