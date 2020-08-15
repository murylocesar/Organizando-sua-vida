import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import styles from './styles.js';

import typeIcon from '../../utils/typdeIcons';

export default function TaskCard({ done, title, when,type }) {
    return (
        <TouchableOpacity style={[styles.taskCard, done && styles.CardDone]}>
            <View style={styles.cardLeft}>
                <Image source={typeIcon[type]} style={styles.typeActive} className='Ok' />
                <Text style={styles.cardTitle}>{title}</Text>

            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(when), 'dd/MM/yyyy')}</Text>

                <Text style={styles.cardTime}>{format(new Date(when), 'HH:mm')}</Text>
            </View>
        </TouchableOpacity>
    )
}