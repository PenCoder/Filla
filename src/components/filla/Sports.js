import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import {Root, Content, Body, ActionSheet, Button, Text, Icon, Card, Thumbnail, Row, Picker, Fab} from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';

// Filla Component

// Fillas
import fillaHub from '../../data/fillas'
import fillaCategories from '../../data/fillaCategories'
import SportsComponent from './SportsComponent';
import { createStackNavigator, withNavigation } from 'react-navigation';

// Filla Component


class Sports extends React.Component{

    state = {
        selected: 0,
        fabActive: false
    }
    // Category Picker Value Change
    onCategoryChange(value){
        this.setState({
            selected: value
        })
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
    render(){
        const {categories} = fillaCategories;
        const {navigate} = this.props.navigation;
        return (
            <Root>
            <ScrollView
                contentContainerStyle={styles.scroll}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View>
                {
                    fillaHub.map((filla, index) => 
                        <SportsComponent
                            filla={filla}
                            icon={categories.find(f => f.text == filla.cat)}
                            key={index}
                            navigate={navigate}
                            />
                    )
                }
                </View>
            </ScrollView>
            </Root>
        )
    }
}
// Sports Stack
const SportsStack = createStackNavigator(
    {
        Sports: {
            screen: Sports,
            navigationOptions: {header: null}
        }
    }
)

const styles = StyleSheet.create({
    scroll: {
        padding: 5
    },
    floatingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        opacity: 0.5
    },
    floatingButton: {
        // backgroundColor: '#26A69A',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SportsStack;

{/* <Picker
    mode="dropdown"
    iosHeader="category"
    selectedValue={this.state.selected}
    placeholder="Category"
    onValueChange={this.onCategoryChange.bind(this)}>
    {
        categories.map((cat, index) => {
            return (
                <Picker.Item value={index} key={index} label={cat}>
                    <Icon name="soccer"/>
                </Picker.Item>
            )
        })
    }
</Picker> */}