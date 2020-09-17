import React, { FC } from "react"
import { ImagePropTypes, View, StyleSheet, TextInput } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC = (props) => {
    return(
        <View>
        <View>
            <Icon 
            name={props.icon} 
            size={22} 
            color="#555" />  
        </View>
        <View style={{ flex: 0.1, justifyContent: "center" }}>
            <TextInput 
            style={{ padding: 150 }}
            placeholderTextColor="#555" 
            placeholder={props.placeholder} 
            onChangeText={props.onChangeText} 
            />
        </View>
    </View>
);
};
export default Input;

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})