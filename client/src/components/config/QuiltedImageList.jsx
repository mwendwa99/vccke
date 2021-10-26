import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar } from '@mui/material';

import { assets } from '../../assets'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: '100%', height: '100%' }}
            variant="quilted"
            cols={7}
            rowHeight={150}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: assets.vcckChildren1,
        title: 'child and mum',
        rows: 2,
        cols: 2,
    },
    {
        img: assets.vcck3,
        title: 'donation',
        cols: 2,
    },
    {
        img: assets.vcck4,
        title: 'donation kariadudu',
    },
    {
        img: assets.vcck5,
        title: 'happy',
        rows: 2,
        cols: 2,
    },
    {
        img: assets.vcck7,
        title: 'kariadudu',
        cols: 2,
    },
    {
        img: assets.vcck6,
        title: 'kariadudu Nairobi',
    },
    {
        img: assets.vcckChildren2,
        title: 'childrens day',
        cols: 2,
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