import React from 'react';
import {View, StyleSheet} from 'react-native';

 const ListSeparator = () => {
     return(
         <View>
            <View style={styles.line} />
         </View>
     );
 };

 const styles = StyleSheet.create({
     line: {
        height: 0.5,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '16%',
     }
 });

 export default ListSeparator;