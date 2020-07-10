
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
const Help = (props) => {
    return (
        <View style={[styles.view,{ flex: 1, display: props.active == "help" ? "flex" : "none" }]}>
            <Text>Tap to Help</Text>
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
    Help
}