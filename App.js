import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default class App extends React.Component {
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
                    onPress={() => Alert.alert('hi there')}
                />
                <Circle
                    cx="150"
                    cy="250"
                    r="50"
                    stroke="yellow"
                    strokeWidth="4.5"
                    fill="red"
                    onPress={() => Alert.alert('hi there')}
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
