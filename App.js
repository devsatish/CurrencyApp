
import React from 'react';
import { Button,View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CurrencyList from './screens/CurrencyList'
import CurrencyDetail from './screens/CurrencyDetail';


const AppNavigator = createStackNavigator({
  Currencies: { screen: CurrencyList },
  Detail: { screen: CurrencyDetail }
});





const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}