import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";
import {Button} from 'react-native-elements'
import { SliderBox } from "react-native-image-slider-box";
const deviceSize = Dimensions.get('window');

class FirstScreen extends Component {
    constructor(props){
      super(props); 
      this.state = {
        images:[
          require('../assets/img/background1-1-1.jpg'),
          require('../assets/img/background2-1.jpg'),
        ]   
      };
    }
    onLayout = e => {
      this.setState({
        height: e.nativeEvent.layout.height,
        width: e.nativeEvent.layout.width
      });
    };
    onLogin = () => {
      this.props.navigation.push('Login');
    }
    onRegister = () =>{
      this.props.navigation.push('Register');
    }
    render() {          
        return (
          <View style={styles.container} onLayout={this.onLayout}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={deviceSize.height}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
            >
            </SliderBox>
            <View style={{flexDirection: "row", position:'absolute', right:0}}>
              <Button
                onPress={this.onLogin}
                title="Login"
                titleStyle={styles.font}
                buttonStyle={styles.button}
              />
              <Button
                onPress={this.onRegister}
                title="Register"
                titleStyle={styles.font}
                buttonStyle={styles.button}
              />
            </View>
          </View>
        );
    }
}
export default FirstScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button : {
      backgroundColor: "transparent",
      flex: 1,
      borderColor:'orange',
      borderWidth:1,
      margin:10,
      marginTop:20,
      width:110,
      borderRadius:20
    },
    font:{
        color: "orange",
        fontSize: 24,
    }
});