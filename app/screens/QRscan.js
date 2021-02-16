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

import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';

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
        return (
            <View >
                <Fragment>
                    <StatusBar barStyle="dark-content" />
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
                        <QRCodeScanner
                            reactivate={true}
                            animate={}
                            showMarker={true}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                            style={styles.mainscreen}
                        />
                    }
                </Fragment>
            </View>

        );
    }
}

const styles = StyleSheet.create({
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
  }
})


export default QRScan;

