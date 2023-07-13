import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screen/restaurants.screen';
import RestaurantsDetail from '../../features/restaurants/screen/restaurants-detail.screen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="RestaurantsMain" component={RestaurantsScreen} />
      <RestaurantStack.Screen name="RestaurantsDetail" component={RestaurantsDetail} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
