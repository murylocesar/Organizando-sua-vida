import React, { useState } from 'react';
import { Image, TouchableOpacity, DatePickerAndroid, TimePickerAndroid, TextInput, DatePickerIOS } from 'react-native';

import styles from './styles';

import iconClock from '../../assets/clock.png';
import iconCalendar from '../../assets/calendar.png';

export default function ({ type }) {

    const [DateTime, setDateTime] = useState(new Date);

    async function selectDataOrHour() {
        if (type == 'date') {
            const { action, year, month, day } = await DatePickerAndroid.open({
                mode: 'calendar'
            });

            if (action == DatePickerAndroid.dateSetAction)
                setDateTime(`${day} - ${month} - ${year}`)

        } else {
            const { action, hour, minuto } = TimePickerAndroid.open({
                is24Hour: true
            });

            if (action == TimePickerAndroid.dismissedAction)
                setDateTime(`${hour}:${minuto}`)
        }
    }

    return (
        <TouchableOpacity style={styles.input}>
            <DatePickerIOS
                date={DateTime}
                mode={type}
                minimumDate={new Date}
                onDateChange={setDateTime}/>

            <Image style={styles.iconTextInput}
                source={type == 'date' ? iconCalendar : iconClock} />
        </TouchableOpacity>
    )
}