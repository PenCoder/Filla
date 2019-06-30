import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {View} from 'native-base'
import ListSeparator from '../ListSeparator';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Group extends Component {
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
