import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// componentes
import Header from '../../components/Header';


export default function Home() {

    return (

        <View style={styles.container}>
            <Header
                showNotification={true}
                showBack={true}
            />
            <Text> Bem vindo à tela HOME</Text>
        </View>
    )
}