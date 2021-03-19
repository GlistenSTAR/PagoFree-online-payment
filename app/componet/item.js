import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Animated,
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import isEmpty from '../common/is-empty';

export default class Item extends Component{
    inputInstance = null;

    constructor(props){
        super(props);
        this.state = {
            animation: new Animated.Value(0)
        };

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onActive = this.onActive.bind(this);
    }

    componentDidMount(){
        if(!isEmpty(this.props.value)){
            this.onFocus();
        }
    }

    onFocus(){
        Animated.timing(this.state.animation, {
            toValue: -30,
            duration: 100,
            useNativeDriver: true
        }).start();
    }

    onBlur(){
        if(this.props.value == ""){
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }).start();
        }
    }

    onActive(){
        this.inputInstance.focus();
    }

    render(){
        const transformStyle = {
            transform: [{
                translateY: this.state.animation
            }]
        }
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.onActive}>
                <View style={[styles.container, this.props.style, this.props.value == ""? styles.container_normal: styles.container_active]}>
                    <View style={styles.icon}>
                        {this.props.icon?
                        (<MaterialIcons name={this.props.icon} size={25} color="#9d9d9d"/>): null}
                    </View>
                    <View style={styles.input}>
                        <TextInput ref={(input) => {this.inputInstance = input;}} secureTextEntry={this.props.secureTextEntry} autoCapitalize="none" style={styles.input_wrapper} {...this.props} onFocus={this.onFocus}  onBlur={this.onBlur}/>
                        <Animated.View style={[styles.label_container, transformStyle]}>
                            <Text style={styles.label}>{this.props.cplaceholder}</Text>
                        </Animated.View>
                        {this.props.forgot?
                            (<TouchableOpacity style={styles.forgot_btn}>
                                <Text style={styles.forgot_btn_text} onPress={() => this.props.navigation.push('Forgot')}>OLVIDÓ</Text>
                            </TouchableOpacity>)
                            :null}
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    container_normal: {
        borderWidth: 1,
        borderColor: '#e9e9e9',
        borderRadius:15
    },

    container_active: {
        elevation: 2,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        textShadowRadius: 3,
        borderRadius:15
    },
    icon: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    input_wrapper: {
        height: 40,
        paddingLeft: 10
    },

    forgot_btn_text: {
        fontSize: 13,
        color: '#fca941',
        fontWeight: 'bold'
    },

    forgot_btn: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },

    label_container: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },

    label: {
      fontSize: 12,
      color: '#a8aaa9'
    }
});
Item.propTypes = {
    ...TextInput.propTypes,
    icon: PropTypes.string
}
