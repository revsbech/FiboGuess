import React from 'react';
import {Text, View, Button} from 'react-native';
//const utill = require('util');
 
export default class StartScreen extends React.Component {
    static navigationOptions = {
        title: 'Start screen',
    };
    render() {
        //console.log("this.props.navigation = " + utill.inspect(this.props.navigation, false, null));
        var {navigate} = this.props.navigation;
        return (
            <View>
                <Text>This is the start screen</Text>
                <Button
                    onPress={
                        () =>  navigate("Second", {})
                    }
                    title = "Go to game screen"
                />
            </View>
        );
    }
}
