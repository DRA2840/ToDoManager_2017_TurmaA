import { AppRegistry } from 'react-native';
import { Routes } from './src/routes/Routes';
import { initFirebaseApi } from './src/services/FirebaseApi'

AppRegistry.registerComponent('ToDoManager_TurmaA_2017',
    () =>{
        initFirebaseApi();
        return Routes
    } 
);
