import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { darkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {/* Your existing app content */}
      </MUIThemeProvider>
    </ThemeProvider>
  );
};

export default App;
