import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import styles from './styles';

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

import api from '../../services/api';

export default function Home() {

    const [filter, setFilter] = useState('today');
    const [task, setTask] = useState([]);
    const [load, setLoad] = useState(false);

    async function loadTask() {
        setLoad(true);

        await api.get(`/task/filter/${filter}/00:00:00:00:00:01`).then(response => {
            setTask(response.data)
            setLoad(false);
        });
    }
    useEffect(() => {
        loadTask();
    }, [filter])

    return (

        <View style={styles.container}>
            <Header
                showNotification={true}
                showBack={true}
            />
            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={
                        filter == 'all' ?
                            styles.filterTextActived
                            :
                            styles.filterTextInative
                    }>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={
                        filter == 'today' ?
                            styles.filterTextActived
                            :
                            styles.filterTextInative
                    }>Hoje</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={
                        filter == 'month' ?
                            styles.filterTextActived
                            :
                            styles.filterTextInative
                    }>Semana</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={
                        filter == 'week' ?
                            styles.filterTextActived
                            :
                            styles.filterTextInative
                    }>Mês</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={
                        filter == 'year' ?
                            styles.filterTextActived
                            :
                            styles.filterTextInative
                    }>Ano</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>

                {
                    load ?
                        <ActivityIndicator color={'#EE6b26'} size={50} />
                        :
                        task.map(t =>
                            (
                                < TaskCard done={false} title={t.title} when={t.when} />
                            ))
                }

            </ScrollView>

            <Footer
                icon={'add'}
            />
        </View >
    )
}