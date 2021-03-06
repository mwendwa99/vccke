import { createTheme } from '@mui/material/styles';

export const AppTheme = createTheme({
    palette: {
        primary: {
            main: '#2CAC47',
            contrastText: '#fff'
        },
        secondary: {
            main: '#ED018A',
            contrastText: '#fff'
        },
        header: {
            main: '#000'
        },
        neutral: {
            main: '#E5E5E5',
            contrastText: '#000'
        },
        orange: {
            main: 'rgba(246, 162, 27)',
            contrastText: '#000'
        },
        yellow: {
            main: '#FECB08',
            contrastText: '#000'
        }
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontWeight: 500,
            fontSize: '3rem',
            lineHeight: 1.5
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        body1: {
            fontSize: '1.5rem',
            fontWeight: 300,
        },
    }
});
