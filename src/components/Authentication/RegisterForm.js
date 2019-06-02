import React from 'react';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {Button, Text, Input, Card} from 'react-native-elements';
import { Container, StyleProvider } from 'native-base';
// Socket.io: client
import openSocket from 'socket.io-client';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
//
import ProfileModel from '../models/ProfileModel';
import UserModel from '../models/UserModel';
import UserService from '../../server/UserService'

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.profileModel = new ProfileModel();
        this.userModel = new UserModel();
        
        this.state = {
            response: this.userModel.response
        }

        this.service = new UserService();
        // Server connection
        this.socket = openSocket('http://169.254.80.80:8000');
        this.socket.on('register_response', () => {

        })
    };
    validate(){
        
    }
    async onSubmit(){
        // Get state values
        var userModel = this.userModel;
        var profileModel = this.profileModel;
        const data = {userModel, profileModel};

        // var res = await this.service.registerUser(userModel);
        // this.setState({ response : res });

        this.socket.emit('register', data)

        this.props.navigation.navigate('RegisterProfile')
    }
    setValue = (input) => {
    }
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Card>
                    <Input 
                        onChangeText={value => { this.userModel.username = value }}
                        placeholder='Username'
                        label='Username'
                        leftIcon={{type: 'font-awesome', name: 'user-o', color: '#8BC34A'}}
                        errorMessage={this.state.response.username}
                    />
                    <Input
                        onChangeText={value => {
                            this.userModel.contact = value
                        }}
                        placeholder='Phone Number'
                        leftIcon={{type: 'simple-line-icons', name: 'phone', color: '#8BC34A'}}
                        errorMessage={this.state.response.contact}
                        keyboardType='number-pad'
                    />
                    <Input
                        onChangeText={value => {
                            this.userModel.pwd = value
                        }}
                        placeholder='Password'
                        leftIcon={{ type: 'material-icons', name: 'security', color: '#8BC34A'}}
                        errorMessage={this.state.response.pwd}
                    />
                    <Input
                        onChangeText={value => this.setState({confirmPwd: value.trim()})}
                        placeholder='Confirm Password'
                    />
                    <Button 
                        title='Submit'
                        onPress={() => this.onSubmit()}
                    />
                    <TouchableNativeFeedback
                        useForeground
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text>{this.profileModel.name}</Text>
                    </TouchableNativeFeedback>

                    <Text>{this.state.response.success}</Text>
                </Card>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {

    }
})