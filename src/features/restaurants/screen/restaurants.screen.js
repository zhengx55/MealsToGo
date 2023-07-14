import React, { useContext, useState } from 'react';
import { FlatList, Pressable, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ActivityIndicator } from 'react-native-paper';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import Search from '../components/search.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import FavouritesBar from '../../../components/favourites/favourites-bar.component';
import FadeInView from '../../../components/animations/fade.animation';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const onPressFunction = (item) => {
    navigation.navigate('RestaurantsDetail', {
      restaurant: item,
    });
  };
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
      {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => onPressFunction(item)}>
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
      />
    </SafeArea>
  );
};
