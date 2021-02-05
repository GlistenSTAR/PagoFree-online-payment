import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import {Card} from 'react-native-elements'
const deviceSize = Dimensions.get('window');
import Item from '../componet/item';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Send extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
    }
  }
  doSend = ()=>{

  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.smallprofile}>
          <Image 
            source={require('../assets/photo/user1.png')} 
            style={styles.top}
          />
          <Text style={{textAlign:'center'}}>Micky</Text>
        </View>
        <Text style={styles.txt_login}>Transferir</Text>
        <View
          style={{
            borderBottomColor: 'rgb(163, 162, 162)',
            borderBottomWidth: 1,
          }}
        />
        <Image source={require('../assets/photo/send.png')} style={styles.sendimage}/>
        <View style={{borderWidth:2, borderRadius:10, borderColor:'grey', alignItems:'center', backgroundColor:'white'}}>
          <Image source={require('../assets/img/logo.png')} style={styles.logoimg}/>
          <Text>Enter the receiver's email and amount</Text>
          <View style={styles.item_email}>
            <Item icon="mail-outline" style={{borderRadius:20}} placeholder="CORREO ELECTRÓNICO" value={this.state.email} onChangeText={text=>setEmail(text)}/>
          </View>
          <View style={styles.item_email}>
            <Item icon="lock-outline" style={{borderRadius:20}} placeholder="amount" secureTextEntry={true} value={this.state.amount} onChangeText={text=>setPassword(text)}/> 
          </View>
          <View style={styles.btn_wrapper}>
              <TouchableOpacity onPress={this.doSend} activeOpacity={0.8}>
                <View
                    style={styles.login_btn}>
                    <Text
                      style={styles.login_btn_text}>
                      Transferir                
                    </Text>
                    <Ionicons name="md-arrow-forward" size={16} color="white"/>
                </View>
              </TouchableOpacity>
          </View>
        </View>

      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    padding: 20,
    position: 'relative',
    backgroundColor:'white'
  },
  txt_login: {
    marginTop:30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallprofile:{
    position:'absolute',
    top:10,
    right:20,
    bottom:0,
    textAlign:'center'
  },
   list: {
      marginTop:5,
      height:80,
      backgroundColor: 'transparent',
      alignItems: 'center',
      borderBottomWidth:1
   },
   top: {
    width:50,
    height:50,
    borderRadius:50,
    borderWidth:4,
    borderColor:'orange',
  },
  sendimage:{
    width:deviceSize.width*0.9,
    height:deviceSize.height*0.25,
    borderRadius:10,
    marginTop:10,
    marginBottom:10
  },
  logoimg:{
    marginLeft:'auto',
    marginRight:'auto',
    margin:10
  },
  login_btn: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: '#fda039'
  },
  login_btn_text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
  },
  btn_wrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  item_email:{
    width:deviceSize.width*0.85
  }
})
