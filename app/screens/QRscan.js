import React, { Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import {
    TouchableOpacity,
    Text,
    StatusBar,
    Linking,
    View,
    StyleSheet,
    Dimensions,
    Image
  } from 'react-native';


const deviceSize = Dimensions.get('window');
const rectDimensions = deviceSize.width * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = deviceSize.width * 0.005; // this is equivalent to 2 from a 393 device width
const scanBarWidth = deviceSize.width * 0.5; // this is equivalent to 180 from a 393 device width
const scanBarHeight = deviceSize.width * 0.0025; //this is equivalent to 1 from a 393 device width

const rectBorderColor = "orange";
const overlayColor = "rgba(0,0,0,0.5)";
const scanBarColor = "red";

class QRScan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: false,
            ScanResult: false,
            result: null
        };
    }

    onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: false,
            ScanResult: true
        })
        if (check === 'http') {
           
        } else {
            this.setState({
                result: e,
                scan: false,
                ScanResult: true
            })
        }

    }

    activeQR = () => {
        this.setState({
            scan: true
        })
    }
    scanAgain = () => {
        this.setState({
            scan: true,
            ScanResult: false
        })
    }

    makeSlideOutTranslation(translationType, fromValue) {
        return {
            from: {
            [translationType]: deviceSize.width * -0.18
            },
            to: {
            [translationType]: fromValue
            }
        };
    }
    render() {
        const { scan, ScanResult, result } = this.state

        return (
            <View >
                <Fragment>
                    <StatusBar/>
                    {!scan && !ScanResult &&
                        <View  style={styles.startview}>
                            <Image source={ require('../assets/img/QRbackground.jpg') } style = { styles.image } />
                            <TouchableOpacity onPress={this.activeQR} style={styles.startbutton}>
                                <Text style={{color:'white'}}>Varredura ! </Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {ScanResult &&
                        <Fragment>
                            <Text >Result !</Text>
                            <View >
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={this.scanAgain} >
                                    <Text >Click to Scan again!</Text>
                                </TouchableOpacity>

                            </View>
                        </Fragment>
                    }


                    {scan &&
                        // <QRCodeScanner
                        //     
                        //     fadeIn={true}
                        //     showMarker={true}
                        //     
                        //     ref={(node) => { this.scanner = node }}
                        //     onRead={this.onSuccess}
                        //     style={styles.mainscreen}
                        //     containerStyle={{height:0}}
                        //     cameraStyle={[{height:deviceSize.height}]}
                        // />                                          
                        <QRCodeScanner
                            showMarker
                            reactivateTimeout={2000}
                            reactivate={true}
                            onRead={this.onSuccess}
                            cameraStyle={{ height: deviceSize.height }}
                            customMarker={
                            <View style={styles.rectangleContainer}>
                                <View style={styles.topOverlay}>
                                <Text style={{ fontSize: 30, color: "white" }}>
                                    SCANNER QR CODE
                                </Text>
                                </View>

                                <View style={{ flexDirection: "row" }}>
                                <View style={styles.leftAndRightOverlay} />

                                <View style={styles.rectangle}>
                                    <Icon
                                        // name="scan-outline"
                                        size={deviceSize.width * 0.6}
                                        // size={50}
                                        color="white"
                                    />
                                    <Animatable.View
                                        style={styles.scanBar}
                                        direction="alternate-reverse"
                                        iterationCount="infinite"
                                        duration={1700}
                                        easing="linear"
                                        animation={this.makeSlideOutTranslation(
                                            "translateY",
                                            deviceSize.width * -0.54
                                    )}
                                    />
                                </View>

                                <View style={styles.leftAndRightOverlay} />
                                </View>

                                <View style={styles.bottomOverlay} />
                            </View>
                            }
                        /> 
                    }
                </Fragment>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
  startbutton:{
    backgroundColor:'orange',
    padding:17,
    borderRadius:10,
    justifyContent:'center',
  },
  startview:{
    justifyContent:'center',
    height:deviceSize.height,
    alignItems:'center',
    width:deviceSize.width,
  },
  image: {
    flex: 1,
    height:deviceSize.height,
    position: 'absolute',
    width: "100%",
    flexDirection: 'column'
  },
  mainscreen:{
      height:deviceSize.height,
  },

  //qr css
    rectangle: {
        height: rectDimensions,
        width: rectDimensions,
        borderWidth: rectBorderWidth,
        borderColor: rectBorderColor,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "transparent",
        // borderRadius:10
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  topOverlay: {
    flex: 1,
    height: deviceSize.width,
    width: deviceSize.width,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },
    bottomOverlay: {
    flex: 1,
    height: deviceSize.width,
    width: deviceSize.width,
    backgroundColor: overlayColor,
    paddingBottom: deviceSize.width * 0.25
  },

  leftAndRightOverlay: {
    height: deviceSize.width * 0.65,
    width: deviceSize.width,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth+10,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
    borderWidth:2,
    borderColor:scanBarColor
  }
})


export default QRScan;

// import React, { Component } from "react";

// import { View, Dimensions, Text } from "react-native";
// import QRCodeScanner from "react-native-qrcode-scanner";
// import Icon from "react-native-vector-icons/Ionicons";
// import * as Animatable from "react-native-animatable";

// const SCREEN_HEIGHT = Dimensions.get("window").height;
// const SCREEN_WIDTH = Dimensions.get("window").width;

// // console.disableYellowBox = true;

// class QRScan extends Component {
//   onSuccess(e) {
//     alert(e);
//   }

//   makeSlideOutTranslation(translationType, fromValue) {
//     return {
//       from: {
//         [translationType]: SCREEN_WIDTH * -0.18
//       },
//       to: {
//         [translationType]: fromValue
//       }
//     };
//   }

//   render() {
//     return (
//       <QRCodeScanner
//         showMarker
//         onRead={this.onSuccess.bind(this)}
//         cameraStyle={{ height: SCREEN_HEIGHT }}
//         customMarker={
//           <View style={styles.rectangleContainer}>
//             <View style={styles.topOverlay}>
//               <Text style={{ fontSize: 30, color: "white" }}>
//                 QR CODE SCANNER
//               </Text>
//             </View>

//             <View style={{ flexDirection: "row" }}>
//               <View style={styles.leftAndRightOverlay} />

//               <View style={styles.rectangle}>
//                 <Icon
//                   name="ios-qr-scanner"
//                   size={SCREEN_WIDTH * 0.73}
//                   color="blue"
//                 />
//                 <Animatable.View
//                   style={styles.scanBar}
//                   direction="alternate-reverse"
//                   iterationCount="infinite"
//                   duration={1700}
//                   easing="linear"
//                   animation={this.makeSlideOutTranslation(
//                     "translateY",
//                     SCREEN_WIDTH * -0.54
//                   )}
//                 />
//               </View>

//               <View style={styles.leftAndRightOverlay} />
//             </View>

//             <View style={styles.bottomOverlay} />
//           </View>
//         }
//       />
//     );
//   }
// }

// const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

// const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
// const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
// const rectBorderColor = "red";

// const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
// const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
// const scanBarColor = "#22ff00";

// const iconScanColor = "blue";

// const styles = {
//   

//   rectangle: {
//     height: rectDimensions,
//     width: rectDimensions,
//     borderWidth: rectBorderWidth,
//     borderColor: rectBorderColor,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "transparent"
//   },

//   topOverlay: {
//     flex: 1,
//     height: SCREEN_WIDTH,
//     width: SCREEN_WIDTH,
//     backgroundColor: overlayColor,
//     justifyContent: "center",
//     alignItems: "center"
//   },

//   bottomOverlay: {
//     flex: 1,
//     height: SCREEN_WIDTH,
//     width: SCREEN_WIDTH,
//     backgroundColor: overlayColor,
//     paddingBottom: SCREEN_WIDTH * 0.25
//   },

//   leftAndRightOverlay: {
//     height: SCREEN_WIDTH * 0.65,
//     width: SCREEN_WIDTH,
//     backgroundColor: overlayColor
//   },

//   scanBar: {
//     width: scanBarWidth,
//     height: scanBarHeight,
//     backgroundColor: scanBarColor
//   }
// };

// export default QRScan;

