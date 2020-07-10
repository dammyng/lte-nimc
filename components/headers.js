
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.head}>
            <Image
                style={styles.stretch}
                source={require('../assets/nimc.png')}
            />
            <Image
                style={styles.stretch}
                source={require('../assets/nimc.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        flexDirection: "row"
    }, stretch: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
    },
});

export {
    Header
}