import { Amplify, Auth, Hub } from 'aws-amplify';
// @ts-ignore
import { withOAuth } from 'aws-amplify-react-native';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Linking, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PersistGate } from 'redux-persist/integration/react';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

import { persistor, store } from './app/store';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import awsconfig from './src/aws-exports';

if (__DEV__) {
  import('./ReactotronConfig').then(() => 'Reactotron Configured');
}

async function urlOpener(url: string, redirectUrl: string) {
  const res = await WebBrowser.openAuthSessionAsync(url, redirectUrl);

  if (res.type === 'success' && Platform.OS === 'ios') {
    WebBrowser.dismissBrowser();
    return Linking.openURL(res.url);
  }
  return null;
}

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: 'exp://z7w4dyc.hamdhannaheem.19000.exp.direct:80/--/one/',

    urlOpener,
  },
});

interface AppProps {
  oAuthUser: {};
  googleSignIn: () => void;
  signOut: () => void;
}

function App() {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      console.log(event)
      console.log(data)
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'customOAuthState':
          setCustomState(data);
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  console.log(customState)

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (error) {
      console.error(error);
      console.log('Not signed in');
    }
  };

  const googleSignIn = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      console.log('Google sign-in successful');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  console.log(user)

  const signOut = async () => {
    // Add your sign-out logic here using Auth.signOut();
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation
            oAuthUser={user}
            googleSignIn={googleSignIn}
            signOut={signOut}
          />
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default withOAuth(App);
