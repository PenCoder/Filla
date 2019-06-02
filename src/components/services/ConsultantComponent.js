import React from 'react';
import {TouchableNativeFeedback, StyleSheet, Image, Dimensions} from 'react-native';
import {CardItem, Body, Text, Badge, Icon} from 'native-base';
import { Card } from 'react-native-elements';

const {width, height} = Dimensions.get('window');

export default class ConsultantComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {person} = this.props;
        const width = (width * 0.9)
        return(
            <TouchableNativeFeedback
                useForeground>
            <Card style={styles.card}>
                <Body>
                    <Image source={{uri: person.PP}}
                            style={{width: 180, height: 190, borderRadius: 10}}/>
                    <Text>{person.Name}</Text>
                </Body>
                <CardItem cardBody>
                    <Body>
                        <Text> </Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Badge>
                        <Icon  />
                    </Badge>
                    <Badge>
                        <Icon  />
                    </Badge>
                </CardItem>
            </Card>
        </TouchableNativeFeedback>
        )
    }
}
const styles = StyleSheet.create({
    card: {
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2
    }
})