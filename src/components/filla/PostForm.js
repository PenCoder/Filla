import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Icon} from 'react-native-elements';
import { View, Container, Form, Item, Label, Picker } from 'native-base';

export default class PostForm extends React.Component{
    render(){
        return (
            <Container>
                <Form>
                    <Item picker>
                        <Picker
                            mode='dropdown'
                            iosIcon={<Icon name='arrow-down' />}
                            >
                            
                        </Picker>
                    </Item>
                </Form>
            </Container>
        )
    }
}