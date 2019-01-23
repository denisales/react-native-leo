import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default class App extends Component {
  render(){ // renderiza a tela
    return (
      <View style={styles.container}>
        <Simples texto="Flexivel!!!!"/>
        <ParImpar numero={30}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})