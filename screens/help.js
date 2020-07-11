
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Linking, TouchableHighlight } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
const Help = (props) => {
    return (
        <View style={[styles.view, { flex: 1, display: props.active == "help" ? "flex" : "none" }]}>
            <Text style={{ fontWeight: "300", marginVertical: 5 }}>MOST POPULAR</Text>

            <TouchableHighlight
                style={styles.section}
                onPress={() => {
                    WebBrowser.openBrowserAsync('https://m.nimc.gov.ng/privacy');
                }}>
                <View style={styles.sectionItem}>
                    <Ionicons name="ios-close-circle" size={20} color="gray" style={styles.cicon}/>
                    <Text style={styles.helpText}>Wrong or incorrect data</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.section}
                onPress={() => {
                    WebBrowser.openBrowserAsync('https://m.nimc.gov.ng/privacy');
                }}>
                <View style={styles.sectionItem}>
                    <Ionicons name="ios-refresh-circle" size={20} color="gray"style={styles.cicon} />
                    <Text style={styles.helpText}>Update my data</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.section}
                onPress={() => {
                    WebBrowser.openBrowserAsync('https://m.nimc.gov.ng/privacy');
                }}>
                <View style={styles.sectionItem}>
                    <Ionicons name="ios-checkmark-circle" size={20} color="gray" style={styles.cicon} />
                    <Text style={styles.helpText}>I want to be able to verify ID</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.section}
                onPress={() => {
                    WebBrowser.openBrowserAsync('https://m.nimc.gov.ng/privacy');
                }}>
                <View style={styles.sectionItem}>
                    <Ionicons name="ios-contrast" size={20} color="gray" style={styles.cicon}/>
                    <Text style={styles.helpText}>My verifications fails always</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.section}
                onPress={() => {
                    WebBrowser.openBrowserAsync('https://m.nimc.gov.ng/privacy');
                }}>
                <View style={styles.sectionItem}>
                    <Ionicons name="ios-alert" size={20} color="gray" style={styles.cicon} />
                    <Text style={styles.helpText}>I have a suggestion</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.section}
                onPress={() => {
                    WebBrowser.openBrowserAsync('https://m.nimc.gov.ng/privacy');
                }}>
                <View style={styles.sectionItem}>
                    <Ionicons name="ios-help-circle" size={20} color="gray" style={styles.cicon} />
                    <Text style={styles.helpText}>Multiple error messages</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.section}
                onPress={() => {
                    WebBrowser.openBrowserAsync('https://m.nimc.gov.ng/privacy');
                }}>
                <View style={styles.sectionItem}>
                    <Ionicons name="ios-information-circle" size={20} color="gray" style={styles.cicon} />
                    <Text style={styles.helpText}>I have other questions</Text>
                </View>
            </TouchableHighlight>
           
                <View >
                    <Text style={styles.privacyText}>Privacy policy</Text>
                </View>
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
        margin: 8
    }, section:
        { backgroundColor: "white", marginVertical: 5 }, 
        helpText:{ color: "#212121", alignSelf: "center", marginLeft: 10 },
        privacyText:{color: "#212121", alignSelf: "center", marginLeft: 10, marginVertical:15 ,textDecorationLine:"underline"}
,sectionItem:{padding: 8, flexDirection: "row", }, cicon:{ backgroundColor: "#e8f5e9", paddingLeft: 3, paddingRight: 3, paddingTop: 1, paddingBottom: 1 }
});


export {
    Help
}