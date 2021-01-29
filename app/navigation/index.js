import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <ImageBackground style={styles.backgroundImage} 
          source={require('../assets/img/splash.png')}>
            
        </ImageBackground>
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
  }
})
