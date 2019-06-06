import React, {Component} from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {

    state = {
        //nao controlado
        // texto: null
        //ambiente controlado
        texto: ''
    }

    alterarTexto = texto => {
        //se não fossem do mesmo nome
        // this.setState({ texto: texto})
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                
                <Text style={Padrao.font40}>{this.state.texto}</Text>

                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}>
                </TextInput>
            </View>
        )
    }

}