import { Amplify } from 'aws-amplify';
// @ts-ignore
import { withOAuth } from 'aws-amplify-react-native';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Linking, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PersistGate } from 'redux-persist/integration/react';

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

function App({ oAuthUser, googleSignIn, signOut }: AppProps) {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation
            oAuthUser={oAuthUser}
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
