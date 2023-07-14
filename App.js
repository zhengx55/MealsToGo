import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { initializeApp } from 'firebase/app';
import { AuthenticationContextProvider } from './src/services/authentication/auth.context';
const firebaseConfig = {
  apiKey: 'AIzaSyDE4XPhHEB__RTEQBsNtZDAjJgNESCby7w',
  authDomain: 'mealstogo-10314.firebaseapp.com',
  projectId: 'mealstogo-10314',
  storageBucket: 'mealstogo-10314.appspot.com',
  messagingSenderId: '763769488814',
  appId: '1:763769488814:web:621ed81c1003bee804f43f',
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
