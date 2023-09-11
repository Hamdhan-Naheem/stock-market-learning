/* eslint-disable global-require */
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
        //   'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        //   'baloo-regular': require('../assets/fonts/Baloo2-Regular.ttf'),
        //   'baloo-bold': require('../assets/fonts/Baloo2-Bold.ttf'),
        //   'Oswald-Regular': require('../assets/fonts/Oswald-Regular.ttf'),
        //   ComicSansMS3: require('../assets/fonts/ComicSansMS3.ttf'),
        //   commiNorm: require('../assets/fonts/design.graffiti.comicsansms.ttf'),
        //   commiBold: require('../assets/fonts/design.graffiti.comicsansmsgras.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
