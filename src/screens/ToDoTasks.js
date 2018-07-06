import React, {Component} from 'react'
import {Image, StyleSheet, View} from 'react-native'

const imgCheckList = require('../assets/checklist.png')

export default class ToDoClass extends Component{

    static navigationOptions = {
        tabBarLabel: 'To Do',
        tabBarIcon: ({tintColor}) => (
            <Image source={imgCheckList}
                style={[style.icon, {tintColor}]} />
        ),
        header: null
    }

    render(){
        return (
            <View style={style.conteiner} />
        )
    }
}

const style = StyleSheet.create({
    
    conteiner:{
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    },

    icon: {
        width: 26,
        height: 26
    },
    
    img: {
        width: 50,
        height: 50
    }
})