import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const MapboxMap = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuc2h1Z291cjcwIiwiYSI6ImNsYzV1ZjRqNjB1M3Izb21oemNmZXh2cmkifQ.-gm06JzvQcq8Ya3qpcQOYw';

    if (!map) {
      const initializeMap = ({ setMap, mapContainer }) => {
        const mapInstance = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12', // Specify the map style here
          center: [0, 0], // Set an initial center point
          zoom: 10, // Set the initial zoom level
        });

        // Add navigation controls to the map
        mapInstance.addControl(new mapboxgl.NavigationControl());

        // Update the state with the map instance
        setMap(mapInstance);
      };

      if (mapContainer.current) {
        initializeMap({ setMap, mapContainer });
      }
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      // Get the current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setCenter([longitude, latitude]); // Update the map center with the current location
          map.setZoom(15); // Adjust the zoom level as desired
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }
  }, [map]);

  return <div ref={mapContainer} style={{ width:'99vw', height: '100vh' }} />;
};

export default MapboxMap;
