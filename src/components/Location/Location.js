import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Card} from 'native-base';

export default class Location extends React.Component {
    state = {
        latitude: 0,
        longitude: 0,
        changingCoordinates: [],
        coveredDistance: 0,
        lastCoordinate: {},
        coordinate: new AnimatedRegion({
            latitude: 0,
            longitude: 0
        })
    }
    componentDidMount() {
        this.id = navigator.geolocation.watchPosition(
            position => {
                
            }
        )
    }

    render(){
        return (
            <Card>
                
            </Card>
        )
    }
}