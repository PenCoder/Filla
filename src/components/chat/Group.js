import React, {Component} from 'react'
import {Dimensions, StyleSheet, FlatList} from 'react-native'
import {View} from 'native-base'
import {ListItem} from 'react-native-elements'
import ListSeparator from '../ListSeparator';
// Sample list
import { createStackNavigator } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';

const GroupChat = () => {
    return (
        <GiftedChat />
    )
}

class Group extends Component {
    constructor(props){
        super(props);
    };
    
    state = {
        chats: [],
        separator: ListSeparator
    }

    render() {
        const {chats, separator} = this.state;
        return (
            <View>
                <FlatList
                    data={chats}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={separator}
                    // renderItem={({item}) =>
                    // <ListItem
                    //     roundAvatar
                    //     leftAvatar={{source: {uri: item.PP}}}
                    //     title={item.Name}
                    //     subtitle='Message chat'
                    //     containerStyle={{borderBottomWidth: 0}}
                    //     bottomDivider={true}
                    //     onPress={() => {
                    //         this.props.navigation.navigate("Chat")
                    //     }}/>
                    // }
                    // keyExtractor={item => item.Id}
                    />
            </View>
        )
    }
};

const GroupStack = createStackNavigator(
    {
        Group: {
            screen: Group,
            navigationOptions: {header: null}
        },
        GroupChat: {
            screen: GroupChat,
            navigationOptions: {header: null}
        }
    }
)

export default GroupStack;