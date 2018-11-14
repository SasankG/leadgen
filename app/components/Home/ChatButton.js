import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Alert,
    ImageBackground,
    AsyncStorage
} from 'react-native';

class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.chatBtns}>
                    <Text>
                        Testing
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    chatBtns: {
        width: '80%',
        backgroundColor: 'blue',
        marginLeft: '10%',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom: 0,
        margin: 10,
    },
})





export default Chat;

AppRegistry.registerComponent('Chat', () => Chat);