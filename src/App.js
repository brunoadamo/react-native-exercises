import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native' 

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
//Inverter é default e o MegaSena é um componete interno da classe
import Inverter, { MegaSena } from './componentes/Multi'

export default class App extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Simples texto="Flexivel!"/>
				<ParImpar numero={12}/>
				<Inverter texto='React Nativo!'/>
				<MegaSena numeros={2}/>
			</View>
		)
  	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	f20: {
		fontSize: 40
	}
})