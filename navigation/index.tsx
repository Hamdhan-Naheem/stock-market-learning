/* eslint-disable react/no-unstable-nested-components */
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import Drawe from '../screens/Drawer';
import NotFoundScreen from '../screens/NotFoundScreen';

import SignInScreen from '../screens/SignInScreen';
import { RootStackParamList } from '../types';

import LinkingConfiguration from './LinkingConfiguration';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: '#E2E8EE',
    card: '#40739A',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function Homebuttonfunction({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="home" size={24} color="white" />
    </TouchableOpacity>
  );
}

interface RootNavigatorProps {
  oAuthUser: {};
  googleSignIn: () => void;
  signOut: () => void;
}

function RootNavigator({
  oAuthUser,
  googleSignIn,
  signOut,
}: RootNavigatorProps) {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      {oAuthUser ? (
        <>
          <Stack.Screen
            name="TabOne"
            options={{ headerShadowVisible: false, headerShown: false }}
          >
            {(props) => <Drawe {...props} signOut={signOut} />}
          </Stack.Screen>

          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: 'Oops!' }}
          />
        </>
      ) : (
        <Stack.Screen
          name="sighIn"
          // eslint-disable-next-line react/no-children-prop
          children={() => (
            <SignInScreen
              googleSignIn={googleSignIn}
            />
          )}
          //  component={SignInScreen}
          //  initialParams={{googleSignIn}}
          options={{ headerShadowVisible: false, headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

export default function Navigation({
  oAuthUser,
  googleSignIn,
  signOut,
}: {
  oAuthUser: {}|null;
  googleSignIn: () => void;
  signOut: () => void;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={MyTheme}>
      <RootNavigator
        oAuthUser={oAuthUser}
        googleSignIn={googleSignIn}
        signOut={signOut}
      />
    </NavigationContainer>
  );
}

