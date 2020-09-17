import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text} from "react-native";

export default class NumberComponent extends React.Component {

    render() {
        return(
            <View>
                <Text style={{color: '#fff5ee', fontSize: 75}}>
                    {this.props.number}
                </Text>
            </View>
        )
    }
}