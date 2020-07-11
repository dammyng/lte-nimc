
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Header, M10 } from '../components/headers';
import { LButton, BtnText, TextInput } from '../styled/styledcomp'
import { Ionicons } from '@expo/vector-icons';
import Tooltip from 'react-native-walkthrough-tooltip';

const Login = (props) => {
    let [toolTipVisible, settoolTipVisible] = useState(false)

    let _continue = () => {
        props.navigation.navigate('Main')
    }

    return (
        <View style={{ backgroundColor: "#fafafa", flex: 1, }}>
            <M10 />
            <Header />
            <View style={{ alignContent: "center", flex: 2, justifyContent: "center" }}>
                <View style={{ display: "flex", paddingHorizontal: 25, borderRadius: 10, alignContent: "center" }}>
                    <Text style={{ fontSize: 22, fontWeight: "200", marginVertical: 5 }}>Get started</Text>
                </View>
                <View style={{ marginHorizontal: 25, display: "flex", backgroundColor: "#fff", padding: 25, borderRadius: 10, alignContent: "center" }}>
                    <TextInput style={[styles.mv10]} placeholder="Enter your NIN"></TextInput>
                    <LButton title="Login" onPress={() => _continue()}>
                        <BtnText>Continue</BtnText>
                    </LButton>
                    <Text style={{ fontSize: 11, color: "#e57373", marginVertical: 8 }} onPress={() => { settoolTipVisible(true) }}>
                        How it works
                        </Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
            </View>
            <Tooltip
                isVisible={toolTipVisible}
                content={
                    <View>
                        <Text style={{ fontSize: 15, marginVertical: 5, color: "#424242" }}>How it works</Text>
                        <Text style={{  marginVertical: 5, color: "gray" , textAlign:"justify" }}>Enter your 11 digit NIN - National Identification Number </Text>
                        <Text  style={{  marginVertical: 5, color: "gray", textAlign:"justify" }}>You would receive an SMS with the verification PIN on the number you provided when registering for your NIN</Text>
                        <Text  style={{  marginVertical: 5, color: "gray", textAlign:"justify"  }}>Once your phone number is verified, your Mobile ID will automatically be set up on this device</Text>

                    </View>}
                placement="center"
                onClose={() => settoolTipVisible(false)}
                contentStyle={{borderRadius:10, borderWidth:1, borderColor:"lightgray"
                
            }}
            ></Tooltip>
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
    },
    mv10: {
        marginVertical: 10
    }
});


export {
    Login
}