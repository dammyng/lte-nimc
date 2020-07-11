
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HView, IconCaption, CenterView } from '../styled/styledcomp.js'
const Footer = (props) => {
    return (
        <HView>
            <View style={styles.view} onTouchStart={() => props.switch("setting")}>
                <Ionicons name="ios-cog" size={30} color="gray" />
                <IconCaption>Options</IconCaption>
            </View>
            <View style={styles.view} onTouchStart={() => props.switch("record")}>
                <Ionicons name="ios-list" size={30} color="gray" />
                <IconCaption>Records</IconCaption>
            </View>
            <View style={styles.view} onTouchStart={() => props.switch("profile")}>
                <Ionicons name="ios-person" size={30} color="gray" />
                <IconCaption>Profile</IconCaption>
            </View>
            <View style={styles.view} onTouchStart={() => props.navigation.navigate('Lock')}>
                <Ionicons name="ios-card" size={30} color="gray" />
                <IconCaption>Lock </IconCaption>
            </View>
            <View style={styles.view} onTouchStart={() => props.switch("help")}>
                <Ionicons name="ios-help-circle" size={30} color="gray" />
                <IconCaption>Help</IconCaption>
            </View>
        </HView>
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
        alignItems: "center",
        paddingBottom: 6
    }
});


export {
    Footer
}