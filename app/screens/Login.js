import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Alert, Text,View, ActivityIndicator } from 'react-native';
import Item from '../componet/item';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards';

import { API_SERVER_URL } from '../app_config';
import AsyncStorage from '@react-native-community/async-storage';

const deviceSize = Dimensions.get("window");

const Login = ({navigation}) => {
    const [email1, setEmail] = useState("");
    const [password1, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const doLogin = function(){
      var formData = new FormData();
      formData.append("_username", email1);
      formData.append("_password", password1);
      fetch(API_SERVER_URL + "mobile/login/", {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          if(data.response == true){
            try {
              AsyncStorage.setItem(
                  'user',
                  JSON.stringify(data.user)
              );
            } catch (error) {
              console.log("Can't store on Storage.");
            }
            navigation.push('Main');
          } else {
            setIsLoading(false);
            Alert.alert(
            "¡Error de inicio de sesion!",
            "El correo electrónico o la contraseña no coinciden.",
            [
                { text: 'OK', onPress: () => {}}
            ]);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log("Login API error", err);
        Alert.alert(
            "Carga fallida!",
            "Please check Network or Wifi.",
            [
            { text: 'OK', onPress: () => {}}
            ]);
      });
    }

    return (
      <View>
        <ScrollView>
            <View style={styles.container}>
              <Text style={styles.txt_login}>INICIAR SESIÓN</Text>
              <View
                style={{
                  borderBottomColor: 'rgb(163, 162, 162)',
                  borderBottomWidth: 1,
                }}
              />
              <Card
                style={{
                  borderColor:"rgb(163, 162, 162)",
                  padding : 20,
                  marginTop:30,
                  borderRadius:10,
                }}>

                <Image source={require('../assets/img/logo.png')} style={styles.top}/>
                <Text style={{textAlign:'center', color:'black', paddingTop:20, fontSize:16}}>Ingrese su correo electrónico y contraseña</Text>
                <View
                  style={{
                    borderBottomColor: 'rgb(163, 162, 162)',
                    borderBottomWidth: 1,
                  }}
                />
                <View style={styles.item_email}>
                  <Item icon="mail-outline"  cplaceholder="CORREO ELECTRÓNICO" value={email1} onChangeText={text=>setEmail(text)}/>
                </View>
                <View style={styles.item_email}>
                  <Item icon="lock-outline"  cplaceholder="CONTRASEÑA" secureTextEntry={true} forgot={true} value={password1} onChangeText={text=>setPassword(text)} navigation={navigation}/>
                </View>
                <View style={styles.btn_wrapper}>
                    <TouchableOpacity onPress={doLogin} activeOpacity={0.8}>
                      <View
                          style={styles.login_btn}>
                          <Text
                            style={styles.login_btn_text}>
                            Ingresá
                          </Text>
                          <Ionicons name="md-arrow-forward" size={16} color="white"/>
                      </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom_wrapper}>
                  <Text>
                    ¿No tienes una cuenta?
                  </Text>
                  <TouchableOpacity onPress={() => navigation.push('Register')}>
                    <Text style={styles.signup_btn_text}>
                      Regístrate
                    </Text>
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
      </View>
    );
}

const styles = StyleSheet.create({
    loading_container: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      width: deviceSize.width,
      height: deviceSize.height,
      backgroundColor: 'rgba(0,0,0,0.3)',
      zIndex: 1000
    },
    container: {
      height: deviceSize.height,
      justifyContent: 'center',
      padding: 20,
      position: 'relative',
      backgroundColor:'white'
    },
    top: {
      marginTop:20,
      marginBottom:20,
      marginRight:'auto',
      marginLeft:'auto'
    },
    txt_login: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    item_email: {
      marginTop: 15
    },
    btn_wrapper: {
      alignItems: 'flex-end',
      marginTop: 10,
      marginBottom: 20
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
    bottom_wrapper: {
      flexDirection: 'row',
      width: deviceSize.width,
      textAlign: 'center',
      paddingTop: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signup_btn_text: {
      fontSize: 16,
      color: '#fca941',
      fontWeight: 'bold',
      marginLeft: 10
    }
  });

  export default Login;
