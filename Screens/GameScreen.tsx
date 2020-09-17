import React, { useState } from 'react';
import {Text, View, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StreakComponent from "../tal/StreakComponent"
import NumberComponent from "../tal/TalComponent"
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import StartScreen from "./App"
import { onChange } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
//const utill = require('util');
 




export default class GameScreen extends React.Component {
    static navigationOptions = {
        title: 'Start screen'


    };
    constructor(){
        super();
        this.state={
            currentNumber: 1, 
            currentGuess: "22", 
            currentStreak: 0
        }
    }
    handleClickOnButton(){
        const{ navigation } = this.props
        if (this.state.currentGuess == this.F(this.state.currentNumber + 1)){
            navigation.navigate('CorrectScreen')
            // Increment current number by one
            this.setState({
              currentNumber: this.state.currentNumber + 1,
              currentStreak: this.state.currentStreak + 1
            })
        }else{
            this.setState({
                currentNumber: 1,
                currentStreak: 0
            }, () => {
                navigation.navigate('WrongScreen')
            })
        } 

    }
    handleTextChange(value){
        this.setState({
            currentGuess: value
        })
    }
    F(n){
       if (n == 0){
           return 0
       }
       if (n == 1){
           return 1
       }
       return this.F(n-2) + this.F(n-1);
    }
    render() {
        var numberOne = this.F(this.state.currentNumber -1);
        var numberTwo = this.F(this.state.currentNumber);
                
        return (
            <View style={{flex: 1, backgroundColor: '#add8e6'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{paddingTop: 25, color: '#778899', fontSize: 30}}>
                        GUESS NOW!
                    </Text>
                </View>
                <View style={{flex: 2, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style={{color:'#fff5ee', padding: 20,}}>
                        <NumberComponent number={numberOne}>
                            
                        </NumberComponent>
                    </Text>
                    <Text style={{color:'#fff5ee', padding: 20,}}>
                        <NumberComponent number={numberTwo}>
                            
                        </NumberComponent>
                    </Text>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around'}}>
                    <TextInput
                     style={{height: 50, backgroundColor:'#778899', fontSize: 20, color:'#fff5ee'}}
                     placeholder="WRITE YOUR GUESS HERE"
                     onChangeText={this.handleTextChange.bind(this)}
                    />
                    <Button 
                      onPress={this.handleClickOnButton.bind(this)}
                      title="næste tal"
                      color="#f5fffa"
                      
                    />
                </View>
                <View style={{justifyContent: 'flex-end', paddingLeft: 7}}>
                    <StreakComponent>
                        <Icon name="fire-alt" size={50} color="#ff4500" />
                        {this.state.currentStreak}
                    </StreakComponent>
                </View>
            </View>
        );    
    }
}

