import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome="João" sobrenome="Silva"/>
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React nativo!'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!'/>
    }
}, {drawerWidth: 300})