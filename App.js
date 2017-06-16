import React from 'react';
import { StyleSheet, Text, View, Alert, Image, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { getJoke, sendToSlack } from './lib/api';


const TOKEN = '';
const CHANNEL = '#norris-jokes';

export default class App extends React.Component {

    state = {
        defaultRadius: 50,
    }

    handleOnButtonPress() {
        getJoke().then((joke) => {
            return sendToSlack(TOKEN, CHANNEL, joke);
        }).catch((err) => Alert.alert('smth went wrong'));
    }

    render() {
        return (<Image source={require('./img/norris.jpg')}
             style={styles.container}
            >
        <Svg
                height="350"
                width="300"
            >
                <Circle
                    cx="150"
                    cy="250"
                    r="100"
                    stroke="black"
                    strokeWidth="3.5"
                    fill="green"
                    onPress={::this.handleOnButtonPress}
                />
                <Circle
                    cx="150"
                    cy="250"
                    r={this.state.defaultRadius}
                    stroke="yellow"
                    strokeWidth="4.5"
                    fill="red"
                    onPress={::this.handleOnButtonPress}
                />
            </Svg>
        </Image>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
    },
});
