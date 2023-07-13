import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { FavouritesContext } from '../../services/favourites/favourites.context';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ item }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
  const isFavourite = favourites.find((r) => r.placeId === item.placeId);
  return (
    <FavouriteButton
      onPress={() => (!isFavourite ? addToFavourites(item) : removeFromFavourites(item))}
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};

export default Favourite;
