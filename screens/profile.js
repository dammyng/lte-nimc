
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';
const qrcode = require('yaqrcode');
let base64 = qrcode('hello world');

const Profile = (props) => {

    let [qrContent, setQRContent] = useState("")
    return (
        <View style={[styles.view, { display: props.active == "profile" ? "flex" : "none" }]}>
            <View style={{ justifyContent: "center", }}>
                <View style={{ backgroundColor: "white", borderBottomRightRadius: 12, padding: 10, borderBottomLeftRadius: 8, borderBottomWidth: 1, borderColor: "#f3f3f3" }}>
                    <Image resizeMode="cover" resizeMethod="resize" style={{ height: 200, width: 200 }}
                        source={{ uri: base64 }} />
                </View>
                <View style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8, backgroundColor: "white", padding: 5 }}>
                    <View style={[styles.section,{ flexDirection: "row", justifyContent: "space-between" }]}>
                        <View style={styles.nameBox}>
                            <Text style={styles.nameLabel}>Last name</Text>
                            <Text style={styles.names}>Kassim</Text>
                        </View>
                        <View style={styles.nameBox}>
                            <Text style={styles.nameLabel}>Middle name</Text>
                            <Text style={styles.names}>Anjola</Text>
                        </View>
                        <View style={styles.nameBox}>
                            <Text style={styles.nameLabel}>First name</Text>
                            <Text style={styles.names}>Damilola</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.nameBox}>
                            <Text style={styles.nameLabel}>National Identity Number</Text>
                            <Text style={styles.names}>12345678901</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.nameBox}>
                            <Text style={styles.nameLabel}>Dob</Text>
                            <Text style={styles.names}>12/02/1990</Text>
                        </View>
                    </View>
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
        justifyContent: "center", alignItems: "center",
    }, qr: {
        alignSelf: "center"
    }, nameLabel: {
        fontSize: 9,
        color: "gray", textAlign: "left"
    }, names: {
        textAlign: "left"
    },nameBox:{
        marginHorizontal:3
    }, section:{
        marginVertical:3
    }
});


export {
    Profile
}