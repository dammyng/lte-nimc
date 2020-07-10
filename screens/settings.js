
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
const Settings = (props) => {
    return (
        <View style={[styles.view,{ flex: 1, display: props.active == "setting" ? "flex" : "none" }]}>
            <Text>Tap to Settings</Text>
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
    Settings
}