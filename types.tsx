/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  sighIn: undefined;
  Contents: undefined;
  stock: undefined;
  stockPrediction: undefined;
  stockIndices: undefined;
  investmentGaols: undefined;
  investmentAccounts: undefined;
  marketOrders: undefined;
  divedents: undefined;
  stockAnalysis: undefined;
  longTerm: undefined;
  news: undefined;
  Strategies: undefined;
  brokers: undefined;
  Home: undefined;
  TabOne: undefined;
  Principals: undefined;
  Setting: undefined;
  Tradetime: undefined;
  DoesandDont: undefined;
  ChartImportants: undefined;
  TradeDecipline: undefined;
  Drawer: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
