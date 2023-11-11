import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';

import Routers from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <GlobalStyles />
          <Routers />
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
