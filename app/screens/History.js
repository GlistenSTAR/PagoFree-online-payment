import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, Modal, TouchableHighlight } from 'react-native'
import Item from '../componet/item';
import { Avatar } from 'react-native-elements';
import UserAvatar from '../componet/UserAvatar'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';


const deviceSize = Dimensions.get("window");
   
class History extends Component {
   constructor(props){
      super(props);
      this.state={
         modalVisible:false, 
         temp:{ name:'', subtitle:'',avatar_url:'' },
         search:'',
         names: [
            {
              id: 1,
              name: 'WWW.google.com',
              url: 'https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png',
              subtitle: 'Zapatos 31-Jan-2021',
              date:'31-Jan-2021',
              amount:'-30',
              currency : 'RUB'
            },
            {
              id: 2,
              name: 'Chris Jackson',
              url: 'https://www.w3schools.com/w3images/avatar2.png',
              subtitle: 'Vice Chairman',
              date:"31-Jan-2021",
              amount:'+100',
              currency : 'USD'
            },
            ]
      }
   } 
   setModalVisible = (visible, item) => {
      if(visible)
         this.setState({ modalVisible: visible, temp:item });
      else 
         this.setState({modalVisible: visible}); 
   }
   
   render() {
      let temp=this.state.temp;
      return (
           <View style={styles.container}>
                <UserAvatar/>
                <Text style={styles.txt_login}>Historia</Text>
                <View
                  style={{
                    borderBottomColor: 'rgb(163, 162, 162)',
                    borderBottomWidth: 1,
                  }}
                />
                <View>
                  <View>
                    <Item icon="search"  placeholder="Buscar" value={this.state.search} onChangeText={text=>setsearch(text)} style={{borderRadius:50}}/>
                  </View>  
                </View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.list}
                     onPress = {() => this.setModalVisible(true, item)}>
                     <View style={{flex:1, flexDirection:"row",}}>
                        <View style={{width:deviceSize.width*0.2,alignItems:'center'}}>
                         <Avatar source={{uri: item.url}}  style={styles.lefticon}/> 
                        </View>
                        <View style={{width:deviceSize.width*0.7, textAlign:'center',marginBottom:'auto',marginTop:'auto'}}>
                         <Text style={{fontSize:16, color:'black'}}>{item.name}</Text>
                         <Text style={{fontSize:14, color:'grey', flexShrink: 1}} numberOfLines={2}>{item.subtitle}</Text>
                        </View>
                        <View style={styles.deleteicon}>
                          {item.amount.slice(0,1)=="+"?<Text style={{fontSize:18, color:'orange'}}>{item.amount} {item.currency}</Text>:<Text style={{fontSize:18, color:'rgb(29, 29, 29)'}}>{item.amount} {item.currency}</Text>}
                        </View>
                     </View>
                  </TouchableOpacity>
               ))
            }
         <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
         >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
               <Text style={{fontSize:16, color:'black', marginBottom:10}}>{temp.name}</Text>
               <Text style={{fontSize:14, color:'grey',textAlign: 'justify'}}>{temp.date}</Text>
               <Text style={{fontSize:14, color:'grey',textAlign: 'justify'}}>{temp.subtitle}</Text>
               <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3",marginTop:10, }}
                  onPress={() => {
                  this.setModalVisible(!this.state.modalVisible, null);
                  }}
               >
               <Text style={styles.textStyle}>Cerrar</Text>
               </TouchableHighlight>
            </View>
            </View>
         </Modal>   
         </View>
      )
   }
}
export default History

const styles = StyleSheet.create ({
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
   list: {
      marginTop:5,
      height:80,
      borderBottomWidth:1,
      borderColor:'grey'
   },
  lefticon:{
    marginTop:'auto', 
    marginBottom:'auto',
    width:50,
    height:50,
  },
  centeredView: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   marginTop: 22
 },
 modalView: {
   margin: 20,
   backgroundColor: "white",
   borderRadius: 20,
   padding: 35,
   alignItems: "center",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5
 },
 openButton: {
   backgroundColor: "#F194FF",
   borderRadius: 10,
   padding: 10,
   elevation: 2
 },
 textStyle: {
   color: "white",
   fontWeight: "bold",
   textAlign: "center"
 },
 modalText: {
   marginBottom: 15,
   textAlign: "center"
 },
 deleteicon:{
  position:'absolute',
  right:5,
  marginTop: 20,
 }
})