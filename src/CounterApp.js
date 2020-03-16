import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { connect } from 'react-redux'
class CounterApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ textAlign: "center", fontSize: 30, justifyContent: "center" }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={styles.Button}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button: {
        textAlignVertical: "center",
        textAlign: "center",
        backgroundColor: "red",
        fontSize: 100,
        width: 150,
        height: 150,
        borderRadius: 500 / 2

    }
});