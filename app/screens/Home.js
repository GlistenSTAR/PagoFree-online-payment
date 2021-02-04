import  React, { Component } from 'react';
import { 
  StyleSheet, 
  Image, 
  Dimensions, 
  SafeAreaView, 
  FlatList, 
  ScrollView, 
  Text,
  View, 
  ActivityIndicator, 
  ImageBackground,
  Alert, 
  TouchableOpacity } 
  from 'react-native';

import {ListItem, Avatar} from 'react-native-elements';
import Item from '../componet/item';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import { API_SERVER_URL } from '../app_config';

const deviceSize = Dimensions.get("window");

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        list:[
          {
            id: 1,
            name: 'WWW.google.com',
            avatar_url: 'https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png',
            subtitle: 'Zapatos 31-Jan-2021'
          },
          {
            id: 2,
            name: 'Chris Jackson',
            avatar_url: 'https://www.w3schools.com/w3images/avatar2.png',
            subtitle: 'Vice Chairman'
          },
        ],
        search:'',
        setSearch:'',
        isLoading:false,
        setIsLoading:false
      }
    }
    componentDidMount(){
      // axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1').then(res=>{
        // this.setState({list: {name:'hello', image:'../assets/photo/user1.png', status:'true'}});
        // console.log(res.data.results);
      // })
    }

    keyExtractor = (data,index) => index.toString()

    renderItem = (data, index) =>{
      return(
        <ListItem bottomDivider key={index}>
          <Avatar source={{uri: data.avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{data.name}</ListItem.Title>
            <ListItem.Subtitle>{data.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      )
    }
      

    render(){
      return (
        <>
          <ScrollView style={{flex: 1}}>
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
                  <View style={{marginTop:5}}>
                    <Item icon="search"  placeholder="Buscar" value={this.state.search} onChangeText={text=>setsearch(text)} style={{borderRadius:50}}/>
                  </View>  
                </View>
                <ImageBackground 
                  source={require('../assets/img/coinsback.jpg')} 
                  imageStyle={{ borderRadius: 15}} 
                  style={styles.freecoinback}
                >
                  <Text style={{ color:'white', fontSize:24, marginTop:'auto',marginBottom:'auto', textAlign:'center', backgroundColor:'rgba(0,0,0,0.4)'}}>Freecoin tiene un precio de 50$ ahora.</Text>  
                </ImageBackground>
  
                <View>
                  <Text style={{fontSize:24, padding:10, marginTop:10, borderBottomColor:'rgba(0,0,0,0.2)', borderBottomWidth:1}}>Reciente Historia</Text>
                </View> 
                {/* <View style={{flex: 1}}>
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}                    
                  />  
                </View> */}
                {
                  this.state.list.map((item, index) => {
                    return this.renderItem(item, index) 
                  })
                }
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
      top:10,
      right:20,
      bottom:0,
      textAlign:'center'
    },
    container: {   
      flex: 1,
      padding: 20,
      position: 'relative'
    },
    top: {
      width:50,
      height:50,
      borderRadius:50,
      borderWidth:4,
      borderColor:'orange',
    },
    txt_login: {
      marginTop:30,
      fontSize: 30,
      fontWeight: 'bold',
    },
    freecoinback:{
      height:200,
      paddingTop:30,
      marginTop:10
    },
    list:{
      marginBottom:5,
      marginTop:5
    }
  });
  
export default Home;