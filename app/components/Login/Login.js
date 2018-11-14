// Log In Screen
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
    AsyncStorage,
    Animated
} from 'react-native';



class Logins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            // this sets the initial opacity as 0
            fadeAnim: new Animated.Value(0),
        }
    }

    // Once Mounted on DOM check if user info is in async with loadState function
    componentDidMount() {
        this.loadState().done;
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1, //setting the opacity to 1
                duration: 1000,
            }
        ).start(); //start function gets run
    }

    // check if user is already logged in
    // checking the async storage to see if there is a user in it already
    // if yes go automatically to HomeMain
    loadState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('HomeMain');
        }
    }

    handleLogin = () => {
        // fetch login route
        fetch("http://localhost:9090/login", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            //getting values, the RN alternative to body parser is getting form input stored in the state
            // we are naming the object body for convention, because in the backend we are used to req.body etc
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.success === true) {
                    // store the user in asyncstorage and name it 'user'
                    AsyncStorage.setItem('user', res.user);
                    console.log(res)
                    this.props.navigation.navigate('HomeMain');
                    Alert.alert(
                        'Welcome to LeadGen!',
                        'Try Tapping on the Sample Job! Go on, give it a tap!',
                        [
                            {
                                text: "Close this Alert",
                            }
                        ]
                    )
                } else {
                    Alert.alert(
                        'Failed to Login',
                        'Try entering your username and password again',
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

    goSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <ImageBackground source={require("../../images/bridge-clouds-cloudy-556416.jpg")} style={styles.bg}>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <KeyboardAvoidingView styles={styles.wrapper} behavior='padding'>

                        <View style={styles.container}>
                            <Text style={styles.header}>Welcome to LeadGen</Text>
                            <Text style={styles.login} style={styles.login}> Finding Services Made Easy </Text>

                            <TextInput onChangeText={(username) => this.setState({ username })} placeholder = 'Username' style={styles.input}></TextInput>
                            <TextInput onChangeText={(password) => this.setState({ password })} placeholder = 'Password' style={styles.input} secureTextEntry={true}></TextInput>

                            <TouchableOpacity style={styles.btn} onPress={this.handleLogin}>
                                <Text style={styles.submit}>Log In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.suBtn} onPress={this.goSignUp}>
                                <Text style = {{fontWeight: 'bold'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                    </KeyboardAvoidingView>
                </Animated.View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    header: {
        fontSize: 34,
        marginTop: '12%',
        marginBottom: 28,
        color: '#001a33',
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        opacity: 1,
    },
    login: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001a33',
        marginBottom: "80%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
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
        opacity: 0.9,
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#99ebff',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginBottom: 20,
        opacity: 0.9,
    },
    submit: {
        fontSize: 19,
        color: 'navy',
        fontWeight: 'bold',
        opacity: 0.9,
    },
    suBtn: {
        backgroundColor: '#99ebff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginBottom: 180,
    },
    bg: {
        height: '100%',
        width: '100%',
        flex: 1,
        opacity: 1,
    }
})

export default Logins;
AppRegistry.registerComponent('Logins', () => Logins);