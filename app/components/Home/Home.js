//Home Screen and Container
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
    AsyncStorage,
    ScrollView
} from 'react-native';
import Chat from "./ChatButton";
import {
    Button,
    Footer,
    FooterTab,
    Icon
}
    from 'native-base';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chats: [],
            num: 0,
        }
    }

    chatPressDemo = () => {
        this.props.navigation.navigate('ChatRooms');
        Alert.alert(
            'Get Ready to Chat!',
            'Tapping on posted jobs will let you chat with the client!',
            [
                {
                    text: "Close this Alert",
                    onPress: () => console.log("Closed")
                }
            ]
        )
        console.log(AsyncStorage);
    }

    // pushes component to array in state
    handleAdd = () => {

        /* NOT FOR DEMO
        TODO: get form filed info on button
        var cbox = this.state.chats;
        cbox.push(<Chat></Chat>);
        this.setState({
            chats: cbox
        })
        */

        this.props.navigation.navigate("Task");
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.h1}>Welcome to LeadGen!</Text>
                        <Text style={styles.h2}>Post a task by pressing the + button below</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={this.chatPressDemo}>
                    <View style={styles.sampleChat}>
                        <Text style={styles.chatTitle}>Sample Job</Text>
                        <Text style={styles.jobDesc}>"Looking for a contract carpenter!"</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView style={styles.chatList}>
                    <View>
                        {this.state.chats.map(function (object, i) {
                            // mapping the array out into the 'DOM' 
                            // In React, all array items that are map NEED A KEY
                            return <Chat key={i}>
                            </Chat>
                        })}
                    </View>
                </ScrollView>
                <Footer style={styles.footer}>
                    <FooterTab>
                        <Button style={styles.ftBtn}>
                            <Icon name="home" />
                        </Button>
                        <Button active style={styles.ftBtn} onPress={this.handleAdd}>
                            <Icon active name="add" />
                        </Button>
                        <Button style={styles.ftBtn}>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6%',
    },
    header: {
        borderRadius: 10,
        backgroundColor: 'navy',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: '95%',
    },
    h1: {
        color: 'white',
        fontSize: 24,
        marginLeft: 20,
        paddingTop: 10,
    },
    h2: {
        color: 'white',
        fontSize: 14,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
    },
    sampleChat: {
        width: '80%',
        backgroundColor: 'darkblue',
        marginLeft: '10%',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    chatTitle: {
        color: 'white',
        marginLeft: 10,
        fontSize: 20,
        paddingTop: 4,
    },
    jobDesc: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        paddingTop: 4,
        paddingBottom: 4,
    },
    chatBtn: {
        borderRadius: 10,
    },
    chatList: {
        marginTop: 20,
    },
    footer: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-2%',
        marginBottom: '14%',
        height: 20,
    },
    ftBtn: {
       
    }
})

export default HomeScreen;
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);