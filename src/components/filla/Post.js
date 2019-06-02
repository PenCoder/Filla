import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import {Root, ActionSheet} from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';

// Filla Component

// Fillas
import fillaHub from '../../data/fillas'
import fillaCategories from '../../data/fillaCategories'
import SportsComponent from './SportsComponent';

// Filla Component


export default class Post extends React.Component{

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
        // const {navigate} = this.props;
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
                            // navigate={navigate}
                            />
                    )
                }
                </View>
            </ScrollView>
            </Root>
        )
    }
}

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