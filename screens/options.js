
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text, View, StyleSheet, Image, ImageBackground, Switch } from 'react-native';
const Settings = (props) => {
    return (
        <View style={[styles.view, { flex: 1, display: props.active == "setting" ? "flex" : "none" }]}>
            <Text style={{ fontWeight: "bold", margin: 5, marginHorizontal:15 }}>OPTIONS</Text>

            <View style={[styles.settingsItem]}>
                <View style={styles.settingsTextLabel}>
                    <Text style={[styles.textLabel]}>Automatic App Lock  </Text>
                </View>

                <View style={styles.settingsItemIcon}>
                    <Switch onValueChange={() => { }, () => {
                    }}
                    />
                </View>
            </View>


            <View style={[styles.settingsItem]}>
                <View style={styles.settingsTextLabel}>
                    <Text style={[styles.textLabel]} onPress={() => this.goto("ResetPin")}>Security (Reset Pin) </Text>
                </View>

                <View style={styles.settingsItemIcon}>
                    <Ionicons name="ios-arrow-forward" size={26} color="gray" />
                </View>
            </View>

            <View style={[styles.settingsItem]}>
                <View style={styles.settingsTextLabel}>
                    <Text style={[styles.textLabel]} >Sign out</Text>
                </View>

                <View style={styles.settingsItemIcon}>
                    <Ionicons name="ios-refresh" size={26} color="gray" />
                </View>
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
    }, settingsItemIcon: {
        flex: 2,
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "auto",
        flexDirection: "row-reverse"
    },
    settingsItem: {
        flexDirection: "row",
        borderBottomColor: "#e8f5e9",
        paddingTop: 5,
        paddingBottom: 5, backgroundColor:"white", margin:10, padding:8, borderRadius:8
    },
    settingsTextLabel: {
        flex: 9,
        alignItems: "stretch",
        justifyContent: "flex-start",
        paddingTop: 5,
        paddingBottom: 5
    }, textLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "gray"
    },
});


export {
    Settings
}