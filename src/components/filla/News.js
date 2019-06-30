import React from 'react';
import {View, StyleSheet, ScrollView, NetInfo, TouchableNativeFeedback, Dimensions} from 'react-native'
import {ActionSheet, Left, Button, CardItem, Right, Body, Text} from 'native-base';
import { Tile, SearchBar, Avatar, Icon } from 'react-native-elements';
import fillaCategories from '../../data/fillaCategories';

import {collectNews} from '../../server/NewsHub';
import defaultStyles from '../../styles/DefaultStyles';

import Image from 'react-native-scalable-image';
const {width} = Dimensions.get('window');

export default class News extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            articles: [],
            fabActive: false,
            selected: 0,
            isOnline: null
        }
    }
    async componentDidMount(){
        // NetInfo.isConnected.addEventListener('connectionChange', this.onConnectionChanged);
    }

    async fetchNews(){
        NetInfo.getConnectionInfo()
        .then(async connectionInfo => {
            var isOnline = connectionInfo.type !== 'none';

            // Collecting News Data
            await collectNews(isOnline)
            .then(articles => this.setState({
                articles
            }))
            .catch((e) => console.error(e));
        })
    }
    onShowActionSheet(categories){
        ActionSheet.show({
            options: categories,
            cancelButtonIndex: 8,
            destructiveButtonIndex: 7,
            title: "Filter Out"
        },
        buttonIndex => {
            this.setState({
                clicked: categories[buttonIndex]
            });
        });
    };

    render(){
        const {post} = this.props;
        return (
            <TouchableNativeFeedback
                useForeground
                onPress={() => this.props.navigation.navigate("View", {filla: post})}
            >
                <View style={{marginBottom: 20}}>
                    <CardItem style={styles.topBarStyle}>
                        <Avatar 
                            rounded
                            source={{uri: 'http://localhost:8081/src/data/pics/trobot.jpg'}}
                            size={50}
                        />
                        <View style={{marginLeft: 15}}>
                            <Text style={defaultStyles.title}>{post.source.name}</Text>
                            <View style={defaultStyles.horizontal}>
                                <Icon name='globe' type='font-awesome' color='gray' fontSize={10} />
                                <Text note style={defaultStyles.subText}>{post.publishedAt}</Text>
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Text style={defaultStyles.title}>{post.title}</Text>
                    </CardItem>
                    <Image 
                        source={{uri: post.urlToImage}}
                        resizeMode='cover'
                        width={width}
                    />
                    <CardItem style={{flex: 1, justifyContent: 'space-evenly'}}>
                        <Icon name='thumbs-up' type='entypo'/>
                        <Icon name='comments-o' type='font-awesome' />
                    </CardItem>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject
    },
    imageContainer: {
        flex: 1
    }
});