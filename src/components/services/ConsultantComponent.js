import React from 'react';
import {TouchableNativeFeedback, StyleSheet, Image, Dimensions} from 'react-native';
import {CardItem, Body, Text, Badge, Icon, Card} from 'native-base';
import { Rating } from 'react-native-ratings';

const {width, height} = Dimensions.get('window');

export default class ConsultantComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {person} = this.props;
        const imageWidth = (width * 0.32);
        const imageHeight = (width * 0.35);
        return(
            <TouchableNativeFeedback
                useForeground>
            <Card style={styles.card}>
                <Body>
                    <Image source={{uri: person.PP}}
                            style={{width: imageWidth, height: imageHeight, borderRadius: 10}}/>
                    <Text>{person.Name}</Text>
                </Body>
                <CardItem cardBody>
                    <Body>
                        <Text> </Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Rating
                        type='star'
                        imageSize={15}
                    />
                </CardItem>
            </Card>
        </TouchableNativeFeedback>
        )
    }
}
const styles = StyleSheet.create({
    card: {
        paddingTop: 2,
        margin: 0
    }
})