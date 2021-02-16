import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, StyleSheet, Platform } from 'react-native';

import ProfileScreen from './Profile';
import Home from './Home';
import Help from './Help';
import History from './History';
import Send from './Send';
import QRscan from './QRscan';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#fda039', 
                activeBackgroundColor: 'transparent', 
                labelPosition: 'bottom-icon', 
                tabStyle: styles.tabStyle,
                style: styles.tabBarStyle,
            }}>
            <Tab.Screen name="Home" component={Home}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/>,
                tabBarLabel: ({ focused, color}) => focused?<Text style={{color: color, marginTop: 5, fontSize: 14}}>Hogar</Text>: null,
              }}
            />
            <Tab.Screen name="QRscan" component={QRscan}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="qr-code-scanner" color={color}/>,
                tabBarLabel: ({ focused, color}) => focused?<Text style={{color: color, marginTop: 5, fontSize: 14}}>QR Scan</Text>: null,
              }}
            />
            <Tab.Screen name="Send" component={Send}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="outgoing-mail" color={color}/>,
                tabBarLabel: ({ focused, color}) => focused?<Text style={{color: color, marginTop: 5, fontSize: 14}}>Transferir</Text>: null,
              }}
            />
            <Tab.Screen name="History" component={History}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color}/>,
                tabBarLabel: ({ focused, color}) => focused?<Text style={{color: color, marginTop: 5, fontSize: 16}}>Historia</Text>: null,
              }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color}/>,
                tabBarLabel: ({ focused, color}) => focused?<Text style={{color: color, marginTop: 5, fontSize: 16}}>Mi Perfil</Text>: null,
              }}
            />
            <Tab.Screen name="Help" component={Help}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="help" color={color}/>,
                tabBarLabel: ({ focused, color}) => focused?<Text style={{color: color, marginTop: 5, fontSize: 16}}>Ayuda</Text>: null,
              }}
            />
        </Tab.Navigator>
    );
}

function TabBarIcon(props) {
    return <MaterialIcons size={32} {...props} style={{textAlign:"center"}}/>
}

const styles = StyleSheet.create({
    tabStyle: {
        marginTop: 12, 
        marginBottom: 12,
    },
    tabBarStyle: {
        height: (Platform.OS == 'ios'? 90: 60), 
        bottom: (Platform.OS == 'ios' ? 0: 0) 
    }
});

export default Main;