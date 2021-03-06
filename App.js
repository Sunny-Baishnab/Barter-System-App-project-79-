import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
//import AppTabNavigator from './component/AppTabNavigator';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';



export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen:{
      screen:HomeScreen,
      navigationOptions:{
          tabBarIcon:<Image source = {require('./assets/unnamed.png')} style = {{width:20,height:20}}/>,
          tabBarLabel:'HomeScreen'

      }
  },
  ExchangeItem:{
      screen:ExchangeScreen,
      navigationOptions:{
          tabBarIcon:<Image source = {require('./assets/arrows_exchange-512.png')} style = {{width:20,height:20}}/>,
          tabBarLabel:'ExchangeScreen'

      }
  },
})
const switchNavigator = createSwitchNavigator({
  SignupLoginScreen:{screen:SignupLoginScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(switchNavigator)

