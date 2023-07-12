import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ActivityIndicator } from 'react-native-paper';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

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

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(restaurants);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
      />
    </SafeArea>
  );
};
