import {StyleSheet} from 'react-native';

const defaultStyles = StyleSheet.create({
    search: {
        backgroundColor: '#f4f4f4',
        borderRadius: 15,
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#aaa',
        paddingHorizontal: 5
    },
    mainHeaderText: {
        fontStyle: 'italic',
        fontSize: 24,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        lineHeight: 20
    },
    horizontal: {
        flexDirection: 'row'
    },
    subText: {
        fontStyle: 'italic',
        marginHorizontal: 5
    },
    linkText: {

    },
    transparent: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    translucent1: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: 2
    },
    contentText: {
        lineHeight: 20,
        fontFamily: 'Helvetica',
        fontSize: 18
    },
    evenSpacing: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default defaultStyles;