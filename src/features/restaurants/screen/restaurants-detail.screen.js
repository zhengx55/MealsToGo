import { View, Text } from 'react-native';
import React from 'react';
import { SafeArea } from '../../../components/safe-area';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const RestaurantsDetail = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};

export default RestaurantsDetail;
