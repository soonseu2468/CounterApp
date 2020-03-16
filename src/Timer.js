import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import TimerCountdown from './TimerCountdown'
import { connect } from 'react-redux'

class Timer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View>

                    {/* <TouchableOpacity onPress={() => this.props.resetCounter()}>
                        <Text style={styles.Button}>Reset</Text>
                    </TouchableOpacity> */}

                    <TimerCountdown
                        initialMilliseconds={100 * 60}
                        onTick={(milliseconds) => console.log("tick", milliseconds)}
                        onExpire={() => this.props.alertCounter()}
                        formatMilliseconds={(milliseconds) => {
                            const remainingSec = Math.round(milliseconds / 1000);
                            const seconds = parseInt((remainingSec % 60).toString(), 10);
                            const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                            const hours = parseInt((remainingSec / 3600).toString(), 10);
                            const s = seconds < 10 ? '0' + seconds : seconds;
                            const m = minutes < 10 ? '0' + minutes : minutes;
                            let h = hours < 10 ? '0' + hours : hours;
                            h = h === '00' ? '' : h + ':';
                            return h + m + ':' + s;
                        }}
                        allowFontScaling={true}
                        style={{ fontSize: 20 }}
                    />

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});


function mapDispatchToProps(dispatch) {
    return {
        alertCounter: () => dispatch({ type: 'ALERT_COUNTER' }),
        reserCounter: () => dispatch({ type: 'RESET_COUNTER' }),

    }
}


export default connect(null, mapDispatchToProps)(Timer)