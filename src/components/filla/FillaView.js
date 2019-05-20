import React from 'react'
import {StyleSheet, Image} from 'react-native';
import {Text, Card, CardItem, View, Title, Icon, Thumbnail} from 'native-base';

export default class FillaView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    };

    render(){
        const {navigation} = this.props;
        const filla = navigation.getParam("filla");
        const icon = navigation.getParam("icon");
        return (
            <View>
                <Card>
                    <CardItem header>
                        <Icon name={icon.icon} />
                        <Title>{filla.Header}</Title>
                    </CardItem>
                    {/* <CardItem>
                        <Thumbnail source={{uri: filla.media}}/>
                        <Text>poster</Text>
                    </CardItem> */}
                    <CardItem cardBody>
                        <Image source={{uri: filla.media}} 
                            style={{
                                    flex: 1,
                                    height: undefined,
                                    width: '95%',
                                    borderRadius: 10,
                                }} />
                    </CardItem>
                    <CardItem cardBody>
                        <Text>{filla.text}</Text>
                    </CardItem>
                </Card>
            </View>
        )
    }
}