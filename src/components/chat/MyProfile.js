import React, {Component} from 'react'
import {StyleSheet, Image, Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native'
import {Container, Body, Text, Button, Card, CardItem} from 'native-base'

// My Profile Data
import Personal from '../../data/myprofile'
import { createStackNavigator } from 'react-navigation';
import { Input, Icon } from 'react-native-elements';

const {width} = Dimensions.get('window');

export default class MyProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    // state = {
    //     profilePic: require('../data/pics/tiger-woods.jpg')
    // }
    render() {
        return (
            <Container>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView
                        behavior='padding'
                        keyboardVerticalOffset={10}>
                        <Card>
                            <CardItem>

                                <Image 
                                    style={styles.profilePic} 
                                    source={{uri: Personal.PP}}
                                    resizeMode='contain'
                                    // source={Personal.PP}
                                    // source={require('../data/pics/tiger-woods.jpg')}
                                />
                            </CardItem>
                            <CardItem header>
                                <Input 
                                    leftIcon={<Icon name='user' type='font-awesome' color='gray'/>}
                                    value={Personal.Name}
                                    editable={false}
                                    inputStyle={{fontWeight: 'bold'}}
                                />
                                {/* <Text>{Personal.Name}</Text> */}
                            </CardItem>
                            <CardItem>
                            <Body>
                                <Input 
                                    rightIcon={<Icon name='mode-edit' type='material' color='gray'/>}
                                />
                                <Input 
                                    rightIcon={<Icon name='mode-edit' type='material' color='gray'/>}
                                />
                                <Input 
                                    rightIcon={<Icon name='mode-edit' type='material' color='gray' />}
                                />
                            </Body>
                                
                            </CardItem>
                            
                        </Card>
                    </KeyboardAvoidingView>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        marginLeft: 10,
        marginRight: 10,
        height: '100%'
    },
    // main: {
    //     flex: 1,
    //     // justifyContent: 'center',
    //     alignItems: 'center'
    // },
    profilePic: {
        width: (width * 0.8),
        height: (width * 0.8),
        flex: 1,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5
    },
});
