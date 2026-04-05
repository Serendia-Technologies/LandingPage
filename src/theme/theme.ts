'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#41a7ed',
      dark: '#1b679e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1b679e',
      dark: '#000024',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f2f2f2',
    },
    text: {
      primary: '#000024',
      secondary: '#1b679e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      '@media (max-width:900px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:900px)': {
        fontSize: '1.25rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      '@media (max-width:900px)': {
        fontSize: '1.1rem',
      },
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '12px 32px',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#1b679e',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 12px rgba(0,0,36,0.08)',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 16px rgba(0,0,36,0.15)',
        },
      },
    },
  },
});

export default theme;
