import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TradingScreen from '../screens/Trading'
import ReturnsScreen from '../screens/Returns'
import PortfolioScreen from '../screens/Portfolio'
import StackHeader from './StackHeader';

/*
 *  AppContainer < MainStack[StackHeader] < MainTab < Screens
 */
const MainTab = createMaterialTopTabNavigator(
  { PortfolioScreen, TradingScreen, ReturnsScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      swipeEnabled: true,
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#002211',
      },
    },
  });

export const MainStack = createStackNavigator({ MainTab },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#002211',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      },
      headerTitle: <StackHeader />
    })
  });

const NavigationContainer = createAppContainer(MainStack);

export default NavigationContainer;