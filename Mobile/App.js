import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './src/views/Home';
import Task from './src/views/Task';

console.disableYellowBox = true;


const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  return <Routes />
}

