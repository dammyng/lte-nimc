import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('../assets/1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../assets/2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../assets/3.png'),
        backgroundColor: '#22bcb5',
    }
];

const Landing = (props) => {

    let _renderItem = ({ item }) => {
        return (
            <View style={[styles.slide,{
                backgroundColor: item.backgroundColor,
              },]}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    let _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    }
    let _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    let _onDone = () => {
       props.navigation.navigate('Login')}
      
    return (
        <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            renderDoneButton={() => _renderDoneButton()}
            renderNextButton={() => _renderNextButton()}
            onDone={() => _onDone()}

        />
    )
}

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 160,
        height: 160,
        marginVertical: 32,
      },
      text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
      },
      title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
      },
});


export {
    Landing
}