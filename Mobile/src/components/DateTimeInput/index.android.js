import React, { useState } from 'react';
import { Image, TouchableOpacity, DatePickerAndroid, TimePickerAndroid, TextInput } from 'react-native';
import styles from './styles';

import iconClock from '../../assets/clock.png';
import iconCalendar from '../../assets/calendar.png';

export default function DateTimeInputAndroid({ type }) {

    const [DateTime, setDateTime] = useState();

    async function selectDataOrHour() {
        if (type == 'date') {
            const { action, year, month, day } = await DatePickerAndroid.open({
                mode: 'calendar'
            });

            if (action == DatePickerAndroid.dateSetAction)
                setDateTime(`${day} - ${month} - ${year}`)

        } else {
            const { action, hour, minuto } = await DateTimePicker.open({
                is24Hour: true
            });

            if (action !== DateTimePicker.dismissedAction) {
                setDateTime(`${hour}:${minuto}`);
            }
        }
    }

    return (
        <TouchableOpacity onPress={selectDataOrHour}>
            <TextInput style={styles.input} placeholder={type == 'date' ? 'Clique aqui para definir a data' : 'Clique aqui para definir a hora'} editable={true} value={DateTime} />
            <Image style={styles.iconTextInput}
                source={type == 'date' ? iconCalendar : iconClock} />
        </TouchableOpacity>
    )
}