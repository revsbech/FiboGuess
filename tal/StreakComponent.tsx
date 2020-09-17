import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text} from "react-native";

export default class NumberComponent extends React.Component {

    render() {
        return(
            <View>
                <Text style={{fontSize: 50, color: "#ff4500", fontWeight: 'bold'}}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}