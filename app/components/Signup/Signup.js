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

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName: '',
            pWord: '',
            email: '',
        }
    }

    backLogin = () => {
        this.props.navigation.navigate('HomeLogin');
        this.setState({
            uName: '',
            pWord: '',
            email: '',
        })
    }

    handleSignUp = () => {
        if (this.state.uName == '') {
            Alert.alert(
                'Please Fill all Fields',
                'Username is  required',
                [
                    {
                        text: "Close this Alert",
                    }
                ]
            )
        } else if (this.state.pWord == '') {
            Alert.alert(
                'Please Fill all Fields',
                'Password is required',
                [
                    {
                        text: "Close this Alert",
                    }
                ]
            )
        } else if (this.state.email == '') {
            Alert.alert(
                'Please Fill all Fields',
                'Email is required',
                [
                    {
                        text: "Close this Alert",
                    }
                ]
            )
        } else {
            this.doSignUp();
        }
    }

    doSignUp = () => {
        //TODO fetch server and store information into db
        console.log('signup clicked')
        fetch("http://localhost:9090/signup", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            //getting values, the RN alternative to body parser is getting form input stored in the state
            // we are naming the object body for convention, because in the backend we are used to req.body etc
            // sendding off sign in data to server
            body: JSON.stringify({
                username: this.state.uName,
                password: this.state.pWord,
                email: this.state.email,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.success === true) {
                    Alert.alert(
                        'Thanks for Signing Up!',
                        'Go ahead and log in',
                        [
                            {
                                text: "Close this Alert",
                            }
                        ]
                    )
                    this.props.navigation.navigate('HomeLogin');
                } else {
                    Alert.alert(
                        'Sign Up Failed',
                        'Try again',
                        [
                            {
                                text: "Close this Alert",
                            }
                        ]
                    )
                }
            })
            .done()
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
                <View style={styles.container}>
                    <Text style={styles.header}>Signing Up is Easy!</Text>
                    <Text style={styles.login} style={styles.login}> Please fill out all fields </Text>

                    <TextInput onChangeText={(uName) => this.setState({ uName })} placeholder='Create a Username' style={styles.input}></TextInput>
                    <TextInput onChangeText={(pWord) => this.setState({ pWord })} placeholder='Create a Password' style={styles.input} secureTextEntry={true}></TextInput>
                    <TextInput onChangeText={(email) => this.setState({ email })} placeholder='Enter your Email' style={styles.input}></TextInput>

                    <TouchableOpacity style={styles.btn} onPress={this.handleSignUp}>
                        <Text style={styles.submit}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.suBtn} onPress={this.backLogin}>
                        <Text>Back to Login</Text>
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
        marginTop: '12%',
        marginBottom: 20,
        color: 'navy',
        fontWeight: 'bold',
    },
    login: {
        fontSize: 24,
        color: 'navy',
        marginBottom: '70%',
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
        marginBottom: 20,
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

export default SignUp;
AppRegistry.registerComponent('SignUp', () => SignUp);