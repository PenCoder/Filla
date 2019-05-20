import React, {Component} from 'react'
import {Dimensions, StyleSheet, FlatList} from 'react-native'
import {View} from 'native-base';
import {ListItem} from 'react-native-elements'
import ListSeparator from '../ListSeparator';
// Sample list
import People from '../../data/people'
import { createStackNavigator } from 'react-navigation';
import Chat from './Chat';

import Users from '../models/user';
import users from '../../data/users';

class Private extends Component {
    constructor(props){
        super(props);
    };
    
    state = {
        chats: People.chatters,
        separator: ListSeparator
    }

    loadUsers = () => {
        // var Store = require('react-native-local-mongodb')
        //     , db = new Store({filename: 'key', auto: true});
        // db.insert(users.users, (err, doc) => {

        // });
        // users.users.map(userData => {
        //     const user = new User(userData);
        //     user.save();
        // });
    }

    render() {
        const {chats, separator} = this.state;
        // this.loadUsers;
        return (
            <View>
                <FlatList
                    data={chats}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={separator}
                    renderItem={({item}) =>
                    <ListItem
                        roundAvatar
                        leftAvatar={{source: {uri: item.PP}}}
                        title={item.Name}
                        subtitle='Message chat'
                        containerStyle={{borderBottomWidth: 0}}
                        bottomDivider={true}
                        onPress={() => {
                            this.props.navigation.navigate("Chat")
                        }}/>
                    }
                    keyExtractor={item => item.Id}/>
            </View>
        )
    }
};

const PrivateStack = createStackNavigator(
    {
        Private: {
            screen: Private,
            navigationOptions: {header: null}
        },
        Chat: {
            screen: Chat,
            navigationOptions: {header: null}
        }
    }
)

export default PrivateStack;