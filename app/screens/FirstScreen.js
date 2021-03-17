import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
const deviceSize = Dimensions.get('window');

class FirstScreen extends Component {
    constructor(props){
      super(props); 
      this.state = {
        images:[
          require('../assets/img/background5-1.jpg'),
          require('../assets/img/background3-1.jpg'),
          require('../assets/img/background2-1-1.jpg'),
          require('../assets/img/background4-1.jpg'),
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
            />

            <View style={{flexDirection: "row", position:'absolute', right:0}}>
              <Button
                  icon={
                    <Icon
                      name="sign-in"
                      size={18}
                      color="orange"
                      style={{marginRight:5}}
                      />
                  }
                title="Login"
                titleStyle={styles.font}
                buttonStyle={styles.button}
                onPress={this.onLogin}
              />
              <Button
                icon={
                  <Icon
                    name="pencil-square-o"
                    size={18}
                    color="orange"
                    style={{marginRight:5}}
                    />
                }
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
        fontSize: 18,
    }
});