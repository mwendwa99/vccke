import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: '100%', height: '100%' }}
            variant="quilted"
            cols={6}
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
        img: 'https://images.pexels.com/photos/9706105/pexels-photo-9706105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'child and mum',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.pexels.com/photos/3277188/pexels-photo-3277188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'happy kids',
    },
    {
        img: 'https://images.pexels.com/photos/1686463/pexels-photo-1686463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'children playing',
    },
    {
        img: 'https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'smile',
        cols: 2,
    },
    {
        img: 'https://images.pexels.com/photos/2305192/pexels-photo-2305192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'happy',
        author: '@Shelagh MUrphy',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.pexels.com/photos/9705679/pexels-photo-9705679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'family',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.pexels.com/photos/1002061/pexels-photo-1002061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'b&w kids',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.pexels.com/photos/7293100/pexels-photo-7293100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'b&w children',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.pexels.com/photos/9705726/pexels-photo-9705726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'childrens day',
        cols: 2,
    },
];
