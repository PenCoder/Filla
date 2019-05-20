import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import {Root, Content, Body, ActionSheet, Button, Text, Icon, Card, Thumbnail, Row, Picker, Fab, CardItem, CheckBox, ListItem} from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';

// Fillas
import fillaHub from '../../data/fillas'
import fillaCategories from '../../data/fillaCategories'
import PublicFilla from './PublicFilla';
import { createStackNavigator, withNavigation } from 'react-navigation';
import FillaView from './FillaView';

import SocketIOClient from 'socket.io-client';

import {collectNews} from '../../data/Newsfile';

class Public extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            articles: [],
            fabActive: false,
            selected: 0
        }
        this.fetchNews = this.fetchNews.bind(this);
    }
    componentDidMount(){
        this.fetchNews
    }
    fetchNews(){
        collectNews()
        .then(articles => this.setState({
            articles
        }))
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
    render(){
        const {categories} = fillaCategories;
        const {navigate} = this.props.navigation;
        const {articles} = this.state;
        return (
            <Root>
                <ListItem>
                    <CheckBox checked={false}>
                        <Body>
                            <Text>Political</Text>
                        </Body>
                    </CheckBox>
                    {/* <CheckBox checked={false}>
                        <Body>
                            <Text>Health</Text>
                        </Body>
                    </CheckBox>
                    <CheckBox checked={false}>
                        <Body>
                            <Text>Religious</Text>
                        </Body>
                    </CheckBox> */}
                </ListItem>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <View>
                    {
                        // fillaHub.map((filla, index) => 
                        //     <PublicFilla
                        //         filla={filla}
                        //         icon={categories.find(f => f.text == filla.cat)}
                        //         key={index}
                        //         navigate={navigate}
                        //     />
                        // )
                        articles.map((news, index) =>
                            <PublicFilla
                                filla={news}
                                key={index}
                                navigate={navigate}
                            />
                        )
                    }
                    </View>
                </ScrollView>
            <Fab 
                    raised
                    active={this.state.fabActive}
                    position="topRight"
                    direction="left"
                    containerStyle={{}}
                    style={{backgroundColor: '#8BC34A'}}
                    onPress={() => this.setState({ fabActive: !this.state.fabActive})}>
                        <Icon name="hourglass"/>
                        <Button bordered rounded style={{backgroundColor: 'white'}}>
                            <Icon name="md-add" style={{color: '#26A69A', fontSize: 18}}/>
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
                    </Fab>
            </Root>
        )
    }
}

// Public Fill view Stack
const PublicStack = createStackNavigator(
    {
        Public: {
            screen: Public,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

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
    }
});

export default PublicStack;

{/* <Picker
    mode="dropdown"
    iosHeader="category"
    selectedValue={this.state.selected}
    placeholder="Category"
    onValueChange={this.onCategoryChange.bind(this)}>
    {
        categories.map((cat, index) => {
            return (
                <Picker.Item value={index} key={index} label={cat}>
                    <Icon name="soccer"/>
                </Picker.Item>
            )
        })
    }
</Picker> */}