// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import firebase from './firebase';

export default class ForgotPassword extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    sendEmail = () => {
        if (this.state.email === '') {
            Alert.alert('Enter email to send!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .sendPasswordResetEmail(this.state.email)
                .then((res) => {
                    console.log('Email sent successfully!')
                    Alert.alert('Email sent successfully!')
                    this.setState({
                      isLoading: false,
                      email: '', 
                    })
                    this.props.navigation.navigate('Login')
                  })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />

                <Button
                    color="#3740FE"
                    title="Send "
                    onPress={() => this.sendEmail()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },

    
});