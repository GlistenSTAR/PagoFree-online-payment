import React, {Component} from 'react'
import {useState} from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Item from '../componet/item';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-shadow-cards'
import UserAvatar from '../componet/UserAvatar';

const deviceSize = Dimensions.get('window');

export default class Profile extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      amount:'',
      isLoading:false,
      data:{}
    }
  }
  componentDidMount(){
    this.setState({
      data:{
        username: 'Micky',
        fullname: 'Anton Micky',
        email:'test@gmail.com',
        phone:'+1234567890'
      }
    });
  }
  doSend = function(){
    setIsLoading(true);
    let formData = new FormData();
  }
  render(){
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <UserAvatar/>
            <Text style={styles.txt_login}>Mi perfil</Text>
            <View
              style={{
                borderBottomColor: 'rgb(163, 162, 162)',
                borderBottomWidth: 1,
              }}
            />
            <Card style={{ borderRadius:10, borderColor:'black', alignItems:'center', marginTop:20}}>
              <Image source={require('../assets/img/logo.png')} style={styles.logoimg}/>
              <View style={{width: deviceSize.width*0.8}}>
                  <Text style={{
                      textAlign:'left',
                      fontSize:20,
                  }}>Mi informacion</Text>
              </View>
              <View
                  style={{
                      borderBottomColor: 'rgb(163, 162, 162)',
                      borderBottomWidth: 1,
                      width: deviceSize.width*0.8,
                      marginBottom:20,
                  }}
              />
              <View
                style={{
                  borderBottomColor: 'rgb(163, 162, 162)',
                  borderBottomWidth: 1,
                }}
              />
              <View style={{width:deviceSize.width*0.8}}>
                <Text style={styles.text}>
                  <Text style={styles.texttitle}>Nombre de usuario: </Text>
                  <Text style={{alignContent:'flex-end'}}>{this.state.data.username}</Text>
                </Text>
                <Text style={styles.text}><Text style={styles.texttitle}>Nombre completo: </Text><Text>{this.state.data.fullname}</Text></Text>
                <Text style={styles.text}><Text style={styles.texttitle}>e-mail: </Text><Text>{this.state.data.email}</Text></Text>
                <Text style={styles.text}><Text style={styles.texttitle}>número de teléfono: </Text><Text>{this.state.data.phone}</Text></Text>
              </View>
              {/* <View style={styles.item_email}>
                <Item icon="person-outline" style={{borderRadius:20}} placeholder="CORREO ELECTRÓNICO" value={email} onChangeText={text=>setEmail(text)}/>
              </View>
              <View style={styles.item_email}>
                <Item icon="lock-outline" style={{borderRadius:20}} placeholder="CORREO ELECTRÓNICO" value={email} onChangeText={text=>setEmail(text)}/>
              </View>
              <View style={styles.item_email}>
                <Item icon="lock-outline" style={{borderRadius:20}} placeholder="CORREO ELECTRÓNICO" value={email} onChangeText={text=>setEmail(text)}/>
              </View>
              <View style={styles.item_email}>
                <Item icon="phone-iphone" style={{borderRadius:20}} placeholder="CORREO ELECTRÓNICO" value={email} onChangeText={text=>setEmail(text)}/>
              </View> */}
              <View style={styles.btn_wrapper}>
                  <TouchableOpacity onPress={this.doSend} activeOpacity={0.8}>
                    <View
                        style={styles.login_btn}>
                        <Text
                          style={styles.login_btn_text}>
                          Salvar                
                        </Text>
                        <Ionicons name="md-arrow-forward" size={16} color="white"/>
                    </View>
                  </TouchableOpacity>
              </View>
            </Card>
          </View>
        </ScrollView>
        {
          this.state.isLoading && (
            <View style={styles.loading_container}>
              <ActivityIndicator size="large" color="orange"/>  
            </View> 
          )
        } 
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    padding: 20,
    position: 'relative',
    backgroundColor:'white',
    height:deviceSize.height
  },
  txt_login: {
    marginTop:30,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:20
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
    margin:20,
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
    marginBottom: 20
  },
  item_email:{
    width:deviceSize.width*0.85
  },
  text:{
    fontSize:16,
    color:'grey',
    paddingTop:15,
  },
  texttitle:{
    color:'black',
    width:200,
  }
})


