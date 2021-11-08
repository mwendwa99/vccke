import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, ImageListItemBar } from '@mui/material';

import { assets } from '../../assets'

export function QuiltedImageList() {
    return (
        <Box sx={{ width: '100%', height: 600, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: assets.vcckChildren1,
        title: 'child and mum',
    },
    {
        img: assets.vcck3,
        title: 'donation',
    },
    {
        img: assets.vcck4,
        title: 'donation kariadudu',
    },
    {
        img: assets.k1,
        title: 'kariadudu',
    },
    {
        img: assets.k2,
        title: 'kariadudu',

    },
    {
        img: assets.k3,
        title: 'kariadudu',

    },
    {
        img: assets.k4,
        title: 'kariadudu',

    },
    {
        img: assets.k5,
        title: 'kariadudu',

    },
    {
        img: assets.k6,
        title: 'kariadudu',

    },
    {
        img: assets.k7,
        title: 'kariadudu',

    },
    {
        img: assets.k8,
        title: 'kariadudu',

    },
    {
        img: assets.k10,
        title: 'kariadudu',

    },
    {
        img: assets.vcck5,
        title: 'happy',
    },
    {
        img: assets.vcck7,
        title: 'kariadudu',
        rows: 2,
    },
    {
        img: assets.vcck6,
        title: 'kariadudu Nairobi',
    },
    {
        img: assets.vcckChildren2,
        title: 'childrens day',
    },
];
// ***********************************************************************
// ***********************************************************************

export function TitlebarImageList() {
    return (
        <ImageList sx={{ width: '100%', height: '100%' }} cols={3} variant='quilted'>
            {titleItemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const titleItemData = [
    {
        img: 'https://images.pexels.com/photos/8374093/pexels-photo-8374093.jpeg',
        title: 'Nairobi',
        // author: '@bkristastucchio',
        // rows: 2,
        // cols: 2,
        // featured: true,
    },
    {
        img: 'https://images.pexels.com/photos/1085695/pexels-photo-1085695.jpeg',
        title: 'Tharaka Nithi',
        // author: '@helloimnik',
    },
    {
        img: 'https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg',
        title: 'Kisumu',
        // author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.pexels.com/photos/5425893/pexels-photo-5425893.jpeg',
        title: 'Meru',
        // author: '@nolanissac',
        // cols: 1,
    },
    {
        img: 'https://images.pexels.com/photos/15203/pexels-photo.jpg',
        title: 'Machakos',
        // author: '@hjrc33',
        // cols: 2,
    },
];