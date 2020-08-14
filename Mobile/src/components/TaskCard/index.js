import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles.js';

import iconDefault from '../../assets/default.png';
import bell from '../../assets/bell.png';
import back from '../../assets/back.png';
import qrcode from '../../assets/qrcode.png';


export default function TaskCard({ done }) {
    return (
        <TouchableOpacity style={[styles.taskCard, done && styles.CardDone]}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActive} className='Ok' />
                <Text style={styles.cardTitle}>Fazer Relatório</Text>

            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>17/12/2020</Text>

                <Text style={styles.cardTime}>10:00</Text>
            </View>
        </TouchableOpacity>
    )
}