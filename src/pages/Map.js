// import { faker } from '@faker-js/faker/locale/tr';
// @mui
// import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
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
                {/* <Grid item xs={12} md={4} lg={4}>
                    <AppOrderTimeline
                        title="Rota "
                        list={[...Array(5)].map((_, index) => ({
                            id: faker.datatype.uuid(),
                            title: [
                                '1983, orders, $4220',
                                '12 Invoices have been paid',
                                'Order #37745 from September',
                                'New order placed #XF-2356',
                                'New order placed #XF-2346',
                            ][index],
                            type: `order${index + 1}`,
                            time: faker.date.past(),
                        }))}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <AppNewsUpdate
                        title="Onaylanan Görevler"
                        list={[...Array(5)].map((_, index) => ({
                            title: faker.address.streetAddress(),
                            description: faker.address.cityName(),
                            image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                            postedAt: faker.date.past(),
                        }))}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <AppTasks
                        title="Görevler"
                        list={[
                            { id: '1', label: faker.address.streetAddress(), },
                            { id: '2', label: faker.address.streetAddress(), },
                            { id: '3', label: faker.address.streetAddress(), },
                            { id: '4', label: faker.address.streetAddress(), },
                            { id: '5', label: faker.address.streetAddress(), },
                        ]}
                    />
                </Grid> */}



            </Container>
        </Page >

    );
}

