import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.chatBtns}>
                    <Text style ={styles.title}>
                        {this.props.taskName}
                    </Text>
                    <Text style = {styles.description}>
                        {this.props.taskDescriptio}
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
    title: {
        color: 'white',
        fontSize: 24,
        marginLeft: 20,
        paddingTop: 10,
    },
    description: {
        color: 'white',
        fontSize: 14,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
    }
})





export default Chat;

AppRegistry.registerComponent('Chat', () => Chat);