import { faker } from '@faker-js/faker/locale/tr';
// @mui
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// eslint-disable-next-line
import Iconify from '../components/Iconify';
// sections
import Map from '../components/Map'
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  // AppWebsiteVisits,
  AppWidgetSummary,
  Footer,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  // eslint-disable-next-line
  const theme = useTheme();

  return (

    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Merhaba, Hoşgeldiniz 🙂
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/user" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Sürücüler" total={20} icon={'healthicons:truck-driver'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/products" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Yolcular" total={100} color="info" icon={'eva:people-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/tasks" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Tamamlanan Görevler" total={43} color="warning" icon={'fluent:clipboard-task-list-rtl-24-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/tasks" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Reddedilen Görevler" total={32} color="error" icon={'carbon:warning-square-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>


            <Map
              id="Map"
              options={{
                center: { lat: 36.8653, lng: 30.6417 },
                zoom: 15
              }}
            />


          </Grid>
          <Grid item xs={12} md={4} lg={4}>
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
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <Footer
              title="Copyrights 2022© softalya.com"

            />
          </Grid>

        </Grid>

      </Container>
    </Page >

  );
}
