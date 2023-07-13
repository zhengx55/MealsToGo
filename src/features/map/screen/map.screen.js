import React, { useContext, useState, useEffect } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native';

import { Search } from '../components/search.component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import MapCallout from '../components/map-callout.component';
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const sothwestLat = viewport.southwest.lat;
    const Delta = northeastLat - sothwestLat;
    setLatDelta(Delta);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
