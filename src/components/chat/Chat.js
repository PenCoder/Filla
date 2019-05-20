import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

import openSocket from 'socket.io-client';

// import Message from '../models/message';
// Messages
import Messages from '../../data/messages';

export default class Chat extends React.Component {
    constructor(props){
        super(props);

        // Socket client instance
        this.socket = openSocket('http://169.254.80.80:8000');
    }
    state = {
        messages: []
    };
    componentWillMount(){
        this.setState({
            messages: Messages.messages
        })
    }

    onSend(messages = []){
        this.setState((previousState) =>({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
        this.socket.emit('msg', messages);
    }
    render(){
        return (
            <GiftedChat
                messages={this.state.messages} 
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id: 1
                }}/>
        )
    }
}