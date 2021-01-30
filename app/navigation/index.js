import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import Splash from '../componet/splash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: false
      });
    }, 5000);
  }
  render() {
    const { visible } = this.state;
    let Content;
    if(visible){
      Content=(
        <Splash />
      )
    } else{
      <View>asdf</View>
    }
    
    return (
      <Splash/>
      // {Content}
    );
  }
}

const styles = StyleSheet.create({
  
})
