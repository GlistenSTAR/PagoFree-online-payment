import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Splash from '../componet/splash';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import MainScreen from '../screens/Main';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 6000);
  }
  render() {
    let { visible } = this.state, Content;
    if(visible){
      Content = (
        <Splash />
      )
    } else{
      Content = (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    return (
      <>
        { Content }
      </>
    );
  }
}

