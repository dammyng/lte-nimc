
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const Record = (props) => {
    let state = {
        deviceHead: ['ID NUMBER', 'PHONE NO', 'STATUS'],
        deviceData: [
            ["--", "--", "--"],
            ["--", "--", "--"],
            ["--", "--", "--"],
        ],
        veriHead: ["Date", "Verifier ID", "Type", "Status"],
        veriData: [
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],

        ]
    }

    return (
        <View style={[styles.view, { flex: 1, display: props.active == "record" ? "flex" : "none" }]}>
            <Text style={{ margin: 10, color: "grey" }}>Device</Text>
            <View style={{ backgroundColor: "#e0e0e0", padding: 20, borderRadius: 10, marginVertical: 10, marginBottom: 25 }}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#eeeeee' }}>
                    <Row data={state.deviceHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={state.deviceData} textStyle={styles.text} />
                </Table>
            </View>
            <Text style={{ margin: 10, color: "grey" }}>Verification history</Text>
            <View style={{ backgroundColor: "#e0e0e0", padding: 20, borderRadius: 10, marginVertical: 10, marginBottom: 20 }}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#eeeeee' }}>
                    <Row data={state.veriHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={state.veriData} textStyle={styles.text} />
                </Table>
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
    }, head: { height: 40, backgroundColor: '#bdbdbd' },
    text: { margin: 8 }
});

export {
    Record
}