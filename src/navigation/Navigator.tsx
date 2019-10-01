import {
  createAppContainer,
} from 'react-navigation';
import {
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import TradingScreen from '../screens/Trading'
import ReturnsScreen from '../screens/Returns'
import PortfolioScreen from '../screens/Portfolio'

const MainNavigator = createBottomTabNavigator({ PortfolioScreen, TradingScreen, ReturnsScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // https://reactnavigation.org/docs/en/tab-based-navigation.html
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName: string;
        if (routeName === 'TradingScreen') {
          iconName = 'md-stats';
        } else if (routeName === 'PortfolioScreen') {
          iconName = 'md-book'
        } else if (routeName === 'ReturnsScreen') {
          iconName = 'md-wallet'
        }
        // Typescript: Non-null assertion operator
        return <IconComponent name={iconName!} size={30} color={tintColor!} />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: '#a68d02',
      activeTintColor: '#FFF',
      inactiveBackgroundColor: '#132',
      inactiveTintColor: '#FFF',
    },
  });

const NavigationContainer = createAppContainer(MainNavigator);

export default NavigationContainer;