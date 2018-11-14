import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import io from 'socket.io-client';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      text: '',
      txts: []
    }
  }

  componentDidMount() {
    //initialize socket 
    this.socket = io('http://localhost:9090');
    this.socket.on('channel1', (msg) => this.changeState(msg))
  }


  handleChange = (value) => {
    //sending this.state.text to server over socket
    this.socket.emit('channel1', value);
    //reset state

    this.setState({ text: "" })

    //just for displaying mock messages
    var words = this.state.txts;
    words.push(value);
    this.setState({
      txts: words
    })
  }

  changeState = (msg) => {
    this.setState({ messages: [...this.state.messages, msg] })
  }

  renderMessages = () => {
    return this.state.messages.map((message, index) => {
      return (
        <Text key={index}>
          {message}
        </Text>
      )
    })
  }

  clicked = () => {
    this.socket.emit('channel1', "hello world")
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {this.state.txts.map((message, index) => {
            return (
              <View style = {styles.msgBlurb}>
                <Text key={index} style={styles.msg}>
                  {message}
                </Text>
              </View>
            )
          })}
        </ScrollView>
        <KeyboardAvoidingView>
          <View >
            <TextInput style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({ text: text })} placeholder="Type message here!" />
          </View>
          <View >
            <TouchableOpacity style={styles.sendBtn} onPress={() => this.handleChange(this.state.text)}>
              <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
    right: 0,
    bottom: 20,
    width: '60%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  txtInput: {
    position: 'absolute',
    left: 40,
  },
  sendBtn: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'navy',
    borderRadius: 10,
    width: 80,
    position: 'absolute',
    left: 260,
    right: 0,
    bottom: 20,
    textAlign: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  btnText: {
    color: 'white',
    padding: 13,
  },
  msgBlurb: {
    borderRadius: 4,
    backgroundColor: 'navy',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 4,
    width: '30%',
    marginLeft: 10,
  },
  msg: {
    color: 'white',
    fontSize: 14,
    marginLeft: 4,
    margin: 2,
  }


})


export default ChatRoom;

AppRegistry.registerComponent('ChatRoom', () => ChatRoom);