import React from 'react';
import {View, UIManager, findNodeHandle, TouchableNativeFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

export default class CategoryPopUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            icon: null
        }
    }
    static propTypes = {
        actions: PropTypes.arrayOf(PropTypes.string).isRequired,
        onPress: PropTypes.func.isRequired
    }
    onError(){

    }
    onPress = () => {
       if(this.state.icon) {
            UIManager.showPopupMenu(
                findNodeHandle(this.state.icon),
                this.props.actions,
                this.onError,
                this.props.onPress
        )
    }
    }
    onRef = icon => {
        if(!this.state.icon){
            this.setState({icon})
        }
    }
    render(){
        return(
            <TouchableNativeFeedback
                useForeground
                onPress={this.onPress}
            >
                <Icon name='filter' type='font-awesome' color={'grey'}
                    ref={this.onRef} />
            </TouchableNativeFeedback>
        )
    }
}