// import React, {Component} from 'react'
// import {StyleSheet, Image} from 'react-native'
// import {Container, Card, Content, CardItem, Left, Body, Right, Thumbnail, Text} from 'native-base'

// // My Profile Data
// import Personal from '../data/myprofile'

// export default class MyProfile extends Component {
//     // state = {
//     //     profilePic: require('../data/pics/tiger-woods.jpg')
//     // }
//     render() {
//         return (
//             <Container>
//                 <Body style={styles.main}>
//                     <Image 
//                         style={styles.profilePic} 
//                         source={{uri: Personal.PP}}
//                         // source={Personal.PP}
//                         // source={require('../data/pics/tiger-woods.jpg')}
//                     />
//                     <Text>{Personal.Name}</Text>
//                 </Body>
//             </Container>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     card: {
//         marginLeft: 10,
//         marginRight: 10,
//         height: '100%'
//     },
//     main: {
//         flex: 1,
//         // justifyContent: 'center',
//         alignItems: 'center'
//     },
//     profilePic: {
//         height: 300,
//         width: 300,
//         flex: 1,
//         borderRadius: 10,
//         marginLeft: 5,
//         marginRight: 5
//     },
// })