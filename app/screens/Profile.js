import * as React from 'react'
import {useState, useEffect} from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Item from '../componet/item';
import { Card } from 'react-native-shadow-cards'
import UserAvatar from '../componet/UserAvatar';

const deviceSize = Dimensions.get('window');

const Profile = ({navigation}) => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('micky');
  const [fullname, setFullname] =useState('antonio micky');
  const [phone, setPhone] = useState('1234567890');
  const [cpassword, setCpassword] =useState('');


  // useEffect(() => {
  //   setEmail('test@gmail.com');
  //   setPhone('1234567890');
  //   setUsername('micky');
  //   setFullname('antonio micky');
  // }, []);

  const doSend = function(){
    let formData = new FormData();
    Alert.alert(
      "Administradora",
      "Guardar con éxito.",
      [
          { text: 'OK', onPress: () => {}}
      ]);
  }
  const doLogout = function ({navigation}){
    navigation.push('FirstScreen');
  }

  return (
      <>
        <ScrollView style={{flex: 1}}>
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
              <View>
                <View style={styles.item_email}>
                  <Item icon="person-outline" style={{borderRadius:20}} cplaceholder="NOMBRE DE USUARIO" value={username} onChangeText={text=>setUsername(text)}/>
                </View>
                <View style={styles.item_email}>
                  <Item icon="person-outline" style={{borderRadius:20}} cplaceholder="NOMBRE COMPLETO" value={fullname} onChangeText={text=>setFullname(text)}/>
                </View>
                <View style={styles.item_email}>
                  <Item icon="person-outline" style={{borderRadius:20}} cplaceholder="TELÉFONO" value={email} onChangeText={text=>setEmail(text)}/>
                </View>
                <View style={styles.item_email}>
                  <Item icon="phone-iphone" style={{borderRadius:20}} cplaceholder="CORREO ELECTRÓNICO" value={phone} onChangeText={text=>setEmail(text)}/>
                </View>
                <View style={styles.item_email}>
                  <Item icon="lock-outline" style={{borderRadius:20}} placeholder="CONTRASEÑA" value={password} onChangeText={text=>setPassword(text)}/>
                </View>
                <View style={styles.item_email}>
                  <Item icon="lock-outline" style={{borderRadius:20}} placeholder="CONFIRMAR CONTRASEÑA" value={cpassword} onChangeText={text=>setCpassword(text)}/>
                </View>
              </View>
              <View style={styles.btn_wrapper}>
                  <TouchableOpacity onPress={doSend} activeOpacity={0.8}>
                    <View
                        style={styles.login_btn}>
                        <Text
                          style={styles.login_btn_text}>
                          SALVAR                
                        </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={doLogout} activeOpacity={0.8}>
                    <View
                        style={styles.login_btn1}>
                        <Text
                          style={styles.login_btn_text1}>
                          DESCONECTAR                
                        </Text>
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

export default Profile;

const styles = StyleSheet.create({
  container: {   
    padding: 20,
    position: 'relative',
    backgroundColor:'white',
  },
  txt_login: {
    marginTop:20,
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
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#fda039',
    textAlign:'center',
    marginRight:20,
    width:150
  },
  login_btn1: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'rgb(250, 85, 85)',
    width:150
  },
  login_btn_text: {
    color: 'white',
    marginRight: 10
  },
  login_btn_text1: {
    color: 'white',
  },
  btn_wrapper: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20
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
    height:20,
    width:50,
  }
})


