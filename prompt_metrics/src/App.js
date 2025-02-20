import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Dashboard from './components/Dashboard';
import ChatWindow from './components/ChatWindow';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="main-container">
          <div className="dashboard-section">
            <Dashboard />
          </div>
          <div className="chatbot-section">
            <ChatWindow />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
