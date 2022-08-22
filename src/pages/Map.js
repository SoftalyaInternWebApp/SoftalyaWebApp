// import { faker } from '@faker-js/faker/locale/tr';
// @mui
// import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, } from '@mui/material';
// components
import Page from '../components/Page';
// eslint-disable-next-line
import Iconify from '../components/Iconify';
// sections
import {
    // AppTasks,
    // AppNewsUpdate,
    // AppOrderTimeline,
    // AppWebsiteVisits,
    // AppWidgetSummary,
    // eslint-disable-next-line import/named
    AppMapWidget,
    // Footer,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Map() {
    // eslint-disable-next-line
    const theme = useTheme();

    return (

        <Page title="Map">
            <Container maxWidth="md">

                <Grid >
                    <AppMapWidget id="Map"
                        options={{
                            center: { lat: 36.8653, lng: 30.6417 },
                            zoom: 8
                        }} />
                </Grid>
            </Container>
        </Page >

    );
}

