import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native'
import {Root, ActionSheet, Container, Fab, StyleProvider, getTheme, Badge, CardItem, Button} from 'native-base';
import { Tile, Icon, SearchBar } from 'react-native-elements';
import material from '../../../native-base-theme/variables/material';

// Filla Component

// Fillas
import fillaHub from '../../data/fillas'
import fillaCategories from '../../data/fillaCategories'
import SportsComponent from './SportsComponent';

import PostModel from '../models/PostModel';
import PostHub from '../../server/PostHub';
import AsyncStorage from '@react-native-community/async-storage';

import FillaService from '../../server/FillaService';
import News from './News';
// Filla Component


export default class Fillas extends React.Component{
    constructor(props){
        super(props);
        this.postModel = new PostModel();
        this.postHub = new PostHub();
        this.postHub.collectPosts.bind(this);
        this.postHub.savePost.bind(this);
        this.state = {
            selected: 0,
            fabActive: false,
            posts : []
        }
        this.fillaService = new FillaService();
    }
    
    // Category Picker Value Change
    onCategoryChange(value){
        this.setState({
            selected: value,
            fabActive: false
        })
    }
    onShowActionSheet(categories){
        ActionSheet.show({
            options: categories,
            cancelButtonIndex: 7,
            destructiveButtonIndex: 8,
            title: "Select Categories"
        },
        buttonIndex => {
            this.setState({
                clicked: categories[buttonIndex]
            });
        });
    };
    async componentWillMount(){
        // await this.seedPosts();
        // var posts = await this.postHub.collectPosts();
        var posts = await this.fillaService.allFilla()
        this.setState({
            posts : posts.sort((a, b) =>{
                b.publishedAt - a.publishedAt
            })
        })
    }
    async componentDidMount(){
        // var posts = await this.postHub.collectPosts();
        // this.setState({
        //     posts : posts.reverse()
        // })
    }
    async seedPosts(){
        var posts = [];
      
        fillaHub.map((post, index) => {
            this.postModel = {
                title: post.header,
                text: post.text,
                urlToImage: post.urlToImage,
                postCategory: post.cat,
                publishedAt: new Date(),
                updated: new Date()
            }
            posts.push(this.postModel);
        })
        await this.postHub.savePost(posts);
    }
    render(){
        const {categories} = fillaCategories;
        // const {navigate} = this.props;
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <ScrollView
                        contentContainerStyle={styles.scroll}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        <View>
                        <CardItem>
                            <Button light
                                style={styles.filterButton}
                            >
                                <Icon name='filter' type='font-awesome' />
                            </Button>
                            <SearchBar round 
                                lightTheme 
                                containerStyle={styles.searchContainer}
                            />
                        </CardItem>
                        {
                            this.state.posts.map((post, index) =>{ 
                                var date = new Date(post.publishedAt)
                                if(!Boolean(post.description)){
                                    return(
                                    <View key={index} style={{marginTop:10, backgroundColor: '#fff'}}>
                                        <Tile
                                            featured
                                            activeOpacity={1}
                                            key={index}
                                            title={post.title}
                                            titleStyle={styles.tileTitle}
                                            imageSrc={{uri: post.urlToImage ? post.urlToImage : '..' }}
                                            // caption={post.text}
                                            captionStyle={styles.tileCaption}/>

                                        <View style={{flex: 1, justifyContent: 'space-evenly', flexDirection: 'row'}}>
                                            <Icon name='thumbs-up' type='entypo' color='gray' />
                                            <Icon name='comments-o' type='font-awesome' color='gray'/>
                                            <Text>{date.toDateString()}-{date.toLocaleTimeString()}</Text>
                                        </View>
                                        <View>
                                            
                                        </View>
                                    </View>
                                    )
                                }else{
                                    return(
                                        <News 
                                            post={post}
                                            navigation={this.props.navigation}
                                            key={index}
                                        />
                                    )
                                }
                                }
                            )
                        }
                        </View>
                    </ScrollView>
                    {/* <Fab 
                    raised
                    active={this.state.fabActive}
                    position="topRight"
                    direction="left"
                    containerStyle={{}}
                    style={{backgroundColor: '#8BC34A'}}
                    onPress={() => this.setState({ fabActive: !this.state.fabActive})}>
                        <Icon name='share' type='ant-design' color='#fff' />
                        <Button bordered rounded style={{backgroundColor: 'white'}}>
                            <Icon name="add-circle-outline" style={{color: '#26A69A', fontSize: 18}}/>
                        </Button>
                        <Button style={{backgroundColor: 'white'}}
                            rounded bordered
                            onPress={() =>
                                this.onShowActionSheet(categories)
                            }>
                            <Icon name="list" />
                        </Button>
                        <Button rounded bordered style={{backgroundColor: 'white'}}>
                            <Text>r</Text>
                        </Button>
                    </Fab> */}
                    <Fab
                        active={this.state.fabActive}
                        position='bottomRight'
                        direction='up'
                        style={{backgroundColor: '#8BC34A'}}
                        onPress={() => this.setState({ fabActive: !this.state.fabActive})}>
                        <Icon name='angle-double-up' type='font-awesome' color='#fff' />
                        <Button 
                            style={{backgroundColor: '#8BC34A'}}
                            onPress={() => this.props.navigation.navigate('PostForm')}>
                            <Icon name='add' type='material' color='#fff' />
                        </Button>
                    </Fab>
                </Container>
                
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    scroll: {
        padding: 5,
        backgroundColor: '#f4f4f4'
    },
    floatingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        opacity: 0.5
    },
    floatingButton: {
        // backgroundColor: '#26A69A',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    tileTitle: {
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        width: 300,
        marginBottom: 0
    },
    tileCaption: {
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        fontSize: 18,
        width: 300,
        marginTop: 0,
        paddingTop: 20,
        paddingLeft: 3,
        paddingRight: 3,
        textAlign: 'left'
    },
    searchContainer: {
        padding: 0,
        backgroundColor: 'transparent'
    }, 
    filterButton: {
        paddingHorizontal: 15,
    }
});