import React from 'react'
import {useState} from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Item from '../componet/item';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-shadow-cards'

const deviceSize = Dimensions.get('window');

const Profile = ({navigation}) =>{
  const [email, setEmail] = useState("");
  const [amount, setamount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const doSend = function(){
    setIsLoading(true);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("amount", amount);
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.smallprofile}>
            <Image 
              source={require('../assets/photo/user1.png')} 
              style={styles.top}
            />
            <Text style={{textAlign:'center'}}>Micky</Text>
          </View>
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
                    fontSize:18,
                }}>Cambia tu información</Text>
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
            <View style={styles.item_email}>
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
            </View>
            <View style={styles.btn_wrapper}>
                <TouchableOpacity onPress={doSend} activeOpacity={0.8}>
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
          </Card>
        </View>
      </ScrollView>
      {
        isLoading && (
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="orange"/>  
          </View> 
        )
      } 
    </>
  )
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
  }
})

export default Profile;
