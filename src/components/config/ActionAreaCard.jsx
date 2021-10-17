import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

import { colors } from './colors';

const useStyles = makeStyles(() => ({
    links: {
        textDecoration: 'none',
    }
}))

export default function ActionAreaCard({ item, pos }) {
    const classes = useStyles();
    const color = Object.values(colors)[pos]

    return (
        <Card sx={{ width: "100%", bgcolor: color, margin: '1rem' }}>
            <CardMedia
                component="img"
                width="100%"
                image={item.image}
                alt={item.name}
            />
            <CardActionArea >
                <Link className={classes.links} to={`${item.name.toLowerCase()}`}>
                    <CardContent sx={{ display: 'flex', alignContent: 'center', color: '#fff' }}  >
                        <Typography variant='h6' sx={{ flex: 1 }} >{item.name} </Typography>
                        <OpenInNew />
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card >
    );
}
