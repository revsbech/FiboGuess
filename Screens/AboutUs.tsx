import { CurrentRenderContext } from "@react-navigation/native";
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
            <View style={{flex: 1, backgroundColor:'#fff5ee'}}>
                <View style={{flex: 1, alignItems: 'center', paddingTop: 30}}>
                    <Text style={{fontSize: 30, color: "#5f9ea0", fontWeight: 'bold'}}>
                        About
                    </Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', paddingBottom: 100}}>
                    <Text>
                        <Icon name="question" color="#5f9ea0" size={300}/>
                    </Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', padding: 30}}>
                    <Text style={{fontSize: 25, color: '#5f9ea0'}}>
                        The way to play FiboGuess, is by being the best at guessing the next number of Fibonacci. You have to add the two numbers showed on the screen.
                    </Text>
                </View>
            </View>
        )
    }
}

