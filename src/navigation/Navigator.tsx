import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TradingScreen from '../screens/Trading'
import ReturnsScreen from '../screens/Returns'
import PortfolioScreen from '../screens/Portfolio'
import StackHeader from './StackHeader';

/*
 *  AppContainer < MainStack < MainTab < Screens
 *  
 *  Rotas: {
 *    MainTab: PortfolioScreen, TradingScreen, ReturnsScreen
 *  }
 */
const MainTab = createMaterialTopTabNavigator(
  { PortfolioScreen, TradingScreen, ReturnsScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // https://reactnavigation.org/docs/en/tab-based-navigation.html
      swipeEnabled: true,
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#243',
      },
    },
  });

export const MainStack = createStackNavigator({ MainTab },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#243',
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