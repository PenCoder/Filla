import React from 'react';
import {View, StyleSheet, ScrollView, NetInfo, TouchableNativeFeedback} from 'react-native'
import {ActionSheet, Left, Button, CardItem, Right, Body} from 'native-base';
import { Tile, Icon, SearchBar } from 'react-native-elements';
import fillaCategories from '../../data/fillaCategories';

import {collectNews} from '../../data/Newsfile';
import defaultStyles from '../../styles/DefaultStyles';

export default class News extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            articles: [],
            fabActive: false,
            selected: 0,
            isOnline: null
        }
        this.categories = fillaCategories.categories
    }
    async componentWillMount(){
    }
    async componentDidMount(){
        NetInfo.isConnected.addEventListener('connectionChange', this.onConnectionChanged);
        
        await this.fetchNews();
    }
    onConnectionChanged = (isOnline) => {
        this.setState({isOnline});
    };

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
    // Category Picker Value Change
    onCategoryChange(value){
        this.setState({
            selected: value
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
        const {articles} = this.state;
        return (
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <View>
                    {/* <View>
                        <Carousel
                            data={articles}
                            itemWidth={250}
                            sliderWidth={250}
                            renderItem={(item) =>{
                                <Tile
                                    imageSrc={{uri: item.urlToImage}}
                                />
                            }}
                        />
                    </View> */}
                    <CardItem cardBody style={styles.topBarStyle}>
                        <Button light
                            onPress={() => this.onShowActionSheet(this.categories)}>
                            <Icon name='filter' type='font-awesome' />
                        </Button>
                        <Right>
                            <SearchBar
                                placeholder='Search'
                                platform='android'
                                round={true}
                                containerStyle={{...defaultStyles.search}} />
                            {/* <Button light rounded>
                                <Icon name='search' type='material-icons'/>
                            </Button> */}
                        </Right>
                    </CardItem>
                    {
                        articles.map((news, index) =>
                            <Tile 
                                imageSrc={{uri: news.urlToImage}}
                                title={news.title}
                                key={index}
                                icon={{type: 'font-awesome', name: 'soccer-ball-o', color: '#9E9D24'}}
                                titleStyle={styles.titleStyle1}
                                iconContainerStyle={styles.tileIconContainer}
                                contentContainerStyle={styles.tileContentContainer}
                                onPress={() => this.props.navigation.navigate("View", {filla: news})}>
                            <View style={{flex: 1, justifyContent: 'space-evenly', flexDirection: 'row'}}>
                                <Icon name='thumbs-up' type='entypo'/>
                                <Icon name='comments-o' type='font-awesome'/>
                            </View>
                            </Tile>
                        )
                    }
                    </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scroll: {
        padding: 5
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
    tileStyle1: {
        color: '#fff',
        opacity: 1
    },
    tileIconContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start'
    },
    tileContentContainer: {
        opacity: 0.9, 
        marginLeft: 20,
        marginRight: 5, 
        backgroundColor: '#aaa',
        marginTop: -80,
        marginBottom: 5
    },
    topBarStyle: {
        alignItems: 'center'
    }
});