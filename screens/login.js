
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
const Login = (props) => {
    return (
        <View >
            <Text>Tap to Login</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    center: {
        alignSelf: "center",
        textAlign: "center"
    },
    view: {
        flex: 1,
        display: "flex",
        paddingBottom: 6,
        justifyContent: "center",
        alignItems: "center"
    }
});


export {
    Login
}