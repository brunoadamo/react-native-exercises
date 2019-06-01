import React from "react"
import { createDrawerNavigator } from 'react-navigation'
import Contador from './componentes/Contator'

//exercicios
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Plataformas from './componentes/Plataformas'
import Inverter, { MegaSena } from './componentes/Multi'

export default createDrawerNavigator({
    Plataformas:{ //tem toast no android e alert no iOS
        screen: Plataformas
    },
    Contador:{
        screen: () => <Contador numeroInicial={100} />,
    },
    MegaSena:{
        screen: () => <MegaSena numeros={8} />,
        navigationOption: { title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto='React Nativo' />,
    },
    ParImpar:{
        screen: () => <ParImpar numero={2} />,
        navigationOptgradle: { title: 'Par e Ímpar'}
    },
    Simples:{
        screen: () => <Simples texto='Flexivel' />,
        // screen: () => Simples, 
    }
}, { drawerWidth: 300 })