// import React, {Component} from 'react';
// import {StyleSheet } from 'react-native';
// import {Container, StyleProvider, Header, Left, Thumbnail, Text, Right} from 'native-base'

// import getTheme from '../../native-base-theme/components';
// import material from '../../native-base-theme/variables/material'

// // Import Custom Component
// import Loading from '../components/Loading'
// import Site from '../components/Site'


// export default class MainView extends Component {
//     // Class Constructor
//     constructor(props){
//         super(props);
//     };
//     state = {
//         isLoading: false
//     };

//     // Render Method
//     render() {
//         const {isLoading} = this.state;
//         const {navigate} = this.props.navigation;
//         return (
//             <StyleProvider style={getTheme(material)}>
//                 {
//                     isLoading ?
//                     <Loading />
//                     :
//                     <Container>
//                         <Site navigate={navigate}/>
//                     </Container>
//                 }
//             </StyleProvider>
//         )
//     }
// };

// // Styles to apply to components
// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
        
//     }
// })