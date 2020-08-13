import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Home() {

    return (

        <View style={styles.container}>
            <Header
                showNotification={true}
                showBack={true}
            /> 
            <Footer
                icon={'add'}
            />
            <Text> Bem vindo à tela HOME</Text>
        </View>
    )
}