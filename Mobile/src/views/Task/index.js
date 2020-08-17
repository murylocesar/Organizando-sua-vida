import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, KeyboardAvoidingView, TouchableOpacity, Switch, TextInput, ActivityIndicator } from 'react-native';

import styles from './styles';

import * as Network from 'expo-network';

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInput from '../../components/DateTimeInput';

import TypeIcon from '../../utils/typdeIcons';
import iconClock from '../../assets/clock.png';

import api from './../../services/api';

import { format } from 'date-fns';

export default function Task({ navigation }) {

    const [id, setId] = useState(false);
    const [done, setDone] = useState(false);
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('0');

    const [load, setLoad] = useState(false);

    async function SaveTask() {
        if (!type) {
            return alert('Selecione o tipo da tarefas')
        }
        if (!title) {
            return alert('Digite o nome da tarefas')
        }
        if (!description) {
            return alert('Digite o detalhes da tarefas')
        }
        if (!date) {
            return alert('Digite a data da tarefas')
        }
        if (!hour) {
            return alert('Digite a hora da tarefas')
        }

        if (id) {
            await api.put(`/task/${id}`, {
                macaddress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => {
                navigation.navigate('Home');
            });
        } else {
            await api.post('/task', {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => {
                navigation.navigate('Home');
            });
        }

    }


    async function loadTask() {

        await api.get(`/task/${id}`).then(response => {
            setLoad(true);
            setDone(response.data.done);
            setType(response.data.type);
            setTitle(response.data.title);
            setDescription(response.data.description);
            // setDate(response.data.when);
            setHour(format(new Date(response.data.when), 'HH:mm'));
            setLoad(false);
        });
    }

    async function RemoveTask() {
        await api.delete(`/task/${id}`).then(() => {
            navigation.navigate('Home');
        });
    }

    async function Remove() {


        alert('Remover tarefa',
            'Deseja realmente remover essa tarefa?',
            [
                { text: 'Cancelar', },
                { text: 'Confirmar', onPress: () => RemoveTask()}
            ],
            { cancelable: true }
        )
    }

    useEffect(() => {
        if (navigation.state.params) {
            setId(navigation.state.params.idTask);
            loadTask().then(() => setLoad(false));
        }
    })
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={false} navigation={navigation} />

            {load ?
                <ActivityIndicator color={'#EE6b26'} size={50} />
                :
                <ScrollView style={{ width: '100%' }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
                        {
                            TypeIcon.map((icon, index) => (
                                icon != null &&
                                <TouchableOpacity onPress={() => setType(index)}>
                                    <Image source={icon} style={[styles.ImageIcon, type && type != index && styles.typeIconInative]} />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>

                    <Text style={styles.label}>Título</Text>
                    <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer..." onChangeText={(text) => setTitle(text)} value={title} />

                    <Text style={styles.label}>Detalhes</Text>
                    <TextInput style={styles.inputArea} maxLength={30} multiline={true} placeholder="Detalhes da atividade que eu tenho que lembrar" onChangeText={(text) => setDescription(text)} value={description} />

                    <DateTimeInput type={'date'} save={setDate} date={date} />

                    <TouchableOpacity >
                        <TextInput style={styles.input} placeholder={'Clique aqui para definir a hora'} editable={true} onChangeText={(text) => setHour(text)} value={hour} />

                        <Image style={styles.iconTextInput}
                            source={iconClock} />
                    </TouchableOpacity>

                    {id &&
                        <View View View style={styles.inLine}>
                            <View style={styles.inputInLine}>
                                <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#EE6B26'} />
                                <Text style={styles.switchLabel}>Concluído</Text>
                            </View>

                            <TouchableOpacity>
                                <Text style={styles.removeLabel}>EXCLUIR</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </ScrollView>
            }

            <Footer icon={'save'} onPress={SaveTask} />
        </KeyboardAvoidingView >
    )
}