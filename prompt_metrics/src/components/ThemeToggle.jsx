import React from 'react';
import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <IconButton 
      onClick={toggleDarkMode} 
      color="inherit"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;
