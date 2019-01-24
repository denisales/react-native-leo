import React from 'react'
import {Button, View, Alert, ToastAndroid, Platform} from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }else {
            Alert.alert('Informação', msg)
        }
    }
    return(
       <View style={{marginTop: 30}}>
            <Button color="#ff0000" title='Plataforma?' onPress={() => notificar('Parabéns!')}/>
       </View>
    )
}