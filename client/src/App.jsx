import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ThemeProvider from './themes/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';

const queryClient = new QueryClient();
const routeModules = import.meta.globEager('./routes/*.jsx');
const routes = Object.values(routeModules).map(module => module.default);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
function AppContent() {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: '100%', width: '100%', backgroundColor: theme.palette.background.default }}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;