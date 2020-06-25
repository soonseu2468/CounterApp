// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import firebase from './firebase';

export default class Logo extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/commons/3/30/The_Instagram_Logo.jpg'
                    }} />
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