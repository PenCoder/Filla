import React from 'react';
import {ImageBackground, StyleSheet, TouchableNativeFeedback, KeyboardAvoidingView} from 'react-native';
import { Container, CardItem, StyleProvider, Card } from 'native-base';
import { Input, Text, Button } from 'react-native-elements';
// Socket io: client
import openSocket from 'socket.io-client';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import defaultStyles from '../../styles/DefaultStyles';

import UserModel from '../models/UserModel';
import UserService from '../../server/UserService';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);

        this.socket = openSocket('http://169.254.80.80:8000');

        this.socket.on('login_response', response => { });
        
        this.userModel = new UserModel();
        this.userService = new UserService();

        this.state = {
            response: this.userModel.response
        }
    }
    onSubmit = async () => {
        var response = await this.userService.loginUser(this.userModel);
        const {error, pwd, username, success} = response
        if (Boolean(error) || pwd || username){
            this.setState({
                response
            })
        }
        else if (success){
            this.props.navigation.navigate('MainStack');
        }
        // }else{
        //     // this.props.navigation.navigate('MainStack');
        // }

    }

    render(){
        return(
            <StyleProvider style={getTheme(material)}>
                <ImageBackground
                        source={{uri: 'http://localhost:8081/src/data/pics/hourglass.png'}}
                        style={{height: '100%', width: '100%'}}>
                    <Card style={[styles.centerContent, {backgroundColor: 'rgba(100, 200, 120, 0.9)',}]}>
                            <KeyboardAvoidingView
                                behavior='height'
                                keyboardVerticalOffset={50}
                                contentContainerStyle={{backgroundColor: 'transparent'}}
                                >
                                <CardItem style={defaultStyles.transparent}>
                                    <Text style={{color: 'red'}}>{this.state.response.error}</Text>
                                </CardItem>
                                <CardItem style={defaultStyles.transparent}>
                                    <Input 
                                        placeholder="Username"
                                        lightTheme
                                        errorMessage={this.state.response.username}
                                        leftIcon={{type: 'font-awesome', name: 'user-o', color: 'gray'}}
                                        onChangeText={text => this.userModel.username = text}
                                        containerStyle={defaultStyles.inputContainer}
                                    />
                                </CardItem>
                                <CardItem style={defaultStyles.transparent}>
                                    <Input 
                                        placeholder="Password"
                                        lightTheme
                                        errorMessage={this.state.response.pwd}
                                        leftIcon={{type: 'simple-line-icons', name: 'security', color: 'gray'}}
                                        onChangeText={text => this.userModel.pwd = text}
                                        secureTextEntry
                                        containerStyle={defaultStyles.inputContainer}
                                    />
                                </CardItem>
                                <CardItem style={defaultStyles.transparent}>
                                    <Button 
                                        buttonStyle={{backgroundColor: '#8BC34A'}}
                                        title='Submit'
                                        onPress={() => this.onSubmit()}
                                    />
                                </CardItem>
                                <CardItem style={[defaultStyles.translucent1, {marginHorizontal: 20}]}>
                                    <TouchableNativeFeedback
                                        useForeground
                                        onPress={() => this.props.navigation.navigate('Register')}>
                                            <Text>New here? Then register</Text>
                                    </TouchableNativeFeedback>
                                </CardItem>
                            </KeyboardAvoidingView>
                        </Card>
                    </ImageBackground>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    }
})