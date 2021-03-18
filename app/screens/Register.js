import * as React from 'react';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Text,View, Alert } from 'react-native';
import Item from '../componet/item';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-shadow-cards';

import { API_SERVER_URL } from '../app_config';
const deviceSize = Dimensions.get('window');

const RegisterScreen = ({navigation}) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [isLoadng, setIsLoading] = useState(false);

  const doSignup = function(){
    setIsLoading(true);
    var formData = new FormData();
    formData.append("emailRegistrarUsuario", email);
    formData.append("passwordRegistrarUsuario", password);
    formData.append("nombreRegistrarUsuario", fullname);
    formData.append("apellidosRegistrarUsuario", username);
    formData.append("telephone", mobile);

    fetch(API_SERVER_URL + "mobile/registrar/", {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setIsLoading(false);
        if(data.response == true){
          console.log('correctly registered');
          navigation.push('Login');
        } else {
          Alert.alert(
          "El éxito falló.",
          "Comprueba el valor de entrada.",
          [
              { text: 'OK', onPress: () => {}}
          ]);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log("Register API error", err);
        Alert.alert(
            "Registro fallido",
            "Comprueba Red o Wifi!. or Comprueba el valor de entrada.",
            [
            { text: 'OK', onPress: () => {}}
            ]);
      });
    }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.txt_login}>CONTRATAR</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'rgb(163, 162, 162)',
              borderBottomWidth: 1,
            }}
          />
          <Card
            style={{
              padding : 20,
              marginTop:10,
              borderRadius:10,
              justifyContent:'center'
          }}>

            <Image source={require('../assets/img/logo.png')} style={styles.top}/>
            <Text style={{ color:'black',textAlign:"left", paddingTop:20,paddingLeft:10, fontSize:18,}}>Crea una cuenta, por favor.</Text>
            <View
              style={{
                borderBottomColor: 'rgb(163, 162, 162)',
                borderBottomWidth: 1,
              }}
            />
            <View style={styles.item_email}>
              <Item icon="person-outline" cplaceholder="NOMBRE COMPLETO" value={fullname} onChangeText={text=>setFullName(text)}/>
            </View>
            <View style={styles.item_email}>
              <Item icon="person-outline"  cplaceholder="NOMBRE DE USUARIO" value={username} onChangeText={text=>setUsername(text)}/>
            </View>
            <View style={styles.item_email}>
              <Item icon="mail-outline"  cplaceholder="CORREO ELECTRÓNICO" value={email} onChangeText={text=>setEmail(text)}/>
            </View>
            <View style={styles.item_email}>
              <Item icon="lock-outline"  cplaceholder="CONTRASEÑA" secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}/>
            </View>
            <View style={styles.item_email}>
              <Item icon="lock-outline"  cplaceholder="CONFIRMAR CONTRASEÑA" secureTextEntry={true} value={confirmPassword} onChangeText={text=>setConfirmPassword(text)}/>
            </View>
            <View style={styles.item_email}>
              <Item icon="phone-iphone" cplaceholder="NÚMERO DE TELÉFONO MÓVIL" value={mobile} onChangeText={text=>setMobile(text)} keyboardType="phone-pad"/>
            </View>
            <View style={styles.btn_wrapper}>
                <TouchableOpacity onPress={doSignup} activeOpacity={0.8}>
                  <View
                      style={styles.login_btn}>
                      <Text
                        style={styles.login_btn_text}>
                        Registrarse
                      </Text>
                      <Ionicons name="md-arrow-forward" size={16} color="white"/>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom_wrapper}>
              <Text>
                Tengo una cuenta.
              </Text>
              <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text style={styles.signup_btn_text}>
                  Iniciar sesión
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
      {
        isLoadng && (
            <View style={styles.loading_container}>
              <ActivityIndicator size="large" color="orange"/>
            </View>
        )
      }
    </>
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
      justifyContent: 'center',
      padding: 20,
      position: 'relative',
      backgroundColor:'white'
    },
    top: {
      justifyContent:'center',
      marginTop:10,
      marginBottom:10,
      marginLeft:"auto",
      marginRight:"auto"
    },
    txt_login: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10
    },
    item_email: {
      marginTop: 8,
    },
    btn_wrapper: {
      alignItems: 'flex-end',
      marginTop: 10,
      marginBottom: 20
    },
    login_btn: {
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 40,
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
      justifyContent: 'center',
      alignItems: 'center'
    },
    signup_btn_text: {
      fontSize: 16,
      color: '#fca941',
      fontWeight: 'bold',
      marginLeft: 10
    }
});

export default RegisterScreen;
