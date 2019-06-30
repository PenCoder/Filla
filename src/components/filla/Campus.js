import React from 'react';
import {View, ScrollView, Dimensions, StyleSheet} from 'react-native';
import {Text, Container} from 'native-base';
import { Tile } from 'react-native-elements';

import PostHub from '../../server/PostHub';

const {width, height} = Dimensions.get('window');

export default class Campus extends React.Component{
    constructor(props){
        super(props)
        this.postHub = new PostHub();
        
        this.postHub.collectPosts.bind(this);
        this.state = {
            posts : []
        }
    }
    calcImageWidth = () => {
        
    }
    async componentDidMount(){
        posts = await this.postHub.collectPosts();
        this.setState({posts})
    }
    render(){
        const {posts} = this.state;
        var tileWidth = (width / 3) - 5
        var tileHeight = width / 2
        return (
            <Container>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    {
                        posts.map((post, index) => 
                            <Tile
                                width={tileWidth}
                                key={index}
                                imageSrc={{uri: post.urlToImage ? post.urlToImage : '..' }}
                                // imageContainerStyle={styles.tileImage}
                                contentContainerStyle={styles.tileContentContainer}
                                containerStyle={styles.tileContainer}>
                                <View>
                                    <Text>{post.title}</Text>
                                </View>
                            </Tile>
                        )
                    }
                </ScrollView>
            </Container>
        )
    }
};

const styles = StyleSheet.create({
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tileImage: {
        resizeMode: 'center'
    },
    tileContentContainer: {
        // minHeight: 20
    },
    tileContainer: {
        borderTopLeftRadius: 5,
        borderTopLeftRadius: 5,
        minHeight: width / 2,
        margin: 1,
        // borderTopRadius: 5
    }
})