// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import firebase from './firebase';

export default class ForgotPassword extends Component {

    constructor() {
        super();
        this.state = {
            phone: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    sendTAC = () => {
        if (this.state.phone === '') {
            Alert.alert('Enter phone number to send!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .signInWithPhoneNumber(this.state.phone)
                .then((res) => {
                    console.log('TAC sent successfully!')
                    Alert.alert('TAC sent successfully!')
                    this.setState({
                      isLoading: false,
                      phone: '', 
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
                    placeholder="Phone"
                    value={this.state.phone}
                    onChangeText={(val) => this.updateInputVal(val, 'phone')}
                />

                <Button
                    color="#3740FE"
                    title="Send "
                    onPress={() => this.sendTAC()}
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