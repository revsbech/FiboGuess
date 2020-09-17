import * as React from 'react';
import { View, Text, Button, Vibration, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';


export default class CorrectScreen extends React.Component {


    render() {
        const { navigation } = this.props
        return(
            <View style={{flex: 1, backgroundColor:'#f08080'}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop: 30}}>
                    <Text style={{fontSize: 30, color: "#cd5c5c", fontWeight: 'bold'}}>
                        WRONG
                    </Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', paddingBottom: 100}}>
                    <Text>
                        <Icon name="circle-with-minus" color="#cd5c5c" size={300}/>
                    </Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', paddingTop: 30}}>
                <Icon.Button
                 name="arrow-right"
                 backgroundColor="#f08080"
                 color="#cd5c5c"
                 size={80}
                 onPress={() => navigation.navigate('GameScreen')}
                />
                </View>
            </View>
        )
    }
}

