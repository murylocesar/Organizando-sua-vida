import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles.js';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import back from '../../assets/back.png';
import qrcode from '../../assets/qrcode.png';



export default function Header({ showNotification, showBack, clickNotification, pressNotification, late, navigation }) {
    function Back() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.header}>


            <TouchableOpacity style={styles.leftIcon} onPress={Back}>
                {showBack ?
                    <Image source={qrcode} style={styles.leftIconImage} />
                    :
                    <Image source={back} style={styles.leftIconImage} />
                }
            </TouchableOpacity>

            <Image source={logo} style={styles.logo} />



            {late &&
                showNotification &&
                <TouchableOpacity style={styles.notification} onPress={pressNotification}>
                    <Image source={bell} style={styles.notificationImage} />
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>{late}</Text>
                    </View>
                </TouchableOpacity>
            }

        </View>
    )
}