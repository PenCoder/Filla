import React from 'react'
import {StyleSheet, Dimensions} from 'react-native';
import {Text, Card, CardItem, View, Title, Icon, Thumbnail, Body} from 'native-base';
// import { Image } from 'react-native-elements';
import Image from 'react-native-scalable-image';
import defaultStyles from '../../styles/DefaultStyles';

const {width} = Dimensions.get('window')

export default class FillaView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    };

    render(){
        const {navigation} = this.props;
        const filla = navigation.getParam("filla");
        // const icon = navigation.getParam("icon");
        return (
            <View>
                <Card >
                    <CardItem header>
                        {/* <Icon name={icon.icon} /> */}
                        <Text style={defaultStyles.title}>{filla.title}</Text>
                    </CardItem>
                    {/* <CardItem>
                        <Thumbnail source={{uri: filla.media}}/>
                        <Text>poster</Text>
                    </CardItem> */}
                    <CardItem cardBody>
                        <Image
                            source={{uri: filla.urlToImage}} 
                            resizeMode='cover'
                            width={width}/>
                    </CardItem>
                    <CardItem>
                        <Text style={defaultStyles.contentText}>{filla.content}</Text>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        flex: 1
    },
    imageContainer: {
        position: 'relative',
        flex: 1
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})