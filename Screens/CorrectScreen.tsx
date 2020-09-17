import * as React from 'react';
import { View, Text, Button, Vibration, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

export default class CorrectScreen extends React.Component {


    render() {
        const{ navigation } = this.props
        return(
            <View style={{flex: 1, backgroundColor:'#00ff00'}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop: 30}}>
                    <Text style={{fontSize: 30, color: "#008000", fontWeight: 'bold'}}>
                        CORRECT
                    </Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', paddingBottom: 100}}>
                    <Text>
                        <Icon name="trophy" color="#008000" size={300}/>
                    </Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', paddingTop: 30}}>
                <Icon.Button
                 name="arrow-right"
                 backgroundColor="#00ff00"
                 color="#008000"
                 size={80}
                 onPress={() => navigation.navigate('GameScreen')}
                />
                </View>
            </View>
        )
    }
}

