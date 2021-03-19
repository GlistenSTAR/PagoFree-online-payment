import React, { Component } from 'react'
import Splash from '../componet/splash';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../screens/FirstScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import MainScreen from '../screens/Main';
import ForgotScreen from '../screens/Forgot';
import ChangePasswordScreen from '../screens/ChangePassword';

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
    }, 4000);
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
          <Stack.Navigator initialRouteName="FirstScreen">
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Forgot" component={ForgotScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerShown: false }}/>
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

