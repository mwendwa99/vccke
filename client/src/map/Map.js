import React from 'react';
import { GoogleMap, useLoadScript, InfoWindow } from '@react-google-maps/api';

import mapStyles from './mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '70vh',
}
const center = {
    lat: 0.0236,
    lng: 37.9062
}
const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
        libraries,
    });

    console.log(process.env.REACT_APP_MAP_KEY);

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading maps';

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={7.5} center={center}
                options={options}
            >

            </GoogleMap>
        </div>
    )
}

export default Map
