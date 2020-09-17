import React from 'react';
import {Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import StartScreen from './Screens/StartScreen'
import GameScreen from './Screens/GameScreen'
import App from './App';

const Navigation = StackNavigator({
    First: {screen: StartScreen},
    Second: {screen: GameScreen}
});

export default Navigation;