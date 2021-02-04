import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, Dimensions, ScrollView, Text,View, ActivityIndicator, ImageBackground } from 'react-native';
import Item from '../componet/item';
import AsyncStorage from '@react-native-community/async-storage';
import {ListItem} from 'react-native-elements';
import { API_SERVER_URL } from '../app_config';

const deviceSize = Dimensions.get("window");

const Home = ({navigation}) => {
    
    const [search, setsearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
      <View>
        <ScrollView>
            <View style={styles.container}>
              <View style={styles.smallprofile}>
                <Image 
                  source={require('../assets/photo/user1.png')} 
                  style={styles.top}
                />
                <Text style={{textAlign:'center'}}>Micky</Text>
              </View>
              <Text style={styles.txt_login}>Hogar</Text>
              <View
                style={{
                  borderBottomColor: 'rgb(163, 162, 162)',
                  borderBottomWidth: 1,
                }}
              />
              <View>
                <View style={{marginTop:10}}>
                  <Item icon="search"  placeholder="Buscar" value={search} onChangeText={text=>setsearch(text)} style={{borderRadius:50}}/>
                </View>  
              </View>
              <ImageBackground 
                source={require('../assets/img/coinsback.jpg')} 
                imageStyle={{ borderRadius: 15}} 
                style={styles.freecoinback}
              >
                <Text style={{color:'white', fontSize:28, marginTop:'auto',marginBottom:'auto', textAlign:'center', backgroundColor:'rgba(0,0,0,0.4)'}}>Now Freecoin price is 50$.</Text>  
              </ImageBackground>

              <View>
                <Text style={{fontSize:24, padding:10, marginTop:10, borderBottomColor:'rgba(0,0,0,0.2)', borderBottomWidth:1}}>Reciente Historia</Text>
              </View> 
              <View>
              
              </View>
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
    smallprofile:{
      position:'absolute',
      top:20,
      right:20,
      bottom:0,
      textAlign:'center'
    },
    container: {   
      height: deviceSize.height,
      padding: 20,
      position: 'relative',
    },
    top: {
      width:50,
      height:50,
      borderRadius:50,
      borderWidth:4,
      borderColor:'orange',
    },
    txt_login: {
      marginTop:50,
      fontSize: 30,
      fontWeight: 'bold',
    },
    freecoinback:{
      height:200,
      paddingTop:30,
      marginTop:10
    }
  });
  
export default Home;