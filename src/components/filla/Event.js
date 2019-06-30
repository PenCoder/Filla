import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback, Image, Dimensions, Text, ScrollView} from 'react-native';
import { Card, CardItem , ActionSheet} from 'native-base';
import { Avatar } from 'react-native-elements';
import Modal from 'react-native-modal';

const {width, height} = Dimensions.get('window');

// Temp Data Source
import FillaService from '../../server/FillaService';
import EventView from './EventView';

export default class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
        this.fillaService = new FillaService();
    }
    async componentDidMount(){
        var events = await this.fillaService.getPosts();
        this.setState({events})
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
    openEventViewPop = () =>{
        this.eventViewPop.setNativeProps({
            isVisible: true
        })
    }
    render(){
        return (
            <View style={{paddingVertical: 10}}>

                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    { this.state.events.map((event, index) =>{
                        return(
                            <TouchableNativeFeedback
                                useForeground
                                onPress={this.openEventViewPop}
                            >
                                <View style={styles.main}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image}
                                            source={{uri: event.urlToImage}}
                                        />
                                    </View>
                                    <Text style={styles.title} numberOfLines={1}>{event.title}</Text>
                                    <Text style={styles.content} numberOfLines={1}>{event.text}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        )
                        })
                    }
                </ScrollView>
                {/* <Modal
                    ref={modal => this.eventViewPop = modal}
                    isVisible={this.eventViewPop.isVisible}
                >
                    <EventView />
                </Modal> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginLeft: 10, 
        marginBottom: 10,
        width: ((width - 10) / 3) - 10,
        height: ((height - 40) / 3) - 10
    },
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageContainer: {
        flex: 1
    },
    image: {
        borderRadius: 10,
        ...StyleSheet.absoluteFillObject
    },
    title: {
        fontSize: 14,
        marginTop: 5
    },
    content: {
        lineHeight: 14,
        fontSize: 12,
        color: '#aaa',
        fontFamily: 'Avenir'
    }
})