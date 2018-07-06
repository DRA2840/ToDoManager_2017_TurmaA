import React from 'react'
import { AppRegistry, SafeAreaView } from 'react-native';
import { Routes } from './src/routes/Routes';
import { initFirebaseApi } from './src/services/FirebaseApi'

console.disableYellowBox = true

const routes = () => (
    <SafeAreaView style={{flex: 1}}>
        <Routes />
    </SafeAreaView>
)

AppRegistry.registerComponent('ToDoManager_TurmaA_2017',
    () =>{
        initFirebaseApi();
        return Routes;
    } 
);
