import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

class Main extends React.Component {
    render() {
        console.log("andra");

        return (
            <View>
                <Text>Current Scene: </Text>
                <Text>Tap me to load the next scene</Text>
            </View>
        );
    }
}

export default Main;
