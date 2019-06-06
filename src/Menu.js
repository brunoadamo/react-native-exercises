import React from "react"
import { createDrawerNavigator } from 'react-navigation'
import Contador from './componentes/Contator'

//exercicios
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import Inverter, { MegaSena } from './componentes/Multi'

export default createDrawerNavigator({
    TextoSincronizado:{ 
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo:{ 
        screen: () => <Avo nome="João" sobrenome="Silva"></Avo>,
    },
    Evento:{ //tem toast no android e alert no iOS
        screen: Evento,
    },
    ValidarProps:{ //tem toast no android e alert no iOS
        screen: () => <ValidarProps ano={18} />,
        navigationOptions: { title: 'Validar Propriedades'}
    },
    Plataformas:{ //tem toast no android e alert no iOS
        screen: Plataformas
    },
    Contador:{
        screen: () => <Contador numeroInicial={100} />,
    },
    MegaSena:{
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto='React Nativo' />,
    },
    ParImpar:{
        screen: () => <ParImpar numero={2} />,
        navigationOptions: { title: 'Par e Ímpar'}
    },
    Simples:{
        screen: () => <Simples texto='Flexivel' />,
        // screen: () => Simples, 
    }
}, { drawerWidth: 300 })