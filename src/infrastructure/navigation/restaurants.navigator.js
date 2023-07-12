import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screen/restaurants.screen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
      <RestaurantStack.Screen name="RestaurantsDetail" component={RestaurantsScreen} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
