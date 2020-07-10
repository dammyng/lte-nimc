
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import QRCode from 'react-native-qrcode';
const Profile = (props) => {
    return (
        <View style={[styles.view,{ flex: 1, display: props.active == "profile" ? "flex" : "none" }]}>
            <QRCode
                value={"The value"}
                size={200}
                bgColor='purple'
                fgColor='white' />
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
        justifyContent: "center", alignItems: "center"
    }, qr: {
        alignSelf: "center"
    }
});


export {
    Profile
}