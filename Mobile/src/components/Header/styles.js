import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#20295f',
        borderBottomWidth: 10,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 120,
        height: 40
    },
    notification: {
        position: 'absolute',
        right: 20

    },
    notificationImage: {
        marginTop:20,
        width: 25,
        height: 35
    },
    circle: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        left: 13,
        bottom: 13,
        width: 20

    },

    leftIcon: {
        position: 'absolute',
        left: 20,
    },
    leftIconImage: {
        width: 35,
        height: 35
    },
});

export default styles;