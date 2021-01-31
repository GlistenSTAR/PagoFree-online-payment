import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import Splash from '../componet/splash';

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
        <Text>asdf</Text>
      )
    }
    return (
      <>
        { Content }
      </>
    );
  }
}

const styles = StyleSheet.create({
  
})
