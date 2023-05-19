import * as React from 'react';
import Map, {NavigationControl} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.module.css';

function MapComponent() {
	const map_key = process.env.NEXT_PUBLIC_MAPLIBRE_KEY;

  return (
  	

    <div className="map">
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${map_key}`}
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}

export default MapComponent;
