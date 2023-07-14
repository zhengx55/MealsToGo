import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { Text } from '../../../components/typograph/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';
import { SafeArea } from '../../../components/safe-area';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantsDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
