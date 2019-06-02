import React from 'react';
import {ImageBackground, TouchableNativeFeedback} from 'react-native';
import { Container } from 'native-base';
import { Card, Input, Button, Text } from 'react-native-elements';
// Socket io: client
import openSocket from 'socket.io-client';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);

        this.socket = openSocket('http://169.254.80.80:8000');

        this.socket.on('login_response', response => {

        })
    }
    render(){
        return(
            <Container>
                <Card>
                    <Input 
                        placeholder="Username"
                        lightTheme
                        round/>
                    <Input 
                        placeholder="Password"
                        lightTheme
                        round/>
                    <Button 
                        title='Submit'
                        onPress={() => this.props.navigation.navigate('MainStack') }
                    />
                    <TouchableNativeFeedback
                        useForeground
                        onPress={() => this.props.navigation.navigate('Register')}>
                            <Text>New here? Then register</Text>
                        </TouchableNativeFeedback>
                </Card>
            </Container>
        )
    }
}