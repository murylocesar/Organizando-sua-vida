import React, { useState } from 'react';
import { Platforn  } from 'react-native';

import DateTimeInputAndroid from './index.android';
import DateTimeInputIOS from './index.ios';

export default function Index() {
    return (
        Platforn.OS == 'android'
            ?
            <DateTimeInputAndroid />
            :
            <DateTimeInputIOS />
    );
}