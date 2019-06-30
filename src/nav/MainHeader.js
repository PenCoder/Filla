import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import { CardItem, Text, Title, Icon } from 'native-base';
import { Avatar } from 'react-native-elements';

import defaultStyles from '../styles/DefaultStyles';

export default class MainHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {header, previous} = this.props
        return(
            <View style={defaultStyles.evenSpacing}>
                
                <Text>@filla</Text>
                <Avatar  
                    source={{uri: 'http://localhost:8081/src/data/pics/tiger-woods.jpg'}}
                    size='large'
                    showEditButton={false}
                    rounded
                />
                <Text>user</Text>
            </View>
        )
    }
}