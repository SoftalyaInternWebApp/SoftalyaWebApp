// routes
import Router from './routes';

// theme

// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function App() {



  return (

    <ThemeProvider >
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>


  );
}
