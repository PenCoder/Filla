import React from 'react';
import {StyleSheet, TouchableNativeFeedback, KeyboardAvoidingView} from 'react-native';
import {Button, Text, Input, Card, Avatar} from 'react-native-elements';
import { Container, StyleProvider, Body, CardItem } from 'native-base';
import ImagePicker from 'react-native-image-picker';
// Socket.io: client
import openSocket from 'socket.io-client';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
//
import ProfileModel from '../models/ProfileModel';
import UserModel from '../models/UserModel';
import UserService from '../../server/UserService';

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.profileModel = new ProfileModel();
        this.userModel = new UserModel();
        
        this.state = {
            response: this.userModel.response,
            path: null
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
        var res = await this.service.registerUser(this.userModel);
        const {success, pwd, username, contact, error} = res
        if (pwd || username || error || contact){
            this.setState({ response : res });
        }
        else if (success == 'success'){
            this.props.navigation.navigate('MainStack');
        }
        

        // this.socket.emit('register', data)
    }
    setValue = (input) => {
    }
    getImage = () => {
        var options = {
            title: 'Select Profile Picture',
            customButtons: [{name: 'pp', title: 'Remove Image'}],
            takePhotoButtonTitle: 'Take Photo',
            chooseFromLibraryButtonTitle: 'Browse Library',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel){}
            else if(response.error){}
            else if(response.customButton){
                this.postModel.urlToImage = null
                this.setState({
                    path: this.userModel.urlToImage
                })
            }
            else{
                this.userModel.urlToImage = response.uri
                this.setState({
                    path: this.userModel.urlToImage
                })
            }
        })

    }
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                
                <Card>
                    <KeyboardAvoidingView
                            behavior='position'
                            keyboardVerticalOffset={50}
                            >
                        <CardItem>
                            <Body>
                                <Avatar
                                    size='xlarge'
                                    source={Boolean(this.state.path) ? {uri: this.state.path} : {uri: '..'}}
                                    showEditButton={true}
                                    editButton={{size: 30, iconName: 'camera', iconType: 'material'}}
                                    onEditPress={() => this.getImage()}
                                />
                            </Body>
                        </CardItem>
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
                            keyboardType='numbers-and-punctuation'
                        />
                        <Input
                            onChangeText={value => {
                                this.userModel.pwd = value
                            }}
                            placeholder='Password'
                            leftIcon={{ type: 'material-icons', name: 'security', color: '#8BC34A'}}
                            errorMessage={this.state.response.pwd}
                            secureTextEntry
                        />
                        <Input
                            onChangeText={value => this.setState({confirmPwd: value.trim()})}
                            placeholder='Confirm Password'
                            secureTextEntry
                        />
                        <Text style={{color: 'red'}}>{this.state.response.error}</Text>
                        
                        <Button 
                            title='Submit'
                            onPress={() => this.onSubmit()}
                        />
                        <TouchableNativeFeedback
                            useForeground
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text>Registered already? Login</Text>
                        </TouchableNativeFeedback>

                        <Text>{this.state.response.success}</Text>
                    </KeyboardAvoidingView>
                </Card>
                
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {

    }
})