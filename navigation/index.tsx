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
import Contents from '../screens/Contents';

import SignInScreen from '../screens/SignInScreen';
import { RootStackParamList } from '../types';

import LinkingConfiguration from './LinkingConfiguration';
import Stock from '../screens/Stock';
import StockTypes from '../screens/StockTypes';
import StockIndices from '../screens/StockIndices';
import InvestmentGoals from '../screens/InvestmentGoals';
import InvestmentAccounts from '../screens/InvestmentAccounts';
import MarketOrders from '../screens/MarketOrders';
import Dividents from '../screens/Dividents';
import StockAnalysis from '../screens/StockAnalysis';
import LongInvesting from '../screens/LongInvesting';
import News from '../screens/News';
import Strategies from '../screens/Strategies';
import Brokers from '../screens/Brokers';
import StockPrediction from '../screens/StockPrediction'

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

          <Stack.Screen
            name="Contents"
            component={Contents}
            options={{
              title: 'CONTENTS',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

<Stack.Screen
            name="stockPrediction"
            component={StockPrediction}
            options={{
              title: 'STOCK PREDICTION',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="stock"
            component={Stock}
            options={{
              title: 'WHAT IS STOCK',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />


          <Stack.Screen
            name="stockIndices"
            component={StockIndices}
            options={{
              title: 'STOCK INDICES',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="investmentGaols"
            component={InvestmentGoals}
            options={{
              title: 'Investment Goals & Risk Tolerance',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="investmentAccounts"
            component={InvestmentAccounts}
            options={{
              title: 'INVESTMENT ACCOUNTS',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="marketOrders"
            component={MarketOrders}
            options={{
              title: 'MARKET ORDER VS LIMIT ORDERS',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="divedents"
            component={Dividents}
            options={{
              title: 'DIVIDENDS',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="stockAnalysis"
            component={StockAnalysis}
            options={{
              title: 'STOCK ANALYSIS',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="longTerm"
            component={LongInvesting}
            options={{
              title: 'LONG VS SHORT INVESTING',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="news"
            component={News}
            options={{
              title: 'FINANCIAL NEWS AND RESEARCH',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="Strategies"
            component={Strategies}
            options={{
              title: 'INVESTMENT STRATEGIES',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />

          <Stack.Screen
            name="brokers"
            component={Brokers}
            options={{
              title: 'SRILANKA STOCK BROKERS',
              headerBackTitleVisible: false,
              headerRight: () => (
                <Homebuttonfunction
                  onPress={() => navigation.navigate('TabOne')}
                />
              ),
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="sighIn"
          // eslint-disable-next-line react/no-children-prop
          children={() => <SignInScreen googleSignIn={googleSignIn} />}
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
  oAuthUser: {};
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
