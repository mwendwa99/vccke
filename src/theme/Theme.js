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
            main: '#fff'
        },
        neutral: {
            main: '#E5E5E5',
            contrastText: '#000'
        },
        orange: {
            main: 'rgba(246, 162, 27)'
        }
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        header1: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.5
        },
        header2: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        header3: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        text1: {
            fontSize: '2rem',
            fontWeight: 300,
        },
        text2: {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        text3: {
            fontSize: '1.5rem',
            fontWeight: 350,
        },
        body1: {
            fontSize: '1.2rem',
            fontWeight: 400,
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.874
        }
    }
});
