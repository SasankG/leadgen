// Sign Up Screen
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

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDescriptio: '',
            location: '',
            phoneNum: '',
            email: '',
        }
    }

    backLogin = () => {
        this.props.navigation.navigate('HomeLogin');
        this.setState({
            taskName: '',
            taskDescriptio: '',
            location: '',
            phoneNum: '',
            email: '',
        })
    }

    handleSignUp = () => {
        if (this.state.tastName == '') {
            alert('fill in task name')
        } else if (this.state.taskDescriptio == '') {
            alert('fill in task description')
        } else if (this.state.email == '') {
            alert('fill in email')
        } else {
            this.doSignUp();
        }
    }

    

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
                <View style={styles.container}>
                    <Text style={styles.header}>What do you need help with?</Text>
                    <Text style={styles.login} style={styles.login}> Please fill out all fields </Text>

                    <TextInput onChangeText={(taskName) => this.setState({ taskName})} placeholder='Add a Task' style={styles.input}></TextInput>
                    <TextInput onChangeText={(taskDescriptio) => this.setState({ taskDescriptio })} placeholder='Task Description' style={styles.input}></TextInput>
                    <TextInput onChangeText={(email) => this.setState({ email })} placeholder='Enter your Email' style={styles.input}></TextInput>
                    <TextInput onChangeText={(phoneNum) => this.setState({ phoneNum})} placeholder='Enter your Phone Number' style={styles.input}></TextInput>
                    <TextInput onChangeText={(location) => this.setState({ location })} placeholder='Where is this task?' style={styles.input}></TextInput>

                    <TouchableOpacity style={styles.btn} onPress={this.handleSignUp}>
                        <Text style={styles.submit}>Add Task</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'aliceblue',
    },
    header: {
        fontSize: 34,
        marginTop: 40,
        marginBottom: 20,
        color: 'navy',
        fontWeight: 'bold',
    },
    login: {
        fontSize: 24,
        color: 'navy',
        marginBottom: '30%',
    },
    input: {
        alignSelf: 'stretch',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: 'lightblue',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginBottom: 60,
    },
    submit: {
        fontSize: 19,
        color: 'navy',
        fontWeight: 'bold',
    },
    suBtn: {
        backgroundColor: 'lightblue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginBottom: 60,
    }
})

export default AddTask;
AppRegistry.registerComponent('AddTask', () => AddTask);