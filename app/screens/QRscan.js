import React, { Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
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
    render() {
        const { scan, ScanResult, result } = this.state
        const { height, width } = Dimensions.get('window');
        const maskRowHeight = Math.round((height - 300) / 20);
        const maskColWidth = (width - 300) / 2;

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
                        <View style={styles.container}>
                            <QRCodeScanner
                                reactivate={true}
                                fadeIn={true}
                                showMarker={true}
                                reactivateTimeout={2000}
                                ref={(node) => { this.scanner = node }}
                                onRead={this.onSuccess}
                                style={styles.mainscreen}
                                containerStyle={{height:0}}
                                cameraStyle={[{height:deviceSize.height}]}
                                
                            />                                          
                            <View style={styles.maskOutter}>
                                <View style={[{ flex: maskRowHeight  }, styles.maskRow, styles.maskFrame]} />
                                <View style={[{ flex: 30 }, styles.maskCenter]}>
                                <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                                <View style={styles.maskInner} />
                                <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                            </View>
                            </View>
                        </View>
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
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },
})


export default QRScan;

