import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, Modal, TouchableHighlight } from 'react-native'
import Item from '../componet/item';

const deviceSize = Dimensions.get("window");
   
class Help extends Component {
   constructor(props){
      super(props);
      this.state={
         modalVisible:false, 
         names: [
               {
                  id: 0,
                  title: 'Qué es Pago free ? Como desarrollarlo',
                  description:'Aplicación para smartphones que permita  realizar pagos, transferencias y compartir dinero de forma inmediata sin necesidad de contar con tarjetas bancarias para realizar las operaciones. Sin gastos, segura y fácil de utilizar, la app permitir  pagar con código QR en los locales adheridos.'
               },
               {
                  id: 1,
                  title: 'Cómo funcionara ?  instructivo',
                  description:'Descargár y registrarse en la app desde Play store buscando “PagoFree”.mediante la creación de una  cuenta personal para luego seguir cada paso que la app   brinde , hacer  todas las  funcionalidades que   se pueda  realizar , recibir pagos,  sueldos, etc , a través de la misma.'
               },
               {
                  id: 2,
                  title: 'Qué  permite pagar ?',
                  description:'Con Pago Free poder realizar transferencias a otros usuarios de forma inmediata , que  se sumen servicios de pagos online, pagos a comercios físicos , empresas  y  adherir otras funcionalidades que el desarrollador vea conveniente.'
               },
               {
                  id: 3,
                  title: 'Transferir  y recibir  dinero',
                  description:'Pago Free debe  usar la tecnología de Código QR. Y poder  pagar o recibir dinero escaneando el  código designado. También, para casos de venta mediante plataformas online  que el comprador pueda encontrarlo  en Pago Free con el numero CVU y enviarle el pago al instante .'
               }
            ]
      }
   } 
   setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
   }
   
   render() {
      return (
           <View style={styles.container}>
                <View style={styles.smallprofile}>
                  <Image 
                    source={require('../assets/photo/user1.png')} 
                    style={styles.top}
                  />
                  <Text style={{textAlign:'center'}}>Micky</Text>
                </View>
                <Text style={styles.txt_login}>Ayuda</Text>
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
                     onPress = {() => this.setModalVisible(true)}>
                     <View style={{flex:1, flexDirection:"row"}}>
                        <View style={{width:deviceSize.width*0.2,alignItems:'center'}}>
                         <Image source={require('../assets/img/help.png')} style={styles.lefticon}/> 
                        </View>
                        <View style={{width:deviceSize.width*0.7, textAlign:'center',marginBottom:'auto',marginTop:'auto'}}>
                         <Text style={{fontSize:16, color:'black'}}>{item.title}</Text>
                         <Text style={{fontSize:14, color:'grey', flexShrink: 1}} numberOfLines={2}>{item.description}</Text>
                        </View>
                     </View>
                  </TouchableOpacity>
               ))
            }
            <Modal
               animationType="fade"
               transparent={true}
               visible={this.state.modalVisible}
               onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
               }}
            >
               <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>
   
                  <TouchableHighlight
                     style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                     onPress={() => {
                     this.setModalVisible(!this.state.modalVisible);
                     }}
                  >
                     <Text style={styles.textStyle}>Hide Modal</Text>
                  </TouchableHighlight>
               </View>
               </View>
            </Modal>
         </View>
      )
   }
}
export default Help

const styles = StyleSheet.create ({
  container: {   
    flex: 1,
    padding: 20,
    position: 'relative'
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
  lefticon:{
    marginTop:'auto', marginBottom:'auto',
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
   borderRadius: 20,
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
 }
})