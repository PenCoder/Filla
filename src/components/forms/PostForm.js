import React from 'react';
import {StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView, Text, TouchableNativeFeedback} from 'react-native';
import {TextInput, Tile, Button, Avatar} from 'react-native-elements';
import { View, Container, Form, Item, Label, Input, Textarea, Card, Picker, CardItem, Icon } from 'native-base';

var ImagePicker = require('react-native-image-picker');

const {width, height} = Dimensions.get('window');

import fillaCategories from '../../data/fillaCategories';

import PostModel from '../models/PostModel';
import PostHub from '../../server/PostHub'

import defaultStyles from '../../styles/DefaultStyles';

export default class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            path: null,
            selectedCategory: null,
            feedback: '...'
        }
        this.postModel = new PostModel();
        this.postHub = new PostHub();

        // Binding
        this.submitPost.bind(this);
        this.postHub.collectPosts.bind(this);
        this.postHub.savePost.bind(this);
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
                    path: this.postModel.urlToImage
                })
            }
            else{
                this.postModel.urlToImage = response.uri
                this.setState({
                    path: this.postModel.urlToImage
                })
            }
        })

    }
    clearImage = () => {
        this.postModel.urlToImage = null;
        this.setState({path: this.postModel.urlToImage})
    }
    submitPost = async () => {
        saved = false;
        try{
            const {title, text, media, postCategory} = this.postModel
            if(postCategory)
                {
                    if (title || media || text){
                        var postTitle = Boolean(title) ? title.trim().length: 0;
                        var postText = Boolean(text) ? text.trim().length : 0 ;
                        var postMedia = Boolean(media) ? media.trim().length : 0;
                        if(postTitle > 0 || postText > 0 || postMedia > 0)
                        {
                            this.postModel.publishedAt = new Date();
                            this.postModel.updated = new Date();
                            saved = await this.postHub.savePost(this.postModel);
                            if (saved){
                                this.props.navigation.pop();
                            }
                        }
                    }
                }
        }catch(error){
            saved = false;
        }finally{
            if (saved){
                this.props.navigation.pop();
            }
        }
    }
    selectCategory = (value, index) => {
        this.postModel.postCategory = value.text
        this.setState({
            selectedCategory: value
        })
    }
    render(){
        const {categories} = fillaCategories;
        return (
            <Card style={{flex: 1}}>
                <KeyboardAvoidingView
                    behavior='height'
                    keyboardVerticalOffset={50}
                    >
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                    <Form style={{alignItems: 'center', alignContent: 'center'}}>
                    <CardItem>
                            <Item picker style={{width: 200}}>
                                <Picker
                                    mode='dropdown'
                                    iosIcon={<Icon name='arrow-down' />}
                                    placeholder='Select Category'
                                    selectedValue={this.state.selectedCategory}
                                    onValueChange={(itemValue, itemPosition) => this.selectCategory(itemValue, itemPosition)}
                                    >
                                    {
                                        categories.map((category, index) =>  {
                                            return (
                                                <Picker.Item 
                                                    label={category.text}
                                                    icon={<Icon name={category.icon} />}
                                                    value={category}
                                                    key={index}
                                                />
                                            )
                                        }) 
                                    }           
                                </Picker>
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Avatar
                                source={Boolean(this.state.path) ? {uri: this.state.path} : {uri: '...'}}
                                size={ (width * 0.85) }
                                showEditButton={true}
                                editButton={ {size: 40, name: 'camera', type: 'font-awesome'}}
                                onEditPress={() => this.getImage()} 
                            />
                        </CardItem>
                        <CardItem>
                            <Item bordered style={styles.input}>
                                <Input 
                                    onChangeText={text => {this.postModel.title = text}}
                                    placeholder='Type title here...'
                                />
                            </Item>
                        </CardItem>
                            <Item>
                                <Textarea 
                                    style={styles.textArea}
                                    multiline={true}
                                    editable={true}
                                    placeholder='Enter Text here..'
                                    onChangeText={text => {
                                        this.postModel.text = text
                                    }}
                                />
                            </Item>
                            <Item>
                                <Button title='Post'
                                    style={{alignItems: 'flex-end'}}
                                    onPress={() => this.submitPost() }
                                />
                            </Item>
                        <CardItem>
                            <Text>{this.state.feedback}</Text>
                        </CardItem>
                        <Item>
                            
                        </Item>
                    </Form>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    textArea: {
        borderRadius: 5,
        borderWidth: 0.5,
        height: 150,
        width: (width * 0.85),
        borderColor: '#aaa',
        fontSize: 18,
        lineHeight: 25,
        color: '#555'
    },
    tileImageContainer: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#aaa'
    },
    tileContentContainer: {
        backgroundColor: 'rgba(250, 250, 250, 0.3)',
        marginTop: -50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    input: {
        width: (width * 0.85),
        margin: 10
    },
    tileIconContainer: {
        borderWidth: 2, 
        borderRadius: 150, 
        padding: 20, 
        borderColor: '#aaa',
        opacity: 0.8
    },
    tileIconContainer2: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        margin: 10
    },
});