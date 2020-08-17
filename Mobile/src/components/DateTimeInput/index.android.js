import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, DatePickerAndroid, TimePickerAndroid, TextInput } from 'react-native';
import styles from './styles';

import iconClock from '../../assets/clock.png';
import iconCalendar from '../../assets/calendar.png';
import { format } from 'date-fns';

export default function DateTimeInputAndroid({ type, save, date }) {

    const [DateTime, setDateTime] = useState();
    useEffect(() => {
        if (type == 'date' && date) {
            setDateTime(format(new Date(date), 'dd/MM/yyyy'));
            save(format(new Date(date), 'yyyy-MM-dd'));
        }
    }, [])

    async function selectDataOrHour() {
        if (type == 'date') {
            const { action, year, month, day } = await DatePickerAndroid.open({
                mode: 'calendar'
            });

            if (action == DatePickerAndroid.dateSetAction) {
                setDateTime(`${day} - ${month} - ${year}`);
                save(format(new Date(year, month, day), 'yyy-MM-dd'));
            }
        }
    }

    return (
        <TouchableOpacity onPress={selectDataOrHour}>
            <TextInput style={styles.input} placeholder={type == 'date' ? 'Clique aqui para definir a data' : 'Clique aqui para definir a hora'} editable={false} value={DateTime} />
            <Image style={styles.iconTextInput}
                source={type == 'date' ? iconCalendar : iconClock} />
        </TouchableOpacity>
    )
}