import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


const UserAvatar = ({navigation}) => {
  const doPress = function(){
    // console.log("asdf");
  }
  return (
    <TouchableOpacity onPress={doPress} >
      {/* <View style={styles.smallprofile}>
        <Image 
          source={require('../assets/photo/user1.png')} 
          style={styles.top}
        />
        <Text style={{textAlign:'center'}}>Micky</Text>
      </View> */}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  smallprofile:{
    position:'absolute',
    top:10,
    right:20,
    bottom:0,
    textAlign:'center'
  },
  top: {
    width:50,
    height:50,
    borderRadius:50,
    borderWidth:4,
    borderColor:'orange',
  },
})

export default UserAvatar
