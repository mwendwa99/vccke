import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

import { colors } from './colors';

const useStyles = makeStyles(() => ({
    links: {
        textDecoration: 'none',
        color: '#fff',
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center'
    }
}))

export default function ActionAreaCard({ item, pos }) {
    const classes = useStyles();
    const color = Object.values(colors)[pos]

    return (
        <Card sx={{ bgcolor: color, width: '100%', margin: '0.5rem' }}>
            <CardMedia
                component="img"
                width="100%"
                image={item.image}
                alt={item.name}
            />
            <CardActionArea >
                <CardContent>
                    <Link className={classes.links} to={`${item.name.toLowerCase()}`}>
                        <Typography variant='body1' className={classes.text}>
                            {item.name}
                            <OpenInNew fontSize='large' />
                        </Typography>
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
