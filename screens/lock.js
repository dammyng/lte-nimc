
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { LButton, BtnText, TextInput } from '../styled/styledcomp'
import { Header, M10 } from '../components/headers';

const Lock = (props) => {
    let _continue = () => {
        props.navigation.navigate('Main')
    }
    return (
        <>
            <ImageBackground
                source={require("../assets/bg3.jpg")}
                style={[styles.imgBg]}
            >
                <M10 />
                <Header />
                <View style={[styles.view]}>
                    <View style={{ flex: 2, justifyContent: "center" }}>
                        <View style={{ padding: 12, backgroundColor: "white" }}>
                            <TextInput style={[styles.mv10]} placeholder="Enter your pin"></TextInput>
                            <LButton title="Login" onPress={() => _continue()}>
                                <BtnText>Unlock</BtnText>
                            </LButton>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}


const styles = StyleSheet.create({
    center: {
        alignSelf: "center",
        textAlign: "center"
    },
    view: {
        display: "flex",
        paddingBottom: 6,
        padding: 12,
        flex: 2,
        justifyContent: "center",
        marginHorizontal: 30,
    }, imgBg: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center"
    }, mv10: {
        marginVertical: 10
    }
});


export {
    Lock
}