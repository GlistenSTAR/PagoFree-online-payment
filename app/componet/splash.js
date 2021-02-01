import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import AnimatedLoader from "react-native-animated-loader";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <ImageBackground style={styles.backgroundImage} 
          source={require('../assets/img/splash.png')}>
        </ImageBackground>
        <AnimatedLoader
          visible={true}
          source={require("../common/loader.json")}
          animationStyle={styles.lottie}
          speed={1.5}
          overlayColor='rgba(255, 255, 255, 0)'
        >
        </AnimatedLoader>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  lottie: {
    marginTop:'35%',
    width: 100,
    height: 350
  },
  loadtext:{
    color:"white",
    fontSize:24,
    paddingTop:30
  }
})
