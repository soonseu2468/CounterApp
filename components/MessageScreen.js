// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import firebase from './firebase';

export default class MessageScreen extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>Message Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 35,
        backgroundColor: '#fff'
    },
    
});