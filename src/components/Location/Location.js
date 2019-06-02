import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Card} from 'native-base';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
// import { platform } from 'os';
import {haversine} from 'haversine';

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

    onWatchPosition(){
        this.id = navigator.geolocation.watchPosition(
            position => {
                // Get the watched position 
                const {latitude, longitude} = position.coords;
                const watchedCoordinate = {latitude, longitude};
                // Destruct props from state
                const {coordinate, changingCoordinates, coveredDistance} = this.state
                (Platform.OS === 'android') ?
                this.marker._component.animateMarkerToCoordinate( watchedCoordinate, 200 ) 
                :
                coordinate.timing(watchedCoordinate).start();

                // Update the state
                this.setState({
                    longitude,
                    latitude,
                    changingCoordinates: changingCoordinates.concat([watchedCoordinate]),
                    coveredDistance: coveredDistance + this.getDistanceFromCoord(watchedCoordinate),
                    lastCoordinate: watchedCoordinate
                });
            },
            (error) => console.log(error),
            {enableHighAccuracy: true, timeout: 30000, maximumAge: 1500}
        );
    };
    getDistanceFromCoord = (coord) => {
        return haversine(this.state.lastCoordinate, coord) || 0;
    }
    render(){
        return (
            <Card>
                <MapView
                    loadingEnabled
                    followUserLocation
                    showUserLocation>
                    <Marker.Animated />
                </MapView>
            </Card>
        )
    }
}