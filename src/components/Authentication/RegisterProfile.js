import React from 'react';
import {Dimensions, TouchableNativeFeedback} from 'react-native';
import {Button, Text, Input, Image} from 'react-native-elements';
import {Container} from 'native-base';
var ImagePicker = require('react-native-image-picker');

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            path: {}
        }
    }
    selectImage = () => {
        var options = {
            title: 'Select Profile Picture',
            customButtons: [{name: 'pp', title: 'Pick a Profile Image'}],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel){}
            else if(response.error){}
            else if(response.customButton){}
            else{
                const src = {uri: response.uri};
                this.setState({
                    path: src
                })
            }
        })
    }
    render(){
        return(
            <Container>
                <Button
                    title='Finish'
                    onPress={() => this.selectImage()}/>
                {/* <Image
                    source={this.state.path}
                    resizeMode='cover'
                    width={250}
                    height={270}
                /> */}
                {/* </TouchableNativeFeedback> */}
                <Input 
                    placeholder='Name'
                    label='Name'
                />
            </Container>
        )
    }
}