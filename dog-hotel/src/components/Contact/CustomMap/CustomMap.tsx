import React from 'react';
import Map, { Marker } from 'react-map-gl';

import styles from './CustomMap.module.scss';

const hotelCoordinates = {
  latitude: 50.3249278,
  longitude: 18.7857186,
};

export const CustomMap = () => {
  return (
    <div className={styles['map-wrapper']}>
      <Map
        id={'map'}
        initialViewState={{
          latitude: hotelCoordinates.latitude,
          longitude: hotelCoordinates.longitude,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.MAPS}
        scrollZoom={false}
        keyboard={false}
      >
        <Marker
          longitude={hotelCoordinates.longitude}
          latitude={hotelCoordinates.latitude}
          color="pink"
        />
      </Map>
    </div>
  );
};
